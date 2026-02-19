import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Heart, Shield, Users, MapPin, MessageCircle, Phone, Plane, Globe, Anchor } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes San Andres - Los Olivos Cartagena",
  description: "Planes de prevision exequial en San Andres Islas. Proteccion integral con cobertura de repatriacion y traslado aereo.",
}

const planes = [
  {
    title: "Plan 6+1",
    price: "Consultanos",
    description: "Plan familiar para hasta 7 afiliados con cobertura completa.",
    features: [
      "Hasta 7 afiliados (titular + 6 familiares)",
      "Cobertura exequial completa",
      "Traslado aereo al continente incluido",
      "Asistencia 24/7",
      "Asistencia psicologica Mens Sana",
    ],
    popular: true,
  },
  {
    title: "Plan 9+1",
    price: "Consultanos",
    description: "Plan extendido para familias grandes con hasta 10 afiliados.",
    features: [
      "Hasta 10 afiliados (titular + 9 familiares)",
      "Cobertura exequial completa",
      "Traslado aereo al continente incluido",
      "Ideal para familias numerosas",
      "Tarjeta de beneficios Olivos",
      "Asistencia psicologica Mens Sana",
    ],
    popular: false,
  },
]

const ventajasIsla = [
  { icon: Plane, title: "Traslado Aereo", description: "Cobertura de repatriacion y transporte aereo al continente colombiano." },
  { icon: Globe, title: "Cobertura Nacional", description: "Tu plan te protege en cualquier lugar del territorio colombiano, no solo en la isla." },
  { icon: Anchor, title: "Presencia Local", description: "Sede propia en San Andres con atencion personalizada para la comunidad isleña." },
  { icon: Shield, title: "Sin Fronteras", description: "Asistencia virtual 365 dias. Linea nacional gratuita 018000-180-150 desde cualquier lugar." },
]

const serviciosIncluidos = [
  "Protocolo funerario completo de 4 etapas",
  "Traslado aereo al continente",
  "Asistencia domiciliaria gratuita (#789)",
  "Tarjeta de beneficios con descuentos",
  "Asistencia psicologica Mens Sana",
  "Video conmemorativo de recordacion",
  "Asesor virtual 24/7 por WhatsApp",
  "Club de afiliados con sorteos bimestrales",
]

export default function SanAndresPage() {
  return (
    <>
      <PageBanner
        title="Planes en San Andres Islas"
        description="Proteccion integral en el paraiso. Cobertura con traslado aereo al continente y atencion personalizada en la isla."
      />

      {/* Video + Info */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe src="https://player.vimeo.com/video/542868877?autoplay=0&title=0&byline=0&portrait=0" className="w-full h-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Los Olivos San Andres" />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-primary">Sede San Andres Islas</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Proteccion en el paraiso</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Sede San Andres</p>
                    <p className="text-sm text-muted-foreground">Barrio Juan XXIII, San Andres Islas</p>
                    <p className="text-xs text-muted-foreground mt-1">Cel: 310 6171987</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">WhatsApp / Linea Nacional</p>
                    <p className="text-sm text-muted-foreground">+57 323 309 3435 | 018000-180-150</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="https://wa.me/573106171987?text=Hola, quiero información sobre planes en San Andrés" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" /> Contactar sede San Andres
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas en la isla */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Ventajas insulares</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Proteccion pensada para la isla</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {ventajasIsla.map((v) => (
              <div key={v.title} className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><v.icon className="w-6 h-6" /></div>
                <h3 className="font-display font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Elige tu plan</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Planes disponibles en San Andres</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {planes.map((plan) => (
              <Card key={plan.title} className={`relative ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}>
                {plan.popular && (<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">Recomendado</div>)}
                <CardHeader>
                  <CardTitle className="font-display text-2xl">{plan.title}</CardTitle>
                  <p className="text-primary font-bold text-lg mt-1">{plan.price}</p>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f) => (<li key={f} className="flex items-start gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{f}</span></li>))}
                  </ul>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
                    <a href={`https://wa.me/573106171987?text=Hola, me interesa el ${plan.title} en San Andrés`} target="_blank" rel="noopener noreferrer">Afiliarme ahora <ArrowRight className="w-4 h-4" /></a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios incluidos */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary">Todo incluido</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Servicios en tu plan</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {serviciosIncluidos.map((s) => (
                <div key={s} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Protege a tu familia en San Andres</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Visitanos en el Barrio Juan XXIII o contactanos por WhatsApp.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild><Link href="/cotizar">Cotizar mi plan <ArrowRight className="w-5 h-5" /></Link></Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild><a href="https://wa.me/573106171987" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" /> WhatsApp</a></Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild><a href="tel:3106171987"><Phone className="w-5 h-5" /> Llamar</a></Button>
            </div>
            <div className="mt-8"><Button variant="link" className="text-primary gap-2" asChild><Link href="/planes">Ver todas las sedes <ArrowRight className="w-4 h-4" /></Link></Button></div>
          </div>
        </div>
      </section>
    </>
  )
}
