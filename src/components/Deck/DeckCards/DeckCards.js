import React from "react"
import "./DeckCards.css"

import Card from "./../../Card/Card"
const DeckCards = ({ deck, backFace}) => {

  return (
    <div className="card-place">
      {deck.map((card, i) => {
        return <Card key={card.id} backFace={backFace.fileName} cardIndex={i} />
      })}
    </div>
  )
}

export default DeckCards
