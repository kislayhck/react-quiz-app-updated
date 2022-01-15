import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import mentoringImg from "../assets/leftInfo.jpg";
import serviceImg from "../assets/service.png";

import MainImg from "../assets/5.png";
import Img1 from "../assets/3.png";
import Img2 from "../assets/1.png";
import Img3 from "../assets/4.png";
import Img4 from "../assets/2.png";

import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import Instructions from "../components/Instructions";

const Info = () => {
  const [text, setText] = useState("");

  const [cookies] = useCookies(["user"]);
  const history = useHistory();

  const handleClick = () => {
    history.push("/questions");
  };

  const borderSteps = {
    border: "1px solid",
    padding: "30px",
    marginTop: "100px",
  };

  useEffect(() => {
    const secondsTimer = setInterval(() => {
      setText("who was once in your place?");
    }, 2000);
    const thirdTimer = setInterval(() => {
      setText("who can listen your fears?");
    }, 3000);
    const fourthTimer = setInterval(() => {
      setText("who can believe your dreams?");
    }, 6000);
    const fifthTimer = setInterval(() => {
      setText("who can manage your conflicts?");
    }, 12000);
    const sixthTimer = setInterval(() => {
      setText("who can make belief in yourself?");
    }, 24000);

    return () =>
      clearInterval(
        secondsTimer,
        thirdTimer,
        fourthTimer,
        fifthTimer,
        sixthTimer
      );
  }, []);

  return (
    <div className="container-fluid">
      <div className="">
        <div className="row">
          <div className="col-md-6 infoMain">
            <h3>Hi,</h3>
            <h1>{cookies.firstName}</h1>
            <h1>{cookies.lastName}</h1>
          </div>
          <div className="col-md-6" style={{ marginTop: "-70px" }}>
            <img src={MainImg} alt="mentor" className="img-fluid" />
          </div>
        </div>
      </div>
      <h1 className="text-center mt-5">Steps to be followed</h1>
      <div className="container borderSteps" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-6">
            <img src={Img1} alt="mentor" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="mt-5 steps">Step 1.</h2>
            <h3 className="mt-5">
              You know better version of yourself, write yourself, predict
              yourself.
            </h3>
            <Link
              to="/questions"
              className="d-flex justify-content-center decoration-none"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="primary"
                size="md"
                type="submit"
                className="button-color w-50 mt-4"
              >
                Click to proceed
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="container borderSteps" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-6" style={{ marginTop: "50px" }}>
            <h2 className="steps">Step 2.</h2>
            <h3 className="mt-5">Improvement Plan for next 7 days.</h3>
            <div>
              <span className="p-2">▶️</span>Better habit, better growth
            </div>
            <div>
              <span className="p-2">▶️</span>Inner skill
            </div>
            <div>
              <span className="p-2">▶️</span>Lets analyse values*
            </div>
            <div>
              <span className="p-2">▶️</span>Know your strength.
            </div>
            <Link
              to="/questions"
              className="d-flex justify-content-center decoration-none"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="primary"
                size="md"
                type="submit"
                className="button-color w-50 mt-4"
              >
                Click to proceed
              </Button>
            </Link>
          </div>
          <div className="col-md-6">
            <img src={Img2} alt="mentor" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="container borderSteps" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-6">
            <img src={Img3} alt="mentor" className="img-fluid" />
          </div>
          <div className="col-md-5 offset-md-1">
            <h2 className="mt-5 steps">Step 3.</h2>
            <h3 className="mt-5">Find Mentor</h3>
            <div className="step3_mentor">
              <h5>{text}</h5>
            </div>
            <Link
              to="/questions"
              className="d-flex justify-content-center decoration-none"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="primary"
                size="md"
                type="submit"
                className="button-color w-50 mt-4"
              >
                Click to proceed
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="container borderSteps mb-5"
        style={{ marginTop: "100px" }}
      >
        <div className="row">
          <div className="col-md-6" style={{ marginTop: "10px" }}>
            <h2 className="mt-5 steps">Step 4.</h2>
            <h3 className="mt-5">Development Plan </h3>
            <div>
              <span className="p-2">▶️</span>Habit Building
            </div>
            <div>
              <span className="p-2">▶️</span>Skill development
            </div>
            <div>
              <span className="p-2">▶️</span>Importance of understanding values.
            </div>
            <div>
              <span className="p-2">▶️</span>Lightning of strength in right
              direction.
            </div>
            <Link
              to="/info"
              className="d-flex justify-content-center decoration-none"
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="primary"
                size="md"
                type="submit"
                className="button-color w-50 mt-4"
                onClick={() => alert("follow step1")}
              >
                Click to proceed
              </Button>
            </Link>
          </div>
          <div className="col-md-6">
            <img src={Img4} alt="mentor" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* <img src={serviceImg} alt="service" className="w-100 img-fluid stepsTo" /> */}
      {/* <div className="p2 mt-5 mb-5">
        <Instructions />
      </div> */}
      {/* <div className="bottomMain">
        <Button
          variant="primary"
          size="lg"
          type="submit"
          className=""
          onClick={handleClick}
        >
          Questions
        </Button>
        <div className="p-2">Why fear when we are here!</div>
      </div> */}
    </div>
  );
};

export default Info;
