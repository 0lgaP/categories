import React from 'react'
import {FiSettings}from 'react-icons/fi'
import './SettingsButton.css'



const SettingsButton = (props) => {
  return (
    <div className='arrow-down__container'>
    <button className='arrow-down' onClick={props.toggleSettings}><FiSettings/></button>
    </div>
  )
}

export default SettingsButton