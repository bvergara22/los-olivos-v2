import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import {
  Apple,
  ArrowRight,
  Brain,
  Car,
  Check,
  ChefHat,
  Clock,
  Dumbbell,
  GraduationCap,
  Heart,
  Home,
  MapPin,
  MessageCircle,
  PawPrint,
  Phone,
  Scale,
  Shield,
  Sparkles,
  Stethoscope,
  Syringe,
  Users
} from "lucide-react"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Beneficios de Planes Exequiales - Los Olivos Cartagena",
  description:
    "Conoce todos los beneficios exclusivos de nuestros planes exequiales: asistencias premium 24/7, paquetes de seguros y asistencia para mascotas.",
}

const asistenciasPremiumVirtuales = [
  {
    icon: Stethoscope,
    title: "Orientacion medica telefonica y/o virtual",
    monto: "Sin limite",
    eventos: "12 eventos por año",
  },
  {
    icon: Heart,
    title: "Orientacion medica pediatrica telefonica y/o virtual",
    monto: "Sin limite",
    eventos: "6 eventos por año",
  },
  {
    icon: Sparkles,
    title: "Orientacion odontologica telefonica/virtual",
    monto: "Sin limite",
    eventos: "6 eventos por año",
  },
  {
    icon: Brain,
    title: "Orientacion psicologica telefonica/virtual",
    monto: "Sin limite",
    eventos: "6 eventos por año",
  },
  {
    icon: Apple,
    title: "Orientacion nutricional telefonica/virtual",
    monto: "Sin limite",
    eventos: "6 eventos por año",
  },
  {
    icon: Sparkles,
    title: "Orientacion dermatologica telefonica/virtual",
    monto: "Sin limite",
    eventos: "6 eventos por año",
  },
  {
    icon: Dumbbell,
    title: "Clase virtual entrenador personal",
    monto: "Hasta 60 min por evento",
    eventos: "6 eventos por año",
  },
  {
    icon: GraduationCap,
    title: "Tutor academico telefonico",
    monto: "Hasta 90 min por evento",
    eventos: "2 eventos por año",
  },
  {
    icon: ChefHat,
    title: "Orientacion con chef telefonica y/o virtual",
    monto: "Hasta 45 min por evento",
    eventos: "2 eventos por año",
  },
]

const asistenciasDomicilio = [
  {
    icon: Stethoscope,
    title: "Medico a domicilio en caso de accidente",
    monto: "Hasta $120.000 por evento",
    eventos: "1 evento por año",
  },
  {
    icon: Syringe,
    title: "Enfermera a domicilio en caso de accidente",
    monto: "Hasta $120.000 por evento",
    eventos: "1 evento por año",
  },
  {
    icon: Heart,
    title: "Examenes a domicilio de sangre u orina derivados de atencion de urgencia",
    monto: "Hasta $120.000 por evento",
    eventos: "1 evento por año",
  },
  {
    icon: Car,
    title: "Servicio de conductor elegido (Co-pago $10.000)",
    monto: "Hasta $80.000 por evento",
    eventos: "",
  },
  {
    icon: Users,
    title: "Acompanamiento para diligencias personales (adulto mayor)",
    monto: "Hasta $120.000 por evento",
    eventos: "1 evento por año (Max 4h)",
  },
]

const solientegralRows = [
  {
    plan: "SOLICANASTA",
    items: [
      { nombre: "Vida", op1: "$1.000.000", op2: "$3.000.000", op3: "$5.000.000" },
      { nombre: "Incapacidad total y permanente", op1: "$1.000.000", op2: "$3.000.000", op3: "$5.000.000" },
    ],
  },
  {
    plan: "SOLIRENTA",
    items: [
      { nombre: "Renta diaria por hospitalizacion", op1: "$10.000", op2: "$30.000", op3: "$50.000" },
      { nombre: "Unidad de cuidados intensivos", op1: "$20.000", op2: "$60.000", op3: "$100.000" },
      { nombre: "Cirugia ambulatoria", op1: "$10.000", op2: "$30.000", op3: "$50.000" },
    ],
  },
  {
    plan: "SOLIACCIDENTE",
    items: [
      { nombre: "Muerte accidental", op1: "$1.000.000", op2: "$3.000.000", op3: "$5.000.000" },
      { nombre: "Invalidez o desmembracion accidental", op1: "$1.000.000", op2: "$3.000.000", op3: "$5.000.000" },
    ],
  },
]

const solientevidaRows = [
  { nombre: "Muerte Accidental", op1: "$500.000", op2: "$1.000.000", op3: "$5.000.000", op4: "$10.000.000" },
  { nombre: "Auxilio de muerte", op1: "$500.000", op2: "$500.000", op3: "$1.000.000", op4: "$1.000.000" },
  {
    nombre: "Renta por hospitalizacion; hasta 30 dias por accidente",
    op1: "$30.000",
    op2: "$50.000",
    op3: "$50.000",
    op4: "$80.000",
  },
  { nombre: "UCI por 15 dias de accidente", op1: "$60.000", op2: "$100.000", op3: "$100.000", op4: "$160.000" },
  {
    nombre: "Cirugia ambulatoria por accidente",
    op1: "$30.000",
    op2: "$50.000",
    op3: "$50.000",
    op4: "$80.000",
  },
  {
    nombre: "Auxilio de enfermedades graves",
    op1: "$500.000",
    op2: "$500.000",
    op3: "$1.000.000",
    op4: "$1.500.000",
  },
  {
    nombre: "Auxilio de desempleo (permanencia en el plan exequial x 3 meses)",
    op1: "SI",
    op2: "SI",
    op3: "SI",
    op4: "SI",
  },
  { nombre: "Asistencia gratuita al Hogar", op1: "SI", op2: "SI", op3: "SI", op4: "SI" },
]

const mascotaAsistencia = [
  {
    icon: Phone,
    title: "Orientacion medica veterinaria telefonica o virtual",
    monto: "Sin limite",
    eventos: "6 eventos por año",
  },
  {
    icon: Stethoscope,
    title: "Envio de medico veterinario a domicilio o consulta en red veterinaria",
    descripcion: "Ingesta de cuerpos extranos, accidente, enfermedad",
    monto: "Hasta $250.000 por evento",
    eventos: "2 eventos por año",
  },
  {
    icon: Car,
    title: "Traslado basico de la mascota en caso de emergencia por accidente",
    monto: "Hasta $50.000 por evento",
    eventos: "2 eventos por año",
  },
  {
    icon: MapPin,
    title: "Servicio de paseo canino en caso de hospitalizacion del afiliado",
    monto: "Hasta 4 dias por evento - 1h por dia",
    eventos: "2 eventos por año",
  },
  {
    icon: Home,
    title: "Servicio de guarderia para mascotas en caso de hospitalizacion del afiliado",
    monto: "Hasta 4 dias por evento",
    eventos: "2 eventos por año",
  },
]

const mascotaLegal = [
  {
    icon: Scale,
    title: "Asistencia legal telefonica",
    descripcion:
      "En procesos judiciales o conciliatorios por la reclamacion de danos y perjuicios sufridos por un tercero, con ocasion de danos o lesiones causadas por la mascota.",
    monto: "Sin limite",
    eventos: "2 eventos por año",
  },
  {
    icon: Scale,
    title: "Representacion legal telefonica",
    descripcion:
      "Asignacion de un abogado que guiara al afiliado en el proceso de responsabilidad en el campo penal o civil, en caso de que a la mascota le cause dano por conducta dolosa de un tercero.",
    monto: "Sin limite",
    eventos: "1 evento por año",
  },
]

const mascotaReferencia = [
  "Transmision de mensajes urgentes",
  "Referencia y coordinacion de caminatas ecorecreativas caninas",
  "Informacion sobre veterinarias, guarderias y demas servicios de mascotas",
  "Referencia y coordinacion para cirugias, radiografias y ecografias",
  "Referencia y coordinacion de adiestrador de perros y clinicas veterinarias",
  "Referencia y coordinacion salon de bellezas, boutiques y clinicas veterinarias",
]

export default function BeneficiosPage() {
  return (
    <>
      <PageBanner
        title="Beneficios de nuestros planes exequiales"
        description="Descubre todos los beneficios exclusivos que obtienen nuestros afiliados. Asistencias premium 24/7, paquetes de seguros y mucho mas para ti y tu familia."
      />

      {/* Asistencias Premium - Virtuales/Telefonicas */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Asistencias Premium</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Orientacion profesional 24/7
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Asistencia las 24 horas, los 365 dias del año. Orientacion virtual y telefonica con profesionales en
              diversas areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {asistenciasPremiumVirtuales.map((asistencia) => (
              <div
                key={asistencia.title}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <asistencia.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground mb-2 leading-snug">{asistencia.title}</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {asistencia.monto}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {asistencia.eventos}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Asistencias Premium - Domicilio */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Asistencia a domicilio</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Servicios presenciales en tu hogar
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Atencion medica, enfermeria, examenes y mas servicios directamente en tu domicilio cuando los necesites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {asistenciasDomicilio.map((asistencia) => (
              <div
                key={asistencia.title}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <asistencia.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground mb-2 leading-snug">{asistencia.title}</h3>
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {asistencia.monto}
                      </p>
                      {asistencia.eventos && (
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          {asistencia.eventos}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Paquete Solientegral - Sinergia */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Paquete Solientegral</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Sinergia - Valores asegurados
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Proteccion integral con tres niveles de cobertura que se adaptan a tus necesidades.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 rounded-tl-xl font-display font-bold">Plan</th>
                  <th className="text-left p-4 font-display font-bold">Valores Asegurados</th>
                  <th className="text-center p-4 font-display font-bold">Opcion 1</th>
                  <th className="text-center p-4 font-display font-bold">Opcion 2</th>
                  <th className="text-center p-4 rounded-tr-xl font-display font-bold">Opcion 3</th>
                </tr>
              </thead>
              <tbody>
                {solientegralRows.map((grupo) =>
                  grupo.items.map((item, idx) => (
                    <tr
                      key={`${grupo.plan}-${item.nombre}`}
                      className="border-b border-border hover:bg-primary/5 transition-colors"
                    >
                      {idx === 0 && (
                        <td
                          rowSpan={grupo.items.length}
                          className="p-4 font-display font-bold text-primary bg-primary/5 align-middle"
                        >
                          {grupo.plan}
                        </td>
                      )}
                      <td className="p-4 text-sm text-foreground">{item.nombre}</td>
                      <td className="p-4 text-sm text-center text-muted-foreground font-medium">{item.op1}</td>
                      <td className="p-4 text-sm text-center text-muted-foreground font-medium">{item.op2}</td>
                      <td className="p-4 text-sm text-center text-muted-foreground font-medium">{item.op3}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Paquete Solienvida */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Paquete Solienvida</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Amparos y alternativas de cobertura
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Cuatro opciones de cobertura con proteccion ante accidentes, enfermedades graves, desempleo y mas.
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th className="text-left p-4 rounded-tl-xl font-display font-bold">Amparo</th>
                  <th className="text-center p-4 font-display font-bold">Opcion 1</th>
                  <th className="text-center p-4 font-display font-bold">Opcion 2</th>
                  <th className="text-center p-4 font-display font-bold">Opcion 3</th>
                  <th className="text-center p-4 rounded-tr-xl font-display font-bold">Opcion 4</th>
                </tr>
              </thead>
              <tbody>
                {solientevidaRows.map((row) => (
                  <tr key={row.nombre} className="border-b border-border hover:bg-primary/5 transition-colors">
                    <td className="p-4 text-sm text-foreground font-medium">{row.nombre}</td>
                    <td className="p-4 text-sm text-center text-muted-foreground">
                      {row.op1 === "SI" ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <span className="font-medium">{row.op1}</span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-center text-muted-foreground">
                      {row.op2 === "SI" ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <span className="font-medium">{row.op2}</span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-center text-muted-foreground">
                      {row.op3 === "SI" ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <span className="font-medium">{row.op3}</span>
                      )}
                    </td>
                    <td className="p-4 text-sm text-center text-muted-foreground">
                      {row.op4 === "SI" ? (
                        <Check className="w-5 h-5 text-primary mx-auto" />
                      ) : (
                        <span className="font-medium">{row.op4}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Mascota Light - Asistencia */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Mascota Light</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Asistencia para tu mascota 24/7
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              Porque ellos tambien son parte de la familia. Asistencia veterinaria, traslados, paseos y guarderia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {mascotaAsistencia.map((asistencia) => (
              <div
                key={asistencia.title}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <asistencia.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-foreground mb-2 leading-snug">{asistencia.title}</h3>
                    {"descripcion" in asistencia && asistencia.descripcion && (
                      <p className="text-xs text-muted-foreground mb-2">{asistencia.descripcion}</p>
                    )}
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {asistencia.monto}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                        {asistencia.eventos}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Asistencia Legal Mascota */}
          <div className="max-w-5xl mx-auto mt-12">
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-8">Asistencia Legal Mascota</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {mascotaLegal.map((item) => (
                <div
                  key={item.title}
                  className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-display font-bold text-foreground mb-2">{item.title}</h4>
                      <p className="text-xs text-muted-foreground mb-3 leading-relaxed">{item.descripcion}</p>
                      <div className="space-y-1">
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Shield className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          {item.monto}
                        </p>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                          {item.eventos}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Referencia & Coordinacion */}
          <div className="max-w-4xl mx-auto mt-12">
            <h3 className="font-display text-2xl font-bold text-foreground text-center mb-2">
              Referencia & Coordinacion
            </h3>
            <p className="text-center text-sm text-muted-foreground mb-8">Monto máximo y eventos: Sin limite</p>
            <div className="grid md:grid-cols-2 gap-4">
              {mascotaReferencia.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <PawPrint className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Accede a todos estos beneficios hoy
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto">
              Nuestros asesores estan listos para ayudarte a elegir el plan perfecto para ti, tu familia y tus
              mascotas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8" asChild>
                <Link href="/cotizar">
                  Cotizar mi plan
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 px-8" asChild>
                <a href="tel:6930172">
                  <Phone className="w-5 h-5" />
                  Llamar al PBX
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
