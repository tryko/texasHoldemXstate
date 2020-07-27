import React, { useEffect, useState } from "react"
import { useMachine } from "@xstate/react"
import Deck from "./components/Deck/Deck"
import { getFileName } from "./util/util"
import { gameMachine } from "./store/gameMachine"
// import GameControl from "./components/GameControl/GameControl"
import Player from "./components/Player/Player"
import Control from "./components/GameControl/Control"
import CardsOnTable from "./components/CardsOnTable/CardsOnTable"
import "./App.css"

const App = () => {
  const [backFace, setBackFace] = useState("")
  const [current, send] = useMachine(gameMachine)

  const {
    context: { deck: ctxDeck, players: ctxPlayers, communityCards: ctxcommunityCards, discardPile: ctxDiscardPile }
  } = current

  useEffect(() => {
    const gettingCards = async () => {
      const backOfCard = await getFileName("1B")
      setBackFace(backOfCard)
    }
    gettingCards()
  }, [])

  const handleDraw = (e) => {
    if (ctxDeck.length) send("DRAW")
  }

  const handleShuffle = () => {
    if (ctxDeck.length) send("SHUFFLE")
  }

  return (
    <div className="App">
      <div className="flex-wrapper">
        <div className="deck-wrapper addonMargin">
          <Deck cards={ctxDeck} numOfCardPlaces={1} backFace={backFace} />
          <div className="game-control">
            <Control name={current.value} func={handleDraw} />
            <Control name="shuffle" func={handleShuffle} />
          </div>
        </div>
      </div>
      <CardsOnTable communityCards={ctxcommunityCards} discardPile={ctxDiscardPile} backFace={backFace} />
      <div className="flex-wrapper">
        <div className="players-wrapper">
          {ctxPlayers.map((p) => {
            return <Player key={p.id} name={p.name} cards={p.cards} backFace={backFace} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
