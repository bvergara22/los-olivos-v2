"use client"

import { AgendaModal } from "@/components/los-olivos/agenda-modal"
import { BookOpen, CalendarCheck, Check, Heart, Shield, Sparkles, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

type Recurso = {
  icon: typeof Heart
  title: string
  desc: string
  categoria?: string
  fecha?: string
  autor?: string
  contenido?: React.ReactNode
}

const autocuidadoContenido = (
  <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
    <p>
      Hoy por hoy las necesidades de nuestra sociedad son muy variadas, desde poder tomar los alimentos, trabajar para sobrevivir o sencillamente cuidarte lo suficiente para poder llegar a casa y saludar a los tuyos. Desde hace un año, vivimos para cuidarnos, muchas de las cosas buenas que antes teníamos no tocó dejarlas atrás para cuidar lo vital en nuestras vidas; es solo retroceder y mirar que la vida puede cambiarnos en un chasquido de dedos.
    </p>
    <p>Por eso queremos recomendarte los siguientes tips para cuidar de ti y tu salud mental en estos tiempos tan difíciles.</p>
    <div className="space-y-4 pt-2">
      {[
        { n: "1", titulo: "Valida tus emociones", texto: "Las emociones son un recurso que los seres humanos tenemos para hacer saber nuestro disgusto o agrado hacia algo, solamente se puede evidenciar por la empatía, vínculo o la experiencia que se tenga con algo o alguien. Por eso cuando notes que tus emociones sobrepasan tus pensamientos, déjalos fluir, está bien estar mal." },
        { n: "2", titulo: "Verifica tus redes de apoyo", texto: "Este término es muy común por estas épocas. Averigua con quiénes puedes contar cuando te sientas mal, verifica las amistades que te hacen sentir bien y en calma." },
        { n: "3", titulo: "Evita la sobreinformación", texto: "Las redes sociales nos informan el curso de las circunstancias sociales y médicas del país, pero si quieres estar realmente informado, busca redes o programas que te den tranquilidad y veracidad en la información." },
        { n: "4", titulo: 'Haz un "detox"', texto: "Este proceso básicamente es utilizado para poder eliminar toxinas en el cuerpo. Para la salud mental, sucede lo mismo, si lo deseas puedes cerrar redes por un tiempo o retomar actividades que te generen bienestar." },
        { n: "5", titulo: "Ten paciencia", texto: "Es mejor pensar en positivo ante las circunstancias, recuerda que todas las cosas en cualquier momento regresan a su normalidad." },
      ].map((e) => (
        <div key={e.n} className="flex gap-4">
          <div className="w-7 h-7 rounded-full bg-duelo-main text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{e.n}</div>
          <div>
            <p className="font-semibold text-foreground mb-1">{e.titulo}</p>
            <p>{e.texto}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const recursos: Recurso[] = [
  {
    icon: Heart,
    title: "El proceso de duelo y sus implicaciones",
    desc: "El duelo es un proceso interno natural en el que aprendemos a vivir con la ausencia. Conoce las etapas que lo conforman y cómo acompañarte en este camino.",
    categoria: "Noticias",
    fecha: "12-6-2020",
    autor: "Psicóloga Lina Cortina Roa",
    contenido: (
      <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
        <p>El duelo es un proceso interno natural en el que el doliente atraviesa una serie de fases o tareas que conducen a la superación de dicho proceso, ya sea por perdida de un ser querido, un familiar o trabajo.</p>
        <p>Sobrellevar la pérdida de un ser querido o amigo es de las experiencias más fuertes que una persona puede afrontar. Tener que imaginar una vida sin esa persona con la cual se vivió tantos momentos e intentar salir adelante genera un malestar para el deudo.</p>
        <p>Cabe resaltar que toda persona tiene habilidades de afrontamiento y manifestaciones del duelo diferentes que generan mecanismos para afrontar la perdida; es de allí, donde se hace más complicado la comprensión de los procesos de duelo. Así mismo, tienen influencia los lazos establecidos con el ser querido, las circunstancias que conllevan al deceso y la concientización de la posible muerte del ser querido (duelo anticipado).</p>
        <p>Aceptar la muerte de un ser querido puede tomar tiempo ya sea meses o años; lo cierto es que no existe un tiempo "normal" para afrontar la perdida, cada persona sabe a qué tiempo darle reinicio a su vida y aprender a vivir con la ausencia del ser querido. Existen unas etapas propias del duelo de las cuales no necesariamente debemos hacer cumplimiento a cabalidad, todo depende de los recursos emocionales y las redes sociales que acompañen al deudo:</p>
        <div className="space-y-4 pt-2">
          {[
            { n: "1", titulo: "Etapa de la negación", texto: "Esa negación puede inicialmente amortiguar el golpe de la muerte de un ser querido y aplazar parte del dolor, pero esta etapa no puede ser indefinida porque en algún momento chocará con la realidad." },
            { n: "2", titulo: "Etapa de la ira", texto: "En esta fase son característicos los sentimientos de rabia y resentimiento, así como la búsqueda de responsables o culpables. La ira aparece ante la frustración de que la muerte es irreversible, de que no hay solución posible y se puede proyectar esa rabia hacia el entorno, incluidas otras personas allegadas." },
            { n: "3", titulo: "Etapa de la negociación", texto: "En esta fase las personas fantasean con la idea de que se puede revertir o cambiar el hecho de la muerte. Es común preguntarse ¿qué habría pasado si...? o pensar en estrategias que habrían evitado el resultado final, como ¿y si hubiera hecho esto o lo otro?" },
            { n: "4", titulo: "Etapa de la depresión", texto: "La tristeza profunda y la sensación de vacío son características de esta fase, cuyo nombre no se refiere a una depresión clínica, sino a un conjunto de emociones vinculadas a la tristeza naturales ante la pérdida de un ser querido. Algunas personas pueden sentir que no tienen incentivos para continuar viviendo en su día a día sin la persona que murió y pueden aislarse de su entorno." },
            { n: "5", titulo: "Etapa de la aceptación", texto: "Una vez aceptada la pérdida, las personas en duelo aprenden a convivir con su dolor emocional en un mundo en el que el ser querido ya no está. Con el tiempo recuperan su capacidad de experimentar alegría y placer." },
          ].map((e) => (
            <div key={e.n} className="flex gap-4">
              <div className="w-7 h-7 rounded-full bg-duelo-main text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{e.n}</div>
              <div>
                <p className="font-semibold text-foreground mb-1">{e.titulo}</p>
                <p>{e.texto}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="pt-2">Ahora bien, teniendo en cuenta el concepto de duelo y sus etapas, es válido hablar acerca de las implicaciones de un inadecuado proceso de duelo. El duelo puede llegar a significar un problema de atención psicológica, siempre y cuando afecte a varias áreas o ámbitos de la vida (familia, trabajo, amigos, escuela) y las manifestaciones emocionales afecten la ejecución de tareas vitales para la supervivencia (falta de sueño, de apetito, de autocuidado etc.)</p>
        <p>Estaríamos hablando de un duelo patológico, el cual consiste en aquel en el que se da alteraciones en el curso y la intensidad del duelo, ya sea por exceso o por defecto. Para este caso, el psicólogo clínico es el profesional idóneo para su atención.</p>
        <p>El papel de este profesional radica en ayudar a las personas a manejar de forma más productiva el temor, el sentimiento de culpa o la ansiedad que viene ligada a la pérdida del ser querido. Los psicólogos se encargaran de brindarle una atención personalizada enfocada en la búsqueda y establecimiento de estrategias para superar la perdida, todo esto a través de psicoterapia.</p>
      </div>
    ),
  },
  {
    icon: BookOpen,
    title: "Autocuidado emocional en tiempos de crisis",
    desc: "Hoy por hoy las necesidades de nuestra mente son prioritarias. Descubre rutinas que fortalecen el bienestar emocional y ayudan a superar los momentos más difíciles.",
    categoria: "Vida",
    fecha: "6-5-2021",
    contenido: autocuidadoContenido,
  },
  {
    icon: CalendarCheck,
    title: "Qué hacer en el acompañamiento a una persona en duelo",
    desc: "Todos en algún momento de nuestra vida tenemos el desafío de acompañar a alguien en donde nuestra presencia y palabras son el mejor apoyo para sanar.",
    categoria: "Vida",
    fecha: "6-5-2021",
    contenido: autocuidadoContenido,
  },
]

function ArticuloModal({ recurso, onClose }: { recurso: Recurso; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", fn)
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", fn)
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-card rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-6 border-b border-border flex-shrink-0">
          <div className="space-y-1">
            {(recurso.categoria || recurso.fecha) && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                {recurso.categoria && <span className="font-semibold text-duelo-main">{recurso.categoria}</span>}
                {recurso.categoria && recurso.fecha && <span>·</span>}
                {recurso.fecha && <span>{recurso.fecha}</span>}
                {recurso.autor && <><span>·</span><span>{recurso.autor}</span></>}
              </div>
            )}
            <h2 className="font-display font-bold text-lg md:text-xl text-foreground leading-snug">{recurso.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center flex-shrink-0 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-y-auto p-6 flex-1">
          {recurso.contenido}
        </div>
      </div>
    </div>,
    document.body
  )
}

export function UnidadDueloContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [articuloAbierto, setArticuloAbierto] = useState<Recurso | null>(null)

  return (
    <>
      <AgendaModal open={modalOpen} onClose={() => setModalOpen(false)} />
      {articuloAbierto && (
        <ArticuloModal recurso={articuloAbierto} onClose={() => setArticuloAbierto(null)} />
      )}

      {/* Hero */}
      <section className="relative pt-8 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-duelo-main/10 via-background to-duelo-dark/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-duelo-dark leading-tight text-balance">
                Unidad de Gestión<br />de las Emociones
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-4 md:mt-6 leading-relaxed">
                En Los Olivos Cartagena transformamos la unidad de duelo en una <strong className="text-duelo-dark">Unidad de Gestión Emocional</strong> con el objetivo de ofrecer un acompañamiento psicológico y orientación integral a sus afiliados. Esta evolución busca fortalecer el apoyo en el manejo de las emociones a lo largo de toda su vida, extendiendo el servicio más allá de las situaciones de duelo y los momentos difíciles.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Modalidad virtual y presencial", "Espacios de acompañamiento psicológicos", "Círculos de apoyo"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium text-duelo-main border border-duelo-main/30 bg-duelo-main/5 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-duelo-main flex-shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative w-3/4 lg:w-full max-w-lg mx-auto">
              <Image src="/VECTOR_UNIDAD_PRINCIPAL.png" alt="Unidad de Gestión de las Emociones" width={500} height={380} priority className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-px left-0 right-0 z-20 text-card" aria-hidden>
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
          </svg>
        </div>
      </section>

      {/* Sanando Juntos */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="text-3xl md:text-4xl text-duelo-main block">Sanando Juntos</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">Línea de Acompañamiento Psicológico</h2>
          </div>
          <div className="relative rounded-3xl overflow-hidden mb-8 md:mb-10" style={{ background: "linear-gradient(135deg, #3e2455 0%, #240e36 100%)" }}>
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="w-12 h-0.5 bg-white/30 mb-8" />
              <div className="max-w-3xl space-y-5">
                <p className="text-base md:text-lg leading-relaxed text-white/90">
                  Reconocemos la importancia fundamental del equilibrio emocional y la salud mental. Por ello, hemos desarrollado nuestra Línea de Acompañamiento Psicológico{" "}
                  <span className="text-white font-semibold">"Sanando Juntos"</span>, un servicio diseñado para promover el bienestar, la prevención de riesgos psicosociales y el mantenimiento del equilibrio emocional de todos nuestros afiliados y sus familias en todas las etapas de su vida.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-white/70">
                  Nuestro principal objetivo es ir más allá del apoyo reactivo, enfocándonos en el fomento activo del crecimiento personal y la plena experiencia y disfrute de la vida. Entendemos el bienestar no solo como la ausencia de malestar, sino como la capacidad de desarrollarse plenamente y afrontar los desafíos de la vida con resiliencia y optimismo.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Heart, title: "Bienestar integral", desc: "Equilibrio emocional y salud mental para nuestros afiliados y sus familias en todas las etapas de la vida." },
              { icon: Shield, title: "Prevención", desc: "Identificación y prevención de riesgos psicosociales antes de que se conviertan en una crisis." },
              { icon: Sparkles, title: "Crecimiento personal", desc: "Fomento activo del desarrollo personal, la resiliencia y el disfrute pleno de cada experiencia de vida." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-2xl p-6 flex flex-col gap-3 border border-border hover:border-duelo-main/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-duelo-main/10 text-duelo-main flex items-center justify-center"><Icon className="w-5 h-5" /></div>
                <h3 className="font-display font-semibold text-base text-duelo-dark">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Líneas de acompañamiento */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-3xl md:text-4xl text-duelo-main block">Nuestras líneas</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">de acompañamiento</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-duelo-main/5 flex justify-center items-end px-8 pt-8">
                <Image src="/Vector-UGE-VIDA.png" alt="Sanando Juntos en la vida" width={380} height={300} className="h-96 w-auto object-contain" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl text-duelo-dark mb-4">En Vida</h3>
                <div className="flex-1 flex flex-col gap-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">Esta línea de acompañamiento psicológica está enfocada en el bienestar, la prevención y el equilibrio emocional de nuestros afiliados. Nuestro enfoque es el crecimiento del bienestar del afiliado, permitiéndole disfrutar plenamente de las experiencias de la vida. Ofrecemos un acompañamiento integral y continuo en cada una de sus etapas.</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-duelo-main mb-3">Componentes Clave</p>
                    <ul className="space-y-2.5">
                      {["Prevención y Promoción de la Salud Mental", "Apoyo en Etapas de Transición y Desarrollo", "Manejo de Situaciones de Crisis y Malestar Emocional", "Fomento de Experiencias Positivas"].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-duelo-main text-white flex items-center justify-center flex-shrink-0 mt-0.5"><Check className="w-3 h-3" /></div>
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button onClick={() => setModalOpen(true)} className="mt-6 self-start bg-duelo-main text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-duelo-dark transition-colors">Agenda aquí</button>
              </div>
            </div>
            <div className="bg-card rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-duelo-main/5 flex justify-center items-end px-8 pt-8">
                <Image src="/Vector-UGE-DUELO.png" alt="Sanando Juntos en el duelo" width={380} height={300} className="h-96 w-auto object-contain" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl text-duelo-dark mb-4">En Duelo</h3>
                <div className="flex-1 flex flex-col gap-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">Desde este espacio, ofrecemos apoyo psicológico centrado en la orientación y la escucha activa para facilitar el afrontamiento positivo del duelo. Nuestro enfoque aborda la pérdida desde una perspectiva de amor y honra, transformando el dolor en un espacio para la preservación viva de la memoria del ser querido, ayudando a integrar la pérdida como parte de su historia.</p>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-duelo-main mb-3">Cinco etapas del proceso</p>
                    <ol className="space-y-2.5">
                      {["Negación", "Ira", "Negociación", "Depresión", "Aceptación"].map((etapa, i) => (
                        <li key={etapa} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-duelo-main text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">{i + 1}</div>
                          <span className="text-sm text-foreground">{etapa}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <button onClick={() => setModalOpen(true)} className="mt-6 self-start bg-duelo-main text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-duelo-dark transition-colors">Agenda aquí</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos de apoyo */}
      <section className="py-12 md:py-16 bg-duelo-main/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-3xl md:text-4xl text-duelo-main block">Recursos de apoyo</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2">Recomendaciones</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recursos.map((r) => {
              const Icon = r.icon
              return (
                <div key={r.title} className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5 hover:border-duelo-main/40 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-duelo-main/10 text-duelo-main flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-base leading-snug mb-3">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                  <button
                    onClick={() => setArticuloAbierto(r)}
                    className="text-sm font-semibold text-duelo-main hover:text-duelo-dark transition-colors text-left"
                  >
                    Leer más →
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
