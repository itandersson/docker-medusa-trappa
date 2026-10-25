"use client"

import { useState } from "react"

import Register from "@modules/account/components/register"
//import Login from "@modules/account/components/login"
import Login from "./booking-login-template-login"

export enum LOGIN_VIEW {
  SIGN_IN = "sign-in",
  REGISTER = "register",
}

type Props = {
  onLoggedIn?: () => void
}

const BookingLoginTemplate = ({ onLoggedIn }: Props) => {
  const [currentView, setCurrentView] = useState("sign-in")

  return (
    <div className="w-full flex justify-start px-8 py-8">
      {currentView === "sign-in" ? (
        <Login setCurrentView={setCurrentView} onLoggedIn={onLoggedIn} />
      ) : (
        <Register setCurrentView={setCurrentView} />
      )}
    </div>
  )
}

export default BookingLoginTemplate
