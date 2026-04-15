"use client"

import {
  Mic,
  FileText,
  Video,
  Users,
  Building2,
  FlaskConical,
} from "lucide-react"
import { useTranslation } from "react-i18next"
import { SectionTitle } from "@/components/atoms/section-title"
import { ServiceCard } from "@/components/molecules/service-card"

const services = [
  {
    icon: Mic,
    titleKey: "services.cards.technicalInterpretation.title",
    descriptionKey: "services.cards.technicalInterpretation.description",
    pointKeys: [
      "services.cards.technicalInterpretation.p1",
      "services.cards.technicalInterpretation.p2",
      "services.cards.technicalInterpretation.p3",
    ],
  },
  {
    icon: Users,
    titleKey: "services.cards.meetings.title",
    descriptionKey: "services.cards.meetings.description",
    pointKeys: [
      "services.cards.meetings.p1",
      "services.cards.meetings.p2",
      "services.cards.meetings.p3",
    ],
  },
  {
    icon: Video,
    titleKey: "services.cards.remote.title",
    descriptionKey: "services.cards.remote.description",
    pointKeys: [
      "services.cards.remote.p1",
      "services.cards.remote.p2",
      "services.cards.remote.p3",
    ],
  },
  {
    icon: FileText,
    titleKey: "services.cards.translation.title",
    descriptionKey: "services.cards.translation.description",
    pointKeys: [
      "services.cards.translation.p1",
      "services.cards.translation.p2",
      "services.cards.translation.p3",
    ],
  },
  {
    icon: Building2,
    titleKey: "services.cards.rnd.title",
    descriptionKey: "services.cards.rnd.description",
    pointKeys: [
      "services.cards.rnd.p1",
      "services.cards.rnd.p2",
      "services.cards.rnd.p3",
    ],
  },
  {
    icon: FlaskConical,
    titleKey: "services.cards.lab.title",
    descriptionKey: "services.cards.lab.description",
    pointKeys: [
      "services.cards.lab.p1",
      "services.cards.lab.p2",
      "services.cards.lab.p3",
    ],
  },
]

const capabilityBlocks = [
  {
    titleKey: "services.sectorsTitle",
    itemKeys: [
      "services.sectors.clinical",
      "services.sectors.molecular",
      "services.sectors.education",
      "services.sectors.care",
    ],
  },
  {
    titleKey: "services.deliverablesTitle",
    itemKeys: [
      "services.deliverables.reports",
      "services.deliverables.presentations",
      "services.deliverables.interviews",
      "services.deliverables.communication",
    ],
  },
]

export function Services() {
  const { t } = useTranslation()

  return (
    <section id="servicios" className="bg-secondary/50 py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle subtitle={t("services.subtitle")} align="center">
          {t("services.title")}
        </SectionTitle>

        <p className="mx-auto mb-10 max-w-3xl text-center text-muted-foreground leading-relaxed">
          {t("services.intro")}
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.titleKey}
              icon={service.icon}
              title={t(service.titleKey)}
              description={t(service.descriptionKey)}
              points={service.pointKeys.map((pointKey) => t(pointKey))}
              index={index}
            />
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {capabilityBlocks.map((block) => (
            <div key={block.titleKey} className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{t(block.titleKey)}</h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                {block.itemKeys.map((itemKey) => (
                  <li key={itemKey} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
                    <span>{t(itemKey)}</span>
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
