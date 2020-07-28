import React from "react"
import "./FlexWrapper.css"

const FlexWrapper = ({ children, isDeck}) => {
  return (
    <div className="flex-wrapper">
      <div className={isDeck? "deck-wrapper" : ""}>{children}</div>
    </div>
  )
}

export default FlexWrapper
