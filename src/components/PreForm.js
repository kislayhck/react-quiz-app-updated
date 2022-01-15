import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function PreForm() {
  const [firstName, setFirstname] = useState();
  const [lastName, setLastname] = useState();
  const [cookies, setCookie] = useCookies(["user"]);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/info");
    setCookie("firstName", firstName);
    setCookie("lastName", lastName);
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Enter first name"
            value={firstName}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="text"
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Enter last name"
            value={lastName}
            required
          />
        </Form.Group>
        <Button
          variant="primary"
          size="lg"
          type="submit"
          className="button-color w-100"
        >
          Register
        </Button>
      </Form>
    </div>
  );
}

export default PreForm;
