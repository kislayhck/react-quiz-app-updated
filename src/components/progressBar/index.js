import React from "react";
import "./style.css";

const ProgressBar = ({ percent }) => {
  return (
    <div className="circular">
      <div className="inner"></div>
      <div className="number">{percent}</div>
      <div className="circle">
        <div className="bar left">
          <div className="progress"></div>
        </div>
        <div className="bar right">
          <div className="progress"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
