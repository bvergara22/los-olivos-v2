import { Button } from "@/components/ui/button"
import { Activity, ArrowRight, CheckCircle2, Heart, Home, Leaf, PawPrint, Smile, Stethoscope, Users } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Plan Huellitas - Los Olivos Cartagena",
  description: "Protección especial para tus mascotas. Su bienestar, compañía y felicidad también hacen parte de los momentos más importantes de tu vida.",
}

const bienestarItems = [
  {
    icon: Stethoscope,
    title: "Salud preventiva",
    description: "Mantener sus vacunas, controles y revisiones periódicas al día ayuda a prevenir enfermedades y mejora su calidad de vida.",
  },
  {
    icon: Heart,
    title: "Bienestar emocional",
    description: "El cariño, el juego y la atención fortalecen su comportamiento y les ayudan a sentirse tranquilos, seguros y felices.",
  },
  {
    icon: Leaf,
    title: "Alimentación adecuada",
    description: "Cada etapa de vida necesita cuidados diferentes. Una alimentación balanceada contribuye a su energía, desarrollo y bienestar.",
  },
  {
    icon: Home,
    title: "Espacios seguros",
    description: "Contar con un entorno cómodo y seguro les permite descansar mejor, reducir el estrés y disfrutar más tiempo en familia.",
  },
]

const beneficios = [
  {
    icon: Heart,
    title: "Reducen el estrés",
    description: "Su compañía ayuda a generar tranquilidad y bienestar emocional.",
  },
  {
    icon: Users,
    title: "Fortalecen vínculos familiares",
    description: "Compartir momentos con mascotas une a las familias y crea recuerdos especiales.",
  },
  {
    icon: Smile,
    title: "Generan compañía",
    description: "Su presencia brinda alegría y apoyo emocional en cualquier etapa de la vida.",
  },
  {
    icon: Activity,
    title: "Promueven hábitos saludables",
    description: "Las caminatas, el juego y las rutinas ayudan a mantener una vida más activa.",
  },
]

const cuidados = [
  "Mantener agua fresca disponible",
  "Dedicar tiempo de juego y atención",
  "Respetar sus espacios de descanso",
  "Realizar caminatas regularmente",
  "Estar atentos a cambios en su comportamiento",
  "Mantener controles veterinarios periódicos",
  "Brindarles cariño y acompañamiento",
]

const proteccionItems = [
  { icon: Heart, title: "Acompañamiento y respaldo", description: "Contamos con el apoyo necesario para cada momento importante en la vida de tu mascota." },
  { icon: CheckCircle2, title: "Beneficios pensados para su bienestar", description: "Coberturas diseñadas especialmente para cuidar su salud, tranquilidad y calidad de vida." },
  { icon: Users, title: "Tranquilidad para toda la familia", description: "Cuando tu mascota está protegida, toda la familia puede estar más tranquila y segura." },
  { icon: PawPrint, title: "Protección para quienes siempre están contigo", description: "Ellos nos dan todo su amor; es justo brindarles el respaldo que merecen." },
]

export default function HuellitasPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-8 pb-12 md:pt-12 md:pb-20 overflow-hidden bg-gradient-to-b from-primary/[0.10] to-transparent">
        {/* Huellas decorativas — ocultas en mobile */}
        <PawPrint className="absolute top-10 left-[5%] w-10 h-10 text-primary/[0.08] rotate-[-20deg] hidden sm:block pointer-events-none" />
        <PawPrint className="absolute bottom-16 left-[12%] w-7 h-7 text-primary/[0.07] rotate-[10deg] hidden sm:block pointer-events-none" />
        <PawPrint className="absolute top-1/3 right-[3%] w-8 h-8 text-primary/[0.06] -rotate-[15deg] hidden md:block pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-[auto_auto] gap-8 md:gap-12 items-center max-w-6xl mx-auto">
            {/* Texto */}
            <div className="space-y-6 text-center md:text-left order-1 md:col-start-1 md:row-start-1">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <PawPrint className="w-6 h-6 text-primary" />
                <span className="text-sm font-medium text-primary">Protección para mascotas</span>
              </div>
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Ellos también son familia
              </h1>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Su bienestar, compañía y felicidad también hacen parte de los momentos más importantes de tu vida.
              </p>
            </div>

            {/* Imagen */}
            <div className="relative w-3/4 md:w-full max-w-lg mx-auto order-2 md:col-start-2 md:row-start-1 md:row-span-2">
              <Image
                src="/huellitas-main.png"
                alt="Plan Huellitas Los Olivos"
                width={600}
                height={500}
                priority
                className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
              />
            </div>

            {/* Botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start order-3 md:col-start-1 md:row-start-2 md:self-start">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <a href="https://www.gag.com.co/micrositios/asistenciaenvida-losolivos-cartagena/" target="_blank" rel="noopener noreferrer">
                  Conocer más <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 1 — Bienestar integral */}
      <section id="bienestar" className="py-14 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.06] via-primary/[0.02] to-transparent pointer-events-none" />
        <div className="absolute -top-16 -right-16 w-56 h-56 sm:w-96 sm:h-96 bg-primary/[0.07] rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-44 h-44 sm:w-72 sm:h-72 bg-primary/[0.05] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 md:mb-16 max-w-2xl mx-auto px-2">
              <span className="text-3xl md:text-4xl text-primary block">Bienestar integral</span>
              <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
                Su bienestar va más allá de alimentarlos
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed text-sm sm:text-base text-justify">
                Las mascotas hacen parte de nuestra vida diaria, por eso brindarles cuidado, atención y bienestar también es una forma de demostrar amor.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {bienestarItems.map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="group relative bg-card shadow-md rounded-2xl md:rounded-3xl p-5 md:p-8 space-y-3 md:space-y-4 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                    <Icon className="absolute -bottom-3 -right-3 w-20 h-20 md:w-28 md:h-28 text-primary/[0.06] pointer-events-none" />
                    <div className="w-13 h-13 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 text-white flex items-center justify-center shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform duration-300 w-12 h-12">
                      <Icon className="w-6 h-6 md:w-7 md:h-7" />
                    </div>
                    <h3 className="font-display font-bold text-foreground text-base md:text-lg">{item.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed text-justify">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2 — Beneficios de tener mascotas */}
      <section className="py-14 md:py-24 bg-gradient-to-br from-primary to-primary/75 relative overflow-hidden">
        <PawPrint className="absolute top-6 left-6 w-24 h-24 sm:w-48 sm:h-48 text-white/[0.07] rotate-12 pointer-events-none" />
        <PawPrint className="absolute bottom-6 right-6 w-20 h-20 sm:w-36 sm:h-36 text-white/[0.07] -rotate-6 pointer-events-none" />
        <PawPrint className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 text-white/[0.04] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto space-y-8 md:space-y-12">
            <div className="text-center space-y-2 max-w-2xl mx-auto px-2">
              <span className="text-3xl md:text-4xl text-white/80 block font-display">Beneficios</span>
              <h2 className="font-display text-xl md:text-2xl font-bold text-white mt-2 text-balance">
                Compartir tu vida con una mascota transforma tu bienestar
              </h2>
              <p className="text-white/70 leading-relaxed text-sm sm:text-base text-justify mt-4">
                Además de brindar compañía, las mascotas generan momentos de felicidad, fortalecen vínculos familiares y aportan bienestar emocional en el día a día.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
              {beneficios.map((item, i) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/15 p-5 md:p-7 space-y-3 md:space-y-4 hover:bg-white/15 transition-colors duration-300">
                    <span className="font-display font-bold text-4xl md:text-5xl text-white/15 leading-none select-none block">
                      0{i + 1}
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-white/15 text-white flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 md:w-5 md:h-5" />
                      </div>
                      <h3 className="font-display font-bold text-white text-base md:text-lg">{item.title}</h3>
                    </div>
                    <p className="text-white/65 text-xs sm:text-sm leading-relaxed text-justify">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3 — Cuidados esenciales */}
      <section className="py-14 md:py-24 bg-muted/40 relative overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-2/5 bg-primary/[0.04] rounded-l-[5rem] hidden lg:block pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-8 md:gap-14 items-start">
            {/* Encabezado */}
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-3xl md:text-4xl text-primary block font-display">Cuidados esenciales</span>
              <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mt-2 text-balance">
                Pequeños cuidados que hacen una gran diferencia
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-justify mt-4">
                Algunos hábitos simples pueden contribuir diariamente al bienestar y felicidad de tu mascota.
              </p>
            </div>

            {/* Lista numerada */}
            <div className="space-y-2.5">
              {cuidados.map((item, i) => (
                <div key={item} className="group flex items-center gap-3 md:gap-4">
                  <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-primary text-white flex items-center justify-center text-xs md:text-sm font-bold flex-shrink-0 shadow-md shadow-primary/20 group-hover:scale-110 transition-transform duration-200">
                    {i + 1}
                  </div>
                  <div className="flex-1 bg-card rounded-xl px-4 md:px-5 py-3 md:py-3.5 border border-border group-hover:border-primary/30 group-hover:shadow-sm transition-all duration-200">
                    <span className="text-xs sm:text-sm font-medium text-foreground">{item}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Sección 5 — Protección y acompañamiento */}
      <section className="py-14 md:py-24 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-32 h-32 md:w-64 md:h-64 rounded-full bg-primary/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-48 h-48 md:w-96 md:h-96 rounded-full bg-primary/5 translate-x-1/2 translate-y-1/2 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-8 md:mb-16 px-2">
              <span className="text-3xl md:text-4xl text-primary block font-display">Protección</span>
              <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
                Porque hacen parte de tu familia
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed text-sm sm:text-base">
                Contar con respaldo para el bienestar de tu mascota también es una forma de cuidar la tranquilidad de quienes más amas.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
              {proteccionItems.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="group relative p-4 md:p-6 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all hover:shadow-lg">
                    <span className="absolute top-4 right-4 text-6xl font-display font-bold text-primary/10 leading-none select-none">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 md:mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon className="w-5 h-5 md:w-7 md:h-7" />
                    </div>
                    <h3 className="font-display font-bold text-sm md:text-base text-foreground mb-1 md:mb-2 relative z-10">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed relative z-10">
                      {item.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-14 md:py-24 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <PawPrint className="w-8 h-8 text-primary mx-auto" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-balance">
              Brinda seguridad a tu compañero más fiel
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto">
              Conoce los beneficios disponibles para tu mascota y descubre cómo seguir cuidando de su bienestar con amor y tranquilidad.
            </p>
            <div className="flex justify-center pt-2">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <a href="https://www.gag.com.co/micrositios/asistenciaenvida-losolivos-cartagena/" target="_blank" rel="noopener noreferrer">
                  Conocer planes para mascotas <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
