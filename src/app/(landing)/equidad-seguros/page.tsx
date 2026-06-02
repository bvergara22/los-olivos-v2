import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Phone, Heart, Activity, Stethoscope, Shield, Home, Baby, type LucideIcon } from "lucide-react"

/* ─── Brand colors ───────────────────────────────────────────── */
const EQ_GREEN  = "#3aaa35"
const EQ_DARK   = "#1a6b1e"
const EQ_DARKER = "#0f4312"
const EQ_LIGHT  = "#f2faf2"
const EQ_LIME   = "#6DC140"

export const metadata: Metadata = {
  title: "Equidad Seguros | Seguro en Vida — Beneficio Los Olivos Cartagena",
  description:
    "Con el Seguro Equidad en Vida de Los Olivos cuentas con apoyo económico ante hospitalizaciones, enfermedades graves, invalidez o fallecimiento. Incluido en tu plan.",
}

/* ─── Data ───────────────────────────────────────────────────── */
const coberturas: { titulo: string; desc: string; icon: LucideIcon }[] = [
  {
    titulo: "Fallecimiento",
    desc: "Apoyo económico para tus seres queridos ante el fallecimiento del asegurado.",
    icon: Heart,
  },
  {
    titulo: "Enfermedades graves",
    desc: "Cobertura por diagnóstico de enfermedades graves como cáncer, infarto, accidente cerebrovascular, insuficiencia renal, Alzheimer, Parkinson, entre otras.",
    icon: Activity,
  },
  {
    titulo: "Hospitalización",
    desc: "Recibe renta diaria por hospitalización y hospitalización en UCI.",
    icon: Stethoscope,
  },
  {
    titulo: "Invalidez",
    desc: "Cobertura económica en caso de invalidez total o parcial.",
    icon: Shield,
  },
  {
    titulo: "Gastos del hogar",
    desc: "Apoyo económico mensual para gastos del hogar en momentos de dificultad.",
    icon: Home,
  },
  {
    titulo: "Auxilio de maternidad o paternidad",
    desc: "Auxilio económico por nacimiento o adopción para acompañar tu nueva etapa.",
    icon: Baby,
  },
]

const faqs = [
  {
    q: "¿Quiénes pueden acceder a nuestro servicio?",
    a: "Tanto el TITULAR como los BENEFICIARIOS registrados en un plan de Previsión Exequial de los Olivos Cartagena; siempre y cuando tengan parentesco en primer grado de consanguinidad con el titular, podrán disfrutar de las asistencias en vida.",
  },
  {
    q: "¿Cuándo puedo empezar a usar las asistencias?",
    a: "Una vez tu perfil esté activo en nuestro sistema y hayas completado el periodo de carencia establecido según el plan correspondiente, podrás acceder plenamente a los beneficios.",
  },
  {
    q: "¿Qué tipo de información se me requerirá al momento de solicitar las asistencias?",
    a: "Dependiendo del tipo de asistencia que requieras, como tus datos personales, el servicio que estás solicitando y una descripción del evento en cuestión. Estos datos resultan fundamentales para garantizar una coordinación eficiente y puntual de tu solicitud.",
  },
  {
    q: "¿Implica algún costo el producto?",
    a: "Nos complace informarte que nuestras asistencias son totalmente gratuitas y se encuentran integradas en los beneficios de nuestros planes de previsión integral, diseñados para brindar comodidad en la vida diaria.",
  },
]

/* ─── Page ───────────────────────────────────────────────────── */
export default function EquidadSegurosLanding() {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="w-full bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/equidad-banner.webp"
          alt="Protección para tu familia, respaldo para tu vida — Equidad Seguros Los Olivos"
          className="w-full h-auto block"
        />
      </section>

      {/* ── INTRO ───────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="mb-12">
            <h1
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5"
              style={{ color: EQ_DARK }}
            >
              Tu tranquilidad y la de tu familia merecen respaldo.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed text-justify">
              Con el <strong style={{ color: EQ_GREEN }}>Seguro Equidad en Vida</strong> de Los Olivos cuentas con apoyo económico y acompañamiento ante hospitalizaciones, enfermedades graves, invalidez o fallecimiento.
            </p>
          </div>

          {/* Split: imagen + beneficios */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/equidad-familia2.webp"
                alt="Familia protegida con Equidad Seguros Los Olivos"
                width={700}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-4"
                  style={{ background: EQ_GREEN }}
                >
                  Beneficios
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight" style={{ color: EQ_DARK }}>
                  Cobertura básica incluida en tu plan
                </h2>
                <p className="text-gray-500 mt-3 leading-relaxed text-justify">
                  Si el titular del plan fallece por una causa cubierta por la póliza, sus beneficiarios recibirán un apoyo económico que les brindará respaldo en ese momento difícil.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Protección en vida",
                  "Respaldo económico",
                  "Cobertura por hospitalización",
                  "Enfermedades graves",
                  "Apoyo para tu familia",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold"
                      style={{ background: EQ_GREEN }}
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── COBERTURAS ADICIONALES ──────────────────────────── */}
      <section id="coberturas" className="py-16 md:py-24" style={{ background: EQ_LIGHT }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-4"
              style={{ background: EQ_GREEN }}
            >
              Incluido en tu plan
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: EQ_DARK }}>
              Coberturas adicionales
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed text-justify">
              El Seguro Equidad en Vida en alianza con Los Olivos brinda apoyo económico cuando más lo necesitas. Te protege ante situaciones inesperadas como:
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coberturas.map((c) => (
              <div
                key={c.titulo}
                className="bg-white rounded-2xl border p-6 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                style={{ borderColor: `${EQ_GREEN}25` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${EQ_GREEN}15` }}
                >
                  <c.icon className="w-5 h-5" style={{ color: EQ_GREEN }} />
                </div>
                <h3 className="font-display font-bold text-base" style={{ color: EQ_DARK }}>{c.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="mt-10 text-center">
            <p className="font-display text-xl md:text-2xl font-bold" style={{ color: EQ_DARK }}>
              Porque cuidar de tu familia también significa estar preparado.
            </p>
          </div>
        </div>
      </section>

      {/* ── IMAGEN FAMILIA ──────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: EQ_DARK }}>
                Hoy puedes darle más tranquilidad al futuro de tu familia.
              </h2>
              <p className="text-gray-500 leading-relaxed text-justify">
                Proteger a quienes amas también significa tomar decisiones que les brinden respaldo, bienestar y acompañamiento.
              </p>
              <p className="font-semibold" style={{ color: EQ_GREEN }}>
                Con Los Olivos, la tranquilidad comienza desde hoy.
              </p>
              <a
                href="https://wa.me/573233093435"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:brightness-110 hover:scale-105 active:scale-95 shadow-lg"
                style={{ background: EQ_GREEN }}
              >
                Quiero más información <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/equidad-familia1.webp"
                alt="Familia unida con respaldo de Equidad Seguros"
                width={700}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: EQ_LIGHT }}>
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-center mb-10"
            style={{ color: EQ_DARK }}
          >
            Preguntas frecuentes
          </h2>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                name="faq-eq"
                className="group rounded-2xl border overflow-hidden bg-white"
                style={{ borderColor: `${EQ_GREEN}30` }}
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-sm" style={{ color: EQ_DARK }}>{faq.q}</span>
                  <ChevronDown
                    className="w-4 h-4 flex-shrink-0 group-open:rotate-180 transition-transform duration-200"
                    style={{ color: EQ_GREEN }}
                  />
                </summary>
                <div className="px-6 pb-5 border-t" style={{ borderColor: `${EQ_GREEN}15` }}>
                  <p className="text-gray-500 text-sm leading-relaxed pt-4 text-justify">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-14 md:py-16" style={{ background: EQ_DARKER }}>
        {/* Blobs decorativos */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-20" style={{ background: EQ_GREEN }} />
          <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full blur-3xl opacity-15" style={{ background: EQ_LIME }} />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="relative max-w-3xl mx-auto px-5 text-center space-y-5">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white">
            Protege a tu familia
            <span style={{ color: EQ_LIME }}> con el respaldo</span> que merece
          </h2>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Tu plan de previsión con Los Olivos ya incluye este beneficio. Actívalo hoy.
          </p>

          <a
            href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:scale-105 hover:brightness-110 active:scale-95 shadow-xl"
            style={{ background: `linear-gradient(135deg, ${EQ_GREEN}, ${EQ_LIME})` }}
          >
            Afiliarme ahora <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[100px]" style={{ background: "rgba(255,255,255,0.1)" }} />
            <span className="text-white/25 text-xs uppercase tracking-widest">o contáctanos</span>
            <div className="h-px flex-1 max-w-[100px]" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>

          <div className="inline-flex flex-col sm:flex-row items-center gap-0 rounded-xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <a href="tel:018000919538" className="flex items-center gap-3 px-6 py-3 w-full sm:w-auto hover:bg-white/5 transition-colors" style={{ background: "rgba(255,255,255,0.04)" }}>
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: EQ_LIME }} />
              <div className="text-left">
                <p className="text-white/35 text-[9px] uppercase tracking-widest font-semibold">Línea nacional</p>
                <p className="text-white font-bold text-sm">018000 919538</p>
              </div>
            </a>
            <div className="hidden sm:block w-px h-12" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="block sm:hidden h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }} />
            <a href="tel:#324" className="flex items-center gap-3 px-6 py-3 w-full sm:w-auto hover:bg-white/5 transition-colors" style={{ background: "rgba(255,255,255,0.04)" }}>
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: EQ_LIME }} />
              <div className="text-left">
                <p className="text-white/35 text-[9px] uppercase tracking-widest font-semibold">Línea telefónica</p>
                <p className="text-white font-bold text-sm">#324</p>
              </div>
            </a>
          </div>

          <div className="mt-2">
            <Link
              href="/planes/cartagena"
              className="text-sm hover:text-white/60 transition-colors"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              ← Volver a Planes Cartagena
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
