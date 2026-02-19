import { AlertTriangle } from "lucide-react"
import type { SlideStep } from "@/lib/slides-data"

interface StepCardProps {
  step: SlideStep
}

export function StepCard({ step }: StepCardProps) {
  return (
    <div className="flex gap-5 md:gap-7">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground font-serif text-lg md:h-12 md:w-12 md:text-xl">
        {step.number}
      </div>
      <div className="flex-1 pt-1 md:pt-2">
        <h3 className="text-lg font-semibold text-foreground flex items-center gap-2 flex-wrap md:text-2xl">
          {step.title}
          {step.important && (
            <span className="inline-flex items-center gap-1 rounded-md bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent md:px-3 md:py-1 md:text-sm">
              <AlertTriangle className="h-3 w-3" />
              Important
            </span>
          )}
        </h3>
        <p className="mt-2 text-base leading-relaxed text-muted-foreground md:mt-3 md:text-xl md:leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  )
}
