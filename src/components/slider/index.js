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
          details="Follow your daily plan and complete the indicated tasks"
        />

        <ImprovementCard
          stepByStep
          number="⏲️"
          title="Day 2"
          details="Just 15 minutes per day will be enough for an impressive result"
        />

        <ImprovementCard
          stepByStep
          number="🚀"
          title="Day 3"
          details="Just 15 minutes per day will be enough for an impressive result"
        />

        <ImprovementCard
          stepByStep
          number="📆"
          title="Day 4"
          details="Follow your daily plan and complete the indicated tasks"
        />

        <ImprovementCard
          stepByStep
          number="📆"
          title="Day 5"
          details="Follow your daily plan and complete the indicated tasks"
        />

        <ImprovementCard
          stepByStep
          number="📆"
          title="Day 6"
          details="Follow your daily plan and complete the indicated tasks"
        />

        <ImprovementCard
          stepByStep
          number="📆"
          title="Day 7"
          details="Follow your daily plan and complete the indicated tasks"
        />
      </Carousel>
    </>
  );
}

export default Slider;
