import React, { useState } from 'react'

import styles from "./about.module.css"
import ilustration from '/public/images/icons/about-ilustration.svg'
//import logo from '/images/icons/logo.svg'
// import userIcon from '/images/icons/icon-user-alt.svg'
//import infoIcon from '/images/icons/icon-info-circle.svg'
import git from '/public/images/icons/icon-github.svg'
import email from '/public/images/icons/icon-envelope.svg'
import linkedin from '/public/images/icons/icon-awesome-linkedin.svg'
import { time } from '../../services'
import { useEffect } from 'react'
 



export const About = () => {
  
  const [texto, setTexto] = useState("");

  useEffect(() => {
    fetch(
      "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Projeto?filterByFormula=" +
        encodeURI(`({Squad} = '08-22')`),
      {
        method: "GET",
        headers: {
          Authorization: 'Bearer keyz8BAZKCTGY5dB1',
        },
      }
    )
      .then((res) => res.json())
      .then((response) => {
        setTexto(response.records[0].fields.Sobre);
      })
      .catch((erro) => console.log(erro));
      
    }, []);



  return(
    <div>
      <div className={styles.box__fist__section}>
        <div className={styles.fist__section} >
          <div className={styles.text__box} >
            <h1 className={styles.text__title} >Sobre o projeto</h1>
            <p className={styles.text__about} >
            
              {
                texto
              }

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

            <div className={styles.cards__list}> 
              
              <div className={styles.cards} >
                <div id='card__pic' className={styles.card__pic01} ></div>
                <h2 className={styles.card__name} >{time[0].Nome}</h2>
                <p className={styles.card__text} >
                  {time[0].Descrição}
                </p>
                <div className={styles.icons__list}>
                  <a href={time[0].Github} target='_blank' >
                  <img src={git} className={styles.icons__git} ></img>
                  </a>
                  <a href={`mailto:${time[0].Email}`} target='_blank' >
                  <img src={email} className={styles.icons__mail} ></img>
                  
                  </a>
                  <a href={time[0].LinkedIn} target='_blank' >
                  <img src={linkedin} className={styles.icons__linkedin} ></img>
                  </a>
                </div>
              </div>             
              <div className={styles.cards} >
                <div className={styles.card__pic02} ></div>
                <h2 className={styles.card__name} > {time[1].Nome} </h2>
                <p className={styles.card__text} >
                  {time[1].Descrição}
                </p>
                <div className={styles.icons__list}>
                <a href={time[1].Github} target='_blank' >
                  <img src={git} className={styles.icons__git} ></img>
                  </a>
                  <a href={time[1].Email} target='_blank' >
                  <img src={email} className={styles.icons__mail} ></img>
                  </a>
                  <a href={time[1].LinkedIn} target='_blank' >
                  <img src={linkedin} className={styles.icons__linkedin} ></img>
                  </a>
                </div>
              </div>  
              <div className={styles.cards} >
                <div className={styles.card__pic03} ></div>
                <h2 className={styles.card__name} >{time[2].Nome}</h2>
                <p className={styles.card__text} >
                  {time[2].Descrição}
                </p>
                <div className={styles.icons__list}>
                <a href={time[2].Github} target='_blank' >
                  <img src={git} className={styles.icons__git} ></img>
                  </a>
                  <a href={time[2].Email} target='_blank' >
                  <img src={email} className={styles.icons__mail} ></img>
                  </a>
                  <a href={time[2].LinkedIn} target='_blank' >
                  <img src={linkedin} className={styles.icons__linkedin} ></img>
                  </a>
                </div>
              </div>  
              <div className={styles.cards} >
                <div className={styles.card__pic04} ></div>
                <h2 className={styles.card__name} >{time[3].Nome}</h2>
                <p className={styles.card__text} >
                  {time[3].Descrição}
                </p>
                <div className={styles.icons__list}>
                <a href={time[3].Github} target='_blank' >
                  <img src={git} className={styles.icons__git} ></img>
                  </a>
                  <a href={time[3].Email} target='_blank' >
                  <img src={email} className={styles.icons__mail} ></img>
                  </a>
                  <a href={time[3].LinkedIn} target='_blank' >
                  <img src={linkedin} className={styles.icons__linkedin} ></img>
                  </a>
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


<!-- <a href={time[0].Email} target='_blank' >
      




      */
     
     
      