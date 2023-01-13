import React from 'react'
import Slider from '../UI/Slider'

const Settings = (props) => {
  const {setFilter, filter} = props;
  return (
    <Slider filter={filter} setFilter={setFilter}/>
  )
}

export default Settings