import React from 'react'
import styles from "./about.module.css"
import ilustration from '/public/images/icons/about-ilustration.svg'
import logo from '/public/images/icons/logo.svg'
import about from '/public/images/backgrounds/about-hero-bg.jpg'
// import { FaInfoCircle } from 'react-icons/fa'
// import { FaUserAlt } from 'react-icons/fa'
import git from '/public/images/icons/icon-github.svg'
import email from '/public/images/icons/icon-envelope.svg'
import linkedin from '/public/images/icons/icon-awesome-linkedin.svg'



export const About = () => {
  
  return(
    <div>
      < div className={styles.header__about}>
        <div className={styles.header__logo}>
          <div className={styles.logo} >
            <img className={styles.logo} src={logo} alt="" />
          </div>
        </div>
        <div className={styles.box__btn} >
          <button type='button' id={styles.btn__sobre} > <FaInfoCircle/> SOBRE </button>
          <button type='button' id={styles.btn__login} > <FaUserAlt/> LOGIN </button>
        </div>
      </div>
      <div className={styles.box__fist__section}>
        <div className={styles.fist__section} >
          <div className={styles.text__box} >
            <h1 className={styles.text__title} >Sobre o projeto</h1>
            <p className={styles.text__about} >
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
            eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
            voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
            amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam 
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed 
            diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
              clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
              eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam</p>
          </div>
          
          <div className={styles.img__decor} > 
            <img src={ilustration} alt="" />
          </div>  
        </div>
      </div>
      <div className={styles.second__section} > 
        <div className={styles.cards__container} >  
          <h1 className={styles.cards__tittle} > Quem somos </h1>  

            <div className={styles.cards__list} > 
              
              <div className={styles.cards} >
                <div className={styles.card__pic01} ></div>
                <h2 className={styles.card__name} >Bruno Ferreira</h2>
                <p className={styles.card__text} >
                Dev front-end | Html | Css | JavaScript | React | TypeScript | NextJs | Designer | UX / UI |
                </p>
                <div className={styles.icons__list}>
                  <img src={git} className={styles.icons__git} ></img>
                  <img src={email} className={styles.icons__mail} ></img>
                  <img src={linkedin} className={styles.icons__linkedin} ></img>
                </div>
              </div>  
            

            
              <div className={styles.cards} >
                <div className={styles.card__pic02} ></div>
                <h2 className={styles.card__name} >Nome Sobrenome</h2>
                <p className={styles.card__text} >
                  Lorem ipsum dolor sit amet, consetetur sadipscing 
                  elitr, sed diam nonumy eirmod
                  </p>
                <div className={styles.icons__list}>
                  <img src={git} className={styles.icons__git} ></img>
                  <img src={email} className={styles.icons__mail} ></img>
                  <img src={linkedin} className={styles.icons__linkedin} ></img>
                </div>
              </div>  
            

            
              <div className={styles.cards} >
                <div className={styles.card__pic03} ></div>
                <h2 className={styles.card__name} >Domingos Rodrigues</h2>
                <p className={styles.card__text} >
                Desenvolvedor web front-end | React | NextJs | TypeScript |
                </p>
                <div className={styles.icons__list}>
                  <img src={git} className={styles.icons__git} ></img>
                  <img src={email} className={styles.icons__mail} ></img>
                  <img src={linkedin} className={styles.icons__linkedin} ></img>
                </div>
              </div>  
            
          
            
              <div className={styles.cards} >
                <div className={styles.card__pic04} ></div>
                <h2 className={styles.card__name} >Julio Gabriel </h2>
                <p className={styles.card__text} >
                Desenvolvedor Front-end & Designer UX/UI
                </p>
                <div className={styles.icons__list}>
                  <img src={git} className={styles.icons__git} ></img>
                  <img src={email} className={styles.icons__mail} ></img>
                  <img src={linkedin} className={styles.icons__linkedin} ></img>
                </div>
              </div>  
            </div>
          

        </div>
        
      </div>

      
    </div>
  )
}
