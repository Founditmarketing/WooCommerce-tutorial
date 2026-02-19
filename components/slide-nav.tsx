"use client"

import { cn } from "@/lib/utils"

interface SlideNavProps {
  total: number
  activeIndex: number
  onNavigate: (index: number) => void
}

export function SlideNav({ total, activeIndex, onNavigate }: SlideNavProps) {
  return (
    <nav
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 flex-col gap-2.5 md:flex"
      aria-label="Slide navigation"
    >
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => onNavigate(i)}
          className={cn(
            "group relative h-2.5 w-2.5 rounded-full border border-foreground/20 transition-all duration-300",
            i === activeIndex
              ? "scale-125 bg-accent border-accent"
              : "bg-transparent hover:border-foreground/50"
          )}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === activeIndex ? "step" : undefined}
        >
          <span className="sr-only">Slide {i + 1}</span>
        </button>
      ))}
    </nav>
  )
}
