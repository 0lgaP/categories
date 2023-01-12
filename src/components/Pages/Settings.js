import React from 'react'
import Button from '../UI/Button'
import ButtonContainer from '../UI/ButtonContainer';
import Slider from '../UI/Slider'
import Card from '../UI/Card';
import styles from "./Settings.module.css"


const Settings = (props) => {
  const { toggleSettings, toggleDraw, onFilter, filter} = props;
  return (
    <React.Fragment>

    {/* <ButtonContainer>
    <Button onClick={toggleDraw} draw="true"/>
    <Button onClick={toggleSettings} setting="true"/>
    </ButtonContainer> */}
    <Slider filter={filter} onFilter={onFilter}/>

    </React.Fragment>
  )
}

export default Settings