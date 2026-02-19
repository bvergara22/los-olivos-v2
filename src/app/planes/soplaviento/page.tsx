import { PageBanner } from "@/components/los-olivos/page-banner"
import { VerSedesButton } from "@/components/los-olivos/ver-sedes-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Heart, Shield, Users, MapPin, MessageCircle, Phone, ShoppingBasket, Stethoscope } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes Soplaviento - Los Olivos Cartagena",
  description: "Planes de prevision exequial en Soplaviento. Plan Basico e Integral con cobertura completa y atencion 24/7.",
}

const planes = [
  {
    title: "Plan Basico Sin Boveda",
    price: "Desde $14.000/mes",
    description: "Proteccion exequial esencial con cobertura nacional y atencion permanente.",
    features: [
      "Titular con ingreso hasta 65 anos",
      "Sin limite de edad para permanencia",
      "Protocolo funerario completo (4 etapas)",
      "Atencion 24 horas, 365 dias",
      "Cobertura nacional",
      "Club de afiliados",
    ],
    popular: false,
  },
  {
    title: "Plan Integral Con Sinergia",
    price: "Desde $25.000/mes",
    description: "Maxima proteccion con boveda perpetua, asistencias en vida y seguros Sinergia.",
    features: [
      "Todo lo del Plan Basico",
      "Boveda a perpetuidad incluida",
      "Asistencia en vida con domicilios gratuitos",
      "Tarjeta de beneficios Olivos",
      "Seguro de alimentacion por 1 ano",
      "Renta diaria por hospitalizacion y UCI",
      "Indemnizacion por muerte accidental",
      "Asistencia psicologica Mens Sana",
    ],
    popular: true,
  },
]

const comparativa = [
  { caracteristica: "Cobertura exequial", basico: true, integral: true },
  { caracteristica: "Atencion 24/7 nacional", basico: true, integral: true },
  { caracteristica: "Club de afiliados", basico: true, integral: true },
  { caracteristica: "Boveda a perpetuidad", basico: false, integral: true },
  { caracteristica: "Asistencia en vida (domicilios)", basico: false, integral: true },
  { caracteristica: "Tarjeta de beneficios", basico: false, integral: true },
  { caracteristica: "Seguro de alimentacion", basico: false, integral: true },
  { caracteristica: "Renta por hospitalizacion", basico: false, integral: true },
  { caracteristica: "Indemnizacion por accidente", basico: false, integral: true },
  { caracteristica: "Asistencia psicologica", basico: false, integral: true },
]

export default function SoplavientoPage() {
  return (
    <>
      <PageBanner
        title="Planes en Soplaviento"
        description="Proteccion exequial profesional y cercana para la comunidad de Soplaviento. Dos opciones de planes adaptados a tu presupuesto."
      />

      {/* Video + Info */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe src="https://player.vimeo.com/video/542868877?autoplay=0&title=0&byline=0&portrait=0" className="w-full h-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Los Olivos Soplaviento" />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-primary">Sede Soplaviento</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Siempre cerca de ti</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Sede Soplaviento</p>
                    <p className="text-sm text-muted-foreground">Cll Romandele # 5A-11, Soplaviento</p>
                    <p className="text-xs text-muted-foreground mt-1">Cel: 315 7006853</p>
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
                <a href="https://wa.me/573157006853?text=Hola, quiero información sobre planes en Soplaviento" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" /> Contactar sede Soplaviento
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Elige tu plan</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">2 planes disponibles en Soplaviento</h2>
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
                    <a href={`https://wa.me/573157006853?text=Hola, me interesa el ${plan.title} en Soplaviento`} target="_blank" rel="noopener noreferrer">Afiliarme ahora <ArrowRight className="w-4 h-4" /></a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabla comparativa */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Comparativa</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Compara los planes</h2>
          </div>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 rounded-tl-xl font-display font-bold">Caracteristica</th>
                  <th className="text-center p-4 font-display font-bold">Basico</th>
                  <th className="text-center p-4 rounded-tr-xl font-display font-bold">Integral</th>
                </tr>
              </thead>
              <tbody>
                {comparativa.map((row) => (
                  <tr key={row.caracteristica} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="p-4 text-sm text-foreground">{row.caracteristica}</td>
                    <td className="p-4 text-center">{row.basico ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}</td>
                    <td className="p-4 text-center">{row.integral ? <Check className="w-5 h-5 text-primary mx-auto" /> : <span className="text-muted-foreground">—</span>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Protege a tu familia en Soplaviento</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Visitanos en la Cll Romandele # 5A-11 o contactanos.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild><Link href="/cotizar">Cotizar mi plan <ArrowRight className="w-5 h-5" /></Link></Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild><a href="https://wa.me/573157006853" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" /> WhatsApp</a></Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild><a href="tel:3157006853"><Phone className="w-5 h-5" /> Llamar</a></Button>
            </div>
            <div className="mt-8"><VerSedesButton /></div>
          </div>
        </div>
      </section>
    </>
  )
}
