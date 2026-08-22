import { Metadata } from "next"
import ContactForm from "@modules/layout/components/contact-form"

export const metadata: Metadata = {
  title: "Tjänster | Ert Företagsnamn",
  description: "Våra tjänster inom trappstädning",
}

export default function stadHalpPage() {
  return (
    <div className="content-container py-12">
      <h1 className="text-3xl font-semibold mb-6">Städhjälp</h1>
      <p className="text-ui-fg-subtle">
        <p>
          Vi är ett nystartat, lokalt enmansföretag som specialiserar sig på{" "}
          <b>professionell och noggrann trappstädning</b> för fastighetsbolag
          och bostadsrättsföreningar. Med fokus på kvalitet, trygghet och
          pålitlighet ser vi till att trapphus och gemensamma utrymmen alltid är
          rena, välkomnande och trivsamma.
        </p>
        <br />
        <br />
        <br />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vänster kolumn */}
          <div className="space-y-8"></div>
        </div>
      </p>
    </div>
  )
}
