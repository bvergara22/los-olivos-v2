import { VerSedesButton } from "@/components/los-olivos/ver-sedes-button"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, MapPin, MessageCircle, ShieldCheck, Users } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Planes Mompox - Los Olivos Cartagena",
  description: "Planes de previsión exequial en Mompox. Protección integral para tu familia con Los Olivos.",
}

const planes = [
  {
    title: "Plan Básico",
    price: "$14.800",
    description: "Incluye titular con edad de ingreso hasta 65 años y sin límite de edad de permanencia. Puede incluir: 2 personas hasta los 75 años y 4 personas hasta los 50 años. Todos los beneficiarios sin límite de edad para permanencia. Sin destino final.",
    popular: false,
  },
  {
    title: "Plan Integral",
    price: "$24.400",
    description: "Incluye titular con edad de ingreso hasta 65 años y sin límite de edad de permanencia. Puede incluir a su grupo familiar básico: Cónyuge hasta 65 años, hijos hasta los 35 años, padres y/o suegros hasta 75 años. Si el titular es soltero puede incluir a hermanos menores de 35 años y sus padres hasta 75 años.",
    popular: true,
  },
  {
    title: "Plan 6+1",
    price: "$23.300",
    description: "Incluye titular con edad de ingreso hasta 65 años y sin límite de edad de permanencia. 2 beneficiarios hasta 75 años y 4 hasta los 60 años, sin importar lazos de consanguinidad.",
    popular: false,
  },
]

const planesEmpresas = [
  { title: 'Plan Básico', description: 'Plan ideal para cubrir el núcleo familiar básico de tus colaboradores. El titular puede incluir hijos hasta los 35 años, padres sin límite de edad (a falta de padres, suegros), cónyuge hasta los 65 años. Si el colaborador es soltero, podrá incluir a hermanos hasta los 35 años y padres sin límite de edad. Sin destino final.' },
  { title: 'Plan Superior', description: 'Plan ideal para cubrir al núcleo familiar primario de tus colaboradores. El titular debe ser menor a 65 años, si es casado, podrá incluir a padres o suegros, cónyuge e hijos, sin límite de edad para ingreso. Si es soltero, podrá incluir a padres y hermanos sin límite de edad para ingreso. Tiene la opción de incluir 1 persona adicional gratis con edad de ingreso hasta 65 años.' },
  { title: 'Plan Integral Familia', description: 'Plan ideal para cubrir el núcleo familiar básico de tus colaboradores, el titular debe ser menor de 70 años, podrá incluir a padres o suegros sin límites de edad. Si es casado, hijos sin límites de edad y cónyuge menor a 70 años. Si es soltero, podrá incluir a hermanos sin límite de edad (número de hermanos ilimitado).' },
  { title: 'Plan 10', description: 'Plan ideal para cubrir a todos los integrantes de la familia de tus colaboradores. El titular debe ser menor de 65 años. Podrá incluir a 2 personas sin límite de edad y a 7 personas menores a 50 años, sin importar lazos de consanguinidad o afinidad.' },
  { title: 'Plan 6+1', description: 'Plan ideal para cubrir a todos los integrantes de la familia de tus colaboradores. El titular debe ser menor de 65 años. Podrá incluir a 2 personas sin límite de edad y a 4 personas menores a 50 años, sin importar lazos de consanguinidad o afinidad.' },
  { title: 'Plan Huellitas Corporativo', description: 'Plan unipersonal para cubrir a tus colaboradores y a su mejor amigo de cuatro patas (gato o perro). El titular debe ser menor de 65 años y la mascota debe ser mayor a 3 meses y menor a 12 años.' },
  { title: 'Plan Único', description: 'Plan unipersonal para cubrir a tus colaboradores. El titular debe ser menor de 65 años.' },
  { title: 'Plan Familia y Mascota', description: 'Plan ideal para cubrir el núcleo familiar básico de tus colaboradores y su mejor amigo de 4 patas (perro o gato), el titular debe ser menor de 70 años, podrá incluir a padres o suegros sin límites de edad. Si es casado, hijos sin límites de edad y cónyuge menor a 70 años. Si es soltero, podrá incluir a hermanos sin límite de edad (número de hermanos ilimitado). La mascota debe ser mayor a 3 meses y menor a 12 años.' },
]

const stats = [
  { icon: Clock, label: "Atención 24/7", value: "Siempre disponibles" },
  { icon: ShieldCheck, label: "Cobertura nacional", value: "Todo Colombia" },
  { icon: Users, label: "experiencia", value: "Más de 30 años" },
]

export default function MompoxPage() {
  return (
    <>
      <section className="relative pt-8 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/5 translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
            <div className="space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                <MapPin className="w-3 h-3" /> Sede Mompox
              </span>
              <h1 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight text-balance">Sede Mompox</h1>
              <div className="space-y-3 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                <p>Contar con un seguro de previsión integral es cuidar a los que más quieres y así brindarles una cobertura completa desde que inicias el servicio hasta que lo finalizas.</p>
                <p>Afiliándote podrás adquirir tu plan de previsión en cuotas mensuales muy cómodas y estar preparado ante cualquier eventualidad, convirtiendo este seguro en un sublime acto de amor.</p>
                <p className="font-display font-bold text-foreground text-base md:text-lg">¡Es momento de demostrarle a tu familia cuánto la amas!</p>
              </div>
            </div>
            <div className="relative w-2/3 sm:w-1/2 lg:w-full mx-auto">
              <Image src="/mompox-vector.png" alt="" aria-hidden width={600} height={500} className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-60 drop-shadow-[0_0_40px_rgba(206,78,88,0.4)]" />
              <Image src="/mompox-vector.png" alt="Familia protegida con Los Olivos Mompox" width={600} height={500} priority className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-px left-0 right-0 z-20 text-primary" aria-hidden>
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
          </svg>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0"><s.icon className="w-5 h-5" /></div>
                <div>
                  <p className="font-display font-bold text-sm leading-tight">{s.value}</p>
                  <p className="text-primary-foreground/70 text-xs mt-0.5">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-muted/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8 md:mb-12">
            <div className="flex-1">
              <span className="text-2xl sm:text-3xl md:text-4xl text-primary block">Planes personas</span>
              <h2 className="font-display text-lg md:text-xl lg:text-2xl text-foreground mt-2 text-balance">Planes disponibles en Mompox</h2>
              <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 leading-relaxed max-w-lg">Elige el plan ideal para proteger a los tuyos con cuotas mensuales, trimestrales, semestrales o anuales.</p>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <Image src="/family-planes.png" alt="Planes para personas" width={340} height={260} className="w-64 lg:w-80 h-auto object-contain" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {planes.map((plan) => (
              <div key={plan.title} className={`relative flex flex-col bg-card rounded-2xl border overflow-hidden transition-all hover:shadow-lg border-border hover:border-primary/40`}>
                <div className="p-4 md:p-6 flex flex-col flex-1">
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
              <a href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea" target="_blank" rel="noopener noreferrer">Afiliarme ahora <ArrowRight className="w-5 h-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      {/* Planes empresas */}
      <section className="py-12 md:py-20 bg-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-center gap-8 mb-8 md:mb-12">
            <div className="flex-1">
              <span className="text-2xl sm:text-3xl md:text-4xl text-primary block">Planes empresas</span>
              <h2 className="font-display text-lg md:text-xl lg:text-2xl text-foreground mt-2 text-balance">Protege a tus colaboradores</h2>
              <p className="text-sm md:text-base text-muted-foreground mt-3 md:mt-4 leading-relaxed max-w-lg">Una alternativa especial para líderes organizacionales que desean proteger el núcleo familiar de sus empleados.</p>
            </div>
            <div className="hidden md:block flex-shrink-0">
              <Image src="/empleados-planes.png" alt="Planes para empresas" width={340} height={260} className="w-64 lg:w-80 h-auto object-contain" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {planesEmpresas.map((plan) => (
              <div key={plan.title} className="group flex gap-5 bg-card rounded-2xl border border-border p-4 md:p-6 hover:border-primary/40 hover:shadow-md transition-all">
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
              <a href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea" target="_blank" rel="noopener noreferrer">Afiliarme ahora <ArrowRight className="w-5 h-5" /></a>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-2xl md:text-4xl text-foreground mb-4 text-balance font-bold">Protege a tu familia en Mompox hoy</h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">Nuestros asesores están listos para ayudarte.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <a href="https://www.portal.losolivoscartagena.com/afiliacion-en-linea" target="_blank" rel="noopener noreferrer">Afiliarme ahora <ArrowRight className="w-5 h-5" /></a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8 hover:bg-primary/10 hover:border-primary hover:text-primary" asChild>
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-5 h-5" /> Contáctanos</a>
              </Button>
            </div>
            <div className="mt-8"><VerSedesButton /></div>
          </div>
        </div>
      </section>
    </>
  )
}
