import { Award, Building2, Heart, Shield, Users } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Nosotros - Los Olivos Cartagena",
  description: "Conoce la historia de Los Olivos Cartagena. Más de 30 años al servicio solidario de las familias de Cartagena y la región.",
}

const valores = [
  {
    icon: Heart,
    title: "Solidaridad",
    description: "Trabajamos en pro del bienestar de nuestros asociados y sus familias, con espíritu de servicio y apoyo mutuo.",
  },
  {
    icon: Shield,
    title: "Responsabilidad",
    description: "Cumplimos con nuestros compromisos y brindamos servicios de calidad respaldados por nuestra experiencia.",
  },
  {
    icon: Users,
    title: "Respeto",
    description: "Valoramos la dignidad humana en cada servicio, tratando a cada familia con empatía y consideración.",
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "Nos esforzamos por superar las expectativas en cada homenaje y servicio que prestamos.",
  },
]

const hitos = [
  {
    year: "1993",
    title: "Fundación",
    description: "Nace Los Olivos Cartagena con la visión de brindar protección exequial solidaria a las familias cartageneras.",
  },
  {
    year: "2000",
    title: "Expansión regional",
    description: "Abrimos nuestras primeras sedes en municipios de Bolívar, extendiendo nuestra cobertura.",
  },
  {
    year: "2010",
    title: "Parque Cementerio",
    description: "Inauguramos nuestro Parque Cementerio Jardín, un espacio de paz y naturaleza.",
  },
  {
    year: "2015",
    title: "Cobertura nacional",
    description: "Alcanzamos presencia en todo el territorio colombiano a través de alianzas estratégicas.",
  },
  {
    year: "2020",
    title: "Transformación digital",
    description: "Implementamos servicios digitales y atención virtual para estar más cerca de nuestros afiliados.",
  },
  {
    year: "2023",
    title: "+50,000 familias",
    description: "Celebramos protegiendo a más de 50,000 familias en toda la región.",
  },
]

const cifras = [
  { numero: "+30", label: "Años de experiencia", icon: Award },
  { numero: "+50K", label: "Familias protegidas", icon: Users },
  { numero: "8", label: "Sedes en la región", icon: Building2 },
  { numero: "24/7", label: "Atención disponible", icon: Shield },
]

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
                Nuestra historia
              </h1>
              <p className="text-muted-foreground leading-relaxed">
                Más de 30 años al servicio solidario de las familias de Cartagena y la región. Conoce quiénes somos y por qué nos eligen.
              </p>
            </div>
            <div className="relative w-3/4 md:w-full max-w-lg mx-auto">
              <Image
                src="/nosotros.png"
                alt="Nosotros Los Olivos"
                aria-hidden
                width={600}
                height={500}
                className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-60 drop-shadow-[0_0_40px_rgba(206,78,88,0.4)]"
              />
              <Image
                src="/nosotros.png"
                alt="Nosotros Los Olivos"
                width={600}
                height={500}
                priority
                className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quien somos */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <span className="text-sm font-medium text-primary">Quiénes somos</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Central Cooperativa de Servicios Funerarios de Cartagena
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-center mb-6">
                Los Olivos Cartagena, conocida legalmente como <strong>CARTAFUN</strong> (Central Cooperativa de Servicios Funerarios de Cartagena),
                es una organización solidaria que desde 1993 ha trabajado incansablemente para brindar protección exequial integral
                a las familias de Cartagena y la región Caribe.
              </p>

              <p className="text-muted-foreground leading-relaxed text-center mb-6">
                Nacimos con el propósito de ofrecer servicios funerarios dignos y accesibles, basados en principios
                cooperativos de solidaridad, ayuda mutua y responsabilidad social. A lo largo de más de tres décadas,
                hemos evolucionado de ser una simple cooperativa exequial a convertirnos en un verdadero apoyo integral
                para las familias, ofreciendo servicios que van más allá de lo funerario.
              </p>

              <p className="text-muted-foreground leading-relaxed text-center">
                Hoy, con más de 50,000 familias protegidas, 8 sedes en la región y cobertura nacional, nos enorgullece
                ser la opción de confianza de miles de cartageneros que han encontrado en nosotros no solo un proveedor
                de servicios, sino una verdadera familia que los acompaña en los momentos más difíciles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cifras */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
            {cifras.map((cifra) => (
              <div key={cifra.label} className="text-center">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <cifra.icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">{cifra.numero}</div>
                <p className="text-sm text-muted-foreground">{cifra.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mision y Vision */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-5 md:p-8">
              <div className="relative w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/mision.png"
                  alt="Nuestra Misión"
                  width={600}
                  height={176}
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Nuestra Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Brindar protección exequial integral y servicios de calidad a nuestros asociados y sus familias,
                con un enfoque solidario, humano y profesional. Acompañamos a las familias en su proceso de duelo,
                ofreciendo un homenaje digno que honre la memoria de sus seres queridos y contribuya a su bienestar emocional.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-5 md:p-8">
              <div className="relative w-full rounded-xl overflow-hidden mb-6">
                <Image
                  src="/vision.png"
                  alt="Nuestra Visión"
                  width={600}
                  height={176}
                  className="w-full h-auto object-contain"
                />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Nuestra Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser la organización líder en protección familiar integral en la región Caribe colombiana,
                reconocida por la calidad de nuestros servicios, nuestro compromiso social y nuestra capacidad
                de innovar para satisfacer las necesidades cambiantes de nuestros asociados, siendo un referente
                de excelencia en el sector solidario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-sm font-medium text-primary">Nuestros principios</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Valores que nos guían
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
            {valores.map((valor) => (
              <div
                key={valor.title}
                className="bg-card rounded-2xl border border-border p-4 md:p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <valor.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{valor.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Linea de Tiempo */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16">
            <span className="text-sm font-medium text-primary">Nuestra trayectoria</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Más de 30 años de historia
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {hitos.map((hito, index) => (
                <div key={hito.year} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {hito.year}
                    </div>
                    {index < hitos.length - 1 && (
                      <div className="w-0.5 h-full bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-8 flex-1">
                    <h3 className="font-display font-bold text-xl text-foreground mb-2">{hito.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{hito.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Únete a nuestra familia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto">
              Más de 50,000 familias ya confían en nosotros. Sé parte de esta gran familia solidaria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#sedes-planes"
                className="inline-flex items-center justify-center gap-2 h-9 px-4 md:h-10 md:px-6 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Ver planes
                <Award className="w-4 h-4" />
              </a>
              <a
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 h-9 px-4 md:h-10 md:px-6 rounded-md text-sm font-medium border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Contáctanos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
