import { useState } from "react";
import mentor from "../assets/mentoringIndia.png";
import rodemap from "../assets/roadMap.png";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import RegisterModal from "../components/RegisterModal";
import Impact from "../components/Impact";

const Home = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const ImgStyle = {
    width: "85%",
    display: "flex",
    margin: "auto",
    marginTop: "10px",
    background: "antiquewhite",
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-7">
          <img src={mentor} alt="mentor" className="img-fluid" />
        </div>
        <div className="col-md-5 p-5 mt-2">
          <h2>Providing students with what they need the most</h2>
          <p>
            Mentoring India is a platform that gives students and young
            professionals wings and lets them believe in the power of their
            dreams. Relying on the passion of the students and backed by
            industry experts, we help you create the future that you want for
            yourself.
          </p>
          <div className="p-2">
            <Button
              variant="primary"
              size="lg"
              type="submit"
              onClick={handleShow}
              className="button-color w-100"
            >
              Join us, to get started
            </Button>
          </div>
        </div>
      </div>
      <div className="whyMentor">
        <h1>Why Mentoring India?</h1>
        <p style={{ width: "86%", marginTop: "30px" }}>
          Does growth inspire you? Does the confidence to ace in your field keep
          you going? With Mentoring India, you’re investing in yourself and the
          skills that you want to bring to life. From basic communication to
          exploring career options, Mentoring India has your back!
        </p>
        <p>
          Our dedicated and enthusiastic community strives towards a common
          goal: bringing out the best in you!
        </p>
      </div>
      <h1 className="text-center">How we works</h1>
      <img
        src={rodemap}
        alt="mentor"
        className="img-fluid mt-5"
        style={ImgStyle}
      />
      <h1 className="text-center mt-5">Our Impact</h1>
      <Impact className="mt-5" />
      <RegisterModal
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
        initial={true}
      />
    </div>
  );
};

export default Home;
