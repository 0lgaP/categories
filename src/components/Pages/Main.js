import React from "react";
import Button from "../UI/Button";
import styles from "./Main.module.css";
import { TfiHandPointUp } from "react-icons/tfi";
import Sparkles from "../UI/Sparkles"

const Main = (props) => {
  const { category, setCategory } = props;
  const noCategory = (
    <div className={styles.noCategory__text}>
      <TfiHandPointUp aria-label="finger pointing up" className={styles.icon}/>
    </div>
  );
  return (
    <>
    <Sparkles></Sparkles>
      <Button onClick={setCategory} text="CATEGORY IS" />
        <div className={styles.category__container}>
          <div className={styles.category__text}>{category ? category : noCategory}</div>
        </div>
    </>
  );
};

export default Main;
