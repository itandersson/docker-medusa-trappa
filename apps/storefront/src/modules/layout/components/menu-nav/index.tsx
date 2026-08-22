import LocalizedClientLink from "@modules/common/components/localized-client-link"
import ServicesDropdown from "@modules/layout/components/services-dropdown"

const links = [
  { href: "/", label: "Hem" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/boka-tid", label: "Boka tid" },
]

export default function MenuNav() {
  return (
    <nav className="menu flex items-center gap-x-6">
      {/* Hem */}
      <LocalizedClientLink key="/" className="hover:text-ui-fg-base" href="/">
        Hem
      </LocalizedClientLink>

      {/* Tjänster dropdown direkt efter Hem */}
      <ServicesDropdown />

      {/* Resten av länkarna */}
      {links
        .filter((l) => l.href !== "/") // Hem redan renderad
        .map((link) => (
          <LocalizedClientLink
            key={link.href}
            className="hover:text-ui-fg-base"
            href={link.href}
          >
            {link.label}
          </LocalizedClientLink>
        ))}
    </nav>
  )
}
