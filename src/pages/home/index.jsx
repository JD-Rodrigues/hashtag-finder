import { FirstSection } from "../../components/firstSection"
import { Footer } from "../../components/footer"
import styles from "./styles.module.css"
import searchIcon from "../../../public/images/icons/icon-search.svg"
import { useEffect, useState } from "react"
import { TweetCard } from "../../components/tweetCard"
import { ImageCard } from "../../components/imageCard"



export const Home = () => {
  const [resultTab, setResultTab] = useState('tweets')

  
  const watchResize = () => {
    window.innerWidth > 899 ? setResultTab('both'): setResultTab('tweets')
  }
  
  useEffect(()=>{
    window.addEventListener('resize', watchResize)
    return () => {
      window.removeEventListener('resize', watchResize)
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
            <form className={styles.form__search} action="">
              <input className={styles.search} type="search" placeholder="Buscar..." />
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
          <div className={styles.result__images}>
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
        }
          
        {
          resultTab === 'both' &&
          <div className={styles.result__wrapper}>
            <div className={styles.result__images}>
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