import LocalizedClientLink from "@modules/common/components/localized-client-link"

const links = [
  { href: "/", label: "Hem" },
  { href: "/tjanster", label: "Tjänster" },
  { href: "/om-oss", label: "Om oss" },
  { href: "/boka-tid", label: "Boka tid" },
]

export default function MenuNav() {
  return (
    <nav className="menu flex items-center gap-x-6">
      {links.map((link) => (
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
