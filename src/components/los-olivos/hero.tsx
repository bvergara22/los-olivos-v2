"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, Shield, Users } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

const carouselImages = [
  {
    src: "/promocional.png",
    alt: "Promocional Los Olivos",
    sizeClass: "w-[75%] max-h-[220px] sm:max-h-[280px] md:w-[85%] md:max-h-[450px] min-[1140px]:w-full min-[1140px]:max-h-[500px] h-auto object-contain",
  },
  {
    src: "/mesa-trabajo1-2.png",
    alt: "Mesa de Trabajo",
    sizeClass: "w-[75%] max-h-[220px] sm:max-h-[280px] md:w-[85%] md:max-h-[450px] min-[1140px]:w-full min-[1140px]:max-h-[500px] h-auto object-contain",
  },
  {
    src: "/Linea-de-atención.png",
    alt: "Linea de Atencion",
    sizeClass: "w-[75%] max-h-[220px] sm:max-h-[280px] md:w-[85%] md:max-h-[450px] min-[1140px]:w-full min-[1140px]:max-h-[500px] h-auto object-contain",
  },
]

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

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
      className="relative flex flex-col overflow-hidden min-[1140px]:min-h-[750px]"
    >
      <div className="absolute inset-0" style={{ background: "#d4eddc" }} />

      {/* Anillos decorativos — esquina superior derecha */}
      <div className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full border border-white/[0.07] pointer-events-none" />
      <div className="absolute -top-28 -right-28 w-[480px] h-[480px] rounded-full border border-white/[0.05] pointer-events-none" />
      <div className="absolute top-8 right-8 w-[280px] h-[280px] rounded-full border border-white/[0.04] pointer-events-none hidden min-[1140px]:block" />

      {/* Anillos decorativos — esquina inferior izquierda */}
      <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] rounded-full border border-white/[0.07] pointer-events-none" />
      <div className="absolute -bottom-28 -left-28 w-[400px] h-[400px] rounded-full border border-white/[0.05] pointer-events-none" />


      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-10 sm:py-12 md:py-16 min-[1140px]:py-20">
        <div className="flex flex-col min-[1140px]:grid min-[1140px]:grid-cols-2 gap-6 min-[1140px]:gap-12 items-center min-[1140px]:items-start">

          {/* Carrusel */}
          <div className="relative w-full order-1 min-[1140px]:order-2 min-[1140px]:self-stretch">
            <div className="relative w-full max-w-md mx-auto md:max-w-lg min-[1140px]:max-w-2xl min-[1140px]:h-full">
              <div className="relative min-h-[260px] sm:min-h-[340px] md:min-h-[470px] min-[1140px]:absolute min-[1140px]:inset-x-0 min-[1140px]:top-12 min-[1140px]:bottom-0 flex items-start justify-center">
                {carouselImages.map((image, index) => (
                  <div
                    key={image.alt}
                    className={`absolute inset-0 flex items-start justify-center transition-all duration-700 ${
                      index === currentImageIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      priority={index === 0}
                      className={image.sizeClass}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="order-2 min-[1140px]:order-1 text-left space-y-6 lg:space-y-8 min-[1140px]:pt-0">

            <span className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs lg:text-sm font-medium rounded-full">
              Más de 30 años protegiendo familias
            </span>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Trascendimos de la protección exequial, a la{" "}
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

      {/* Ola */}
      <div className="absolute -bottom-px left-0 right-0 z-20 text-background" aria-hidden>
        <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20" preserveAspectRatio="none">
          <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
        </svg>
      </div>
    </section>
  )
}
