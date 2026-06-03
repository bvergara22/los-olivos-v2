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
    a: "El titular que está registrado en un plan de Previsión Integral de los Olivos Cartagena.",
  },
  {
    q: "¿Cuándo puedo empezar a usar las asistencias?",
    a: "Una vez tu perfil esté activo en nuestro sistema y hayas completado el período de carencia establecido según el plan correspondiente, podrás acceder plenamente a los beneficios.",
  },
  {
    q: "¿Qué tipo de información se requerirá al momento de solicitar las asistencias?",
    a: "Dependiendo del tipo de asistencia que requieras, como tus datos personales, el servicio que estás solicitando y una descripción del evento en cuestión.",
  },
  {
    q: "¿Implica algún costo el producto?",
    a: "El seguro de equidad está integrado exclusivamente en el plan Raíces. En caso de que usted disponga de un plan de previsión integral diferente y tenga interés en adquirir este seguro, será necesario cubrir un valor adicional.",
  },
  {
    q: "¿Qué planes incorporan esta cobertura sin valor extra?",
    a: "Plan Raíces y en planes personas o empresas de Los Olivos Cartagena donde el contrato estipule esta condición.",
  },
]

/* ─── Page ───────────────────────────────────────────────────── */
export default function EquidadSegurosLanding() {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">

      {/* ── HEADER ──────────────────────────────────────────── */}
      <header className="w-full bg-white border-b border-gray-100 shadow-xl relative z-10">
        <div className="max-w-6xl mx-auto px-5 lg:px-8 h-28 flex items-center justify-between gap-2">
          {/* Logo */}
          <div className="flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-equidad.webp" alt="Equidad Seguros" className="h-32 w-auto object-contain -ml-4" />
          </div>
          {/* Right: social + phone */}
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/OlivosCartagena" target="_blank" rel="noopener noreferrer" aria-label="Facebook" style={{ color: EQ_GREEN }} className="hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://www.instagram.com/olivos.ctg" target="_blank" rel="noopener noreferrer" aria-label="Instagram" style={{ color: EQ_GREEN }} className="hover:opacity-70 transition-opacity">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="tel:018000919538" className="flex items-center gap-2 text-white text-base font-bold px-6 py-3 rounded-full transition-opacity hover:opacity-90" style={{ background: EQ_GREEN }}>
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              018000 919538
            </a>
          </div>
        </div>
      </header>

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
