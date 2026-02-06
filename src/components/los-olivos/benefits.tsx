import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Gift, Heart, Home } from "lucide-react"

/**
 * LEY DE MILLER: 4 beneficios principales (dentro del rango 5-9)
 * LEY DE SIMILITUD: Iconos y cards con el mismo estilo
 * LEY DE PROXIMIDAD: Beneficios relacionados agrupados visualmente
 */
export function Benefits() {
  const benefits = [
    {
      icon: Heart,
      title: "Asistencia Exequial",
      description: "Mas de 3 protocolos para rendir el mejor homenaje: Desprendimiento, Acogida, Despedida, Renacimiento y Nicho a perpetuidad.",
    },
    {
      icon: Home,
      title: "Asistencia en Vida",
      description: "Servicios domiciliarios gratuitos: vidrieria, electricidad, cerrajeria, plomeria y la exclusiva Tarjeta Beneficios Olivos.",
    },
    {
      icon: Brain,
      title: "Asistencia Psicologica",
      description: "Equipo de psicologos especializados brindando acompanamiento optimo y ayuda psicologica personalizada.",
    },
    {
      icon: Gift,
      title: "Beneficios Adicionales",
      description: "Descuentos exclusivos, eventos familiares, sorteos, rifas y muchos mas beneficios para nuestra familia Olivos.",
    },
  ]

  return (
    <section id="beneficios" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-sm font-medium text-primary">Beneficios exclusivos</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-balance">
              Tus beneficios Olivos
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Mas que un servicio exequial, somos una familia que te acompana 
              en cada momento de tu vida con beneficios integrales.
            </p>
            
            {/* CTA - Ley de Von Restorff */}
            <Button 
              size="lg" 
              className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
            >
              Conoce todos los beneficios
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Benefits Grid - Ley de Similitud y Proximidad */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div 
                key={benefit.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Ley de Pregnancia: Iconos simples */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
                
                {/* Ley de Proximidad: Titulo y descripcion juntos */}
                <h3 className="font-display font-bold text-lg text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
