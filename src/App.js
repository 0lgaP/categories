import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/LinkedItems/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Draw from "./components/Pages/Draw";
import Settings from "./components/Pages/Settings";
import Card from "./components/UI/Card";
import Main from "./components/Pages/Main";
import { noDimeList, fullList, select } from "./components/helpers/data";
import { About } from "./components/Pages/About";

function App() {
  const [category, setCategory] = useState("");
  const [filter, setFilter] = useState(true);
  const [history, setHistory] = useState([""]);

// selects category according to filter
// pushes history
  const selectHandler = () => {
    if (!filter) {
      const selected = select(fullList);
      setHistory(prev => [...prev, selected])
      return setCategory(selected);
    }
    const selected = select(noDimeList);
    setHistory(prev => [...prev, selected])
    return (setCategory(selected));
  };

  const filterHandler = () => {
    setFilter((prev) => !prev);
  };

  return (
    <Router>
      <Card>
        <NavBar setCategory={setCategory}/>
        <Routes>
          <Route
            exact
            path="/categories"
            element={
              <Main
                category={category}
                setCategory={selectHandler}
                filter={filter}
              />
            }
          />
          <Route path="/draw" element={<Draw />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route
            path="/settings"
            element={<Settings filter={filter} setFilter={filterHandler} />}
          />
        </Routes>
      </Card>
    </Router>
  );
}

export default App;
