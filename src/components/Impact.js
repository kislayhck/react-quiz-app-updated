import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./impactFont.css";

const Impact = ({ className }) => {
  return (
    <Container className={className}>
      <Row className="justify-content-center">
        <Col md={3} className="impactStyle">
          <h2 className="fontTest">1821</h2>
          <p>CareerTransition</p>
        </Col>
        <Col md={3} className="impactStyle">
          <h2 className="fontTest">11000</h2>
          <p>Mentor</p>
        </Col>
        <Col md={3} className="impactStyle">
          <h2 className="fontTest">12456</h2>
          <p>Mentees</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Impact;
