const cardValues = ["2","3","4","5", "6","7", "8","9", "T","J","Q","K","A"];
const cardSuits = ["H","D","C","S"]

const setDeck = () => {
    const cards = [];
    for (let i = 0; i < 52; i++){
        const card = {};
        card.value = cardValues[i%13];
        card.suit = cardSuits[Math.floor(i/13)]
        card.fileName = card.value + card.suit;
        cards.push(card)
    }
    return cards
}
const getCardFileName = (card) => card.value + card.suit;

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

const getDeck = () => {
      return shuffle(setDeck())
  }

export {
    getDeck,
    getCardFileName,
    setDeck,
    shuffle
};