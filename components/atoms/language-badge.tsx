import { cn } from "@/lib/utils"

interface LanguageBadgeProps {
  language: string
  level: string
  className?: string
}

export function LanguageBadge({ language, level, className }: LanguageBadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-primary hover:shadow-md",
        className
      )}
    >
      <span className="text-foreground">{language}</span>
      <span className="h-1 w-1 rounded-full bg-primary" />
      <span className="text-muted-foreground">{level}</span>
    </div>
  )
}
