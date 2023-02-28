import React from "react";
import "./GlitterContainer.css";

import { GiStarShuriken } from "react-icons/gi";

const GlitterContainer = () => {
  const icon = <GiStarShuriken className="glitter" />;

  return (
    <div className="glitter-container">
      {icon}
      {icon}
      {icon}
      {icon}
      {icon}
      {icon}
      {icon}
      {icon}
    </div>
  );
};

export default GlitterContainer;
