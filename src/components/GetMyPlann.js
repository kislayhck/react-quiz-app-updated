import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { DataContext } from "../context";

import "./style.css";

function GetMyPlann() {
  const [cookies] = useCookies(["allData"]);
  const [phn, setPhoneNumber] = useState();
  const [email, setEmail] = useState("");
  const [error, setError] = useState();

  const [loader, setLoader] = useState(false);

  const [userData, setPosts] = useContext(DataContext);

  const name = cookies.allData.firstName;
  const city = cookies.allData.city;
  const state = cookies.allData.state;
  const classes = cookies.allData.classStd;

  const myPhoneNumber = Number(phn);

  const history = useHistory();

  const handleSubmit = async (e) => {
    setPosts({
      name: "kislay",
      roll: 1,
    });
    const validateCheck = await validate();
    if (validateCheck) {
      e.preventDefault();

      setLoader(true);
      const newData = { name, email, phn, city, state, classes };
      setPosts(newData);
      var config = {
        method: "post",
        url: "https://mentoringindia.herokuapp.com/student/add-student",
        headers: {
          "Content-Type": "application/json",
        },
        data: newData,
      };

      axios(config)
        .then(function (response) {
          if (response.status === 201) {
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
    let regEmail =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let regPhone = /^[0-9]{10}$/;

    if (!email || !myPhoneNumber || !myPhoneNumber.toString().length === 10) {
      setError("Please Fill the form properly");
      return false;
    } else if (!regEmail.test(email)) {
      setError("Invalid Email Address");
      return false;
    } else if (!regPhone.test(myPhoneNumber)) {
      setError("Please enter valid phone number");
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
        <h2>The wait is now over!</h2>
        <p>
          Drop your email or phone number here to receive your personalized
          improvement plan right now!
        </p>
        <span className="text-danger">{error}</span>
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
