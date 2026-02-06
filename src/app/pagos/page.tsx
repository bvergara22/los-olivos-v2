import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, CreditCard, ExternalLink, Lock, Phone, Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pagos en Linea - Los Olivos Cartagena",
  description: "Realiza tus pagos de forma segura y rapida desde la comodidad de tu hogar. Pasarela de pagos Los Olivos Cartagena.",
}

const metodosPago = [
  {
    title: "Pago en linea",
    description: "Paga con tu tarjeta de credito o debito de forma segura a traves de nuestra pasarela de pagos.",
    icon: CreditCard,
    href: "https://pagos.losolivoscartagena.com/",
    external: true,
    cta: "Ir a pasarela de pagos",
  },
  {
    title: "Pago telefonico",
    description: "Llama a nuestra linea de atencion y un asesor te ayudara a realizar tu pago de manera asistida.",
    icon: Phone,
    href: "tel:6930172",
    external: false,
    cta: "Llamar al PBX",
  },
]

const ventajas = [
  {
    icon: Shield,
    title: "Pago seguro",
    description: "Tus datos estan protegidos con encriptacion de nivel bancario.",
  },
  {
    icon: CreditCard,
    title: "Multiples metodos",
    description: "Acepta tarjetas de credito, debito y transferencias bancarias.",
  },
  {
    icon: Lock,
    title: "Privacidad garantizada",
    description: "Tu informacion personal esta protegida bajo nuestra politica de datos.",
  },
]

export default function PagosPage() {
  return (
    <>
      <PageBanner
        title="Pasarela de pagos"
        description="Paga todo lo que necesites desde la comodidad de tu hogar. Rapido, seguro y sencillo."
        icon={CreditCard}
      />

      {/* Metodos de pago */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {metodosPago.map((metodo) => (
                <div
                  key={metodo.title}
                  className="bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <metodo.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-foreground mb-2">{metodo.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">{metodo.description}</p>
                  <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                    <a 
                      href={metodo.href} 
                      target={metodo.external ? "_blank" : undefined}
                      rel={metodo.external ? "noopener noreferrer" : undefined}
                    >
                      {metodo.cta}
                      {metodo.external ? <ExternalLink className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            {/* Consulta de saldo / estado de cuenta */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-12">
              <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                Consulta tu estado de cuenta
              </h2>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Ingresa tu numero de documento para consultar tu saldo y estado de cuenta actual.
              </p>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input 
                  type="text" 
                  placeholder="Numero de documento" 
                  className="h-12 flex-1"
                />
                <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
                  Consultar
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Seguridad ante todo</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Paga con total confianza
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {ventajas.map((ventaja) => (
              <div
                key={ventaja.title}
                className="text-center p-6"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <ventaja.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{ventaja.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{ventaja.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
