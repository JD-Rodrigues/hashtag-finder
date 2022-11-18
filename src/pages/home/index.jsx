import { FirstSection } from "../../components/firstSection"
import styles from "./styles.module.css"
import searchIcon from "../../../public/images/icons/icon-search.svg"
import { useEffect, useState } from "react"
import { TweetCard } from "../../components/tweetCard"
import { ImageCard } from "../../components/imageCard"
import { getLastTweets, recordSearches, searchValidation } from "../../services/index.js"

export const Home = () => {

  const [resultTab, setResultTab] = useState('tweets')
  const [search, setSearch] = useState('')
  const [galeryMargin, setGaleryMargin] = useState(0)
  
  const handleSearch = (e) => {
    setSearch(e.target.value)    
  }

 getLastTweets().then(console.log)
  

  window.addEventListener('scroll', console.log(galeryMargin))
  const submitSearch = (e) => {
    e.preventDefault()
    if(searchValidation(search.replace('#',''))){
      recordSearches(search.replace('#','')) 
    }

    document.querySelector('form').reset()   
    
  }

  
  const watchResize = () => {
    window.innerWidth > 899 ? setResultTab('both'): setResultTab('tweets')
  }
  
  useEffect(()=>{
    watchResize()
    window.addEventListener('resize', watchResize)

    return () => {
      window.removeEventListener('resize', watchResize)
    }
    
  },[])

  useEffect(()=> {

  })

  
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
            {` #natureza`}
          </span>
        </p>  
        <div className={styles.result__tabs}>
          <div onClick={()=> setResultTab('tweets')} className={resultTab === 'tweets' ? styles.active__tab : styles.tab__tweets}>Tweets</div>
          <div onClick={()=> setResultTab('images')}  className={resultTab === 'images' ? styles.active__tab : styles.tab__images}>Imagens</div>
        </div>
        { 
          
          resultTab === 'tweets' 
          && 
            <div className={styles.result__tweets}>
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
            </div>
        }

        {
         resultTab === 'images' &&
          <div className={styles.slide__image__wrapper}>
            <div className={styles.image__slide__panel}>
              <div onClick={()=>setGaleryMargin(galeryMargin < 0 ? galeryMargin + 51 : 0)} className={`${styles.slide__button} ${styles.slide__button__left}`}></div>
              <div onClick={()=>setGaleryMargin(galeryMargin > -153 ? galeryMargin - 51 : -153)} className={`${styles.slide__button} ${styles.slide__button__right}`}></div>
            </div>
            <div className={styles.result__images} style={{left: `${galeryMargin}%`}}>
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
            </div>
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
              <div className={styles.result__images} style={{left: `${galeryMargin}%`}}>
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
                <ImageCard />
              </div>
            </div>
            <div className={styles.result__tweets}>
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
              <TweetCard />
            </div>
          </div>
        }
        
      </section>
    </div>
  )
}