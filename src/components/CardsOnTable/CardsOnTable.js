import React from "react"
import Card from "../Card/Card"
import "./CardsOnTable.css"

const CardsOnTable = ({ backFace, discardPile, communityCards }) => {
  return (
    <div className="round-cards">
      <div className="discarded-cards">
        {discardPile.map((card, i) => (
          <Card key={card.id} backFace={backFace.fileName} cardIndex={i} />
        ))}
      </div>
      <div className="playing-cards">
        {communityCards.map((card) => (
          <div className="card-wrapper" key={card.id}>
            <Card name={card.value + card.suit} backFace={card.fileName} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardsOnTable
