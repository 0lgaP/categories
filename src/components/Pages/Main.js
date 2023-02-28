import React from "react";
import Button from "../UI/Button";
import styles from "./Main.module.css";
import { TfiHandPointUp } from "react-icons/tfi";
import CardSparkles from "../UI/CardSparkles";

const Main = (props) => {
  const { category, setCategory } = props;
  const noCategory = (
    <>
      <div className={styles.noCategory__container}>
        <TfiHandPointUp
          aria-label="finger pointing to cattegory button"
          className={styles.icon}
        />
      </div>
    </>
  );
  const hasCategory = <CardSparkles category={category} />;
  return (
    <>
      <Button onClick={setCategory} text="CATEGORY IS" />
      <div className={styles.category__text}>
        {category ? hasCategory : noCategory}
      </div>
    </>
  );
};

export default Main;
