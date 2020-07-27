import { Machine, assign } from "xstate"
import { getCards, shuffle } from "../util/util"
import { players } from "./initData"
import { dealToPlayers, drawCommunityAndDiscard } from "./actions"

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
    communityCards: [], // change to community
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
          actions: assign(dealToPlayers)
        }
      }
    },
    flop: {
      on: {
        DRAW: {
          target: "turn",
          actions: assign((context) => drawCommunityAndDiscard(context, 3))
        }
      }
    },
    turn: {
      on: {
        DRAW: {
          target: "river",
          actions: assign((context) => drawCommunityAndDiscard(context, 1))
        }
      }
    },
    river: {
      on: {
        DRAW: {
          target: "deal",
          actions: assign((context) => drawCommunityAndDiscard(context, 1))
        }
      }
    }
  }
})
