import React from 'react'
import Card from '../UI/Card'
import ButtonContainer from '../UI/ButtonContainer'
import Button from '../UI/Button'
import styles from './Main.module.css'



const Main = (props) => {
  const {toggleSettings, categoryIs, toggleDraw, category} = props
  return (
    <Card styles={styles.backdrop}>
      <ButtonContainer>
        <Button onClick={toggleDraw} draw="true"/>
        <Button onClick={toggleSettings} setting="true"/>
      </ButtonContainer>
      <button onClick={categoryIs} className="button">
        CATEGORY IS
      </button>
      <div className='category'>{category}</div>
    </Card>
  )
}

export default Main