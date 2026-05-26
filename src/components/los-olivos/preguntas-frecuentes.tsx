"use client"

import { Minus, Plus } from "lucide-react"
import { useRef, useState } from "react"

const faqs = [
  {
    q: "¿Cómo hago para conocer mi estado de cuenta?",
    a: "Para conocer el estado de tu cuenta, puedes comunicarte al número oficial de Los Olivos Cartagena 323 309 3435. Nuestra asistente virtual LIA te guiará paso a paso para acceder a la información de tu plan, afiliados y estado de cuenta. En caso de requerir atención más específica, un asesor especializado acompañará tu proceso.",
  },
  {
    q: "¿Cuáles son mis beneficiarios?",
    a: "Puedes consultar tu lista de beneficiarios escribiendo al número oficial 323 309 3435. Por medio del chat, LIA te orientará para acceder a los datos de tu plan y afiliados. Si necesitas mayor acompañamiento, un asesor estará disponible para ayudarte.",
  },
  {
    q: "¿Qué me cubre el plan?",
    a: "Con tu plan de previsión integral cuentas con cobertura en todo el territorio colombiano. Accedes a asistencias como SoliCanasta, Soli Renta, Soli Accidente, asistencia domiciliaria gratuita y asistencia psicológica según el plan que elijas. Todos los planes cubren el proceso exequial completo: traslado inicial, trámites notariales, cofre, velación, transporte, inhumación o cremación, misa de conmemoración y taller de manejo del duelo.",
  },
  {
    q: "¿Cómo puedo obtener una factura de gastos funerarios?",
    a: "Ingresa al portal portal.losolivoscartagena.com, realiza la solicitud mediante una PQRS y adjunta el registro de defunción, documento de identidad del titular y del fallecido. Si necesitas apoyo, comunícate al 323 309 3435.",
  },
  {
    q: "¿Dónde se encuentra el registro de defunción de mi ser querido?",
    a: "El contratante debe dirigirse a la notaría donde se registró el servicio. Si no tienes esta información, comunícate a la línea oficial 323 309 3435 y LIA te ayudará a ubicar los datos necesarios.",
  },
  {
    q: "¿Cómo es el proceso para exhumar a mi ser querido?",
    a: "Debes contar con el permiso de exhumación otorgado por la Alcaldía de Cartagena, el certificado de defunción y el pago del proceso. Para orientación detallada comunícate al 323 309 3435.",
  },
  {
    q: "¿Dónde puedo realizar mis pagos?",
    a: "Te recomendamos nuestra pasarela en pagos.losolivoscartagena.com, donde podrás pagar mediante PSE, tarjetas crédito, débito y efectivo. Si tienes alguna dificultad, escríbenos al 323 309 3435.",
  },
  {
    q: "¿Cómo hago para afiliarme?",
    a: "Solo necesitas la información de los beneficiarios (nombre, documento y fecha de nacimiento), ingresar al portal de afiliaciones en línea, escoger la sede y el plan, completar los datos con los documentos requeridos y realizar el pago en línea. Para ayuda comunícate al 323 309 3435.",
  },
  {
    q: "¿Cómo hago para desvincular a una persona de mi plan exequial?",
    a: "Puedes hacerlo a través del portal web portal.losolivoscartagena.com mediante una PQRS, o por correo a contacto@losolivoscartagena.com indicando el concepto y adjuntando los documentos de identidad. Para acompañamiento llama al 323 309 3435.",
  },
]

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`border-b border-border transition-colors duration-200 ${open ? "border-primary/30" : ""}`}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left group"
      >
        <span className={`text-sm sm:text-base font-medium leading-snug transition-colors ${open ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
          {q}
        </span>
        <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${open ? "bg-primary text-white" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"}`}>
          {open ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        // eslint-disable-next-line react-hooks/refs
        style={{ maxHeight: open ? `${contentRef.current?.scrollHeight ?? 400}px` : "0px" }}
      >
        <p className="pb-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {a}
        </p>
      </div>
    </div>
  )
}

export function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[2fr_3fr] gap-10 lg:gap-20 items-start">

          {/* Izquierda */}
          <div className="lg:sticky lg:top-28">
            <span className="text-3xl md:text-4xl text-primary block">Preguntas frecuentes</span>
            <h2 className="font-display text-xl md:text-2xl text-foreground mt-2">
              Resolvemos tus dudas
            </h2>
            <p className="text-muted-foreground mt-4 leading-relaxed text-sm sm:text-base">
              Encuentra respuesta a las consultas más comunes de nuestros afiliados.
            </p>
            <a
              href="https://wa.me/573233093435"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-primary text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-primary/90 transition-colors"
            >
              ¿Tienes más dudas? Escríbenos
            </a>
          </div>

          {/* Derecha */}
          <div className="divide-y-0 border-t border-border">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
