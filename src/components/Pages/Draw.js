import React from 'react'
import Card from '../UI/Card'
import ButtonContainer from '../UI/ButtonContainer'
import Button from '../UI/Button'

const Draw = (props) => {
  const {toggleSettings, categoryIs, toggleDraw, category} = props

  return (
    <Card>
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

export default Draw