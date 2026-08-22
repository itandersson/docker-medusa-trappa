"use client"

import { useEffect, useRef, useState } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import { Layers3, BuildingStorefront } from "@medusajs/icons"

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)

  // Stäng vid klick utanför
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  // Stäng vid Escape
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <div ref={rootRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className="hover:text-ui-fg-base flex items-center gap-1"
      >
        Tjänster
        <span
          className={`transition-transform duration-150 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      <div
        className={`absolute mt-2 w-56 bg-white border border-ui-border-base rounded-md shadow-md p-2 z-50 transition-all duration-150 origin-top ${
          open
            ? "opacity-100 scale-100 pointer-events-auto"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="px-2 py-1 text-sm font-medium">Tjänster</div>
        <div className="my-2 h-px bg-ui-border-base" />

        <LocalizedClientLink
          href="/tjanster"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-ui-bg-subtle"
        >
          <Layers3 className="text-ui-fg-subtle" />
          <div>
            <p className="font-medium">Beställ städhjälp</p>
            <p className="text-ui-fg-subtle text-xs">300 kr/h</p>
          </div>
        </LocalizedClientLink>

        <LocalizedClientLink
          href="/tjanster/trappstadning"
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-ui-bg-subtle"
        >
          <BuildingStorefront className="text-ui-fg-subtle" />
          <div>
            <p className="font-medium">Trappstädning</p>
            <p className="text-ui-fg-subtle text-xs">
              Professionell städning för fastigheter
            </p>
          </div>
        </LocalizedClientLink>
      </div>
    </div>
  )
}
