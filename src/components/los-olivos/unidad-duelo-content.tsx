"use client"

import { AgendaModal } from "@/components/los-olivos/agenda-modal"
import { BookOpen, CalendarCheck, Check, Heart, Shield, Sparkles } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const recursos = [
  {
    icon: Heart,
    title: "El proceso de duelo y sus implicaciones",
    desc: "El duelo es un proceso interno natural en el que aprendemos a vivir con la ausencia. Conoce las etapas que lo conforman y cómo acompañarte en este camino.",
  },
  {
    icon: BookOpen,
    title: "Autocuidado emocional en tiempos de crisis",
    desc: "Hoy por hoy las necesidades de nuestra mente son prioritarias. Descubre rutinas que fortalecen el bienestar emocional y ayudan a superar los momentos más difíciles.",
  },
  {
    icon: CalendarCheck,
    title: "Qué hacer en el acompañamiento a una persona en duelo",
    desc: "Todos en algún momento de nuestra vida tenemos el desafío de acompañar a alguien en donde nuestra presencia y palabras son el mejor apoyo para sanar.",
  },
]

export function UnidadDueloContent() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <AgendaModal open={modalOpen} onClose={() => setModalOpen(false)} />

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
              <Image
                src="/VECTOR_UNIDAD_PRINCIPAL.png"
                alt="Unidad de Gestión de las Emociones"
                width={500}
                height={380}
                priority
                className="w-full h-auto object-contain"
              />
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
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">
              Línea de Acompañamiento Psicológico
            </h2>
          </div>

          {/* Cita principal */}
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

          {/* Tres valores */}
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Heart,
                title: "Bienestar integral",
                desc: "Equilibrio emocional y salud mental para nuestros afiliados y sus familias en todas las etapas de la vida.",
              },
              {
                icon: Shield,
                title: "Prevención",
                desc: "Identificación y prevención de riesgos psicosociales antes de que se conviertan en una crisis.",
              },
              {
                icon: Sparkles,
                title: "Crecimiento personal",
                desc: "Fomento activo del desarrollo personal, la resiliencia y el disfrute pleno de cada experiencia de vida.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-2xl p-6 flex flex-col gap-3 border border-border hover:border-duelo-main/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-duelo-main/10 text-duelo-main flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
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

            {/* Vida */}
            <div className="bg-card rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-duelo-main/5 flex justify-center items-end px-8 pt-8">
                <Image
                  src="/Vector-UGE-VIDA.png"
                  alt="Sanando Juntos en la vida"
                  width={380}
                  height={300}
                  className="h-96 w-auto object-contain"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl text-duelo-dark mb-4">En Vida</h3>
                <div className="flex-1 flex flex-col gap-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Esta línea de acompañamiento psicológica está enfocada en el bienestar, la prevención y el equilibrio emocional de nuestros afiliados. Nuestro enfoque es el crecimiento del bienestar del afiliado, permitiéndole disfrutar plenamente de las experiencias de la vida. Ofrecemos un acompañamiento integral y continuo en cada una de sus etapas.
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-duelo-main mb-3">Componentes Clave</p>
                    <ul className="space-y-2.5">
                      {[
                        "Prevención y Promoción de la Salud Mental",
                        "Apoyo en Etapas de Transición y Desarrollo",
                        "Manejo de Situaciones de Crisis y Malestar Emocional",
                        "Fomento de Experiencias Positivas",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-full bg-duelo-main text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-sm text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="mt-6 self-start bg-duelo-main text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-duelo-dark transition-colors"
                >
                  Agenda aquí
                </button>
              </div>
            </div>

            {/* Duelo */}
            <div className="bg-card rounded-2xl overflow-hidden flex flex-col">
              <div className="bg-duelo-main/5 flex justify-center items-end px-8 pt-8">
                <Image
                  src="/Vector-UGE-DUELO.png"
                  alt="Sanando Juntos en el duelo"
                  width={380}
                  height={300}
                  className="h-96 w-auto object-contain"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="font-display font-bold text-xl text-duelo-dark mb-4">En Duelo</h3>
                <div className="flex-1 flex flex-col gap-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Desde este espacio, ofrecemos apoyo psicológico centrado en la orientación y la escucha activa para facilitar el afrontamiento positivo del duelo. Nuestro enfoque aborda la pérdida desde una perspectiva de amor y honra, transformando el dolor en un espacio para la preservación viva de la memoria del ser querido, ayudando a integrar la pérdida como parte de su historia.
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-duelo-main mb-3">Cinco etapas del proceso</p>
                    <ol className="space-y-2.5">
                      {["Negación", "Ira", "Negociación", "Depresión", "Aceptación"].map((etapa, i) => (
                        <li key={etapa} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-duelo-main text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            {i + 1}
                          </div>
                          <span className="text-sm text-foreground">{etapa}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="mt-6 self-start bg-duelo-main text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-duelo-dark transition-colors"
                >
                  Agenda aquí
                </button>
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
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
                  <a href="#" className="text-sm font-semibold text-duelo-main hover:text-duelo-dark transition-colors">
                    Leer más →
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
