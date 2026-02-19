import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Heart, Shield, Users, MapPin, Phone, MessageCircle, ShoppingBasket, Stethoscope, Building2 } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes Magangue - Los Olivos Cartagena",
  description: "Planes de prevision exequial en Magangue. 3 opciones de planes con cobertura integral. Atencion cercana y profesional.",
}

const planes = [
  {
    title: "Plan Basico Poblacional 6+1",
    price: "Desde $14.000/mes",
    description: "Cobertura exequial esencial para hasta 7 miembros de tu familia.",
    features: [
      "Hasta 7 afiliados (titular + 6 familiares)",
      "Titular con ingreso hasta 65 anos",
      "Cobertura exequial completa con nicho",
      "Atencion 24 horas, 365 dias",
      "Cobertura nacional",
    ],
    popular: false,
  },
  {
    title: "Plan Integral Sin Sinergia 6+1",
    price: "Desde $18.000/mes",
    description: "Plan completo con asistencias en vida, boveda y apoyo psicologico.",
    features: [
      "Todo lo del Plan Basico",
      "Boveda a perpetuidad incluida",
      "Asistencia en vida con domicilios gratuitos",
      "Tarjeta de beneficios Olivos",
      "Asistencia psicologica Mens Sana",
    ],
    popular: false,
  },
  {
    title: "Plan Integral Con Sinergia 6+1",
    price: "Desde $25.000/mes",
    description: "Maxima proteccion con seguros adicionales Sinergia para toda la familia.",
    features: [
      "Todo lo del Plan Integral",
      "Seguro de alimentacion por 1 ano",
      "Renta diaria por hospitalizacion y UCI",
      "Indemnizacion por muerte accidental",
      "Cobertura por incapacidad permanente",
      "Asistencia medica permanente",
    ],
    popular: true,
  },
]

const asistencias = [
  { icon: Shield, title: "Asistencia Exequial", description: "Protocolo completo de 4 etapas: desprendimiento, acogida, despedida y renacimiento. Nicho a perpetuidad." },
  { icon: Heart, title: "Asistencia en Vida", description: "Servicio domiciliario gratuito, tarjeta de beneficios con descuentos y asistencia al hogar llamando al #789." },
  { icon: Users, title: "Asistencia Psicologica", description: "Mens Sana: centro de ayuda psicologica personalizada para el manejo del duelo y bienestar emocional." },
]

const segurosAdicionales = [
  { icon: ShoppingBasket, title: "Seguro de Alimentacion", desc: "Canasta familiar asegurada por 1 ano si fallece el titular." },
  { icon: Stethoscope, title: "Renta por Hospitalizacion", desc: "Renta diaria por hospitalizacion e ingreso a unidad de cuidados intensivos." },
  { icon: Shield, title: "Muerte Accidental", desc: "Indemnizacion que cubre a todo el grupo familiar ante accidentes." },
  { icon: Heart, title: "Incapacidad Permanente", desc: "Proteccion economica ante incapacidad total y permanente del titular." },
]

export default function MaganguePage() {
  return (
    <>
      <PageBanner
        title="Planes en Magangue"
        description="Atencion cercana y profesional para las familias de Magangue. 3 opciones de planes con cobertura integral."
      />

      {/* Video + Info */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe src="https://player.vimeo.com/video/542868877?autoplay=0&title=0&byline=0&portrait=0" className="w-full h-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Los Olivos Magangue" />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-primary">Sede Magangue</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Proteccion en el sur de Bolivar</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Sede Funeraria Magangue</p>
                    <p className="text-sm text-muted-foreground">Cll 16 # 10-170, Magangue</p>
                    <p className="text-xs text-muted-foreground mt-1">Tel: 605 6876481 | Cel: 310 6607664</p>
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
                <a href="https://wa.me/573106607664?text=Hola, quiero información sobre planes en Magangué" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" /> Contactar sede Magangue
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Asistencias */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">3 asistencias incluidas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Proteccion integral para tu familia</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {asistencias.map((a) => (
              <div key={a.title} className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <a.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">3 planes disponibles en Magangue</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {planes.map((plan) => (
              <Card key={plan.title} className={`relative ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}>
                {plan.popular && (<div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">Recomendado</div>)}
                <CardHeader>
                  <CardTitle className="font-display text-xl">{plan.title}</CardTitle>
                  <p className="text-primary font-bold text-lg mt-1">{plan.price}</p>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f) => (<li key={f} className="flex items-start gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{f}</span></li>))}
                  </ul>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
                    <a href={`https://wa.me/573106607664?text=Hola, me interesa el ${plan.title} en Magangué`} target="_blank" rel="noopener noreferrer">Afiliarme ahora <ArrowRight className="w-4 h-4" /></a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Seguros Sinergia */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Beneficios Sinergia</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Seguros adicionales incluidos</h2>
            <p className="text-muted-foreground mt-4">Disponibles en el Plan Integral Con Sinergia sin costo adicional.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {segurosAdicionales.map((s) => (
              <div key={s.title} className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><s.icon className="w-6 h-6" /></div>
                <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Protege a tu familia en Magangue</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">Visitanos en la Cll 16 # 10-170 o contactanos para asesoria personalizada.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild><Link href="/cotizar">Cotizar mi plan <ArrowRight className="w-5 h-5" /></Link></Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild><a href="https://wa.me/573106607664" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" /> WhatsApp</a></Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild><a href="tel:6056876481"><Phone className="w-5 h-5" /> Llamar</a></Button>
            </div>
            <div className="mt-8"><Button variant="link" className="text-primary gap-2" asChild><Link href="/planes">Ver todas las sedes <ArrowRight className="w-4 h-4" /></Link></Button></div>
          </div>
        </div>
      </section>
    </>
  )
}
