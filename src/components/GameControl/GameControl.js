import React from "react";
import "./GameControl.css";
import "./../../assets/main.css";

const GameControl = ({ controls }) => {
  const createControlElments = (controls) => {
    return controls.map((ctrl) => {
      return (
        <input
          className="btn"
          value={ctrl.name}
          type="button"
          onClick={ctrl.func}
        />
      );
    });
  };
  return (
    <div className="game-control">
      {controls.map((ctrl) => {
        return (
          <input
            key={ctrl.name}
            className="btn"
            value={ctrl.name}
            type="button"
            onClick={ctrl.func}
          />
        );
      })}
    </div>
  );
};

export default GameControl;
