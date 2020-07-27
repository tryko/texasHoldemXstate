// function drawOneCommunity({ deck, communityCards, ...rest }) {
//   const card = deck.pop()
//   return {
//     ...rest,
//     deck: [...deck],
//     communityCards: [...communityCards, card]
//   }
// }

// function burnOneFromDeck({ deck, discardPile, ...rest }) {
//   const card = deck.pop()
//   return {
//     ...rest,
//     deck: [...deck],
//     discardPile: [...discardPile, card]
//   }
// }

// export function dealOneCard(context) {
//   const res = burnOneFromDeck(context)
//   return drawOneCommunity(res)
// }

// export function dealFlop(context) {
//   const fns = [burnOneFromDeck, drawOneCommunity, drawOneCommunity, drawOneCommunity]
//   const newContext = fns.reduce((ctx, fn) => fn(ctx), context)
//   return newContext
// }

export function dealToPlayers({ deck, players, ...rest }) {
  return {
    ...rest,
    players: players.map((p) => ({
      ...p,
      cards: [deck.pop(), deck.pop()]
    })),
    deck: [...deck]
  }
}

export function drawCommunityAndDiscard(context, amount) {
  const { communityCards, discardPile, deck } = context
  return {
    ...context,
    discardPile: [...discardPile, deck.pop()],
    communityCards: [...communityCards, ...deck.filter((c, i) => i > deck.length - 1 - amount)],
    deck: deck.filter((c, i) => i < deck.length - 1 - amount)
  }
}


