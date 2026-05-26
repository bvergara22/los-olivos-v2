import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, ChevronDown, FileDown, Phone } from "lucide-react"

/* ─── Equidad Seguros brand ──────────────────────────────────── */
const EQ_GREEN  = "#2e8b3b"
const EQ_DARK   = "#1a5024"
const EQ_DARKER = "#113318"
const EQ_LIGHT  = "#f0f7f2"
const EQ_LIME   = "#76c85c"

export const metadata: Metadata = {
  title: "Equidad Seguros | Beneficio incluido en tu plan Los Olivos",
  description:
    "Como afiliado a Los Olivos Cartagena accedes a coberturas de Equidad Seguros sin costo adicional. Seguro de vida, accidentes y más.",
}

/* ─── Data ───────────────────────────────────────────────────── */
const coberturas = [
  {
    titulo: "Seguro de Vida",
    desc: "[DESCRIPCIÓN: Tipo de cobertura, monto asegurado, beneficiarios cubiertos]",
  },
  {
    titulo: "Accidentes Personales",
    desc: "[DESCRIPCIÓN: Coberturas por incapacidad temporal, permanente y muerte accidental]",
  },
  {
    titulo: "Asistencia Médica",
    desc: "[DESCRIPCIÓN: Orientación médica telefónica, disponibilidad, especialidades]",
  },
  {
    titulo: "Asistencia Jurídica",
    desc: "[DESCRIPCIÓN: Tipo de asesoría, temas cubiertos, canales de atención]",
  },
  {
    titulo: "[COBERTURA 5]",
    desc: "[DESCRIPCIÓN: Descripción del servicio adicional]",
  },
  {
    titulo: "[COBERTURA 6]",
    desc: "[DESCRIPCIÓN: Descripción del servicio adicional]",
  },
]

const pasos = [
  {
    num: "01",
    titulo: "Solicita el servicio",
    desc: "[DESCRIPCIÓN: Canales de contacto, datos que debe tener el usuario, horarios]",
  },
  {
    num: "02",
    titulo: "Verifica tu cobertura",
    desc: "[DESCRIPCIÓN: Qué sucede después de la solicitud, tiempos de respuesta]",
  },
  {
    num: "03",
    titulo: "Recibe el beneficio",
    desc: "[DESCRIPCIÓN: Cómo se entrega el servicio, tiempos estimados, modalidades]",
  },
]

const faqs = [
  {
    q: "¿Quiénes tienen derecho a los beneficios?",
    a: "[RESPUESTA: Definir titulares elegibles, planes que aplican, condiciones de vigencia]",
  },
  {
    q: "¿Tiene costo adicional para el afiliado?",
    a: "[RESPUESTA: Indicar si es gratuito, excepciones, copagos si aplica]",
  },
  {
    q: "¿Cómo activo mi cobertura?",
    a: "[RESPUESTA: Proceso de activación, documentos necesarios, plazos]",
  },
  {
    q: "¿Qué hago en caso de siniestro?",
    a: "[RESPUESTA: Pasos a seguir, documentación requerida, canales de reporte]",
  },
  {
    q: "[PREGUNTA FRECUENTE 5]",
    a: "[RESPUESTA 5]",
  },
]

const stats = [
  { valor: "[XX]+", etiqueta: "Años de experiencia" },
  { valor: "[XX]+", etiqueta: "Afiliados activos" },
  { valor: "24/7", etiqueta: "Línea de atención" },
  { valor: "AAA", etiqueta: "Calificación cooperativa" },
]

/* ─── Placeholder de imagen ─────────────────────────────────── */
function ImgSlot({
  label,
  hint,
  className = "",
  style,
}: {
  label: string
  hint?: string
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <div
      className={`rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 flex flex-col items-center justify-center text-center p-6 ${className}`}
      style={style}
    >
      <svg className="w-10 h-10 text-gray-300 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <p className="text-gray-500 font-semibold text-sm">{label}</p>
      {hint && <p className="text-gray-400 text-xs mt-1">{hint}</p>}
    </div>
  )
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function EquidadSegurosLanding() {
  return (
    <div className="min-h-screen font-sans antialiased bg-white">

      {/* ── NAVBAR ──────────────────────────────────────────── */}
      <nav className="sticky top-0 z-50 shadow-sm" style={{ background: EQ_DARK }}>
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between gap-4">

          <div className="flex items-center gap-4">
            {/* Logo Equidad — reemplazar con <Image src="/logo-equidad.png" .../> */}
            <div
              className="h-9 px-4 rounded-lg flex items-center justify-center border"
              style={{ background: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
            >
              <span className="text-white font-bold text-sm tracking-wide">[LOGO EQUIDAD SEGUROS]</span>
            </div>

            <div className="w-px h-6 bg-white/20" />

            {/* Logo Los Olivos — reemplazar con <Image src="/logo-olivos.png" .../> */}
            <div
              className="h-9 px-4 rounded-lg flex items-center justify-center border"
              style={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(255,255,255,0.15)" }}
            >
              <span className="text-white/70 text-xs font-medium">[LOGO LOS OLIVOS]</span>
            </div>
          </div>

          <a
            href="tel:[NUMERO_EQUIDAD]"
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-white/90 hover:text-white transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            [NÚMERO DE LÍNEA]
          </a>
        </div>
      </nav>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden pt-16 pb-24 md:pt-20 md:pb-32"
        style={{ background: `linear-gradient(160deg, ${EQ_DARKER} 0%, ${EQ_DARK} 55%, #1f6b2e 100%)` }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full opacity-10"
          style={{ background: EQ_LIME }}
        />

        <div className="relative max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            <div className="space-y-7 text-white">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest border"
                style={{ borderColor: EQ_LIME, color: EQ_LIME }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current" />
                Alianza exclusiva · Los Olivos Cartagena
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.1]">
                [TITULAR PRINCIPAL<br className="hidden sm:block" />
                <span style={{ color: EQ_LIME }}>DEL HERO]</span>
              </h1>

              <p className="text-white/70 text-lg leading-relaxed max-w-md">
                [SUBTÍTULO: Descripción del beneficio, a quién aplica y por qué es valioso para el afiliado]
              </p>

              <ul className="space-y-3">
                {[
                  "Sin costo adicional para el afiliado",
                  "Activación automática con tu plan vigente",
                  "[BENEFICIO CLAVE 3]",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/85">
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

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href="#coberturas"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white transition-all hover:brightness-110 hover:scale-105 active:scale-95 shadow-lg"
                  style={{ background: EQ_GREEN }}
                >
                  Ver mis coberturas <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm border text-white transition-all hover:bg-white/10"
                  style={{ borderColor: "rgba(255,255,255,0.25)" }}
                >
                  <Phone className="w-4 h-4" /> Contactar asesor
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <ImgSlot
                label="Imagen principal del hero"
                hint="600 × 520 px · PNG o WebP sin fondo"
                style={{ minHeight: 340 }}
              />
            </div>
          </div>
        </div>

        <div className="absolute -bottom-px left-0 right-0 text-white" aria-hidden>
          <svg viewBox="0 0 1440 55" className="w-full block" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 28L60 32C120 36 240 44 360 42C480 40 600 28 720 24C840 20 960 26 1080 29C1200 32 1320 32 1380 31L1440 30V55H0Z" />
          </svg>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      <section className="py-8 sm:py-10" style={{ background: EQ_GREEN }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            {stats.map((s) => (
              <div key={s.etiqueta}>
                <p className="text-2xl sm:text-3xl font-display font-bold">{s.valor}</p>
                <p className="text-white/70 text-xs sm:text-sm mt-1 font-medium">{s.etiqueta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COBERTURAS ──────────────────────────────────────── */}
      <section id="coberturas" className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">

          <div className="text-center mb-12 md:mb-16 max-w-2xl mx-auto">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-4"
              style={{ background: EQ_GREEN }}
            >
              Incluido en tu plan
            </span>
            <h2
              className="font-display text-3xl md:text-4xl font-bold leading-tight"
              style={{ color: EQ_DARK }}
            >
              ¿Qué cubre tu beneficio<br className="hidden sm:block" /> Equidad Seguros?
            </h2>
            <p className="text-gray-500 mt-4">
              [SUBTÍTULO: Resumen de los beneficios clave y para quiénes aplican]
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {coberturas.map((c) => (
              <div
                key={c.titulo}
                className="flex flex-col gap-4 rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ boxShadow: "0 2px 12px rgba(30,80,36,0.05)" }}
              >
                {/* Foto de la cobertura */}
                <ImgSlot
                  label={`Foto: ${c.titulo}`}
                  hint="400 × 220 px"
                  className="rounded-none border-0 border-b border-gray-100 bg-gray-50"
                  style={{ minHeight: 160 }}
                />
                <div className="px-5 pb-5 flex flex-col gap-2">
                  <h3 className="font-semibold text-sm" style={{ color: EQ_DARK }}>{c.titulo}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Nota gratuita */}
          <div
            className="mt-8 rounded-2xl p-5 flex items-start gap-4 border"
            style={{ background: EQ_LIGHT, borderColor: `${EQ_GREEN}25` }}
          >
            <div
              className="w-2 self-stretch rounded-full flex-shrink-0"
              style={{ background: EQ_GREEN }}
            />
            <p className="text-sm" style={{ color: EQ_DARK }}>
              <strong>Todos los servicios son gratuitos</strong> para titulares y beneficiarios con plan activo y vigente en Los Olivos Cartagena. [AGREGAR EXCEPCIONES O CONDICIONES SI APLICA]
            </p>
          </div>
        </div>
      </section>

      {/* ── SPLIT: foto + puntos clave ──────────────────────── */}
      <section className="py-16 md:py-24" style={{ background: EQ_LIGHT }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <ImgSlot
              label="Foto de familia / concepto de seguro"
              hint="560 × 480 px · PNG o WebP"
              style={{ minHeight: 300 }}
            />

            <div className="space-y-6">
              <h2
                className="font-display text-3xl md:text-4xl font-bold leading-tight"
                style={{ color: EQ_DARK }}
              >
                [TÍTULO SECCIÓN]
              </h2>
              <p className="text-gray-500 leading-relaxed">
                [PÁRRAFO: Descripción extendida del beneficio o valor diferencial]
              </p>
              <ul className="space-y-3">
                {[
                  "[PUNTO CLAVE 1]",
                  "[PUNTO CLAVE 2]",
                  "[PUNTO CLAVE 3]",
                  "[PUNTO CLAVE 4]",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 text-white text-[10px] font-bold mt-0.5"
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

      {/* ── CÓMO ACCEDER ────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="text-center mb-12 md:mb-16 max-w-xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold" style={{ color: EQ_DARK }}>
              ¿Cómo accedo a mis beneficios?
            </h2>
            <p className="text-gray-500 mt-4">[SUBTÍTULO: Descripción breve del proceso]</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {pasos.map((p, i) => (
              <div key={p.num} className="relative flex flex-col items-center text-center md:items-start md:text-left">
                {i < pasos.length - 1 && (
                  <div
                    className="hidden md:block absolute top-6 left-full w-full h-0.5 -translate-x-5"
                    style={{ background: `${EQ_LIME}50` }}
                  />
                )}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center font-display font-bold text-base text-white mb-5 flex-shrink-0 shadow-md"
                  style={{ background: EQ_GREEN }}
                >
                  {p.num}
                </div>
                <h3 className="font-display font-bold text-base mb-2" style={{ color: EQ_DARK }}>
                  {p.titulo}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOCUMENTOS ──────────────────────────────────────── */}
      <section className="py-14 md:py-20" style={{ background: EQ_LIGHT }}>
        <div className="max-w-6xl mx-auto px-5 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold" style={{ color: EQ_DARK }}>
                Documentos del beneficio
              </h2>
              <p className="text-gray-500 leading-relaxed">
                [DESCRIPCIÓN: Explicación de los documentos disponibles para descarga — póliza, condicionado, cartilla de beneficios, etc.]
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              {["[DOCUMENTO 1: Condicionado]", "[DOCUMENTO 2: Cartilla de beneficios]"].map((doc) => (
                <a
                  key={doc}
                  href="#"
                  className="flex items-center gap-3 px-5 py-4 rounded-2xl border-2 border-dashed bg-white hover:shadow-md transition-all text-sm font-semibold"
                  style={{ borderColor: `${EQ_GREEN}40`, color: EQ_DARK }}
                >
                  <FileDown className="w-5 h-5 flex-shrink-0" style={{ color: EQ_GREEN }} />
                  {doc}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-5 lg:px-8">
          <h2
            className="font-display text-3xl md:text-4xl font-bold text-center mb-10 md:mb-14"
            style={{ color: EQ_DARK }}
          >
            Preguntas frecuentes
          </h2>
          <div className="space-y-2">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl border overflow-hidden"
                style={{ borderColor: "#e5e7eb" }}
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none hover:bg-gray-50 transition-colors">
                  <span className="font-semibold text-sm" style={{ color: EQ_DARK }}>{faq.q}</span>
                  <ChevronDown
                    className="w-4 h-4 flex-shrink-0 group-open:rotate-180 transition-transform duration-200"
                    style={{ color: EQ_GREEN }}
                  />
                </summary>
                <div className="px-6 pb-5 border-t border-gray-100">
                  <p className="text-gray-500 text-sm leading-relaxed pt-4">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ───────────────────────────────────────── */}
      <section
        id="contacto"
        className="py-20 md:py-28 relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${EQ_DARKER} 0%, ${EQ_DARK} 100%)` }}
      >
        <div
          className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full opacity-10"
          style={{ background: EQ_LIME }}
        />
        <div className="relative max-w-3xl mx-auto px-5 text-center text-white space-y-6">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            [HEADLINE CTA FINAL]
          </h2>
          <p className="text-white/65 text-base sm:text-lg leading-relaxed max-w-xl mx-auto">
            [SUBTEXTO: Mensaje de cierre, urgencia o propuesta de valor final]
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-2">
            <a
              href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white transition-all hover:scale-105 hover:brightness-110 active:scale-95 shadow-xl"
              style={{ background: EQ_GREEN }}
            >
              Afiliarme ahora <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:[NUMERO_EQUIDAD]"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm border text-white transition-all hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.25)" }}
            >
              <Phone className="w-5 h-5" /> [NÚMERO DE CONTACTO]
            </a>
          </div>
          <div className="pt-4">
            <Link
              href="/planes/cartagena"
              className="text-sm hover:text-white/80 transition-colors"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              ← Volver a Planes Cartagena
            </Link>
          </div>
        </div>
      </section>

      {/* ── MINI FOOTER ─────────────────────────────────────── */}
      <footer className="py-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <div className="flex items-center gap-3">
            <span className="font-semibold" style={{ color: EQ_GREEN }}>La Equidad Seguros O.C.</span>
            <span>·</span>
            <span>En alianza con Los Olivos Cartagena</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-gray-600 transition-colors">[ENLACE LEGAL 1]</a>
            <span>·</span>
            <a href="#" className="hover:text-gray-600 transition-colors">[ENLACE LEGAL 2]</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
