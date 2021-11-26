import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

function PreForm() {
  const [firstName, setFirstname] = useState();
  const [lastName, setLastname] = useState();
  const [email, setEmail] = useState();
  const [cookies, setCookie] = useCookies(["user"]);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/info");
    setCookie("firstName", firstName);
    setCookie("lastName", lastName);
    setCookie("emailValue", email);
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
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Address:</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" size="lg" type="submit" className="w-100">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default PreForm;
