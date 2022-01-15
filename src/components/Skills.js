import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./style.css";

const Skills = () => {
  const habbitDetails = {
    marginLeft: "-20px",
    padding: "8px",
    /* border: 1px solid black; */
    marginRight: "70px",
  };

  return (
    <Container
      fluid
      className="p-2"
      style={{
        marginLeft: "65px",
      }}
    >
      <Row>
        <Col md={3}>
          <div className="habbitDot">Habit</div>
          <div style={habbitDetails}>
            The American Journal of Psychology defined a "habit, from the
            standpoint of psychology,a more or less fixed way of thinking.
          </div>
        </Col>
        <Col md={3}>
          <div className="habbitDot">Skills</div>
          <p style={habbitDetails}>
            The American Journal of Psychology defined a "habit, from the
            standpoint of psychology,a more or less fixed way of thinking.
          </p>
        </Col>
        <Col md={3}>
          <div className="habbitDot">Value</div>
          <p style={habbitDetails}>
            The American Journal of Psychology defined a "habit, from the
            standpoint of psychology,a more or less fixed way of thinking.
          </p>
        </Col>
        <Col md={3}>
          <div className="habbitDot">Strength</div>
          <p style={habbitDetails}>
            The American Journal of Psychology defined a "habit, from the
            standpoint of psychology,a more or less fixed way of thinking.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
