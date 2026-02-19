import { Play, ImageIcon, X, Maximize2 } from "lucide-react"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"

interface MediaPlaceholderProps {
  type: "video" | "image"
  label: string
  src?: string
}

export function MediaPlaceholder({ type, label, src }: MediaPlaceholderProps) {
  if (!src) {
    return (
      <div
        className="relative flex flex-col items-center justify-center gap-4 rounded-xl border border-border bg-muted/60 px-6 py-12 md:py-16 transition-colors hover:bg-muted"
        role="img"
        aria-label={`Placeholder for ${type}: ${label}`}
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
          {type === "video" ? (
            <Play className="h-6 w-6 text-primary" />
          ) : (
            <ImageIcon className="h-6 w-6 text-primary" />
          )}
        </div>
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            {type === "video" ? "Insert Video" : "Insert Screenshot"}
          </p>
          <p className="mt-1 text-sm font-medium text-foreground/80">
            {label}
          </p>
        </div>
      </div>
    )
  }

  if (type === "video") {
    return (
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="group relative mx-auto block w-fit overflow-hidden rounded-lg bg-card transition-all hover:bg-muted/30 focus:outline-none focus:ring-1 focus:ring-primary/30">
            <div className="relative overflow-hidden max-h-[50dvh] sm:max-h-[60dvh] bg-black/10 flex items-center justify-center">
              {/* Fake thumbnail using the video itself */}
              <video
                src={`${src}#t=0.1`}
                className="h-auto w-auto max-h-[50dvh] sm:max-h-[60dvh] object-contain opacity-70 transition-transform duration-700 group-hover:scale-[1.02] group-hover:opacity-90"
                preload="metadata"
                muted
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 transition-colors group-hover:bg-black/5">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-md transition-transform group-hover:scale-110">
                  <Play className="h-8 w-8 ml-1" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-background/40 px-2 py-0.5 text-[9px] font-medium text-foreground/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
              <span className="truncate">Play {label}</span>
              <Play className="h-2.5 w-2.5" />
            </div>
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center p-2 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-6 md:p-12">
            <div className="relative flex h-full w-full flex-col items-center justify-center">
              <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
                <video
                  src={src}
                  className="max-h-full max-w-full rounded-lg"
                  controls
                  autoPlay
                />
              </div>
              <div className="absolute right-4 top-4 z-[102]">
                <Dialog.Close asChild>
                  <button
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-md transition-colors hover:bg-background/80"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Title className="sr-only">{label}</Dialog.Title>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    )
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="group relative mx-auto block w-fit overflow-hidden rounded-lg bg-card transition-all hover:bg-muted/30 focus:outline-none focus:ring-1 focus:ring-primary/30">
          <div className="relative overflow-hidden max-h-[50dvh] sm:max-h-[60dvh]">
            <Image
              src={src}
              alt={label}
              width={1200}
              height={900}
              className="h-auto w-auto max-h-[50dvh] sm:max-h-[60dvh] object-contain transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/5">
              <Maximize2 className="h-6 w-6 text-foreground/20 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </div>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-background/40 px-2 py-0.5 text-[9px] font-medium text-foreground/60 opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
            <span className="truncate">{label}</span>
            <Maximize2 className="h-2.5 w-2.5" />
          </div>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[101] flex h-full w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center p-2 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:p-6 md:p-12">
          <div className="relative flex h-full w-full flex-col items-center justify-center">
            <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
              <Image
                src={src}
                alt={label}
                width={2400}
                height={1800}
                className="max-h-full max-w-full object-contain"
                priority
              />
            </div>
            <div className="absolute right-4 top-4 z-[102]">
              <Dialog.Close asChild>
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-background/50 text-foreground backdrop-blur-md transition-colors hover:bg-background/80"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" />
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Title className="sr-only">{label}</Dialog.Title>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
