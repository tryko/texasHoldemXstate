import React from "react"
import "./DiscardPile.css"

import Card from "../Card/Card"
const DiscardPile = ({ discardPile, backFace}) => {
  return (
    <div className="discarded-cards">
      {discardPile.map((card, i) => (
        <Card key={card.id} backFace={backFace.fileName} cardIndex={i} />
      ))}
    </div>
  )
}

export default DiscardPile
