"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface SectionTitleProps {
  children: React.ReactNode
  subtitle?: string
  className?: string
  align?: "left" | "center"
}

export function SectionTitle({ children, subtitle, className, align = "left" }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-6")
            entry.target.classList.remove("opacity-0")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn(
        "mb-12 opacity-0 duration-700",
        align === "center" && "text-center",
        className
      )}
    >
      {subtitle && (
        <span className="mb-2 block text-sm font-medium uppercase tracking-widest text-primary">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
        {children}
      </h2>
    </div>
  )
}
