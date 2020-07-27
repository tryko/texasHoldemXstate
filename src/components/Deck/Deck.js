import React from "react"
import "./Deck.css"
import Card from "../Card/Card"

const Deck = ({ cards, backFace }) => {
  const createCardProps = (card, i, cardsLength) => {
    const cardProps = {
      key: card.id,
      frontFace: card.fileName,
      inLineStyle: {
        marginTop: i * 0.5 + "px",
        marginLeft: i * 0.5 + "px",
        position: "absolute",
        zIndex: i,
      },
      backFace: backFace,
    }
    if (i === cardsLength - 1) cardProps.onClick = (setIsFaceUp) => setIsFaceUp((prevState) => !prevState)
    return cardProps
  }

  return (
    <div className="card-place">
      {cards.map((card, i) => {
        return <Card {...createCardProps(card, i, cards.length)} />
      })}
    </div>
  )
}

export default Deck
