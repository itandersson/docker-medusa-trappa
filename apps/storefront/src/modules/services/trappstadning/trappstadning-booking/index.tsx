// index.tsx
"use client"

import { ProgressTabs, Text, Button } from "@medusajs/ui"
import * as React from "react"
import { BookingCalendar } from "./booking-calendar"
import { BookingForm } from "./booking-form"
import { BookingLogin } from "./booking-login"

/**
 * Bokningsflöde för trappstädning med tre steg: boka tid, uppgifter, logga in.
 * Meddelandet i inloggningssteget bestäms av `BookingLogin`.
 *
 * @returns Bokningsflödets JSX.
 */
export function TrappstadningBooking() {
  const steps = ["bokaTid", "uppgifter", "loggaIN"]
  const [active, setActive] = React.useState("bokaTid")
  const [loginMessage, setLoginMessage] = React.useState("")
  const currentIndex = steps.indexOf(active)

  const handleNext = () => {
    if (currentIndex < steps.length - 1) {
      setActive(steps[currentIndex + 1])
    }
  }
  const handlePrev = () => {
    if (currentIndex > 0) {
      setActive(steps[currentIndex - 1])
    }
  }

  return (
    <div className="w-full px-4 flex flex-col gap-4">
      <ProgressTabs value={active} onValueChange={setActive}>
        <div className="border-b border-ui-border-base">
          <ProgressTabs.List>
            <ProgressTabs.Trigger value="bokaTid">
              Boka tid
            </ProgressTabs.Trigger>
            <ProgressTabs.Trigger value="uppgifter">
              Uppgifter
            </ProgressTabs.Trigger>
            <ProgressTabs.Trigger value="loggaIN">
              Logga in
            </ProgressTabs.Trigger>
          </ProgressTabs.List>
        </div>
        <div className="mt-2">
          <ProgressTabs.Content value="bokaTid">
            <Text size="small">
              Välj en dag och tid som passar er, så bokar vi in ett
              kostnadsfritt besök.
            </Text>
            <BookingCalendar />
          </ProgressTabs.Content>
          <ProgressTabs.Content value="uppgifter">
            <Text size="small">
              Vi behöver adress och lite info för att kunna förbereda besöket.
            </Text>
            <BookingForm />
          </ProgressTabs.Content>
          <ProgressTabs.Content value="loggaIN">
            <Text size="small">{loginMessage}</Text>
            <BookingLogin onMessageChange={setLoginMessage} />
          </ProgressTabs.Content>
        </div>
      </ProgressTabs>
      <div className="mt-4 flex gap-2 self-end">
        <Button
          variant="secondary"
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          Prev
        </Button>
        <Button
          onClick={handleNext}
          disabled={currentIndex === steps.length - 1}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
