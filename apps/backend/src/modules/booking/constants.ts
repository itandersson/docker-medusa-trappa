export const BOOKING_MODULE = "booking"

export const BOOKING_TIMES = ["08:00", "10:00", "13:00", "15:00", "17:00"] as const
export type BookingTime = (typeof BOOKING_TIMES)[number]