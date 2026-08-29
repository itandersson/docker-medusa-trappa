import { Metadata } from "next"
import { BookingCalendar } from "@modules/booking/components/booking-calendar"
import { Main } from "@modules/layout/components/main"

export const metadata: Metadata = {
  title: "Tjänster | Ert Företagsnamn",
  description: "Våra tjänster inom trappstädning",
}

export default function BokatidPage() {
  return (
    <Main>
      <div className="content-container py-12">
        <BookingCalendar />
      </div>
    </Main>
  )
}
