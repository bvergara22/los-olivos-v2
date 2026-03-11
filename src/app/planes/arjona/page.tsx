import { VerSedesButton } from "@/components/los-olivos/ver-sedes-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes Arjona - Los Olivos Cartagena",
  description:
    "Planes de prevision exequial en Arjona. Cobertura flexible con ingreso de mayores hasta 80 anos e hijos sin limite de edad.",
}

const planes = [
  {
    title: "Plan 6+1",
    price: "",
    description: "Incluye 7 afiliados. Carencias: 3 meses por muerte natural. Accidental o violenta inmediatamente las 24 horas despues de haber tomado la afiliacion. 6 meses por enfermedades persistentes (cancer, sida, leucemia).",
    popular: false,
  },
  {
    title: "Plan Basico (Sin boveda)",
    price: "Valor de $14.000 pesos",
    description: "Incluye titular con edad de ingreso hasta 65 anos y sin limite de edad de permanencia, puede incluir a su grupo familiar basico: Conyuge con edad de ingreso hasta 65 anos, hijos hasta los 35 anos para ingreso, padres y/o suegros con edad de ingreso hasta 75 anos; si el titular es soltero puede incluir a hermanos menores de 35 anos para ingreso y sus padres hasta 75 anos para ingreso, a falta de padres, puede incluir sus suegros.",
    popular: false,
  },
  {
    title: "Plan Integral Con Sinergia",
    price: "Valor de $25.000 pesos",
    description: "Incluye titular con edad de ingreso hasta 65 anos y sin limite de edad de permanencia, ademas puede incluir a su grupo familiar basico: Conyuge, hijos hasta los 35 anos, padres y/o suegros, si el titular es soltero puede incluir a hermanos menores de 30 anos y sus padres hasta 75 anos con edad de ingreso y sin limite de permanencia. Beneficios sinergia: SINERGIA opcion 2.",
    popular: true,
  },
  {
    title: "Plan Amor",
    price: "Valor de $30.000 pesos",
    description: "Este plan es ideal para tu nucleo familiar basico, si te conviertes en titular debes ser menor a 65 anos. Podras incluir a 2 adultos mayores hasta una edad de 80 anos (Padres, a falta de padres, suegros), Hijos sin limite de edad y conyuge. Si eres soltero, podras incluir a tu nucleo basico como padres y hermanos 30 anos de edad para ingreso y sin limite de permanencia.",
    popular: false,
  },
]


export default function ArjonaPage() {
  return (
    <>
      {/* Hero Sede Arjona */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary">
                Sede Arjona
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
              <Image src="/arjona.jpg" alt="Familia protegida con Los Olivos" aria-hidden width={600} height={500} className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-60 drop-shadow-[0_0_40px_rgba(206,78,88,0.4)]" />
              <Image src="/arjona.jpg" alt="Familia protegida con Los Olivos" width={600} height={500} priority className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />
            </div>
          </div>

          {/* Video */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://player.vimeo.com/video/542868877?autoplay=0&title=0&byline=0&portrait=0"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Los Olivos Arjona"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-primary block">Planes Personas</span>
            <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
              Planes disponibles en Arjona
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
                <CardHeader>
                  <CardTitle className="font-display text-xl text-primary">{plan.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{plan.description}</p>
                </CardHeader>
                <CardContent className="mt-auto">
                  {plan.price && (
                    <p className="text-foreground font-bold text-lg">
                      Valor de <span className="text-primary">{plan.price.replace("Valor de ", "").replace(" pesos", "")} pesos.</span>
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
              <a href="https://www.portal.losolivoscartagena.com/" target="_blank" rel="noopener noreferrer">
                Afiliarme ahora <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-4 text-balance">
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
