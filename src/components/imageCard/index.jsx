import styles from './styles.module.css'

export const ImageCard = () => {
  return(
    <div className={styles.card} style={{backgroundImage: `url('https://images.pexels.com/photos/749090/pexels-photo-749090.jpeg?cs=srgb&dl=pexels-min-an-749090.jpg&fm=jpg')`}}>
      <p>Postado por:</p>
      <p className={styles.username}>@twitterusername</p>
    </div>
  )
}