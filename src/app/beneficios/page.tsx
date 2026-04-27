import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Suspense } from "react"
import { BeneficiosTabs } from "./BeneficiosTabs"

export const metadata: Metadata = {
  title: "Beneficios de Planes Exequiales - Los Olivos Cartagena",
  description:
    "Conoce todos los beneficios exclusivos de nuestros planes exequiales: asistencias premium 24/7, paquetes de seguros y asistencia para mascotas.",
}

export default function BeneficiosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-8 pb-8 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vida-main/10 via-background to-vida-dark/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            {/* Texto */}
            <div className="text-center lg:text-left">
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-vida-dark leading-tight text-balance">
                Beneficios de nuestros planes exequiales
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mt-3 md:mt-6 leading-relaxed max-w-md mx-auto lg:mx-0">
                Descubre todos los beneficios exclusivos que obtienen nuestros afiliados. Asistencias premium 24/7, paquetes de seguros y mucho más para ti y tu familia.
              </p>
            </div>
            {/* Imagen */}
            <div className="relative w-3/4 lg:w-full max-w-lg mx-auto">
              <Image
                src="/beneficios-family.png"
                alt="Beneficios"
                width={500}
                height={380}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
        {/* Wave separator */}
        <div className="absolute -bottom-px left-0 right-0 z-20 text-card" aria-hidden>
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
          </svg>
        </div>
      </section>

      {/* Tabs interactivos */}
      <Suspense fallback={null}>
        <BeneficiosTabs />
      </Suspense>

      {/* CTA Final */}
      <section className="py-12 md:py-20 bg-vida-main/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-4 text-balance">
              Accede a todos estos beneficios hoy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Nuestros asesores están listos para ayudarte a elegir el plan perfecto para ti, tu familia y tus mascotas.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" className="gap-2 bg-vida-dark text-white hover:bg-vida-dark/90 px-8" asChild>
                <Link href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea">
                  ¡Afiliarme ahora!
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8 hover:bg-vida-dark/10 hover:border-vida-dark hover:text-vida-dark" asChild>
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
