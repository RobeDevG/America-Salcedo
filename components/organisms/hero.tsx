"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowDown, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageBadge } from "@/components/atoms/language-badge"

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return

    const children = hero.querySelectorAll("[data-animate]")
    children.forEach((child, index) => {
      setTimeout(() => {
        child.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
        child.classList.remove("opacity-0")
      }, index * 150)
    })
  }, [])

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div
        ref={heroRef}
        className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16"
      >
        {/* Content */}
        <div className="flex flex-col justify-center">
          <div data-animate className="opacity-0 duration-700">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Perfil Híbrido: Intérprete y Biotecnóloga Genómica
            </span>
          </div>

          <h1
            data-animate
            className="mt-6 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground opacity-0 duration-700 md:text-5xl lg:text-6xl text-balance"
          >
            Katherin América Salcedo Beltrán
          </h1>

          <p
            data-animate
            className="mt-4 text-xl text-muted-foreground opacity-0 duration-700 md:text-2xl"
          >
            Comunicación bilingüe aplicada a ciencia, salud y educación
          </p>

          <p
            data-animate
            className="mt-6 max-w-lg text-muted-foreground opacity-0 duration-700 leading-relaxed"
          >
            Licenciada en Biotecnología Genómica con experiencia en laboratorio clínico y
            molecular, combinada con formación avanzada en inglés e interpretación bilingüe
            para contextos técnicos, académicos y de atención a usuarios.
          </p>

          <div data-animate className="mt-6 flex flex-wrap gap-3 opacity-0 duration-700">
            <LanguageBadge language="Español" level="Lengua materna" />
            <LanguageBadge language="English" level="Avanzado / Cambridge" />
          </div>

          <div data-animate className="mt-8 flex flex-wrap gap-4 opacity-0 duration-700">
            <Button asChild size="lg" className="gap-2">
              <a href="#contacto">
                <MessageCircle className="h-5 w-5" />
                Contáctame
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#servicios">Ver Servicios</a>
            </Button>
          </div>
        </div>

        {/* Image */}
        <div
          data-animate
          className="relative flex items-center justify-center opacity-0 duration-700"
        >
          <div className="relative">
            {/* Decorative ring */}
            <div className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/20 animate-[spin_30s_linear_infinite]" />
            <div className="absolute -inset-8 rounded-full border border-primary/10" />
            
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-card shadow-2xl md:h-96 md:w-96">
              <Image
                src="/images/america-salcedo.png"
                alt="Katherin América Salcedo Beltrán - Perfil híbrido profesional"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -right-4 top-8 animate-bounce rounded-lg bg-card p-3 shadow-lg">
              <span className="text-2xl">🇺🇸</span>
            </div>
            <div className="absolute -left-4 bottom-8 animate-bounce rounded-lg bg-card p-3 shadow-lg" style={{ animationDelay: "0.5s" }}>
              <span className="text-2xl">🇲🇽</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#sobre-mi"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground transition-colors hover:text-primary"
        aria-label="Desplazarse hacia abajo"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
