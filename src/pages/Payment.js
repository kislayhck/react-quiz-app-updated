import React, { useEffect, useState, useRef, useContext } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Comment from "../components/Comment";
import FaqSection from "../components/FaqSection";
import Confetti from "react-confetti";
import Com1 from "../assets/1c.jpeg";
import Com2 from "../assets/2c.jpeg";
import axios from "axios";
import { DataContext } from "../context";

import "./style.css";

const Payment = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [transid, setTransid] = useState();
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);

  const [userData, setPosts] = useContext(DataContext);

  const confettiRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const displayRazorpay = async () => {
    setLoading(true);
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    setLoading(false);
    if (!res) {
      alert("RazorPay access failed!");

      return;
    }

    try {
      const res = await fetch(
        `https://mentoringindia.herokuapp.com/razorpay/razorpay`,
        {
          method: "POST",

          headers: { "Content-Type": "application/json" },
        }
      );

      const result = await res.json();

      const options = {
        key: "rzp_live_qm4p3XhLdgK4ZI",
        amount: result.amount,
        currency: result.currency,
        name: "Mentornship Program",
        description: "7 days mentornship poogram",
        // image: "SVG/logo512.png",
        order_id: result.id,

        handler: function (response) {
          setTransid(response.razorpay_payment_id);
          setAmount(response.razorpay_amount);
          alert(response.razorpay_order_id);

          const { data } = axios.post(
            "https://mentoringindia.herokuapp.com/paid/add-student",
            {
              name: userData.name,
              email: userData.email,
              phn: userData.phn,
              city: userData.city,
              state: userData.state,
              classes: userData.classes,
              transid: response.razorpay_payment_id,
              amount: result.amount,
            }
          );
        },
        prefill: {
          name: userData.name,
          email: userData.email,
          contact: userData.phn,
        },
      };

      var paymentObject = new window.Razorpay(options);
      paymentObject.on("payment.failed", function (response) {
        alert(response.error.description);
      });
      paymentObject.open();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setHeight(confettiRef?.current?.clientHeight);
    setWidth(confettiRef?.current?.clientWidth);
  }, []);

  return (
    <div>
      <div className="leafContainer">
        <Confetti numberOfPieces={30} width={1200} height={900} />
      </div>
      <div className="paymentHeader text-center container-fluid">
        <h1>One Life, One Chance</h1>
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
                  <h2>72 hour plan</h2>
                  <p>Rs.46 for 3 days</p>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="mt-5">
            <Card className="d-flex justify-content-center align-items-center paymentCard">
              <Card.Body>
                <div className="d-flex justify-content-center align-items-center">
                  <div className="paymentCardHeader">7 Days Plan</div>
                </div>
                <div>
                  <h2>168 hour plan</h2>
                  <p>Rs.99 for 7 days</p>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  {/* <form id="pay"> </form> */}

                  {loading ? (
                    <p>Loading...</p>
                  ) : (
                    <button
                      className="btn btn-primary"
                      onClick={displayRazorpay}
                    >
                      Buy Now!
                    </button>
                  )}
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
                  <h2>504 hour plan</h2>
                  <p>Rs.297 for 21 days</p>
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
