import React, { useState } from "react";
import { fullList, noDimeList } from "../components/helpers/data";
import { select } from "../components/helpers/toArray";
import Settings from "./Pages/Settings";
import Main from "./Pages/Main";
import Draw from "./Pages/Draw";

const CategoryList = () => {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState(true);
  const [show, setShow] = useState({
    draw: false,
    settings: false,
    main: true
  })

  const selectHandler = () => {
    if (!filter) {
      const selected = select(fullList);
      return setCategory(selected);
    }
    const selected = select(noDimeList);
    return setCategory(selected);
  };

  const filterHandler = () => {
    setFilter((prev) => !prev);
  };

  const settingsHandler = () => {
    setCategory("");
    setShow((prev) => ({...prev, settings: !prev.settings, main: !prev.main}));
  };
  const toggleDraw = () => {
    setCategory("");
    setShow((prev) => ({...prev, draw: !prev.draw, main: !prev.main}));
  }
  

  return (
    <React.Fragment>
      {show.settings === true && (<Settings
          toggleSettings={settingsHandler}
          onFilter={filterHandler}
          filter={filter}
          toggleDraw={toggleDraw}
        />)}
      {show.draw === true && (<Draw
          toggleSettings={settingsHandler}
          categoryIs={selectHandler}
          category={category}
          toggleDraw={toggleDraw}
        />)}
      {show.main === true && (<Main
          toggleSettings={settingsHandler}
          categoryIs={selectHandler}
          category={category}
          toggleDraw={toggleDraw}
        />)}
        
      

    </React.Fragment>
  );
};

export default CategoryList;
