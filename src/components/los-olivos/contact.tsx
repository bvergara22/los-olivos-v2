"use client"

import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"

const items = [
  {
    href: "https://wa.me/573233093435",
    external: true,
    icon: MessageCircle,
    label: "WhatsApp · Atención 24/7",
    value: "+57 323 3093435",
    cta: "Escribir ahora",
  },
  {
    href: "tel:3106171987",
    external: false,
    icon: Phone,
    label: "Teléfono de homenajes",
    value: "310 6171987",
    cta: "Llamar",
  },
  {
    href: "mailto:contacto@losolivoscartagena.com",
    external: false,
    icon: Mail,
    label: "Correo electrónico",
    value: "contacto@losolivoscartagena.com",
    cta: "Enviar correo",
  },
  {
    href: "https://maps.google.com/?q=Cordialidad+Transversal+54+%2331-J27+Cartagena+Colombia",
    external: true,
    icon: MapPin,
    label: "Dirección",
    value: "Carretera la Cordialidad Trv 54 #31-J27",
    cta: "Ver en el mapa",
  },
]

export function Contact() {
  return (
    <section id="contacto" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagen-contactanos.png"
          alt=""
          fill
          className="object-cover object-[center_30%] lg:object-[center_50%]"
          priority
        />
        <div className="absolute inset-0 bg-white/60 lg:bg-white/50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-10">
          <span className="text-3xl md:text-4xl text-primary block">¡Contáctanos!</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2">
            ¿Listo para proteger a tu familia?
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed font-medium">
            Comunícate con nosotros de manera directa, rápida y sencilla.<br />
            Nuestros asesores te atenderán de manera inmediata.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {items.map((item) => {
            const Icon = item.icon
            const inner = (
              <div className="flex flex-row lg:flex-col items-center lg:items-start gap-4 p-4 md:p-5 rounded-2xl bg-white/80 backdrop-blur-sm border border-white hover:border-primary/30 hover:shadow-lg transition-all group h-full w-full">
                <div className="w-11 h-11 rounded-full bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm leading-snug">{item.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed truncate">{item.value}</p>
                </div>
                <span className="hidden lg:inline-flex text-xs font-semibold text-primary border border-primary/30 rounded-full px-3 py-1 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors mt-auto flex-shrink-0">
                  {item.cta}
                </span>
              </div>
            )

            return (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex"
              >
                {inner}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
