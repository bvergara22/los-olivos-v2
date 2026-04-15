import { TarjetaBeneficios } from "@/components/los-olivos/tarjeta-beneficios"
import { VerSedesButton } from "@/components/los-olivos/ver-sedes-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Brain,
  Check,
  MessageCircle,
  ShoppingBasket,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Planes Turbaco - Los Olivos Cartagena",
  description:
    "Planes de previsión exequial en Turbaco. Parque Cementerio Jardín Los Olivos. Protección integral para tu familia.",
}

const planes = [
  {
    title: "Plan 6+1 Sin Destino Final",
    price: "Valor de $18.000 pesos",
    description: "Cobertura exequial para hasta 7 integrantes. No incluye destino final.",
    features: [
      "Titular con ingreso hasta 65 años",
      "2 beneficiarios con ingreso hasta 75 años",
      "4 beneficiarios menores a 60 años sin importar parentesco",
      "No incluye destino final",
      "Cobertura exequial completa",
      "Atención 24/7, cobertura nacional",
    ],
    popular: false,
    sinergia: false,
  },
  {
    title: "Plan 6+1 Integral",
    price: "Valor de $26.000 pesos",
    description: "Plan completo con destino final y nicho a perpetuidad en el Parque Cementerio Jardín los Olivos.",
    features: [
      "Titular con ingreso hasta 65 años",
      "2 beneficiarios hasta 75 años y 4 hasta 60 años",
      "Sin importar lazos de consanguinidad o afinidad",
      "Incluye todo lo relacionado con el homenaje",
      "Destino final incluido",
      "Nicho a perpetuidad en Parque Cementerio Jardín los Olivos",
    ],
    popular: true,
    sinergia: false,
  },
  {
    title: "Sinergia Opción 2 - Plan Fraternal",
    price: "Valor de $23.000 pesos",
    description: "Plan con beneficios Sinergia para el núcleo familiar primario con destino final incluido.",
    features: [
      "Titular con ingreso hasta 65 años",
      "Cónyuge, cualquier número de hijos y padres (primer lazo de consanguinidad)",
      "Incluye todo lo relacionado con el homenaje",
      "Destino final y nicho a perpetuidad en Parque Cementerio Jardín los Olivos",
      "Beneficios Sinergia incluidos",
    ],
    popular: false,
    sinergia: true,
  },
  {
    title: "Sinergia Opción 2 - Plan Básico",
    price: "Valor de $14.000 pesos",
    description: "Plan accesible para solteros o casados con cobertura del núcleo familiar y beneficios Sinergia.",
    features: [
      "Titular con ingreso hasta 65 años, sin límite de permanencia",
      "Soltero: padres hasta 75 años e hijos/hermanos hasta 30 años de ingreso",
      "Casado: cónyuge hasta 65 años, hijos hasta 30 años y padres hasta 75 años",
      "A falta de padres puede incluir suegros",
      "Sin límite de edad para permanencia al día en pagos",
      "Beneficios Sinergia incluidos",
    ],
    popular: false,
    sinergia: true,
  },
]

const asistencias = [
  {
    icon: Brain,
    title: "Asistencia Psicológica",
    items: [
      "Mens Sana: Centro de ayuda psicológica personalizada (Sesiones a consideración del psicólogo)",
      "Unidad de apoyo al duelo",
    ],
  },
]

const seguros = [
  {
    icon: ShoppingBasket,
    title: "SoliCanasta",
    description: "Seguro de alimentación que cubre la canasta familiar por un año para el grupo familiar en caso de fallecimiento del titular.",
  },
]

export default function TurbacoPage() {
  return (
    <>
      {/* Hero Sede Turbaco */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
                Sede Turbaco
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Contar con un seguro de previsión integral es cuidar a los que más quieres y así brindarles una cobertura completa desde que inicias el servicio hasta que lo finalizas. Una protección integral te brindará tranquilidad en aquellos momentos difíciles.
                </p>
                <p>
                  Afiliándote podrás adquirir tu plan de previsión en cuotas mensuales muy cómodas y estar preparado ante cualquier eventualidad, convirtiendo este seguro en un sublime acto de amor.
                </p>
                <p className="font-display font-bold text-foreground text-lg">
                  ¡Es momento de demostrarle a tu familia cuánto la amas!
                </p>
              </div>
            </div>
            <div className="relative w-3/4 md:w-full max-w-lg mx-auto">
              <Image src="/turbaco-vector.png" alt="Familia protegida con Los Olivos" aria-hidden width={600} height={500} className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-60 drop-shadow-[0_0_40px_rgba(206,78,88,0.4)]" />
              <Image src="/turbaco-vector.png" alt="Familia protegida con Los Olivos" width={600} height={500} priority className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Asistencias y Seguros */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Asistencias */}
            <div>
              <h2 className="font-display text-xl md:text-2xl text-primary text-center mb-8">
                Asistencias
              </h2>
              {asistencias.map((a) => (
                <div
                  key={a.title}
                  className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all text-center h-full"
                >
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <a.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary mb-4">{a.title}</h3>
                  <ul className="space-y-2 text-left">
                    {a.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-primary mt-1.5 text-xs">●</span>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Seguros */}
            <div>
              <h2 className="font-display text-xl md:text-2xl text-foreground text-center mb-8">
                Seguros
              </h2>
              {seguros.map((s) => (
                <div
                  key={s.title}
                  className="group relative bg-card rounded-2xl border border-border p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all h-full"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <s.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-primary block">Elige tu plan</span>
            <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
              Planes disponibles en Turbaco
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Adquiere tu plan de previsión en cómodas cuotas mensuales, trimestrales, semestrales o anuales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {planes.map((plan) => (
              <Card
                key={plan.title}
                className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Recomendado
                  </div>
                )}
                {plan.sinergia && (
                  <div className="absolute -top-4 right-4 bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    Sinergia
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-display text-xl text-primary">{plan.title}</CardTitle>
                  <p className="text-foreground font-bold text-lg mt-1">{plan.price}</p>
                  <p className="text-muted-foreground text-sm mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent className="mt-auto">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
              <a href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea" target="_blank" rel="noopener noreferrer">
                Afiliarme ahora <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <TarjetaBeneficios />

      {/* CTA Final */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-4 text-balance">
              Protege a tu familia en Turbaco hoy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Nuestros asesores están listos para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="gap-2 px-8 hover:bg-primary/10 hover:border-primary hover:text-primary" asChild>
                <a href="https://wa.me/573008142820" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Contáctanos
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
