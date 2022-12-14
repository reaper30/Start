import React, { useState } from "react"
import CardWrapper from "../common/Card"

const withFunctions = (Component) => (props) => {
  const isAuth = Boolean(JSON.parse(localStorage.getItem("auth")))
  const [auth, setAuth] = useState(isAuth)
  const onLogin = () => {
    localStorage.setItem("auth", true)
    setAuth(!auth)
  }
  const onLogOut = () => {
    localStorage.removeItem("auth")
    setAuth(!auth)
  }

  console.log(isAuth)

  return (
    <>
      <CardWrapper>
        <Component onLogin={onLogin} onLogOut={onLogOut} isAuth={auth} />
      </CardWrapper>
    </>
  )
}

export default withFunctions
