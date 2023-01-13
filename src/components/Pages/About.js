import React from "react";
import styles from "./About.module.css";

const instruction = [
  "Download a character from the draw section",
  "Print or open in your drawing app",
  "Grab a category",
  "Draw your fit",
];

export const About = () => {
  return (
    <>
      <label className={styles.title}>Instructions</label>
      <ol className={styles.container_about}>
        {instruction.map((each) => (
          <li key={each} className={styles.text__bubble}>
            {each}
          </li>
        ))}
      </ol>
    </>
  );
};
