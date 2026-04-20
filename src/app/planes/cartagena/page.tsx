import { TarjetaBeneficios } from "@/components/los-olivos/tarjeta-beneficios"
import { VerSedesButton } from "@/components/los-olivos/ver-sedes-button"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Banknote,
  Building2,
  Clock,
  HeartHandshake,
  Home,
  MapPin,
  MessageCircle,
  PawPrint,
  ShieldCheck,
  ShoppingBasket,
  ShieldAlert,
  Star,
  Users,
} from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Planes Cartagena - Los Olivos Cartagena",
  description:
    "Planes de previsión exequial en Cartagena. Dos sedes funerarias: Alcibia y Cordialidad. Protección integral para tu familia con asistencia 24/7.",
}

const planesPersonas = [
  {
    title: "Plan Amor Fraternal",
    price: "$42.400",
    description:
      "Este plan es ideal para tu núcleo familiar básico, si te conviertes en titular debes ser menor de 65 años. Podrás incluir a cónyuge hasta los 65 años, 2 adultos mayores hasta una edad de 80 años (Padres, a falta de padres, suegros), Hijos sin límite de edad. Si eres soltero, podrás incluir a tu núcleo básico como padres y hermanos.",
    popular: true,
  },
  {
    title: "Plan Fraternal",
    price: "$30.000",
    description:
      "Este plan es ideal para tu núcleo familiar básico, si te conviertes en titular debes ser menor a 65 años. Podrás incluir a cónyuge hasta los 65 años, 2 adultos mayores hasta una edad de 75 años (Padres, a falta de padres, suegros), si eres casado podrás incluir a hijos sin límite de edad. Si eres soltero, podrás incluir a tu núcleo básico como padres y hermanos.",
    popular: false,
  },
  {
    title: "Plan Amor Unidos",
    price: "$42.400",
    description:
      "Este plan es ideal para todos los miembros de tu familia, si te conviertes en titular debes ser menor de 65 años. Podrás incluir a 2 adultos mayores hasta una edad de 80 años, y a 4 personas menores a 65 años, sin importar lazos de consanguinidad o afinidad.",
    popular: false,
  },
  {
    title: "Plan Unidos",
    price: "$33.000",
    description:
      "Este plan es ideal para todos los integrantes de tu familia, si te conviertes en titular debes ser menor de 65 años. Podrás incluir a 2 adultos mayores hasta una edad de 75 años, y a 4 personas menores a 65 años, sin importar lazos de consanguinidad o afinidad.",
    popular: false,
  },
  {
    title: "Plan Huellitas Único",
    price: "$17.000",
    description:
      "Este plan unipersonal es ideal para ti y tu mejor amigo de cuatro patas (gato o perro). Si te conviertes en el titular debes ser menor de 65 años y tu mascotita debe ser mayor a 3 meses y menor a 12 años.",
    popular: false,
  },
  {
    title: "Plan Olihuellitas",
    price: "$28.000",
    description:
      "Este plan es ideal para tu núcleo familiar básico, incluyendo a tu mejor amigo de cuatro patas (gato o perro). Si te conviertes en el titular debes ser menor de 65 años. Podrás incluir a dos adultos mayores hasta una edad de 75 años. Tu mascota debe ser mayor a 3 meses y menor a 12 años.",
    popular: false,
  },
]

const planesEmpresas = [
  {
    title: "Plan Básico",
    description:
      "Plan ideal para cubrir el núcleo familiar básico de tus colaboradores. El titular puede incluir hijos hasta los 35 años, padres sin límite de edad (a falta de padres, suegros), cónyuge hasta los 65 años. Si el colaborador es soltero, podrá incluir a hermanos hasta los 35 años y padres sin límite de edad. Sin destino final.",
  },
  {
    title: "Plan Superior",
    description:
      "Plan ideal para cubrir al núcleo familiar primario de tus colaboradores. El titular debe ser menor a 65 años, si es casado, podrá incluir a padres o suegros, cónyuge e hijos, sin límite de edad para ingreso. Si es soltero, podrá incluir a padres y hermanos sin límite de edad para ingreso. Tiene la opción de incluir 1 persona adicional gratis con edad de ingreso hasta 65 años.",
  },
  {
    title: "Plan Integral Familia",
    description:
      "Plan ideal para cubrir el núcleo familiar básico de tus colaboradores, el titular debe ser menor de 70 años, podrá incluir a padres o suegros sin límites de edad. Si es casado, hijos sin límites de edad y cónyuge menor a 70 años. Si es soltero, podrá incluir a hermanos sin límite de edad (número de hermanos ilimitado).",
  },
  {
    title: "Plan 10",
    description:
      "Plan ideal para cubrir a todos los integrantes de la familia de tus colaboradores. El titular debe ser menor de 65 años. Podrá incluir a 2 personas sin límite de edad y a 7 personas menores a 50 años, sin importar lazos de consanguinidad o afinidad.",
  },
  {
    title: "Plan 6+1",
    description:
      "Plan ideal para cubrir a todos los integrantes de la familia de tus colaboradores. El titular debe ser menor de 65 años. Podrá incluir a 2 personas sin límite de edad y a 4 personas menores a 50 años, sin importar lazos de consanguinidad o afinidad.",
  },
  {
    title: "Plan Huellitas Corporativo",
    description:
      "Plan unipersonal para cubrir a tus colaboradores y a su mejor amigo de cuatro patas (gato o perro). El titular debe ser menor de 65 años y la mascota debe ser mayor a 3 meses y menor a 12 años.",
  },
  {
    title: "Plan Único",
    description:
      "Plan unipersonal para cubrir a tus colaboradores. El titular debe ser menor de 65 años.",
  },
  {
    title: "Plan Familia y Mascota",
    description:
      "Plan ideal para cubrir el núcleo familiar básico de tus colaboradores y su mejor amigo de 4 patas (perro o gato), el titular debe ser menor de 70 años, podrá incluir a padres o suegros sin límites de edad. Si es casado, hijos sin límites de edad y cónyuge menor a 70 años. Si es soltero, podrá incluir a hermanos sin límite de edad (número de hermanos ilimitado). La mascota debe ser mayor a 3 meses y menor a 12 años.",
  },
]

const asistencias = [
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

const seguros = [
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
]

const stats = [
  { icon: Clock, label: "Atención 24/7", value: "Siempre disponibles" },
  { icon: ShieldCheck, label: "Cobertura nacional", value: "Todo Colombia" },
  { icon: Building2, label: "Dos sedes", value: "Alcibia · Cordialidad" },
  { icon: Users, label: "Años de experiencia", value: "Más de 30 años" },
]

export default function CartagenaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        {/* Círculos decorativos */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary/5 translate-x-1/2 -translate-y-1/4 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-secondary/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            <div className="space-y-5 text-center md:text-left">
              {/* Sedes badge */}
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <MapPin className="w-3 h-3" /> Sede Alcibia
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                  <MapPin className="w-3 h-3" /> Sede Cordialidad
                </span>
              </div>

              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Sede Cartagena
              </h1>

              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>
                  Contar con un seguro de previsión integral es cuidar a los que más quieres y así brindarles una cobertura completa desde que inicias el servicio hasta que lo finalizas.
                </p>
                <p>
                  Afiliándote podrás adquirir tu plan de previsión en cuotas mensuales muy cómodas y estar preparado ante cualquier eventualidad, convirtiendo este seguro en un sublime acto de amor.
                </p>
                <p className="font-display font-bold text-foreground text-lg">
                  ¡Es momento de demostrarle a tu familia cuánto la amas!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start pt-2">
                <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                  <a href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea" target="_blank" rel="noopener noreferrer">
                    Afiliarme ahora <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 px-8 hover:bg-primary/10 hover:border-primary hover:text-primary" asChild>
                  <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" /> Contáctanos
                  </a>
                </Button>
              </div>
            </div>

            <div className="relative w-3/4 md:w-full max-w-lg mx-auto">
              <Image src="/cartagena-vector.png" alt="" aria-hidden width={600} height={500} className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-60 drop-shadow-[0_0_40px_rgba(206,78,88,0.4)]" />
              <Image src="/cartagena-vector.png" alt="Familia protegida con Los Olivos Cartagena" width={600} height={500} priority className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />
            </div>
          </div>
        </div>

        {/* Wave */}
        <div className="absolute -bottom-px left-0 right-0 z-20 text-primary" aria-hidden>
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
          </svg>
        </div>
      </section>

      {/* Stats strip */}
      <section className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <s.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-display font-bold text-sm leading-tight">{s.value}</p>
                  <p className="text-primary-foreground/70 text-xs mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asistencias */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-primary/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-primary block">Más que un plan</span>
            <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
              3 asistencias incluidas en tu afiliación
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Tu plan no solo te protege ante el fallecimiento — también te acompaña en vida con servicios de asistencia inmediata.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {asistencias.map((a, i) => (
              <div
                key={a.title}
                className="group relative bg-card rounded-2xl border border-border p-8 hover:border-primary/40 hover:shadow-xl transition-all overflow-hidden"
              >
                {/* Número decorativo */}
                <span className="absolute top-4 right-5 text-6xl font-display font-bold text-primary/5 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors relative z-10">
                  <a.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-4 relative z-10">{a.title}</h3>
                <ul className="space-y-2.5 relative z-10">
                  {a.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="text-primary mt-1.5 text-xs flex-shrink-0">●</span>
                      <span className="text-sm text-muted-foreground leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seguros */}
      <section className="py-16 md:py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-primary-foreground/80 block">Respaldo financiero</span>
            <h2 className="font-display text-xl md:text-2xl text-primary-foreground mt-2 text-balance">
              Seguros incluidos en tu plan
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {seguros.map((s) => (
              <div
                key={s.title}
                className="group bg-primary-foreground/10 backdrop-blur-sm rounded-2xl border border-primary-foreground/20 p-8 text-center hover:bg-primary-foreground/20 transition-all"
              >
                <div className="w-14 h-14 rounded-full bg-primary-foreground/20 text-primary-foreground flex items-center justify-center mx-auto mb-5 group-hover:bg-primary-foreground/30 transition-colors">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-xl text-primary-foreground mb-3">{s.title}</h3>
                <p className="text-sm text-primary-foreground/75 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes Personas */}
      <section className="py-16 md:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-primary/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header con imagen */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
            <div className="flex-1">
              <span className="text-3xl md:text-4xl text-primary block">Planes Personas</span>
              <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
                Protección familiar a tu medida
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed max-w-lg">
                Elige el plan ideal para proteger a los tuyos con cuotas mensuales, trimestrales, semestrales o anuales.
              </p>
              <div className="flex flex-wrap gap-3 mt-5">
                {["Cuotas cómodas", "Desde el primer día"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                    <Star className="w-3 h-3" /> {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <Image src="/family-planes.png" alt="Planes para personas" width={340} height={260} className="w-64 lg:w-80 h-auto object-contain" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {planesPersonas.map((plan) => (
              <div
                key={plan.title}
                className={`relative flex flex-col bg-card rounded-2xl border overflow-hidden transition-all hover:shadow-lg ${
                  plan.popular
                    ? "border-primary shadow-lg ring-2 ring-primary/20"
                    : "border-border hover:border-primary/40"
                }`}
              >
                {plan.popular && (
                  <div className="bg-primary text-primary-foreground text-xs font-bold px-4 py-2 text-center tracking-wide uppercase">
                    ★ Recomendado
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  {/* Precio destacado */}
                  <div className="mb-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wide font-medium mb-1">Valor mensual</p>
                    <p className="font-display font-bold text-2xl text-primary">{plan.price}</p>
                    <p className="text-xs text-muted-foreground">pesos</p>
                  </div>
                  <div className="w-8 h-0.5 bg-primary/30 mb-4" />
                  <h3 className="font-display font-bold text-base text-foreground mb-3">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-10" asChild>
              <a href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea" target="_blank" rel="noopener noreferrer">
                Afiliarme ahora <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Planes Empresas */}
      <section className="py-16 md:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header con imagen */}
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-12">
            <div className="flex-1">
              <span className="text-3xl md:text-4xl text-primary block">Planes Empresas</span>
              <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
                Protege a tus colaboradores
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed max-w-lg">
                Una alternativa especial para líderes organizacionales que desean proteger el núcleo familiar de sus empleados.
              </p>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <Image src="/empleados-planes.png" alt="Planes para empresas" width={340} height={260} className="w-64 lg:w-80 h-auto object-contain" />
            </div>
          </div>

          {/* Cards con borde izquierdo */}
          <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto">
            {planesEmpresas.map((plan) => (
              <div
                key={plan.title}
                className="group flex gap-5 bg-card rounded-2xl border border-border p-6 hover:border-primary/40 hover:shadow-md transition-all"
              >
                <div className="w-1 rounded-full bg-primary/20 group-hover:bg-primary transition-colors flex-shrink-0" />
                <div>
                  <h3 className="font-display font-bold text-base text-primary mb-2">{plan.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-10" asChild>
              <a href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea" target="_blank" rel="noopener noreferrer">
                Afiliarme ahora <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <TarjetaBeneficios />

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4 text-balance font-bold">
              Protege a tu familia en Cartagena hoy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Nuestros asesores están listos para ayudarte.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <a href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea" target="_blank" rel="noopener noreferrer">
                  Afiliarme ahora <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8 hover:bg-primary/10 hover:border-primary hover:text-primary" asChild>
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" /> Contáctanos
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
