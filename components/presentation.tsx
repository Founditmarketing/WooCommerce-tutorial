"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { slides } from "@/lib/slides-data"
import { Slide } from "@/components/slide"
import { SlideNav } from "@/components/slide-nav"
import { ChevronDown, ChevronUp } from "lucide-react"

export function Presentation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const total = slides.length

  /* ---- Track which slide is visible ---- */
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.id
            const index = slides.findIndex((s) => `slide-${s.id}` === id)
            if (index !== -1) setActiveIndex(index)
          }
        }
      },
      { root: container, threshold: 0.6 }
    )

    const sections = container.querySelectorAll("section[id^='slide-']")
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  /* ---- Navigate to a specific slide ---- */
  const navigateTo = useCallback((index: number) => {
    const target = document.getElementById(`slide-${slides[index].id}`)
    target?.scrollIntoView({ behavior: "smooth" })
  }, [])

  /* ---- Keyboard navigation ---- */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        const next = Math.min(activeIndex + 1, total - 1)
        navigateTo(next)
      }
      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault()
        const prev = Math.max(activeIndex - 1, 0)
        navigateTo(prev)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex, total, navigateTo])

  return (
    <div className="relative">
      {/* Slide navigation dots */}
      <SlideNav
        total={total}
        activeIndex={activeIndex}
        onNavigate={navigateTo}
      />

      {/* Arrow controls (bottom-right) */}
      <div className="fixed bottom-8 right-6 z-50 flex flex-col gap-2">
        <button
          onClick={() => navigateTo(Math.max(activeIndex - 1, 0))}
          disabled={activeIndex === 0}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/80 hover:scale-105 active:scale-95 disabled:opacity-20 shadow-lg"
          aria-label="Previous slide"
        >
          <ChevronUp className="h-6 w-6" />
        </button>
        <button
          onClick={() => navigateTo(Math.min(activeIndex + 1, total - 1))}
          disabled={activeIndex === total - 1}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-black/80 hover:scale-105 active:scale-95 disabled:opacity-20 shadow-lg"
          aria-label="Next slide"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>

      {/* Scrollable slide container */}
      <div
        ref={containerRef}
        className="h-dvh snap-y snap-mandatory overflow-y-auto scroll-smooth"
      >
        {slides.map((slide, i) => (
          <Slide key={slide.id} slide={slide} index={i} total={total} />
        ))}
      </div>
    </div>
  )
}
