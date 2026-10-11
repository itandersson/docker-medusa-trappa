// booking-login.tsx

import * as React from "react"
import LoginTemplate from "@modules/account/templates/login-template"
import { retrieveCustomer } from "@lib/data/customer"

/** Text som visas när användaren inte är inloggad. */
export const MESSAGE_LOGGED_OUT = "Logga in för att slutföra bokningen."

/** Text som visas när användaren redan är inloggad. */
export const MESSAGE_LOGGED_IN = "Du är redan inloggad"

/**
 * Props för {@link BookingLogin}.
 */
type BookingLoginProps = {
  /**
   * Callback som tar emot meddelandet som ska visas i `<Text size="small">`
   * i föräldrakomponenten.
   *
   * @param message - `MESSAGE_LOGGED_OUT` om användaren inte är inloggad,
   * annars `MESSAGE_LOGGED_IN`.
   */
  onMessageChange?: (message: string) => void
}

/**
 * Kontrollerar om användaren är inloggad.
 *
 * @returns Ett löfte som resolvar till `true` om en kund hittas,
 * annars `false` (även om anropet misslyckas).
 */
async function checkIsLoggedIn(): Promise<boolean> {
  try {
    const customer = await retrieveCustomer()
    return !!customer
  } catch {
    return false
  }
}

/**
 * Inloggningssteget i bokningsflödet.
 *
 * - Inte inloggad: renderar `<LoginTemplate />` och skickar
 *   `MESSAGE_LOGGED_OUT` till `onMessageChange`.
 * - Inloggad: renderar inget och skickar `MESSAGE_LOGGED_IN`
 *   till `onMessageChange`.
 * - Medan kontrollen pågår renderas inget.
 *
 * @param props - Se {@link BookingLoginProps}.
 * @returns `<LoginTemplate />` om användaren inte är inloggad, annars `null`.
 */
export function BookingLogin({ onMessageChange }: BookingLoginProps) {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean | null>(null)

  React.useEffect(() => {
    let cancelled = false

    checkIsLoggedIn().then((loggedIn) => {
      if (cancelled) return
      setIsLoggedIn(loggedIn)
      onMessageChange?.(loggedIn ? MESSAGE_LOGGED_IN : MESSAGE_LOGGED_OUT)
    })

    // Förhindrar state-uppdatering om komponenten hunnit avmonteras
    return () => {
      cancelled = true
    }
  }, [onMessageChange])

  if (isLoggedIn === null || isLoggedIn) return null

  return (
    <div>
      <LoginTemplate />
    </div>
  )
}
