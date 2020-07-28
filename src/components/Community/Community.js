import React from "react"
import "./Community.css"

import Card from "../Card/Card"
const Community = ({ communityCards }) => {
  return (
    <div className="playing-cards">
      {communityCards.map((card) => (
        <div className="card-wrapper" key={card.id}>
          <Card backFace={card.fileName} />
        </div>
      ))}
    </div>
  )
}

export default Community
