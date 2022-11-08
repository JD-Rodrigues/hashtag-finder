import styles from './login.module.css';
import { FirstSection } from "../../components/firstSection"
import { useState } from 'react';

export const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
 
  return(
    <FirstSection>
      <div className={styles.container}>
        <form className={styles.login__form}>
            <h1 className={styles.login__form__title}>Login</h1>
            <div className={styles.inputs__area}>
              <input 
                className={user !== "" ? styles.has__value : styles.input}
                type="text"
                value={user}
                onChange={e => setUser(e.target.value)}
                autocomplete="off"
              />
              <span className={styles.focus__input} data-placeholder="Usuário"></span>
            </div>
            <div className={styles.inputs__area}>
              <input
                className={password !== "" ? styles.has__value : styles.input}
                type="password" 
                value={password}
                onChange={e => setPassword(e.target.value)}
                autocomplete="off"
              />
              <span className={styles.focus__input} data-placeholder="Senha"></span>
            </div>
            <div className={styles.form__button}>
              <button className={styles.access__button}>ACESSAR</button>
            </div>
          </form>

      </div>
    </FirstSection>
  )
}