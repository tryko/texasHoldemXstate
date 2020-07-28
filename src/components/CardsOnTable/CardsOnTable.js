import React from "react"
import Community from "./Community/Community"
import DiscardPile from "./DiscardPile/DiscardPile"
import "./CardsOnTable.css"

const CardsOnTable = ({ backFace, discardPile, communityCards }) => {
  return (
    <div className="flex">
      <DiscardPile discardPile={discardPile} backFace={backFace} />
      <Community communityCards={communityCards} />
    </div>
  )
}

export default CardsOnTable
