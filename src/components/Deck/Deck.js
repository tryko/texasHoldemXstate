import React from "react"
import FlexWrapper from "./../FlexWrapper/FlexWrapper"
import DeckCards from './DeckCards/DeckCards'
import Control from "./../GameControl/Control"
import GameControl from "./../GameControl/GameControl"
import "./Deck.css"

const Deck = ({ deck, backFace, name, send }) => {
  const handleDraw = (e) => {
    if (deck.length) send("DRAW")
  }

  const handleShuffle = () => {
    if (deck.length) send("SHUFFLE")
  }

  return (
    <FlexWrapper isDeck>
      <DeckCards deck={deck} backFace={backFace}/>
      <GameControl>
        <Control name={name} func={handleDraw} />
        <Control name="shuffle" func={handleShuffle} />
      </GameControl>
    </FlexWrapper>
  )
}

export default Deck
