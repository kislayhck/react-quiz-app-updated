import React from "react";
import { Card } from "react-bootstrap";

import "./style.css";

function ImprovementCard({ number, title, details, stepByStep }) {
  return (
    <>
      {!stepByStep ? (
        <Card className="improvementCard">
          <Card.Body>
            <div className="d-flex justify-content-center align-items-center">
              <div className="dot">{number}</div>
              <div className="improvementCardHeader">{title}</div>
            </div>
            <p>{details}</p>
          </Card.Body>
        </Card>
      ) : (
        <Card className="improvementCard">
          <Card.Body>
            <div className="d-flex justify-content-center align-items-center">
              <div className="dot">{number}</div>
              <div className="improvementCardHeader">{title}</div>
            </div>
            {/* <p>{details}</p> */}
          </Card.Body>
        </Card>
      )}
    </>
  );
}

export default ImprovementCard;
