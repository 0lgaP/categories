import React from 'react'
import Card from '../UI/Card'
import ButtonContainer from '../UI/ButtonContainer'
import Button from '../UI/Button'
import styles from './Main.module.css'



const Main = (props) => {
  return (
    <Card styles={styles.backdrop}>
      <h1 className={styles.content}>MAIN</h1>
    </Card>
  )
}

export default Main