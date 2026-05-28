"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

const sedes = [
  { name: "Sede Cartagena", slug: "cartagena", src: "/cartagena.webp", badge: "bg-[#e65c36] text-white" },
  { name: "Sede Turbaco", slug: "turbaco", src: "/turbaco.jpg", badge: "bg-[#DC4C5A] text-white" },
  { name: "Sede Arjona", slug: "arjona", src: "/arjona.webp", badge: "bg-[#F9D886] text-[#1a1a1a]" },
  { name: "Sede Magangué", slug: "magangue", src: "/magangue.webp", badge: "bg-[#F9D886] text-[#1a1a1a]" },
  { name: "Sede María la Baja", slug: "maria-la-baja", src: "/maria.webp", badge: "bg-[#8CE63C] text-[#1a1a1a]" },
  { name: "Sede San Andrés", slug: "san-andres", src: "/san-andres.webp", badge: "bg-[#59AB9B] text-white" },
  { name: "Sede Mahates", slug: "mahates", src: "/mahates.webp", badge: "bg-[#e65c36] text-white" },
  { name: "Sede Soplaviento", slug: "soplaviento", src: "/soplaviento.jpg", badge: "bg-[#8CE63C] text-[#1a1a1a]" },
  { name: "Sede San Juan", slug: "san-juan", src: "/san-juan.jpg", badge: "bg-[#DC4C5A] text-white" },
  { name: "Sede Mompox", slug: "mompox", src: "/mompox.jpg", badge: "bg-[#59AB9B] text-white" },
]

export function SedesPlanes() {
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

  useEffect(() => {
    const t = setInterval(() => {
      if (isDragging.current || !scrollRef.current) return
      autoIndexRef.current = (autoIndexRef.current + 1) % sedes.length
      scrollToCard(autoIndexRef.current)
    }, 4000)
    return () => clearInterval(t)
  }, [])

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
      autoIndexRef.current = sedes.length - 1
      el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "smooth" })
    } else {
      autoIndexRef.current = (autoIndexRef.current - 1 + sedes.length) % sedes.length
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
      autoIndexRef.current = (autoIndexRef.current + 1) % sedes.length
      scrollToCard(autoIndexRef.current)
    }
  }

  return (
    <section id="sedes-planes" className="py-12 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <span className="text-3xl md:text-4xl text-primary block">Presencia municipal</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
            Nuestras sedes y planes
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Contamos con presencia en toda la región para estar siempre cerca de ti y tu familia.
          </p>
        </div>

        <div className="mb-16">
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory cursor-grab select-none pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              {sedes.map((sede, i) => (
                <div
                  key={sede.slug}
                  ref={el => { cardRefs.current[i] = el }}
                  className="flex-shrink-0 snap-start [scroll-snap-stop:always] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <Link
                    href={`/planes/${sede.slug}`}
                    className="group block overflow-hidden rounded-2xl hover:shadow-lg transition-all"
                    draggable={false}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={sede.src}
                        alt={sede.name}
                        loading="eager"
                        draggable={false}
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
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
      </div>
    </section>
  )
}
