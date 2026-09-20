"use client"

import { useEffect, useState } from "react"
import { TimeSlotButton } from "@modules/services/components/time-slot-button"

// TODO: byt ut mot ett riktigt API-anrop mot databasen när backend är klar,
// t.ex. await fetch(`/api/available-times?date=${date.toISOString()}`)
function getAvailableTimesForDate(date: Date): string[] {
  return ["08:00", "10:00", "13:00", "15:00"]
}

type AvailableTimesTableProps = {
  date: Date | null
  selectedTime: string | null
  onSelectTime: (time: string) => void
}

export function AvailableTimesTable({
  date,
  selectedTime,
  onSelectTime,
}: AvailableTimesTableProps) {
  const [availableTimes, setAvailableTimes] = useState<string[]>([])
  const [loadingTimes, setLoadingTimes] = useState(false)

  useEffect(() => {
    if (!date) {
      setAvailableTimes([])
      return
    }

    // Ny instans av tabellen: nollställ valt klockslag och "läs in" tiderna på nytt
    onSelectTime("")
    setLoadingTimes(true)

    // Simulerar en asynkron hämtning (ersätt med riktigt fetch-anrop senare)
    const timeout = setTimeout(() => {
      setAvailableTimes(getAvailableTimesForDate(date))
      setLoadingTimes(false)
    }, 150)

    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date])

  if (!date) {
    return (
      <p className="text-sm text-slate-500">
        Välj en dag ovan för att se lediga tider.
      </p>
    )
  }

  return (
    <div className="rounded-md border shadow-sm overflow-hidden">
      <table className="w-full border-collapse">
        <tbody>
          {loadingTimes ? (
            <tr>
              <td className="p-3 text-center text-sm text-slate-500">
                Läser in lediga tider…
              </td>
            </tr>
          ) : (
            availableTimes.map((time, index) => (
              <tr key={time} className={index !== 0 ? "border-t" : ""}>
                <td className="p-0">
                  <TimeSlotButton
                    time={time}
                    isSelected={selectedTime === time}
                    onSelect={onSelectTime}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
