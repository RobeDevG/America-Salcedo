"use client"

import {
  Mic,
  FileText,
  Video,
  Users,
  Building2,
  FlaskConical,
} from "lucide-react"
import { SectionTitle } from "@/components/atoms/section-title"
import { ServiceCard } from "@/components/molecules/service-card"

const services = [
  {
    icon: Mic,
    title: "Interpretación Bilingüe Técnica",
    description:
      "Interpretación español-inglés para contextos académicos, científicos y de salud con enfoque en claridad terminológica.",
    points: [
      "Terminología biomédica y técnica",
      "Sesiones presenciales y virtuales",
      "Adaptación al nivel de la audiencia",
    ],
  },
  {
    icon: Users,
    title: "Acompañamiento en Reuniones y Entrevistas",
    description:
      "Soporte en conversaciones profesionales, sesiones de asesoría y procesos de selección con comunicación bilingüe precisa.",
    points: [
      "Entrevistas académicas o laborales",
      "Mediación comunicativa profesional",
      "Preparación previa de contexto",
    ],
  },
  {
    icon: Video,
    title: "Soporte Remoto",
    description:
      "Atención virtual para interpretación, revisión de materiales y preparación de presentaciones técnicas.",
    points: [
      "Asesoría por videollamada",
      "Revisión de diapositivas y guiones",
      "Acompañamiento por etapas",
    ],
  },
  {
    icon: FileText,
    title: "Traducción y Revisión de Documentos",
    description:
      "Traducción de contenido técnico, académico y biomédico con consistencia terminológica y redacción clara.",
    points: [
      "Informes y protocolos",
      "Documentos académicos",
      "Control de estilo y terminología",
    ],
  },
  {
    icon: Building2,
    title: "Apoyo a Proyectos de I+D",
    description:
      "Colaboración en organización de actividades de investigación, documentación y comunicación de resultados.",
    points: [
      "Gestión y orden de evidencia",
      "Redacción de resultados",
      "Comunicación de avances",
    ],
  },
  {
    icon: FlaskConical,
    title: "Asistencia en Procesos de Laboratorio",
    description:
      "Experiencia en prácticas de biología molecular y laboratorio clínico: PCR, reactivos, muestras y protocolos.",
    points: [
      "Preparación de reactivos y geles",
      "Procesamiento de muestras",
      "Buenas prácticas y bioseguridad",
    ],
  },
]

const capabilityBlocks = [
  {
    title: "Sectores donde puedo aportar",
    items: ["Diagnóstico clínico", "Biología molecular", "Educación", "Atención al paciente"],
  },
  {
    title: "Tipo de entregables",
    items: [
      "Reportes y traducciones técnicas",
      "Apoyo en presentaciones",
      "Acompañamiento en entrevistas",
      "Soporte de comunicación bilingüe",
    ],
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-secondary/50 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="Servicios" align="center">
          Soluciones híbridas para comunicación y ciencia aplicada
        </SectionTitle>

        <p className="mx-auto mb-10 max-w-3xl text-center text-muted-foreground leading-relaxed">
          Cada servicio se adapta al contexto del proyecto: laboratorio, investigación,
          aula o colaboración profesional. El enfoque combina precisión técnica,
          claridad lingüística y cumplimiento de tiempos.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              points={service.points}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {capabilityBlocks.map((block) => (
            <div key={block.title} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{block.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {block.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
