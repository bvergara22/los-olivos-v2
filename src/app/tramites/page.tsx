import { PageBanner } from "@/components/los-olivos/page-banner"
import { AlertTriangle, ClipboardList, FileCheck, FileText, Phone, Scale, Shield, UserCheck } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tramites para Seres Queridos Fallecidos - Los Olivos Cartagena",
  description: "Conoce los pasos y documentacion necesaria para cumplir con todos los tramites en la prestacion de nuestro homenaje.",
}

const pasosIniciales = [
  {
    number: 1,
    title: "Que un medico certifique la defuncion",
    description: "Si no estas en un hospital, llama al 125 e informa de la situacion. Procura tener la documentacion (Cedula, pasaporte, ...) del ser querido a la mano.",
    icon: FileCheck,
  },
  {
    number: 2,
    title: "Contactanos",
    description: "Llamanos y nos encargaremos del traslado de tu ser querido. Te informaremos de todo el proceso.",
    icon: Phone,
  },
  {
    number: 3,
    title: "Seleccion de las opciones para el servicio funerario",
    description: "Deberas elegir si se realiza inhumacion o cremacion, si se requiere sala de velacion, etc. Te acompanaremos y te apoyaremos en todo el proceso.",
    icon: ClipboardList,
  },
  {
    number: 4,
    title: "Informar a familiares y amigos",
    description: "Avisa primero a los familiares y amigos mas cercanos y luego al resto de conocidos. En la seccion de Obituarios encontraras la informacion de velacion y horario.",
    icon: UserCheck,
  },
]

const causasNaturales = [
  {
    number: 1,
    title: "Que el medico certifique la defuncion",
    description: "Si no estas en un hospital, llama al 125 e informa de la situacion. Procura tener a mano la documentacion que identifique a tu ser querido.",
  },
  {
    number: 2,
    title: "Contactanos",
    description: "Llamanos y te acompanaremos en todo el proceso.",
  },
  {
    number: 3,
    title: "Traslado del ser querido",
    description: "El ser querido se traslada a la funeraria Los Olivos hasta el tiempo determinado.",
  },
  {
    number: 4,
    title: "Identificacion del ser querido",
    description: "En Los Olivos cumplimos con una serie de protocolos donde garantizamos que los requisitos se cumplan correctamente y corroboramos la informacion con un familiar.",
  },
]

const documentacion = [
  {
    number: 1,
    title: "Certificado medico de defuncion",
    description: "Debe ser expedido por un medico adscrito al DADIS, con la respectiva papeleria. Deben aparecer nombres completos, numeros de cedula, fecha y hora de la defuncion. El medico responsable debe firmar con su numero de registro medico y sello.",
    icon: FileCheck,
  },
  {
    number: 2,
    title: "Registro de la defuncion",
    description: "Se realiza en la notaria de la ciudad o municipio donde ocurre la defuncion. Con este registro se procede a dar de baja al ser querido en las diferentes plataformas de informacion. Se necesita el acta medica de defuncion original y copia de la cedula del ser querido.",
    icon: FileText,
  },
  {
    number: 3,
    title: "Licencia de inhumacion, cremacion, traslado",
    description: "La licencia se realiza con el acta de defuncion expedida por el medico. Este documento es expedido por el ministerio de salud. En Cartagena es el DADIS quien se encarga. Con este documento podemos proceder a inhumar, cremar o trasladar.",
    icon: Shield,
  },
]

const causaViolenta = [
  {
    number: 1,
    title: "Medicina legal",
    description: "Realiza la necropsia con el fin de establecer las causas del fallecimiento.",
  },
  {
    number: 2,
    title: "Fiscalia",
    description: "Se encarga de la investigacion con el fin de esclarecer los hechos. Los cuerpos de medicina legal no pueden ser cremados sin una autorizacion del fiscal que lleve el caso.",
  },
  {
    number: 3,
    title: "Resultado de la necropsia",
    description: "Despues de ingresar el fallecido para la necropsia dependemos del tiempo del funcionario de medicina legal. No hay un tiempo establecido para la entrega del cuerpo.",
  },
  {
    number: 4,
    title: "Traslado a la funeraria",
    description: "La fiscalia emite 2 documentos: uno de entrega de cuerpo y autorizacion de registro de muerte en la notaria. Una vez expedidos, medicina legal entregara el cuerpo a los familiares.",
  },
  {
    number: 5,
    title: "Tramites por parte de familiares",
    description: "Los familiares son los encargados de realizar los tramites ante medicina legal y fiscalia. Como funeraria brindamos asesorias pero estas diligencias requieren la presencia del familiar.",
  },
]

const despuesFuneral = [
  {
    number: 1,
    title: "Baja en la Seguridad Social",
    description: "Se realiza en los Centros de Atencion e Informacion de la Seguridad Social y se realizan los tramites para obtener prestaciones para conyuge, hijos o familiares.",
  },
  {
    number: 2,
    title: "Certificado de ultimas voluntades",
    description: "Se obtiene 15 dias despues del fallecimiento. Con el se puede saber si hay testamento y el notario al que hay que acudir para conocerlo.",
  },
  {
    number: 3,
    title: "Certificado de contratos de seguros",
    description: "Es imprescindible para saber si el difunto disponia de seguros de vida o accidentes. Se obtiene 15 dias despues del fallecimiento.",
  },
  {
    number: 4,
    title: "Testamento o declaracion de herederos",
    description: "Se solicita al notario entregando el certificado de defuncion y de ultimas voluntades. Si no existe, debe realizarse un acta de declaracion de herederos.",
  },
  {
    number: 5,
    title: "Escritura publica de herencia",
    description: "Se realiza ante notario y es imprescindible para inscribir los bienes inmuebles en el Registro de la Propiedad a nombre de los herederos.",
  },
  {
    number: 6,
    title: "Liquidacion de impuestos",
    description: "Seis meses tras el fallecimiento es necesario liquidar los impuestos sobre sucesiones y donaciones en la Agencia Tributaria.",
  },
  {
    number: 7,
    title: "Cambio de titularidad de bienes",
    description: "Los inmuebles deben inscribirse a nombre de los herederos. Para vehiculos hay que informar a la Direccion General de Trafico.",
  },
  {
    number: 8,
    title: "Borrado de la huella digital",
    description: "Es recomendable cancelar todas las cuentas del fallecido en redes sociales, correo electronico y otras aplicaciones o medios online.",
  },
]

export default function TramitesPage() {
  return (
    <>
      <PageBanner
        title="Tramites para seres queridos fallecidos"
        description="Para dar cumplimiento con nuestra promesa de valor, es importante que conozcas los pasos a tener en cuenta en la prestacion de nuestro homenaje."
        icon={ClipboardList}
      />

      {/* Que hacer - Pasos iniciales */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary">Primeros pasos</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Que hacer?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pasosIniciales.map((paso) => (
                <div key={paso.number} className="bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold font-display flex-shrink-0">
                      {paso.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">{paso.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{paso.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fallecimiento por causas naturales */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3 text-balance">
                Que hacer en caso de fallecimiento por causas naturales?
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Se considera fallecimiento natural el que ocurre sin violencia y en el que el medico puede certificar con certeza las causas sin que sea necesario realizar una autopsia.
              </p>
            </div>

            <div className="space-y-4">
              {causasNaturales.map((paso) => (
                <div key={paso.number} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold font-display flex-shrink-0">
                    {paso.number}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{paso.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{paso.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Documentacion requerida */}
      <section className="py-16 md:py-20 bg-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-sm font-medium text-primary">Documentos importantes</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
                Documentacion requerida antes y durante del funeral
              </h2>
            </div>

            <div className="space-y-6">
              {documentacion.map((doc) => (
                <div key={doc.number} className="bg-card rounded-2xl border border-border p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                      <doc.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-primary uppercase">Paso {doc.number}</span>
                      </div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">{doc.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{doc.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Causa violenta */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">
                  Que sucede en caso de fallecimiento por causa violenta?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  En estos casos se requieren procedimientos adicionales con las autoridades competentes.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {causaViolenta.map((paso) => (
                <div key={paso.number} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
                  <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center text-sm font-bold font-display flex-shrink-0">
                    {paso.number}
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-foreground mb-1">{paso.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{paso.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Despues del funeral */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2 text-balance">
                  Despues del funeral
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Documentacion y tramites que hay que dejar resueltos tras un fallecimiento.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {despuesFuneral.map((paso) => (
                <div key={paso.number} className="bg-card rounded-xl border border-border p-5 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      {paso.number}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-foreground text-sm mb-1">{paso.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{paso.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
