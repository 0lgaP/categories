import React from "react";
import styles from "./CardSparkles.module.css";
import GlitterContainer from "./GlitterContainer";

{
  /* <>
<div className={styles.category__container}>
  <SparkleEffect category={category}/>
  <div className={styles.category__text}>{category}</div>
</div>
</> */
}

const CardSparkles = (props) => {
  return (
    <>
      <div className={styles.category__container}>


    <GlitterContainer/>

        <div className={styles.category__text}>{props.category} </div>

      </div>
    </>
  );
};

export default CardSparkles;
