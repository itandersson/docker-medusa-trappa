import { Module } from "@medusajs/framework/utils"
import BookingModuleService from "./service"
import { BOOKING_MODULE } from "./constants"

export default Module(BOOKING_MODULE, {
  service: BookingModuleService,
})