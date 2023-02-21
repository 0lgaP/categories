import React, {useEffect} from "react";
import Button from "../UI/Button";
import styles from "./Main.module.css";
import { TfiHandPointUp } from "react-icons/tfi";
import axios from 'axios';

const Main = (props) => {
  const { category, setCategory } = props;
  useEffect(() => {
axios.get('https://react-api-3b1e9-default-rtdb.firebaseio.com/movies/-N6iJZLBbL7jZ5Ct6QOW')
  .then(function (response) {
    console.log("what i get",response
    );
  })
  }, [category])
  
  const noCategory = (
    <div className={styles.category__text}>
      <TfiHandPointUp aria-label="finger pointing up" className={styles.icon}/>
    </div>
  );
  return (
    <>
      <Button onClick={setCategory} text="CATEGORY IS" />
        <div className={styles.category__container}>
          <div className={styles.category__text}>{category ? category : noCategory}</div>
        </div>
    </>
  );
};

export default Main;
