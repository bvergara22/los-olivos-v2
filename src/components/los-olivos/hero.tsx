"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, Users } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const carouselImages = [
  {
    src: "/promocional.png",
    alt: "Promocional Los Olivos",
    edgeShadow: "drop-shadow-[0_0_40px_rgba(206,78,88,0.4)]",
    sizeClass: "w-[75%] max-h-[220px] sm:max-h-[280px] lg:w-full lg:max-h-[500px] h-auto object-contain",
  },
  {
    src: "/mesa-trabajo1-2.png",
    alt: "Mesa de Trabajo",
    edgeShadow: "drop-shadow-[0_0_40px_rgba(234,124,92,0.4)]",
    sizeClass: "w-[75%] max-h-[220px] sm:max-h-[280px] lg:w-full lg:max-h-[500px] h-auto object-contain",
  },
  {
    src: "/Linea-de-atención.png",
    alt: "Linea de Atencion",
    edgeShadow: "drop-shadow-[0_0_40px_rgba(189,89,122,0.4)]",
    sizeClass: "w-[75%] max-h-[220px] sm:max-h-[280px] lg:w-full lg:max-h-[500px] h-auto object-contain",
  },
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [mounted])

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-8 lg:py-0">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">

          {/* Carrusel */}
          <div className="relative w-full order-1 lg:order-2">
            <div className="relative w-full max-w-md mx-auto lg:max-w-2xl">
              <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[650px] flex items-center justify-center">
                {carouselImages.map((image, index) => (
                  <div
                    key={image.alt}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                      index === currentImageIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    {mounted && (
                      <Image
                        src={image.src}
                        alt=""
                        aria-hidden
                        width={1200}
                        height={900}
                        className={`absolute scale-[1.08] opacity-50 ${image.sizeClass}`}
                        style={{ filter: "blur(32px) saturate(1.8) hue-rotate(10deg)" }}
                      />
                    )}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      priority={index === 0}
                      className={`relative drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)] ${image.sizeClass}`}
                    />
                  </div>
                ))}
              </div>

              {/* Indicators */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 hidden lg:flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-primary w-6"
                        : "bg-primary/40 hover:bg-primary/60 w-1.5"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="order-2 lg:order-1 text-left space-y-6 lg:space-y-8">

            <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs lg:text-sm font-medium rounded-full">
              Más de 30 años protegiendo familias
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Transcendimos de la protección exequial, a la{" "}
              <span className="text-primary">protección familiar integral</span>
            </h1>

            <p className="text-sm lg:text-lg text-muted-foreground leading-relaxed max-w-xl">
              En Los Olivos Cartagena brindamos un verdadero homenaje al amor,
              acompañando a las familias con servicios integrales de calidad.
            </p>

            <Button
              size="default"
              asChild
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 lg:text-base lg:px-8"
            >
              <a href="#contacto">
                Contáctanos ahora
                <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5" />
              </a>
            </Button>

            <div className="flex items-center gap-6 lg:gap-8 pt-2 border-t border-border">
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-primary shrink-0" />
                <span className="text-xs lg:text-sm text-muted-foreground">Cobertura Nacional</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 lg:w-5 lg:h-5 text-primary shrink-0" />
                <span className="text-xs lg:text-sm text-muted-foreground">Atención 24/7</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 lg:w-5 lg:h-5 text-primary shrink-0" />
                <span className="text-xs lg:text-sm text-muted-foreground">+50,000 Familias</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
