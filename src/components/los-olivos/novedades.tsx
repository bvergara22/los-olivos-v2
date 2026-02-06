"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"

/**
 * Seccion de Novedades con carrusel automatico
 * Similar al sitio web de Los Olivos Cartagena
 */
export function Novedades() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Novedades - placeholder images para reemplazar
  const novedades = [
    { 
      title: "Nuevos beneficios para afiliados", 
      src: "/placeholder.svg?height=400&width=800&text=Novedad+1",
      description: "Descubre los nuevos beneficios exclusivos para nuestra familia Olivos"
    },
    { 
      title: "Jornada de salud gratuita", 
      src: "/placeholder.svg?height=400&width=800&text=Novedad+2",
      description: "Participa en nuestra jornada de salud para todos los afiliados"
    },
    { 
      title: "Sorteo especial de aniversario", 
      src: "/placeholder.svg?height=400&width=800&text=Novedad+3",
      description: "Celebramos nuestro aniversario con premios increibles"
    },
    { 
      title: "Golden Offers - Tarjeta Premium", 
      src: "/placeholder.svg?height=400&width=800&text=Novedad+4",
      description: "Conoce todos los beneficios de nuestra tarjeta premium"
    },
  ]

  // Auto-rotate every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % novedades.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [novedades.length])

  const next = () => setCurrentIndex((prev) => (prev + 1) % novedades.length)
  const prev = () => setCurrentIndex((prev) => (prev - 1 + novedades.length) % novedades.length)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary">Mantente informado</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Novedades
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Enterate de las ultimas noticias, eventos y promociones de Los Olivos Cartagena.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation buttons */}
          <button
            type="button"
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors -translate-x-1/2"
            aria-label="Novedad anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-card shadow-lg border border-border flex items-center justify-center hover:bg-muted transition-colors translate-x-1/2"
            aria-label="Siguiente novedad"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main carousel */}
          <div className="overflow-hidden rounded-2xl bg-card border border-border shadow-lg">
            <div className="relative aspect-[16/9]">
              {novedades.map((novedad, index) => (
                <div
                  key={novedad.title}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentIndex ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <img
                    src={novedad.src || "/placeholder.svg"}
                    alt={novedad.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with text */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent p-8">
                    <h3 className="text-card text-2xl font-display font-bold mb-2">{novedad.title}</h3>
                    <p className="text-card/80 text-sm max-w-xl">{novedad.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {novedades.map((_, index) => (
              <button
                key={`novedad-indicator-${index}`}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-primary/30 hover:bg-primary/50 w-2"
                }`}
                aria-label={`Ir a novedad ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
