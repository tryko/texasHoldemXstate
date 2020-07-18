import React, { useState } from "react";
import DrawnCard from "./components/DrawnCard/DrawnCard";
import getDeck from "./util/createCards";
import "./App.css";
import cardFaceDown from "./resources/poker-qr/1B.svg";

const App = () => {
  const [cards, updateCards] = useState(getDeck());
  const [drawnCard, updateDrawnCard] = useState({});

  const handleDraw = (e) => {
    if (cards.length) {
      const cardToDraw = cards[cards.length - 1];
      updateCards(cards.filter((c, i) => i !== cards.length - 1));
      updateDrawnCard(cardToDraw);
    }
  };

  return (
    <div className="App">
      <div className="Deck">
        {cards.length && (
          <div className="Card" onClick={handleDraw}>
            <img src={cardFaceDown} alt="face down" />
          </div>
        )}
      </div>
      {drawnCard.value && (
        <DrawnCard value={drawnCard.value} suit={drawnCard.suit} />
      )}
    </div>
  );
};

export default App;
