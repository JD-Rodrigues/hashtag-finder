import styles from './styles.module.css'

export const TweetCard = () => {
  return(
    <div className={styles.card}>
      <img src="https://static-cse.canva.com/blob/951362/1600w-EW4cggXkgbc.jpg" alt="" />
      <div className={styles.tweet}>
        <header className={styles.header}>Username <span className={styles.user}>@twitterusername</span></header>
        <p className={styles.tweet__text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat...</p>
        <footer className={styles.footer}>
          <a 
            href="" 
            className={styles.link__to__twitter}
          >
            Ver mais no Twitter
          </a>
        </footer>
      </div>
    </div>
  )
}