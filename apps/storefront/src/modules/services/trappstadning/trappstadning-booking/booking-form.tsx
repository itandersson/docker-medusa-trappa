"use client"

import { useState } from "react"

export function BookingForm() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium" htmlFor="address">
          Adress
        </label>
        <input
          id="address"
          type="text"
          value={""}
          className="rounded-md border p-2 text-sm"
          placeholder="Gatuadress 12"
        />
      </div>

      <div className="flex gap-3">
        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium" htmlFor="postalCode">
            Postnummer
          </label>
          <input
            id="postalCode"
            type="text"
            value={""}
            className="rounded-md border p-2 text-sm"
            placeholder="123 45"
          />
        </div>

        <div className="flex flex-col gap-1 flex-1">
          <label className="text-sm font-medium" htmlFor="municipality">
            Kommun
          </label>
          <input
            id="municipality"
            type="text"
            value={""}
            className="rounded-md border p-2 text-sm"
            placeholder="T.ex. Sjöbo"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium" htmlFor="notes">
          Övrigt
        </label>
        <textarea
          id="notes"
          value={""}
          className="rounded-md border p-2 text-sm min-h-[80px]"
          placeholder="Övrig information om fastigheten..."
        />
      </div>
    </div>
  )
}
