import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FaqSection from "../components/FaqSection";
import ImprovementCard from "../components/ImprovementCard";
import Timer from "../components/Timer";
import DayPlan from "../assets/DaysTile.png";
import Percent from "../assets/percent.png";

import "./style.css";
import { useHistory } from "react-router-dom";
import CaraouselBox from "../components/caraousels";
import Slider from "../components/slider";
import Comment from "../components/Comment";
import Skills from "../components/Skills";

function GetMyPlan() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

  const history = useHistory();

  const redirectLink = () => {
    history.push("/payment");
  };

  return (
    <>
      <Container>
        <h1 className="getMyPlanTitle">
          Are you ready to unleash your personality to the full extent?
        </h1>
        <p className="getMyPlanDescription">
          We have created a unique plan for you to improve your life and bring
          it to a new level. All you need to do is follow our instructions.
          <span className="planNow">Get your plan right now!</span>
        </p>
        <Timer expiryTimestamp={time} />
        <div className="d-flex aligh-items-center justify-content-center">
          <button className="emailButton" onClick={redirectLink}>
            Get My Plan
          </button>
        </div>
        <h2 className="text-center mt-5">7 Day Personal ImproveMent Plan</h2>
        <div className="container mt-5">
          {/* <img src={DayPlan} alt="day plan" className="img-fluid" /> */}
          {/* <CaraouselBox /> */}
          <Slider />
          {/* <div>
            <h1 className="text-center mt-5 mb-5">Self Transformation</h1>
            <Skills />
          </div> */}
        </div>
        <h1 className="text-center mt-5">Self Transformation</h1>
        <Container className="mt-5">
          <Row className="g-4">
            <Col md={3}>
              <ImprovementCard
                title="Habit"
                details="Do you remember the questions you answered? We have prepared a special plan based on yours answers to improve your life."
              />
            </Col>
            <Col md={3}>
              <ImprovementCard
                title="Skills"
                details="Scientists have proven that it takes 28 days to develop a habit. 1256 users have already verified this. It's your turn!"
              />
            </Col>
            <Col md={3}>
              <ImprovementCard
                title="Value"
                details="Give a little, get a lot! Isn't that a dream? Why should you waste energy searching for information if we found it for you? Just download it!"
              />
            </Col>
            <Col md={3}>
              <ImprovementCard
                title="Strength"
                details="Give a little, get a lot! Isn't that a dream? Why should you waste energy searching for information if we found it for you? Just download it!"
              />
            </Col>
          </Row>
        </Container>
        <div className="d-flex aligh-items-center justify-content-center mt-5">
          <button className="emailButton" onClick={redirectLink}>
            Get My Plan
          </button>
        </div>
      </Container>
      {/* <div className="stepByStepSection">
        <h1 className="text-center mt-5 stepGuideSection">
          Achieve impressive results following your step-by-step plan!
        </h1>
        <Container>
          <Row>
            <Col md={4}>
              <ImprovementCard
                stepByStep
                number="📆"
                title="Practice every day"
                details="Follow your daily plan and complete the indicated tasks"
              />
            </Col>
            <Col md={4}>
              <ImprovementCard
                stepByStep
                number="⏲️"
                title="Read 15-min summary"
                details="Just 15 minutes per day will be enough for an impressive result"
              />
            </Col>
            <Col md={4}>
              <ImprovementCard
                stepByStep
                number="🚀"
                title="Mark your progress"
                details="Progress every day and measure your results"
              />
            </Col>
          </Row>
        </Container>
      </div> */}
      <h1 className="text-center mt-5">Faq!</h1>
      <FaqSection />
      {/* <Container className="percentCover mt-5 mb-5">
        <Row className="d-flex align-items-center justify-content-center">
          <Col md={6}>
            <h2>100% money-back guarantee</h2>
            <p>
              We believe that our business tool will work for you and make you
              more productive at work and in your daily life! We even are ready
              to refund your money if you are not satisfied with our product.
              For further details, please check our Money-back policy.
            </p>
          </Col>
          <Col md={6}>
            <img src={Percent} alt="percent" className="img-fluid" />
          </Col>
        </Row>
      </Container> */}
      <h1 className="text-center mt-5">Comments</h1>
      <Container className="mt-5">
        <Row>
          <Col md={6}>
            <Comment
              name="Divya Dawar"
              details="My uncle is a doctor. He might be proficient in his profession but he can't be a good personalized mentor since he doesn't know the real ME.
              With the help of 'Mentoringindia'"
            />
          </Col>
          <Col md={6}>
            <Comment
              name="Divya Dawar"
              details="My uncle is a doctor. He might be proficient in his profession but he can't be a good personalized mentor since he doesn't know the real ME.
              With the help of 'Mentoringindia'"
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default GetMyPlan;
