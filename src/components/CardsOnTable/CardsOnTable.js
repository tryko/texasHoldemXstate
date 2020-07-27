import React from "react"
import Card from "../Card/Card"
import "./CardsOnTable.css"

const CardsOnTable = ({ backFace, discardPile, roundCards }) => {
  return (
    <div className="round-cards">
      <div className="discarded-cards">
        {discardPile.map((card, i) => (
          <Card
            key={card.id}
            backFace={backFace}
            inLineStyle={{
              marginLeft: i * 4.5 + "px",
              position: "absolute",
              zIndex: i
            }}
          />
        ))}
      </div>
      <div className="playing-cards">
        {roundCards.map((card) => (
          <div class="card-wrapper">
            <Card key={card.id} name={card.value + card.suit} backFace={card.fileName} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardsOnTable
