import React from 'react'
import {FiSettings} from 'react-icons/fi'
import {FaPencilAlt} from 'react-icons/fa'
import {BsMegaphoneFill} from 'react-icons/bs'
import styles from './Button.module.css'

const Button = (props) => {
  const { onClick } = props
  let title;
  let style;
  if(props.setting){
    style = <FiSettings/>
    title = "Go to Settings"
  }
  if(props.draw){
    style = <FaPencilAlt/>
    title = "Go to Downloads"
  } 
  if (props.main){
    style = <BsMegaphoneFill/>
    title = "Go to Categories"
  }
  return (
    <button title={title} className={styles.symbol} onClick={onClick}>{style}</button>
  )
}

export default Button