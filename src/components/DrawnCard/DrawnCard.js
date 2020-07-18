import React, { useState, useLayoutEffect } from "react";
import "./DrawnCard.css";

const DrawnCard = ({suit, value}) => {
  // const cards = getDeck();
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
          <div className="Card" onClick={toggleFlip}>
           {isFaceUp && <div>
              {value}
              <br></br>
              {suit}
            </div>}
            {/* <img src="./../../resources/poker-qr/1B.svg" alt="face down"/> */}
          </div>
        </div>
    </div>
  );
};

export default DrawnCard;
