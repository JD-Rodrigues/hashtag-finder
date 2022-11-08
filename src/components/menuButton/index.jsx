import styles from "./styles.module.css";


export const MenuButton = ({text, icon, color}) => {
  return(
    <button className={`${styles.home__button} ${color === 'contrast' && styles.contrast}`}><img className={styles.home__icon} src={icon} alt=""></img>{text}</button>
  )
}