import React from "react";
import Carousel from "react-elastic-carousel";
import ImprovementCard from "../ImprovementCard";
import Item from "./Item";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Slider() {
  return (
    <>
      <Carousel breakPoints={breakPoints}>
        <ImprovementCard
          stepByStep
          number="📆"
          title="Day 1"
          subTitle="Mind"
          details="Including Emotions, Learning, Reading, Focus, Vision and all kind of mental Skills"
        />

        <ImprovementCard
          stepByStep
          number="📆"
          title="Day 2"
          subTitle="Body"
          details="Including Energy, Health, Sport, Exercise, Fitness, Wellness, Beauty, Outlook"
        />

        <ImprovementCard
          stepByStep
          number="📆"
          title="Day 3"
          subTitle="Spirit"
          details="Including Raising Consciousness, Being present, Meditation, in Contact with our Soul"
        />

        <ImprovementCard
          stepByStep
          number="📆"
          title="Day 4"
          subTitle="Social"
          details="Including Family, Spouse or Boy/Girl-Friend, Friends and all other Relationships with other people"
        />

        <ImprovementCard
          stepByStep
          number="📆"
          title="Day 5"
          subTitle="Finance"
          details="Including Money, Savings, Belongings and Things we own"
        />

        <ImprovementCard
          stepByStep
          number="📆"
          title="Day 6"
          subTitle="Juice"
          details="Means all things Fun like Traveling, Celebrating etc."
        />

        <ImprovementCard
          stepByStep
          number="📆"
          title="Day 7"
          subTitle="Profession"
          details="Is what I create in my Work as a meaningful Contribution to society and to my personal Fulfillment"
        />
      </Carousel>
    </>
  );
}

export default Slider;
