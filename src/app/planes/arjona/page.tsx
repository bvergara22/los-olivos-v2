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
  UserCheck,
  Baby,
  Clock,
  CreditCard,
  Wallet,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes Arjona - Los Olivos Cartagena",
  description:
    "Planes de prevision exequial en Arjona. Cobertura flexible con ingreso de mayores hasta 80 anos e hijos sin limite de edad.",
}

const planes = [
  {
    title: "Plan Basico",
    price: "Desde $14.000/mes",
    description: "Proteccion esencial con cobertura familiar amplia y flexible.",
    features: [
      "Titular con ingreso hasta 65 anos, sin limite de permanencia",
      "Conyuge con ingreso hasta 65 anos",
      "Hasta 2 adultos mayores hasta 80 anos (padres o suegros)",
      "Hijos sin limite de edad",
      "Solteros: incluye padres y hermanos hasta 30 anos",
      "Cobertura nacional",
    ],
    popular: false,
  },
  {
    title: "Plan Integral Sin Sinergia 6+1",
    price: "Desde $18.000/mes",
    description: "Plan completo con asistencias en vida y boveda perpetua.",
    features: [
      "Hasta 7 afiliados (titular + 6 familiares)",
      "Boveda a perpetuidad incluida",
      "Asistencia en vida (domicilios gratuitos)",
      "Tarjeta de beneficios con descuentos",
      "Asistencia psicologica Mens Sana",
      "Video conmemorativo incluido",
    ],
    popular: false,
  },
  {
    title: "Plan Integral Con Sinergia 6+1",
    price: "Desde $25.000/mes",
    description: "Maxima proteccion con seguros Sinergia para toda la familia.",
    features: [
      "Todo lo del Plan Integral",
      "Seguro de alimentacion (canasta familiar por 1 ano)",
      "Renta diaria por hospitalizacion",
      "Cobertura por incapacidad total y permanente",
      "Indemnizacion por muerte accidental",
      "Asistencia medica permanente sin costo adicional",
    ],
    popular: true,
  },
]

const coberturaDiferencial = [
  {
    icon: Baby,
    title: "Hijos sin limite de edad",
    description: "A diferencia de otras sedes, en Arjona tus hijos no tienen limite de edad para estar cubiertos.",
  },
  {
    icon: UserCheck,
    title: "Mayores hasta 80 anos",
    description: "Incluye hasta 2 adultos mayores de hasta 80 anos, ya sean padres o suegros.",
  },
  {
    icon: Users,
    title: "Cobertura para solteros",
    description: "Si eres soltero, puedes incluir a tus padres y hermanos menores de 30 anos en tu plan.",
  },
  {
    icon: Wallet,
    title: "Cuotas desde $14.000",
    description: "Los planes mas accesibles de la region con pago mensual, trimestral, semestral o anual.",
  },
]

const formasPago = [
  { icon: CreditCard, label: "Mensual", desc: "La opcion mas flexible" },
  { icon: CreditCard, label: "Trimestral", desc: "Ahorra con pagos cada 3 meses" },
  { icon: CreditCard, label: "Semestral", desc: "Mayor descuento" },
  { icon: CreditCard, label: "Anual", desc: "Maximo ahorro" },
]

export default function ArjonaPage() {
  return (
    <>
      <PageBanner
        title="Planes en Arjona"
        description="Proteccion integral con la cobertura familiar mas flexible: mayores hasta 80 anos e hijos sin limite de edad."
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
                title="Los Olivos Arjona"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-primary">Sede Arjona</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                  Cerca de tu familia
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Sede Funeraria Arjona</p>
                    <p className="text-sm text-muted-foreground">Cra 56A # 54 A-109, Arjona</p>
                    <p className="text-xs text-muted-foreground mt-1">Tel: 605 6293667 | Cel: 310 6427557</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">WhatsApp / Linea Nacional</p>
                    <p className="text-sm text-muted-foreground">+57 323 309 3435 | 018000-180-150</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Atencion 24/7</p>
                    <p className="text-sm text-muted-foreground">Asesor virtual disponible 365 dias del ano</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="https://wa.me/573106427557?text=Hola, quiero información sobre planes en Arjona" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Contactar sede Arjona
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Cobertura diferencial */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Cobertura flexible</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Ventajas de afiliarte en Arjona
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coberturaDiferencial.map((item) => (
              <div key={item.title} className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
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
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Planes disponibles en Arjona
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {planes.map((plan) => (
              <Card key={plan.title} className={`relative ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Mas Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-display text-xl">{plan.title}</CardTitle>
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
                    <a href={`https://wa.me/573106427557?text=Hola, me interesa el ${plan.title} en Arjona`} target="_blank" rel="noopener noreferrer">
                      Afiliarme ahora <ArrowRight className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Formas de pago */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Facilidades de pago</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Paga como prefieras
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {formasPago.map((fp) => (
              <div key={fp.label} className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-colors">
                <fp.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-foreground">{fp.label}</h3>
                <p className="text-xs text-muted-foreground mt-1">{fp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Protege a tu familia en Arjona
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Visitanos en la Cra 56A # 54 A-109 o contactanos para recibir asesoria personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <Link href="/cotizar">Cotizar mi plan <ArrowRight className="w-5 h-5" /></Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="https://wa.me/573106427557" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Arjona
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="tel:6056293667"><Phone className="w-5 h-5" /> Llamar</a>
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
