"use client"

import { Maximize2, Pause, Play, Volume2, VolumeX, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

type VideoItem = {
  type: "video"
  category: string
  src: string
  title: string
  description: string
  seekTo?: number
}

type BannerItem = {
  type: "banner"
  category: string
  src: string
  alt: string
  title: string
  description: string
  overlayButton?: { href: string; top: string; left: string; width: string; height: string }
}

type CarouselItem = VideoItem | BannerItem

const items: CarouselItem[] = [
  {
    type: "banner",
    category: "Promoción",
    src: "/banner1.jpg",
    alt: "Protección & Tranquilidad",
    title: "Protección & Tranquilidad",
    description: "Afíliate por primera vez y obtén beneficios especiales: 10% descuento, 1 mes gratis y 2 meses gratis.",
    overlayButton: { href: "https://www.portal.losolivoscartagena.com/afiliacion-en-linea", top: "82%", left: "3%", width: "58%", height: "11%" },
  },
  {
    type: "banner",
    category: "Beneficio",
    src: "/banner2.jpg",
    alt: "Tarjeta Golden Offers",
    title: "Tarjeta Golden Offers",
    description: "Descarga tu tarjeta Golden Offers y descubre todos los beneficios exclusivos que tenemos para ti.",
    overlayButton: { href: "https://goldenoffer.losolivoscartagena.com/", top: "22%", left: "10%", width: "42%", height: "14%" },
  },
  {
    type: "banner",
    category: "Servicio",
    src: "/banner3.jpg",
    alt: "Asistencias en Vida – Global Assist",
    title: "Asistencias en Vida",
    description: "Tu plan de previsión ha mejorado con asistencias en vida para ti y tu núcleo familiar. Global Assist.",
    overlayButton: { href: "https://www.gag.com.co/micrositios/asistenciaenvida-losolivos-cartagena/", top: "58%", left: "52%", width: "36%", height: "12%" },
  },
  {
    type: "video",
    category: "Video",
    src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/video/VIDEO%20PARQUE%20(1).mp4",
    title: "Parque Memorial",
    description: "Conoce nuestros espacios de paz y tranquilidad para el descanso eterno de tus seres queridos.",
  },
  {
    type: "video",
    category: "Video",
    src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/video/Video%20Project%201.mp4",
    title: "Nuestro Proyecto",
    description: "Un vistazo a la visión y misión que guían el desarrollo de Los Olivos Cartagena.",
  },
  {
    type: "video",
    category: "Video",
    src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/video/SANANDO%20JUNTOS.mp4",
    title: "Sanando Juntos",
    description: "Acompañamos a las familias en su proceso de duelo con programas de apoyo emocional.",
    seekTo: 3,
  },
]

// ─── Modals ────────────────────────────────────────────────────────────────────

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
          <video src={item.src} controls autoPlay onEnded={onClose} className="w-full h-full" />
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
            <a href={item.overlayButton.href} target="_blank" rel="noopener noreferrer"
              className="absolute z-10 cursor-pointer"
              style={{ top: item.overlayButton.top, left: item.overlayButton.left, width: item.overlayButton.width, height: item.overlayButton.height }}
              aria-label={item.title} />
          )}
        </div>
      </div>
    </div>,
    document.body
  )
}

// ─── Cards ─────────────────────────────────────────────────────────────────────

function CategoryPill({ label }: { label: string }) {
  return (
    <span className="inline-block text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary text-white">
      {label}
    </span>
  )
}

function FeaturedBannerCard({ item, onExpand }: { item: BannerItem; onExpand: () => void }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden bg-black h-full min-h-[280px] md:min-h-[420px]">
      <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      {item.overlayButton && (
        <a href={item.overlayButton.href} target="_blank" rel="noopener noreferrer"
          className="absolute inset-0 z-10" aria-label={item.title} />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7 z-20 pointer-events-none">
        <CategoryPill label={item.category} />
        <h3 className="font-display text-xl md:text-3xl text-white font-bold leading-tight mt-3 mb-2">{item.title}</h3>
        <p className="text-white/65 text-sm leading-relaxed line-clamp-2 max-w-lg">{item.description}</p>
      </div>
      <button type="button" onClick={(e) => { e.stopPropagation(); onExpand() }}
        className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        aria-label="Ver imagen completa">
        <Maximize2 className="w-4 h-4 text-white" />
      </button>
    </div>
  )
}

function SmallBannerCard({ item, onExpand }: { item: BannerItem; onExpand: () => void }) {
  return (
    <div className="group relative rounded-xl overflow-hidden bg-black h-full min-h-[130px]">
      <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      {item.overlayButton && (
        <a href={item.overlayButton.href} target="_blank" rel="noopener noreferrer"
          className="absolute inset-0 z-10" aria-label={item.title} />
      )}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-20 pointer-events-none">
        <CategoryPill label={item.category} />
        <h3 className="font-display text-sm md:text-base text-white font-semibold leading-tight mt-2">{item.title}</h3>
      </div>
      <button type="button" onClick={(e) => { e.stopPropagation(); onExpand() }}
        className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        aria-label="Ver imagen completa">
        <Maximize2 className="w-3.5 h-3.5 text-white" />
      </button>
    </div>
  )
}

function VideoCard({ item, onExpand }: { item: VideoItem; onExpand: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) { videoRef.current.pause(); setPlaying(false) }
    else { videoRef.current.play(); setPlaying(true) }
  }

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    videoRef.current.muted = !muted
    setMuted(!muted)
  }

  return (
    <div className="group relative rounded-xl overflow-hidden bg-black flex flex-col h-full">
      <div className="relative aspect-video cursor-pointer flex-shrink-0" onClick={togglePlay}>
        <video ref={videoRef} src={item.src} muted={muted} loop playsInline preload="metadata" className="w-full h-full object-cover" onEnded={() => setPlaying(false)} onLoadedMetadata={() => { if (videoRef.current) videoRef.current.currentTime = item.seekTo ?? 0.001 }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${playing ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}>
          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center hover:bg-white/30 transition-colors">
            {playing ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white translate-x-0.5" />}
          </div>
        </div>
        <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button type="button" onClick={toggleMute} className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors">
            {muted ? <VolumeX className="w-3.5 h-3.5 text-white" /> : <Volume2 className="w-3.5 h-3.5 text-white" />}
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); if (videoRef.current) videoRef.current.pause(); setPlaying(false); onExpand() }} className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-black/70 transition-colors">
            <Maximize2 className="w-3.5 h-3.5 text-white" />
          </button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <CategoryPill label={item.category} />
          <h3 className="font-display text-sm text-white font-semibold leading-tight mt-2 line-clamp-2">{item.title}</h3>
        </div>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Novedades() {
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null)
  const [modalBanner, setModalBanner] = useState<BannerItem | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const autoIndexRef = useRef(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)

  const scrollToCard = (index: number) => {
    const el = scrollRef.current
    const card = cardRefs.current[index]
    if (!el || !card) return
    el.scrollTo({ left: el.scrollLeft + card.getBoundingClientRect().left - el.getBoundingClientRect().left, behavior: "smooth" })
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

  const scrollPrev = () => {
    const el = scrollRef.current; if (!el) return
    if (el.scrollLeft <= 1) { autoIndexRef.current = items.length - 1; el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "smooth" }) }
    else { autoIndexRef.current = (autoIndexRef.current - 1 + items.length) % items.length; scrollToCard(autoIndexRef.current) }
  }
  const scrollNext = () => {
    const el = scrollRef.current; if (!el) return
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) { autoIndexRef.current = 0; el.scrollTo({ left: 0, behavior: "smooth" }) }
    else { autoIndexRef.current = (autoIndexRef.current + 1) % items.length; scrollToCard(autoIndexRef.current) }
  }

  const renderCard = (item: CarouselItem, onExpandVideo: () => void, onExpandBanner: () => void) =>
    item.type === "video"
      ? <VideoCard item={item as VideoItem} onExpand={onExpandVideo} />
      : <SmallBannerCard item={item as BannerItem} onExpand={onExpandBanner} />

  const [featured, ...rest] = items
  const side = rest.slice(0, 2)
  const bottom = rest.slice(2)

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

        {/* ── Móvil: carrusel horizontal ── */}
        <div className="relative md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory cursor-grab select-none pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={syncAutoIndex}
            onMouseLeave={syncAutoIndex}
          >
            {items.map((item, i) => (
              <div key={i} ref={el => { cardRefs.current[i] = el }} className="flex-shrink-0 snap-start [scroll-snap-stop:always] w-full">
                {item.type === "video"
                  ? <VideoCard item={item as VideoItem} onExpand={() => { setModalVideo(item as VideoItem) }} />
                  : <SmallBannerCard item={item as BannerItem} onExpand={() => setModalBanner(item as BannerItem)} />
                }
              </div>
            ))}
          </div>
        </div>

        {/* ── Desktop: grid editorial ── */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="md:col-span-2">
              {featured.type === "banner"
                ? <FeaturedBannerCard item={featured as BannerItem} onExpand={() => setModalBanner(featured as BannerItem)} />
                : <VideoCard item={featured as VideoItem} onExpand={() => setModalVideo(featured as VideoItem)} />
              }
            </div>
            <div className="grid grid-cols-1 gap-4">
              {side.map((item, i) => (
                <div key={i} className="flex-1">
                  {renderCard(item, () => setModalVideo(item as VideoItem), () => setModalBanner(item as BannerItem))}
                </div>
              ))}
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {bottom.map((item, i) => (
              <div key={i}>
                {renderCard(item, () => setModalVideo(item as VideoItem), () => setModalBanner(item as BannerItem))}
              </div>
            ))}
          </div>
        </div>

      </div>

      {modalVideo && <VideoModal item={modalVideo} onClose={() => setModalVideo(null)} />}
      {modalBanner && <BannerModal item={modalBanner} onClose={() => setModalBanner(null)} />}
    </section>
  )
}
