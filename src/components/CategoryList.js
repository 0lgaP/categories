import React, { useState } from "react";
import { fullList, noDimeList } from "../components/helpers/data";
import { select } from "../components/helpers/toArray";
import Slider from "../components/Slider"

const CategoryList = () => {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState(true);
  console.log(filter)
  const selectHandler = () => {
    if (!filter) {
      const selected = select(fullList);
      return setCategory(selected);
    }
    const selected = select(noDimeList);
    return setCategory(selected);
  };

  const includeHandler = () => {
    setFilter((prev) => !prev);
  };

  return (
    <main>
      <div className="container">
        <div className="container-switch">

      <Slider toggle={filter} onToggle={includeHandler}/>
        </div>
        <button onClick={selectHandler} className="button">
          category is ...
        </button>
        <div className="category">{category}</div>
      </div>
    </main>
  );
};

export default CategoryList;
