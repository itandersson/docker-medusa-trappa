import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { BOOKING_MODULE } from "../../../../modules/booking/constants"
import type BookingModuleService from "../../../../modules/booking/service"

// GET /store/bookings/availability?date=2026-11-20
export async function GET(req: MedusaRequest, res: MedusaResponse) {
  const date = String(req.query.date ?? "")
  const bookingService: BookingModuleService = req.scope.resolve(BOOKING_MODULE)

  const available_times = await bookingService.getAvailableTimes(date)
  res.json({ date, available_times })
}