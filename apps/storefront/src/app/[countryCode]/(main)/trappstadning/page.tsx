import { Metadata } from "next"
import { Badge, Button } from "@medusajs/ui"
import { IBM_Plex_Mono, IBM_Plex_Sans, Space_Grotesk } from "next/font/google"
import Link from "next/link"

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

const schema = [
  {
    fastighet: "Kv. Ekorren 4, Solna",
    dag: "Mån",
    tid: "07:00",
    status: "Utfört",
  },
  {
    fastighet: "Brf Lindan, Sundbyberg",
    dag: "Ons",
    tid: "06:30",
    status: "Idag",
  },
  {
    fastighet: "Kv. Masten 12, Bromma",
    dag: "Fre",
    tid: "07:15",
    status: "Bokat",
  },
]

const tjanster = [
  {
    titel: "Trappstädning",
    beskrivning: "Golv, ledstänger, postboxar och dörrhandtag i varje uppgång.",
  },
  {
    titel: "Hissrengöring",
    beskrivning: "Golv, paneler och speglar – dagligen eller enligt schema.",
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
    text: "Städning enligt avtalad frekvens – 1 till 5 gånger per vecka.",
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
    <div className="content-container py-12">
      <h1 className="text-3xl font-semibold mb-6">Tjänster</h1>

      <div
        className={`${display.variable} ${body.variable} ${mono.variable} font-[family-name:var(--font-body)] bg-[#F5F5F2] text-[#1C2B33]`}
      >
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28">
          <Badge
            color="orange"
            size="small"
            className="bg-[#B08D57]/10 text-[#B08D57] font-[family-name:var(--font-mono)] tracking-wide"
          >
            Trappstädning för fastighetsbolag
          </Badge>

          <h1 className="mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl md:text-6xl font-medium leading-[1.05]">
            Rena trapphus varje vecka — utan att ni behöver ringa och påminna.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-[#1C2B33]/70">
            Vi sköter den löpande trappstädningen åt fastighetsbolag i
            Stockholmsområdet: fasta scheman, digital avstämning efter varje
            besök och en kontaktperson som svarar samma dag.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="large"
              className="bg-[#1C2B33] hover:bg-[#1C2B33]/90 text-white"
            >
              Boka kostnadsfri genomgång
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

        {/* Schema-widget */}
        <section id="schema" className="mx-auto max-w-6xl px-6 py-16">
          <div className="rounded-2xl border border-[#1C2B33]/10 bg-white overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#1C2B33]/10">
              <span className="font-[family-name:var(--font-mono)] text-sm text-[#1C2B33]/60">
                Nästa i schemat
              </span>
              <span className="text-sm text-[#4C6B5B] font-[family-name:var(--font-mono)]">
                Uppdateras live
              </span>
            </div>

            <ul>
              {schema.map((rad, i) => (
                <li
                  key={rad.fastighet}
                  className={`flex items-center justify-between px-6 py-4 font-[family-name:var(--font-mono)] text-sm ${
                    i !== schema.length - 1 ? "border-b border-[#1C2B33]/5" : ""
                  }`}
                >
                  <span className="text-[#1C2B33]">{rad.fastighet}</span>
                  <span className="text-[#1C2B33]/50">
                    {rad.dag} {rad.tid}
                  </span>
                  <span
                    className={
                      rad.status === "Utfört"
                        ? "text-[#4C6B5B]"
                        : rad.status === "Idag"
                        ? "text-[#B08D57]"
                        : "text-[#1C2B33]/40"
                    }
                  >
                    {rad.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Tjänster */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="font-[family-name:var(--font-display)] text-3xl md:text-4xl font-medium max-w-lg">
            Allt som hör till trapphuset — inte bara golvet.
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

        {/* Referens */}
        <section className="mx-auto max-w-6xl px-6 py-16">
          <blockquote className="max-w-2xl">
            <p className="font-[family-name:var(--font-display)] text-2xl leading-snug">
              "Vi slapp helt klagomål om smutsiga trapphus efter att vi bytte
              till ett fast schema med rapportering."
            </p>
            <footer className="mt-4 text-sm text-[#1C2B33]/60 font-[family-name:var(--font-mono)]">
              — Fastighetsförvaltare, Brf i Sundbyberg
            </footer>
          </blockquote>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-6 py-20">
          <div className="rounded-2xl bg-[#1C2B33] text-white px-8 py-14 md:px-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="font-[family-name:var(--font-display)] text-3xl font-medium">
                Vill ni slippa klagomål om smutsiga trapphus?
              </h2>
              <p className="mt-2 text-white/60 max-w-md">
                Skicka in er fastighetsportfölj så återkommer vi med ett schema
                och pris inom 24 timmar.
              </p>
            </div>

            <Button
              size="large"
              className="bg-[#B08D57] hover:bg-[#B08D57]/90 text-white shrink-0"
            >
              Boka kostnadsfri genomgång
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
