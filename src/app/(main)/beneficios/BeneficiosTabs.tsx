"use client"

import { TarjetaBeneficios } from "@/components/los-olivos/tarjeta-beneficios"
import {
  Activity,
  AlertCircle,
  Apple,
  ArrowRight,
  Banknote,
  Brain,
  Briefcase,
  Building2,
  Car,
  ChefHat,
  Clock,
  Dumbbell,
  GraduationCap,
  Heart,
  HeartHandshake,
  HeartPulse,
  Home,
  MapPin,
  PawPrint,
  Phone,
  Scissors,
  Shield,
  ShieldAlert,
  ShoppingBasket,
  Sparkles,
  Stethoscope,
  Users
} from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useRef, useState } from "react"

type Tab = "empresariales" | "personas"

/* ─────────────────────────── DATA ─────────────────────────── */

const orientacionProfesional = [
  { icon: Stethoscope,   title: "Orientación médica telefónica y/o virtual",          eventos: "12 eventos por año" },
  { icon: Heart,         title: "Orientación médica pediátrica telefónica y/o virtual", eventos: "6 eventos por año" },
  { icon: Sparkles,      title: "Orientación odontológica telefónica/virtual",          eventos: "6 eventos por año" },
  { icon: Brain,         title: "Orientación psicológica telefónica/virtual",           eventos: "6 eventos por año" },
  { icon: Apple,         title: "Orientación nutricional telefónica/virtual",           eventos: "6 eventos por año" },
  { icon: Activity,      title: "Orientación dermatológica telefónica/virtual",         eventos: "6 eventos por año" },
  { icon: Dumbbell,      title: "Clase virtual entrenador personal",                   eventos: "6 eventos por año" },
  { icon: GraduationCap, title: "Tutor académico telefónico",                          eventos: "2 eventos por año" },
  { icon: ChefHat,       title: "Orientación con chef telefónica y/o virtual",         eventos: "2 eventos por año" },
]

const solientevidaItems = [
  { icon: Shield,      title: "Fallecimiento Accidental" },
  { icon: Heart,       title: "Auxilio de fallecimiento" },
  { icon: AlertCircle, title: "Auxilio de enfermedades graves" },
  { icon: Briefcase,   title: "Auxilio de desempleo" },
  { icon: Activity,    title: "Renta por hospitalización (hasta 30 días)" },
  { icon: HeartPulse,  title: "Unidad de cuidados intensivos (15 dias)" },
  { icon: Scissors,    title: "Cirugia ambulatoria por accidente" },
  { icon: Home,        title: "Asistencia gratuita al Hogar" },
]


const asistenciasPersonas = [
  {
    icon: Home,
    title: "Asistencia domiciliaria gratuita",
    items: ["Vidrería", "Electricidad", "Cerrajería", "Cedularia", "Inhabitabilidad de la vivienda"],
  },
  {
    icon: PawPrint,
    title: "Asistencia mascotas",
    items: [
      "Consulta veterinaria telefónica",
      "Traslado de la mascota en caso de enfermedad o accidente",
      "Medicamentos a domicilio por accidente o enfermedad",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Asistencia psicológica",
    items: [
      "Mens Sana: Centro de ayuda psicológica personalizada (Sesiones a consideración del psicólogo)",
      "Unidad de apoyo al duelo",
    ],
  },
]

const segurosPersonas = [
  {
    icon: ShoppingBasket,
    title: "SoliCanasta",
    description: "Seguro de alimentación que cubre la canasta familiar por un año para el grupo familiar en caso de fallecimiento del titular.",
  },
  {
    icon: Banknote,
    title: "SoliRenta",
    description: "Renta diaria por hospitalización que cubre al afiliado titular.",
  },
  {
    icon: ShieldAlert,
    title: "SoliAccidente",
    description: "Indemnización en caso de fallecimiento que cubre al grupo familiar en caso de fallecimiento del titular.",
  },
  {
    icon: Home,
    title: "Asistencia al hogar",
    description: "Cubrimos eventos que representan emergencias en la vivienda del titular. La asistencia al hogar solo se prestará en las ciudades capitales.",
  },
]

const mascotaAsistencia = [
  {
    icon: Phone,
    title: "Orientación médica veterinaria telefónica o virtual",
    eventos: "6 eventos por año",
  },
  {
    icon: Stethoscope,
    title: "Envío de médico veterinario a domicilio o consulta en red veterinaria",
    descripcion: "Ingesta de cuerpos extraños, accidente, enfermedad",
    eventos: "2 eventos por año",
  },
  {
    icon: Car,
    title: "Traslado básico de la mascota en caso de emergencia por accidente",
    eventos: "2 eventos por año",
  },
  {
    icon: MapPin,
    title: "Servicio de paseo canino en caso de hospitalización del afiliado",
    eventos: "2 eventos por año",
  },
  {
    icon: Home,
    title: "Servicio de guardería para mascotas en caso de hospitalización del afiliado",
    eventos: "2 eventos por año",
  },
]

/* ─────────────────────────── COMPONENT ─────────────────────────── */

export function BeneficiosTabs() {
  const searchParams = useSearchParams()
  const [active, setActive] = useState<Tab>(
    searchParams.get("tab") === "personas" ? "personas" : "empresariales"
  )
  const topRef = useRef<HTMLDivElement>(null)

  const switchTab = (tab: Tab) => {
    setActive(tab)
    if (topRef.current) {
      const top = topRef.current.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: "instant" as ScrollBehavior })
    }
  }

  return (
    <div ref={topRef}>
      {/* ── Sticky tab switcher ── */}
      <div className="sticky top-20 z-40 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-center">
            <div className="flex w-full sm:w-auto items-center gap-1 bg-muted rounded-full p-1">
              <button
                onClick={() => switchTab("empresariales")}
                className={`flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  active === "empresariales"
                    ? "bg-vida-dark text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Building2 className="w-4 h-4 flex-shrink-0" />
                <span>Empresas</span>
              </button>
              <button
                onClick={() => switchTab("personas")}
                className={`flex flex-1 sm:flex-none items-center justify-center gap-2 px-4 sm:px-5 py-2.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  active === "personas"
                    ? "bg-vida-dark text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Users className="w-4 h-4 flex-shrink-0" />
                <span>Personas</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden">
        {/* ── Panel Empresariales ── */}
        <div style={{
          position: active === "empresariales" ? "relative" : "absolute",
          top: 0, left: 0, width: "100%",
          transform: active === "empresariales" ? "translateX(0)" : "translateX(-100%)",
          transition: "transform 300ms ease-in-out",
          pointerEvents: active === "empresariales" ? "auto" : "none",
        }}>

        {/* Asistencia Premium */}
        <section className="py-8 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12">
              <span className="text-2xl md:text-3xl lg:text-4xl text-vida-dark block">Asistencia Premium</span>
              <h2 className="font-display text-lg md:text-xl lg:text-2xl text-foreground mt-2 text-balance">
                Orientación profesional 24/7
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
                Asistencia las 24 horas, los 365 días del año. Orientación virtual y telefónica con profesionales en diversas áreas.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
              {orientacionProfesional.map((item) => (
                <div
                  key={item.title}
                  className="group bg-card rounded-2xl border border-border p-4 md:p-6 hover:border-vida-dark/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-vida-dark/10 text-vida-dark flex items-center justify-center flex-shrink-0 group-hover:bg-vida-dark group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-foreground text-xs md:text-sm mb-1.5 md:mb-2 leading-snug">{item.title}</h3>
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-vida-dark flex-shrink-0" />
                        {item.eventos}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solienvida */}
        <section className="py-8 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12">
              <span className="text-2xl md:text-3xl lg:text-4xl text-vida-dark block">Paquete Solienvida</span>
              <h2 className="font-display text-lg md:text-xl lg:text-2xl text-foreground mt-2 text-balance">
                Amparos y alternativas de cobertura
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
                Cuatro opciones de cobertura con protección ante accidentes, enfermedades graves, desempleo y más.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
              {solientevidaItems.map((item) => (
                <div
                  key={item.title}
                  className="group bg-card rounded-2xl border border-border p-4 md:p-6 hover:border-vida-dark/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-vida-dark/10 text-vida-dark flex items-center justify-center flex-shrink-0 group-hover:bg-vida-dark group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-foreground text-xs md:text-sm leading-snug">{item.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Botón micrositio */}
        <div className="flex justify-center py-8 md:py-10 bg-background">
          <a
            href="https://www.gag.com.co/micrositios/asistenciaenvida-losolivos-cartagena/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vida-dark text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-vida-dark/90 transition-colors shadow-sm"
          >
            Conocer más información
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        </div>{/* fin panel Empresariales */}

        {/* ── Panel Personas ── */}
        <div style={{
          position: active === "personas" ? "relative" : "absolute",
          top: 0, left: 0, width: "100%",
          transform: active === "personas" ? "translateX(0)" : "translateX(100%)",
          transition: "transform 300ms ease-in-out",
          pointerEvents: active === "personas" ? "auto" : "none",
        }}>

        {/* Asistencias */}
        <section className="py-8 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12">
              <span className="text-2xl md:text-3xl lg:text-4xl text-vida-dark block">Más que un plan</span>
              <h2 className="font-display text-lg md:text-xl lg:text-2xl text-foreground mt-2 text-balance">
                3 asistencias incluidas en tu afiliación
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
                Tu plan no solo te protege ante el fallecimiento — también te acompaña en vida con servicios de asistencia inmediata.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-4 md:gap-6">
              {asistenciasPersonas.map((a, i) => (
                <div
                  key={a.title}
                  className="group relative bg-card rounded-2xl border border-border p-4 md:p-6 hover:border-vida-dark/40 hover:shadow-xl transition-all overflow-hidden"
                >
                  <span className="absolute top-4 right-5 text-6xl font-display font-bold text-vida-dark/5 select-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-vida-dark/10 text-vida-dark flex items-center justify-center mb-4 md:mb-5 group-hover:bg-vida-dark group-hover:text-white transition-colors relative z-10">
                    <a.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="font-display font-bold text-sm md:text-lg text-foreground mb-3 md:mb-4 relative z-10">{a.title}</h3>
                  <ul className="space-y-2 md:space-y-2.5 relative z-10">
                    {a.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 md:gap-2.5">
                        <span className="text-vida-dark mt-1.5 text-xs flex-shrink-0">●</span>
                        <span className="text-xs md:text-sm text-muted-foreground leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Seguros */}
        <section className="py-8 md:py-16 bg-vida-dark relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12">
              <span className="text-2xl md:text-3xl lg:text-4xl text-white/80 block">Respaldo financiero</span>
              <h2 className="font-display text-lg md:text-xl lg:text-2xl text-white mt-2 text-balance">
                Seguros incluidos en tu plan
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {segurosPersonas.map((s) => (
                <div
                  key={s.title}
                  className="group bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 p-4 md:p-6 text-center hover:bg-white/20 transition-all"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/20 text-white flex items-center justify-center mx-auto mb-4 md:mb-5 group-hover:bg-white/30 transition-colors">
                    <s.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="font-display font-bold text-base md:text-xl text-white mb-2 md:mb-3">{s.title}</h3>
                  <p className="text-xs md:text-sm text-white/75 leading-relaxed">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Plan Raíces */}
        <section className="py-8 md:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
              {/* Texto introductorio */}
              <div>
                <span className="text-2xl md:text-3xl lg:text-4xl text-vida-dark block">Plan Raíces</span>
                <h2 className="font-display text-lg md:text-xl lg:text-2xl text-foreground mt-2 mb-6 text-balance">
                  Los Olivos · Equidad Seguros
                </h2>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  Ser parte del Plan Raíces de Los Olivos es contar con una protección integral que acompaña a tu familia en los momentos más importantes.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                  Entre Los Olivos y Equidad Seguros, este plan te brinda acceso a una serie de beneficios pensados para ofrecer respaldo, tranquilidad y bienestar, fortaleciendo el cuidado de tu núcleo familiar.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Cada uno de estos beneficios hace parte de una solución construida en alianza, que integra la experiencia y el compromiso de Los Olivos con el respaldo asegurador de Equidad Seguros, para brindarte acompañamiento real en los momentos que más lo necesitas.
                </p>
              </div>

              {/* Lista de beneficios */}
              <div className="bg-card rounded-2xl border border-border p-5 md:p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-vida-dark mb-5">Como afiliado, tienes derecho a:</p>
                <ul className="space-y-4">
                  {[
                    "Protección económica para tu familia en caso de fallecimiento por cualquier causa.",
                    "Cobertura en caso de invalidez, como apoyo ante situaciones que afecten tu capacidad laboral.",
                    "Indemnización adicional por muerte accidental y beneficios en caso de desmembración derivada de un accidente.",
                    "Apoyo económico ante el diagnóstico de enfermedades graves, contribuyendo a sobrellevar momentos de salud complejos.",
                    "Renta diaria por hospitalización, incluyendo estancias en unidad de cuidados intensivos (UCI) y periodos de recuperación posteriores.",
                    "Auxilio económico destinado a cubrir gastos del hogar en situaciones que impacten la estabilidad familiar.",
                    "Apoyo económico por maternidad o paternidad, acompañando la llegada de nuevos integrantes a la familia.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-vida-dark/10 text-vida-dark text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                      <p className="text-sm text-foreground leading-relaxed">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Mascota Light */}
        <section className="py-8 md:py-16 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12">
              <span className="text-2xl md:text-3xl lg:text-4xl text-vida-dark block">Mascota Light</span>
              <h2 className="font-display text-lg md:text-xl lg:text-2xl text-foreground mt-2 text-balance">
                Asistencia para tu mascota 24/7
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
                Porque ellos también son parte de la familia. Asistencia veterinaria, traslados, paseos y guardería.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 max-w-6xl mx-auto">
              {mascotaAsistencia.map((item) => (
                <div
                  key={item.title}
                  className="group bg-card rounded-2xl border border-border p-4 md:p-6 hover:border-vida-dark/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-3 md:gap-4">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-vida-dark/10 text-vida-dark flex items-center justify-center flex-shrink-0 group-hover:bg-vida-dark group-hover:text-white transition-colors">
                      <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold text-foreground text-xs md:text-sm mb-1.5 md:mb-2 leading-snug">{item.title}</h3>
                      {"descripcion" in item && item.descripcion && (
                        <p className="hidden md:block text-xs text-muted-foreground mb-2">{item.descripcion}</p>
                      )}
                      <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <Clock className="w-3 h-3 md:w-3.5 md:h-3.5 text-vida-dark flex-shrink-0" />
                        {item.eventos}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Botón micrositio */}
        <div className="flex justify-center py-8 md:py-10 bg-background">
          <a
            href="https://www.gag.com.co/micrositios/asistenciaenvida-losolivos-cartagena/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-vida-dark text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-vida-dark/90 transition-colors shadow-sm"
          >
            Conocer más información
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        <TarjetaBeneficios />

        </div>{/* fin panel Personas */}

      </div>{/* fin wrapper */}
    </div>
  )
}
