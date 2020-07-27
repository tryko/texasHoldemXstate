import React from "react"
import "./GameControl.css"

const Control = ({ name, func }) => {
  return <input className="btn" value={name} type="button" onClick={func} />
}

export default Control
