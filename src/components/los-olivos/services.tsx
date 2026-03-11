"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Calculator, CreditCard, FileText } from "lucide-react"
import Link from "next/link"

export function Services() {
  const services = [
    {
      icon: CreditCard,
      title: "Pagos en línea",
      description: "Paga todo lo que necesites desde la comodidad de tu hogar de forma rápida y segura.",
      cta: "Pagar ahora",
      href: "/pagos",
      highlight: false,
    },
    {
      icon: Calculator,
      title: "Cotizar homenaje",
      description: "Consulta el valor de nuestro servicio según tus requerimientos y condiciones.",
      cta: "Cotizar",
      href: "/cotizar",
      highlight: false,
      cotizar: true,
    },
    {
      icon: FileText,
      title: "Trámites fallecidos",
      description: "Consulta toda la documentación e información del proceso de tu ser querido.",
      cta: "Ver trámites",
      href: "/tramites",
      highlight: false,
      duelo: true,
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-3xl md:text-4xl text-primary block">Servicios en línea</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
            Gestiona todo desde tu hogar
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Accede a nuestros servicios de manera rápida, sencilla y segura.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className={`group relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                service.highlight
                  ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                  : service.duelo
                  ? "bg-card hover:border-duelo-main/50"
                  : service.cotizar
                  ? "bg-card hover:border-cotizar-main/50"
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
                    : service.duelo
                    ? "bg-duelo-main/10 text-duelo-main group-hover:bg-duelo-main group-hover:text-white"
                    : service.cotizar
                    ? "bg-cotizar-main/10 text-cotizar-main group-hover:bg-cotizar-main group-hover:text-white"
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
                      : service.duelo
                      ? "hover:bg-duelo-main/10 hover:border-duelo-main hover:text-duelo-main"
                      : service.cotizar
                      ? "hover:bg-cotizar-main/10 hover:border-cotizar-main hover:text-cotizar-main"
                      : "hover:bg-primary/10 hover:border-primary hover:text-primary"
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
