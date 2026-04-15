import { TarjetaBeneficios } from "@/components/los-olivos/tarjeta-beneficios"
import { PageBanner } from "@/components/los-olivos/page-banner"
import { VerSedesButton } from "@/components/los-olivos/ver-sedes-button"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ArrowRight,
  Heart,
  Phone,
  MessageCircle,
  Brain,
  PawPrint,
  ShoppingBasket,
  Banknote,
  ShieldAlert,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Planes Cartagena - Los Olivos Cartagena",
  description:
    "Planes de prevision exequial en Cartagena. Dos sedes funerarias: Alcibia y Cordialidad. Proteccion integral para tu familia con asistencia 24/7.",
}

const planesPersonas = [
  {
    title: "Plan Amor Fraternal",
    price: "$42.400",
    description:
      "Este plan es ideal para tu nucleo familiar basico, si te conviertes en titular debes ser menor de 65 años. Podras incluir a conyuge hasta los 65 años, 2 adultos mayores hasta una edad de 80 años (Padres, a falta de padres, suegros), Hijos sin limite de edad. Si eres soltero, podras incluir a tu nucleo basico como padres y hermanos.",
    popular: true,
  },
  {
    title: "Plan Fraternal",
    price: "$30.000",
    description:
      "Este plan es ideal para tu nucleo familiar basico, si te conviertes en titular debes ser menor a 65 años. Podras incluir a conyuge hasta los 65 años, 2 adultos mayores hasta una edad de 75 años (Padres, a falta de padres, suegros), si eres casado podras incluir a hijos sin limite de edad. Si eres soltero, podras incluir a tu nucleo basico como padres y hermanos.",
    popular: false,
  },
  {
    title: "Plan Amor Unidos",
    price: "$42.400",
    description:
      "Este plan es ideal para todos los miembros de tu familia, si te conviertes en titular debes ser menor de 65 anos. Podras incluir a 2 adultos mayores hasta una edad de 80 anos, y a 4 personas menores a 65 anos, sin importar lazos de consanguinidad o afinidad.",
    popular: false,
  },
  {
    title: "Plan Unidos",
    price: "$33.000",
    description:
      "Este plan es ideal para todos los integrantes de tu familia, si te conviertes en titular debes ser menor de 65 anos. Podras incluir a 2 adultos mayores hasta una edad de 75 anos, y a 4 personas menores a 65 anos, sin importar lazos de consanguinidad o afinidad.",
    popular: false,
  },
  {
    title: "Plan Huellitas Unico",
    price: "$17.000",
    description:
      "Este plan unipersonal es ideal para ti y tu mejor amigo de cuatro patas (gato o perro). Si te conviertes en el titular debes ser menor de 65 anos y tu mascotita debe ser mayor a 3 meses y menor a 12 anos.",
    popular: false,
  },
  {
    title: "Plan Olihuellitas",
    price: "$28.000",
    description:
      "Este plan es ideal para tu nucleo familiar basico, incluyendo a tu mejor amigo de cuatro patas (gato o perro). Si te conviertes en el titular debes ser menor de 65 anos. Podras incluir a dos adultos mayores hasta una edad de 75 anos. Tu mascota debe ser mayor a 3 meses y menor a 12 anos.",
    popular: false,
  },
]

const planesEmpresas = [
  {
    title: "Plan Superior",
    description:
      "Plan ideal para cubrir al nucleo familiar primario de tus colaboradores. El titular debe ser menor a 65 anos, si es casado, podra incluir a padres o suegros, conyuge e hijos, sin limite de edad para ingreso. Si es soltero, podra incluir a padres y hermanos sin limite de edad para ingreso. Tiene la opcion de incluir 1 persona adicional gratis con edad de ingreso hasta 65 anos.",
  },
  {
    title: "Plan Integral Familia",
    description:
      "Plan ideal para cubrir el nucleo familiar basico de tus colaboradores, el titular debe ser menor de 70 anos, podra incluir a padres o suegros sin limites de edad. Si es casado, hijos sin limites de edad y conyuge menor a 70 anos. Si es soltero, podra incluir a hermanos sin limite de edad (numero de hermanos ilimitado).",
  },
  {
    title: "Plan 10",
    description:
      "Plan ideal para cubrir a todos los integrantes de la familia de tus colaboradores. El titular debe ser menor de 65 anos. Podra incluir a 2 personas sin limite de edad y a 7 personas menores a 50 anos, sin importar lazos de consanguinidad o afinidad.",
  },
  {
    title: "Plan 6+1",
    description:
      "Plan ideal para cubrir a todos los integrantes de la familia de tus colaboradores. El titular debe ser menor de 65 anos. Podra incluir a 2 personas sin limite de edad y a 4 personas menores a 50 anos, sin importar lazos de consanguinidad o afinidad.",
  },
  {
    title: "Plan Huellitas Corporativo",
    description:
      "Plan unipersonal para cubrir a tus colaboradores y a su mejor amigo de cuatro patas (gato o perro). El titular debe ser menor de 65 anos y la mascota debe ser mayor a 3 meses y menor a 12 anos.",
  },
  {
    title: "Plan Unico",
    description:
      "Plan unipersonal para cubrir a tus colaboradores. El titular debe ser menor de 65 anos.",
  },
  {
    title: "Plan Familia y Mascota",
    description:
      "Plan ideal para cubrir el nucleo familiar basico de tus colaboradores y su mejor amigo de 4 patas (perro o gato), el titular debe ser menor de 70 anos, podra incluir a padres o suegros sin limites de edad. Si es casado, hijos sin limites de edad y conyuge menor a 70 anos. Si es soltero, podra incluir a hermanos sin limite de edad (numero de hermanos ilimitado). La mascota debe ser mayor a 3 meses y menor a 12 anos.",
  },
]


const asistencias = [
  {
    icon: Heart,
    title: "Asistencia domiciliaria gratuita",
    items: [
      "Vidrieria",
      "Electricidad",
      "Cerrajeria",
      "Cedularia",
      "Inhabitabilidad de la vivienda",
    ],
  },
  {
    icon: PawPrint,
    title: "Asistencia mascotas",
    items: [
      "Consulta veterinaria telefonica",
      "Traslado de la mascota en caso de enfermedad o accidente",
      "Medicamentos a domicilio por accidente o enfermedad",
    ],
  },
  {
    icon: Brain,
    title: "Asistencia psicologica",
    items: [
      "Mens Sana: Centro de ayuda psicologica personalizada (Sesiones a consideracion del psicologo)",
      "Unidad de apoyo al duelo",
    ],
  },
]

const seguros = [
  {
    title: "SoliCanasta",
    description: "Seguro de alimentacion que cubre la canasta familiar por un ano para el grupo familiar en caso de fallecimiento del titular.",
  },
  {
    title: "SoliRenta",
    description: "Renta diaria por hospitalizacion que cubre al afiliado titular.",
  },
  {
    title: "SoliAccidente",
    description: "Indemnizacion en caso de fallecimiento que cubre al grupo familiar en caso de fallecimiento del titular.",
  },
]

export default function CartagenaPage() {
  return (
    <>
      {/* Hero Sede Cartagena */}
      <section className="relative pt-28 pb-12 md:pt-32 md:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-4 md:space-y-6 text-center md:text-left">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary">
                Sede Cartagena
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Contar con un seguro de prevision integral es cuidar a los que mas quieres y asi brindarles una cobertura completa desde que inicias el servicio hasta que lo finalizas. Una proteccion integral te brindara tranquilidad en aquellos momentos dificiles.
                </p>
                <p>
                  Afiliandote podras adquirir tu plan de prevision en cuotas mensuales muy comodas y estar preparado ante cualquier eventualidad, convirtiendo este seguro en un sublime acto de amor.
                </p>
                <p className="font-display font-bold text-foreground text-lg">
                  ¡Es momento de demostrarle a tu familia cuanto la amas!
                </p>
              </div>
            </div>
            <div className="relative w-3/4 md:w-full max-w-lg mx-auto">
              <Image src="/cartagena-vector.png" alt="Familia protegida con Los Olivos" aria-hidden width={600} height={500} className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-60 drop-shadow-[0_0_40px_rgba(206,78,88,0.4)]" />
              <Image src="/cartagena-vector.png" alt="Familia protegida con Los Olivos" width={600} height={500} priority className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />
            </div>
          </div>

        </div>
      </section>

      {/* Asistencias */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="font-display text-xl md:text-2xl text-primary">
              Asistencias
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {asistencias.map((a) => (
              <div
                key={a.title}
                className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/50 hover:shadow-lg transition-all text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <a.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary mb-4">{a.title}</h3>
                <ul className="space-y-2 text-left">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary mt-1.5 text-xs">●</span>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seguros */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <h2 className="font-display text-xl md:text-2xl text-foreground">
              Seguros
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: ShoppingBasket, ...seguros[0] },
              { icon: Banknote, ...seguros[1] },
              { icon: ShieldAlert, ...seguros[2] },
            ].map((s) => (
              <div
                key={s.title}
                className="group relative bg-card rounded-2xl border border-border p-8 text-center hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary mb-3">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes Personas */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-3xl md:text-4xl text-primary block">Planes Personas</span>
            <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
              Proteccion familiar a tu medida
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Elige el plan ideal para proteger a los tuyos con cuotas mensuales, trimestrales, semestrales o anuales.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {planesPersonas.map((plan) => (
              <Card
                key={plan.title}
                className={`relative flex flex-col ${plan.popular ? "border-primary shadow-lg ring-2 ring-primary/20" : ""}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-sm font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    Recomendado
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-display text-xl text-primary">{plan.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{plan.description}</p>
                </CardHeader>
                <CardContent className="mt-auto">
                  <p className="text-foreground font-bold text-lg">Valor de <span className="text-primary">{plan.price} pesos.</span></p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
              <a href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea" target="_blank" rel="noopener noreferrer">
                Afiliarme ahora <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Planes Empresas */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-3xl md:text-4xl text-primary block">Planes Empresas</span>
            <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
              Protege a tus colaboradores
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Una alternativa especial para lideres organizacionales que desean proteger el nucleo familiar de sus empleados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {planesEmpresas.map((plan) => (
              <Card key={plan.title} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="font-display text-xl text-primary">{plan.title}</CardTitle>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{plan.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
              <a href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea" target="_blank" rel="noopener noreferrer">
                Afiliarme ahora <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <TarjetaBeneficios />


      {/* CTA Final */}
      <section className="py-12 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-xl md:text-2xl text-foreground mb-4 text-balance">
              Protege a tu familia en Cartagena hoy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Nuestros asesores están listos para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="gap-2 px-8 hover:bg-primary/10 hover:border-primary hover:text-primary" asChild>
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Contáctanos
                </a>
              </Button>
            </div>
            <div className="mt-8">
              <VerSedesButton />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
