import React, {useState} from "react";

export default function useFilter() {
  const [filter, setFilter] = useState(true);
  const includeHandler = () => {
    setFilter((prev) => !prev);
  };
  return {filter, includeHandler}
}