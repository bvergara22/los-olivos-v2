import { AlertTriangle, ClipboardList, FileCheck, FileText, Heart, Phone, Shield, UserCheck } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Trámites para Seres Queridos Fallecidos - Los Olivos Cartagena",
  description: "Conoce los pasos y documentación necesaria para cumplir con todos los trámites en la prestación de nuestro homenaje.",
}

const pasosIniciales = [
  {
    number: 1,
    title: "Solicitar certificación médica del fallecimiento",
    description: "Es necesario que un médico certifique la defunción. Si el fallecimiento ocurre fuera de una institución de salud, comunícate con la EPS del ser querido para solicitar el envío de un médico al domicilio. Ten a la mano el documento de identidad y la información básica del afiliado.",
    icon: FileCheck,
  },
  {
    number: 2,
    title: "Contáctanos",
    description: "Estamos aquí para acompañarte. Al comunicarte con nosotros, coordinaremos el traslado y te orientaremos en cada paso del proceso.",
    icon: Phone,
  },
  {
    number: 3,
    title: "Definición del servicio funerario",
    description: "Te ayudaremos a tomar decisiones como el tipo de servicio (inhumación o cremación), el uso de sala de velación y cada detalle necesario, siempre con respeto y acompañamiento.",
    icon: ClipboardList,
  },
  {
    number: 4,
    title: "Información a familiares y cercanos",
    description: "Puedes iniciar informando a los familiares y amigos más cercanos. Si lo deseas, podrás compartir los detalles de la velación y ceremonias a través de nuestra sección de obituarios.",
    icon: UserCheck,
  },
]

const causasNaturales = [
  "Traslado del ser querido a la funeraria",
  "Proceso de identificación",
  "Preparación del servicio funerario",
]

const documentación = [
  {
    number: 1,
    title: "Certificado médico de defunción",
    description: "Documento expedido por el médico con la información completa del fallecimiento.",
    icon: FileCheck,
  },
  {
    number: 2,
    title: "Registro de defunción",
    description: "Se realiza en notaría con el certificado médico y documento de identidad.",
    icon: FileText,
  },
  {
    number: 3,
    title: "Licencia de inhumación, cremación o traslado",
    description: "Documento requerido para proceder con el servicio funerario, expedido por la autoridad de salud.",
    icon: Shield,
  },
]

const causaViolenta = [
  "Intervención de Medicina Legal (necropsia)",
  "Proceso de investigación por Fiscalía",
  "Autorización para la entrega del cuerpo",
  "Traslado a la funeraria",
  "Trámites realizados por los familiares con acompañamiento de la funeraria",
]

const despuésHomenaje = [
  "Registro de la defunción ante las entidades correspondientes",
  "Gestión de certificados (cuando sean requeridos)",
  "Orientación en procesos notariales y de herencia",
  "Actualización o cambio de titularidad del plan",
  "Recomendaciones sobre manejo de información y cuentas del ser querido",
]

export default function TramitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-8 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-duelo-main/10 via-background to-duelo-dark/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-duelo-dark leading-tight text-balance">
                Trámites para seres queridos fallecidos
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-4 md:mt-6 leading-relaxed">
                Para dar cumplimiento con nuestra promesa de valor, es importante que conozcas los pasos a tener en cuenta en la prestación de nuestro homenaje.
              </p>
            </div>
            <div className="relative w-3/4 lg:w-full max-w-lg mx-auto">
              <Image src="/tramitesolivos.png" alt="Trámites Los Olivos" width={500} height={380} priority
                className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-px left-0 right-0 z-20 text-background" aria-hidden>
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
          </svg>
        </div>
      </section>

      {/* Primeros pasos */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <span className="text-3xl md:text-4xl text-duelo-main block">Primeros pasos</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">
              ¿Qué hacer en este momento?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {pasosIniciales.map((paso) => (
              <div key={paso.number} className="group bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-duelo-main/50 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4 md:gap-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-duelo-main/10 text-duelo-main flex items-center justify-center flex-shrink-0 group-hover:bg-duelo-main group-hover:text-white transition-colors">
                    <paso.icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-bold text-duelo-main uppercase tracking-wide">Paso {paso.number}</span>
                    </div>
                    <h3 className="font-display font-bold text-base md:text-lg text-foreground mb-2 md:mb-3">{paso.title}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{paso.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Causas naturales y violenta — lado a lado */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <span className="text-3xl md:text-4xl text-duelo-main block">Tipos de fallecimiento</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">
              Proceso según la causa
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">

            {/* Causas naturales */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="bg-duelo-main/10 px-6 md:px-8 py-4 md:py-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-duelo-main text-white flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg text-duelo-dark">Fallecimiento por causas naturales</h3>
                </div>
              </div>
              <div className="px-6 md:px-8 py-6 md:py-8">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  Ocurre sin intervención de terceros y puede ser certificado por un médico sin necesidad de autopsia.
                </p>
                <p className="text-xs md:text-sm font-bold text-duelo-dark uppercase tracking-wide mb-4">¿Qué sigue?</p>
                <ol className="space-y-3">
                  {causasNaturales.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-duelo-main text-white flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-sm md:text-base text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Causa violenta */}
            <div className="bg-card rounded-2xl border border-border overflow-hidden">
              <div className="bg-destructive/10 px-6 md:px-8 py-4 md:py-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-destructive text-white flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base md:text-lg text-foreground">Fallecimiento por causa violenta</h3>
                </div>
              </div>
              <div className="px-6 md:px-8 py-6 md:py-8">
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                  Requiere la intervención de autoridades competentes para esclarecer lo ocurrido.
                </p>
                <p className="text-xs md:text-sm font-bold text-foreground uppercase tracking-wide mb-4">Proceso:</p>
                <ol className="space-y-3">
                  {causaViolenta.map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      <span className="text-sm md:text-base text-foreground font-medium">{item}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Documentacion requerida */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <span className="text-3xl md:text-4xl text-duelo-main block">Documentación requerida</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">
              Antes y durante del homenaje
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {documentación.map((doc) => (
              <div key={doc.number} className="group bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-duelo-main/50 hover:shadow-lg transition-all">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-duelo-main/10 text-duelo-main flex items-center justify-center mb-4 md:mb-6 group-hover:bg-duelo-main group-hover:text-white transition-colors">
                  <doc.icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <span className="text-xs font-bold text-duelo-main uppercase tracking-wide">Documento {doc.number}</span>
                <h3 className="font-display font-bold text-base md:text-lg text-foreground mt-2 mb-3">{doc.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{doc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Después del homenaje */}
      <section className="py-12 md:py-20 bg-duelo-main/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-16">
            <span className="text-3xl md:text-4xl text-duelo-main block">Después del homenaje</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">
              Seguimos acompañándote
            </h2>
            <p className="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
              En Los Olivos te brindamos orientación para continuar con los procesos necesarios después del servicio.
            </p>
          </div>

          {/* Desktop: horizontal steps */}
          <div className="hidden md:grid md:grid-cols-5 gap-6">
            {despuésHomenaje.map((item, index) => (
              <div key={index} className="relative">
                {index < despuésHomenaje.length - 1 && (
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-border" />
                )}
                <div className="relative flex flex-col items-center text-center group">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mb-4 z-10 transition-colors bg-card border-2 border-duelo-main text-duelo-main group-hover:bg-duelo-main group-hover:text-white">
                    {index + 1}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: vertical timeline */}
          <div className="flex flex-col gap-0 md:hidden">
            {despuésHomenaje.map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-base font-bold shrink-0 bg-card border-2 border-duelo-main text-duelo-main">
                    {index + 1}
                  </div>
                  {index < despuésHomenaje.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border my-1" />
                  )}
                </div>
                <div className="pb-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
