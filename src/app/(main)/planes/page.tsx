import { ArrowRight, BadgeCheck, Building2, DollarSign, Heart, Shield, Users } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Previsión Exequial – Los Olivos Cartagena",
  description:
    "Con un plan de previsión de Los Olivos transformas, la incertidumbre en tranquilidad, asegurando respaldo, acompañamiento y bienestar para tu familia.",
}

const beneficios = [
  {
    categoria: "Emocionales",
    icon: Heart,
    items: [
      "Acompañamiento integral en momentos difíciles.",
      "Disminución de estrés y preocupaciones.",
      "Orientación profesional durante todo el proceso.",
    ],
  },
  {
    categoria: "Económicos",
    icon: DollarSign,
    items: [
      "Protección frente a gastos inesperados.",
      "Cuotas accesibles y planificadas.",
      "Evita asumir altos costos de última hora.",
    ],
  },
  {
    categoria: "Prácticos",
    icon: Shield,
    items: [
      "Cobertura y atención inmediata.",
      "Gestión de trámites y procesos necesarios.",
      "Organización y coordinación de los servicios.",
    ],
  },
  {
    categoria: "Familiares",
    icon: Users,
    items: [
      "Protección para quienes más amas.",
      "Respaldo para toda la familia.",
      "Mayor tranquilidad y seguridad a futuro.",
    ],
  },
]

export default function PrevisionPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-br from-primary/8 via-background to-background">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[250px] h-[250px] bg-primary/6 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="space-y-4 md:space-y-6 text-center md:text-left order-last md:order-first">
              <h1 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-snug">
                No podemos predecir el futuro, pero sí podemos{" "}
                <span className="text-primary">prepararnos</span> para{" "}
                <span className="text-primary">proteger</span> a quienes más amamos.
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Con un plan de previsión de Los Olivos transformas, la incertidumbre en tranquilidad, asegurando
                respaldo, acompañamiento y bienestar para tu familia cuando más lo necesites.
              </p>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                <Link
                  href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea"
                  className="inline-flex items-center gap-2 h-10 md:h-11 px-6 md:px-7 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Afiliarme ahora
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/573233093435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-10 md:h-11 px-6 md:px-7 rounded-md text-sm font-semibold border border-border bg-background hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors"
                >
                  Hablar con Lia
                </a>
              </div>
            </div>
            <div className="relative w-3/4 md:w-full mx-auto flex items-center justify-center md:justify-end order-first md:order-last">
              <Image
                src="/family-prevision.png"
                alt="Familia protegida"
                width={560}
                height={480}
                priority
                className="w-full h-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es la previsión? */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-sm">
            {/* Left colored panel */}
            <div className="bg-primary md:w-2/5 p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 right-0 w-56 h-56 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
              <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
              <div className="relative space-y-6">
                <div>
                  <p className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-3">Previsión exequial</p>
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-snug">
                    ¿Qué es la<br />previsión?
                  </h2>
                </div>
                <div className="w-10 h-0.5 bg-white/30" />
                <ul className="space-y-3">
                  {[
                    { label: "Tranquilidad", desc: "Para ti y tu familia" },
                    { label: "Respaldo", desc: "Económico y logístico" },
                    { label: "Acompañamiento", desc: "Humano e integral" },
                  ].map((item) => (
                    <li key={item.label} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-white" />
                      </div>
                      <div>
                        <span className="text-white font-semibold text-sm">{item.label}</span>
                        <span className="text-white/60 text-xs block">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Right content */}
            <div className="bg-card md:w-3/5 p-8 md:p-12 flex flex-col justify-center gap-6 border border-border md:border-l-0">
              <p className="text-foreground font-medium text-base md:text-lg leading-relaxed">
                La previsión no es solo una elección responsable y consciente, sino una{" "}
                <span className="text-primary">muestra de amor</span> que garantiza la tranquilidad,
                el respaldo y la protección de su familia ante situaciones futuras difíciles.
              </p>
              <div className="h-px bg-border" />
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                Adquirir un plan exequial de manera anticipada significa brindarle a su familia un acompañamiento
                completo en momentos de pérdida, liberándolos de preocupaciones económicas y logísticas.
              </p>
              <div className="flex items-start gap-4 bg-primary/5 rounded-2xl p-5 border border-primary/15">
                <div className="w-1 self-stretch rounded-full bg-primary shrink-0" />
                <p className="text-foreground font-medium leading-relaxed text-sm md:text-base">
                  Con Los Olivos, más que anticiparte a un momento doloroso, logras asegurar el bienestar de tus seres
                  queridos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="relative py-12 md:py-20 overflow-hidden bg-primary">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-white/5 rounded-full blur-2xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <span className="text-2xl sm:text-3xl md:text-4xl text-white font-light block mb-3">
              Beneficios de tener un plan de previsión
            </span>
            <p className="text-white/70 max-w-xl mx-auto text-sm md:text-base">
              Contar con un plan exequial trae múltiples beneficios para las personas y sus familias:
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {beneficios.map((b) => (
              <div key={b.categoria} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 p-5 md:p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <b.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base md:text-lg text-white">{b.categoria}</h3>
                </div>
                <ul className="space-y-2">
                  {b.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-white/80 shrink-0 mt-0.5" />
                      <span className="text-sm text-white/70 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Líneas de planes */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-14">
            <span className="text-2xl sm:text-3xl md:text-4xl text-primary font-light block mb-3">
              Líneas de planes exequiales en Los Olivos
            </span>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
              Contamos con dos líneas de previsión pensadas para adaptarse a las necesidades de cada persona y
              organización:
            </p>
          </div>

          {/* Planes Personas */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden mb-6 md:mb-10 bg-gradient-to-br from-primary/5 to-transparent border border-primary/10 p-6 sm:p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-14 items-center relative z-10">
              {/* Text column */}
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Planes personas</h2>
                </div>
                {/* Mobile image — shown below title on mobile, hidden on desktop */}
                <div className="lg:hidden flex justify-center">
                  <Image
                    src="/couple-prevision.png"
                    alt="Planes para personas"
                    width={500}
                    height={440}
                    className="w-2/3 sm:w-1/2 h-auto object-contain"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Diseñados para personas y familias que desean adquirir su plan de manera individual, protegiendo a sus
                  seres queridos y asegurando tranquilidad para el futuro.
                </p>
                <ul className="space-y-2">
                  {[
                    "Diferentes opciones de cobertura.",
                    "Flexibilidad de afiliación.",
                    "Protección familiar.",
                    "Atención y acompañamiento permanente.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-1">
                  <Link
                    href="/planes/cartagena"
                    className="inline-flex items-center gap-2 h-10 px-5 md:px-6 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Ver planes
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/beneficios?tab=personas"
                    className="inline-flex items-center gap-2 h-10 px-5 md:px-6 rounded-md text-sm font-semibold border border-border hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors"
                  >
                    Ver beneficios
                  </Link>
                </div>
              </div>
              {/* Desktop image — hidden on mobile */}
              <div className="hidden lg:flex justify-end">
                <Image
                  src="/couple-prevision.png"
                  alt="Planes para personas"
                  width={500}
                  height={440}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Planes Empresariales */}
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-bl from-muted/60 to-transparent border border-border p-6 sm:p-8 md:p-10">
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-14 items-center relative z-10">
              {/* Desktop image — left column, hidden on mobile */}
              <div className="hidden lg:flex justify-start">
                <Image
                  src="/empleados-prevision.png"
                  alt="Planes empresariales"
                  width={500}
                  height={440}
                  className="w-full h-auto object-contain"
                />
              </div>
              {/* Text column */}
              <div className="flex flex-col gap-4 md:gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h2 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground">Planes empresariales</h2>
                </div>
                {/* Mobile image — shown below title on mobile, hidden on desktop */}
                <div className="lg:hidden flex justify-center">
                  <Image
                    src="/empleados-prevision.png"
                    alt="Planes empresariales"
                    width={500}
                    height={440}
                    className="w-2/3 sm:w-1/2 h-auto object-contain"
                  />
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  Dirigidos a empresas y organizaciones que buscan brindar bienestar y respaldo a sus colaboradores.
                </p>
                <ul className="space-y-2">
                  {[
                    "Bienestar para los colaboradores.",
                    "Valor agregado empresarial.",
                    "Beneficios colectivos.",
                    "Fortalecimiento del clima organizacional.",
                    "Respaldo y acompañamiento para empleados y sus familias.",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <BadgeCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 pt-1">
                  <a
                    href="https://wa.me/573233093435"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 h-10 px-5 md:px-6 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Cotizar para mi empresa
                    <ArrowRight className="w-4 h-4" />
                  </a>
                  <Link
                    href="/beneficios?tab=empresariales"
                    className="inline-flex items-center gap-2 h-10 px-5 md:px-6 rounded-md text-sm font-semibold border border-border hover:bg-primary/10 hover:border-primary hover:text-primary transition-colors"
                  >
                    Ver beneficios
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
