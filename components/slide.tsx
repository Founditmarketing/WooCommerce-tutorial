import type { SlideData } from "@/lib/slides-data"
import { MediaPlaceholder } from "@/components/media-placeholder"
import { StepCard } from "@/components/step-card"
import Image from "next/image"

interface SlideProps {
  slide: SlideData
  index: number
  total: number
}

export function Slide({ slide, index, total }: SlideProps) {
  const isTitle = index === 0
  const isEnding = index === total - 1

  return (
    <section
      id={`slide-${slide.id}`}
      className="relative flex h-dvh w-full snap-start snap-always items-center justify-center overflow-hidden"
      aria-label={`Slide ${index + 1} of ${total}: ${slide.title}`}
    >
      {/* Subtle decorative line */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-40 -translate-x-1/2 bg-border" />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-12 md:px-12 lg:py-16">
        {/* Phase badge */}
        {slide.phase && (
          <span className="mb-4 inline-block rounded-full border border-border bg-card/50 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/80">
            {slide.phase}
          </span>
        )}

        {/* Title Slide */}
        {isTitle && (
          <div className="flex flex-col items-center text-center">
            {slide.logo && (
              <div className="mb-8 w-16 overflow-hidden rounded-full border border-black bg-black p-1 shadow-sm md:w-20 lg:w-24">
                <Image
                  src={slide.logo}
                  alt="Logo"
                  width={100}
                  height={100}
                  className="aspect-square h-auto w-full object-contain"
                  priority
                />
              </div>
            )}
            <h1 className="text-balance font-serif text-4xl leading-tight md:text-6xl md:leading-tight text-foreground">
              {slide.title}
            </h1>
            {slide.subtitle && (
              <p className="mt-2 text-balance font-serif text-lg text-accent md:text-2xl">
                {slide.subtitle}
              </p>
            )}
            {slide.body && (
              <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-xl">
                {slide.body}
              </p>
            )}
            {slide.media && slide.media.length > 0 && (
              <div className="mx-auto mt-8 w-full max-w-2xl">
                {slide.media.map((m, i) => (
                  <MediaPlaceholder
                    key={i}
                    type={m.type}
                    label={m.label}
                    src={m.src}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Ending Slide */}
        {isEnding && (
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
              <svg
                className="h-8 w-8 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-balance font-serif text-3xl md:text-5xl text-foreground">
              {slide.title}
            </h2>
            {slide.body && (
              <p className="mx-auto mt-6 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground md:text-xl">
                {slide.body}
              </p>
            )}
            {slide.media && slide.media.length > 0 && (
              <div className="mx-auto mt-8 w-full max-w-2xl">
                {slide.media.map((m, i) => (
                  <MediaPlaceholder
                    key={i}
                    type={m.type}
                    label={m.label}
                    src={m.src}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Content Slides (not first, not last) */}
        {!isTitle && !isEnding && (
          <div className={`flex w-full flex-col ${slide.media && slide.media.length > 0 ? "lg:flex-row lg:items-center lg:gap-12 xl:gap-20" : "items-center text-center mx-auto max-w-3xl"}`}>
            {/* Description Column */}
            <div className={`flex w-full flex-col ${slide.media && slide.media.length > 0 ? "lg:w-2/5 lg:text-left" : "items-center"}`}>
              <h2 className={`text-balance font-serif text-2xl md:text-3xl lg:text-5xl text-foreground ${slide.media && slide.media.length > 0 ? "text-left" : "text-center"}`}>
                {slide.title}
              </h2>
              {slide.body && (
                <p className={`mt-4 text-pretty leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed ${slide.media && slide.media.length > 0 ? "text-left text-sm md:text-lg" : "text-center text-base md:text-xl"}`}>
                  {slide.body}
                </p>
              )}
              {slide.steps && slide.steps.length > 0 && (
                <div className={`mt-8 flex flex-col gap-6 w-full ${slide.media && slide.media.length > 0 ? "text-left" : "items-center"}`}>
                  {slide.steps.map((step) => (
                    <div key={step.number} className={slide.media && slide.media.length > 0 ? "w-full text-left" : "w-full max-w-xl text-left"}>
                      <StepCard step={step} />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Media Column */}
            {slide.media && slide.media.length > 0 && (
              <div className="mt-8 flex w-full items-center justify-center lg:mt-0 lg:w-3/5">
                <div className="w-full max-w-3xl">
                  {slide.media.map((m, i) => (
                    <MediaPlaceholder
                      key={i}
                      type={m.type}
                      label={m.label}
                      src={m.src}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium tracking-widest text-muted-foreground/60">
        {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </div>
    </section>
  )
}
