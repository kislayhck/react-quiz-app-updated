import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loader from "./Loader";

function FormField({ onHide, score: correctAnswers }) {
  const [cookies] = useCookies(["user"]);
  const [phone_number, setPhoneNumber] = useState();
  const [school, setSchool] = useState();
  const [loader, setLoader] = useState(false);
  const name = cookies.firstName;
  const email = cookies.emailValue;
  const history = useHistory();





  const handleSubmit = (e) => {
    setLoader(true);
    e.preventDefault();
    const newData = { name, email, phone_number, school, correctAnswers };
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
            history.push("/subscription");
          }, 9000);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    setPhoneNumber("");
    setSchool("");
  };


  return (
    <div>
      {loader && <Loader />}
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            disabled
            placeholder="Enter email"
            value={cookies.firstName}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={cookies.emailValue}
            placeholder="Enter email"
            disabled
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>phone_number No.</Form.Label>
          <Form.Control
            type="number"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="phonenumber"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>School:</Form.Label>
          <Form.Control
            type="text"
            value={school}
            placeholder="Enter your school"
            onChange={(e) => setSchool(e.target.value)}
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          size="lg"
          type="submit"
          className="w-100"
          onClick={onHide}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default FormField;
