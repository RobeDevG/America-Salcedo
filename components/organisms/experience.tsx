"use client"

import { useEffect, useRef } from "react"
import { SectionTitle } from "@/components/atoms/section-title"

const experiences = [
  {
    period: "2023 — 2025",
    title: "Pasante de Servicio Social",
    company: "Laboratorio de Biología Molecular y Fitopatología, UAS",
    description:
      "Análisis de material vegetal y suelo, extracción de ADN, preparación de reactivos, oligos para PCR, geles de agarosa, electroforesis, manejo de autoclave y equipo de laboratorio.",
  },
  {
    period: "2021 — 2023",
    title: "Auxiliar en Laboratorio Clínico y Biomédico",
    company: "Universidad Autónoma de Sinaloa, campus Culiacán",
    description:
      "Organización, gestión y análisis de muestras biológicas aplicando técnicas de procesamiento en entornos de laboratorio clínico.",
  },
  {
    period: "2025",
    title: "Experiencia en Biología Molecular",
    company: "Centro Nacional de Referencia de Salud Digna",
    description:
      "Procesamiento de ANA, PCR SARS-CoV, PCR VPH, pruebas de alérgenos y detección de Treponema pallidum.",
  },
  {
    period: "2025 — 2026",
    title: "Maestra de Apoyo en Aula",
    company: "Colegio Sinaloa, campus Horizontes",
    description:
      "Apoyo en actividades de aula y maestra sombra, fortaleciendo habilidades de comunicación y acompañamiento educativo.",
  },
  {
    period: "Perfil complementario",
    title: "Interpretación Bilingüe ES-EN",
    company: "Ámbito académico y técnico",
    description:
      "Aplicación de inglés avanzado para comunicar contenido científico y facilitar interacción entre equipos o audiencias con distintos niveles de dominio del idioma.",
  },
]

const certifications = [
  "Diagnóstico de parásitos de importancia clínica (abril 2025)",
  "Evaluación de ab anti-Treponema pallidum por inmunofluorescencia indirecta (marzo 2025)",
  "Actualización en interpretación y clasificación de patrones de ANA (mayo 2025)",
  "Conocimientos de cobas infinity ROCHE (agosto 2025)",
  "Curso de manejo de RPBI (julio 2025)",
  "Señalamientos de seguridad laboral, medio ambiente y protección civil (agosto 2025)",
  "Orden y limpieza en áreas laborales y de servicio (agosto 2025)",
  "Comisión de seguridad e higiene (agosto 2025)",
  "Inglés avanzado con certificaciones Cambridge (2010-2017)",
]

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-timeline-item]")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-in", "fade-in", "slide-in-from-left-8")
                item.classList.remove("opacity-0")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (timelineRef.current) {
      observer.observe(timelineRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Timeline */}
          <div>
            <SectionTitle subtitle="Experiencia">
              Trayectoria profesional
            </SectionTitle>

            <div ref={timelineRef} className="relative">
              {/* Vertical line */}
              <div className="absolute bottom-0 left-0 top-0 w-px bg-border" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    data-timeline-item
                    className="relative pl-8 opacity-0 duration-700"
                  >
                    {/* Dot */}
                    <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                    <span className="text-sm font-medium text-primary">
                      {exp.period}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <SectionTitle subtitle="Certificaciones">
              Formación y actualización
            </SectionTitle>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <span className="font-medium text-foreground">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
