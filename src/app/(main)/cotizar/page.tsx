import Image from 'next/image'
import { Toaster } from 'sonner'
import Cotizador from '@/components/los-olivos/cotizador'

export default function CotizarPage() {
  return (
    <>
      <Toaster position="top-right" richColors />

      {/* Hero */}
      <section className="relative pt-8 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cotizar-main/10 via-background to-cotizar-dark/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cotizar-dark leading-tight text-balance">
                Estamos para acompañarte cuando más lo necesitas
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-4 md:mt-6 leading-relaxed">
                Coordina el homenaje de tu ser querido con el respeto y la calidez que merece. Selecciona el servicio y descarga tu cotización en segundos.
              </p>
            </div>
            <div className="relative w-3/4 lg:w-full max-w-lg mx-auto">
              <Image
                src="/Duelo-imagen.png"
                alt="Homenaje al amor"
                width={500}
                height={380}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-px left-0 right-0 z-20 text-card" aria-hidden>
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
          </svg>
        </div>
      </section>

      {/* Cotizador */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-cotizar-dark">
              Conoce nuestros servicios
            </h2>
            <p className="text-sm text-muted-foreground mt-2">
              Elige la opción que mejor responda a este momento y descarga tu cotización al instante.
            </p>
          </div>
          <Cotizador />
          <p className="text-center text-xs text-muted-foreground mt-6">
            ¿Necesitas orientación?{' '}
            <a href="https://wa.me/573106171987" target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2" style={{ color: '#477a7b' }}>
              Contactar asesor →
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
