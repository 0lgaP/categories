import React from 'react'
import Button from '../UI/Button'
import ButtonContainer from '../UI/ButtonContainer';
import Slider from '../UI/Slider'
import Card from '../UI/Card';
import styles from "./Settings.module.css"


const Settings = (props) => {
  const {setFilter, filter} = props;
  return (
    <React.Fragment>
    <Slider filter={filter} onFilter={setFilter}/>

    </React.Fragment>
  )
}

export default Settings