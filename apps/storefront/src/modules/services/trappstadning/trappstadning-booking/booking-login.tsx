// booking-login.tsx

import * as React from "react"
import LoginTemplate from "@modules/account/templates/login-template"
import { retrieveCustomer } from "@lib/data/customer"

/** Text som visas när användaren inte är inloggad. */
export const MESSAGE_LOGGED_OUT = "Logga in för att slutföra bokningen."

/**
 * Inledning på texten som visas när användaren är inloggad.
 * E-postadressen (i fetstil) läggs till efter denna text i {@link getLoginState}.
 */
export const MESSAGE_LOGGED_IN_PREFIX = "Du är inloggad som: "

/**
 * Resultatet av {@link getLoginState}.
 */
type LoginState = {
  /** `true` om en kund är inloggad, annars `false`. */
  isLoggedIn: boolean
  /**
   * Meddelande som ska visas för användaren, som ett renderbart React-element
   * (`React.ReactNode`) i stället för en ren sträng:
   *
   * - Inloggad: `MESSAGE_LOGGED_IN_PREFIX` följt av e-postadressen i
   *   `<span className="font-semibold" data-testid="customer-email"
   *   data-value="<epost>">`. Om kunden saknar e-post visas texten `"null"`
   *   och `data-value` blir en tom sträng.
   * - Inte inloggad: `MESSAGE_LOGGED_OUT` (en vanlig sträng, vilket också är
   *   en giltig `React.ReactNode`).
   *
   * React escapar e-postadressen automatiskt, så ingen
   * `dangerouslySetInnerHTML` behövs.
   */
  message: React.ReactNode
}

/**
 * Hämtar inloggningsstatus och bygger rätt meddelande i ett och samma steg.
 *
 * Tar inga argument.
 *
 * @returns Ett löfte som resolvar till ett {@link LoginState}. Löftet avvisas
 * aldrig, eftersom alla fel hanteras internt.
 * - Inloggad: `{ isLoggedIn: true, message: <>Du är inloggad som: <span class="font-semibold">epost</span></> }`
 * - Inte inloggad, eller om anropet till `retrieveCustomer` misslyckas:
 *   `{ isLoggedIn: false, message: MESSAGE_LOGGED_OUT }`
 */
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
   * Valfri callback som anropas när inloggningskontrollen är klar och tar emot
   * meddelandet som ska visas i `<Text size="small">` i föräldrakomponenten.
   *
   * Callbacken anropas högst en gång per körning av effekten, och aldrig om
   * komponenten hunnit avmonteras innan kontrollen blev klar.
   *
   * Bör vara stabil mellan renderingar (t.ex. en `useState`-setter eller en
   * funktion inlindad i `useCallback`), annars körs inloggningskontrollen om
   * vid varje rendering.
   *
   * @param message - Ett `React.ReactNode`:
   * - Inloggad: `"Du är inloggad som: "` följt av e-postadressen i ett
   *   `<span className="font-semibold">`.
   * - Inte inloggad: `MESSAGE_LOGGED_OUT`.
   *
   * @returns Inget (`void`).
   */
  onMessageChange?: (message: React.ReactNode) => void
}

/**
 * Inloggningssteget i bokningsflödet.
 *
 * - Inte inloggad: renderar `<LoginTemplate />` och skickar
 *   `MESSAGE_LOGGED_OUT` till `onMessageChange`.
 * - Inloggad: renderar inget och skickar `"Du är inloggad som: "` + e-posten i
 *   fetstil (som JSX) till `onMessageChange`.
 * - Medan kontrollen pågår renderas inget.
 *
 * I föräldrakomponenten ska tillståndet för meddelandet ha typen
 * `React.ReactNode`, t.ex. `React.useState<React.ReactNode>(null)`, och
 * renderas med `<Text size="small">{message}</Text>`.
 *
 * @param props - Se {@link BookingLoginProps}.
 * @param props.onMessageChange - Se {@link BookingLoginProps.onMessageChange}.
 * @returns `<LoginTemplate />` om användaren inte är inloggad, annars `null`
 * (både när användaren är inloggad och medan kontrollen pågår).
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
