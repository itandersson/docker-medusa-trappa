import { Metadata } from "next"
import ContactForm from "@modules/layout/components/contact-form"

export const metadata: Metadata = {
  title: "Tjänster | Ert Företagsnamn",
  description: "Våra tjänster inom trappstädning",
}

export default function OmossPage() {
  return (
    <div className="content-container py-12">
      <h1 className="text-3xl font-semibold mb-6">Om oss</h1>
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
          <div className="space-y-8">
            <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <h2 className="text-xl font-semibold">Vår historia</h2>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Verksamheten startade med en enkel idé: att erbjuda
                fastighetsägare en <b>stabil och personlig städtjänst</b> där
                varje uppdrag utförs med omsorg. Steg för steg bygger vi upp ett
                företag där hantverket, noggrannheten och kundkontakten står i
                centrum.
              </p>
            </section>

            <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <h2 className="text-xl font-semibold">Vår vision</h2>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Vi vill göra det <b>enkelt och smidigt</b> för våra kunder att
                boka och hantera trappstädning. Därför satsar vi på moderna
                digitala lösningar via webben och telefon, så att du snabbt kan
                få den hjälp du behöver — utan krångel.
              </p>
            </section>
          </div>

          {/* Höger kolumn – Kontaktformulär med kontrastbakgrund */}
          <div className="rounded-3xl border border-neutral-200 bg-neutral-50 p-8 shadow-md dark:border-neutral-800 dark:bg-neutral-900">
            <ContactForm />
          </div>
        </div>
      </p>
    </div>
  )
}
