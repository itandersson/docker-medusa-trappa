import type { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { MedusaError } from "@medusajs/framework/utils"
import { z } from "zod"
import { BOOKING_MODULE } from "../../../modules/booking/constants"
import type BookingModuleService from "../../../modules/booking/service"

const BodySchema = z.object({
  date: z.string(),
  time: z.string(),
  customer_id: z.string().min(1),
})

// POST /store/bookings
export async function POST(req: MedusaRequest, res: MedusaResponse) {
  const body = BodySchema.parse(req.body)
  const bookingService: BookingModuleService = req.scope.resolve(BOOKING_MODULE)

  try {
    const booking = await bookingService.createBooking(body)
    res.status(201).json({ booking })
  } catch (e: any) {
    if (e?.type === MedusaError.Types.CONFLICT) {
      // Egen text, så att Medusas standardmeddelande inte skriver över den
      return res.status(409).json({ type: "conflict", message: "Tiden är redan bokad" })
    }
    throw e
  }
}