import React from 'react'
import styles from "./about.module.css"


export const About = () => {
  
  return(
    <div>
      < div className={styles.header__about}>
        <div className={styles.header__logo}>
          <div className={styles.logo} ></div>
        </div>
        <div className={styles.box__btn} >
          <button className={styles.btn__sobre} >SOBRE</button>
          <button className={styles.btn__login} >LOGIN</button>
        </div>
      </div>
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
        
        <div className={styles.img__decor} ></div>
      </div>
      
      <div className={styles.second__section} > 
        
        
        <div className={styles.cards__list} > 

          <h1 className={styles.cards__tittle} > Quem somos </h1>
          <div className={styles.cards} >
            <div className={styles.card__pic} ></div>
            <h2 className={styles.card__name} >Nome Sobrenome</h2>
            <p className={styles.card__text} >
            Lorem ipsum dolor sit amet, consetetur sadipscing 
              elitr, sed diam nonumy eirmod
            </p>
            <div className={styles.icons__list}>
              <div className={styles.icons__git} ></div>
              <div className={styles.icons__mail} ></div>
              <div className={styles.icons__linkedin} ></div>
            </div>
          </div>  
        

        
          <div className={styles.cards} >
            <div className={styles.card__pic} ></div>
            <h2 className={styles.card__name} >Nome Sobrenome</h2>
            <p className={styles.card__text} >
              Lorem ipsum dolor sit amet, consetetur sadipscing 
              elitr, sed diam nonumy eirmod
              </p>
            <div className={styles.icons__list}>
              <div className={styles.icons__git} ></div>
              <div className={styles.icons__mail} ></div>
              <div className={styles.icons__linkedin} ></div>
            </div>
          </div>  
        

        
          <div className={styles.cards} >
            <div className={styles.card__pic} ></div>
            <h2 className={styles.card__name} >Nome Sobrenome</h2>
            <p className={styles.card__text} >
            Lorem ipsum dolor sit amet, consetetur sadipscing 
              elitr, sed diam nonumy eirmod
            </p>
            <div className={styles.icons__list}>
              <div className={styles.icons__git} ></div>
              <div className={styles.icons__mail} ></div>
              <div className={styles.icons__linkedin} ></div>
            </div>
          </div>  
        
      
         
          <div className={styles.cards} >
            <div className={styles.card__pic} ></div>
            <h2 className={styles.card__name} >Nome Sobrenome</h2>
            <p className={styles.card__text} >
            Lorem ipsum dolor sit amet, consetetur sadipscing 
              elitr, sed diam nonumy eirmod
            </p>
            <div className={styles.icons__list}>
              <div className={styles.icons__git} ></div>
              <div className={styles.icons__mail} ></div>
              <div className={styles.icons__linkedin} ></div>
            </div>
          </div>  
        </div>
      

      </div>
      
      

      
    </div>
  )
}
