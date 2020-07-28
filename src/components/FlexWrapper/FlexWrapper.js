import React from "react"
import classnames from "classnames"
import "./FlexWrapper.css"

const FlexWrapper = ({ children, justifyBetween, width }) => {
  return <div className={classnames("flex", justifyBetween, width)}>{children}</div>
}

export default FlexWrapper
