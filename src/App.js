import React, { useState } from "react";
import CardsManager from "./components/CardsManager/CardsManager";
import { getDeck, shuffle } from "./util/createCards";
import "./App.css";
import "./assets/main.css";
import GameControl from "./components/GameControl/GameControl";

const App = () => {
  const cardFaceDown = [{ value: "1", suit: "B" }];
  const [cards, setCards] = useState(getDeck());
  const [cardOnTopOfDeck, setCardOnTopOfDeck] = useState(cardFaceDown);
  const [numOfCardsToDraw, setNumOfCardsToDraw] = useState(2);
  const [drawnCards, setDrawnCards] = useState([]);

  const handleDraw = (e) => {
    if (cards.length) {
      console.log(cards);
      const cardsLeft = cards.length - 1 - numOfCardsToDraw;
      const drawnCards = cards.filter((c, i) => i > cardsLeft);
      console.log(drawnCards);
      if (cards.length === 2) setCardOnTopOfDeck([]);
      setCards(cards.filter((c, i) => !(i > cardsLeft)), (newCards) => {
        setCardOnTopOfDeck(newCards[newCards.length - 1])
      });
      
      setDrawnCards(drawnCards);
    }
  };

  const handleShuffle = () => {
    setCards(shuffle(cards));
  };

  const peakTopCard = () => {
    if (!cards.length) return;
    if (cardOnTopOfDeck[0].suit === "B") {
      const topCard = cards[cards.length - 1];
      setCardOnTopOfDeck((prev) => {
        const cardToShowOnTop = []
        cardToShowOnTop.push(topCard)
        return cardToShowOnTop;
      });
    } else {
      setCardOnTopOfDeck(cardFaceDown);
    }
  };

  const controls = [
    { name: "Deal", func: handleDraw },
    { name: "Shuffle", func: handleShuffle },
    // { name: "Peak", func: peakTopCard },
  ];
  return (
    <div className="App">
      <div className="flex-wrapper">
        <div className="deck-wrapper addonMargin">
          <CardsManager
            cards={cardOnTopOfDeck}
            numOfCardPlaces={1}
          />
          <GameControl controls={controls} />
        </div>
      </div>
      <div className="flex-wrapper">
        <div className="deck-wrapper">
          <CardsManager cards={drawnCards} numOfCardPlaces={numOfCardsToDraw} />
        </div>
      </div>
    </div>
  );
};

export default App;
