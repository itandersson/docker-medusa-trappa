"use client"

import { useState } from "react"
import { Calendar } from "@medusajs/ui"

export function BookingCalendar() {
  const [date, setDate] = useState<Date | null>(null)
  const [time, setTime] = useState("10:00")

  const combinedDateTime = (() => {
    if (!date) return null
    const [h, m] = time.split(":").map(Number)
    const d = new Date(date)
    d.setHours(h)
    d.setMinutes(m)
    return d.toISOString()
  })()

  return (
    <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
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
          <Calendar value={date} onChange={setDate} />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium">Välj tid</label>
        <div className="flex items-center gap-2">
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="border rounded-md px-3 py-2 w-full"
          />
          <span className="text-xs text-ui-fg-muted">🕒</span>
        </div>
      </div>

      <div className="text-sm text-ui-fg-muted">
        <strong>Valt datum:</strong>{" "}
        {date
          ? date.toLocaleDateString("sv-SE", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })
          : "Inget valt"}
      </div>

      <div className="text-sm text-ui-fg-muted">
        <strong>ISO-format:</strong> {combinedDateTime ?? "Ingen tid vald"}
      </div>
    </div>
  )
}
