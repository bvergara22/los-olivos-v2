import { AlertTriangle, ClipboardList, FileCheck, FileText, Phone, Scale, Shield, UserCheck } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Trámites para Seres Queridos Fallecidos - Los Olivos Cartagena",
  description: "Conoce los pasos y documentación necesaria para cumplir con todos los trámites en la prestación de nuestro homenaje.",
}

const pasosIniciales = [
  {
    number: 1,
    title: "Que un médico certifique la defunción",
    description: "Si no estás en un hospital, llama al 125 e informa de la situación. Procura tener la documentación (Cédula, pasaporte, ...) del ser querido a la mano.",
    icon: FileCheck,
  },
  {
    number: 2,
    title: "Contáctanos",
    description: "Llámanos y nos encargaremos del traslado de tu ser querido. Te informaremos de todo el proceso.",
    icon: Phone,
  },
  {
    number: 3,
    title: "Selección de las opciones para el servicio funerario",
    description: "Deberás elegir si se realiza inhumación o cremación, si se requiere sala de velación, etc. Te acompañaremos y te apoyaremos en todo el proceso.",
    icon: ClipboardList,
  },
  {
    number: 4,
    title: "Informar a familiares y amigos",
    description: "Avisa primero a los familiares y amigos más cercanos y luego al resto de conocidos. En la sección de Obituarios encontrarás la información de velación y horario.",
    icon: UserCheck,
  },
]

const causasNaturales = [
  {
    number: 1,
    title: "Que el médico certifique la defunción",
    description: "Si no estás en un hospital, llama al 125 e informa de la situación. Procura tener a mano la documentación que identifique a tu ser querido.",
  },
  {
    number: 2,
    title: "Contáctanos",
    description: "Llámanos y te acompañaremos en todo el proceso.",
  },
  {
    number: 3,
    title: "Traslado del ser querido",
    description: "El ser querido se traslada a la funeraria Los Olivos hasta el tiempo determinado.",
  },
  {
    number: 4,
    title: "Identificación del ser querido",
    description: "En Los Olivos cumplimos con una serie de protocolos donde garantizamos que los requisitos se cumplan correctamente y corroboramos la información con un familiar.",
  },
]

const documentación = [
  {
    number: 1,
    title: "Certificado médico de defunción",
    description: "Debe ser expedido por un médico adscrito al DADIS, con la respectiva papelería. Deben aparecer nombres completos, números de cédula, fecha y hora de la defunción. El médico responsable debe firmar con su número de registro médico y sello.",
    icon: FileCheck,
  },
  {
    number: 2,
    title: "Registro de la defunción",
    description: "Se realiza en la notaría de la ciudad o municipio donde ocurre la defunción. Con este registro se procede a dar de baja al ser querido en las diferentes plataformas de información. Se necesita el acta médica de defunción original y copia de la cédula del ser querido.",
    icon: FileText,
  },
  {
    number: 3,
    title: "Licencia de inhumación, cremación, traslado",
    description: "La licencia se realiza con el acta de defunción expedida por el médico. Este documento es expedido por el ministerio de salud. En Cartagena es el DADIS quien se encarga. Con este documento podemos proceder a inhumar, cremar o trasladar.",
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
    title: "Fiscalía",
    description: "Se encarga de la investigación con el fin de esclarecer los hechos. Los cuerpos de medicina legal no pueden ser cremados sin una autorización del fiscal que lleve el caso.",
  },
  {
    number: 3,
    title: "Resultado de la necropsia",
    description: "Después de ingresar el fallecido para la necropsia dependemos del tiempo del funcionario de medicina legal. No hay un tiempo establecido para la entrega del cuerpo.",
  },
  {
    number: 4,
    title: "Traslado a la funeraria",
    description: "La fiscalía emite 2 documentos: uno de entrega de cuerpo y autorización de registro de muerte en la notaría. Una vez expedidos, medicina legal entregará el cuerpo a los familiares.",
  },
  {
    number: 5,
    title: "Trámites por parte de familiares",
    description: "Los familiares son los encargados de realizar los trámites ante medicina legal y fiscalía. Como funeraria brindamos asesorías pero estas diligencias requieren la presencia del familiar.",
  },
]

const despuésFuneral = [
  {
    number: 1,
    title: "Baja en la Seguridad Social",
    description: "Se realiza en los Centros de Atención e Información de la Seguridad Social y se realizan los trámites para obtener prestaciones para cónyuge, hijos o familiares.",
  },
  {
    number: 2,
    title: "Certificado de últimas voluntades",
    description: "Se obtiene 15 días después del fallecimiento. Con él se puede saber si hay testamento y el notario al que hay que acudir para conocerlo.",
  },
  {
    number: 3,
    title: "Certificado de contratos de seguros",
    description: "Es imprescindible para saber si el difunto disponía de seguros de vida o accidentes. Se obtiene 15 días después del fallecimiento.",
  },
  {
    number: 4,
    title: "Testamento o declaración de herederos",
    description: "Se solicita al notario entregando el certificado de defunción y de últimas voluntades. Si no existe, debe realizarse un acta de declaración de herederos.",
  },
  {
    number: 5,
    title: "Escritura pública de herencia",
    description: "Se realiza ante notario y es imprescindible para inscribir los bienes inmuebles en el Registro de la Propiedad a nombre de los herederos.",
  },
  {
    number: 6,
    title: "Liquidación de impuestos",
    description: "Seis meses tras el fallecimiento es necesario liquidar los impuestos sobre sucesiones y donaciones en la Agencia Tributaria.",
  },
  {
    number: 7,
    title: "Cambio de titularidad de bienes",
    description: "Los inmuebles deben inscribirse a nombre de los herederos. Para vehículos hay que informar a la Dirección General de Tráfico.",
  },
  {
    number: 8,
    title: "Borrado de la huella digital",
    description: "Es recomendable cancelar todas las cuentas del fallecido en redes sociales, correo electrónico y otras aplicaciones o medios online.",
  },
]

export default function TramitesPage() {
  return (
    <>
      {/* Hero con imagen */}
      <section className="relative pt-28 pb-12 md:pb-16 overflow-hidden">
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
              <Image
                src="/tramitesolivos.png"
                alt=""
                aria-hidden
                width={500}
                height={380}
                className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-40 mix-blend-multiply"
              />
              <Image
                src="/tramitesolivos.png"
                alt="Trámites Los Olivos"
                width={500}
                height={380}
                className="relative w-full h-auto object-contain mix-blend-multiply drop-shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                priority
              />
            </div>
          </div>
        </div>
        {/* Wave separator */}
        <div className="absolute -bottom-px left-0 right-0 z-20 text-background" aria-hidden>
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
          </svg>
        </div>
      </section>

      {/* Que hacer - Pasos iniciales */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-8 md:mb-12">
              <span className="text-3xl md:text-4xl text-duelo-main block">Primeros pasos</span>
              <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
                ¿Qué hacer?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {pasosIniciales.map((paso) => (
                <div key={paso.number} className="bg-card rounded-2xl p-6 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-duelo-main text-white flex items-center justify-center text-xl font-bold font-display flex-shrink-0">
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
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mb-6 md:mb-10">
              <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
                ¿Qué hacer en caso de fallecimiento por causas naturales?
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Se considera fallecimiento natural el que ocurre sin violencia y en el que el médico puede certificar con certeza las causas sin que sea necesario realizar una autopsia.
              </p>
            </div>

            <div className="space-y-4">
              {causasNaturales.map((paso) => (
                <div key={paso.number} className="flex items-start gap-4 p-5 bg-card rounded-xl">
                  <div className="w-10 h-10 rounded-full bg-duelo-main text-white flex items-center justify-center text-sm font-bold font-display flex-shrink-0">
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
      <section className="py-12 md:py-20 bg-duelo-main/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-8 md:mb-12">
              <span className="text-3xl md:text-4xl text-duelo-main block">Documentos importantes</span>
              <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
                Documentación requerida antes y durante del funeral
              </h2>
            </div>

            <div className="space-y-6">
              {documentación.map((doc) => (
                <div key={doc.number} className="bg-card rounded-2xl p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-duelo-main/10 text-duelo-main flex items-center justify-center flex-shrink-0">
                      <doc.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-duelo-main uppercase">Paso {doc.number}</span>
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
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex items-start gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
                  ¿Qué sucede en caso de fallecimiento por causa violenta?
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  En estos casos se requieren procedimientos adicionales con las autoridades competentes.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {causaViolenta.map((paso) => (
                <div key={paso.number} className="flex items-start gap-4 p-5 bg-card rounded-xl">
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
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex items-start gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-duelo-main/10 text-duelo-main flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
                  Después del funeral
                </h2>
                <p className="text-muted-foreground mt-4 leading-relaxed">
                  Documentación y trámites que hay que dejar resueltos tras un fallecimiento.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {despuésFuneral.map((paso) => (
                <div key={paso.number} className="bg-card rounded-xl p-5 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-duelo-main/10 text-duelo-main flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
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
