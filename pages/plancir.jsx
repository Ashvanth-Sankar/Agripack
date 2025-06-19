
import React from "react";
import { FaSun, FaBug, FaWater, FaTruck, FaLeaf } from "react-icons/fa";
import "./search.css"; // Make sure this includes spin animation styles

const icons = [FaSun, FaBug, FaWater, FaTruck, FaLeaf];

const Gear = ({
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
    <div className="gear" style={style}>
      {[...Array(toothCount)].map((_, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div
            key={i}
            className="tooth-wrapper"
            style={{ transform: `rotate(${i * (360 / toothCount)}deg)` }}
          >
            <div className="tooth">
              <Icon className="tooth-icon" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Gear;





