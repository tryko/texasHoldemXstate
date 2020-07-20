import React, { useState } from "react";
import DrawnCard from "./components/DrawnCard/DrawnCard";
import getDeck from "./util/createCards";
import "./App.css";
import './assets/main.css';
import cardFaceDown from "./assets/poker-qr/1B.svg";

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
      <div className="flex justify-center">
        {cards.length && (
          <div className="h-auto w-auto rounded-sm" onClick={handleDraw}>
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
