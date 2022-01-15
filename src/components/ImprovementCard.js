import React from "react";
import { Card } from "react-bootstrap";

import "./style.css";

function ImprovementCard({ number, title, details, stepByStep }) {
  return (
    <>
      {!stepByStep ? (
        <Card className="improvementCard card-body h-100">
          <Card.Body>
            <div className="d-flex justify-content-center align-items-center ">
              <div className="improvementCardSkill">{title}</div>
            </div>
            <p>{details}</p>
          </Card.Body>
        </Card>
      ) : (
        <Card className="stepDownCard card-body h-100">
          <Card.Body>
            <div className="d-flex justify-content-center align-items-center ">
              <div className="do1">{number}</div>
              <div className="improvementCardHeader">{title}</div>
            </div>
            <p className="mt-3">{details}</p>
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default ImprovementCard;
