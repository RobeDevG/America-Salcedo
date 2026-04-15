"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  children: string
  className?: string
  delay?: number
}

export function AnimatedText({ children, className, delay = 0 }: AnimatedTextProps) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
            }, delay)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  return (
    <span
      ref={ref}
      className={cn("inline-block opacity-0 duration-700", className)}
    >
      {children}
    </span>
  )
}
