import { FirstSection } from "../../components/firstSection"
import { Footer } from "../../components/footer"
import styles from "./styles.module.css"
import searchIcon from "../../../public/images/icons/icon-search.svg"


export const Home = () => {

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
            <form action="">
              <input className={styles.search} type="search" placeholder="Buscar..." />
            </form>
          </div>
          {/* <p className={styles.results__subtitle}>
              Exibindo os 10 resultados mais recentes para 
              <span> 
                {` #natureza`}
              </span>
          </p> */}
        </div>
      </FirstSection>
    </div>
  )
}