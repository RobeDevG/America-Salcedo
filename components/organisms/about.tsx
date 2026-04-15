"use client"

import { FlaskConical, GraduationCap, Languages, ShieldCheck } from "lucide-react"
import { SectionTitle } from "@/components/atoms/section-title"
import { StatCard } from "@/components/molecules/stat-card"

const stats = [
  { value: 5, suffix: "+", label: "Años en laboratorios" },
  { value: 3, suffix: "", label: "Proyectos de investigación" },
  { value: 8, suffix: "+", label: "Certificaciones recientes" },
  { value: 2, suffix: "", label: "Idiomas de trabajo" },
]

const strengths = [
  {
    icon: FlaskConical,
    title: "Experiencia técnica",
    description: "Procesos de biología molecular, análisis clínico y trabajo bajo protocolo.",
  },
  {
    icon: Languages,
    title: "Comunicación bilingüe",
    description: "Interpretación y explicación de contenido especializado en español e inglés.",
  },
  {
    icon: GraduationCap,
    title: "Formación académica",
    description: "Licenciatura en Biotecnología Genómica con actualización continua certificada.",
  },
  {
    icon: ShieldCheck,
    title: "Compromiso profesional",
    description: "Rigor técnico, confidencialidad y enfoque colaborativo en cada proyecto.",
  },
]

export function About() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <SectionTitle subtitle="Sobre Mí">
              Ciencia aplicada y comunicación bilingüe efectiva
            </SectionTitle>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Soy Katherin América Salcedo Beltrán, Licenciada en Biotecnología
                Genómica (UAS, 2020-2025), enfocada en integrar conocimiento científico,
                experiencia operativa de laboratorio y habilidades de comunicación bilingüe
                en inglés y español.
              </p>
              <p>
                He participado en análisis molecular, extracción de ADN, PCR, preparación
                de reactivos, procesamiento de muestras y apoyo en laboratorio clínico y
                biomédico. También he colaborado en aula como maestra de apoyo, reforzando
                mi perfil de comunicación técnica y acompañamiento humano.
              </p>
              <p>
                Mi objetivo es aportar en equipos de investigación y desarrollo con visión
                innovadora, facilitando tanto la ejecución técnica como la interpretación y
                explicación de información especializada para diferentes audiencias.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground">Resumen profesional</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Biotecnóloga Genómica con experiencia en laboratorio y capacidad para
                comunicar procesos técnicos con precisión. Busco integrarme a equipos
                dinámicos de investigación, diagnóstico e innovación.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Datos clave</h3>
              <div className="mt-6 grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <StatCard
                    key={stat.label}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={stat.label}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
