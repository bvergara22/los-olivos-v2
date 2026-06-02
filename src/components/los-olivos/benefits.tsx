import { Button } from "@/components/ui/button"
import { ArrowRight, Brain, Gift, Heart, Home } from "lucide-react"
import Link from "next/link"

export function Benefits() {
  const benefits = [
    {
      icon: Heart,
      title: "Asistencia exequial",
      description: "Más de 3 protocolos para rendir el mejor homenaje: Desprendimiento, Acogida, Despedida, Renacimiento y Nicho a perpetuidad.",
    },
    {
      icon: Home,
      title: "Asistencia en vida",
      description: "Servicios domiciliarios gratuitos: vidriería, electricidad, cerrajería, plomería y la exclusiva Tarjeta Beneficios Olivos.",
    },
    {
      icon: Brain,
      title: "Asistencia psicológica",
      description: "Equipo de psicólogos especializados brindando acompañamiento óptimo y ayuda psicológica personalizada.",
    },
    {
      icon: Gift,
      title: "Beneficios adicionales",
      description: "Descuentos exclusivos, eventos familiares, sorteos, rifas y muchos más beneficios para nuestra familia Olivos.",
    },
  ]

  return (
    <section id="beneficios" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-3xl md:text-4xl text-vida-dark block">Beneficios exclusivos</span>
            <h2 className="font-display text-xl md:text-2xl text-foreground text-balance">
              Tus beneficios Olivos
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Más que un servicio exequial, somos una familia que te acompaña
              en cada momento de tu vida con beneficios integrales.
            </p>

          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="group p-4 md:p-6 rounded-2xl bg-card border border-border hover:border-vida-dark/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-vida-dark/10 text-vida-dark flex items-center justify-center mb-4 group-hover:bg-vida-dark group-hover:text-white transition-colors">
                  <benefit.icon className="w-6 h-6" />
                </div>
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
