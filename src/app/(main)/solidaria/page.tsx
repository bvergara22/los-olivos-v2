import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  HandHeart,
  Heart,
  Phone,
  Shield,
  Users,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Solidaria | Los Olivos Cartagena",
  description:
    "Conoce los beneficios cooperativos de Solidaria incluidos en tu plan de previsión Los Olivos Cartagena. Servicios de bienestar y protección para tu familia.",
}

const beneficios = [
  {
    icon: Shield,
    title: "Seguro Colectivo de Vida",
    desc: "Amparo de vida para el titular y sus beneficiarios como parte del plan cooperativo.",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: Heart,
    title: "Auxilio por Calamidad",
    desc: "Apoyo económico ante situaciones imprevistas de calamidad doméstica o familiar.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: HandHeart,
    title: "Fondo Solidario",
    desc: "Acceso al fondo de solidaridad para necesidades urgentes de los afiliados.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: Users,
    title: "Beneficios Cooperativos",
    desc: "Servicios exclusivos de la red cooperativa para ti y tu núcleo familiar.",
    color: "bg-teal-100 text-teal-700",
  },
  {
    icon: Clock,
    title: "Atención Permanente",
    desc: "Canal de atención disponible para gestionar tus beneficios cuando lo necesites.",
    color: "bg-violet-100 text-violet-700",
  },
  {
    icon: Check,
    title: "Sin Costo Adicional",
    desc: "Todos los beneficios están incluidos en tu plan de previsión Los Olivos sin pago extra.",
    color: "bg-emerald-100 text-emerald-700",
  },
]

const pasos = [
  {
    num: "01",
    title: "Solicita el servicio",
    desc: "Comunícate a la línea de atención de Solidaria presentando tu número de afiliación o documento de identidad.",
  },
  {
    num: "02",
    title: "Verifica tu elegibilidad",
    desc: "Un asesor revisará tu plan activo con Los Olivos y confirmará los beneficios disponibles para ti.",
  },
  {
    num: "03",
    title: "Accede al beneficio",
    desc: "Una vez verificada tu afiliación, accederás a los servicios en el plazo y modalidad que corresponda.",
  },
]

const faqs = [
  {
    q: "¿Quiénes pueden acceder a los beneficios de Solidaria?",
    a: "Los titulares y beneficiarios registrados en los planes de Los Olivos Cartagena que incluyen la alianza con Solidaria.",
  },
  {
    q: "¿Tiene algún costo adicional?",
    a: "No. Los beneficios de Solidaria están incluidos en tu plan de previsión mensual con Los Olivos sin ningún cobro adicional.",
  },
  {
    q: "¿Cómo activo mi cobertura?",
    a: "Tu cobertura cooperativa se activa de forma automática mientras tu plan Los Olivos esté al día. No requiere trámites adicionales.",
  },
  {
    q: "¿Cómo solicito el auxilio por calamidad?",
    a: "Comunícate directamente con Solidaria a su línea de atención o acércate a cualquier sede de Los Olivos Cartagena para recibir orientación y acompañamiento.",
  },
]

export default function SolidariaPage() {
  return (
    <>
      {/* Brand bar */}
      <div className="bg-[#b45309] text-white py-3 px-4 text-center">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 sm:gap-8 flex-wrap text-sm">
          <span className="font-semibold tracking-wide">Solidaria</span>
          <span className="hidden sm:block text-white/40">|</span>
          <span className="text-white/75">Beneficio incluido en tu plan Los Olivos Cartagena</span>
          <span className="hidden sm:block text-white/40">|</span>
          <a
            href="tel:018000000000"
            className="flex items-center gap-1.5 text-amber-200 hover:text-white transition-colors font-medium"
          >
            <Phone className="w-3.5 h-3.5" /> Línea de atención
          </a>
        </div>
      </div>

      {/* Hero */}
      <section className="relative py-14 md:py-20 overflow-hidden bg-gradient-to-br from-amber-50/40 via-background to-amber-50/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/planes/cartagena"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Volver a Sede Cartagena
          </Link>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="space-y-5">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-semibold rounded-full uppercase tracking-wide">
                  Solidaria
                </span>
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                  Alianza Los Olivos
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Unidos somos{" "}
                <span className="text-[#b45309]">más fuertes</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Como afiliado a Los Olivos Cartagena, accedes a los beneficios cooperativos de Solidaria para proteger a tu familia en los momentos que más importan.
              </p>

              <div className="flex flex-wrap gap-4 pt-1">
                {["Activación automática", "Sin costo adicional", "Red cooperativa"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="/family2-prevision.png"
                alt="Solidaria - Familias unidas"
                width={500}
                height={400}
                className="w-full max-w-sm lg:max-w-md h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Beneficios incluidos en tu plan
            </h2>
            <p className="text-muted-foreground mt-3 max-w-xl mx-auto">
              Servicios cooperativos totalmente gratuitos para afiliados con plan vigente en Los Olivos Cartagena.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {beneficios.map((b) => (
              <div
                key={b.title}
                className="flex gap-4 p-5 md:p-6 bg-card rounded-2xl border border-border hover:border-primary/30 hover:shadow-md transition-all"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${b.color}`}>
                  <b.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm text-foreground mb-1">{b.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gratuidad banner */}
      <section className="bg-[#b45309] py-10 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xl md:text-2xl font-display font-bold">
            Todos los servicios son totalmente gratuitos*
          </p>
          <p className="text-white/60 mt-2 text-sm">
            *Para titulares y beneficiarios con plan activo y vigente en Los Olivos Cartagena
          </p>
        </div>
      </section>

      {/* Proceso */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 md:mb-14">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              ¿Cómo acceder al servicio?
            </h2>
            <p className="text-muted-foreground mt-3">Tres sencillos pasos para activar tus beneficios</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pasos.map((p) => (
              <div key={p.num} className="flex flex-col items-center text-center md:items-start md:text-left">
                <div className="w-10 h-10 rounded-xl bg-[#b45309] text-white flex items-center justify-center font-bold text-sm mb-4 flex-shrink-0">
                  {p.num}
                </div>
                <h3 className="font-display font-bold text-base text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Preguntas frecuentes
          </h2>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-card rounded-2xl border border-border overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer list-none hover:bg-muted/30 transition-colors">
                  <span className="font-medium text-sm text-foreground">{faq.q}</span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Aún no tienes tu plan?
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Afíliate a Los Olivos Cartagena y accede a todos estos beneficios con Solidaria.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
              <a
                href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea"
                target="_blank"
                rel="noopener noreferrer"
              >
                Afiliarme ahora <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-8 hover:bg-primary/10 hover:border-primary hover:text-primary"
              asChild
            >
              <Link href="/planes/cartagena">
                <ArrowLeft className="w-5 h-5" /> Ver planes Cartagena
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
