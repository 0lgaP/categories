import React from 'react'
import styles from './DownloadButton.module.css'
import {FiDownload} from 'react-icons/fi'

const DownloadButton = (props) => {
  const {title, img, drawing} = props
  return (
    <a href={drawing} download aria-label={title} 
    className={styles.button} 
    style={{backgroundImage:`url(${img})`, 
    backgroundPosition: 'center',
    backgroundSize: '70px',
    backgroundRepeat: 'no-repeat', color:`var(--perk-white)`}}>
    <FiDownload className={styles.icon}/>
    </a>
  )
}

export default DownloadButton