import { Metadata } from "next"
import { Main } from "@modules/layout/components/main"
import { TrappstadningContent } from "@modules/services/trappstadning/trappstadning-content"
import { TrappstadningBooking } from "@modules/services/trappstadning/trappstadning-booking"

export const metadata: Metadata = {
  title: "Tjänster & Bokning | Ert Företagsnamn",
  description: "Våra tjänster inom trappstädning och bokning av tid",
}

export default function TrappstadningOchBokningPage() {
  return (
    <Main>
      <div className="flex h-[calc(100vh-var(--header-height,0px))] w-full">
        {/* Vänster: tjänster, egen scroll */}
        <div className="w-1/2 h-full overflow-y-auto border-r border-ui-border-base">
          <TrappstadningContent />
        </div>

        {/* Höger: bokning, egen scroll */}
        <div className="w-1/2 h-full overflow-y-auto">
          <div className="content-container py-12">
            <TrappstadningBooking />
          </div>
        </div>
      </div>
    </Main>
  )
}
