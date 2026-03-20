"use client"

import { Maximize2, Pause, Play, Volume2, VolumeX, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

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
      <div className="relative aspect-video cursor-pointer" onClick={togglePlay}>
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
      <div className="p-5">
        <h3 className="font-display text-lg text-foreground mb-1">{video.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{video.description}</p>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Novedades() {
  const [modalVideo, setModalVideo] = useState<Video | null>(null)

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

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <VideoCard
              key={video.src}
              video={video}
              onExpand={() => setModalVideo(video)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {modalVideo && (
        <VideoModal video={modalVideo} onClose={() => setModalVideo(null)} />
      )}
    </section>
  )
}
