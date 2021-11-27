import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ImprovementCard from "../components/ImprovementCard";
import Timer from "../components/Timer";

import "./style.css";

function GetMyPlan() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600);

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
          <button className="emailButton">Get My Plan</button>
        </div>
        <h2 className="text-center mt-5">28 Day Personal ImproveMent Plan</h2>
        <p className="container p-5">
          Est aliqua nostrud aute in elit veniam proident dolore occaecat minim
          amet labore mollit. Occaecat sunt consectetur officia enim amet dolore
          irure ullamco quis ex voluptate in ea laborum. Amet pariatur veniam
          est incididunt mollit amet tempor qui sit Lorem amet. Amet aute ad qui
          dolor id minim incididunt ut id magna est. Elit id labore excepteur
          consequat sit consequat excepteur officia velit. Enim velit cillum
          minim est Lorem Lorem amet velit proident proident. Id nisi laborum
          eiusmod ut do.
        </p>
        <h1 className="text-center mt-5">Improve yourself!</h1>
        <Container className="mt-5">
          <Row>
            <Col md={4}>
              <ImprovementCard
                number={1}
                title="Follow a step-by-step personalized plan"
                details="Do you remember the questions you answered? We have prepared a special plan based on yours answers to improve your life."
              />
            </Col>
            <Col md={4}>
              <ImprovementCard
                number={2}
                title="Create reading habit in just 3 weeks"
                details="Scientists have proven that it takes 28 days to develop a habit. 1256 users have already verified this. It's your turn!"
              />
            </Col>
            <Col md={4}>
              <ImprovementCard
                number={3}
                title="Achieve greater result with less effort"
                details="Give a little, get a lot! Isn't that a dream? Why should you waste energy searching for information if we found it for you? Just download it!"
              />
            </Col>
          </Row>
        </Container>
        <div className="d-flex aligh-items-center justify-content-center mt-5">
          <button className="emailButton">Get My Plan</button>
        </div>
      </Container>
      <div className="stepByStepSection">
        <Container>
          <Row>
            <Col md={4}>
              <ImprovementCard
                stepByStep
                number={1}
                title="Follow a step-by-step personalized plan"
                details="Do you remember the questions you answered? We have prepared a special plan based on yours answers to improve your life."
              />
            </Col>
            <Col md={4}>
              <ImprovementCard
                stepByStep
                number={2}
                title="Create reading habit in just 3 weeks"
                details="Scientists have proven that it takes 28 days to develop a habit. 1256 users have already verified this. It's your turn!"
              />
            </Col>
            <Col md={4}>
              <ImprovementCard
                stepByStep
                number={3}
                title="Achieve greater result with less effort"
                details="Give a little, get a lot! Isn't that a dream? Why should you waste energy searching for information if we found it for you? Just download it!"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default GetMyPlan;
