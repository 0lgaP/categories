import React from 'react'
import {HiOutlineChevronDoubleDown}from 'react-icons/hi'
import './SettingsButton.css'



const SettingsButton = (props) => {
  return (
    <div className='arrow-down__container'>
    <button className='arrow-down' onClick={props.toggle}><HiOutlineChevronDoubleDown /></button>
    </div>
  )
}

export default SettingsButton