import React, { useState, useLayoutEffect, Suspense, useEffect } from "react";
import "./DrawnCard.css";
import Card from "../card/card";

// const CardSVG = React.lazy((card = '1B') => import(`./../../assets/poker-qr/${card}.svg`));

const DrawnCard = ({suit, value}) => {
  // const cards = getDeck();
  './../../assets/poker-qr/'
  const [ isFaceUp, setIsFaceUp ] = useState(false);
  // const ImportedIconRef = React.useRef(null);
  // useEffect(() => {
  //  const loadingSVG = async () => {
  //   ImportedIconRef.current = (await import(`./../../assets/poker-qr/${'1B'}.svg`)).ReactComponent;
  //     // ImportedIconRef.current = await import(`./../../assets/poker-qr/${'1B'}.svg`) ;
  //   };
  //   loadingSVG();
  // })

  useLayoutEffect(() => {
    setIsFaceUp(false)
  }, [suit,value])

  const toggleFlip = () => {
    setIsFaceUp((prevState) => !prevState)
  }

  return (
    <div>
        <div className="Deck">
          <div className="Card" onClick={toggleFlip}>
           {isFaceUp &&
          //  <Suspense fallback={<div>Loading</div>}>
          <Card name="3D"/>
            // <ImportedIconRef.current/> 
            // </Suspense> 
            }
            <img src="./../../resources/poker-qr/1B.svg" alt="face down"/>
          </div>
        </div>
    </div>
  );
};

export default DrawnCard;
