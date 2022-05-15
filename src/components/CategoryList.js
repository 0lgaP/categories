import React, {useState} from 'react'
import {fullList, noDimeList} from "../components/helpers/data"
import {select} from "../components/helpers/toArray"



const CategoryList = () => {
  const [category, setCategory] = useState("")
  const [filter, setFilter] = useState(true)
  const selectHandler = () => {
    if (!filter){
      const selected = select(fullList);
      return setCategory(selected)
    }
    const selected = select(noDimeList);
    return setCategory(selected)
  }

const includeHandler = () => {
  setFilter(prev => !prev)
}

  return (
    <main>
    <div className='container'>
    <button onClick={includeHandler} className="button__toggle">{filter ? "No Repeats" : "All"}</button>

    <button onClick={selectHandler} className="button">Category is ...</button>
    <div className='category'>{category}</div>
    </div>
    </main>
  )
}

export default CategoryList