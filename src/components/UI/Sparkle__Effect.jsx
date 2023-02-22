import React from "react";
import GlitterContainer from "./GlitterContainer";
import CardSparkles from "./CardSparkles"

// <div className={styles.category__container}>
// <SparkleEffect category={category}/>
// <div className={styles.category__text}>{category}</div>
// </div>

const SparkleEffect = (props) => {
  return (
    
    <CardSparkles>
    {props.category}
    </CardSparkles>
    
  )
}

export default SparkleEffect