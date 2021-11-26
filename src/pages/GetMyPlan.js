import React from "react";
import { Container } from "react-bootstrap";
import Timer from "../components/Timer";

import "./style.css";

function GetMyPlan() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  return (
    <Container>
      <h1 className="getMyPlanTitle">
        Are you ready to unleash your personality to the full extent?
      </h1>
      <p className="getMyPlanDescription">
        We have created a unique plan for you to improve your life and bring it
        to a new level. All you need to do is follow our instructions.
        <span className="planNow">Get your plan right now!</span>
      </p>
      <Timer expiryTimestamp={time} />
      <div className="d-flex aligh-items-center justify-content-center">
        <button className="emailButton">Get My Plan</button>
      </div>
    </Container>
  );
}

export default GetMyPlan;
