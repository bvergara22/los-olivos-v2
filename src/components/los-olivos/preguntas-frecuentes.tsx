"use client"

import { Minus, Plus } from "lucide-react"
import { useState } from "react"

const WA = "https://wa.me/573233093435"
const PORTAL = "https://www.portal.losolivoscartagena.com"

const link = (href: string, label: string) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors">
    {label}
  </a>
)

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "¿Quieres consultar tu perfil de afiliado?",
    a: (
      <div className="space-y-3">
        <div>
          <p className="font-semibold text-foreground mb-1">A través de Lía:</p>
          <ol className="list-decimal list-inside space-y-0.5 ml-1">
            <li>En el menú principal</li>
            <li>Seleccionas el perfil de afiliado</li>
            <li>E ingresas tu doc de identidad</li>
          </ol>
        </div>
        <div>
          <p className="font-semibold text-foreground mb-1">A través del {link(PORTAL, "Portal Los Olivos")}:</p>
          <p>Recuerda... Tu usuario es el correo con el que te afiliaste y la contraseña tu documento de identidad.</p>
        </div>
      </div>
    ),
  },
  {
    q: "¿Cómo hago para conocer mi estado de cuenta?",
    a: <>Para conocer el estado de tu cuenta, puedes comunicarte a nuestro número de WhatsApp {link(WA, "323-309 3435")}. Nuestra asistente de experiencia, LIA te guiará paso a paso para acceder a la información de tu plan integral, beneficiarios y estado de cuenta; debes escoger la opción &ldquo;Cartera&rdquo; en nuestro menú principal. En caso de requerir atención personalizada, uno de nuestros gestores especializados te acompañará en el proceso.</>,
  },
  {
    q: "¿Cuáles son mis beneficiarios?",
    a: <>Puedes consultar tu lista de beneficiarios escribiendo a nuestro número de WhatsApp {link(WA, "323-309 3435")}. Por medio del chat, LIA te orientará para acceder a la información de tu plan. Si necesitas mayor acompañamiento, uno de nuestros gestores especializados te acompañará en el proceso.</>,
  },
  {
    q: "¿Qué me cubre mi plan?",
    a: <>Con tu plan de previsión integral cuentas con cobertura en todo el territorio colombiano. Accedes a asistencias en vida, asistencia psicológica; nuestros planes cubren el proceso exequial completo: traslado inicial, trámites notariales, cofre, velación, transporte, inhumación o cremación, misa de conmemoración y apoyo en la superación del duelo.</>,
  },
  {
    q: "¿Cómo puedo obtener una factura de gastos funerarios?",
    a: <>Ingresa al {link(PORTAL, "portal.losolivoscartagena.com")}, realiza la solicitud mediante una PQRS {link(`${PORTAL}/pqrs`, "(¿cómo lo hago?)")} y adjunta el registro de defunción, documento de identidad del titular y del fallecido. Si necesitas apoyo, uno de nuestros gestores especializados te acompañará en el proceso. Comunícate al {link(WA, "323-309 3435")}.</>,
  },
  {
    q: "¿Dónde se encuentra el registro de defunción de mi ser querido?",
    a: <>Puedes comunicarte a nuestro número de WhatsApp {link(WA, "323-309 3435")} y LIA te ayudará con la información necesaria, escogiendo la opción de homenajes en nuestro menú principal.</>,
  },
  {
    q: "¿Cómo es el proceso para exhumar a mi ser querido?",
    a: <>Debes contar con el permiso de exhumación otorgado por la Alcaldía de Cartagena, el certificado de defunción y el pago del proceso. Para orientación detallada comunícate al {link(WA, "323-309 3435")}.</>,
  },
  {
    q: "¿Dónde puedo realizar mis pagos?",
    a: <>Te recomendamos nuestra pasarela en {link("https://pagos.losolivoscartagena.com", "pagos.losolivoscartagena.com")}, donde podrás pagar mediante PSE, tarjetas crédito, débito y efectivo. Si tienes alguna dificultad, escríbenos al {link(WA, "323-309 3435")}.</>,
  },
  {
    q: "¿Cómo hago para afiliarme?",
    a: <>Solo necesitas la información de los beneficiarios (nombre, documento y fecha de nacimiento), ingresar al {link(`${PORTAL}/afiliacion-en-linea`, "portal de afiliaciones en línea")}, escoger la sede y el plan, completar los datos con los documentos requeridos y realizar el pago en línea. Para ayuda comunícate al {link(WA, "323-309 3435")}.</>,
  },
  {
    q: "¿Cómo hago para desvincular a una persona de mi plan?",
    a: <>Puedes hacerlo a través del {link(PORTAL, "portal web")} mediante una PQRS, o por correo a {link("mailto:contacto@losolivoscartagena.com", "contacto@losolivoscartagena.com")} indicando el concepto y adjuntando los documentos de identidad. Para acompañamiento llama al {link(WA, "323-309 3435")}.</>,
  },
]

function FaqItem({ q, a, open, onToggle }: { q: string; a: React.ReactNode; open: boolean; onToggle: () => void }) {
  return (
    <div className={`border-b border-border transition-colors duration-300 ${open ? "border-primary/30" : ""}`}>
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left group"
      >
        <span className={`text-sm sm:text-base font-medium leading-snug transition-colors duration-300 ${open ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
          {q}
        </span>
        <span className={`relative flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${open ? "bg-primary text-white" : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"}`}>
          <Plus className={`w-3.5 h-3.5 absolute transition-all duration-300 ${open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"}`} />
          <Minus className={`w-3.5 h-3.5 absolute transition-all duration-300 ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"}`} />
        </span>
      </button>
      {/* Grid trick: animates from 0fr→1fr smoothly without needing scrollHeight */}
      <div className={`grid transition-[grid-template-rows] duration-350 ease-in-out ${open ? "[grid-template-rows:1fr]" : "[grid-template-rows:0fr]"}`}>
        <div className="overflow-hidden">
          <div className="pb-5 text-sm sm:text-base text-muted-foreground leading-relaxed">
            {a}
          </div>
        </div>
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
              href={WA}
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
                key={i}
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
