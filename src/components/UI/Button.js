import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {FaPencilAlt} from 'react-icons/fa'
import styles from './Button.module.css'

const Button = (props) => {
  const { onClick } = props
  let style;
  if(props.setting){
    style = <FiSettings/>
  }
  if(props.draw){
    style = <FaPencilAlt/>
  }
  return (
    <button className={styles.symbol} onClick={onClick}>{style}</button>
  )
}

export default Button