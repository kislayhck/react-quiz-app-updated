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
    <div className="mt-5">
      <Container className="m-auto">
        <Row className="justify-content-md-center">
          <Col md={6} className="auto">
            <Accordion defaultActiveKey={activeId}>
              <Card className="rounded-lg mb-3 border-0">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="0"
                  onClick={() => toggleActive("0")}
                  className={activeId === "0" ? "active" : null}
                >
                  Reading Expands the Mind
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="text-muted">
                      Reading helps to expand the mind and give us more ideas.
                      Reading has been proven to keep our minds young, healthy
                      and sharp, with studies showing that reading can even help
                      prevent alzheimer’s disease.
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
                  Reading Helps Improve Concentration
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <p className="text-muted">
                      Scientists from California, the USA proved that reading
                      can train our mind how to focus properly, which is
                      invaluable in nearly everything we do on a daily basis —
                      whether it be as we study or even in our careers and in
                      our personal relationships.
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
                  Reading Can Help You Destress
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <p className="text-muted">
                      Recent study found that a mere six minutes of reading was
                      shown to reduce muscle tension, and slowed down the heart
                      rates of readers. It reduced stress levels by an
                      impressive 68%.
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
