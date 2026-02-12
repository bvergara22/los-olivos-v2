import { PageBanner } from "@/components/los-olivos/page-banner"
import { AlertTriangle, Eye, FileCheck, Lock, Mail, Shield, User } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tratamiento de Datos Personales - Los Olivos Cartagena",
  description: "Politica de privacidad y tratamiento de datos personales de Los Olivos Cartagena. Conoce como protegemos tu informacion.",
}

const principios = [
  {
    icon: Lock,
    title: "Legalidad",
    description: "El tratamiento de datos se realiza conforme a la Ley 1581 de 2012 y demas normas vigentes.",
  },
  {
    icon: Shield,
    title: "Finalidad",
    description: "Los datos son recolectados con fines especificos, explicitos y legitimos.",
  },
  {
    icon: Eye,
    title: "Libertad",
    description: "El tratamiento solo puede ejercerse con el consentimiento previo, expreso e informado del titular.",
  },
  {
    icon: FileCheck,
    title: "Veracidad",
    description: "La informacion debe ser veraz, completa, exacta, actualizada y comprobable.",
  },
]

const derechos = [
  "Conocer, actualizar y rectificar tus datos personales",
  "Solicitar prueba de la autorizacion otorgada",
  "Ser informado sobre el uso dado a tus datos personales",
  "Presentar quejas ante la Superintendencia de Industria y Comercio",
  "Revocar la autorizacion o solicitar la supresion de tus datos",
  "Acceder de forma gratuita a tus datos personales",
]

const finalidades = [
  "Prestacion de servicios exequiales y de prevision",
  "Gestion de afiliaciones y pagos",
  "Atencion de solicitudes, quejas y reclamos",
  "Envio de informacion sobre servicios y beneficios",
  "Cumplimiento de obligaciones legales y contractuales",
  "Estudios estadisticos y analisis de informacion",
  "Mejora continua de nuestros servicios",
]

export default function TratamientoDatosPage() {
  return (
    <>
      <PageBanner
        title="Politica de Tratamiento de Datos Personales"
        description="En Los Olivos Cartagena protegemos tu informacion personal con los mas altos estandares de seguridad y privacidad."
      />

      {/* Introduccion */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Responsable del Tratamiento
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    <strong>CENTRAL COOPERATIVA DE SERVICIOS FUNERARIOS DE CARTAGENA - CARTAFUN</strong>,
                    identificada con NIT 806.002.445-7, con domicilio principal en Cartagena la Cordialidad
                    Trv 54 #31-J27, Cartagena, Bolivar, Colombia.
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  En cumplimiento de la Ley 1581 de 2012 y el Decreto 1377 de 2013, Los Olivos Cartagena ha
                  adoptado la presente Politica de Tratamiento de Datos Personales, la cual tiene como objetivo
                  garantizar el derecho constitucional que tienen todas las personas a conocer, actualizar y
                  rectificar la informacion que se haya recogido sobre ellas.
                </p>

                <p className="leading-relaxed">
                  Esta politica aplica para toda la informacion personal registrada en las bases de datos de
                  Los Olivos Cartagena, ya sea de afiliados, usuarios, proveedores, empleados o cualquier persona
                  que haya suministrado sus datos a nuestra organizacion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principios */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Nuestro compromiso</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Principios del Tratamiento de Datos
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {principios.map((principio) => (
              <div
                key={principio.title}
                className="bg-card rounded-2xl border border-border p-6 text-center hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <principio.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{principio.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{principio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Finalidades */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Finalidad del Tratamiento de Datos
            </h2>
            <p className="text-muted-foreground text-center mb-8 leading-relaxed">
              Los Olivos Cartagena recopila y trata sus datos personales para las siguientes finalidades:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {finalidades.map((finalidad) => (
                <div
                  key={finalidad}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                >
                  <FileCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{finalidad}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Derechos */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
                  Derechos del Titular
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Como titular de datos personales, usted tiene los siguientes derechos:
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {derechos.map((derecho, index) => (
                <div
                  key={derecho}
                  className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border hover:border-primary/50 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                    {index + 1}
                  </div>
                  <span className="text-sm text-foreground">{derecho}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Procedimiento */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Como ejercer tus derechos?
            </h2>

            <div className="bg-card rounded-2xl border border-border p-8 md:p-10 space-y-6">
              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  Medios de Contacto
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Para ejercer tus derechos o realizar consultas sobre el tratamiento de tus datos personales,
                  puedes contactarnos a traves de:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-foreground">contacto@losolivoscartagena.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-primary" />
                    <span className="text-foreground">Carretera la Cordialidad Trv 54 #31-J27, Cartagena</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  Tiempo de Respuesta
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Los Olivos Cartagena dara respuesta a las solicitudes, consultas o reclamos dentro de los
                  terminos establecidos por la ley: 10 dias habiles para consultas y 15 dias habiles para reclamos,
                  contados a partir de la fecha de recibo de la solicitud.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-bold text-foreground mb-2">Importante</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Para garantizar tu seguridad, al momento de ejercer tus derechos deberemos validar tu
                      identidad mediante documento de identificacion. Esto es para proteger tu informacion y
                      evitar accesos no autorizados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seguridad */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 md:p-10">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                    Seguridad de la Informacion
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-muted-foreground">
                <p className="leading-relaxed">
                  Los Olivos Cartagena ha adoptado medidas tecnicas, humanas y administrativas necesarias para
                  otorgar seguridad a los registros evitando su adulteracion, perdida, consulta, uso o acceso no
                  autorizado o fraudulento.
                </p>

                <p className="leading-relaxed">
                  Toda la informacion y datos personales entregados a Los Olivos Cartagena seran protegidos
                  mediante controles de seguridad adecuados, acordes con las regulaciones aplicables y las mejores
                  practicas de la industria.
                </p>

                <p className="leading-relaxed">
                  Solo personal autorizado tiene acceso a tus datos personales, y estos se comprometen a mantener
                  la confidencialidad de la informacion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vigencia */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl border border-border p-8 text-center">
              <h2 className="font-display text-xl font-bold text-foreground mb-4">
                Vigencia y Modificaciones
              </h2>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                Esta politica de tratamiento de datos personales rige a partir de su publicacion.
                Los Olivos Cartagena se reserva el derecho de modificarla en cualquier momento para adaptarla
                a cambios legislativos o jurisprudenciales. Cualquier cambio sera comunicado oportunamente.
              </p>
              <p className="text-sm text-muted-foreground mt-6">
                Ultima actualizacion: Enero 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
