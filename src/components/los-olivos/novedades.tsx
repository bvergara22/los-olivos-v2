"use client"

import { ChevronLeft, ChevronRight, Maximize2, Pause, Play, Volume2, VolumeX, X } from "lucide-react"
import { useCallback, useEffect, useRef, useState } from "react"

const videos = [
  {
    src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/video/VIDEO%20PARQUE%20(1).mp4",
    title: "Parque Memorial",
    description: "Conoce nuestros espacios de paz y tranquilidad para el descanso eterno de tus seres queridos.",
  },
  {
    src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/video/Video%20Project%201.mp4",
    title: "Nuestro Proyecto",
    description: "Un vistazo a la visión y misión que guían el desarrollo de Los Olivos Cartagena.",
  },
  {
    src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/video/SANANDO%20JUNTOS.mp4",
    title: "Sanando Juntos",
    description: "Acompañamos a las familias en su proceso de duelo con programas de apoyo emocional.",
  },
]

type Video = (typeof videos)[0]

// ─── Modal ────────────────────────────────────────────────────────────────────

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-11 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
        >
          <X className="w-5 h-5" />
          <span>Cerrar</span>
        </button>

        {/* Video */}
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-white/10">
          <video
            src={video.src}
            controls
            autoPlay
            className="w-full h-full"
          />
        </div>

        {/* Info */}
        <div className="mt-5 px-1">
          <h3 className="text-white text-xl font-display">{video.title}</h3>
          <p className="text-white/55 text-sm mt-1 leading-relaxed">{video.description}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Card ─────────────────────────────────────────────────────────────────────

function VideoCard({ video, onExpand }: { video: Video; onExpand: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) { videoRef.current.pause() } else { videoRef.current.play() }
    setPlaying(!playing)
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted(!muted)
  }

  const handleExpand = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (videoRef.current) videoRef.current.pause()
    setPlaying(false)
    onExpand()
  }

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Video area */}
      <div className="relative aspect-[4/3] sm:aspect-video cursor-pointer" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={video.src}
          muted={muted}
          loop
          playsInline
          className="w-full h-full object-cover"
          onEnded={() => setPlaying(false)}
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Center play/pause */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          }`}
        >
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors">
            {playing ? (
              <Pause className="w-7 h-7 text-white" />
            ) : (
              <Play className="w-7 h-7 text-white translate-x-0.5" />
            )}
          </div>
        </div>

        {/* Top-right controls */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
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
            onClick={handleExpand}
            className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors"
            aria-label="Ver en pantalla completa"
          >
            <Maximize2 className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>

      {/* Text */}
      <div className="p-4 sm:p-5">
        <h3 className="font-display text-base sm:text-lg text-foreground mb-1">{video.title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">{video.description}</p>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Novedades() {
  const [modalVideo, setModalVideo] = useState<Video | null>(null)
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemWidth, setItemWidth] = useState(0)

  const maxIndex = videos.length - visibleCount

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setItemWidth(containerRef.current.offsetWidth / visibleCount)
      }
    }
    const updateCount = () => {
      const count = window.innerWidth < 768 ? 1 : 3
      setVisibleCount(count)
    }
    updateCount()
    measure()
    window.addEventListener("resize", () => { updateCount(); measure() })
    return () => window.removeEventListener("resize", () => { updateCount(); measure() })
  }, [])

  useEffect(() => {
    if (containerRef.current) {
      setItemWidth(containerRef.current.offsetWidth / visibleCount)
    }
  }, [visibleCount])

  const next = useCallback(() => {
    setCurrent((c) => (c >= maxIndex ? 0 : c + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrent((c) => (c <= 0 ? maxIndex : c - 1))
  }, [maxIndex])

  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [next])

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <span className="text-3xl md:text-4xl text-primary block">Mantente informado</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
            Novedades
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Entérate de las últimas noticias, eventos y promociones de Los Olivos Cartagena.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Arrows */}
          <button
            type="button"
            onClick={prev}
            className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border items-center justify-center hover:bg-muted transition-colors"
            aria-label="Video anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border items-center justify-center hover:bg-muted transition-colors"
            aria-label="Siguiente video"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Track */}
          <div ref={containerRef} className="overflow-hidden sm:px-12">
            <div
              className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
              style={{
                transform: `translateX(calc(-${current} * (${itemWidth}px + ${current} * 16px)))`,
              }}
            >
              {videos.map((video) => (
                <div
                  key={video.src}
                  className="flex-shrink-0"
                  style={{ width: itemWidth > 0 ? `${itemWidth}px` : `calc(${100 / visibleCount}%)` }}
                >
                  <VideoCard
                    video={video}
                    onExpand={() => setModalVideo(video)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }, (_, i) => i).map((i) => (
              <button
                key={`dot-${i}`}
                type="button"
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${
                  i === current
                    ? "bg-primary w-6"
                    : "bg-primary/30 hover:bg-primary/50 w-2"
                }`}
                aria-label={`Ir a posición ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {modalVideo && (
        <VideoModal video={modalVideo} onClose={() => setModalVideo(null)} />
      )}
    </section>
  )
}
