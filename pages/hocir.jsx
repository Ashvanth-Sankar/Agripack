import React from "react";
import { FaSun, FaBug, FaWater, FaTruck, FaLeaf } from "react-icons/fa";
import "./home.css"; // Make sure this includes spin animation styles

const icons = [FaSun, FaBug, FaWater, FaTruck, FaLeaf];

const Gear2 = ({
  size = 100,
  speed = 10,
  reverse = false,
  x = 0,
  y = 0,
  toothCount = 12,
}) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    top: typeof y === "number" ? `${y}px` : y,
    left: typeof x === "number" ? `${x}px` : x,
    animation: `${reverse ? "spinReverse" : "spin"} ${speed}s linear infinite`,
    position: "absolute",
    transform: "translate(-50%, -50%)",
  };

  return (
    <div className="gear2" style={style}>
      {[...Array(toothCount)].map((_, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div
            key={i}
            className="tooth-wrapper2"
            style={{ transform: `rotate(${i * (360 / toothCount)}deg)` }}
          >
            <div className="tooth2">
              <Icon className="tooth-icon2" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gear2;





