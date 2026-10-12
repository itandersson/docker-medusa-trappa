// booking-login.tsx

import * as React from "react"
import LoginTemplate from "@modules/account/templates/login-template"
import { retrieveCustomer } from "@lib/data/customer"

/** Text som visas när användaren inte är inloggad. */
export const MESSAGE_LOGGED_OUT = "Logga in för att slutföra bokningen."

/**
 * Inledning på texten som visas när användaren är inloggad.
 * E-postadressen läggs till efter denna text i {@link getLoginState}.
 */
export const MESSAGE_LOGGED_IN_PREFIX = "Du är inloggad som: "

/**
 * Resultatet av {@link getLoginState}.
 */
type LoginState = {
  /** `true` om en kund är inloggad, annars `false`. */
  isLoggedIn: boolean
  /**
   * Meddelande som ska visas för användaren:
   * `"Du är inloggad som <epost>"` eller `MESSAGE_LOGGED_OUT`.
   */
  message: string
}

/**
 * Hämtar inloggningsstatus och bygger rätt meddelande i ett och samma steg.
 *
 * Tar inga argument.
 *
 * @returns Ett löfte som resolvar till ett {@link LoginState}.
 * - Inloggad: `{ isLoggedIn: true, message: "Du är inloggad som <epost>" }`
 * - Inte inloggad, eller om anropet misslyckas:
 *   `{ isLoggedIn: false, message: MESSAGE_LOGGED_OUT }`
 */
async function getLoginState(): Promise<LoginState> {
  try {
    const customer = await retrieveCustomer()
    if (customer) {
      return {
        isLoggedIn: true,
        message: MESSAGE_LOGGED_IN_PREFIX + customer.email,
      }
    }
  } catch {
    // Vid fel behandlas användaren som utloggad
  }
  return { isLoggedIn: false, message: MESSAGE_LOGGED_OUT }
}

/**
 * Props för {@link BookingLogin}.
 */
type BookingLoginProps = {
  /**
   * Callback som tar emot meddelandet som ska visas i `<Text size="small">`
   * i föräldrakomponenten.
   *
   * @param message - `"Du är inloggad som <epost>"` om användaren är inloggad,
   * annars `MESSAGE_LOGGED_OUT`.
   */
  onMessageChange?: (message: string) => void
}

/**
 * Inloggningssteget i bokningsflödet.
 *
 * - Inte inloggad: renderar `<LoginTemplate />` och skickar
 *   `MESSAGE_LOGGED_OUT` till `onMessageChange`.
 * - Inloggad: renderar inget och skickar `"Du är inloggad som <epost>"`
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

    getLoginState().then(({ isLoggedIn, message }) => {
      if (cancelled) return
      setIsLoggedIn(isLoggedIn)
      onMessageChange?.(message)
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
