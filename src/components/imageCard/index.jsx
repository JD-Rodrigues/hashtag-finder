import styles from './styles.module.css'

export const ImageCard = () => {
  return(
    <div className={styles.card} >
      <img src='https://images.pexels.com/photos/749090/pexels-photo-749090.jpeg'></img>
      <p className={styles.post__info}>Postado por:</p>
      <p className={`${styles.username} ${styles.post__info}`}>@twitterusername</p>
    </div>
  )
}

