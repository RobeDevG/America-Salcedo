"use client"

import { Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Footer() {
  const { t } = useTranslation()
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#contacto", label: t("nav.contact") },
  ]

  return (
    <footer className="border-t border-border bg-card py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div>
            <a href="#inicio" className="text-xl font-bold text-foreground">
              América<span className="text-primary">.</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              {t("footer.role")}
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <a
            href="mailto:katherinsalcedo.fcqb2020@uas.edu.mx"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            katherinsalcedo.fcqb2020@uas.edu.mx
          </a>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} América Salcedo. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
