"use client"

import { useState } from "react"
import { Calendar } from "@medusajs/ui"
import { AvailableTimesTable } from "@modules/services/components/available-times-table"
import {
  PropertyDetailsForm,
  type PropertyDetails,
} from "@modules/services/components/property-details-form"

function getDefaultBookingDate(): Date {
  const date = new Date()
  date.setDate(date.getDate() + 2)
  date.setHours(0, 0, 0, 0)
  return date
}

// Det här är formen på datan som ska sparas i databasen längre fram.
type BookingSubmission = {
  date: string
  time: string
  address: string
  postalCode: string
  municipality: string
  notes: string
}

export function TrappstadningBooking() {
  const [minSelectableDate] = useState<Date>(getDefaultBookingDate)
  const [date, setDate] = useState<Date | null>(minSelectableDate)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)

  const handlePropertyDetailsSubmit = (details: PropertyDetails) => {
    if (!date || !selectedTime) {
      alert("Välj både dag och tid innan du bokar.")
      return
    }

    const booking: BookingSubmission = {
      date: date.toISOString().split("T")[0],
      time: selectedTime,
      address: details.address,
      postalCode: details.postalCode,
      municipality: details.municipality,
      notes: details.notes,
    }

    // TODO: skicka till databasen istället för alert, t.ex.
    // await fetch("/api/bookings", { method: "POST", body: JSON.stringify(booking) })
    alert(JSON.stringify(booking, null, 2))
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
      <h1>Boka gratis genomgång</h1>
      <h2>Välj ledig dag för att träffas:</h2>
      <div className="rounded-md border p-4 shadow-sm">
        <div
          className="
            [&_th]:w-10 
            [&_td]:w-10 
            [&_th]:p-0 
            [&_td]:p-0 
            [&_div.size-8]:w-full 
            [&_div.size-8]:justify-center
          "
        >
          <Calendar
            value={date}
            onChange={setDate}
            minValue={minSelectableDate}
          />
        </div>
      </div>

      <h2>Välj ledig tid:</h2>
      <AvailableTimesTable
        date={date}
        selectedTime={selectedTime}
        onSelectTime={setSelectedTime}
      />

      <h2>Fyll i uppgifter om fastighet:</h2>
      <PropertyDetailsForm onSubmit={handlePropertyDetailsSubmit} />
    </div>
  )
}
