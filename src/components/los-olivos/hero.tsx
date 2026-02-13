"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Shield, Users } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"

<<<<<<< HEAD
const carouselImages = [
  {
    src: "/promocional.png",
    alt: "Promocional Los Olivos",
    edgeShadow: "drop-shadow-[0_0_40px_rgba(206,78,88,0.4)]",
  },
  {
    src: "/afíliate-ahora.png",
    alt: "Afiliate Ahora",
    edgeShadow: "drop-shadow-[0_0_40px_rgba(234,124,92,0.4)]",
  },
  {
    src: "/Linea-de-atención.png",
    alt: "Linea de Atencion",
    edgeShadow: "drop-shadow-[0_0_40px_rgba(189,89,122,0.4)]",
  },
=======
// Imagenes reales del repositorio
const carouselImages = [
  { src: "/promocional.png", alt: "Promocional Los Olivos" },
  { src: "/afíliate-ahora.png", alt: "Afiliate Ahora" },
  { src: "/Linea-de-atención.png", alt: "Linea de Atencion" },
>>>>>>> 4e3e1dd706bba76efce6d5f75053c9cc8910e32b
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
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 🔥 CAMBIO IMPORTANTE AQUÍ */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 items-center">

          {/* 📸 CARRUSEL - AHORA SIEMPRE VISIBLE */}
          <div className="relative w-full order-1 lg:order-2">
            <div className="relative w-full max-w-2xl mx-auto">
              <div className="relative min-h-[320px] lg:min-h-[420px] flex items-center justify-center">
                {carouselImages.map((image, index) => (
                  <div
                    key={image.alt}
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                      index === currentImageIndex
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt=""
                      aria-hidden
                      width={1200}
                      height={900}
                      className={`absolute w-full h-auto object-contain max-h-[450px] lg:max-h-[520px] scale-[1.03] blur-2xl opacity-70 ${image.edgeShadow}`}
                    />

                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1200}
                      height={900}
                      priority={index === 0}
                      className="relative w-full h-auto object-contain max-h-[420px] lg:max-h-[500px] drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                    />
                  </div>
                ))}
              </div>

              {/* Indicators */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? "bg-primary w-7"
                        : "bg-primary/40 hover:bg-primary/60 w-2"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 📝 CONTENIDO */}
          <div className="space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                Mas de 30 años protegiendo familias
              </span>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Transcendimos de la proteccion exequial, a la{" "}
                <span className="text-primary">
                  proteccion familiar integral
                </span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                En Los Olivos Cartagena brindamos un verdadero homenaje al amor,
                acompanando a las familias con servicios integrales de calidad.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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

            <div className="flex flex-wrap gap-6 pt-4 justify-center lg:justify-start">
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
