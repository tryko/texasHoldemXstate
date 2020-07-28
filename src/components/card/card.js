import React, { useState } from "react"
import "./Card.css"

const Card = ({ backFace, cardIndex, frontFace }) => {
  const [isFaceUp, setIsFaceUp] = useState(false)

  const createInline = (i) => {
    if (typeof i === "number") {
      return {
        marginTop: i * 0.5 + "px",
        marginLeft: i * 0.5 + "px",
        position: "absolute",
        zIndex: i
      }
    }
    return {}
  }
  const handleClick = () => {
    if (frontFace) setIsFaceUp((prevValue) => !prevValue)
  }

  return (
    <div className="flip-card" style={createInline(cardIndex)} onClick={handleClick}>
      <div className={`flip-card-inner  ${isFaceUp ? "flip-it" : ""}`}>
        <div className="flip-card-front">
          <img src={backFace} className="image-card" alt="" />
        </div>
        {frontFace && (
          <div className="flip-card-back">
            <img src={frontFace} className="image-card" alt="" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Card
