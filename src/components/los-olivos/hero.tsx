"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, Users } from "lucide-react"
import { useEffect, useState } from "react"

// Imagenes reales del repositorio
const carouselImages = [
  { src: "/promocional.png", alt: "Promocional Los Olivos" },
  { src: "/afíliate-ahora.png", alt: "Afiliate Ahora" },
  { src: "/Linea-de-atención.png", alt: "Linea de Atencion" },
]

/**
 * Hero con carrusel de imagenes automatico en el circulo
 * Botones: Portal y Golden Offers
 */
export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [mounted])

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Mas de 30 años protegiendo familias
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Transcendimos de la proteccion exequial, a la{" "}
                <span className="text-primary">proteccion familiar integral</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                En Los Olivos Cartagena brindamos un verdadero homenaje al amor, 
                acompanando a las familias con servicios integrales de calidad.
              </p>
            </div>

            {/* CTA Button - Contactanos ahora */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                asChild
                className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6"
              >
                <a href="#contacto">
                  Contactanos ahora 
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-5 h-5 text-primary" />
                <span>Cobertura Nacional</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-5 h-5 text-primary" />
                <span>Atencion 24/7</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Users className="w-5 h-5 text-primary" />
                <span>+50,000 Familias</span>
              </div>
            </div>
          </div>

          {/* Visual Element - Carrusel de imagenes con forma natural */}
          <div className="relative hidden lg:block">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Image Carousel - muestra las imagenes en su forma original */}
              <div className="relative min-h-[400px] flex items-center justify-center">
                {carouselImages.map((image, index) => (
                  <div
                    key={image.alt}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
                      index === currentImageIndex ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      className="w-full h-auto object-contain max-h-[500px] drop-shadow-2xl"
                    />
                  </div>
                ))}
              </div>

              {/* Carousel indicators */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={`indicator-${index}`}
                    type="button"
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-primary w-6"
                        : "bg-primary/40 hover:bg-primary/60"
                    }`}
                    aria-label={`Ir a imagen ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
