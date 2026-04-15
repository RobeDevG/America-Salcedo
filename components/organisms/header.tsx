"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { NavLink } from "@/components/molecules/nav-link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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

        <Button asChild className="hidden md:inline-flex">
          <a href="#contacto">Contáctame</a>
        </Button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
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
              Contáctame
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
