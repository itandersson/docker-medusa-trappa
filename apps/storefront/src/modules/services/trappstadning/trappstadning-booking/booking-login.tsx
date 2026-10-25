// booking-login.tsx
import * as React from "react"
//import LoginTemplate from "@modules/account/templates/login-template"
import BookingLoginTemplate from "./booking-login-template"
import { retrieveCustomer } from "@lib/data/customer"

export const MESSAGE_LOGGED_OUT = "Logga in för att slutföra bokningen."

export const MESSAGE_LOGGED_IN_PREFIX = "Du är inloggad som: "

type LoginState = {
  isLoggedIn: boolean
  message: React.ReactNode
}

async function getLoginState(): Promise<LoginState> {
  try {
    const customer = await retrieveCustomer()
    if (customer) {
      return {
        isLoggedIn: true,
        message: (
          <>
            {MESSAGE_LOGGED_IN_PREFIX}
            <span
              className="font-semibold"
              data-testid="customer-email"
              data-value={customer.email ?? ""}
            >
              {customer.email || "null"}
            </span>
          </>
        ),
      }
    }
  } catch {}
  return { isLoggedIn: false, message: MESSAGE_LOGGED_OUT }
}

type BookingLoginProps = {
  onMessageChange?: (message: React.ReactNode) => void
}

export function BookingLogin({ onMessageChange }: BookingLoginProps) {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean | null>(null)
  const [refreshKey, setRefreshKey] = React.useState(0)

  React.useEffect(() => {
    let cancelled = false

    getLoginState().then(({ isLoggedIn, message }) => {
      if (cancelled) return
      setIsLoggedIn(isLoggedIn)
      onMessageChange?.(message)
    })

    return () => {
      cancelled = true
    }
  }, [onMessageChange, refreshKey])

  const handleLoggedIn = React.useCallback(() => {
    setRefreshKey((k) => k + 1)
  }, [])

  if (isLoggedIn === null || isLoggedIn) return null

  return (
    <div>
      <BookingLoginTemplate onLoggedIn={handleLoggedIn} />
    </div>
  )
}
