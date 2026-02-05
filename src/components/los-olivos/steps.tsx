import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

/**
 * LEY DE MILLER: Solo 4 pasos (dentro del rango optimo 5-9)
 * LEY DE POSICION SERIAL: Primer y ultimo paso son los mas importantes
 * LEY DE PROXIMIDAD: Pasos secuenciales agrupados visualmente
 */
export function Steps() {
  const steps = [
    {
      number: 1,
      title: "Prepara tu informacion",
      description: "Ten a la mano los datos de los beneficiarios: nombre completo, documento y fecha de nacimiento.",
    },
    {
      number: 2,
      title: "Escoge tu plan",
      description: "Ingresa al portal de afiliaciones, selecciona tu sede y el plan que mejor se ajuste a tu familia.",
    },
    {
      number: 3,
      title: "Completa tus datos",
      description: "Ingresa todos los datos solicitados y adjunta los documentos de identidad requeridos.",
    },
    {
      number: 4,
      title: "Realiza el pago",
      description: "Paga en linea el plan escogido y listo! Ya eres parte de la familia Olivos.",
    },
  ]

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Header - Ley de Posicion Serial */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary">Proceso simple</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Como pertenecer a la familia Olivos?
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Unirte es muy facil. Solo sigue estos 4 sencillos pasos.
          </p>
        </div>

        {/* Steps - Ley de Proximidad y Similitud */}
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative flex flex-col items-center text-center group">
                {/* Step Number - todos iguales con hover */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 z-10 transition-colors bg-card border-2 border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  {step.number}
                </div>
                
                {/* Step Content - Ley de Proximidad */}
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Ley de Von Restorff */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
          >
             Afiliarme ahora
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
