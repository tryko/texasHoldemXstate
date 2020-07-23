import React, { useState } from "react";
import "./Card.css";

const Card = ({ frontFace, onClick, inLineStyle, backFace }) => {

  const [isFaceUp, setIsFaceUp] = useState(false);
  const handleClick = () => {
    if (typeof onClick === "function") onClick(setIsFaceUp);
  };

  return (
    <div className="flip-card" style={inLineStyle} onClick={handleClick}>
      <div className={`flip-card-inner  ${isFaceUp ? "flip-it" : ""}`}>
        <div className="flip-card-front">
          <img
            src={backFace}
            className="image-card"
            alt=""
          />
        </div>
        {typeof onClick === "function" && (
          <div className="flip-card-back">
            <img
              src={frontFace}
              className="image-card"
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
