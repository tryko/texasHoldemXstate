import { assign } from "xstate"

// turn to functions

function drawFromDeck({ deck }) {

}

function drawOneCommunity({deck, roundCards}) {
    const card = deck.pop()
    return {
      deck,
      roundCards: [...roundCards, card]
    }
}

function burnOneCommunity() {}

function dealFlop() {
  burnOneCommunity()
  drawOneCommunity()
  drawOneCommunity()
  drawOneCommunity()
}

export const actions = {
  deal: {
    DRAW: assign((context, event) => {
      const { deck, players, numOfCardsForPlayer } = context
      const numOfCardsLeft = deck.length - 1 - numOfCardsForPlayer * players.length
      const drawnCards = deck.filter((c, i) => i > numOfCardsLeft)
      const playersWithCards = players.map((p) => {
        return {
          ...p,
          cards: drawnCards.splice(0, 2)
        }
      })
      const filteredDeck = deck.filter((c, i) => !(i > numOfCardsLeft))
      return {
        ...context,
        deck: filteredDeck,
        players: playersWithCards
      }
    })
  },
  flop: {
    DRAW: assign((context, event) => {
      const { deck } = context
      const numOfCardsLeft = deck.length - 4 - 1
      const drawnCards = deck.filter((c, i) => i > numOfCardsLeft)
      const discardedCard = drawnCards.splice(0, 1)
      const filteredDeck = deck.filter((c, i) => !(i > numOfCardsLeft))
      return {
        ...context,
        deck: filteredDeck,
        roundCards: drawnCards,
        discardPile: discardedCard
      }
    })
  },
  turn: {
    DRAW: assign((context, event) => {
      const { deck, roundCards, discardPile } = context
      const numOfCardsLeft = deck.length - 2 - 1
      const drawnCards = deck.filter((c, i) => i > numOfCardsLeft)
      const discardedCard = drawnCards.splice(0, 1)
      const filteredDeck = deck.filter((c, i) => !(i > numOfCardsLeft))
      return {
        ...context,
        deck: filteredDeck,
        roundCards: [...roundCards, ...drawnCards],
        discardPile: [...discardPile, ...discardedCard]
      }
    })
  }
}
