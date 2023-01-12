import React from 'react'
import Card from '../UI/Card'
import styles from './Main.module.css'
import {TfiHandPointUp} from 'react-icons/tfi'



const Main = (props) => {
  const {category, setCategory, filter} = props
  const noCategory = (
  <div className='category'>
    <TfiHandPointUp /> 
    </div>)
  return (
    <>
      <button onClick={setCategory} className="button">
        CATEGORY IS
      </button>
      <div className='speech__bubble'>
      <div className='category'>{category ? category : noCategory}</div>
      </div>
      </>
  )
}

export default Main