import React from "react";
import { useHistory } from "react-router-dom";

import "./style.css";

function GetMyPlann() {
  const history = useHistory();

  const handleRedirect = () => {
    history.push("/getmyplan");
  };

  return (
    <div className="d-flex align-items-center justify-content-center planWrapper">
      <h2>Email/Phone No.</h2>
      <p>
        Enter your email to receive your personalized improvement plan right
        now!
      </p>
      <div className="emailPhoneWrapper">
        <input placeholder="enter your email here" className="takeEmail mt-5" />
        <input placeholder="enter your phone no." className="takeEmail" />
        <button className="emailButton" onClick={handleRedirect}>
          Get My Plan
        </button>
      </div>
    </div>
  );
}

export default GetMyPlann;
