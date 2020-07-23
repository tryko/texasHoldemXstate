import React, { useEffect, useState } from "react";
import Deck from "./components/Deck/Deck";
import { getCards, getFileName, shuffle, makeid } from "./util/util";

import GameControl from "./components/GameControl/GameControl";
import Player from "./components/Player/Player";

import "./App.css";
import "./assets/main.css";

const App = () => {
  const cardFaceDown = [{ value: "1", suit: "B" }];
  const [cards, setCards] = useState([]);
  const [backFace, setBackFace] = useState("");
  const [players, setPlayers] = useState([
    {
      name: "Jeff",
      id: makeid(7),
      cards: [],
    },
    {
      name: "Troy",
      id: makeid(7),
      cards: [],
    },
  ]);

  const [numOfCardForPlayer, setNumOfCardForPlayer] = useState(2);

  useEffect(() => {
    const gettingCards = async () => {
      const cards = await getCards();
      const backOfCard = await getFileName("1B");
      const shuffledCards = shuffle(cards)
      setCards(shuffledCards);
      setBackFace(backOfCard);
    };
    gettingCards();
  }, []);

  const handleDraw = (e) => {
    if (cards.length) {
      console.log(cards);
      const cardsLeft = cards.length - 1 - numOfCardForPlayer * players.length;
      const drawnCards = cards.filter((c, i) => i > cardsLeft);
      const newPlayers = players.map((p) => {
        return {
          ...p,
          cards: drawnCards.splice(0, 2),
        };
      });
      setCards(cards.filter((c, i) => !(i > cardsLeft)));
      setPlayers(newPlayers);
    }
  };

  const handleShuffle = () => {
    setCards(shuffle(cards));
  };

  const controls = [
    { name: "Deal", func: handleDraw },
    { name: "Shuffle", func: handleShuffle },
  ];
  return (
    <div className="App">
      <div className="flex-wrapper">
        <div className="deck-wrapper addonMargin">
          <Deck cards={cards} numOfCardPlaces={1} backFace={backFace} />
          <GameControl controls={controls} />
        </div>
      </div>
      <div className="flex-wrapper">
        <div className="players-wrapper">
          {players.map((p) => {
            return (
              <Player
                key={p.id}
                name={p.name}
                cards={p.cards}
                backFace={backFace}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
