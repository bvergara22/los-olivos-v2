import { VerSedesButton } from "@/components/los-olivos/ver-sedes-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, MessageCircle } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes Maria la Baja - Los Olivos Cartagena",
  description: "Plan de prevision exequial en Maria la Baja. Proteccion accesible y cercana para tu familia.",
}

const planesEmpresas = [
  {
    title: "Plan Integral Familiar Con Sinergia de $1.000.000",
    price: "Valor de $13.000 pesos",
    description: "Beneficios sinergia: CANASTA por un valor de $3.000.000 pesos (por fallecimiento del titular hasta los 65 anos). INCAPACIDAD TOTAL Y PERMANENTE $3.000.000 de pesos. CIRUGIA AMBULATORIA $30.000 pesos por el dia de la cirugia. RENTA DIARIA POR HOSPITALIZACION $30.000 pesos por dia hospitalizado hasta por 30 dias (titulares de 18 a 65 anos a partir de las 48 horas de hospitalizacion y 72 horas para titulares de 66 a 70 anos). UNIDAD DE CUIDADOS INTENSIVOS $60.000 pesos por dia hospitalizado por 15 dias (titulares de 18 a 65 anos a partir de las 48 horas de hospitalizacion y 72 horas para titulares de 66 a 70 anos). ACCIDENTES PERSONALES: Muerte accidental $3.000.000 de pesos. Invalidez o desmembracion $3.000.000 de pesos.",
    popular: false,
    sinergia: true,
  },
  {
    title: "Plan Integral 6+1 Con Sinergia de $3.000.000",
    price: "Valor de $16.000 pesos",
    description: "Beneficios sinergia: CANASTA por un valor de $3.000.000 pesos (por fallecimiento del titular hasta los 65 anos). INCAPACIDAD TOTAL Y PERMANENTE $3.000.000 de pesos. CIRUGIA AMBULATORIA $30.000 pesos por el dia de la cirugia. RENTA DIARIA POR HOSPITALIZACION $30.000 pesos por dia hospitalizado hasta por 30 dias (titulares de 18 a 65 anos a partir de las 48 horas de hospitalizacion y 72 horas para titulares de 66 a 70 anos). UNIDAD DE CUIDADOS INTENSIVOS $60.000 pesos por dia hospitalizado por 15 dias (titulares de 18 a 65 anos a partir de las 48 horas de hospitalizacion y 72 horas para titulares de 66 a 70 anos). ACCIDENTES PERSONALES: Muerte accidental $3.000.000 de pesos. Invalidez o desmembracion $3.000.000 de pesos.",
    popular: true,
    sinergia: true,
  },
]

const planes = [
  {
    title: "Plan Basico Sin Boveda",
    price: "Valor de $14.000 pesos",
    description: "Incluye titular con edad de ingreso hasta 65 anos y sin limite de edad de permanencia, puede incluir a su grupo familiar basico: Conyuge con edad de ingreso hasta 65 anos, hijos hasta los 35 anos para ingreso, padres y/o suegros con edad de ingreso hasta 75 anos; si el titular es soltero puede incluir a hermanos menores de 35 anos para ingreso y sus padres hasta 75 anos para ingreso, a falta de padres, puede incluir sus suegros.",
    popular: false,
    sinergia: false,
  },
  {
    title: "Plan Integral Con Boveda",
    price: "Valor de $19.000 pesos",
    description: "Incluye titular con edad de ingreso hasta 65 anos y sin limite de edad de permanencia, ademas puede incluir a su grupo familiar basico: Conyuge, hijos hasta los 35 anos, padres y/o suegros, si el titular es soltero puede incluir a hermanos menores de 30 anos y sus padres hasta 80 anos con edad de ingreso y sin limite de permanencia.",
    popular: false,
    sinergia: false,
  },
  {
    title: "Plan Fraternal Con Sinergia",
    price: "Valor de $22.200 pesos",
    description: "Incluye titular con edad de ingreso hasta 65 anos y sin limite de edad de permanencia, ademas puede incluir a su grupo familiar basico: Conyuge, hijos hasta los 35 anos, padres y/o suegros, si el titular es soltero puede incluir a hermanos menores de 30 anos y sus padres con edad hasta 80 anos para ingreso y sin limite de permanencia. Beneficios sinergia: SINERGIA opcion 2.",
    popular: false,
    sinergia: true,
  },
  {
    title: "Plan 6+1",
    price: "Valor de $22.200 pesos",
    description: "Incluye titular con edad de ingreso de 65 anos, 2 beneficiarios hasta 75 anos y 4 hasta 50 anos. Beneficios sinergia: SINERGIA opcion 2.",
    popular: true,
    sinergia: true,
  },
]


export default function MariaLaBajaPage() {
  return (
    <>
      {/* Hero Sede Maria la Baja */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
                Sede Maria la Baja
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
              <Image src="/maria-vector.png" alt="Familia protegida con Los Olivos" aria-hidden width={600} height={500} className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-60 drop-shadow-[0_0_40px_rgba(206,78,88,0.4)]" />
              <Image src="/maria-vector.png" alt="Familia protegida con Los Olivos" width={600} height={500} priority className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />
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
              Planes disponibles
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
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
                  {plan.price && (
                    <p className="text-foreground font-bold text-lg">{plan.price}</p>
                  )}
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

      {/* Planes Empresas */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-primary block">Planes Empresas</span>
            <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
              Planes empresariales
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {planesEmpresas.map((plan) => (
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
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-4 text-balance">Protege a tu familia en Maria la Baja</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">Visitanos en la Calle del Puerto # 41-11 o contactanos.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild><Link href="/cotizar">Cotizar mi plan <ArrowRight className="w-5 h-5" /></Link></Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild><a href="https://wa.me/573008131803" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" /> WhatsApp</a></Button>
            </div>
            <div className="mt-8"><VerSedesButton /></div>
          </div>
        </div>
      </section>
    </>
  )
}
