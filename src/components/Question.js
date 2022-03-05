import React, { useState, useMemo, useEffect } from "react";
import RegisterModal from "./RegisterModal";
import ProgressBar from "./progressBar";
import "./style.css";
import GetMyPlann from "./GetMyPlann";

export const iframe = () => {
  return {
    __html:
      '<iframe src="./SVG/demo.html" class="questiongif" width="640" height="450"></iframe>',
  };
};

function Question({ questions, allData }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false);
  const [progress, setprogress] = useState(0);
  const [bar, setBar] = useState(false);
  const [check, setCheck] = useState([]);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  useMemo(() => {
    if (bar) {
      let counter = 0;
      setInterval(() => {
        if (counter === 100) {
          setLoader(false);
          setShowScore(true);
          clearInterval();
        } else {
          counter += 1;
          setprogress(counter);
        }
      }, 80);
    }
  }, [bar]);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setLoader(true);
      setBar(true);
    }
  };

  useMemo(() => {
    if (loader) {
      let arr = [
        "✔️ Analyzing your answers",
        "✔️ Evaluating core strengths",
        "✔️ Customizing your improvement plan",
      ];
      let i = 0;
      let newArr = [];
      let intervalTrigger = setInterval(() => {
        newArr.push(arr[i]);
        i++;
        displayNewArr();
      }, 2000);

      let displayNewArr = () => {
        if (i === arr.length) clearInterval(intervalTrigger);
        setCheck(newArr);
      };
    }
  }, [loader]);

  return (
    <>
      {loader ? (
        <>
          <div className="loaderComponent mt-5">
            <ProgressBar percent={progress} />
          </div>
          <br />
          <div className="mt-5">
            {check.map((item) => (
              <div className="checkMarks">
                <div>{item}</div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div>
          {showScore ? (
            // <div className="score-section">
            //   <h2>
            //     You scored {score} out of {questions.length}
            //   </h2>
            //   <button className="register" onClick={handleShow}>
            //     Register
            //   </button>
            // </div>
            <GetMyPlann allData={allData} />
          ) : (
            <>
              <div className="row questionRightBar">
                <div className="col-md-6 iFrame">
                  <div dangerouslySetInnerHTML={iframe()} />
                </div>
                <div className="col-md-6 mt-5">
                  <div className="question-section">
                    <h3 style={{ marginLeft: "17px" }}>
                      Answer the following questions
                    </h3>
                    <div className="question-count">
                      <span>Question {currentQuestion + 1}</span>/
                      {questions.length}
                    </div>
                    <div className="question-text">
                      {questions[currentQuestion].questionText}
                    </div>
                    {questions[currentQuestion].questionCard ? (
                      <>
                        <div className="Img-card">
                          <img
                            src={questions[currentQuestion].questionImg}
                            alt="quesCard"
                            width="150px"
                          />
                        </div>
                        <div className="line1"></div>
                        <div className="line2"></div>
                      </>
                    ) : null}
                  </div>
                  <div
                    className={
                      !questions[currentQuestion].questionImg
                        ? "answer-section"
                        : "d-flex justify-content-center mt-5"
                    }
                  >
                    {questions[currentQuestion].answerOptions.map(
                      (answerOption) => (
                        <button
                          className={
                            !answerOption.answerText
                              ? "circleOption"
                              : "options col-md-4"
                          }
                          onClick={() =>
                            handleAnswerOptionClick(answerOption.isCorrect)
                          }
                        >
                          {answerOption.img ? (
                            <div className="imgAnswer">
                              <img
                                src={answerOption.img}
                                alt="main"
                                width="30px"
                                className="img-fluid"
                              />
                            </div>
                          ) : null}
                          <span className="optionEmoji">
                            {answerOption.AnsImoji}
                          </span>
                          {answerOption.answerText}
                        </button>
                      )
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
          <RegisterModal
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
            score={score}
            initial={false}
          />
        </div>
      )}
    </>
  );
}

export default Question;
