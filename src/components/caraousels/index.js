import React from "react";
import { Card } from "react-bootstrap";
import Carousel from "./Carousel";

import "./style.css";

const datObj = [
  {
    title: "Smaller Habit, Bigger Results",
    day: "Day 1",
  },
  {
    title: "The Miracle Morning",
    day: "Day 2",
  },
  {
    title: "Thinking,Fast and Slow",
    day: "Day 3",
  },
  {
    title: "Rules for focused success",
    day: "Day 4",
  },
  {
    title: "Transform your life",
    day: "Day 5",
  },
  {
    title: "How to stop worring and start living",
    day: "Day 6",
  },
  {
    title: "An antinonde to chaos",
    day: "Day 6",
  },
];

const CaraouselBox = () => {
  return (
    <div className="cardBox">
      <Carousel autoplay interval={2000}>
        {datObj.map((items) => (
          <div>
            <Card className="cardBoxItem">
              <Card.Body>
                <Card.Title>
                  <h2>{items.day}</h2>
                </Card.Title>
                <Card.Text>
                  <h4>{items.title}</h4>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CaraouselBox;
