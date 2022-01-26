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

  const styleItem = {
    listStyle: "none",
  };

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
                  Why do I need mentoring?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <p className="text-muted">
                      Mentoring can have countless benefits, especially when
                      done in the early growth phase of life. Mentoring
                      essentially is a two-way process that enables a student to
                      develop a growth mindset and empowers them to be better
                      individuals. Mentors play an important role in balancing
                      your interests and boosting your skills by providing you
                      with the right encouragement and information.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="rounded-lg mb-3 border-0">
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey="3"
                  onClick={() => toggleActive("3")}
                  className={activeId === "1" ? "active" : null}
                >
                  How will a counselor mentor me in the program?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <p className="text-muted">
                      A mentor is not just someone who has “been there and done
                      that”. At Mentoring India, our team of mentors not only
                      share knowledge, experience, and suggestions but also take
                      a deeper look at your strengths, values, and skills. Even
                      though the process is a long one — there’s no shortcut to
                      success, we have segregated the process into three steps.
                      The first step is to analyze your core values through a
                      series of 21 basic questions. Following this, a
                      personalized 7-day improvement plan acts as the head start
                      of the long-term development plan.
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
                  Why should I choose Mentoring India?
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <ul className="text-muted mb-5">
                      The mentoring program at Mentoring India humbly ticks in
                      all the following boxes:
                      <li style={styleItem}>
                        👉 Curated according to your goals
                      </li>
                      <li style={styleItem}>👉 Affordable fee</li>
                      <li style={styleItem}>👉 Trained professionals</li>
                      <li style={styleItem}>👉 Unlimited resources</li>
                      <li style={styleItem}>👉 Guaranteed results</li>
                    </ul>
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
