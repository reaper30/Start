import React, { useState, useRef, useEffect, useCallback } from "react"
import CardWrapper from "../../common/Card"
import SmallTitle from "../../common/typografy/smallTitle"

const UseCallBackExample = () => {
  const [data, setData] = useState({})
  const withOutCallback = useRef(0)
  const withCallback = useRef(0)

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  // Without callback
  const validateWithOutCallback = (data) => {
    console.log(data)
  }
  useEffect(() => {
    withOutCallback.current++
  }, [validateWithOutCallback])

  // With Callback
  const validateWithCallback = useCallback((data) => {
    console.log(data)
  }, [])
  useEffect(() => {
    withCallback.current++
  }, [validateWithCallback])

  useEffect(() => {
    validateWithOutCallback(data)
    validateWithCallback(data)
  }, [data])

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <p>Render withOutCallback: {withOutCallback.current}</p>
      <p>Render withCallback: {withCallback.current}</p>
      <label htmlFor="email" className="form-label">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        className="form-control"
        value={data.email || ""}
        onChange={handleChange}
      ></input>
    </CardWrapper>
  )
}

export default UseCallBackExample
