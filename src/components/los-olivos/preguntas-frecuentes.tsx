"use client"

import { ChevronDown } from "lucide-react"
import { useRef, useState } from "react"

const faqs = [
  {
    q: "¿Cómo hago para conocer mi estado de cuenta?",
    a: "Para conocer el estado de tu cuenta, puedes comunicarte al número oficial de Los Olivos Cartagena 323 309 3435. Nuestra asistente virtual Olivia te guiará paso a paso para acceder a la información de tu plan, afiliados y estado de cuenta. En caso de requerir atención más específica, un asesor especializado acompañará tu proceso.",
  },
  {
    q: "¿Cuáles son mis beneficiarios?",
    a: "Puedes consultar tu lista de beneficiarios escribiendo al número oficial 323 309 3435. Por medio del chat, Olivia te orientará para acceder a los datos de tu plan y afiliados. Si necesitas mayor acompañamiento, un asesor estará disponible para ayudarte.",
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
    a: "El contratante debe dirigirse a la notaría donde se registró el servicio. Si no tienes esta información, comunícate a la línea oficial 323 309 3435 y Olivia te ayudará a ubicar los datos necesarios.",
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

function FaqItem({
  q, a, index, open, onToggle,
}: {
  q: string; a: string; index: number; open: boolean; onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className={`rounded-xl border transition-all duration-200 ${open ? "border-primary/40 bg-white shadow-md" : "border-border bg-card hover:border-primary/20"}`}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <div className="flex items-center gap-3 min-w-0">
          <span className={`flex-shrink-0 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center transition-colors ${open ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
            {index + 1}
          </span>
          <span className="text-sm sm:text-base font-medium text-foreground leading-snug">{q}</span>
        </div>
        <ChevronDown
          className={`flex-shrink-0 w-5 h-5 text-primary transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? `${contentRef.current?.scrollHeight ?? 400}px` : "0px" }}
      >
        <p className="px-5 pb-5 text-sm sm:text-base text-muted-foreground leading-relaxed pl-16">
          {a}
        </p>
      </div>
    </div>
  )
}

export function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="relative py-12 md:py-20 overflow-hidden" style={{ background: "linear-gradient(160deg, #e8f5ef 0%, #d0ede0 50%, #e4f4ec 100%)" }}>
      {/* Onda superior */}
      <svg className="absolute top-0 left-0 w-full h-10 md:h-auto pointer-events-none" viewBox="0 0 1440 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,60 C240,110 480,10 720,60 C960,110 1200,10 1440,60 L1440,0 L0,0 Z" fill="#52b788" fillOpacity="0.30" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="text-3xl md:text-4xl text-primary block">Preguntas frecuentes</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2">
            Resolvemos tus dudas
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Encuentra respuesta a las consultas más comunes de nuestros afiliados. Si no encuentras lo que buscas, escríbenos al{" "}
            <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">
              323 309 3435
            </a>
            .
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem
              key={faq.q}
              q={faq.q}
              a={faq.a}
              index={i}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
