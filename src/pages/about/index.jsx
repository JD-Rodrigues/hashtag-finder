import React, { Component } from 'react'
import styles from "./about.module.css"
import aboutTextBlock from "../../services/index.js"




import ilustration from '/public/images/icons/about-ilustration.svg'
import logo from '/images/icons/logo.svg'
//import userIcon from '/images/icons/icon-user-alt.svg'
//import infoIcon from '/images/icons/icon-info-circle.svg'
import git from '/public/images/icons/icon-github.svg'
import email from '/public/images/icons/icon-envelope.svg'
import linkedin from '/public/images/icons/icon-awesome-linkedin.svg'
import { teste, time } from '../../services'


const aboutBlock = () => {
  return(aboutTextBlock())
}




export const About = () => {
  
  return(
    <div>
      




      <div className={styles.box__fist__section}>
        <div className={styles.fist__section} >
          <div className={styles.text__box} >
            <h1 className={styles.text__title} >Sobre o projeto</h1>
            <p className={styles.text__about} >
             
                {aboutBlock} 
             
            </p>
          </div>
          
          <div className={styles.img__decor} > 
            <img className={styles.img__decor__frame} src={ilustration} alt="" />
          </div>  
        </div>
      </div>
      <div className={styles.second__section} > 
        <div className={styles.cards__container} >  
          <h1 className={styles.cards__tittle} > Quem somos </h1>  

            <div className={styles.cards__list} > 
              
              <div className={styles.cards} >
                <div id='card__pic' className={styles.card__pic01} ></div>
                <h2 className={styles.card__name} >{time[1].Nome}</h2>
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
                <h2 className={styles.card__name} > Eliel Silva </h2>
                <p className={styles.card__text} >
                19 anos, Desenvolvedor web front-end em formação
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



/* 

< div className={styles.header__about}>
        <div className={styles.header__logo}>
          <div className={styles.logo} >
            <img className={styles.logo} src={logo} alt="" />
          </div>
        </div>
        <div className={styles.box__btn} >
          <button type='button' id={styles.btn__sobre} > 
          <img className={styles.info__icon} 
          src={infoIcon} alt=""></img> SOBRE </button>
          <button type='button' id={styles.btn__login} > 
          <img className={styles.user__icon} 
          src={userIcon} alt=""></img> LOGIN </button>
        </div>    
      </div>

      */