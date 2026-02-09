import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, PawPrint, Phone, Shield, Sparkles, Stethoscope, Truck } from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Plan Huellitas - Los Olivos Cartagena",
  description: "Proteccion especial para tus mascotas. Un plan pensado para darles el mejor cuidado en vida y un homenaje digno cuando partan.",
}

const beneficiosVida = [
  {
    title: "Consultas veterinarias telefonicas",
    description: "Accede a orientacion veterinaria profesional desde la comodidad de tu hogar, disponible cuando lo necesites.",
    icon: Phone,
  },
  {
    title: "Transporte de emergencia",
    description: "Servicio de transporte para tu mascota en caso de emergencias veterinarias.",
    icon: Truck,
  },
  {
    title: "Descuentos en salud veterinaria",
    description: "Obtiene descuentos exclusivos en clinicas veterinarias aliadas para consultas, vacunas y procedimientos.",
    icon: Stethoscope,
  },
]

const serviciosPostumos = [
  {
    title: "Cofre especial",
    description: "Un cofre digno y especial para la despedida de tu companero fiel.",
    icon: Heart,
  },
  {
    title: "Ceremonia de despedida",
    description: "Una ceremonia intima para honrar la memoria de tu mascota y los momentos compartidos.",
    icon: Sparkles,
  },
  {
    title: "Cremacion individual",
    description: "Servicio de cremacion individual con entrega de cenizas en urna conmemorativa.",
    icon: PawPrint,
  },
]

export default function HuellitasPage() {
  return (
    <>
      <PageBanner
        title="Plan Huellitas"
        description="Porque ellos tambien son familia. Un plan pensado para darles el mejor cuidado en vida y un homenaje digno cuando partan."
      />

      {/* Intro */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <PawPrint className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Proteccion integral para tus mascotas
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              En Los Olivos Cartagena entendemos que tus mascotas son parte de tu familia. Por eso creamos el Plan Huellitas, un programa de proteccion que cuida de ellos en cada etapa de su vida.
            </p>
          </div>
        </div>
      </section>

      {/* Beneficios en Vida */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Cuidado en vida</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Beneficios para el bienestar de tu mascota
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Disfruta de beneficios exclusivos que te ayudan a mantener la salud y bienestar de tu companero.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {beneficiosVida.map((beneficio) => (
              <div
                key={beneficio.title}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <beneficio.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{beneficio.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{beneficio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Servicios Postumos */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Homenaje postumo</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Un adios digno para tu companero fiel
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Cuando llegue el momento de despedirte, te acompanamos con servicios pensados para honrar su memoria.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {serviciosPostumos.map((servicio) => (
              <div
                key={servicio.title}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <servicio.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{servicio.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{servicio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que elegirnos */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
                    Proteccion que se adapta a tu familia
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    El Plan Huellitas puede complementar tu plan exequial familiar, brindando cobertura integral para todos los miembros de tu hogar, incluyendo a tus mascotas.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Sin periodos de carencia para servicios basicos
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Cobertura para perros y gatos de cualquier raza y edad
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Tarifas accesibles que se ajustan a tu presupuesto
                    </li>
                    <li className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      Red de clinicas veterinarias aliadas en Cartagena
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Dale a tu mascota la proteccion que merece
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Conoce todos los detalles del Plan Huellitas y empieza a proteger a tu companero fiel hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <a href="https://planes.losolivoscartagena.com/" target="_blank" rel="noopener noreferrer">
                  Conoce mas
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <Link href="/cotizar">
                  Cotizar
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
