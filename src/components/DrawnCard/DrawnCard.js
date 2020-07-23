import React, { useState, useLayoutEffect } from "react";
import "./DrawnCard.css";
import Card from "../Card/Card";

const DrawnCard = ({suit, value}) => {
  const [ isFaceUp, setIsFaceUp ] = useState(false);

  useLayoutEffect(() => {
    setIsFaceUp(false)
  }, [suit,value])

  const toggleFlip = () => {
    setIsFaceUp((prevState) => !prevState)
  }

  return (
    <div>
        <div className="Deck">
          <div className="card-place" onClick={toggleFlip}>
          { !isFaceUp && <Card name={"1B"}/> }
           { isFaceUp && <Card name={"" + value + suit}/> }
          </div>
        </div>
    </div>
  );
};

export default DrawnCard;
