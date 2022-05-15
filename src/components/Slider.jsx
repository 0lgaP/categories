import React from "react";
import "./Slider.css";

const Slider = (props) => {
  const {toggle, onToggle} = props
  return (
    <label className="switch">
      <input type="checkbox" checked={toggle} onChange={onToggle}/>
      <span className="slider">{toggle ? <p className="all">all categories</p> : <p className="noRepeats">no repeats</p>}</span>
      
    </label>
  );
};

export default Slider;
