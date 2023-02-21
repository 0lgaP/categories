import React, { useState, useEffect } from "react";

const Sparkles = ({ sparkleDuration = 500, containerWidth=80, containerHeight=20 }) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const sparklesToRemove = [];

    const sparkleInterval = setInterval(() => {
      const newSparkle = {
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10),
        size: Math.floor(Math.random() * 4) + 1,
        timeoutId: null,
      };
      setSparkles((prevSparkles) => [...prevSparkles, newSparkle]);

      newSparkle.timeoutId = setTimeout(() => {
        setSparkles((prevSparkles) =>
          prevSparkles.filter((sparkle) => sparkle !== newSparkle)
        );
        sparklesToRemove.push(newSparkle);
      }, sparkleDuration);
    }, 50);

    return () => {
      clearInterval(sparkleInterval);
      sparklesToRemove.forEach((sparkle) => clearTimeout(sparkle.timeoutId));
    };
  }, [sparkleDuration]);

  const cardStyle = {
    position: "relative",
    width: containerWidth,
    height: containerHeight,
    backgroundColor: "transparent",
    borderRadius: "2px",
  };

  const sparkleStyle = {
    position: "absolute",
    backgroundColor: "#f9f8eb",
    transform: "rotate(25deg)",
    opacity: 0.3,
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
        return <div key={index} style={style} />;
      })}
      Sparkles
    </div>
  );
};

export default Sparkles;
