import React from "react"
import { useMachine } from "@xstate/react"
import { gameMachine } from "./store/gameMachine"
import Deck from "./components/Deck/Deck"
import Players from "./components/Players/Players"
import CardsOnTable from "./components/CardsOnTable/CardsOnTable"

const App = () => {
  const [current, send] = useMachine(gameMachine)
  const {
    context: { backFace, communityCards, deck, discardPile, players },
    value: name
  } = current

  return (
    <div className="flex justify-between flex-col p-4 h-screen bg-teal-300">
      <Deck deck={deck} name={name} backFace={backFace} send={send} />
      <CardsOnTable communityCards={communityCards} discardPile={discardPile} backFace={backFace} />
      <Players players={players} backFace={backFace} />
    </div>
  )
}

export default App
