"use client"

import { useEffect, useRef } from "react"
import { Phone, MapPin, Clock, CheckCircle, Mail } from "lucide-react"
import { SectionTitle } from "@/components/atoms/section-title"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    title: "Teléfono",
    value: "6673 56 12 14 / 6675 68 44 23",
    link: null,
  },
  {
    icon: Mail,
    title: "Email",
    value: "katherinsalcedo.fcqb2020@uas.edu.mx",
    link: "mailto:katherinsalcedo.fcqb2020@uas.edu.mx",
  },
  {
    icon: MapPin,
    title: "Ubicación",
    value: "Rodolfo T. Loaiza #2744, Col. STASE 2",
    link: null,
  },
  {
    icon: Clock,
    title: "Disponibilidad",
    value: "Lun - Vie, 8:00 - 18:00",
    link: null,
  },
]

const benefits = [
  "Respuesta en menos de 24 horas",
  "Perfil híbrido: ciencia + comunicación bilingüe",
  "Apoyo en proyectos académicos y técnicos",
  "Confidencialidad y enfoque profesional",
]

export function Contact() {
  const cardsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll("[data-contact-item]")
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
                item.classList.remove("opacity-0")
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.1 }
    )

    if (cardsRef.current) {
      observer.observe(cardsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contacto" className="bg-secondary/50 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle="Contacto" align="center">
          Hablemos de tu proyecto o vacante
        </SectionTitle>

        <div ref={cardsRef} className="grid gap-8 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                data-contact-item
                className="flex items-center gap-4 rounded-xl border border-border bg-card p-6 opacity-0 duration-700 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <info.icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{info.title}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-lg font-semibold text-foreground">
                      {info.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Card */}
          <div
            data-contact-item
            className="flex flex-col justify-between rounded-xl border border-primary/20 bg-primary/5 p-8 opacity-0 duration-700"
          >
            <div>
              <h3 className="text-2xl font-bold text-foreground">
                ¿Listo para comenzar?
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                Estoy disponible para colaborar en áreas de laboratorio, investigación,
                soporte técnico-científico e interpretación bilingüe en contextos
                académicos y profesionales.
              </p>

              <ul className="mt-6 space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2 text-foreground">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild size="lg" className="mt-8 w-full gap-2">
              <a
                href="mailto:katherinsalcedo.fcqb2020@uas.edu.mx"
              >
                <Mail className="h-5 w-5" />
                Enviar correo
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
