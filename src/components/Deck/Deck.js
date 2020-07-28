import React from "react"
import FlexWrapper from "./../FlexWrapper/FlexWrapper"
import Control from "./../GameControl/Control"
import GameControl from "./../GameControl/GameControl"
import "./Deck.css"

import Card from "../Card/Card"
const Deck = ({ deck, backFace, name, send }) => {
  const handleDraw = (e) => {
    if (deck.length) send("DRAW")
  }

  const handleShuffle = () => {
    if (deck.length) send("SHUFFLE")
  }

  return (
    <FlexWrapper isDeck>
      <div className="card-place">
        {deck.map((card, i) => {
          return <Card key={card.id} backFace={backFace.fileName} cardIndex={i} />
        })}
      </div>
      <GameControl>
        <Control name={name} func={handleDraw} />
        <Control name="shuffle" func={handleShuffle} />
      </GameControl>
    </FlexWrapper>
  )
}

export default Deck
