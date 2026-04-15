"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  value: number
  suffix?: string
  label: string
  index?: number
  className?: string
}

export function StatCard({ value, suffix = "", label, index = 0, className }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true)
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
  }, [index, isVisible])

  useEffect(() => {
    if (!isVisible) return

    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [isVisible, value])

  return (
    <div
      ref={ref}
      className={cn(
        "text-center opacity-0 duration-700",
        className
      )}
    >
      <div className="text-4xl font-bold text-primary md:text-5xl">
        {count}
        {suffix}
      </div>
      <div className="mt-2 text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
