const cardValues = ["1","2","3","4","5", "6","7", "8","9", "10","J","Q","K","A"];
const cardSuits = ["heart","diamond","club","spade"]

const setDeck = () => {
    const cards = [];
    for (let i = 0; i < 56; i++){
        const card = {};
        // card.isFaceUp = false;
        card.value = cardValues[i%14];
        card.suit = cardSuits[Math.floor(i/14)]
        cards.push(card)
    }
    return cards
}

// const shuffle = (array) => {
//   console.log(array)
//     var currentIndex = array.length, temporaryValue, randomIndex;
  
//     while (0 !== currentIndex) {
  
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
  
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
  
//     return array;
//   }

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

const getDeck = () => {
      return shuffleArray(setDeck())
  }

export default getDeck;