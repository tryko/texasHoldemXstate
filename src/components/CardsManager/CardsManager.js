import React from "react";
import "./CardsManager.css";
import "./../../assets/main.css";
import Card from "../Card/Card";
import makeid from "./../../util/randomStr";

const CardManager = ({ cards, handleDraw, numOfCardPlaces }) => {
  const handleClick = () => {
    if (typeof handleDraw === "function") handleDraw();
  };

  const getCardName = (cards, i) => {
    if (cards[i]) {
      return cards[i].value + cards[i].suit;
    }
    return "";
  };

  const createCardPlaces = (cards) => {
    const cardPlaces = [];

    for (let i = 0; i < numOfCardPlaces; i++) {
      const cardName = getCardName(cards, i);
      const cardDiv = (
        <div key={makeid()} className="card" onClick={handleClick}>
          {cardName && <Card name={cardName} onClick={(setIsFaceUp) => {
            setIsFaceUp((prevState) => !prevState)
          }}/>}
        </div>
      );
      cardPlaces.push(cardDiv);
    }

    return cardPlaces;
  };

  return <div className="flex"></div>;
};

export default CardManager;
