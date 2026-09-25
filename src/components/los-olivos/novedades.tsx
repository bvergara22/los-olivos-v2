"use client"

import { Maximize2, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import { BLOG_API_URL } from "@/lib/blog"

type BannerItem = {
  type: "banner"
  category: string
  src: string
  alt: string
  title: string
  description: string
  overlayButton?: { href: string; top: string; left: string; width: string; height: string }
}

type RecentPost = {
  id: number
  title: string
  slug: string
  category: { name: string } | null
  publishedAt: string | null
  coverImage: { url: string; alt: string } | null
}

const items: BannerItem[] = [
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
    category: "Novedad",
    src: "/banner-lia.jpg",
    alt: "Consulta tu perfil de afiliado",
    title: "Consulta tu perfil de afiliado",
    description: "A través de Lía o del Portal Los Olivos puedes consultar tu perfil. Tu usuario es el correo con el que te afiliaste.",
    overlayButton: { href: "https://wa.me/573233093435", top: "0%", left: "0%", width: "100%", height: "100%" },
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
]

// ─── Modal ─────────────────────────────────────────────────────────────────────

function BannerModal({ item, onClose }: { item: BannerItem; onClose: () => void }) {
  const [mounted, setMounted] = useState(false)
  // eslint-disable-next-line react-hooks/set-state-in-effect
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
        <h3 className="font-display text-xl md:text-3xl text-white font-bold leading-tight mb-2">{item.title}</h3>
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
        <h3 className="font-display text-sm md:text-base text-white font-semibold leading-tight">{item.title}</h3>
      </div>
      <button type="button" onClick={(e) => { e.stopPropagation(); onExpand() }}
        className="absolute top-3 right-3 z-20 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
        aria-label="Ver imagen completa">
        <Maximize2 className="w-3.5 h-3.5 text-white" />
      </button>
    </div>
  )
}

function BlogPreviewCard({ post }: { post: RecentPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group relative rounded-xl overflow-hidden bg-black block aspect-video">
      {post.coverImage ? (
        <Image src={post.coverImage.url} alt={post.coverImage.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-105 opacity-90" />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/10" />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10">
        <h3 className="font-display text-sm md:text-base text-white font-semibold leading-tight line-clamp-2">{post.title}</h3>
      </div>
    </Link>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Novedades() {
  const [modalBanner, setModalBanner] = useState<BannerItem | null>(null)
  const [recentPosts, setRecentPosts] = useState<RecentPost[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const autoIndexRef = useRef(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)

  useEffect(() => {
    fetch(`${BLOG_API_URL}/blog/posts?page=1&per_page=3`, {
      headers: { Accept: "application/json" },
    })
      .then(r => r.ok ? r.json() : null)
      .then(json => { if (json?.data) setRecentPosts(json.data as RecentPost[]) })
      .catch(() => {})
  }, [])

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

  const [featured, ...side] = items

  const allMobileItems = [...items, ...recentPosts.map(p => ({ ...p, type: "blog" as const }))]

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
            {allMobileItems.map((item, i) => (
              <div key={i} ref={el => { cardRefs.current[i] = el }} className="flex-shrink-0 snap-start [scroll-snap-stop:always] w-full">
                {item.type === "blog"
                  ? <BlogPreviewCard post={item as unknown as RecentPost} />
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
              <FeaturedBannerCard item={featured!} onExpand={() => setModalBanner(featured!)} />
            </div>
            <div className="grid grid-cols-1 gap-4">
              {side.map((item, i) => (
                <div key={i} className="flex-1">
                  <SmallBannerCard item={item} onExpand={() => setModalBanner(item)} />
                </div>
              ))}
            </div>
          </div>

          {recentPosts.length > 0 && (
            <div className="grid md:grid-cols-3 gap-4">
              {recentPosts.map((post) => (
                <BlogPreviewCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>

      </div>

      {modalBanner && <BannerModal item={modalBanner} onClose={() => setModalBanner(null)} />}
    </section>
  )
}
