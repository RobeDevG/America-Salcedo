"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useTranslation } from "react-i18next"
import { NavLink } from "@/components/molecules/nav-link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function Header() {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: "#inicio", label: t("nav.home") },
    { href: "#sobre-mi", label: t("nav.about") },
    { href: "#servicios", label: t("nav.services") },
    { href: "#experiencia", label: t("nav.experience") },
    { href: "#contacto", label: t("nav.contact") },
  ]

  const handleLanguageToggle = () => {
    const nextLanguage = i18n.language === "es" ? "en" : "es"
    i18n.changeLanguage(nextLanguage)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/80 py-4 shadow-sm backdrop-blur-lg"
          : "bg-transparent py-6"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="text-xl font-bold text-foreground">
          América<span className="text-primary">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            size="sm"
            onClick={handleLanguageToggle}
            aria-label={t("nav.switchTo")}
          >
            {t("nav.switchLabel")}
          </Button>
          <Button asChild>
            <a href="#contacto">{t("nav.contactCta")}</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute left-0 right-0 top-full bg-background/95 backdrop-blur-lg transition-all duration-300 md:hidden",
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        )}
      >
        <nav className="flex flex-col gap-4 px-6 py-8">
          <Button variant="outline" onClick={handleLanguageToggle}>
            {t("nav.switchLabel")}
          </Button>

          {navItems.map((item) => (
            <NavLink
              key={item.href}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg"
            >
              {item.label}
            </NavLink>
          ))}
          <Button asChild className="mt-4 w-full">
            <a href="#contacto" onClick={() => setIsMobileMenuOpen(false)}>
              {t("nav.contactCta")}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
