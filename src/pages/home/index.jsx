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
            <img src={searchIcon} alt="" />
            <form action="">
              <input type="search" placeholder="Buscar..." />
            </form>
          </div>
        </div>
      </FirstSection>
    </div>
  )
}