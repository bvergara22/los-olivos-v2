import { PageBanner } from "@/components/los-olivos/page-banner"
import { Award, Building2, Eye, Heart, Shield, Target, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Nosotros - Los Olivos Cartagena",
  description: "Conoce la historia de Los Olivos Cartagena. Mas de 30 anos al servicio solidario de las familias de Cartagena y la region.",
}

const valores = [
  {
    icon: Heart,
    title: "Solidaridad",
    description: "Trabajamos en pro del bienestar de nuestros asociados y sus familias, con espiritu de servicio y apoyo mutuo.",
  },
  {
    icon: Shield,
    title: "Responsabilidad",
    description: "Cumplimos con nuestros compromisos y brindamos servicios de calidad respaldados por nuestra experiencia.",
  },
  {
    icon: Users,
    title: "Respeto",
    description: "Valoramos la dignidad humana en cada servicio, tratando a cada familia con empatia y consideracion.",
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
    title: "Fundacion",
    description: "Nace Los Olivos Cartagena con la vision de brindar proteccion exequial solidaria a las familias cartageneras.",
  },
  {
    year: "2000",
    title: "Expansion regional",
    description: "Abrimos nuestras primeras sedes en municipios de Bolivar, extendiendo nuestra cobertura.",
  },
  {
    year: "2010",
    title: "Parque Cementerio",
    description: "Inauguramos nuestro Parque Cementerio Jardin, un espacio de paz y naturaleza.",
  },
  {
    year: "2015",
    title: "Cobertura nacional",
    description: "Alcanzamos presencia en todo el territorio colombiano a traves de alianzas estrategicas.",
  },
  {
    year: "2020",
    title: "Transformacion digital",
    description: "Implementamos servicios digitales y atencion virtual para estar mas cerca de nuestros afiliados.",
  },
  {
    year: "2023",
    title: "+50,000 familias",
    description: "Celebramos protegiendo a mas de 50,000 familias en toda la region.",
  },
]

const cifras = [
  { numero: "+30", label: "Anos de experiencia", icon: Award },
  { numero: "+50K", label: "Familias protegidas", icon: Users },
  { numero: "8", label: "Sedes en la region", icon: Building2 },
  { numero: "24/7", label: "Atencion disponible", icon: Shield },
]

export default function NosotrosPage() {
  return (
    <>
      <PageBanner
        title="Nuestra historia"
        description="Mas de 30 anos al servicio solidario de las familias de Cartagena y la region. Conoce quienes somos y por que nos eligen."
      />

      {/* Quien somos */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary">Quienes somos</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Central Cooperativa de Servicios Funerarios de Cartagena
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground leading-relaxed text-center mb-6">
                Los Olivos Cartagena, conocida legalmente como <strong>CARTAFUN</strong> (Central Cooperativa de Servicios Funerarios de Cartagena),
                es una organizacion solidaria que desde 1993 ha trabajado incansablemente para brindar proteccion exequial integral
                a las familias de Cartagena y la region Caribe.
              </p>

              <p className="text-muted-foreground leading-relaxed text-center mb-6">
                Nacimos con el proposito de ofrecer servicios funerarios dignos y accesibles, basados en principios
                cooperativos de solidaridad, ayuda mutua y responsabilidad social. A lo largo de mas de tres decadas,
                hemos evolucionado de ser una simple cooperativa exequial a convertirnos en un verdadero apoyo integral
                para las familias, ofreciendo servicios que van mas alla de lo funerario.
              </p>

              <p className="text-muted-foreground leading-relaxed text-center">
                Hoy, con mas de 50,000 familias protegidas, 8 sedes en la region y cobertura nacional, nos enorgullece
                ser la opcion de confianza de miles de cartageneros que han encontrado en nosotros no solo un proveedor
                de servicios, sino una verdadera familia que los acompana en los momentos mas dificiles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cifras */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {cifras.map((cifra) => (
              <div key={cifra.label} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <cifra.icon className="w-8 h-8" />
                </div>
                <div className="font-display text-4xl font-bold text-foreground mb-2">{cifra.numero}</div>
                <p className="text-sm text-muted-foreground">{cifra.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mision y Vision */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Nuestra Mision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Brindar proteccion exequial integral y servicios de calidad a nuestros asociados y sus familias,
                con un enfoque solidario, humano y profesional. Acompanamos a las familias en su proceso de duelo,
                ofreciendo un homenaje digno que honre la memoria de sus seres queridos y contribuya a su bienestar emocional.
              </p>
            </div>

            <div className="bg-card rounded-2xl border border-border p-8">
              <div className="w-14 h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Nuestra Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser la organizacion lider en proteccion familiar integral en la region Caribe colombiana,
                reconocida por la calidad de nuestros servicios, nuestro compromiso social y nuestra capacidad
                de innovar para satisfacer las necesidades cambiantes de nuestros asociados, siendo un referente
                de excelencia en el sector solidario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Nuestros principios</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Valores que nos guian
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {valores.map((valor) => (
              <div
                key={valor.title}
                className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all text-center"
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
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-primary">Nuestra trayectoria</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Mas de 30 anos de historia
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
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Unete a nuestra familia
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Mas de 50,000 familias ya confian en nosotros. Se parte de esta gran familia solidaria.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#sedes-planes"
                className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Ver planes
                <Award className="w-4 h-4" />
              </a>
              <a
                href="/#contacto"
                className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Contactanos
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
