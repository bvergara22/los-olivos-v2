import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Heart, Shield, Users, MapPin, MessageCircle, Phone, Home, Brain, Flower2 } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes Maria la Baja - Los Olivos Cartagena",
  description: "Plan de prevision exequial en Maria la Baja. Proteccion accesible y cercana para tu familia.",
}

const beneficiosIncluidos = [
  "Protocolo funerario completo (4 etapas)",
  "Atencion las 24 horas, los 365 dias",
  "Cobertura nacional en todo el territorio colombiano",
  "Asistencia psicologica Mens Sana",
  "Club de afiliados con descuentos exclusivos",
  "Asesor virtual disponible por WhatsApp, telefono y redes",
  "Video conmemorativo de recordacion",
  "Asistencia para mascotas disponible",
]

const etapasHomenaje = [
  { icon: Heart, title: "Desprendimiento", description: "Protocolo de recogida y traslado con respeto y dignidad." },
  { icon: Home, title: "Acogida", description: "Sala de velacion equipada para recibir a familiares y amigos." },
  { icon: Flower2, title: "Despedida", description: "Ceremonia de homenaje personalizada para honrar la memoria." },
  { icon: Brain, title: "Renacimiento", description: "Acompanamiento psicologico y apoyo en el proceso de duelo." },
]

export default function MariaLaBajaPage() {
  return (
    <>
      <PageBanner
        title="Planes en Maria la Baja"
        description="Proteccion exequial accesible y cercana para las familias de Maria la Baja y sus alrededores."
      />

      {/* Video + Info */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe src="https://player.vimeo.com/video/542868877?autoplay=0&title=0&byline=0&portrait=0" className="w-full h-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Los Olivos Maria la Baja" />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-primary">Sede Maria la Baja</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Cercanos a tu comunidad</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Sede Maria la Baja</p>
                    <p className="text-sm text-muted-foreground">Calle del Puerto # 41-11, Maria la Baja</p>
                    <p className="text-xs text-muted-foreground mt-1">Cel: 300 8131803</p>
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
                <a href="https://wa.me/573008131803?text=Hola, quiero información sobre planes en María la Baja" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" /> Contactar sede
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Plan disponible */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Nuestro plan</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Plan Basico Sin Boveda</h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">Proteccion exequial accesible con cobertura completa y atencion 24/7.</p>
          </div>
          <div className="max-w-lg mx-auto">
            <Card className="border-primary shadow-lg ring-2 ring-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="font-display text-2xl">Plan Basico Sin Boveda</CardTitle>
                <p className="text-primary font-bold text-2xl mt-2">Desde $14.000/mes</p>
                <p className="text-muted-foreground text-sm mt-2">Proteccion exequial completa para tu familia. Cuotas mensuales, trimestrales, semestrales o anuales.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {["Titular con ingreso hasta 65 anos", "Sin limite de edad para permanencia", "Cobertura exequial completa", "Protocolo funerario de 4 etapas", "Atencion 24/7, cobertura nacional", "Club de afiliados y tarjeta de beneficios", "Asistencia psicologica Mens Sana"].map((f) => (
                    <li key={f} className="flex items-start gap-3"><Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-muted-foreground">{f}</span></li>
                  ))}
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2" size="lg" asChild>
                  <a href="https://wa.me/573008131803?text=Hola, me interesa el Plan Basico en María la Baja" target="_blank" rel="noopener noreferrer">Afiliarme ahora <ArrowRight className="w-5 h-5" /></a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4 Etapas del Homenaje */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Nuestro protocolo</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Las 4 etapas del homenaje</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {etapasHomenaje.map((etapa, i) => (
              <div key={etapa.title} className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-lg font-bold">{i + 1}</div>
                <etapa.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-foreground mb-2">{etapa.title}</h3>
                <p className="text-sm text-muted-foreground">{etapa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios incluidos */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary">Todo incluido</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Beneficios de tu plan</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {beneficiosIncluidos.map((b) => (
                <div key={b} className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span className="text-sm text-foreground">{b}</span>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Protege a tu familia en Maria la Baja</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Visitanos en la Calle del Puerto # 41-11 o contactanos.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild><Link href="/cotizar">Cotizar mi plan <ArrowRight className="w-5 h-5" /></Link></Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild><a href="https://wa.me/573008131803" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" /> WhatsApp</a></Button>
            </div>
            <div className="mt-8"><Button variant="link" className="text-primary gap-2" asChild><Link href="/planes">Ver todas las sedes <ArrowRight className="w-4 h-4" /></Link></Button></div>
          </div>
        </div>
      </section>
    </>
  )
}
