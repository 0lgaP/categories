import React from 'react'
import Slider from './Slider'


const SettingsMenu = (props) => {
  const {onToggle, showSettings} = props
  return (
    <main>
    <div className="container">
    <Slider onToggle={onToggle}/>
      <div className="category">Hi</div>
    </div>
    <div onClick={showSettings}>XXX</div>
  </main>
  )
}

export default SettingsMenu