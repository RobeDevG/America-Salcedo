"use client"

import { cn } from "@/lib/utils"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        "relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground",
        "after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-primary d after:transition-all after:duration-300 hover:after:w-full",
        className
      )}
    >
      {children}
    </a>
  )
}
