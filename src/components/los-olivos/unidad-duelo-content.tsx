"use client"

import { AgendaModal } from "@/components/los-olivos/agenda-modal"
import { BookOpen, CalendarCheck, Heart } from "lucide-react"
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
                La unidad de duelo de Los Olivos Cartagena nace para brindar un acompañamiento centrado en el manejo de las emociones, fortaleciendo la orientación y el apoyo psicológico a los afiliados a lo largo de su vida, más allá de los momentos difíciles.
              </p>
            </div>
            <div className="relative w-3/4 lg:w-full max-w-lg mx-auto">
              <Image
                src="/Vector-UGE.png"
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

      {/* Video */}
      <section className="py-8 md:py-12 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-3xl md:text-4xl text-duelo-main block">Sanando Juntos</span>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg bg-black">
            <video
              src="/video-sanando.mp4"
              controls
              className="w-full aspect-video md:aspect-[16/7] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Líneas de acompañamiento */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-3xl md:text-4xl text-duelo-main block">Nuestras líneas</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2">de acompañamiento</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {/* Vida */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-duelo-main/30 transition-all flex flex-col">
              <div className="bg-duelo-main/5 px-4 pb-0 pt-6 flex justify-center items-end">
                <Image
                  src="/Vector-UGE-VIDA.png"
                  alt="Sanando Juntos en la vida"
                  width={380}
                  height={300}
                  className="h-44 w-auto object-contain block"
                />
              </div>
              <div className="p-4 flex flex-col flex-1 gap-3">
                <div>
                  <h3 className="font-display font-bold text-xl text-duelo-dark leading-tight">
                    Sanando Juntos en la vida
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Es la línea de acompañamiento enfocada en el bienestar, la prevención y el equilibrio emocional de nuestros afiliados.
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="mt-auto self-start bg-duelo-main text-white font-semibold text-sm px-5 py-2 rounded-lg hover:bg-duelo-dark transition-colors"
                >
                  Agenda aquí
                </button>
              </div>
            </div>

            {/* Duelo  */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-duelo-main/30 transition-all flex flex-col">
              <div className="bg-duelo-main/5 px-4 pb-0 pt-6 flex justify-center items-end">
                <Image
                  src="/Vector-UGE-DUELO.png"
                  alt="Sanando Juntos en el duelo"
                  width={380}
                  height={300}
                  className="h-44 w-auto object-contain block"
                />
              </div>
              <div className="p-4 flex flex-col flex-1 gap-3">
                <div>
                  <h3 className="font-display font-bold text-xl text-duelo-dark leading-tight">
                    Sanando Juntos en el duelo
                  </h3>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    Es la línea de acompañamiento orientada a acompañar la pérdida desde el amor, la memoria y el sentido.
                  </p>
                </div>
                <button
                  onClick={() => setModalOpen(true)}
                  className="mt-auto self-start bg-duelo-main text-white font-semibold text-sm px-5 py-2 rounded-lg hover:bg-duelo-dark transition-colors"
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
