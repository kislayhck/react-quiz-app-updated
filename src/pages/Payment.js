import React, { useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import "./style.css";

const Payment = () => {
  useEffect(() => {
    const Script = document.createElement("script");
    const Form = document.getElementById("pay");
    Script.setAttribute(
      "src",
      "https://checkout.razorpay.com/v1/payment-button.js"
    );
    Script.setAttribute("data-payment_button_id", "pl_IRWXaKDDZul3Gi");
    Form.appendChild(Script);
  }, []);

  return (
    <div>
      <div className="bestOffer">
        <h1 className="text-center">Best Offer Now!</h1>
        <h1 className="text-center">Take your plan just for Rs.99</h1>
      </div>
      <Container>
        <Row>
          <Col md={4} className="offset-4 mt-5">
            <Card className="d-flex justify-content-center align-items-center paymentCard">
              <Card.Body>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="improvementCardHeader">Save up to 80%!</div>
                </div>
                <div>
                  <h2>One Month Plan</h2>
                  <p>Rs.99 for one month</p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <form id="pay"> </form>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
