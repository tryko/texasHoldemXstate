import React from "react"
import FlexWrapper from "./../FlexWrapper/FlexWrapper"
import Player from "./Player/Player"
import "./Players.css"

const Players = ({ players, backFace }) => {
  return (
    <FlexWrapper>
      <div className="players-wrapper">
        {players.map((p) => {
          return <Player key={p.id} name={p.name} cards={p.cards} backFace={backFace} />
        })}
      </div>
    </FlexWrapper>
  )
}

export default Players
