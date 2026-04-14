import { VerSedesButton } from "@/components/los-olivos/ver-sedes-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MessageCircle, Phone, Brain, Banknote, ShieldAlert } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes Soplaviento - Los Olivos Cartagena",
  description: "Planes de prevision exequial en Soplaviento. Plan Basico e Integral con cobertura completa y atencion 24/7.",
}

const planes = [
  {
    title: "Plan Basico",
    price: "Valor de $14.000 pesos",
    description: "Ideal para tu nucleo familiar basico. El titular debe ser menor a 65 anos y podra incluir a 5 personas hasta una edad de 65 anos. Si es casado(a): conyuge, hijos o hijastros. Si es soltero(a): hermanos sin limite de edad.",
    popular: false,
    sinergia: false,
  },
  {
    title: "Plan Integral",
    price: "Valor de $18.000 pesos",
    description: "Titular con edad de ingreso de 65 anos mas 6 beneficiarios. De los cuales 2 pueden ser sin limite de edad, el resto hasta 50 anos con edad para ingreso y sin limite de edad para permanencia.",
    popular: false,
    sinergia: false,
  },
  {
    title: "Plan Integral Con Sinergia",
    price: "Valor de $21.000 pesos",
    description: "Titular con edad de ingreso de 65 anos mas 6 beneficiarios. De los cuales 2 pueden ser sin limite de edad, el resto hasta 50 anos con edad para ingreso y sin limite de edad para permanencia. Incluye beneficios Sinergia.",
    popular: true,
    sinergia: true,
  },
]

export default function SoplavientoPage() {
  return (
    <>
      {/* Hero Sede Soplaviento */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
                Sede Soplaviento
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Contar con un seguro de prevision integral es cuidar a los que mas quieres y asi brindarles una cobertura completa desde que inicias el servicio hasta que lo finalizas. Una proteccion integral te brindara tranquilidad en aquellos momentos dificiles.
                </p>
                <p>
                  Afiliandote podras adquirir tu plan de prevision en cuotas mensuales muy comodas y estar preparado ante cualquier eventualidad, convirtiendo este seguro en un sublime acto de amor.
                </p>
                <p className="font-display font-bold text-foreground text-lg">
                  ¡Es momento de demostrarle a tu familia cuanto la amas!
                </p>
              </div>
            </div>
            <div className="relative w-3/4 md:w-full max-w-lg mx-auto">
              <Image src="/soplavientos-vector.png" alt="Familia protegida con Los Olivos" aria-hidden width={600} height={500} className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-60 drop-shadow-[0_0_40px_rgba(206,78,88,0.4)]" />
              <Image src="/soplavientos-vector.png" alt="Familia protegida con Los Olivos" width={600} height={500} priority className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />
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
              <div className="bg-card rounded-2xl border border-border p-6 text-center">
                <Brain className="w-10 h-10 text-primary mx-auto mb-3" />
                <h3 className="font-display font-bold text-lg text-primary mb-3">Asistencia Psicologica:</h3>
                <ul className="space-y-2 text-left">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">●</span>
                    <span className="text-sm text-muted-foreground">Mens Sana: Centro de ayuda psicologica personalizada (Sesiones a consideracion del psicologo).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1.5 text-xs">●</span>
                    <span className="text-sm text-muted-foreground">Unidad de apoyo al duelo</span>
                  </li>
                </ul>
              </div>
            </div>
            {/* Seguros */}
            <div>
              <h2 className="font-display text-xl md:text-2xl text-foreground text-center mb-8">
                Seguros
              </h2>
              <div className="flex flex-col gap-4">
                {[
                  { icon: Banknote, title: "SoliRenta", description: "Renta diaria por hospitalizacion que cubre al afiliado titular." },
                  { icon: ShieldAlert, title: "SoliAccidente", description: "Indemnizacion en caso de fallecimiento que cubre al grupo familiar en caso de fallecimiento del titular." },
                ].map((s) => (
                  <div key={s.title} className="group relative bg-card rounded-2xl border border-border p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all">
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
        </div>
      </section>

      {/* Planes */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-primary block">Planes Personas</span>
            <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
              Planes disponibles en Soplaviento
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {planes.map((plan) => (
              <Card key={plan.title} className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}>
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
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{plan.description}</p>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="text-foreground font-bold text-lg">{plan.price}</p>
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

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-4 text-balance">Protege a tu familia en Soplaviento</h2>
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
