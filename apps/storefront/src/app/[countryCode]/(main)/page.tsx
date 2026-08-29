import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import { Main } from "@modules/layout/components/main"

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

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <Main>
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

      {/* Featured products */}
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </Main>
  )
}
