import styles from './styles.module.css'

export const ImageCard = ({image, username, authorId}) => {
  return(
    <div className={styles.card} >
      <img src={image}></img>
      <p className={styles.post__info}>Postado por:</p>
      <p className={`${styles.username} ${styles.post__info}`}>
        <a 
          target='_blank'
          href={`https://twitter.com/${authorId}`} 
        >
          {username}
        </a>
      </p>
    </div>
  )
}

