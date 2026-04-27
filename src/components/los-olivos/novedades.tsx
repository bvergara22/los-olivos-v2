"use client"

import { ChevronLeft, ChevronRight, Maximize2, Pause, Play, Volume2, VolumeX, X } from "lucide-react"
import Image from "next/image"
import { useCallback, useEffect, useRef, useState } from "react"

type VideoItem = {
  type: "video"
  src: string
  title: string
  description: string
}

type BannerItem = {
  type: "banner"
  src: string
  alt: string
  title: string
  description: string
  overlayButton?: {
    href: string
    top: string
    left: string
    width: string
    height: string
  }
}

type CarouselItem = VideoItem | BannerItem

const items: CarouselItem[] = [
  {
    type: "banner",
    src: "/banner1.jpg",
    alt: "Protección & Tranquilidad",
    title: "Protección & Tranquilidad",
    description: "Afíliate por primera vez y obtén beneficios especiales: 10% descuento, 1 mes gratis y 2 meses gratis.",
    overlayButton: {
      href: "https://www.portal.losolivoscartagena.com/afiliacion-en-linea",
      top: "82%", left: "3%", width: "58%", height: "11%",
    },
  },
  {
    type: "banner",
    src: "/banner2.jpg",
    alt: "Tarjeta Golden Offers",
    title: "Tarjeta Golden Offers",
    description: "Descarga tu tarjeta Golden Offers y descubre todos los beneficios exclusivos que tenemos para ti.",
    overlayButton: {
      href: "https://goldenoffer.losolivoscartagena.com/",
      top: "22%", left: "10%", width: "42%", height: "14%",
    },
  },
  {
    type: "banner",
    src: "/banner3.jpg",
    alt: "Asistencias en Vida – Global Assist",
    title: "Asistencias en Vida",
    description: "Tu plan de previsión ha mejorado con asistencias en vida para ti y tu núcleo familiar. Global Assist.",
    overlayButton: {
      href: "https://www.gag.com.co/micrositios/asistenciaenvida-losolivos-cartagena/",
      top: "58%", left: "52%", width: "36%", height: "12%",
    },
  },
  {
    type: "video",
    src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/video/VIDEO%20PARQUE%20(1).mp4",
    title: "Parque Memorial",
    description: "Conoce nuestros espacios de paz y tranquilidad para el descanso eterno de tus seres queridos.",
  },
  {
    type: "video",
    src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/video/Video%20Project%201.mp4",
    title: "Nuestro Proyecto",
    description: "Un vistazo a la visión y misión que guían el desarrollo de Los Olivos Cartagena.",
  },
  {
    type: "video",
    src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/video/SANANDO%20JUNTOS.mp4",
    title: "Sanando Juntos",
    description: "Acompañamos a las familias en su proceso de duelo con programas de apoyo emocional.",
  },
]

// ─── Video Modal ───────────────────────────────────────────────────────────────

function VideoModal({ item, onClose }: { item: VideoItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = "" }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute -top-11 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
          <X className="w-5 h-5" /><span>Cerrar</span>
        </button>
        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black ring-1 ring-white/10">
          <video src={item.src} controls autoPlay className="w-full h-full" />
        </div>
        <div className="mt-5 px-1">
          <h3 className="text-white text-xl font-display">{item.title}</h3>
          <p className="text-white/55 text-sm mt-1 leading-relaxed">{item.description}</p>
        </div>
      </div>
    </div>
  )
}

// ─── Banner Modal ──────────────────────────────────────────────────────────────

function BannerModal({ item, onClose }: { item: BannerItem; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = "" }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute -top-11 right-0 flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm">
          <X className="w-5 h-5" /><span>Cerrar</span>
        </button>
        <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <Image src={item.src} alt={item.alt} width={1200} height={675} className="w-full h-auto object-contain" />
          {item.overlayButton && (
            <a href={item.overlayButton.href} target="_blank" rel="noopener noreferrer" className="absolute z-10 cursor-pointer"
              style={{ top: item.overlayButton.top, left: item.overlayButton.left, width: item.overlayButton.width, height: item.overlayButton.height }}
              aria-label={item.title} />
          )}
        </div>
      </div>
    </div>
  )
}

// ─── Video Card ────────────────────────────────────────────────────────────────

function VideoCard({ item, onExpand }: { item: VideoItem; onExpand: () => void }) {
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
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] sm:aspect-video cursor-pointer flex-shrink-0" onClick={togglePlay}>
        <video ref={videoRef} src={item.src} muted={muted} loop playsInline className="w-full h-full object-cover" onEnded={() => setPlaying(false)} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors">
            {playing ? <Pause className="w-7 h-7 text-white" /> : <Play className="w-7 h-7 text-white translate-x-0.5" />}
          </div>
        </div>
        <div className="absolute top-3 right-3 flex gap-2 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
          <button type="button" onClick={toggleMute} className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors" aria-label={muted ? "Activar sonido" : "Silenciar"}>
            {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
          </button>
          <button type="button" onClick={handleExpand} className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors" aria-label="Ver en pantalla completa">
            <Maximize2 className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      <div className="p-4 sm:p-5 flex-1">
        <h3 className="font-display text-base sm:text-lg text-foreground mb-1">{item.title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">{item.description}</p>
      </div>
    </div>
  )
}

// ─── Banner Card ───────────────────────────────────────────────────────────────

function BannerCard({ item, onExpand }: { item: BannerItem; onExpand: () => void }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] sm:aspect-video flex-shrink-0">
        <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {item.overlayButton && (
          <a href={item.overlayButton.href} target="_blank" rel="noopener noreferrer"
            className="absolute inset-0 z-10 cursor-pointer" aria-label={item.title} />
        )}
        <div className="absolute top-3 right-3 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 z-20">
          <button type="button" onClick={(e) => { e.stopPropagation(); onExpand() }} className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors" aria-label="Ver imagen completa">
            <Maximize2 className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      <div className="p-4 sm:p-5 flex-1">
        <h3 className="font-display text-base sm:text-lg text-foreground mb-1">{item.title}</h3>
        <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed line-clamp-2">{item.description}</p>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Novedades() {
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null)
  const [modalBanner, setModalBanner] = useState<BannerItem | null>(null)
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const [gapPx, setGapPx] = useState(16)
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemWidth, setItemWidth] = useState(0)
  const touchStartX = useRef(0)

  const maxIndex = items.length - visibleCount

  const measure = useCallback(() => {
    if (!containerRef.current) return
    const w = window.innerWidth
    const gap = w < 640 ? 16 : 24
    const count = w < 640 ? 1 : w < 1024 ? 2 : 3
    const containerW = containerRef.current.offsetWidth
    const paddingX = w >= 640 ? 96 : 0 // sm:px-12 = 48*2
    const innerW = containerW - paddingX
    setGapPx(gap)
    setVisibleCount(count)
    setItemWidth((innerW - (count - 1) * gap) / count)
  }, [])

  useEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [measure])

  const next = useCallback(() => setCurrent((c) => (c >= maxIndex ? 0 : c + 1)), [maxIndex])
  const prev = useCallback(() => setCurrent((c) => (c <= 0 ? maxIndex : c - 1)), [maxIndex])

  useEffect(() => {
    const interval = setInterval(next, 8000)
    return () => clearInterval(interval)
  }, [next])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) diff > 0 ? next() : prev()
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <span className="text-3xl md:text-4xl text-primary block">Mantente informado</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">Novedades</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Entérate de las últimas noticias, eventos y promociones de Los Olivos Cartagena.
          </p>
        </div>

        <div className="relative">
          <button type="button" onClick={prev} className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 items-center justify-center transition-colors text-white" aria-label="Anterior">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button type="button" onClick={next} className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-sm border border-white/20 items-center justify-center transition-colors text-white" aria-label="Siguiente">
            <ChevronRight className="w-5 h-5" />
          </button>

          <div
            ref={containerRef}
            className="overflow-hidden sm:px-12"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex items-stretch transition-transform duration-500 ease-in-out"
              style={{
                gap: `${gapPx}px`,
                transform: `translateX(${-(current * (itemWidth + gapPx))}px)`,
              }}
            >
              {items.map((item, i) => (
                <div key={i} className="flex-shrink-0" style={{ width: itemWidth > 0 ? `${itemWidth}px` : `calc(${100 / visibleCount}%)` }}>
                  {item.type === "video"
                    ? <VideoCard item={item} onExpand={() => setModalVideo(item)} />
                    : <BannerCard item={item} onExpand={() => setModalBanner(item)} />
                  }
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }, (_, i) => i).map((i) => (
              <button key={`dot-${i}`} type="button" onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-primary/30 hover:bg-primary/50 w-2"}`}
                aria-label={`Ir a posición ${i + 1}`} />
            ))}
          </div>
        </div>
      </div>

      {modalVideo && <VideoModal item={modalVideo} onClose={() => setModalVideo(null)} />}
      {modalBanner && <BannerModal item={modalBanner} onClose={() => setModalBanner(null)} />}
    </section>
  )
}
