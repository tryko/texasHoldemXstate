import React, { useEffect, useState } from "react";
import './Card.css';
const Card = ({ name, onClick }) => {
  const [icon, setIcon] = useState("");
  const [isFaceUp, setIsFaceUp] = useState(false);

  useEffect(() => {
    const importSVG = async () => {
      const imgName = isFaceUp ? name : "1B";
      let importedIcon = await import(`./../../assets/poker-qr/${imgName}.svg`);
      setIcon(importedIcon.default);
    };
    importSVG();
  }, [name, isFaceUp]);

  const handleClick = () => {
    onClick(setIsFaceUp);
    // setIsFaceUp(!isFaceUp);
  }

  return <img src={icon} className="image-card" alt="" onClick={handleClick}/>;
};

export default Card;
