"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calculator, CreditCard, FileText } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: CreditCard,
      title: "Pagos en linea",
      description: "Paga todo lo que necesites desde la comodidad de tu hogar de forma rapida y segura.",
      cta: "Pagar ahora",
      href: "/pagos",
      highlight: false,
    },
    {
      icon: Calculator,
      title: "Cotizar homenaje",
      description: "Consulta el valor de nuestro servicio segun tus requerimientos y condiciones.",
      cta: "Cotizar",
      href: "/cotizar",
      highlight: false,
    },
    {
      icon: FileText,
      title: "Tramites fallecidos",
      description: "Consulta toda la documentacion e informacion del proceso de tu ser querido.",
      cta: "Ver tramites",
      href: "/tramites",
      highlight: false,
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-sm font-medium text-primary">Servicios en linea</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
            Gestiona todo desde tu hogar
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Accede a nuestros servicios de manera rapida, sencilla y segura.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card 
              key={service.title}
              className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                service.highlight 
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20" 
                  : "bg-card hover:border-primary/50"
              }`}
            >
              {service.highlight && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              
              <CardHeader className="space-y-4">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${
                  service.highlight 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground"
                }`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <CardTitle className="font-display text-xl">{service.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <Button 
                  className={`w-full gap-2 ${
                    service.highlight 
                      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                      : ""
                  }`}
                  variant={service.highlight ? "default" : "outline"}
                  asChild
                >
                  <Link href={service.href}>
                    {service.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
