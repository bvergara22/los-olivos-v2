"use client"

import { ChevronLeft, ChevronRight, Maximize2, Pause, Play, Volume2, VolumeX, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

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
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = "" }
  }, [onClose])

  if (!mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm" onClick={onClose}>
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
    </div>,
    document.body
  )
}

// ─── Banner Modal ──────────────────────────────────────────────────────────────

function BannerModal({ item, onClose }: { item: BannerItem; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = "" }
  }, [onClose])

  if (!mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-sm" onClick={onClose}>
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
    </div>,
    document.body
  )
}

// ─── Video Card ────────────────────────────────────────────────────────────────

function VideoCard({
  item,
  onExpand,
  isActive,
  onPlay,
  onPause,
}: {
  item: VideoItem
  onExpand: () => void
  isActive: boolean
  onPlay: () => void
  onPause: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    if (!isActive && playing && videoRef.current) {
      videoRef.current.pause()
      setPlaying(false)
    }
  }, [isActive, playing])

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
      onPause()
    } else {
      videoRef.current.play()
      setPlaying(true)
      onPlay()
    }
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
    onPause()
    onExpand()
  }

  const handleEnded = () => {
    setPlaying(false)
    onPause()
  }

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-card border border-border shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <div className="relative aspect-[4/3] sm:aspect-video cursor-pointer flex-shrink-0" onClick={togglePlay}>
        <video
          ref={videoRef}
          src={item.src}
          muted={muted}
          loop
          playsInline
          className="w-full h-full object-cover"
          onEnded={handleEnded}
        />
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
  const [playingVideoIndex, setPlayingVideoIndex] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const autoIndexRef = useRef(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)

  useEffect(() => {
    if (playingVideoIndex !== null) return
    const t = setInterval(() => {
      if (isDragging.current || !scrollRef.current) return
      autoIndexRef.current = (autoIndexRef.current + 1) % items.length
      scrollToCard(autoIndexRef.current)
    }, 8000)
    return () => clearInterval(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playingVideoIndex])

  const scrollToCard = (index: number) => {
    const el = scrollRef.current
    const card = cardRefs.current[index]
    if (!el || !card) return
    const dx = card.getBoundingClientRect().left - el.getBoundingClientRect().left
    el.scrollTo({ left: el.scrollLeft + dx, behavior: "smooth" })
  }

  const syncAutoIndex = () => {
    isDragging.current = false
    if (!scrollRef.current) return
    const elLeft = scrollRef.current.getBoundingClientRect().left
    let nearest = 0, minDist = Infinity
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const dist = Math.abs(card.getBoundingClientRect().left - elLeft)
      if (dist < minDist) { minDist = dist; nearest = i }
    })
    autoIndexRef.current = nearest
  }

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return
    isDragging.current = true
    dragStartX.current = e.pageX
    dragScrollLeft.current = scrollRef.current.scrollLeft
    e.preventDefault()
  }
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return
    scrollRef.current.scrollLeft = dragScrollLeft.current - (e.pageX - dragStartX.current)
  }
  const onMouseUp = syncAutoIndex

  const scrollPrev = () => {
    const el = scrollRef.current
    if (!el) return
    if (el.scrollLeft <= 1) {
      autoIndexRef.current = items.length - 1
      el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "smooth" })
    } else {
      autoIndexRef.current = (autoIndexRef.current - 1 + items.length) % items.length
      scrollToCard(autoIndexRef.current)
    }
  }
  const scrollNext = () => {
    const el = scrollRef.current
    if (!el) return
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
      autoIndexRef.current = 0
      el.scrollTo({ left: 0, behavior: "smooth" })
    } else {
      autoIndexRef.current = (autoIndexRef.current + 1) % items.length
      scrollToCard(autoIndexRef.current)
    }
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
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory cursor-grab select-none pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {items.map((item, i) => (
              <div
                key={i}
                ref={el => { cardRefs.current[i] = el }}
                className="flex-shrink-0 snap-start [scroll-snap-stop:always] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
              >
                {item.type === "video"
                  ? <VideoCard
                      item={item}
                      onExpand={() => { setPlayingVideoIndex(null); setModalVideo(item) }}
                      isActive={playingVideoIndex === i}
                      onPlay={() => setPlayingVideoIndex(i)}
                      onPause={() => setPlayingVideoIndex(null)}
                    />
                  : <BannerCard item={item} onExpand={() => setModalBanner(item)} />
                }
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={scrollPrev}
            className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center hover:opacity-60 transition-opacity"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6 text-foreground drop-shadow" />
          </button>
          <button
            type="button"
            onClick={scrollNext}
            className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center hover:opacity-60 transition-opacity"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-6 h-6 text-foreground drop-shadow" />
          </button>
        </div>
      </div>

      {modalVideo && <VideoModal item={modalVideo} onClose={() => setModalVideo(null)} />}
      {modalBanner && <BannerModal item={modalBanner} onClose={() => setModalBanner(null)} />}
    </section>
  )
}
