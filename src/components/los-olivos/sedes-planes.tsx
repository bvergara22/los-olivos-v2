"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

const sedes = [
  { name: "Sede Cartagena", src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/images/sedes/cartagena.jpg" },
  { name: "Sede Turbaco", src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/images/sedes/turbaco.jpg" },
  { name: "Sede Arjona", src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/images/sedes/arjona.jpg" },
  { name: "Sede Magangue", src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/images/sedes/magangue.jpg" },
  { name: "Sede Maria la Baja", src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/images/sedes/maria.jpg" },
  { name: "Sede San Andres", src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/images/sedes/san-andres.jpg" },
  { name: "Sede Mahates", src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/images/sedes/mahates.jpg" },
  { name: "Sede Soplaviento", src: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/images/sedes/soplaviento.jpg" },
]

/**
 * Seccion de Sedes y Planes con carruseles automaticos
 * Similar al sitio web de Los Olivos Cartagena
 */
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
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary">Presencia regional</span>
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
                <div 
                  key={`${sede.name}-${index}`}
                  className="group relative overflow-hidden rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={sede.src || "/placeholder.svg"}
                      alt={sede.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                    <p className="text-card text-sm font-medium">{sede.name}</p>
                  </div>
                </div>
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
