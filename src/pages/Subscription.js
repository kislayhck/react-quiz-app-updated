import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import SubscriptionComp from "../components/Subscription";

function Subscription() {
  return (
    <Container fluid className="w-20">
      <h2>Thanks For Registering with Us.</h2>
      <div className="row">
        <div className="col-md-6 mt-5">
          <Card style={{ width: "18rem" }}>
            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
            <Card.Body>
              <Card.Title>Buy Now</Card.Title>
              <Card.Text>
                <h3>₹50</h3>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Buy Now 🚀</Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-6">
          <SubscriptionComp />
        </div>
      </div>
      {/* <div className="subswrap">
      </div> */}
    </Container>
  );
}

export default Subscription;
