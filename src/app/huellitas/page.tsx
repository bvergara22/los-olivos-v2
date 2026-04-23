import { MascotaForm } from "@/components/los-olivos/mascota-form"
import { Button } from "@/components/ui/button"
import { ArrowRight, PawPrint } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Plan Huellitas - Los Olivos Cartagena",
  description: "Protección especial para tus mascotas. Un plan pensado para darles el mejor cuidado en vida y un homenaje digno cuando partan.",
}

const asistencias = [
  "Consulta veterinaria telefónica",
  "Orientación médica veterinaria telefónica",
  "Traslado de la mascota en caso de enfermedad o accidente",
  "Medicamentos en caso de accidente",
  "Vacuna de refuerzo en la red veterinaria",
  "Asistencia legal y asistencia exequial",
]

export default function HuellitasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-8 pb-12 md:pt-12 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-[auto_auto] gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Texto */}
            <div className="space-y-6 text-center md:text-left order-1 md:col-start-1 md:row-start-1">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <PawPrint className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-primary">Protección para mascotas</span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
                Plan Huellitas
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Porque ellos también son familia. En Los Olivos Cartagena entendemos que tus mascotas merecen el mismo amor y cuidado que el resto de tu hogar.
                </p>
                <p>
                  Con el Plan Huellitas, tu compañero fiel tendrá cobertura en vida con asistencia veterinaria, y un homenaje digno cuando llegue el momento de partir.
                </p>
                <p className="font-display font-bold text-foreground text-lg">
                  ¡Porque cada huella que dejan merece ser recordada!
                </p>
              </div>
            </div>
            {/* Imagen */}
            <div className="relative w-3/4 md:w-full max-w-lg mx-auto order-2 md:col-start-2 md:row-start-1 md:row-span-2">
              <Image
                src="/huellitas-main.png"
                alt=""
                aria-hidden
                width={600}
                height={500}
                className="absolute w-full h-auto object-contain scale-[1.08] opacity-50"
                style={{ filter: "blur(32px) saturate(1.8) hue-rotate(10deg)" }}
              />
              <Image
                src="/huellitas-main.png"
                alt="Plan Huellitas Los Olivos"
                width={600}
                height={500}
                priority
                className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
            {/* Boton */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start order-3 md:col-start-1 md:row-start-2 md:self-start">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                  Afiliarme ahora <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Que ofrecemos + Formulario */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {/* Que ofrecemos */}
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-balance">
                ¿Qué le ofrecemos a tu mascota?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Con el Plan Huellitas tu mascota tendrá cobertura nacional con los mejores aliados veterinarios. Un plan pensado para acompañarte en cada etapa de la vida de tu compañero fiel, desde la asistencia en vida hasta el homenaje póstumo que merece.
              </p>
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-bold text-lg text-foreground mb-5">
                  Asistencias y coberturas
                </h3>
                <ul className="space-y-3">
                  {asistencias.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground">
                      <PawPrint className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Ya eres afiliado */}
            <div className="space-y-6">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-balance">
                  ¿Ya eres afiliado?
                </h2>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  Actualiza los datos de tu mascota aquí. Mantener la información de tu compañero al día nos permite brindarte un mejor servicio cuando más lo necesitas.
                </p>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <MascotaForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Demuéstrale a tu mascota cuánto la amas
            </h2>
            <p className="text-primary font-display font-bold text-xl mb-4">
              ¡Afilialа ahora!
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Conoce todos los detalles del Plan Huellitas y empieza a proteger a tu compañero fiel hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                  Afiliarme ahora <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <Link href="/cotizar">Cotizar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
