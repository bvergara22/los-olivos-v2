"use client"

import { useRef, useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Maximize2, X, Play, Pause, VolumeX, Volume2 } from "lucide-react"

type VideoEntry =
  | { type: "local"; src: string; title: string; description: string }
  | { type: "vimeo"; videoId: string; title: string; description: string }

const videos: VideoEntry[] = [
  {
    type: "local",
    src: "/video-parque.mp4",
    title: "Parque Memorial",
    description: "Conoce nuestros espacios de paz y tranquilidad para el descanso eterno de tus seres queridos.",
  },
  {
    type: "local",
    src: "/video-project.mp4",
    title: "Nuestro Proyecto",
    description: "Un vistazo a la visión y misión que guían el desarrollo de Los Olivos Cartagena.",
  },
  {
    type: "local",
    src: "/video-sanando.mp4",
    title: "Sanando el Dolor",
    description: "Acompañamos a las familias en su proceso de duelo con programas de apoyo emocional.",
  },
  {
    type: "vimeo",
    videoId: "542868877",
    title: "Los Olivos — Experiencia",
    description: "Una experiencia audiovisual que refleja los valores y el compromiso de Los Olivos con las familias.",
  },
]

// ─── Modal ────────────────────────────────────────────────────────────────────

function VideoModal({ entry, onClose }: { entry: VideoEntry; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/92 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-10 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
          aria-label="Cerrar"
        >
          <X className="w-5 h-5" />
          <span>Cerrar</span>
        </button>

        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-white/10">
          {entry.type === "local" ? (
            <video src={entry.src} controls autoPlay className="w-full h-full" />
          ) : (
            <iframe
              src={`https://player.vimeo.com/video/${entry.videoId}?autoplay=1&title=0&byline=0&portrait=0`}
              className="w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title={entry.title}
            />
          )}
        </div>

        <div className="mt-5 px-1">
          <h3 className="text-white text-xl font-display">{entry.title}</h3>
          <p className="text-white/55 text-sm mt-1 leading-relaxed">{entry.description}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Slides ───────────────────────────────────────────────────────────────────

function LocalSlide({
  entry,
  isActive,
  onExpand,
}: {
  entry: Extract<VideoEntry, { type: "local" }>
  isActive: boolean
  onExpand: () => void
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (!isActive && ref.current) {
      ref.current.pause()
      setPlaying(false)
    }
  }, [isActive])

  const toggle = () => {
    if (!ref.current) return
    if (playing) { ref.current.pause() } else { ref.current.play() }
    setPlaying(!playing)
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!ref.current) return
    ref.current.muted = !muted
    setMuted(!muted)
  }

  return (
    <div className="absolute inset-0 group">
      <div className="absolute inset-0 cursor-pointer" onClick={toggle}>
        <video
          ref={ref}
          src={entry.src}
          muted={muted}
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Center play/pause */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors">
            {playing ? (
              <Pause className="w-6 h-6 text-white" />
            ) : (
              <Play className="w-6 h-6 text-white translate-x-0.5" />
            )}
          </div>
        </div>
      </div>

      {/* Controls top-right */}
      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
        <button
          type="button"
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors"
          aria-label={muted ? "Activar sonido" : "Silenciar"}
        >
          {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
        </button>
        <button
          type="button"
          onClick={onExpand}
          className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors"
          aria-label="Ampliar video"
        >
          <Maximize2 className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  )
}

function VimeoSlide({
  entry,
  onExpand,
}: {
  entry: Extract<VideoEntry, { type: "vimeo" }>
  onExpand: () => void
}) {
  return (
    <div className="absolute inset-0 group">
      <iframe
        src={`https://player.vimeo.com/video/${entry.videoId}?title=0&byline=0&portrait=0&loop=1`}
        className="absolute inset-0 w-full h-full"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        title={entry.title}
      />
      <button
        type="button"
        onClick={onExpand}
        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100 z-10"
        aria-label="Ampliar video"
      >
        <Maximize2 className="w-4 h-4 text-white" />
      </button>
    </div>
  )
}

// ─── Thumbnail ────────────────────────────────────────────────────────────────

function Thumbnail({ entry, active, onClick }: { entry: VideoEntry; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative rounded-xl overflow-hidden border-2 transition-all duration-300 w-full ${
        active ? "border-primary shadow-lg shadow-primary/20" : "border-transparent hover:border-primary/40"
      }`}
      aria-label={`Ver ${entry.title}`}
    >
      <div className="aspect-video">
        {entry.type === "local" ? (
          <video
            src={entry.src}
            className="w-full h-full object-cover"
            muted
            playsInline
            preload="metadata"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
            <Play className="w-6 h-6 text-white/60" />
          </div>
        )}
      </div>
      <div
        className={`absolute inset-0 transition-colors ${
          active ? "bg-primary/15" : "bg-black/40 hover:bg-black/20"
        }`}
      />
      <span className="absolute bottom-0 left-0 right-0 px-2 py-1.5 text-white text-[11px] font-medium leading-tight bg-gradient-to-t from-black/70 to-transparent">
        {entry.title}
      </span>
    </button>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function Novedades() {
  const [current, setCurrent] = useState(0)
  const [modalEntry, setModalEntry] = useState<VideoEntry | null>(null)

  const prev = () => setCurrent((c) => (c - 1 + videos.length) % videos.length)
  const next = () => setCurrent((c) => (c + 1) % videos.length)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-3xl md:text-4xl text-primary block">Mantente informado</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
            Novedades
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Entérate de las últimas noticias, eventos y promociones de Los Olivos Cartagena.
          </p>
        </div>

        {/* Carousel */}
        <div className="space-y-3">
          {/* Main video area */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-xl ring-1 ring-border">
            {videos.map((entry, i) => (
              <div
                key={entry.title}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  i === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                {entry.type === "local" ? (
                  <LocalSlide entry={entry} isActive={i === current} onExpand={() => setModalEntry(entry)} />
                ) : (
                  <VimeoSlide entry={entry} onExpand={() => setModalEntry(entry)} />
                )}
              </div>
            ))}

            {/* Info overlay (only for local videos — Vimeo has its own UI) */}
            {videos.map((entry, i) =>
              entry.type === "local" ? (
                <div
                  key={`info-${entry.title}`}
                  className={`absolute bottom-0 left-0 right-0 p-6 z-20 pointer-events-none transition-opacity duration-700 ${
                    i === current ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <h3 className="text-white text-xl font-display font-semibold drop-shadow">{entry.title}</h3>
                  <p className="text-white/70 text-sm mt-1 max-w-xl drop-shadow">{entry.description}</p>
                </div>
              ) : null
            )}

            {/* Navigation arrows */}
            <button
              type="button"
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/65 transition-colors"
              aria-label="Video anterior"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>
            <button
              type="button"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/65 transition-colors"
              aria-label="Siguiente video"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex gap-2">
              {videos.map((entry, i) => (
                <button
                  key={`dot-${entry.title}`}
                  type="button"
                  onClick={() => setCurrent(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === current ? "bg-white w-6" : "bg-white/40 hover:bg-white/60 w-1.5"
                  }`}
                  aria-label={`Ir a ${entry.title}`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="grid grid-cols-4 gap-2 sm:gap-3">
            {videos.map((entry, i) => (
              <Thumbnail
                key={`thumb-${entry.title}`}
                entry={entry}
                active={i === current}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox modal */}
      {modalEntry && <VideoModal entry={modalEntry} onClose={() => setModalEntry(null)} />}
    </section>
  )
}
