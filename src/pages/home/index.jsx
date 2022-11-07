import { FirstSection } from "../../components/firstSection"
import { Footer } from "../../components/footer"
import styles from "./styles.module.css"
import searchIcon from "../../../public/images/icons/icon-search.svg"
import { useState } from "react"
import { TweetCard } from "../../components/tweetCard"


export const Home = () => {
  const [resultTab, setResultTab] = useState('Tweets')
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
          <div className={resultTab === 'Tweets' ? styles.active__tab : styles.tab__tweets}>Tweets</div>
          <div className={resultTab === 'Images' ? styles.active__tab : styles.tab__images}>Imagens</div>
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
        
      </section>
    </div>
  )
}