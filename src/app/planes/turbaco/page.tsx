import { PageBanner } from "@/components/los-olivos/page-banner"
import { VerSedesButton } from "@/components/los-olivos/ver-sedes-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Check,
  Heart,
  Shield,
  Users,
  MapPin,
  Phone,
  MessageCircle,
  TreePine,
  UserCheck,
  Baby,
  AlertTriangle,
  ShoppingBasket,
  Stethoscope,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes Turbaco - Los Olivos Cartagena",
  description:
    "Planes de prevision exequial en Turbaco. Parque Cementerio Jardin Los Olivos. Proteccion integral para tu familia.",
}

const planes = [
  {
    title: "Plan Basico",
    price: "Desde $14.000/mes",
    description: "Proteccion exequial esencial para tu nucleo familiar basico.",
    features: [
      "Titular con edad de ingreso hasta 65 anos",
      "Conyuge con ingreso hasta 65 anos",
      "Hijos con ingreso hasta 35 anos",
      "Padres y/o suegros con ingreso hasta 75 anos",
      "Sin limite de edad para permanencia",
      "Cobertura nacional",
    ],
    popular: false,
  },
  {
    title: "Plan Integral Con Sinergia",
    price: "Desde $25.000/mes",
    description: "Plan completo con seguros adicionales Sinergia y boveda perpetua.",
    features: [
      "Todo lo del Plan Basico",
      "Boveda a perpetuidad incluida",
      "Seguro de alimentacion (canasta familiar por 1 ano)",
      "Renta diaria por hospitalizacion",
      "Indemnizacion por muerte accidental",
      "Asistencia psicologica Mens Sana",
    ],
    popular: true,
  },
]

const beneficiosSinergia = [
  {
    icon: ShoppingBasket,
    title: "Seguro de Alimentacion",
    description: "Canasta familiar asegurada por un ano en caso de fallecimiento del titular.",
  },
  {
    icon: Stethoscope,
    title: "Asistencia Medica Permanente",
    description: "Mas proteccion para todos: asistencia medica para toda la familia sin costo adicional.",
  },
  {
    icon: Heart,
    title: "Renta por Hospitalizacion",
    description: "Renta diaria por hospitalizacion e ingreso a UCI para el titular afiliado.",
  },
  {
    icon: Shield,
    title: "Indemnizacion por Muerte",
    description: "Cobertura de indemnizacion que protege a todo el grupo familiar.",
  },
]

const carencias = [
  { label: "Muerte natural", value: "3 meses de espera", icon: AlertTriangle },
  { label: "Muerte accidental o violenta", value: "Cobertura inmediata (24h)", icon: Shield },
  { label: "Enfermedades persistentes", value: "6 meses de espera", icon: Heart },
]

export default function TurbacoPage() {
  return (
    <>
      <PageBanner
        title="Planes en Turbaco"
        description="Parque Cementerio Jardin Los Olivos: un espacio de paz y naturaleza para honrar la memoria de tus seres queridos."
      />

      {/* Video + Info sede */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://player.vimeo.com/video/542868877?autoplay=0&title=0&byline=0&portrait=0"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Los Olivos Turbaco"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-primary">Sede Turbaco</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                  Parque Cementerio Jardin
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <TreePine className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Sede Funeraria Turbaco</p>
                    <p className="text-sm text-muted-foreground">Calle Las Flores # 15-30, Turbaco</p>
                    <p className="text-xs text-muted-foreground mt-1">Tel: 605 6436093 | Cel: 300 8142820</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Parque Cementerio</p>
                    <p className="text-sm text-muted-foreground">Via Turbaco Km 4</p>
                    <p className="text-xs text-muted-foreground mt-1">PBX: 605 6524502 | Cel: 311 4045470</p>
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
                <a href="https://wa.me/573008142820" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Contactar sede Turbaco
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Planes disponibles en Turbaco
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Adquiere tu plan de prevision en comodas cuotas mensuales, trimestrales, semestrales o anuales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {planes.map((plan) => (
              <Card
                key={plan.title}
                className={`relative ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Recomendado
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-display text-2xl">{plan.title}</CardTitle>
                  <p className="text-primary font-bold text-lg mt-1">{plan.price}</p>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2" asChild>
                    <a
                      href={`https://wa.me/573008142820?text=Hola, me interesa el ${plan.title} en Turbaco`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Afiliarme ahora
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Sinergia */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Beneficios Sinergia</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Mas que un plan exequial
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {beneficiosSinergia.map((b) => (
              <div
                key={b.title}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <b.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Periodos de carencia */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Transparencia</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Periodos de carencia
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {carencias.map((c) => (
              <div key={c.label} className="text-center p-6 bg-card rounded-2xl border border-border">
                <c.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-bold text-foreground mb-2">{c.label}</h3>
                <p className="text-sm text-primary font-medium">{c.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Visita nuestro Parque Cementerio en Turbaco
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Un espacio de paz y naturaleza. Nuestros asesores te esperan en la Via Turbaco Km 4.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <Link href="/cotizar">
                  Cotizar mi plan
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="https://wa.me/573008142820" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Turbaco
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="tel:6056524502">
                  <Phone className="w-5 h-5" />
                  Llamar
                </a>
              </Button>
            </div>
            <div className="mt-8">
              <VerSedesButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
