import React from "react"
import Card from "../../Card/Card"

const Community = ({ communityCards }) => {
  return (
    <div className="flex justify-between">
      {communityCards.map((card) => (
        <Card key={card.id} backFace={card.fileName} marginLeft="ml-6" />
      ))}
    </div>
  )
}

export default Community
