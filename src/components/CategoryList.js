import React, {useState} from 'react'
import {fullList} from "../components/helpers/data"
import {select} from "../components/helpers/toArray"



const CategoryList = () => {
  const [category, setCategory] = useState("")
  const selectHandler = () => {
    const selected = select(fullList);
    setCategory(selected)
  }
  return (
    <main>
    <div className='container'>
    <button onClick={selectHandler} className="button">Category is</button>
    <div className='category'>{category}</div>
    </div>
    </main>
  )
}

export default CategoryList