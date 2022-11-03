import { FirstSection } from "../../components/firstSection"
import { Footer } from "../../components/footer"
import styles from "./styles.module.css"

export const Home = () => {

  return(
    <div className={styles.main}>
      <FirstSection>
        <h1>Página inicial</h1>
      </FirstSection>
    </div>
  )
}