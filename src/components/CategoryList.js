import React, { useState } from "react";
import { fullList, noDimeList } from "../components/helpers/data";
import { select } from "../components/helpers/toArray";
import SettingsButton from "./SettingsButton";
import Card from "./UI/Card";
import SettingsModle from "./UI/SettingsModle"; 

const CategoryList = () => {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState(true);
  const [settings, setSettings] = useState(false)
  console.log(filter)
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
    setSettings((prev) => !prev)
  }


  return (
    <React.Fragment>
      {settings && (<SettingsModle toggleSettings={settingsHandler} settings={settings} onFilter={filterHandler} filter={filter}/>)}
      <Card>
        <SettingsButton toggleSettings={settingsHandler}/>
        <button onClick={selectHandler} className="button">
          CATEGORY IS
        </button>
        <div className="category">{category}</div>
      </Card>
      </React.Fragment>

  );
};

export default CategoryList;
