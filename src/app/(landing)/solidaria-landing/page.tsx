import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Phone, MessageCircle, Heart, Activity, Stethoscope, Monitor, Scissors, Briefcase, type LucideIcon } from "lucide-react"

/* ─── Brand colors ───────────────────────────────────────────── */
const SOL_TEAL   = "#2bad9a"
const SOL_DARK   = "#1e8a7a"
const SOL_DARKER = "#136358"
const SOL_LIGHT  = "#f0fafa"
const SOL_ACCENT = "#5ecfbf"

export const metadata: Metadata = {
  title: "Solidaria | Solienvida SOS — Beneficio Los Olivos Cartagena",
  description:
    "Con Solienvida SOS de Los Olivos cuentas con respaldo económico ante accidentes, enfermedades graves, hospitalizaciones y situaciones inesperadas. Incluido en tu plan.",
}

/* ─── Data ───────────────────────────────────────────────────── */
const coberturas: { titulo: string; desc: string; icon: LucideIcon }[] = [
  {
    titulo: "Auxilio por fallecimiento",
    desc: "Apoyo económico para los beneficiarios en caso de fallecimiento del asegurado.",
    icon: Heart,
  },
  {
    titulo: "Enfermedades graves",
    desc: "Cobertura ante diagnósticos como cáncer, infarto, insuficiencia renal, accidente cerebrovascular y trasplante de órganos.",
    icon: Activity,
  },
  {
    titulo: "Hospitalización por accidente",
    desc: "Beneficio económico diario durante hospitalizaciones derivadas de accidentes cubiertos.",
    icon: Stethoscope,
  },
  {
    titulo: "Unidad de Cuidados Intensivos",
    desc: "Apoyo económico adicional durante permanencias en UCI por accidente.",
    icon: Monitor,
  },
  {
    titulo: "Cirugía ambulatoria por accidente",
    desc: "Respaldo económico para procedimientos quirúrgicos derivados de accidentes cubiertos.",
    icon: Scissors,
  },
  {
    titulo: "Auxilio por desempleo",
    desc: "Si pierdes tu empleo o presentas una incapacidad temporal prolongada, el seguro ayuda a mantener tu plan exequial activo por tres meses.",
    icon: Briefcase,
  },
]

const faqs = [
  {
    q: "¿Quiénes pueden acceder a nuestro servicio?",
    a: "Tanto el TITULAR como los BENEFICIARIOS registrados en un plan de Previsión Exequial de los Olivos Cartagena; siempre y cuando tengan parentesco en primer grado de consanguinidad con el titular, podrán disfrutar de las asistencias en vida.",
  },
  {
    q: "¿Cuándo puedo empezar a usar las asistencias?",
    a: "Una vez tu perfil esté activo en nuestro sistema y hayas completado el período de carencia establecido según el plan correspondiente, podrás acceder plenamente a los beneficios.",
  },
  {
    q: "¿Qué tipo de información se me requerirá al momento de solicitar las asistencias?",
    a: "Dependiendo del tipo de asistencia que requieras, como tus datos personales, el servicio que estás solicitando y una descripción del evento en cuestión. Estos datos resultan fundamentales para garantizar una coordinación eficiente y puntual de tu solicitud. En el caso de asistencias médicas, será necesario proporcionar los datos requeridos por el médico durante la consulta para asegurar una atención adecuada.",
  },
  {
    q: "¿Implica algún costo el producto?",
    a: "Nos complace informarte que nuestras asistencias son totalmente gratuitas y se encuentran integradas en los beneficios de nuestros planes de previsión integral, diseñados para brindar comodidad en la vida diaria.",
  },
]

/* ─── Page ───────────────────────────────────────────────────── */
export default function SolidariaLanding() {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="w-full bg-white">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/solidaria-banner.webp"
          alt="Protección para ti y tranquilidad para quienes más amas — Solidaria Los Olivos"
          className="w-full h-auto block"
        />
      </section>

      {/* ── INTRO ───────────────────────────────────────────── */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="mb-12">
            <h1
              className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-5"
              style={{ color: SOL_DARK }}
            >
              Protección para ti y tranquilidad para quienes más amas.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed text-justify">
              Cuenta con respaldo económico ante accidentes, enfermedades graves, hospitalizaciones y situaciones inesperadas que pueden afectar tu bienestar y el de tu familia con <strong style={{ color: SOL_TEAL }}>Solienvida SOS</strong>.
            </p>
          </div>

          {/* Split: imagen + beneficios */}
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="rounded-3xl overflow-hidden">
              <Image
                src="/solidaria-familia1.webp"
                alt="Familia protegida con Solidaria Los Olivos"
                width={700}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <span
                  className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-4"
                  style={{ background: SOL_TEAL }}
                >
                  Beneficios
                </span>
                <h2 className="font-display text-2xl md:text-3xl font-bold leading-tight" style={{ color: SOL_DARK }}>
                  Un respaldo que te acompaña cuando la vida cambia de rumbo.
                </h2>
                <p className="text-gray-500 mt-3 leading-relaxed text-justify">
                  Hay situaciones que no podemos prever, pero sí podemos prepararnos para enfrentarlas. Solienvida SOS es un seguro diseñado para brindarte apoyo económico y tranquilidad cuando atraviesas momentos difíciles.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  "Protección por accidentes",
                  "Cobertura por enfermedades graves",
                  "Auxilio por fallecimiento",
                  "Apoyo durante hospitalizaciones",
                  "Respaldo ante desempleo",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold"
                      style={{ background: SOL_TEAL }}
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

      {/* ── COBERTURAS PRINCIPALES ──────────────────────────── */}
      <section id="coberturas" className="py-16 md:py-24" style={{ background: SOL_LIGHT }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-4"
              style={{ background: SOL_TEAL }}
            >
              Incluido en tu plan
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: SOL_DARK }}>
              Coberturas principales
            </h2>
            <p className="text-gray-500 mt-4 leading-relaxed text-justify">
              La Aseguradora Solidaria en alianza con Los Olivos brinda protección para diferentes momentos de la vida.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {coberturas.map((c) => (
              <div
                key={c.titulo}
                className="bg-white rounded-2xl border p-6 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                style={{ borderColor: `${SOL_TEAL}25` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: `${SOL_TEAL}15` }}
                >
                  <c.icon className="w-5 h-5" style={{ color: SOL_TEAL }} />
                </div>
                <h3 className="font-display font-bold text-base" style={{ color: SOL_DARK }}>{c.titulo}</h3>
                <p className="text-gray-500 text-sm leading-relaxed text-justify">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Tagline */}
          <div className="mt-10 text-center">
            <p className="font-display text-xl md:text-2xl font-bold" style={{ color: SOL_DARK }}>
              Acompañándote más allá de los momentos difíciles.
            </p>
          </div>
        </div>
      </section>

      {/* ── IMAGEN FAMILIA ──────────────────────────────────── */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight" style={{ color: SOL_DARK }}>
                Protege tu tranquilidad y la de tu familia.
              </h2>
              <p className="text-gray-500 leading-relaxed text-justify">
                Los imprevistos pueden aparecer en cualquier momento. Contar con respaldo puede hacer una gran diferencia en la estabilidad de quienes más amas.
              </p>
              <p className="font-semibold" style={{ color: SOL_TEAL }}>
                Con Los Olivos, la tranquilidad comienza desde hoy.
              </p>
              <a
                href="https://wa.me/573233093435"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:brightness-110 hover:scale-105 active:scale-95 shadow-lg"
                style={{ background: SOL_TEAL }}
              >
                Quiero más información <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="rounded-3xl overflow-hidden order-1 lg:order-2">
              <Image
                src="/solidaria-familia2.webp"
                alt="Familia unida con respaldo de Solidaria"
                width={700}
                height={520}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-20" style={{ background: SOL_LIGHT }}>
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-center mb-10"
            style={{ color: SOL_DARK }}
          >
            Preguntas frecuentes
          </h2>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                name="faq-sol"
                className="group rounded-2xl border overflow-hidden bg-white"
                style={{ borderColor: `${SOL_TEAL}30` }}
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-sm" style={{ color: SOL_DARK }}>{faq.q}</span>
                  <ChevronDown
                    className="w-4 h-4 flex-shrink-0 group-open:rotate-180 transition-transform duration-200"
                    style={{ color: SOL_TEAL }}
                  />
                </summary>
                <div className="px-6 pb-5 border-t" style={{ borderColor: `${SOL_TEAL}15` }}>
                  <p className="text-gray-500 text-sm leading-relaxed pt-4 text-justify">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <section className="relative overflow-hidden py-14 md:py-16" style={{ background: SOL_DARKER }}>
        {/* Blobs decorativos */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full blur-3xl opacity-20" style={{ background: SOL_TEAL }} />
          <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] rounded-full blur-3xl opacity-15" style={{ background: SOL_ACCENT }} />
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
        />

        <div className="relative max-w-3xl mx-auto px-5 text-center space-y-5">
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white">
            Protege a tu familia
            <span style={{ color: SOL_ACCENT }}> con el respaldo</span> que merece
          </h2>
          <p className="text-white/50 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Tu plan de previsión con Los Olivos ya incluye este beneficio. Actívalo hoy.
          </p>

          <a
            href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white transition-all hover:scale-105 hover:brightness-110 active:scale-95 shadow-xl"
            style={{ background: `linear-gradient(135deg, ${SOL_TEAL}, ${SOL_ACCENT})` }}
          >
            Afiliarme ahora <ArrowRight className="w-4 h-4" />
          </a>

          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[100px]" style={{ background: "rgba(255,255,255,0.1)" }} />
            <span className="text-white/25 text-xs uppercase tracking-widest">o contáctanos</span>
            <div className="h-px flex-1 max-w-[100px]" style={{ background: "rgba(255,255,255,0.1)" }} />
          </div>

          <div className="inline-flex flex-col sm:flex-row items-center gap-0 rounded-xl overflow-hidden border" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
            <a href="https://wa.me/573142034106" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-6 py-3 w-full sm:w-auto hover:bg-white/5 transition-colors" style={{ background: "rgba(255,255,255,0.04)" }}>
              <MessageCircle className="w-4 h-4 flex-shrink-0" style={{ color: SOL_ACCENT }} />
              <div className="text-left">
                <p className="text-white/35 text-[9px] uppercase tracking-widest font-semibold">WhatsApp CAMI</p>
                <p className="text-white font-bold text-sm">314 203 4106</p>
              </div>
            </a>
            <div className="hidden sm:block w-px h-12" style={{ background: "rgba(255,255,255,0.08)" }} />
            <div className="block sm:hidden h-px w-full" style={{ background: "rgba(255,255,255,0.08)" }} />
            <a href="tel:3232641770" className="flex items-center gap-3 px-6 py-3 w-full sm:w-auto hover:bg-white/5 transition-colors" style={{ background: "rgba(255,255,255,0.04)" }}>
              <Phone className="w-4 h-4 flex-shrink-0" style={{ color: SOL_ACCENT }} />
              <div className="text-left">
                <p className="text-white/35 text-[9px] uppercase tracking-widest font-semibold">Línea de voz Solidaria</p>
                <p className="text-white font-bold text-sm">323 264 1770</p>
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
