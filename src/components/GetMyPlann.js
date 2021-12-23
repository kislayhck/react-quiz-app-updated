import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import "./style.css";

function GetMyPlann() {
  const [cookies] = useCookies(["user"]);
  const [phone_number, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");

  const [school, setSchool] = useState();
  const [loader, setLoader] = useState(false);

  const name = cookies.firstName;
  console.log(name, "name---");

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);
    e.preventDefault();
    const newData = { name, email, phone_number };
    var config = {
      method: "post",
      url: "https://mentringindia.herokuapp.com/admin/registration-api/registration",
      headers: {
        "Content-Type": "application/json",
      },
      data: newData,
    };

    axios(config)
      .then(function (response) {
        if (response) {
          setLoader(false);
          setTimeout(() => {
            history.push("/getmyplan");
          }, 9000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="d-flex align-items-center justify-content-center planWrapper">
      <h2>Email/Phone No.</h2>
      <p>
        Enter your email to receive your personalized improvement plan right
        now!
      </p>
      <div className="emailPhoneWrapper">
        <input
          placeholder="enter your email here"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          className="takeEmail mt-5"
        />
        <input
          placeholder="enter your phone no."
          type="number"
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="takeEmail"
        />
        <button class="emailButton" type="button" onClick={handleSubmit}>
          Get My Plan
          {loader && (
            <span
              class="spinner-border spinner-border-sm sr-only"
              role="status"
              aria-hidden="true"
            ></span>
          )}
        </button>
      </div>
    </div>
  );
}

export default GetMyPlann;
