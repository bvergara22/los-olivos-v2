"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"

const sedes = [
  { name: "Sede Cartagena", slug: "cartagena", src: "/cartagena.jpg" },
  { name: "Sede Turbaco", slug: "turbaco", src: "/turbaco.jpg" },
  { name: "Sede Arjona", slug: "arjona", src: "/arjona.jpg" },
  { name: "Sede Magangué", slug: "magangue", src: "/magangue.jpg" },
  { name: "Sede María la Baja", slug: "maria-la-baja", src: "/maria.jpg" },
  { name: "Sede San Andrés", slug: "san-andres", src: "/san-andres.jpg" },
  { name: "Sede Mahates", slug: "mahates", src: "/mahates.jpg" },
  { name: "Sede Soplaviento", slug: "soplaviento", src: "/soplaviento.jpg" },
  { name: "Sede San Juan", slug: "san-juan", src: "/san-juan.jpg" },
  { name: "Sede Mompox", slug: "mompox", src: "/mompox.jpg" },
]

export function SedesPlanes() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const autoIndexRef = useRef(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)

  useEffect(() => {
    const t = setInterval(() => {
      if (isDragging.current || !scrollRef.current) return
      autoIndexRef.current = (autoIndexRef.current + 1) % sedes.length
      const card = cardRefs.current[autoIndexRef.current]
      const left = card ? card.offsetLeft : 0
      scrollRef.current.scrollTo({ left, behavior: "smooth" })
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
  const onMouseUp = () => { isDragging.current = false }

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
          <div
            ref={scrollRef}
            className="flex gap-3 sm:gap-4 overflow-x-auto snap-x snap-mandatory cursor-grab select-none pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseUp}
          >
            {sedes.map((sede, i) => (
              <div
                key={sede.slug}
                ref={el => { cardRefs.current[i] = el }}
                className="flex-shrink-0 snap-start w-48 sm:w-56 md:w-64"
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
        </div>
      </div>
    </section>
  )
}
