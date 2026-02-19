import { PageBanner } from "@/components/los-olivos/page-banner"
import { VerSedesButton } from "@/components/los-olivos/ver-sedes-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Heart, Shield, Users, MessageCircle, Phone, Clock, HandHeart } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes Mahates - Los Olivos Cartagena",
  description: "Plan de prevision exequial en Mahates. Proteccion cercana y accesible con atencion 24/7.",
}

const porQueElegirnos = [
  { icon: Shield, title: "Cobertura Nacional", description: "Tu plan te protege en cualquier lugar de Colombia. No importa donde estes." },
  { icon: Clock, title: "Atencion 24/7", description: "Asistencia disponible las 24 horas del dia, los 365 dias del ano." },
  { icon: HandHeart, title: "Acompanamiento Integral", description: "Asistencia exequial, en vida y psicologica en un solo plan." },
  { icon: Heart, title: "Mens Sana", description: "Apoyo psicologico profesional para el manejo del duelo y bienestar." },
]

const asistencias = [
  {
    title: "Asistencia Exequial",
    items: ["Protocolo de desprendimiento", "Sala de acogida", "Ceremonia de despedida", "Nicho perpetuo (Renacimiento)", "Video conmemorativo"],
  },
  {
    title: "Asistencia en Vida",
    items: ["Domicilios gratuitos: vidrieria, electricidad, cerrajeria, plomeria", "Tarjeta de beneficios con descuentos", "Descuentos en establecimientos aliados", "Linea de asistencia al hogar #789"],
  },
  {
    title: "Asistencia Psicologica",
    items: ["Centro Mens Sana", "Sesiones personalizadas", "Profesionales especializados en duelo", "Unidad de gestion de emociones"],
  },
]

export default function MahatesPage() {
  return (
    <>
      <PageBanner
        title="Planes en Mahates"
        description="Proteccion exequial cercana y accesible para las familias de Mahates. Atencion personalizada y acompanamiento integral."
      />

      {/* Video + Info */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe src="https://player.vimeo.com/video/542868877?autoplay=0&title=0&byline=0&portrait=0" className="w-full h-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen title="Los Olivos Mahates" />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-primary">Sede Mahates</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">Atencion cercana</h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Sede Mahates</p>
                    <p className="text-sm text-muted-foreground">Mahates, Bolivar</p>
                    <p className="text-xs text-muted-foreground mt-1">Cel: 313 8678771</p>
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
                <a href="https://wa.me/573138678771?text=Hola, quiero información sobre planes en Mahates" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" /> Contactar sede Mahates
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Por que elegirnos */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Por que Los Olivos</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Mas que un plan exequial</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {porQueElegirnos.map((item) => (
              <div key={item.title} className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"><item.icon className="w-6 h-6" /></div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plan + Asistencias lado a lado */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">3 asistencias en un plan</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">Todo lo que incluye tu plan</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {asistencias.map((a) => (
              <div key={a.title} className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-bold text-lg text-primary mb-4">{a.title}</h3>
                <ul className="space-y-3">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
              <a href="https://wa.me/573138678771?text=Hola, quiero afiliarme en Mahates" target="_blank" rel="noopener noreferrer">Afiliarme ahora <ArrowRight className="w-5 h-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Protege a tu familia en Mahates</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Contactanos para recibir asesoria personalizada sobre nuestros planes.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild><Link href="/cotizar">Cotizar mi plan <ArrowRight className="w-5 h-5" /></Link></Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild><a href="https://wa.me/573138678771" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" /> WhatsApp</a></Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild><a href="tel:3138678771"><Phone className="w-5 h-5" /> Llamar</a></Button>
            </div>
            <div className="mt-8"><VerSedesButton /></div>
          </div>
        </div>
      </section>
    </>
  )
}
