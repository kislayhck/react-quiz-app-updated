import { useState } from "react";

// Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const FaqSection = () => {
  const [activeId, setActiveId] = useState("1");

  function toggleActive(id) {
    if (activeId === id) {
      setActiveId(null);
    } else {
      setActiveId(id);
    }
  }

  return (
    <div>
      <Container className="m-auto">
        <Row>
          <Col>
            <Accordion defaultActiveKey={activeId}>
              <Card className="rounded-lg mb-3 border-0">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  onClick={() => toggleActive("0")}
                  className={activeId === "0" ? "active" : null}
                >
                  In non leo vel nunc elementum conguen non leo ?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="rounded-lg mb-3 border-0">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="1"
                  onClick={() => toggleActive("1")}
                  className={activeId === "1" ? "active" : null}
                >
                  Donec semper nibh at facilisis interdum ?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="rounded-lg mb-3 border-0">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="2"
                  onClick={() => toggleActive("2")}
                  className={activeId === "2" ? "active" : null}
                >
                  Aliquam nisl elit, egestas nec pharetra nec sed ?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="text-muted">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default FaqSection;
