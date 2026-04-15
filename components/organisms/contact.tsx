"use client"

import { useEffect, useRef } from "react"
import { Phone, MapPin, Clock, CheckCircle, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"
import { SectionTitle } from "@/components/atoms/section-title"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: Phone,
    titleKey: "contact.phone",
    value: "6673 56 12 14 / 6675 68 44 23",
    link: null,
  },
  {
    icon: Mail,
    titleKey: "contact.email",
    value: "katherinsalcedo.fcqb2020@uas.edu.mx",
    link: "mailto:katherinsalcedo.fcqb2020@uas.edu.mx",
  },
  {
    icon: MapPin,
    titleKey: "contact.location",
    value: "Rodolfo T. Loaiza #2744, Col. STASE 2",
    link: null,
  },
  {
    icon: Clock,
    titleKey: "contact.availability",
    valueKey: "contact.availabilityValue",
    link: null,
  },
]

const benefitKeys = ["contact.benefits.b1", "contact.benefits.b2", "contact.benefits.b3", "contact.benefits.b4"]

export function Contact() {
  const { t } = useTranslation()
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
        <SectionTitle subtitle={t("contact.subtitle")} align="center">
          {t("contact.title")}
        </SectionTitle>

        <div ref={cardsRef} className="grid gap-8 lg:grid-cols-2">
          {/* Contact Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div
                key={info.titleKey}
                data-contact-item
                className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 opacity-0 duration-700 transition-all hover:border-primary/50 hover:shadow-lg sm:items-center sm:p-6"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <info.icon className="h-6 w-6" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm text-muted-foreground">{t(info.titleKey)}</p>
                  {info.link ? (
                    <a
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block break-all text-base font-semibold text-foreground transition-colors hover:text-primary sm:text-lg"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="wrap-break-word text-base font-semibold text-foreground sm:text-lg">
                      {info.valueKey ? t(info.valueKey) : info.value}
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
                {t("contact.ctaTitle")}
              </h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">
                {t("contact.ctaDescription")}
              </p>

              <ul className="mt-6 space-y-3">
                {benefitKeys.map((benefitKey, index) => (
                  <li key={index} className="flex items-start gap-2 text-foreground">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="wrap-break-word">{t(benefitKey)}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button asChild size="lg" className="mt-8 w-full gap-2">
              <a
                href="mailto:katherinsalcedo.fcqb2020@uas.edu.mx"
              >
                <Mail className="h-5 w-5" />
                {t("contact.emailButton")}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
