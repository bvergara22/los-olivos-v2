"use client"

import { AgendaModal } from "@/components/los-olivos/agenda-modal"
import { BookOpen, CalendarCheck, Heart, Shield, Sparkles, X } from "lucide-react"
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
          <div className="w-7 h-7 rounded-full bg-vida-dark text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{e.n}</div>
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
    contenido: autocuidadoContenido,
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
                {recurso.categoria && <span className="font-semibold text-vida-dark">{recurso.categoria}</span>}
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

export function UnidadVidaContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [articuloAbierto, setArticuloAbierto] = useState<Recurso | null>(null)

  return (
    <>
      <AgendaModal open={modalOpen} onClose={() => setModalOpen(false)} variant="vida" />
      {articuloAbierto && (
        <ArticuloModal recurso={articuloAbierto} onClose={() => setArticuloAbierto(null)} />
      )}

      {/* Hero */}
      <section className="relative pt-8 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vida-dark/10 via-background to-vida-dark/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-vida-dark leading-tight text-balance">
                Unidad de Gestión<br />de las Emociones
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-4 md:mt-6 leading-relaxed text-justify">
                La <strong className="text-vida-dark">Unidad de Gestión de las Emociones (UGE)</strong> de Los Olivos nace para acompañar integralmente las experiencias emocionales de las personas y familias, promoviendo el equilibrio y cuidado emocional en cada etapa de la vida. A través de un enfoque humano y cercano, brindamos herramientas y acompañamiento que permiten vivir cada experiencia con mayor tranquilidad, comprensión y apoyo emocional.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Modalidad virtual y presencial", "Espacios de acompañamiento psicológicos", "Círculos de apoyo"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium text-vida-dark border border-vida-dark/30 bg-vida-dark/5 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative w-3/4 lg:w-full max-w-lg mx-auto">
              <Image src="/vida-secc-principal.webp" alt="Unidad de Gestión de las Emociones" width={500} height={380} priority className="w-full h-auto object-contain" />
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
            <span className="text-3xl md:text-4xl text-vida-dark block">Sanando Juntos</span>
          </div>
          <div className="relative rounded-3xl overflow-hidden mb-8 md:mb-10" style={{ background: "linear-gradient(135deg, #e65c36 0%, #c04a27 100%)" }}>
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="w-12 h-0.5 bg-white/30 mb-8" />
              <div className="max-w-3xl space-y-5">
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-2">Más Vida para ti</p>
                <p className="text-base md:text-lg leading-relaxed text-white/90 text-justify">
                  Reconocemos la importancia de cuidar las emociones como parte esencial del bienestar y la calidad de vida. Por eso, nuestra línea de acompañamiento psicológico{" "}
                  <span className="text-white font-semibold italic">Sanando Juntos</span> se orienta en brindar herramientas y acompañamiento emocional para ayudar a las personas y familias a vivir con mayor equilibrio, bienestar y plenitud.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-white/70 text-justify">
                  Mediante nuestras diversas asistencias, impulsamos el desarrollo de la resiliencia emocional de forma preventiva. Brindamos acompañamiento en situaciones vinculadas al estrés, la ansiedad, los vínculos interpersonales y el sentido de propósito individual.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-white/70 text-justify">
                  En Los Olivos, estamos convencidos de que velar por tu salud emocional es fundamental para alcanzar una mejor calidad de vida; cada sentimiento que abordamos representa una nueva posibilidad para generar bienestar y vitalidad en tu día a día.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Heart, title: "Bienestar emocional", desc: "Promovemos herramientas para fortalecer el equilibrio emocional y afrontar los desafíos cotidianos de manera saludable." },
              { icon: Shield, title: "Prevención emocional", desc: "Acompañamos el cuidado de las emociones antes de momentos críticos, fomentando hábitos de bienestar y salud mental." },
              { icon: Sparkles, title: "Crecimiento personal", desc: "Espacios diseñados para impulsar el autoconocimiento, la resiliencia y el desarrollo integral en cada etapa de vida." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-2xl p-6 flex flex-col gap-3 border border-border hover:border-vida-dark/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-vida-dark/10 text-vida-dark flex items-center justify-center"><Icon className="w-5 h-5" /></div>
                <h3 className="font-display font-semibold text-base text-vida-dark">{title}</h3>
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
            <span className="text-3xl md:text-4xl text-vida-dark block">Línea de acompañamiento</span>
          </div>
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-vida-dark/5 to-transparent border border-vida-dark/10 p-6 sm:p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
              {/* Columna izquierda: imagen + afiliados (afiliados solo en desktop) */}
              <div className="flex flex-col items-center lg:items-start gap-6">
                <Image src="/Vector-UGE-VIDA.webp" alt="Sanando Juntos en la vida" width={500} height={440} className="w-2/3 sm:w-1/2 lg:w-full h-auto object-contain" />
                <div className="w-full hidden lg:block">
                  <p className="text-xs font-semibold uppercase tracking-widest text-vida-dark mb-3">Al ser afiliado a Los Olivos accederás a</p>
                  <ul className="space-y-2.5">
                    {["Contenido educativo emocional", "Talleres de crecimiento personal", "Espacios de prevención emocional", "Programas por etapas de vida"].map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Columna derecha: texto + herramientas + afiliados (mobile) + botón */}
              <div className="flex flex-col gap-4 md:gap-5">
                <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-vida-dark">En vida</h3>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-vida-dark mb-2">¿Qué entendemos por vida?</p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify">
                    En Los Olivos entendemos que la vida está integrada por una diversidad de vivencias, vínculos, desafíos y transiciones que redefinen nuestra percepción y forma de habitar la realidad, como un proceso que merece ser acompañado desde el bienestar emocional, el equilibrio y el cuidado integral.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify mt-3">
                    Por eso, creamos espacios que ayudan a las personas y familias a fortalecer sus emociones, desarrollar herramientas para afrontar los desafíos cotidianos y construir una vida con mayor tranquilidad, propósito y bienestar.
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-vida-dark mb-3">Ofrecemos herramientas para gestionar</p>
                  <ul className="space-y-2 mb-3">
                    {["Estrés, ansiedad y emociones", "Cambios y vínculos personales", "Propósito y bienestar vital"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground italic">Buscamos fortalecer el equilibrio emocional y el bienestar integral de las personas.</p>
                </div>
                {/* Afiliados solo en mobile */}
                <div className="border-t border-border pt-4 lg:hidden">
                  <p className="text-xs font-semibold uppercase tracking-widest text-vida-dark mb-3">Al ser afiliado a Los Olivos accederás a</p>
                  <ul className="space-y-2.5">
                    {["Contenido educativo emocional", "Talleres de crecimiento personal", "Espacios de prevención emocional", "Programas por etapas de vida"].map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-1">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 h-10 px-6 rounded-md text-sm font-semibold bg-vida-dark text-white hover:bg-vida-dark/90 transition-colors"
                  >
                    Agenda aquí
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos de apoyo */}
      <section className="py-12 md:py-16 bg-vida-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-3xl md:text-4xl text-vida-dark block">Recursos de apoyo</span>
            <h2 className="font-display text-xl md:text-2xl text-vida-dark mt-2">Recomendaciones</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recursos.map((r) => {
              const Icon = r.icon
              return (
                <div key={r.title} className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5 hover:border-vida-dark/40 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-vida-dark/10 text-vida-dark flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-base leading-snug mb-3">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                  <button
                    onClick={() => setArticuloAbierto(r)}
                    className="text-sm font-semibold text-vida-dark hover:text-vida-dark transition-colors text-left"
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
