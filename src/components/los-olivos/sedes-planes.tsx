"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useCallback, useEffect, useRef, useState } from "react"

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
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(4)
  const containerRef = useRef<HTMLDivElement>(null)
  const [itemWidth, setItemWidth] = useState(0)

  const maxIndex = sedes.length - visibleCount

  // Measure container to get pixel-accurate item width
  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        setItemWidth(containerRef.current.offsetWidth / visibleCount)
      }
    }
    const updateCount = () => {
      const count = window.innerWidth < 768 ? 1 : 4
      setVisibleCount(count)
    }
    updateCount()
    measure()
    window.addEventListener("resize", () => { updateCount(); measure() })
    return () => window.removeEventListener("resize", () => { updateCount(); measure() })
  }, [visibleCount])

  // Re-measure when visibleCount changes
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

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(next, 3000)
    return () => clearInterval(interval)
  }, [next])

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

        {/* Carousel */}
        <div className="mb-16">
          <div className="relative">
            {/* Arrows — solo en sm+ */}
            <button
              type="button"
              onClick={prev}
              className="flex absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border items-center justify-center hover:bg-muted transition-colors"
              aria-label="Sede anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="flex absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border items-center justify-center hover:bg-muted transition-colors"
              aria-label="Siguiente sede"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Track */}
            <div ref={containerRef} className="overflow-hidden sm:px-12">
              <div
                className="flex transition-transform duration-500 ease-in-out gap-0 sm:gap-4"
                style={{
                  transform: `translateX(calc(-${current} * (${itemWidth}px)))`,
                }}
              >
                {sedes.map((sede) => (
                  <Link
                    key={sede.slug}
                    href={`/planes/${sede.slug}`}
                    className="group flex-shrink-0 overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg block"
                    style={{ width: itemWidth > 0 ? `${itemWidth - (visibleCount > 1 ? 16 : 0)}px` : `calc(${100 / visibleCount}%)` }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={sede.src}
                        alt={sede.name}
                        loading="lazy"
                        className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
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
      </div>
    </section>
  )
}
