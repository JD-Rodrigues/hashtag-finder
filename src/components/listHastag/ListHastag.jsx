import React from 'react'
import styles from "./styles.module.css"

export const ListHastag = (props) => {
  return (
    <div className={styles.container} >
      <span>{props.hashtag}</span>

      <div>
        <span>{props.date}</span>
        <span>{props.hour}</span>
      </div>
    </div>
  )
}
