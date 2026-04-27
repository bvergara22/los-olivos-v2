import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Tratamiento de Datos Personales - Los Olivos Cartagena",
  description: "Política de tratamiento de datos personales de Cartafun - Los Olivos Cartagena, conforme a la Ley 1581 de 2012.",
}

export default function TratamientoDatosPage() {
  return (
    <div className="bg-background">
      {/* Encabezado */}
      <div className="border-b border-border bg-muted/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">
            Documento legal
          </p>
          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Tratamiento de Datos Personales
          </h1>
          <p className="mt-2 text-base text-muted-foreground font-medium">
            Cartafun · Los Olivos Cartagena · NIT 800149226-0
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Conforme a la Ley Estatutaria 1581 de 2012 y el Decreto Nacional 1377 de 2013.
          </p>
        </div>
      </div>

      {/* Cuerpo del documento */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">

        {/* Introducción */}
        <section>
          <p className="text-foreground leading-relaxed text-sm sm:text-base">
            El presente documento ha sido elaborado y plasmado teniendo en cuenta las actividades que son
            desarrolladas por Cartafun. -Los Olivos Cartagena- conforme a la atención y contacto a través de
            los procesos de comercialización de planes de previsión exequiales, prestación de servicios
            funerarios, proveedores, funcionarios y terceros, con los cuales se establece una relación
            contractual contribuyendo con la protección de datos personales exigidas por la legislación
            colombiana de acuerdo con los lineamientos de{" "}
            <strong>Ley Estatutaria 1581 del 2012 y reglamentada parcialmente por el Decreto Nacional
            1377 de 2013</strong> "Por la cual se dictan disposiciones generales para la protección de
            datos personales". Así mismo, se asegura el respeto a los derechos prevalentes de menores de
            edad por lo que en aquellos casos o situaciones donde se requieran datos relacionados de los
            mismos, estos serán suministrados por el titular responsable acorde a la información previa u
            objetivo de la solicitud.
          </p>
        </section>

        {/* Usos autorizados */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-foreground pb-3 border-b border-border mb-6">
            Usos Autorizados de Datos Personales
          </h2>
          <p className="text-sm sm:text-base text-foreground leading-relaxed mb-6">
            Al aceptar de manera voluntaria, explícita, informada e inequívoca en los registros o formularios
            físicos y/o digitales, Cartafun. -Los Olivos Cartagena-, identificada mediante NIT. 800149226-0,
            actuará como responsable del tratamiento de los datos personales y podrá:
          </p>
          <ol className="space-y-5 list-none">
            {[
              "Gestionar trámites de actualización y rectificación de datos, atención al cliente, gestión administrativa, operativa, contractual como afiliado y/o usuarios relacionados con la actividad económica.",
              "Verificar la información suministrada para dar cumplimiento con el contrato suscrito que se celebre con la organización con el objetivo de llevar a cabo medidas tendientes a la prevención de actos fraudulentos e ilícitos.",
              "Brindar recepción, atención y gestión de Preguntas, Quejas, Reclamos y Solicitudes [PQRS]. El tiempo de respuesta estará sujeto a la normatividad legal vigente o puede variar de acuerdo al tipo de novedad que presente.",
              "Gestionar estadísticas conforme a la necesidad de la organización.",
              "Gestionar Cartera y cobranza incluyendo la comunicación en horario y frecuencia pertinentes y por los canales autorizados basados en las directrices de la Ley 2300 del 2023 [exceptuando el informar al cliente/afiliado sobre la confirmación oportuna de las operaciones monetarias realizadas; información solicitada requerida para la prestación del servicio y alertas sobre transacciones fraudulentas, inusuales o sospechosas] y demás acciones que respalden un acuerdo y comunicación serán autorizados por el afiliado o usuario. La autorización permite efectuar a cuenta propia o de un tercero las acciones enmarcadas en el tema jurídico para la gestión de cobro de las obligaciones suscritas y que requieren del pago oportuno por los afiliados, clientes o contratantes.",
              "Comunicar contenido empresarial incluyendo promociones del portafolio de productos, campañas comerciales de las unidades de negocio y demás información relacionada, necesaria y autorizada para mantener al afiliado actualizado sobre las novedades, modificaciones y demás contenido significativo incluyendo modificaciones al tratamiento de datos personales a través de los canales como: correo electrónico, llamada telefónica, mensaje de texto, páginas web, redes sociales, canales virtuales, entre otros.",
              "Expedir y gestionar registros contables y/o documentos digitales que se encuentren al alcance de la organización y su responsabilidad con afiliados, clientes, proveedores y funcionarios.",
              "Iniciar procesos de selección de talento humano y/o proveedores y a su vez efectuar contratación de este, que cumplió satisfactoriamente con el proceso. Estos a su vez serán tratados conforme a Seguridad y salud en el trabajo: sistema de seguridad social integral, licencias remuneradas y no remuneradas, permisos, incapacidades, pruebas de ingreso, periódicos, retiros y aquellos conforme al alcance de la normatividad legal vigente.",
              "Usar y corresponder por el material multimedia captado por el circuito de vigilancia interno en sus instalaciones y cobertura que afecten la seguridad de los visitantes, funcionarios, bienes e instalaciones y sean requeridas en procesos por parte de las autoridades administrativas y/o judiciales con los argumentos aplicables a la normatividad. El sistema de circuito de vigilancia no se instalará en áreas que vulneren el derecho a la intimidad y/o de uso privado.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-border text-xs font-semibold text-muted-foreground flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Sin autorización previa */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-foreground pb-3 border-b border-border mb-6">
            Tratamiento de Datos Personales Sin Autorización Previa
          </h2>
          <p className="text-sm sm:text-base text-foreground leading-relaxed mb-6">
            De acuerdo con el <strong>artículo 10 de la Ley 1581 de 2012</strong>, la autorización del Titular
            no será necesaria cuando se trate de:
          </p>
          <ol className="space-y-4 list-none">
            {[
              "Información requerida por una entidad pública o administrativa en ejercicio de sus funciones legales o por orden judicial.",
              "Datos de naturaleza pública.",
              "Casos de urgencia médica o sanitaria.",
              "Tratamiento de información autorizado por la ley para fines históricos, estadísticos o científicos.",
              "Datos relacionados con el Registro Civil de las Personas.",
            ].map((item, i) => (
              <li key={i} className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full border border-border text-xs font-semibold text-muted-foreground flex items-center justify-center mt-0.5">
                  {i + 1}
                </span>
                <p className="text-sm sm:text-base text-foreground leading-relaxed">{item}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* Medidas de seguridad */}
        <section>
          <p className="text-sm sm:text-base text-foreground leading-relaxed">
            Respaldando la autorización de tratamiento con los objetivos plasmados, Cartafun. -Los Olivos
            Cartagena- conforme a sus competencias y recursos establecerá las directrices y medidas para
            asegurar la información y registros evitando alteraciones, pérdida, acceso, uso, consulta para
            fines no autorizados.
          </p>
        </section>

        {/* Canal de atención */}
        <section>
          <h2 className="text-lg sm:text-xl font-bold text-foreground pb-3 border-b border-border mb-6">
            Canal de Atención al Usuario
          </h2>
          <p className="text-sm sm:text-base text-foreground leading-relaxed mb-6">
            Para requerimientos relacionados con el tratamiento de sus datos personales, puede comunicarse
            a través de los siguientes medios:
          </p>

          <div className="border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <tbody className="divide-y divide-border">
                {[
                  ["Sede principal", "Cordialidad Transversal 54 # 31-J27, Cartagena, Bolívar"],
                  ["Teléfono", "310 6171987"],
                  ["WhatsApp", "323 3093435"],
                  ["Línea nacional", "018000-180-150"],
                  ["Correo electrónico", "contacto@losolivoscartagena.com"],
                  ["Página web", "www.losolivoscartagena.com"],
                  ["Horario", "Lunes a viernes: 8:00 a.m. – 12:00 p.m. y 1:00 p.m. – 5:00 p.m. · Servicios funerarios: 24 horas"],
                ].map(([label, value]) => (
                  <tr key={label} className="even:bg-muted/30">
                    <td className="px-4 py-3 font-medium text-foreground w-40 sm:w-48 align-top">{label}</td>
                    <td className="px-4 py-3 text-muted-foreground">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Pie */}
        <div className="border-t border-border pt-8 text-xs text-muted-foreground">
          <p>© Cartafun · Los Olivos Cartagena · NIT 800149226-0 · Cartagena, Bolívar, Colombia.</p>
        </div>
      </div>
    </div>
  )
}
