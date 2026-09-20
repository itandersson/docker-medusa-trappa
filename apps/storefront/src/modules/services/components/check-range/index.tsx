import { RadioGroup, Label } from "@medusajs/ui"
import { useState } from "react"

export function CleaningFrequencyRadio() {
  const [value, setValue] = useState("recurring")

  return (
    <div className="flex flex-col gap-6">
      <RadioGroup
        value={value}
        onValueChange={setValue}
        className="border border-ui-border-base rounded-lg p-4"
      >
        <div className="flex items-center gap-2">
          <RadioGroup.Item value="oneTime" id="oneTime" />
          <Label htmlFor="oneTime">En gång</Label>
        </div>

        <div className="flex items-center gap-2">
          <RadioGroup.Item value="recurring" id="recurring" />
          <Label htmlFor="recurring">Löpande en gång per vecka</Label>
        </div>
      </RadioGroup>
    </div>
  )
}
