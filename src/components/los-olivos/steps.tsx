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
      title: "Prepara tu información",
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
      description: "Paga en línea el plan escogido para completar tu proceso de afiliación.",
    },
    {
      number: 5,
      title: "Contacto y firma",
      description: "Uno de nuestros asesores se pondrá en contacto contigo para validar tu información y realizar la firma del contrato.",
    },
  ]

  return (
    <section className="py-12 md:py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
          <span className="text-3xl md:text-4xl text-primary block">Proceso simple</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
            ¿Cómo pertenecer a la familia Olivos?
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Unirte es muy fácil. Solo sigue estos 5 sencillos pasos.
          </p>
        </div>

        {/* Steps - Ley de Proximidad y Similitud */}
        {/* Mobile: timeline vertical / Desktop: grid horizontal */}
        <div className="hidden md:grid md:grid-cols-5 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute top-8 left-1/2 w-full h-0.5 bg-border" />
              )}
              <div className="relative flex flex-col items-center text-center group">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 z-10 transition-colors bg-card border-2 border-primary text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                  {step.number}
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile timeline */}
        <div className="flex flex-col gap-0 mb-8 md:hidden">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-4">
              {/* Left: number + line */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold shrink-0 bg-card border-2 border-primary text-primary">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-border my-1" />
                )}
              </div>
              {/* Right: content */}
              <div className={`pb-6 ${index === steps.length - 1 ? "" : ""}`}>
                <h3 className="font-display font-bold text-base text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA - Ley de Von Restorff */}
        <div className="text-center">
          <Button
            size="lg"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8"
            asChild
          >
            <a href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea" target="_blank" rel="noopener noreferrer">
              Afiliarme ahora
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
