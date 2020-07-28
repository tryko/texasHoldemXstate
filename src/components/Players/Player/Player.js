import React from "react";
import "./Player.css";
import Card from "../../Card/Card";

const Player = ({ name, cards, backFace }) => {
  return (
    <div>
      <div className="hand-place">
        {cards.map((card, i) => (
          <Card
            key={card.id}
            name={card.value + card.suit}
            onClick={(setIsFaceUp) => {
              setIsFaceUp((prevState) => !prevState);
            }}
            backFace={backFace.fileName}
            frontFace={card.fileName}
          />
        ))}
      </div>
      {name}
    </div>
  );
};

export default Player;
