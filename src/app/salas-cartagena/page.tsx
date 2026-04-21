import { SalasGallery } from "@/components/los-olivos/salas-gallery"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Salas en Cartagena - Los Olivos Cartagena",
  description: "Conoce nuestras salas funerarias en Cartagena: Sala Alcibia y Sala Cordialidad. Espacios dignos y acogedores para acompanar a las familias.",
}

export default function SalasCartagenaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-8 pb-12 md:pt-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6">
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
              Salas en Cartagena
            </h1>
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
              Contamos con dos sedes en Cartagena: Alcibia y Cordialidad. Espacios dignos y acogedores para acompanar a las familias en los momentos mas dificiles.
            </p>
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SalasGallery />
        </div>
      </section>
    </>
  )
}
