"use client"

import { useState } from "react"

export type PropertyDetails = {
  address: string
  postalCode: string
  municipality: string
  notes: string
}

type PropertyDetailsFormProps = {
  onSubmit: (details: PropertyDetails) => void
}

const EMPTY_DETAILS: PropertyDetails = {
  address: "",
  postalCode: "",
  municipality: "",
  notes: "",
}

export function PropertyDetailsForm({ onSubmit }: PropertyDetailsFormProps) {
  const [details, setDetails] = useState<PropertyDetails>(EMPTY_DETAILS)

  const handleChange = (field: keyof PropertyDetails, value: string) => {
    setDetails((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = () => {
    onSubmit(details)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium" htmlFor="address">
          Adress
        </label>
        <input
          id="address"
          type="text"
          value={details.address}
          onChange={(e) => handleChange("address", e.target.value)}
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
            value={details.postalCode}
            onChange={(e) => handleChange("postalCode", e.target.value)}
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
            value={details.municipality}
            onChange={(e) => handleChange("municipality", e.target.value)}
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
          value={details.notes}
          onChange={(e) => handleChange("notes", e.target.value)}
          className="rounded-md border p-2 text-sm min-h-[80px]"
          placeholder="Övrig information om fastigheten..."
        />
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        className="mt-2 rounded-md bg-slate-800 text-white py-3 font-medium hover:bg-slate-700 transition-colors"
      >
        Boka gratis genomgång
      </button>
    </div>
  )
}
