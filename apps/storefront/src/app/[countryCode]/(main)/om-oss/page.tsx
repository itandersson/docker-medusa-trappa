import { Metadata } from "next"
import ContactForm from "@modules/layout/components/contact-form"
import { Main } from "@modules/layout/components/main"

export const metadata: Metadata = {
  title: "Om oss | Ert Företagsnamn",
  description:
    "Läs mer om vår historia, vision och passion för professionell trappstädning.",
}

export default function OmossPage() {
  return (
    <Main>
      <div className="content-container py-12">
        <div className="mb-12 max-w-3xl text-ui-fg-subtle">
          <p className="text-lg">
            Vi är ett nystartat, lokalt enmansföretag som specialiserar sig på{" "}
            <strong>professionell och noggrann trappstädning</strong> för
            fastighetsbolag och bostadsrättsföreningar. Med fokus på kvalitet,
            trygghet och pålitlighet ser vi till att trapphus och gemensamma
            utrymmen alltid är rena, välkomnande och trivsamma.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Vänster kolumn */}
          <div className="space-y-8">
            <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <h2 className="text-xl font-semibold">Vår historia</h2>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Verksamheten startade med en enkel idé: att erbjuda
                fastighetsägare en{" "}
                <strong>stabil och personlig städtjänst</strong> där varje
                uppdrag utförs med omsorg. Steg för steg bygger vi upp ett
                företag där hantverket, noggrannheten och kundkontakten står i
                centrum.
              </p>
            </section>

            <section className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
              <h2 className="text-xl font-semibold">Vår vision</h2>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Vi vill göra det <strong>enkelt och smidigt</strong> för våra
                kunder att boka och hantera trappstädning. Därför satsar vi på
                moderna digitala lösningar via webben och telefon, så att du
                snabbt kan få den hjälp du behöver — utan krångel.
              </p>
            </section>
          </div>

          {/* Höger kolumn – Kontaktformulär */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </Main>
  )
}
