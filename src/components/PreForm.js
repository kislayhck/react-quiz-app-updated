import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useCookies } from "react-cookie";
import { useHistory } from "react-router-dom";

import Cities from "./cities.json";
import states from "./indianstates.json";

function PreForm() {
  const [firstName, setFirstname] = useState();
  const [lastName, setLastname] = useState();
  const [cookies, setCookie] = useCookies(["user"]);
  const history = useHistory();
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [classStd, setClassStd] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/info");
    const data = { firstName, lastName, city, state, classStd };
    setCookie("allData", data);
  };
  const filteredCity = Cities.filter((item) => item.state === state);

  const classes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={6}>
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
          </Col>
          <Col md={6}>
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
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="ControlSelect2">
              <Form.Control
                as="select"
                onChange={(e) => setState(e.target.value)}
              >
                <option selected>Select State</option>
                {states &&
                  states.map((c) => (
                    <option key={c.id} value={c.name} className="dropOpt">
                      {c.name}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="ControlSelect2">
              <Form.Control
                as="select"
                onChange={(e) => setCity(e.target.value)}
              >
                <option selected>Select city</option>
                {filteredCity &&
                  filteredCity.map((c) => (
                    <option key={c.id} value={c.name} className="dropOpt">
                      {c.name}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col md={4}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                as="select"
                onChange={(e) => setClassStd(e.target.value)}
              >
                <option selected>Select class:</option>
                {classes.map((c) => (
                  <option key={c} value={c} className="dropOpt">
                    {c}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
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
