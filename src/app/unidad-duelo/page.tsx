import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, BookOpen } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Unidad de Duelo - Los Olivos Cartagena",
  description: "La unidad de duelo de Olivos Cartagena brinda orientacion y apoyo psicologico a usuarios que esten vivenciando la perdida de un ser querido.",
}

const asistencias = [
  "Acompanamientos psicologicos en procesos de inhumacion, exhumacion, cremacion y entrega de cenizas.",
  "Atencion psicologica domiciliaria.",
  "Talleres de duelo o encuentros de amor.",
  "Grupos de apoyo.",
  "Asistencias psicologicas individuales.",
]

const momentosSede = [
  "Brindamos un servicio de atencion inmediata a ninos, que consiste en orientar y acompanar de manera inmediata a los infantes ante la perdida de su ser querido.",
  "Realizamos el acercamiento con el contratante o la familia doliente, colocandonos a sus servicios conforme a nuestras habilidades psicologicas.",
  "Realizamos el acompanamiento inicial al recibir el homenaje en la sede.",
]

const momentosParque = [
  "Acompanamiento en procesos de inhumacion (asesoria y acompanamiento).",
  "Acompanamiento en procesos de exhumacion (asesoria y acompanamiento).",
  "Acompanamiento en procesos de cremacion (asesoria y acompanamiento).",
  "Acompanamiento en la entrega de cenizas.",
]

const articulos = [
  {
    title: "El proceso de duelo y sus implicaciones",
    excerpt: "El duelo es un proceso interno natural en el que el doliente atraviesa una serie de fases o tareas que conducen a la superacion de dicho proceso, ya sea por perdida de un ser querido, un familiar o trabajo.",
  },
  {
    title: "Autocuidado emocional en tiempos de crisis",
    excerpt: "Hoy por hoy las necesidades de nuestra sociedad son muy variadas. Desde hace un ano, vivimos para cuidarnos, muchas de las cosas buenas que antes teniamos nos toco dejar atras para cuidar lo vital en nuestras vidas.",
  },
  {
    title: "Que hacer en el acompañamiento a una persona en duelo?",
    excerpt: "Todos en algun momento de nuestra vida nos hemos visto enfrentados a situaciones complejas en donde nuestro sistema de creencias y experiencias vividas se ven afectadas.",
  },
]

export default function UnidadDueloPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#3e2455]/10 via-background to-[#240e36]/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-[#3e2455]">
                Unidad de gestion de las emociones
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                La unidad de duelo de Olivos Cartagena es el espacio que adaptamos para brindar orientacion y apoyo psicologico a usuarios que esten vivenciando la perdida de un ser querido, generando estrategias de afrontamiento que contribuyan a una mejor calidad de vida.
              </p>
            </div>
            <div className="relative w-3/4 md:w-full max-w-lg mx-auto">
              <Image
                src="/unidad-de-duelo-main.png"
                alt="Unidad de Duelo Los Olivos"
                aria-hidden
                width={600}
                height={500}
                className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-60 drop-shadow-[0_0_40px_rgba(206,78,88,0.4)]"
              />
              <Image
                src="/unidad-de-duelo-main.png"
                alt="Unidad de Duelo Los Olivos"
                width={600}
                height={500}
                priority
                className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Que se hace */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-3xl md:text-4xl text-[#3e2455] block">Nuestro pilar</span>
              <h2 className="font-display text-xl md:text-2xl text-[#240e36] mt-2 mb-4 text-balance">
                Que se hace?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                El pilar principal de nuestra unidad es brindar a cada usuario doliente un espacio para escuchar sus sentimientos de manera libre, voluntaria y gratuita. Estos servicios son atendidos por personal interdisciplinario y capacitado.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                En nuestra unidad de duelo ofrecemos las siguientes asistencias:
              </p>
              <ul className="space-y-3">
                {asistencias.map((asistencia, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-[#3e2455] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    {asistencia}
                  </li>
                ))}
              </ul>
            </div>

            {/* Citas de duelo form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
              <h3 className="font-display text-xl font-bold text-[#240e36] mb-6">
                Citas de duelo
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-[#240e36] mb-2 block">
                    Nombres y apellidos
                  </label>
                  <Input type="text" placeholder="Tu nombre completo" className="h-12 focus-visible:ring-[#a183b5] focus-visible:border-[#a183b5]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#240e36] mb-2 block">
                    Numero de cedula
                  </label>
                  <Input type="text" placeholder="Tu numero de documento" className="h-12 focus-visible:ring-[#a183b5] focus-visible:border-[#a183b5]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#240e36] mb-2 block">
                    Numero de celular
                  </label>
                  <Input type="tel" placeholder="Tu numero de celular" className="h-12 focus-visible:ring-[#a183b5] focus-visible:border-[#a183b5]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#240e36] mb-2 block">
                    Correo electronico
                  </label>
                  <Input type="email" placeholder="tu@correo.com" className="h-12 focus-visible:ring-[#a183b5] focus-visible:border-[#a183b5]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#240e36] mb-2 block">
                    Motivo de la consulta
                  </label>
                  <Textarea placeholder="Describenos el motivo de tu consulta" rows={3} className="focus-visible:ring-[#a183b5] focus-visible:border-[#a183b5]" />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#240e36] mb-2 block">
                    Fecha de la cita
                  </label>
                  <Input type="date" className="h-12 focus-visible:ring-[#a183b5] focus-visible:border-[#a183b5]" />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-xs text-muted-foreground">
                    Acepto los términos y condiciones y la política de tratamiento de datos personales.
                  </label>
                </div>
                <Button type="submit" size="lg" className="w-full bg-[#3e2455] text-white hover:bg-[#240e36]">
                  Tomar mi cita
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Momentos */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-[#3e2455] block">Acompañamiento integral</span>
            <h2 className="font-display text-xl md:text-2xl text-[#240e36] mt-2 text-balance">
              Momentos
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Brindamos acompañamiento psicologico a la comunidad doliente a traves de herramientas que les faciliten sobrellevar su proceso de duelo, promoviendo la sensibilizacion de la sociedad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* En sede */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h3 className="font-display font-bold text-xl text-[#240e36] mb-4">En sede</h3>
              <div className="relative w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/fachada-olivos.png"
                  alt="Sede Los Olivos"
                  width={600}
                  height={340}
                  className="w-full h-auto object-cover"
                />
              </div>
              <ol className="space-y-4">
                {momentosSede.map((momento, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <div className="w-6 h-6 rounded-full bg-[#3e2455] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    {momento}
                  </li>
                ))}
              </ol>
            </div>

            {/* En parque */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <h3 className="font-display font-bold text-xl text-[#240e36] mb-4">En parque</h3>
              <div className="relative w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/parque-cementerio.png"
                  alt="Parque Cementerio Los Olivos"
                  width={600}
                  height={340}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Al llegar a destino final, el profesional en salud mental acompanara en cada uno de estos procesos:
              </p>
              <ul className="space-y-3">
                {momentosParque.map((momento, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-[#3e2455] text-white flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    {momento}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recomendaciones / Articulos */}
      <section className="py-16 md:py-20 bg-[#3e2455]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-[#3e2455] block">Recursos de apoyo</span>
            <h2 className="font-display text-xl md:text-2xl text-[#240e36] mt-2 text-balance">
              Recomendaciones
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {articulos.map((articulo) => (
              <div
                key={articulo.title}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-[#3e2455]/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3e2455]/10 text-[#3e2455] flex items-center justify-center mb-4 group-hover:bg-[#3e2455] group-hover:text-white transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-[#240e36] mb-3">{articulo.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{articulo.excerpt}</p>
                <Button variant="outline" size="sm" className="gap-2 hover:bg-[#3e2455]/10 hover:border-[#3e2455] hover:text-[#3e2455]">
                  Leer más
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
