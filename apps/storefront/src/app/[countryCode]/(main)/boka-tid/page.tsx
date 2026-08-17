import { Metadata } from "next"
import { BookingCalendar } from "@modules/booking/components/booking-calendar"

export const metadata: Metadata = {
  title: "Tjänster | Ert Företagsnamn",
  description: "Våra tjänster inom trappstädning",
}

export default function BokatidPage() {
  return (
    <div className="content-container py-12">
      <h1 className="text-3xl font-semibold mb-6">Boka en tid</h1>
      <BookingCalendar />
    </div>
  )
}
