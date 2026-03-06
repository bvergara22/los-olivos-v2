import { PageBanner } from "@/components/los-olivos/page-banner"
import { SalasGallery } from "@/components/los-olivos/salas-gallery"
import { Button } from "@/components/ui/button"
import { ArrowRight, Flower2, Heart, Sparkles, Users } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Nuestro Homenaje al Amor - Los Olivos Cartagena",
  description: "En Olivos Cartagena, rendimos un protocolo de 4 etapas en la que prometemos brindarte un respaldo total en la transcendencia de tu ser querido.",
}

const etapas = [
  {
    number: 1,
    title: "Desprendimiento",
    icon: Heart,
    items: ["Cofre", "Tramites", "Traslado inicial y a nivel nacional"],
    color: "primary",
  },
  {
    number: 2,
    title: "Acogida",
    icon: Flower2,
    items: ["Carteles", "Flores", "Velacion en sala o en casa"],
    color: "primary",
  },
  {
    number: 3,
    title: "Despedida",
    icon: Users,
    items: [
      "Traslado terrestre o aereo",
      "Cremacion",
      "Inhumacion",
      "Traslado a campo santo",
      "Transporte para acompanantes",
    ],
    color: "primary",
  },
  {
    number: 4,
    title: "Renacimiento",
    icon: Sparkles,
    items: [
      "Taller de manejo del duelo",
      "Entrega de cenizas",
      "Misa de conmemoracion",
    ],
    color: "primary",
  },
]


const flores = [
  {
    name: "Arreglo Clasico",
    description: "Elaborado con pompones blancos, fullis blancos y amarrillos, rosas amarillas, solidago, yicsofilia, dracena.",
  },
  {
    name: "Arreglo Elegante",
    description: "Elaborado con Rosas Blancas, Ruscus, Helecho Cuero, Dracenas y yicsofilia.",
  },
  {
    name: "Arreglo Tradicional",
    description: "Elaborado en fullis amarrillos y blancos, claveles rojos, margaritas blancas, helecho cuero, aster blancos.",
  },
]

export default function HomenajePage() {
  return (
    <>
      <PageBanner
        title="Nuestro homenaje al amor"
        description="En Olivos Cartagena, rendimos un protocolo de 4 etapas en la que prometemos brindarte un respaldo total en la transcendencia de tu ser querido."
        titleClassName="text-[#240e36]"
      />

      {/* 4 Etapas */}
      <section className="py-16 md:py-20 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#3e2455]/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#240e36]/5 translate-x-1/2 translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapas.map((etapa) => (
              <div
                key={etapa.number}
                className="group relative p-6 rounded-2xl bg-background border border-border hover:border-[#3e2455]/35 transition-all hover:shadow-lg"
              >
                {/* Decorative number */}
                <span className="absolute top-4 right-4 text-6xl font-display text-[#240e36]/10">
                  {String(etapa.number).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-[#3e2455]/10 text-[#3e2455] flex items-center justify-center mb-4 transition-colors group-hover:bg-[#3e2455] group-hover:text-white">
                  <etapa.icon className="w-7 h-7" />
                </div>

                {/* Title */}
                <h3 className="font-display text-lg text-[#240e36] mb-3 relative z-10">
                  {etapa.title}
                </h3>

                {/* Items */}
                <ul className="space-y-2 relative z-10">
                  {etapa.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#3e2455] mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cotizar */}
      <section className="py-16 md:py-20 bg-[#3e2455]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl text-[#240e36] mb-4 text-balance">
              Coordina el homenaje de tu ser querido o haz tu cotizacion en un minuto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Consulta el valor de nuestro servicio de necesidad inmediata segun tus requerimientos y condiciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-[#3e2455] text-white hover:bg-[#240e36] px-8" asChild>
                <Link href="/cotizar">
                  Cotizar ahora
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8 hover:bg-[#3e2455]/10 hover:border-[#3e2455] hover:text-[#3e2455]" asChild>
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Salas de velacion */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-[#3e2455] block">Espacios de despedida</span>
            <h2 className="font-display text-xl md:text-2xl text-[#240e36] mt-2 text-balance">
              Nuestras salas de velacion
            </h2>
          </div>
          <div className="max-w-5xl mx-auto">
            <SalasGallery accent="#3e2455" />
          </div>
        </div>
      </section>

      {/* Flores */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-[#3e2455] block">Detalles florales</span>
            <h2 className="font-display text-xl md:text-2xl text-[#240e36] mt-2 text-balance">
              Flores
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {flores.map((flor) => (
              <div
                key={flor.name}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-[#3e2455]/40 hover:shadow-lg transition-all"
              >
                <div className="w-full aspect-square rounded-xl bg-muted mb-4 flex items-center justify-center">
                  <Flower2 className="w-10 h-10 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-lg text-[#240e36] mb-2">{flor.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{flor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
