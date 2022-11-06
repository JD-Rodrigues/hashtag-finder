import styles from "./styles.module.css";
import homeIcon from '../../../public/images/icons/icon-home.svg';
import logo from '../../../public/images/icons/logo.svg';

export const Header = () => {
  return(
    <header className={styles.header}>
          <div className={styles.title}>
            <img src={logo} alt='logo' className={styles.title} />
          </div>
          <div className={styles.home}>
            <button className={styles.home__button}><img className={styles.home__icon} src={homeIcon} alt=""></img>HOME</button>
          </div>
    </header>
  )
}