import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FaqSection from "../components/FaqSection";
import ImprovementCard from "../components/ImprovementCard";
import Timer from "../components/Timer";
import DayPlan from "../assets/DaysTile.png";
import Percent from "../assets/percent.png";

import { useHistory } from "react-router-dom";
import CaraouselBox from "../components/caraousels";
import Slider from "../components/slider";
import Comment from "../components/Comment";
import Skills from "../components/Skills";

import Com1 from "../assets/1c.jpeg";
import Com2 from "../assets/2c.jpeg";

import "./style.css";

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
          Are you ready to unlock your potential and become the best version of
          yourself?
        </h1>
        <p className="getMyPlanDescription">
          A plan is the first step towards a better future, and we have done
          exactly that for you. Our team of experts has curated a 7 days
          personal improvement plan that will give you the necessary headstart
          on the right track.
          <span
            className="planNow"
            onClick={redirectLink}
            style={{ cursor: "pointer" }}
          >
            Get your plan right now!
          </span>
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
        <h1 className="text-center mt-5">Improve Yourself!</h1>
        <Container className="mt-5">
          <Row className="g-4">
            <Col md={3}>
              <ImprovementCard
                title="Habit"
                details="Habits form a great part of our character. Minor day-to-day activities like planning our day in the morning, having a balanced diet, exercising, and reading a book before bed help us achieve better lifestyle goals and keep us consistent and motivated."
              />
            </Col>
            <Col md={3}>
              <ImprovementCard
                title="Skills"
                details="Learning new skills not only boosts your confidence but at the same time makes you relevant to the most recent trends in the domain of your choice. When you step out of your comfort zone and learn new skills, you make yourself open to growth and changes.
                "
              />
            </Col>
            <Col md={3}>
              <ImprovementCard
                title="Value"
                details="Actions speak louder than words, and your values are the guiding light of your actions. Apart from adding peace to your life, your values are a very crucial character trait."
              />
            </Col>
            <Col md={3}>
              <ImprovementCard
                title="Strength"
                details="Your strengths set you apart from the crowd. Channeling them in the right direction allows you to be more aware of yourself and pushes you to overcome challenges in your unique way."
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
      <h1 className="text-center mt-5">Frequently Asked Questions</h1>
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
    </>
  );
}

export default GetMyPlan;
