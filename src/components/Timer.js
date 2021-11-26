import React from "react";
import { useTimer } from "react-timer-hook";

import "./style.css";

function Timer({ expiryTimestamp }) {
  console.log(expiryTimestamp, "expiryTimestamp---");
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div style={{ textAlign: "center" }}>
      <div className="timerWrapper">
        <div className="days">
          <div className="timeHead">{days}</div>
          <p className="timerText">Days</p>
        </div>
        <div className="days">
          <div className="timeHead">{hours}</div>
          <p className="timerText">Hours</p>
        </div>
        <div className="days" style={{ color: "#6c5dd3" }}>
          <div className="timeHead">{minutes}</div>
          <p className="timerText">Min</p>
        </div>
        <div className="days" style={{ color: "#6c5dd3" }}>
          <div className="timeHead">{seconds}</div>
          <p className="timerText">Sec</p>
        </div>
        {/* <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
        <span>{seconds}</span> */}
      </div>
    </div>
  );
}

export default Timer;
