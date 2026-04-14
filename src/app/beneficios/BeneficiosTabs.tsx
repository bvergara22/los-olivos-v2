"use client"

import {
  Activity,
  AlertCircle,
  Apple,
  Brain,
  Briefcase,
  Building2,
  Car,
  ChefHat,
  Clock,
  Dumbbell,
  ArrowRight,
  GraduationCap,
  Heart,
  HeartPulse,
  Home,
  MapPin,
  PawPrint,
  Phone,
  Scissors,
  Shield,
  Sparkles,
  Stethoscope,
  Users,
  Wrench,
} from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

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
  { icon: Shield,      title: "Muerte Accidental" },
  { icon: Heart,       title: "Auxilio de muerte" },
  { icon: AlertCircle, title: "Auxilio de enfermedades graves" },
  { icon: Briefcase,   title: "Auxilio de desempleo" },
  { icon: Activity,    title: "Renta por hospitalización (hasta 30 días)" },
  { icon: HeartPulse,  title: "Unidad de cuidados intensivos (15 dias)" },
  { icon: Scissors,    title: "Cirugia ambulatoria por accidente" },
  { icon: Home,        title: "Asistencia gratuita al Hogar" },
]

const solientegralPlanes = [
  {
    plan: "SOLICANASTA",
    items: [
      { nombre: "Vida" },
      { nombre: "Incapacidad total y permanente" },
    ],
  },
  {
    plan: "SOLIRENTA",
    items: [
      { nombre: "Renta diaria por hospitalización" },
      { nombre: "Unidad de cuidados intensivos" },
      { nombre: "Cirugia ambulatoria" },
    ],
  },
  {
    plan: "SOLIACCIDENTE",
    items: [
      { nombre: "Muerte accidental" },
      { nombre: "Invalidez o desmembracion accidental" },
    ],
  },
  {
    plan: "ASIST. AL HOGAR",
    items: [
      { nombre: "Vidrería" },
      { nombre: "Cerrajería" },
      { nombre: "Electricidad" },
      { nombre: "Inhabitabilidad de la vivienda" },
      { nombre: "Celaduría" },
      { nombre: "Bodegaje" },
      { nombre: "Acarreo de enseres" },
    ],
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

  useEffect(() => {
    const tab = searchParams.get("tab")
    if (tab === "personas") setActive("personas")
    else if (tab === "empresariales") setActive("empresariales")
  }, [searchParams])

  return (
    <div>
      {/* ── Sticky tab switcher ── */}
      <div className="sticky top-20 z-40 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex justify-center">
            <div className="flex w-full sm:w-auto items-center gap-1 bg-muted rounded-full p-1">
              <button
                onClick={() => setActive("empresariales")}
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
                onClick={() => setActive("personas")}
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

      {/* ══════════════ SLIDER ══════════════
           Ambos paneles viven lado a lado (200% de ancho).
           translateX(0%)   → muestra Empresariales
           translateX(-50%) → muestra Independiente                  */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out will-change-transform"
          style={{ width: "200%", transform: active === "empresariales" ? "translateX(0%)" : "translateX(-50%)" }}
        >

      {/* ── Panel Empresariales ── */}
      <div style={{ width: "50%" }}>

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

      {/* ── Panel Independiente ── */}
      <div style={{ width: "50%" }}>

        {/* Solientegral */}
        <section className="py-8 md:py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-6 md:mb-12">
              <span className="text-2xl md:text-3xl lg:text-4xl text-vida-dark block">Paquete Solientegral</span>
              <h2 className="font-display text-lg md:text-xl lg:text-2xl text-foreground mt-2 text-balance">
                Sinergia - Valores asegurados
              </h2>
              <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
                Protección integral con tres niveles de cobertura y asistencias al hogar incluidas.
              </p>
            </div>

            {/* Plan cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 max-w-6xl mx-auto">
              {solientegralPlanes.map((plan) => (
                <div
                  key={plan.plan}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-vida-dark/50 hover:shadow-lg transition-all"
                >
                  <div className="bg-vida-dark px-4 md:px-6 py-3 md:py-4">
                    <h3 className="font-display font-bold text-white text-xs md:text-sm tracking-wide">{plan.plan}</h3>
                  </div>
                  <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                    {plan.items.map((item) => (
                      <div key={item.nombre} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0 mt-1.5 block" />
                        <p className="text-xs md:text-sm font-display font-bold text-foreground leading-snug">{item.nombre}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
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
      </div>{/* fin panel Independiente */}

        </div>{/* fin flex slider */}
      </div>{/* fin overflow-hidden */}
    </div>
  )
}
