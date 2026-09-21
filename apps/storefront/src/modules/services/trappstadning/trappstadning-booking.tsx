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
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-16 px-4 py-10">
      {/* Steg 1: Dag och tid */}
      <section className="flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Boka gratis genomgång
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Välj en dag och tid som passar er, så bokar vi in ett kostnadsfritt
            besök.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-medium text-slate-700 mb-4">
              Välj ledig dag
            </h2>
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

          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <h2 className="text-sm font-medium text-slate-700 mb-4">
              Välj ledig tid
            </h2>
            <AvailableTimesTable
              date={date}
              selectedTime={selectedTime}
              onSelectTime={setSelectedTime}
            />
          </div>
        </div>
      </section>

      <div className="h-px bg-slate-200" />

      {/* Steg 2: Fastighetsuppgifter */}
      <section className="flex flex-col gap-6">
        <div>
          <h2 className="text-lg font-medium text-slate-900">
            Fyll i uppgifter om fastighet
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Vi behöver adress och lite info för att kunna förbereda besöket.
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <PropertyDetailsForm onSubmit={handlePropertyDetailsSubmit} />
        </div>
      </section>
    </div>
  )
}
