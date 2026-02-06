import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import { ArrowRight, Flame, Flower2, Heart, Sparkles, Users } from "lucide-react"
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

const salas = [
  {
    name: "Sala Cordialidad 1",
    description: "Amplio espacio para ceremonias intimas y familiares con capacidad para 80 personas.",
  },
  {
    name: "Sala Cordialidad 2",
    description: "Sala equipada con aire acondicionado y sistema de sonido para ceremonias especiales.",
  },
  {
    name: "Sala Alcibia",
    description: "Espacio moderno y confortable para rendir el mejor homenaje a tu ser querido.",
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
        icon={Heart}
      />

      {/* 4 Etapas */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etapas.map((etapa) => (
              <div
                key={etapa.number}
                className="group relative bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                {/* Number badge */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold font-display flex-shrink-0">
                    {etapa.number}
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground">
                    {etapa.title}
                  </h3>
                </div>
                
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <etapa.icon className="w-5 h-5" />
                </div>

                <ul className="space-y-2">
                  {etapa.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
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
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Flame className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Coordina el homenaje de tu ser querido o haz tu cotizacion en un minuto
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Consulta el valor de nuestro servicio de necesidad inmediata segun tus requerimientos y condiciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <Link href="/cotizar">
                  Cotizar ahora
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
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
            <span className="text-sm font-medium text-primary">Espacios de despedida</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Nuestras salas de velacion
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {salas.map((sala) => (
              <div
                key={sala.name}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-full aspect-video rounded-xl bg-muted mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-muted-foreground/40" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{sala.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{sala.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flores */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Detalles florales</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Flores
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {flores.map((flor) => (
              <div
                key={flor.name}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-full aspect-square rounded-xl bg-muted mb-4 flex items-center justify-center">
                  <Flower2 className="w-10 h-10 text-muted-foreground/40" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{flor.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{flor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
