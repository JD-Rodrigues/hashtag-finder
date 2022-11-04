import styles from "./styles.module.css"

export const Header = () => {
  return(
    <header className={styles.header}>
          <div className={styles.title}>
            <p className={styles.hashtagfinder}>hashtag<b className={styles.finder}>finder</b></p>
          </div>
          <div className={styles.home}>
            <button className={styles.home__button}><img className={styles.home__icon} src={homeIcon} alt=""></img>HOME</button>
          </div>
    </header>
  )
}