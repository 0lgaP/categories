import React, { useState, useEffect } from "react";

const Sparkles = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const sparkleInterval = setInterval(() => {
      const newSparkle = {
        x: Math.floor(Math.random() * 12),
        y: Math.floor(Math.random() * 12),
        size: Math.floor(Math.random() * 3) + 1,
      };
      setSparkles((prevSparkles) => [...prevSparkles, newSparkle]);

      setTimeout(() => {
        setSparkles((prevSparkles) => prevSparkles.filter((sparkle) => sparkle !== newSparkle));
      }, 500);
    }, 50);

    return () => {
      clearInterval(sparkleInterval);
      sparkles.forEach((sparkle) => clearTimeout(sparkle.timeoutId));
    };
  }, [sparkles]);

  const cardStyle = {
    position: "relative",
    width: 120,
    height: 120,
    backgroundColor: "transparent",
    borderRadius: "10px",
    boxShadow: "0 0 10px #ccc",
    color: "#444",
  };

  const sparkleStyle = {
    position: "absolute",
    width: "5px",
    height: "5px",
    backgroundColor: "#f9f8eb",
    transform: "rotate(45deg)",
    transition: "opacity 500ms ease-in-out"
  };
  
  

  return (
    <div style={cardStyle}>
      {sparkles.map((sparkle, index) => {
        const style = {
          ...sparkleStyle,
          left: `${sparkle.x * 10}px`,
          top: `${sparkle.y * 10}px`,
          width: `${sparkle.size * 5}px`,
          height: `${sparkle.size * 5}px`,
        };
        const timeoutId = setTimeout(() => {
          setSparkles((prevSparkles) => prevSparkles.filter((s) => s !== sparkle));
        }, 2000);
        sparkle.timeoutId = timeoutId;
        return <div key={index} style={style} />;
      })}
      
      Sparkles
    </div>
  );
};

export default Sparkles;
