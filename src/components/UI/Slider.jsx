import React from "react";
import styles from "./Slider.module.css"

const Slider = (props) => {
  const {filter, setFilter} = props
  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={filter} onChange={setFilter}/>
      <span className={styles.slider}>{filter ? <p className={styles.all}>all categories</p> : <p className={styles.noRepeats}>no repeats</p>}</span>
    </label>
  );
};

export default Slider;
