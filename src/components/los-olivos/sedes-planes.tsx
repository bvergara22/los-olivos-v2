"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

const sedes = [
  { name: "Sede Cartagena", slug: "cartagena", src: "/cartagena.jpg" },
  { name: "Sede Turbaco", slug: "turbaco", src: "/turbaco.jpg" },
  { name: "Sede Arjona", slug: "arjona", src: "/arjona.jpg" },
  { name: "Sede Magangue", slug: "magangue", src: "/magangue.jpg" },
  { name: "Sede Maria la Baja", slug: "maria-la-baja", src: "/maria.jpg" },
  { name: "Sede San Andres", slug: "san-andres", src: "/san-andres.jpg" },
  { name: "Sede Mahates", slug: "mahates", src: "/mahates.jpg" },
  { name: "Sede Soplaviento", slug: "soplaviento", src: "/soplaviento.jpg" },
]

export function SedesPlanes() {
  const [currentSedeIndex, setCurrentSedeIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-rotate sedes every 3 seconds
  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setCurrentSedeIndex((prev) => (prev + 1) % sedes.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [mounted])

  const nextSede = () => setCurrentSedeIndex((prev) => (prev + 1) % sedes.length)
  const prevSede = () => setCurrentSedeIndex((prev) => (prev - 1 + sedes.length) % sedes.length)

  // Mostrar 4 sedes a la vez en desktop
  const visibleSedes = []
  for (let i = 0; i < 4; i++) {
    visibleSedes.push(sedes[(currentSedeIndex + i) % sedes.length])
  }

  return (
    <section id="sedes-planes" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary">Presencia municipal</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Nuestras sedes y planes!
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Contamos con presencia en toda la region para estar siempre cerca de ti y tu familia.
          </p>
        </div>

        {/* Sedes Carousel */}
        <div className="mb-16">
          
          <div className="relative">
            {/* Navigation buttons */}
            <button
              type="button"
              onClick={prevSede}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Sede anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={nextSede}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors"
              aria-label="Siguiente sede"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Sedes grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-12">
              {visibleSedes.map((sede, index) => (
                <Link
                  key={`${sede.slug}-${index}`}
                  href={`/planes/${sede.slug}`}
                  className="group overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all hover:shadow-lg block"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={sede.src || "/placeholder.svg"}
                      alt={sede.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {sedes.map((_, index) => (
                <button
                  key={`sede-indicator-${index}`}
                  type="button"
                  onClick={() => setCurrentSedeIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSedeIndex 
                      ? "bg-primary w-6" 
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Ir a sede ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          
        </div>
      </div>
    </section>
  )
}
