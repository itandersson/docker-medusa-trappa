"use client"

type TimeSlotButtonProps = {
  time: string
  isSelected: boolean
  onSelect: (time: string) => void
}

export function TimeSlotButton({
  time,
  isSelected,
  onSelect,
}: TimeSlotButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(time)}
      className={`w-full py-3 text-center transition-colors ${
        isSelected ? "bg-slate-800 text-white" : "hover:bg-slate-100"
      }`}
    >
      {time}
    </button>
  )
}
