const cardValues = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "T",
  "J",
  "Q",
  "K",
  "A",
];
const cardSuits = ["H", "D", "C", "S"];

const createCardProps = (card, i, cardsLength) => {
  const cardProps = {
    key: card.id,
    name: card.value + card.suit,
    inLineStyle: {
      marginTop: i * 0.5 + "px",
      marginLeft: i * 0.5 + "px",
      position: "absolute",
      zIndex: i,
    },
    onClick: (setIsFaceUp) => {
      if (i === cardsLength - 1) setIsFaceUp((prevState) => !prevState);
    },
  };
  return cardProps;
};

const getCards = () => {
  const cards = setDeck();
  const deck = getFileNames(cards);
  return deck;
};

const getFileNames = async (cards) => {
  const cardsWithFileName = await Promise.all(
    cards.map(async (card) => {
      const { default: fileName } = await import(
        `./../assets/poker-qr/${card.name}.svg`
      );
      card.fileName = fileName;
      return card;
    })
  );
  return cardsWithFileName;
};

const getFileName = async (name) => {
  const { default: fileName } = await import(
    `./../assets/poker-qr/${name}.svg`
  );
  return fileName;
};

function makeid(length = 7) {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const setDeck = () => {
  const cards = [];
  for (let i = 0; i < 52; i++) {
    const card = {};
    card.id = makeid();
    card.value = cardValues[i % 13];
    card.suit = cardSuits[Math.floor(i / 13)];
    card.name = card.value + card.suit;
    cards.push(card);
  }
  return cards;
};

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return [...array];
}

export { createCardProps, getCards, getFileName, makeid, setDeck, shuffle };
