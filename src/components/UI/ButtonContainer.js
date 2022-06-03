import React from 'react'
import styles from "./ButtonContainer.module.css"

const ButtonContainer = (props) => {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}

export default ButtonContainer