import { SalasGallery } from "@/components/los-olivos/salas-gallery"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Flower2, Heart, Sparkles, Users } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Nuestro Homenaje al Amor - Los Olivos Cartagena",
  description: "En Los Olivos Cartagena, rendimos un protocolo de 4 etapas en el que prometemos brindarte un respaldo total en la trascendencia de tu ser querido.",
}

const etapas = [
  {
    number: 1,
    title: "Desprendimiento",
    icon: Heart,
    items: ["Cofre", "Trámites", "Traslado inicial y a nivel nacional"],
  },
  {
    number: 2,
    title: "Acogida",
    icon: Flower2,
    items: ["Carteles", "Flores", "Velación en sala o en casa"],
  },
  {
    number: 3,
    title: "Despedida",
    icon: Users,
    items: ["Traslado terrestre o aéreo", "Cremación", "Inhumación", "Traslado a campo santo", "Transporte para acompañantes"],
  },
  {
    number: 4,
    title: "Renacimiento",
    icon: Sparkles,
    items: ["Taller de manejo del duelo", "Entrega de cenizas", "Misa de conmemoración"],
  },
]

const momentosSede = [
  { title: "Atención a niños", description: "Orientación inmediata para ayudar a los niños a comprender y afrontar la pérdida." },
  { title: "Orientación a la familia", description: "Apoyo y guía al contratante o familiares según sus necesidades." },
  { title: "Durante el homenaje", description: "Acompañamiento al inicio del servicio en nuestras sedes." },
]

const momentosParque = [
  "Inhumación",
  "Exhumación",
  "Cremación",
  "Entrega de cenizas",
]

const flores = [
  {
    description: "Elaborado con pompones blancos, fullis blancos y amarillos, rosas amarillas, solidago, yesofila, dracena.",
    image: "https://portalapi.losolivoscartagena.com/uploads/images/PC%203corona%20ovala.jpg",
    link: "https://www.portal.losolivoscartagena.com/tienda/producto/FDD0003-corona-ovalada-en-atril",
  },
  {
    description: "Elaborado con Rosas Blancas, Ruscus, Helecho Cuero, Dracenas y yesofila.",
    image: "https://portalapi.losolivoscartagena.com/uploads/images/PC%203TRIANG%20ARREG.jpg",
    link: "https://www.portal.losolivoscartagena.com/tienda/producto/FDD0001-arreglo-triangular",
  },
  {
    description: "Elaborado en fullis amarillos y blancos, claveles rojos, margaritas blancas, helecho cuero, aster blancos.",
    image: "https://portalapi.losolivoscartagena.com/uploads/images/CORONA%20REDONDA%201.jpg",
    link: "https://www.portal.losolivoscartagena.com/tienda/producto/FFF010-corona-redonda",
  },
]

export default function HomenajePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-duelo-main/10 via-background to-duelo-dark/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-duelo-dark leading-tight text-balance">
                Nuestro homenaje<br />al amor
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-4 md:mt-6 leading-relaxed">
                Honramos lo esencial: <strong>lo que permanece.</strong><br />
                Cada detalle es cuidado con respeto y dignidad, para acompañarte como realmente lo necesitas.
              </p>
            </div>
            <div className="relative w-3/4 lg:w-full max-w-lg mx-auto">
              <Image
                src="/homenaje-imagen.png"
                alt=""
                aria-hidden
                width={500}
                height={380}
                className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-40 mix-blend-multiply"
              />
              <Image
                src="/homenaje-imagen.png"
                alt="Homenaje al amor"
                width={500}
                height={380}
                className="relative w-full h-auto object-contain mix-blend-multiply drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                priority
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

      {/* 4 Etapas */}
      <section className="py-12 md:py-20 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-duelo-main/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-duelo-dark/5 translate-x-1/2 translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark text-balance">
              Protocolo de homenaje
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground mt-2 leading-relaxed line-clamp-2">
              En Los Olivos Cartagena, rendimos un protocolo de 4 etapas en el que prometemos brindarte un respaldo total en la trascendencia de tu ser querido.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {etapas.map((etapa) => (
              <div
                key={etapa.number}
                className="group relative p-4 md:p-6 rounded-2xl bg-background hover:shadow-lg transition-all"
              >
                <span className="absolute top-3 right-3 text-5xl md:text-6xl font-display text-duelo-dark/10">
                  {String(etapa.number).padStart(2, "0")}
                </span>
                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-duelo-main/10 text-duelo-main flex items-center justify-center mb-3 md:mb-4 transition-colors group-hover:bg-duelo-main group-hover:text-white">
                  <etapa.icon className="w-5 h-5 md:w-7 md:h-7" />
                </div>
                <h3 className="font-display text-sm md:text-lg text-duelo-dark mb-2 md:mb-3 relative z-10 break-words">
                  {etapa.title}
                </h3>
                <ul className="space-y-2 relative z-10">
                  {etapa.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs md:text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-duelo-main mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Momentos */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-3xl md:text-4xl text-duelo-main block">Acompañamiento integral</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">
              Apoyo en cada momento del proceso
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Brindamos acompañamiento emocional a las familias, ofreciendo orientación oportuna para afrontar cada etapa del proceso.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-6 md:p-8">
              <div className="mb-5">
                <h3 className="font-display font-bold text-xl text-duelo-dark">En sede</h3>
                <p className="text-sm text-duelo-main font-medium mt-0.5">Sede Los Olivos</p>
              </div>
              <div className="relative w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/fachada-olivos.png"
                  alt="Sede Los Olivos"
                  width={600}
                  height={340}
                  className="w-full h-auto object-cover"
                />
              </div>
              <ol className="space-y-4">
                {momentosSede.map((momento, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-duelo-main text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{momento.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">{momento.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="bg-card rounded-2xl p-6 md:p-8">
              <div className="mb-5">
                <h3 className="font-display font-bold text-xl text-duelo-dark">En parque</h3>
                <p className="text-sm text-duelo-main font-medium mt-0.5">Parque Cementerio Los Olivos</p>
              </div>
              <div className="relative w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/parque-cementerio.png"
                  alt="Parque Cementerio Los Olivos"
                  width={600}
                  height={340}
                  className="w-full h-auto object-cover"
                />
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                El profesional en salud mental acompaña en momentos clave:
              </p>
              <ul className="space-y-3 mb-4">
                {momentosParque.map((momento, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-medium text-foreground">
                    <div className="w-6 h-6 rounded-full bg-duelo-main text-white flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    {momento}
                  </li>
                ))}
              </ul>
              <p className="text-sm text-muted-foreground italic">Con orientación y apoyo en cada proceso.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Salas de velacion */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-3xl md:text-4xl text-duelo-main block">Espacios de despedida</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">
              Nuestras salas de velación
            </h2>
          </div>
          <SalasGallery accent="var(--duelo-main)" />
        </div>
      </section>

      {/* Flores */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-3xl md:text-4xl text-duelo-main block">Detalles florales</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">
              Flores
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {flores.map((flor) => (
              <div
                key={flor.image}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-duelo-main/40 hover:shadow-lg transition-all"
              >
                <div className="w-full aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={flor.image}
                    alt={flor.description}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{flor.description}</p>
                <a
                  href={flor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-duelo-main hover:text-duelo-dark border border-duelo-main/30 hover:border-duelo-main rounded-lg px-4 py-2 transition-all hover:bg-duelo-main/5"
                >
                  Ver detalles
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Cotizar */}
      <section className="py-12 md:py-20 bg-duelo-main/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-display text-2xl md:text-4xl text-duelo-dark mb-4 text-balance">
              Coordina el homenaje de tu ser querido de forma ágil y sencilla
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Consulta el valor de nuestro servicio de necesidad inmediata según tus requerimientos y condiciones.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-duelo-main text-white hover:bg-duelo-dark px-8" asChild>
                <Link href="/cotizar">
                  Cotizar ahora
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8 hover:bg-duelo-main/10 hover:border-duelo-main hover:text-duelo-main" asChild>
                <a href="https://wa.me/573106171987" target="_blank" rel="noopener noreferrer">
                  Contactar
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
