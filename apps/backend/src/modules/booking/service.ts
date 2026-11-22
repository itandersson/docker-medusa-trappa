//service.ts
import { MedusaError, MedusaService } from "@medusajs/framework/utils"
import Booking from "./models/booking"
import { BOOKING_TIMES } from "./constants"

type CreateBookingInput = {
  date: string
  time: string
  customer_id: string
}

function isValidDate(date: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false
  const d = new Date(`${date}T00:00:00Z`)
  return !isNaN(d.getTime()) && d.toISOString().slice(0, 10) === date
}

function todayInSweden(): string {
  return new Date().toLocaleDateString("sv-SE", { timeZone: "Europe/Stockholm" })
}

class BookingModuleService extends MedusaService({ Booking }) {
  private assertDate(date: string) {
    if (!isValidDate(date)) {
      throw new MedusaError(MedusaError.Types.INVALID_DATA, "Ogiltigt datum, använd YYYY-MM-DD")
    }
    if (date < todayInSweden()) {
      throw new MedusaError(MedusaError.Types.INVALID_DATA, "Datumet har redan passerat")
    }
  }

  /** Returnerar de tider som är lediga ett visst datum. */
  async getAvailableTimes(date: string): Promise<string[]> {
    this.assertDate(date)
    const bookings = await this.listBookings({ date })
    const taken = new Set(bookings.map((b) => b.time))
    return BOOKING_TIMES.filter((t) => !taken.has(t))
  }

  /** Sparar en bokning. Kastar fel om tiden är ogiltig eller redan upptagen. */
  async createBooking(input: CreateBookingInput) {
    this.assertDate(input.date)

    if (!(BOOKING_TIMES as readonly string[]).includes(input.time)) {
      throw new MedusaError(MedusaError.Types.INVALID_DATA, "Ogiltig tid")
    }

    try {
      return await this.createBookings(input)
        } catch (e: any) {
      const msg = String(e?.message ?? "")
      // Unikt index slog till = någon hann före
      if (
        e?.code === "23505" ||
        e?.type === MedusaError.Types.DUPLICATE_ERROR ||
        msg.includes("already exists")
      ) {
        throw new MedusaError(MedusaError.Types.CONFLICT, "Tiden är redan bokad")
      }
      throw e
    }
  }
}

export default BookingModuleService