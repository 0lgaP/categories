import React from "react";
import "./Slider.css";

const Slider = (props) => {
  const {filter, onFilter} = props
  return (
    <label className="switch">
      <input type="checkbox" checked={filter} onChange={onFilter}/>
      <span className="slider">{filter ? <p className="all">all categories</p> : <p className="noRepeats">no repeats</p>}</span>
      
    </label>
  );
};

export default Slider;
