import React, { useRef, useState, useEffect } from "react"
import CardWrapper from "../../common/Card"
import Divider from "../../common/divider"
import SmallTitle from "../../common/typografy/smallTitle"
const PrevStateExample = () => {
  const prevState = useRef("")
  const [otherState, setOtherState] = useState("you gay")

  const toggleOtherState = () => {
    setOtherState((prevState) =>
      prevState === "William" ? "Defoe" : "William"
    )
  }

  useEffect(() => {
    prevState.current = otherState
  }, [otherState])

  return (
    <CardWrapper>
      <SmallTitle>Предыдущее состояние</SmallTitle>
      <Divider />
      <p>prev State: {prevState.current}</p>
      <p>current State: {otherState}</p>
      <button className="btn btn-primary" onClick={toggleOtherState}>
        Toggle other state
      </button>
    </CardWrapper>
  )
}

export default PrevStateExample
