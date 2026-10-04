"use client"

// TODO: byt ut mot ett riktigt API-anrop mot databasen när backend är klar,
// t.ex. await fetch(`/api/available-times?date=${date.toISOString()}`)
function getAvailableTimesForDate(date: Date): string[] {
  return ["08:00", "10:00", "13:00", "15:00"]
}

export function BookingTable() {
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
                <td className="p-0"></td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
