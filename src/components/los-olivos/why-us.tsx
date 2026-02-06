"use client"

import { Award, Clock, Heart, MapPin, Shield, Users } from "lucide-react"

/**
 * Por que elegirnos - Con colores verde y naranja de la marca
 * Sin boton de contacto al final
 */
export function WhyUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Cobertura Total",
      description: "Proteccion en el presente y el futuro para toda tu familia con planes integrales.",
      color: "primary",
    },
    {
      icon: Clock,
      title: "+30 Anos de Experiencia",
      description: "Mas de tres decadas al servicio solidario exequial en Cartagena y la region.",
      color: "primary",
    },
    {
      icon: MapPin,
      title: "Cobertura Nacional",
      description: "Presencia en todo el territorio colombiano con multiples sedes y aliados.",
      color: "primary",
    },
    {
      icon: Heart,
      title: "Homenaje al Amor",
      description: "Rendimos un verdadero tributo en la trascendencia de tu ser querido.",
      color: "primary",
    },
    {
      icon: Award,
      title: "Respetamos tu Antiguedad",
      description: "Reconocemos el tiempo que tengas con otra entidad sin costos adicionales.",
      color: "primary",
    },
    {
      icon: Users,
      title: "+50,000 Familias",
      description: "Miles de familias confian en nosotros para su proteccion integral.",
      color: "primary",
    },
  ]

  return (
    <section className="py-20 bg-card relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/5 translate-x-1/2 translate-y-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary">Nuestra diferencia</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Por que elegirnos?
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Somos tu mejor opcion para la proteccion familiar integral. Conoce las razones que nos distinguen.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {reasons.map((reason, index) => (
            <div 
              key={reason.title}
              className="group relative p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all hover:shadow-lg"
            >
              {/* Decorative number */}
              <span className={`absolute top-4 right-4 text-6xl font-display font-bold ${
                reason.color === "primary" ? "text-primary/10" : "text-secondary/10"
              }`}>
                {String(index + 1).padStart(2, "0")}
              </span>
              
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                reason.color === "primary" 
                  ? "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground" 
                  : "bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground"
              }`}>
                <reason.icon className="w-7 h-7" />
              </div>
              
              {/* Content */}
              <h3 className="font-display font-bold text-lg text-foreground mb-2 relative z-10">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed relative z-10">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
