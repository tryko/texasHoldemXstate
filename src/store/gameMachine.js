import { Machine, assign } from "xstate"
import { getCards, shuffle } from "../util/util"
import { players } from "./initData"
import { actions } from "./actions"

async function invokeGetCards() {
  const cards = await getCards()
  const shuffledCards = shuffle(cards)
  return shuffledCards
}

export const gameMachine = Machine({
  id: "gameMachineID",
  initial: "start",
  context: {
    deck: [],
    discardPile: [],
    players: players,
    numOfCardsForPlayer: 2,
    roundCards: [], // change to community
    drawnCards: []
  },
  on: {
    SHUFFLE: {
      actions: [
        assign((context, event) => {
          return {
            ...context,
            deck: shuffle(context.deck)
          }
        })
      ]
    }
  },
  states: {
    start: {
      invoke: {
        id: "get-cards",
        src: invokeGetCards,
        onDone: {
          target: "deal",
          actions: assign({
            deck: (_, event) => {
              return event.data
            }
          })
        }
      }
    },
    deal: {
      on: {
        DRAW: {
          target: "flop",
          actions: actions.deal.DRAW
        }
      }
    },
    flop: {
      on: {
        DRAW: {
          target: "turn",
          actions: actions.flop.DRAW
        }
      }
    },
    turn: {
      on: {
        DRAW: {
          target: "river",
          actions: actions.turn.DRAW
        }
      }
    },
    river: {
      on: {
        DRAW: {
          target: "deal",
          actions: actions.turn.DRAW
        }
      }
    }
  }
})
