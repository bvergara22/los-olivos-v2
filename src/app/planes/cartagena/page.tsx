import { PageBanner } from "@/components/los-olivos/page-banner"
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
  Building2,
  UserCheck,
  Baby,
  AlertTriangle,
  Gift,
  CreditCard,
  Star,
  Briefcase,
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes Cartagena - Los Olivos Cartagena",
  description:
    "Planes de prevision exequial en Cartagena. Dos sedes funerarias: Alcibia y Cordialidad. Proteccion integral para tu familia con asistencia 24/7.",
}

const planesPersonas = [
  {
    title: "Plan Basico Sin Boveda",
    price: "Desde $14.000/mes",
    description: "Proteccion esencial con cobertura exequial completa para tu familia.",
    features: [
      "Titular con edad de ingreso hasta 65 anos",
      "Sin limite de edad para permanencia",
      "Cobertura exequial completa",
      "Atencion 24 horas, 365 dias",
      "Cobertura nacional",
    ],
    popular: false,
  },
  {
    title: "Plan Integral Con Boveda",
    price: "Desde $25.000/mes",
    description: "Plan completo con boveda perpetua y asistencias en vida para toda la familia.",
    features: [
      "Todo lo del Plan Basico",
      "Boveda a perpetuidad incluida",
      "Asistencia en vida (domicilios gratuitos)",
      "Tarjeta de beneficios con descuentos",
      "Asistencia psicologica Mens Sana",
    ],
    popular: true,
  },
  {
    title: "Plan Fraternal Con Sinergia",
    price: "Desde $25.000/mes",
    description: "Proteccion extendida con seguros adicionales y beneficios Sinergia.",
    features: [
      "Todo lo del Plan Integral",
      "Seguro de alimentacion (canasta familiar por 1 ano)",
      "Renta diaria por hospitalizacion",
      "Indemnizacion por muerte accidental",
      "Cobertura por incapacidad total y permanente",
    ],
    popular: false,
  },
  {
    title: "Plan Integral Familiar Con Sinergia 6+1",
    price: "Consultanos",
    description: "Nuestra mejor proteccion: hasta 7 afiliados con seguros completos.",
    features: [
      "Hasta 7 afiliados (titular + 6 familiares)",
      "Conyuge, hijos hasta 35 anos, padres y/o suegros",
      "Todos los beneficios Sinergia incluidos",
      "Asistencia medica permanente",
      "Asistencia para mascotas disponible",
    ],
    popular: false,
  },
]

const planesEmpresas = [
  "Cobertura para empleados y sus familias",
  "Descuentos corporativos especiales",
  "Gestion administrativa simplificada",
  "Atencion preferencial para tu organizacion",
  "Cuotas mensuales, trimestrales, semestrales o anuales",
  "Sin periodos de carencia para muerte accidental",
]

const beneficiosClub = [
  {
    icon: CreditCard,
    title: "Tarjeta Beneficios Olivos",
    description: "15% de descuento en productos de homenaje y servicios del Parque Cementerio.",
  },
  {
    icon: Star,
    title: "5% en productos Los Olivos",
    description: "Descuento especial en todos los productos y servicios propios de Los Olivos.",
  },
  {
    icon: Gift,
    title: "Sorteos bimestrales",
    description: "Participacion en sorteos de regalos y accesorios cada dos meses.",
  },
  {
    icon: Phone,
    title: "Linea preferencial",
    description: "Atencion prioritaria para cualquier solicitud o tramite que necesites.",
  },
  {
    icon: Heart,
    title: "Asistencia domiciliaria gratuita",
    description: "Llama al #789 para vidrieria, electricidad, cerrajeria y plomeria gratis.",
  },
  {
    icon: Users,
    title: "Mens Sana",
    description: "Centro de ayuda psicologica personalizada con profesionales especializados.",
  },
]

const asistencias = [
  {
    icon: Shield,
    title: "Asistencia Funeraria",
    description:
      "Protocolo completo: desprendimiento, acogida, despedida y renacimiento. Nicho a perpetuidad incluido. Video conmemorativo.",
  },
  {
    icon: Heart,
    title: "Asistencia en Vida",
    description:
      "Servicio domiciliario gratuito, tarjeta de beneficios con descuentos exclusivos, conductor elegido y asistencia al hogar.",
  },
  {
    icon: Users,
    title: "Asistencia Psicologica",
    description:
      "Mens Sana: sesiones personalizadas de apoyo psicologico con profesionales especializados en duelo y bienestar emocional.",
  },
]

export default function CartagenaPage() {
  return (
    <>
      <PageBanner
        title="Planes en Cartagena"
        description="Dos sedes funerarias para brindarte la mejor atencion en la Heroica. Proteccion integral con planes para personas y empresas."
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
                title="Los Olivos Cartagena"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span className="text-sm font-medium text-primary">Sede Cartagena</span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                  2 sedes en la Heroica
                </h2>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Sede Alcibia</p>
                    <p className="text-sm text-muted-foreground">Av. Pedro de Heredia # 34-07</p>
                    <p className="text-xs text-muted-foreground mt-1">Tel: 605 6621324 | Cel: 321 5027980</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
                  <Building2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-foreground">Sede Cordialidad</p>
                    <p className="text-sm text-muted-foreground">Trans. 54 # 31J-27</p>
                    <p className="text-xs text-muted-foreground mt-1">Tel: 605 6930172 | Cel: 310 6171987</p>
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
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
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
            <span className="text-sm font-medium text-primary">3 asistencias en un solo plan</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Proteccion completa en vida y despues
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {asistencias.map((a) => (
              <div
                key={a.title}
                className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all"
              >
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

      {/* Planes Personas */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Planes Personas</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Proteccion familiar a tu medida
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Elige el plan ideal para proteger a los tuyos con cuotas mensuales, trimestrales, semestrales o anuales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {planesPersonas.map((plan) => (
              <Card
                key={plan.title}
                className={`relative ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Mas Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-display text-lg">{plan.title}</CardTitle>
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
                      href={`https://wa.me/573233093435?text=Hola, me interesa el ${plan.title} en Cartagena`}
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

      {/* Planes Empresas */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div>
              <span className="text-sm font-medium text-primary">Planes Empresas</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Protege a tus colaboradores
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Una alternativa especial para lideres organizacionales que desean proteger el nucleo familiar de sus
                empleados.
              </p>
              <ul className="space-y-3 mt-8">
                {planesEmpresas.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 mt-8" asChild>
                <a
                  href="https://wa.me/573233093435?text=Hola, me interesa un plan empresarial en Cartagena"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Briefcase className="w-5 h-5" />
                  Solicitar plan empresarial
                </a>
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: UserCheck, title: "Titular", desc: "Edad de ingreso hasta 65 anos, sin limite de permanencia" },
                { icon: Users, title: "Familia", desc: "Conyuge, hijos hasta 35 anos, padres y/o suegros" },
                { icon: Baby, title: "Cobertura extra", desc: "Hasta 2 mayores de 80 anos e hijos sin limite de edad" },
                {
                  icon: AlertTriangle,
                  title: "Carencias",
                  desc: "Natural: 3 meses. Accidental: inmediata. Persistentes: 6 meses",
                },
              ].map((item) => (
                <div key={item.title} className="p-4 bg-card rounded-xl border border-border">
                  <item.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Club de Afiliados / Mas Beneficios */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Mas beneficios para ti</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Club de Afiliados Los Olivos
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Descuentos exclusivos, sorteos, atencion preferencial y mucho mas para nuestros afiliados y sus familias.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {beneficiosClub.map((b) => (
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

      {/* Aliados */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-sm font-medium text-primary">Aliados comerciales</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Descuentos en establecimientos aliados
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Nuestra Tarjeta de Beneficios te da acceso a descuentos exclusivos en diversos establecimientos comerciales
              aliados en distintas areas de interes.
            </p>
          </div>
          <div className="text-center">
            <Button size="lg" variant="outline" className="gap-2" asChild>
              <a href="https://directorio.losolivoscartagena.com/" target="_blank" rel="noopener noreferrer">
                Ver directorio de aliados
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Protege a tu familia en Cartagena hoy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Nuestros asesores en las sedes Alcibia y Cordialidad estan listos para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <Link href="/cotizar">
                  Cotizar mi plan
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="tel:6056930172">
                  <Phone className="w-5 h-5" />
                  PBX 693 0172
                </a>
              </Button>
            </div>
            <div className="mt-8">
              <Button variant="link" className="text-primary gap-2" asChild>
                <Link href="/planes">
                  Ver todas las sedes
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
