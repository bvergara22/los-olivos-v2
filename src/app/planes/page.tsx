import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Check, Heart, Shield, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Planes de Prevision Exequial - Los Olivos Cartagena",
  description: "Abrele las puertas de tu hogar a la proteccion. Planes de prevision exequial con asistencia integral para toda tu familia.",
}

const asistencias = [
  {
    icon: Shield,
    title: "Asistencia Exequial",
    description: "Protocolo completo desde desprendimiento hasta nicho perpetuo. 4 etapas del homenaje: Desprendimiento, Acogida, Despedida y Renacimiento.",
    color: "primary",
  },
  {
    icon: Heart,
    title: "Asistencia en Vida",
    description: "Servicio domiciliario gratuito (vidrieria, electricidad, cerrajeria, plomeria) y tarjeta de beneficios exclusiva.",
    color: "primary",
  },
  {
    icon: Users,
    title: "Asistencia Psicologica",
    description: "Mens Sana: sesiones personalizadas de apoyo psicologico con profesionales especializados en duelo.",
    color: "primary",
  },
]

const tiposPlanes = [
  {
    title: "Planes Personas",
    description: "Proteccion individual con cuotas flexibles adaptadas a tu presupuesto.",
    features: [
      "Cobertura individual o familiar",
      "Cuotas mensuales, trimestrales, semestrales o anuales",
      "Sin periodos de carencia",
      "Cobertura nacional",
      "Incluye todas las asistencias",
    ],
    popular: true,
  },
  {
    title: "Planes Empresas",
    description: "Protege a las familias de tus colaboradores con planes corporativos.",
    features: [
      "Cobertura para empleados y familias",
      "Descuentos corporativos",
      "Gestion administrativa simplificada",
      "Atencion preferencial",
      "Beneficios adicionales",
    ],
    popular: false,
  },
]

const beneficiosAdicionales = [
  "Cobertura nacional en todo el territorio colombiano",
  "Atencion virtual 365 dias del ano",
  "Disponibilidad 24 horas, 7 dias a la semana",
  "Video de recordacion del ser querido",
  "Plan Huellitas disponible para tus mascotas",
  "Red de aliados en todo el pais",
  "Sin letra pequena ni exclusiones ocultas",
  "Respetamos tu antiguedad con otras empresas",
]

export default function PlanesPage() {
  return (
    <>
      <PageBanner
        title="Abrele las puertas de tu hogar a la proteccion"
        description="Podras adquirir un plan de prevision sin tener que pensar en gastos futuros o presentes. Proteccion integral para ti y tu familia."
      />

      {/* Las 3 Asistencias */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Proteccion integral</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Tres asistencias incluidas
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Nuestros planes incluyen proteccion completa en vida y despues de la vida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {asistencias.map((asistencia) => (
              <div
                key={asistencia.title}
                className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <asistencia.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-3">{asistencia.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{asistencia.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Planes */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Elige tu plan</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Planes para personas y empresas
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {tiposPlanes.map((plan) => (
              <Card
                key={plan.title}
                className={`relative ${
                  plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full">
                    Mas Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-display text-2xl">{plan.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                    Afiliarme ahora
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios Adicionales */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary">Valor agregado</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Beneficios adicionales
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Mucho mas que un servicio exequial, una familia que te acompana siempre.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {beneficiosAdicionales.map((beneficio) => (
                <div
                  key={beneficio}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{beneficio}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Empieza a proteger a tu familia hoy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Nuestros asesores estan listos para ayudarte a elegir el plan perfecto para ti y los tuyos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Afiliarme ahora
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="tel:6930172">
                  Llamar al PBX
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
