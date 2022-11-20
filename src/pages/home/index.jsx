import { FirstSection } from "../../components/firstSection"
import styles from "./styles.module.css"
import searchIcon from "../../../public/images/icons/icon-search.svg"
import { useEffect, useState } from "react"
import { TweetCard } from "../../components/tweetCard"
import { ImageCard } from "../../components/imageCard"
import { fetchLastTweetsImages, recordSearches, searchValidation } from '../../services';



export const Home = () => {

  const [resultTab, setResultTab] = useState('tweets')
  const [search, setSearch] = useState('Brasil')
  const [galeryMargin, setGaleryMargin] = useState(0)
  const [tweetResults, setTweetResults] = useState([])
  const [imageResults, setImageResults] = useState([])
  
  
  
  
  const handleSearch = (e) => {
    setSearch(e.target.value.replace(/[^a-zA-Z0-9]/g, '')) 
  }
 
  const submitSearch = (e) => {
    e.preventDefault()
    if(searchValidation(search) === true){
      recordSearches(search)
      getResults(search)
      setGaleryMargin(0)   
    }

    document.querySelector('form').reset()   
    
  }

  const getResults = async (hashtag) => {
    const results = await fetchLastTweetsImages(hashtag)
    const tweets = []
    const images = []
    
    for(let r in results.data) {
      if(results.includes.media[r].type === 'photo') {
        tweets.push(
          <li key={ results.data[r].id}>
            <TweetCard 
              profilePic = { results.includes.users[r].profile_image_url}
              username = { results.includes.users[r].username}
              text = { results.data[r].text}
              id = { results.data[r].id}
            />
          </li>
        )

        images.push(
          <li key={ results.data[r].id}>
            <ImageCard
              image = { await results.includes.media[r].url} 
              username = { results.includes.users[r].username}
              id = { results.data[r].id}
            />
          </li>
        )
      }
    }
    

    setTweetResults(tweets)
    setImageResults(images)
    setSearch('')
  }

  
  const watchSize = () => {
    window.innerWidth > 899 ? setResultTab('both'): setResultTab('tweets')
  }
  
  useEffect(()=>{
    watchSize()
    window.addEventListener('resize', watchSize)
    
    getResults(search)
    
    
    return () => {
      window.removeEventListener('resize', watchSize)
    }
    
  },[])


  
  return(
    <div className={styles.main}>
      <FirstSection>
        <div className={styles.search__section}>
          <div className={styles.search__section__text}>
            <h1 className={styles.title}>Encontre hashtags de maneira fácil.</h1>
            <p className={styles.description}>Digite o que deseja no campo de buscas e confira os resultados do Twitter abaixo.</p>
          </div>
          <div className={styles.search__wrapper}>
            <img src={searchIcon} className={styles.search__icon} alt="" />
            <form className={styles.form__search} onSubmit={submitSearch} action="">
              <input className={styles.search} type="text" placeholder="Buscar..." onChange={handleSearch} />
            </form>
          </div>
        </div>
      </FirstSection>
      <section className={styles.search__result}>
        <p className={styles.result__subtitle}>
          Exibindo os 10 resultados mais recentes para 
          <span> 
            
          </span>
        </p>  
        <div className={styles.result__tabs}>
          <div onClick={()=> setResultTab('tweets')} className={resultTab === 'tweets' ? styles.active__tab : styles.tab__tweets}>Tweets</div>
          <div onClick={()=> setResultTab('images')}  className={resultTab === 'images' ? styles.active__tab : styles.tab__images}>Imagens</div>
        </div>
        { 
          
          resultTab === 'tweets' 
          && 
            <ul className={styles.result__tweets}>
              {tweetResults}
            </ul>
        }

        {
         resultTab === 'images' &&
          <div className={styles.slide__image__wrapper}>
            <div className={styles.image__slide__panel}>
              <div onClick={()=>setGaleryMargin(galeryMargin < 0 ? galeryMargin + 51 : 0)} className={`${styles.slide__button} ${styles.slide__button__left}`}></div>
              <div onClick={()=>setGaleryMargin(galeryMargin > -153 ? galeryMargin - 51 : -153)} className={`${styles.slide__button} ${styles.slide__button__right}`}></div>
            </div>
            <ul className={styles.result__images} style={{left: `${galeryMargin}%`}}>
              {imageResults} 
            </ul>
          </div>           
        }
          
        {
          resultTab === 'both' &&
          <div className={styles.result__wrapper}>
            <div className={styles.slide__image__wrapper}>
              <div className={styles.image__slide__panel}>
                <div onClick={()=>setGaleryMargin(galeryMargin < 0 ? galeryMargin + 51 : 0)} className={`${styles.slide__button} ${styles.slide__button__left}`}></div>
                <div onClick={()=>setGaleryMargin(galeryMargin > -153 ? galeryMargin - 51 : -153)} className={`${styles.slide__button} ${styles.slide__button__right}`}></div>
              </div>
              <ul 
                className={styles.result__images} 
                style={{left: `${galeryMargin}%`}}
              >
               {imageResults} 
              </ul>
            </div>
            <ul className={styles.result__tweets}>
              {tweetResults}         
            </ul>
          </div>
        }
        
      </section>
    </div>
  )
}