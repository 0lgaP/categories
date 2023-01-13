import React from 'react'
import styles from './Button.module.css'

const Button = (props) => {
  const { onClick, text } = props
  return (
    <button onClick={onClick} className={styles.button}>{text}</button>
  )
}

export default Button