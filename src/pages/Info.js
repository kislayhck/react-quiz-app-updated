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

  const [cookies] = useCookies(["allData"]);
  const history = useHistory();

  console.log(cookies, "cook----");

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
      setText("The one who was once where you are today");
    }, 2000);
    const thirdTimer = setInterval(() => {
      setText("The one who lets you believe in your dreams");
    }, 3000);
    const fourthTimer = setInterval(() => {
      setText("The one who holds you accountable for your actions");
    }, 6000);
    const fifthTimer = setInterval(() => {
      setText("The one who can guide you with constructive feedback");
    }, 12000);

    return () =>
      clearInterval(secondsTimer, thirdTimer, fourthTimer, fifthTimer);
  }, []);

  return (
    <div className="container-fluid">
      <div className="">
        <div className="row">
          <div className="col-md-6 infoMain">
            <h3>Hi,</h3>
            <h1>{cookies.allData.firstName}</h1>
            <h1>{cookies.allData.lastName}</h1>
          </div>
          <div className="col-md-6" style={{ marginTop: "-70px" }}>
            <img src={MainImg} alt="mentor" className="img-fluid" />
          </div>
        </div>
      </div>
      <h1 className="text-center mt-5">
        The journey of a growth-driven mindset begins with 4 small steps
      </h1>
      <div className="container borderSteps" style={{ marginTop: "100px" }}>
        <div className="row">
          <div className="col-md-6">
            <img src={Img1} alt="mentor" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="mt-5 steps">Step 1.</h2>
            <h3 className="mt-3">
              You are the main character of your story. Don’t let anyone else
              hold the pen for you.
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
            <h3 className="mt-3">7 Day Strategic Improvement Plan</h3>
            <div>
              <span className="p-2">▶️</span>Better planning, better actions,
              better results
            </div>
            <div>
              <span className="p-2">▶️</span>Upskilling yourself to upgrade
              yourself
            </div>
            <div>
              <span className="p-2">▶️</span>Identifying problem areas and
              corrective actions and values
            </div>
            <div>
              <span className="p-2">▶️</span>Analyzing your strengths and
              improving every day
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
            <h3 className="mt-3">
              Find your mentor — your friend, philosopher and guide
            </h3>
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
            <h3 className="mt-3">Persoanlized Development Plan</h3>
            <div>
              <span className="p-2">▶️</span>Harnessing better habits
            </div>
            <div>
              <span className="p-2">▶️</span>Improve your core skills
            </div>
            <div>
              <span className="p-2">▶️</span>Adapt to values that drive your
              actions and mindset.
            </div>
            <div>
              <span className="p-2">▶️</span>Establish milestones and let your
              strengths guide you in the right direction.
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
