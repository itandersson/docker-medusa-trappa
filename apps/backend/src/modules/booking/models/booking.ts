import { model } from "@medusajs/framework/utils"

const Booking = model
  .define("booking", {
    id: model.id().primaryKey(),
    date: model.text(),        // "2026-11-20"
    time: model.text(),        // "15:00"
    customer_id: model.text(), // Medusas customer-id (inloggning hanterar vi senare)
  })
  .indexes([
    {
      // Samma datum + tid kan bara bokas en gång (ignorerar mjukt raderade)
      on: ["date", "time"],
      unique: true,
      where: "deleted_at IS NULL",
    },
  ])

export default Booking