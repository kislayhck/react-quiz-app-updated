import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";

import "./style.css";

function GetMyPlann() {
  const [cookies] = useCookies(["user"]);
  const [phone_number, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [error, setError] = useState();

  const [loader, setLoader] = useState(false);

  const name = cookies.firstName;
  const myPhoneNumber = Number(phone_number);

  const history = useHistory();

  const handleSubmit = async (e) => {
    const validateCheck = await validate();
    if (validateCheck) {
      e.preventDefault();

      setLoader(true);
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
          if (response.status === 200) {
            setError("");
            setPhoneNumber("");
            setEmail("");
            setLoader(false);
            history.push("/getmyplan");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log(validateCheck, "failed");
    }
  };

  const validate = () => {
    if (!email || !myPhoneNumber || !myPhoneNumber.toString().length === 10) {
      setError("Please Fill the form properly");
      return false;
    } else {
      return true;
    }
  };

  return (
    <>
      {loader && (
        <span
          class="spinner-border spinner-border-sm sr-only"
          role="status"
          aria-hidden="true"
        ></span>
      )}
      <div className="d-flex align-items-center justify-content-center planWrapper">
        <p>{error}</p>
        <h2>Email/Phone No.</h2>
        <p>
          Enter your email to receive your personalized improvement plan right
          now!
        </p>
        <div className="emailPhoneWrapper">
          <input
            placeholder="enter your email here"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="takeEmail mt-5"
          />
          <input
            placeholder="enter your phone no."
            type="number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="takeEmail"
          />
          {!loader && (
            <button class="emailButton" type="button" onClick={handleSubmit}>
              Get My Plan
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default GetMyPlann;
