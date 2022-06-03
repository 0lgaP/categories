import React, { useState } from "react";
import { fullList, noDimeList } from "../components/helpers/data";
import { select } from "../components/helpers/toArray";
import SettingsButton from "./SettingsButton";
import Card from "./UI/Card";
import Settings from "./Settings";
import Main from "./Pages/Main";

const CategoryList = () => {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState(true);
  const [settings, setSettings] = useState(false);
  const [draw, setDraw] = useState(false)
  console.log(filter);
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
    setSettings((prev) => !prev);
    setCategory("");
  };
  const toggleDraw = () => {
    setCategory("");
    setDraw((prev) => !prev);
  }

  return (
    <React.Fragment>
      {settings ? (
        <Settings
          toggleSettings={settingsHandler}
          settings={settings}
          onFilter={filterHandler}
          filter={filter}
        />
      ) : (
        <Main
          toggleSettings={settingsHandler}
          categoryIs={selectHandler}
          category={category}
          toggleDraw={toggleDraw}
        />
      )}
      
    </React.Fragment>
  );
};

export default CategoryList;
