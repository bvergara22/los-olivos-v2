import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, BookOpen, Building2, Heart, TreePine } from "lucide-react"
import type { Metadata } from "next"

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
    title: "Que hacer en el acompanamiento a una persona en duelo?",
    excerpt: "Todos en algun momento de nuestra vida nos hemos visto enfrentados a situaciones complejas en donde nuestro sistema de creencias y experiencias vividas se ven afectadas.",
  },
]

export default function UnidadDueloPage() {
  return (
    <>
      <PageBanner
        title="Unidad de duelo"
        description="La unidad de duelo de Olivos Cartagena es el espacio que adaptamos para brindar orientacion y apoyo psicologico a usuarios que esten vivenciando la perdida de un ser querido, generando estrategias de afrontamiento que contribuyan a una mejor calidad de vida."
      />

      {/* Que se hace */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm font-medium text-primary">Nuestro pilar</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4 text-balance">
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
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    {asistencia}
                  </li>
                ))}
              </ul>
            </div>

            {/* Citas de duelo form */}
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm">
              <h3 className="font-display text-xl font-bold text-foreground mb-6">
                Citas de duelo
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Nombres y apellidos
                  </label>
                  <Input type="text" placeholder="Tu nombre completo" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Numero de cedula
                  </label>
                  <Input type="text" placeholder="Tu numero de documento" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Numero de celular
                  </label>
                  <Input type="tel" placeholder="Tu numero de celular" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Correo electronico
                  </label>
                  <Input type="email" placeholder="tu@correo.com" className="h-12" />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Motivo de la consulta
                  </label>
                  <Textarea placeholder="Describenos el motivo de tu consulta" rows={3} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Fecha de la cita
                  </label>
                  <Input type="date" className="h-12" />
                </div>
                <div className="flex items-start gap-2">
                  <input type="checkbox" id="terms" className="mt-1" />
                  <label htmlFor="terms" className="text-xs text-muted-foreground">
                    Acepto los terminos y condiciones y la politica de tratamiento de datos personales.
                  </label>
                </div>
                <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
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
            <span className="text-sm font-medium text-primary">Acompanamiento integral</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Momentos
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Brindamos acompanamiento psicologico a la comunidad doliente a traves de herramientas que les faciliten sobrellevar su proceso de duelo, promoviendo la sensibilizacion de la sociedad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* En sede */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">En sede</h3>
              </div>
              <ol className="space-y-4">
                {momentosSede.map((momento, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                    <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    {momento}
                  </li>
                ))}
              </ol>
            </div>

            {/* En parque */}
            <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <TreePine className="w-5 h-5" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground">En parque</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Al llegar a destino final, el profesional en salud mental acompanara en cada uno de estos procesos:
              </p>
              <ul className="space-y-3">
                {momentosParque.map((momento, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Heart className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    {momento}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recomendaciones / Articulos */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Recursos de apoyo</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Recomendaciones
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {articulos.map((articulo) => (
              <div
                key={articulo.title}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">{articulo.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{articulo.excerpt}</p>
                <Button variant="outline" size="sm" className="gap-2">
                  Leer mas
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
