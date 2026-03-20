import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Sede Mompox - Los Olivos Cartagena",
  description:
    "Planes de previsión exequial en Mompox. Protección integral para tu familia con Los Olivos.",
}

export default function MompoxPage() {
  return (
    <>
      {/* Hero Sede Mompox */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
                Sede Mompox
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Contar con un seguro de previsión integral es cuidar a los que más quieres y así brindarles una cobertura completa desde que inicias el servicio hasta que lo finalizas. Una protección integral te brindará tranquilidad en aquellos momentos difíciles.
                </p>
                <p>
                  Afiliándote podrás adquirir tu plan de previsión en cuotas mensuales muy cómodas y estar preparado ante cualquier eventualidad, convirtiendo este seguro en un sublime acto de amor.
                </p>
                <p className="font-display font-bold text-foreground text-lg">
                  ¡Es momento de demostrarle a tu familia cuánto la amas!
                </p>
              </div>
            </div>
            <div className="relative w-3/4 md:w-full max-w-lg mx-auto">
              <Image
                src="/mompox-vector.png"
                alt=""
                aria-hidden
                width={600}
                height={500}
                className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-60 drop-shadow-[0_0_40px_rgba(76,175,80,0.4)]"
              />
              <Image
                src="/mompox-vector.png"
                alt="Sede Mompox - Los Olivos"
                width={600}
                height={500}
                priority
                className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>

          {/* Video */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://player.vimeo.com/video/542868877?autoplay=0&title=0&byline=0&portrait=0"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Los Olivos - Sede Mompox"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
