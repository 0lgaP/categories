import React from 'react'
import styles from './DrawButtonContainer.module.css'

const DrawButtonContainer = (props) => {
  return (
    <div className={styles.container}>{props.children}</div>
  )
}

export default DrawButtonContainer