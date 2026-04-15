"use client"

import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import { SectionTitle } from "@/components/atoms/section-title"

const experiences = [
  {
    period: "2023 — 2025",
    titleKey: "experience.items.i1Title",
    companyKey: "experience.items.i1Company",
    descriptionKey: "experience.items.i1Description",
  },
  {
    period: "2021 — 2023",
    titleKey: "experience.items.i2Title",
    companyKey: "experience.items.i2Company",
    descriptionKey: "experience.items.i2Description",
  },
  {
    period: "2025",
    titleKey: "experience.items.i3Title",
    companyKey: "experience.items.i3Company",
    descriptionKey: "experience.items.i3Description",
  },
  {
    period: "2025 — 2026",
    titleKey: "experience.items.i4Title",
    companyKey: "experience.items.i4Company",
    descriptionKey: "experience.items.i4Description",
  },
  {
    periodKey: "experience.profileComplementary",
    titleKey: "experience.items.i5Title",
    companyKey: "experience.items.i5Company",
    descriptionKey: "experience.items.i5Description",
  },
]

const certificationKeys = [
  "experience.certifications.c1",
  "experience.certifications.c2",
  "experience.certifications.c3",
  "experience.certifications.c4",
  "experience.certifications.c5",
  "experience.certifications.c6",
  "experience.certifications.c7",
  "experience.certifications.c8",
  "experience.certifications.c9",
]

export function Experience() {
  const { t } = useTranslation()
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
            <SectionTitle subtitle={t("experience.subtitle")}>
              {t("experience.title")}
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
                      {exp.periodKey ? t(exp.periodKey) : exp.period}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-foreground">
                      {t(exp.titleKey)}
                    </h3>
                    <p className="text-muted-foreground">{t(exp.companyKey)}</p>
                    <p className="mt-2 text-muted-foreground leading-relaxed">
                      {t(exp.descriptionKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <SectionTitle subtitle={t("experience.certificationsSubtitle")}>
              {t("experience.certificationsTitle")}
            </SectionTitle>

            <div className="space-y-4">
              {certificationKeys.map((certificationKey, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-4 rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <span className="text-lg font-bold">{index + 1}</span>
                  </div>
                  <span className="font-medium text-foreground">{t(certificationKey)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
