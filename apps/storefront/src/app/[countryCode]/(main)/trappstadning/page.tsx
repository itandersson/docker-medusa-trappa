import { Metadata } from "next"
import { Button } from "@medusajs/ui"
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google"
import Link from "next/link"
import { Main } from "@modules/layout/components/main"

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})
const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
})
const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
})

const tjanster = [
  {
    titel: "Trappstädning",
    beskrivning: "Golv, ledstänger, postboxar och dörrhandtag i varje uppgång.",
  },
  {
    titel: "Hissrengöring",
    beskrivning: "Golv, paneler och speglar - dagligen eller enligt schema.",
  },
  {
    titel: "Källare & tvättstuga",
    beskrivning: "Gemensamma utrymmen som annars glöms bort.",
  },
  {
    titel: "Entré & fönster",
    beskrivning: "Glasdörrar, fönster i entréplan och entrématta.",
  },
  {
    titel: "Storstädning",
    beskrivning: "Punktinsatser vid flytt, renovering eller klotter.",
  },
  {
    titel: "Utomhus vid entré",
    beskrivning: "Sopning, lövblås och sandupptagning på våren.",
  },
]

const process = [
  {
    steg: "01",
    titel: "Genomgång på plats",
    text: "Vi går igenom fastigheten tillsammans och kartlägger antal uppgångar och behov.",
  },
  {
    steg: "02",
    titel: "Skräddarsytt schema",
    text: "Ni får ett fast städschema anpassat efter fastighetens storlek och trafik.",
  },
  {
    steg: "03",
    titel: "Löpande städning",
    text: "Städning enligt avtalad frekvens - 1 till 5 gånger per vecka.",
  },
  {
    steg: "04",
    titel: "Digital rapport",
    text: "Efter varje besök får ni en avstämning med bilder direkt i mejlen.",
  },
]

export const metadata: Metadata = {
  title: "Tjänster | Ert Företagsnamn",
  description: "Våra tjänster inom trappstädning",
}

export default function TrappstadningPage() {
  return (
    <Main>
      <div className="content-container py-12">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl md:text-6xl font-medium leading-[1.05]">
            Rena trapphus varje vecka
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[#1C2B33]/70">
            Vi sköter den löpande trappstädningen åt fastighetsbolag i Skåne:
            fasta scheman, digital avstämning efter varje besök och en
            kontaktperson som svarar samma dag.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="large"
              className="bg-[#1C2B33] hover:bg-[#1C2B33]/90 text-white"
            >
              Boka direkt
            </Button>

            <Button
              size="large"
              variant="secondary"
              className="border-[#1C2B33]/20"
              asChild
            >
              <Link href="#schema">Se hur schemat fungerar</Link>
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-sm text-[#1C2B33]/60 font-[family-name:var(--font-mono)]">
            <span>Kollektivavtal</span>
            <span>Ansvarsförsäkrade</span>
            <span>Uppstart inom 2 veckor</span>
            <span>Skräddarsytt per fastighetsportfölj</span>
          </div>
        </section>

        {/* Tjänster */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium max-w-lg">
            Allt som hör till trapphuset
          </h2>

          <div className="mt-10 grid gap-px bg-[#1C2B33]/10 sm:grid-cols-2 lg:grid-cols-3 rounded-xl overflow-hidden">
            {tjanster.map((t) => (
              <div key={t.titel} className="bg-white p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-medium">
                  {t.titel}
                </h3>
                <p className="mt-2 text-sm text-[#1C2B33]/60">
                  {t.beskrivning}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium">
            Så fungerar det
          </h2>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <div key={p.steg}>
                <span className="font-[family-name:var(--font-mono)] text-[#B08D57]">
                  {p.steg}
                </span>
                <h3 className="mt-2 font-[family-name:var(--font-display)] text-lg font-medium">
                  {p.titel}
                </h3>
                <p className="mt-2 text-sm text-[#1C2B33]/60">{p.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Separator */}
        <div className="my-4 h-px w-full bg-ui-border-base" />
      </div>
    </Main>
  )
}
