import axios from "axios";
import { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import { Container, Form, Row, Col, Button, Select } from "react-bootstrap";
import Cities from "../components/cities.json";
import states from "../components/indianstates.json";

const School = () => {
  const [data, setData] = useState([]);
  const [schoolName, setSchoolName] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [responseBack, setResponseBack] = useState(false);
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const columns = [
    {
      name: "Schoolname",
      selector: (row) => row.Schoolname,
    },
    {
      name: "state",
      selector: (row) => row.state,
    },
    {
      name: "district",
      selector: (row) => row.district,
    },
    {
      name: "status",
      selector: (row) => row.status,
    },
    {
      name: "Region",
      selector: (row) => row.Region,
    },
  ];

  useEffect(() => {
    axios
      .get("https://mentringindia.herokuapp.com/admin/school-api/registration")
      .then((response) => setData(response.data.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://mentringindia.herokuapp.com/admin/school-api/registration?Schoolname=${schoolName}&city=${city}&state=${state}`
      )
      .then((response) => setSearchData(response.data.data));
    setResponseBack(true);
  };

  const filteredCity = Cities.filter((item) => item.state === state);

  return (
    <Container>
      <div>
        <Row className="d-flex flex-wrap align-items-center justify-content-center">
          {/* <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter school name"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />
            </Form.Group>
          </Col> */}

          <Col>
            <Form.Group className="mb-3" controlId="ControlSelect2">
              <Form.Control
                as="select"
                onChange={(e) => setState(e.target.value)}
              >
                <option selected>Select State</option>
                {states &&
                  states.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3" controlId="ControlSelect2">
              <Form.Control
                as="select"
                onChange={(e) => setCity(e.target.value)}
              >
                <option selected>Select city</option>
                {filteredCity &&
                  filteredCity.map((c) => (
                    <option key={c.id} value={c.name}>
                      {c.name}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
          </Col>

          <Col md={2} className="mb-3">
            <Button onClick={handleSubmit} variant="success">
              Search
            </Button>
          </Col>
        </Row>

        {/* <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
          />
          <button>Search</button>
        </form> */}
        <DataTable columns={columns} data={responseBack ? searchData : data} />
      </div>
    </Container>
  );
};

export default School;
