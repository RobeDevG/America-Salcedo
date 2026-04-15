"use client"

import { FlaskConical, GraduationCap, Languages, ShieldCheck } from "lucide-react"
import { useTranslation } from "react-i18next"
import { SectionTitle } from "@/components/atoms/section-title"
import { StatCard } from "@/components/molecules/stat-card"

const stats = [
  { value: 5, suffix: "+", labelKey: "about.stats.labs" },
  { value: 3, suffix: "", labelKey: "about.stats.research" },
  { value: 8, suffix: "+", labelKey: "about.stats.certs" },
  { value: 2, suffix: "", labelKey: "about.stats.langs" },
]

const strengths = [
  {
    icon: FlaskConical,
    titleKey: "about.strengths.technicalTitle",
    descriptionKey: "about.strengths.technicalDescription",
  },
  {
    icon: Languages,
    titleKey: "about.strengths.bilingualTitle",
    descriptionKey: "about.strengths.bilingualDescription",
  },
  {
    icon: GraduationCap,
    titleKey: "about.strengths.academicTitle",
    descriptionKey: "about.strengths.academicDescription",
  },
  {
    icon: ShieldCheck,
    titleKey: "about.strengths.professionalTitle",
    descriptionKey: "about.strengths.professionalDescription",
  },
]

export function About() {
  const { t } = useTranslation()

  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <SectionTitle subtitle={t("about.subtitle")}>
              {t("about.title")}
            </SectionTitle>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>{t("about.paragraph1")}</p>
              <p>{t("about.paragraph2")}</p>
              <p>{t("about.paragraph3")}</p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div
                  key={item.titleKey}
                  className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground">{t(item.titleKey)}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t(item.descriptionKey)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <h3 className="text-lg font-semibold text-foreground">{t("about.summaryTitle")}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t("about.summaryDescription")}
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">{t("about.keyDataTitle")}</h3>
              <div className="mt-6 grid grid-cols-2 gap-8">
                {stats.map((stat, index) => (
                  <StatCard
                    key={stat.labelKey}
                    value={stat.value}
                    suffix={stat.suffix}
                    label={t(stat.labelKey)}
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
