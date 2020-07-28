import React from "react"
import FlexWrapper from "./../FlexWrapper/FlexWrapper"
import Player from "./Player/Player"

const Players = ({ players, backFace }) => {
  return (
    <FlexWrapper width="w-full" justifyBetween="justify-between">
        {players.map((p) => {
          return <Player key={p.id} name={p.name} cards={p.cards} backFace={backFace} />
        })}
    </FlexWrapper>
  )
}

export default Players
