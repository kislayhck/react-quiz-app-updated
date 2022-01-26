import React, { useEffect, useState, useRef } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Comment from "../components/Comment";
import FaqSection from "../components/FaqSection";
import Confetti from "react-confetti";
import Com1 from "../assets/1c.jpeg";
import Com2 from "../assets/2c.jpeg";

import "./style.css";

const Payment = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const confettiRef = useRef(null);

  useEffect(() => {
    setHeight(confettiRef?.current?.clientHeight);
    setWidth(confettiRef?.current?.clientWidth);
  }, []);

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
      <div className="leafContainer">
        <Confetti numberOfPieces={30} width={1200} height={900} />
      </div>
      <div className="paymentHeader text-center container-fluid">
        <h1>New Year, New Life</h1>
        <h5>Try a wiser approach to daily self-improvement right now!</h5>
      </div>
      <div className="container-fluid bestOffer">
        <h1 className="text-center">Best Offer Now!</h1>
        <h1 className="text-center">Take your plan just for Rs.99</h1>
      </div>
      <Container>
        <Row>
          <Col md={4} className="mt-5">
            <Card className="d-flex justify-content-center align-items-center paymentCardOne">
              <Card.Body>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="paymentCardHeader">1-Month Plan</div>
                </div>
                <div>
                  <h2>One Month Plan</h2>
                  <p>Rs.99 for one month</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mt-5">
            <Card className="d-flex justify-content-center align-items-center paymentCard">
              <Card.Body>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="paymentCardHeader">7 Day Plan</div>
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
          </Col>{" "}
          <Col md={4} className="mt-5">
            <Card className="d-flex justify-content-center align-items-center paymentCardOne">
              <Card.Body>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="paymentCardHeader">6-Month Plan</div>
                </div>
                <div>
                  <h2>One Month Plan</h2>
                  <p>Rs.99 for one month</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <h1 className="text-center mt-5">Frequently Asked Questions</h1>
      <FaqSection />
      <h1 className="text-center mt-5">Comments</h1>
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Comment
              img={Com1}
              name="Divya Dawar,Chandigarh"
              details="Mentor is someone who allows you to see the hope inside yourself!  
              My personal experience was very good with them. So I would like to say thank you mentoring india ,for being there helping me to build my career and making them sucessful!"
            />
          </Col>
          <Col md={6}>
            <Comment
              img={Com2}
              name="Prince Kalotra,Ludhiana"
              details="My uncle is a doctor. He might be proficient in his profession but he can't be a good personalized mentor since he doesn't know the real ME. With the help of 'MentoringIndia'.I want to help mankind by establishing a world that can predict the future and wish to have a mentor who can direct me onto this path."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Payment;
