"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  points?: string[]
  index?: number
  className?: string
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  points = [],
  index = 0,
  className,
}: ServiceCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
              entry.target.classList.remove("opacity-0")
            }, index * 100)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [index])

  return (
    <div
      ref={ref}
      className={cn(
        "group relative rounded-xl border border-border bg-card p-8 opacity-0 duration-700 transition-all hover:border-primary/50 hover:shadow-lg",
        className
      )}
    >
      <div className="mb-6 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>

      {points.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
          {points.map((point) => (
            <li key={point} className="flex items-start gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
