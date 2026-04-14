"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import Image from "next/image"

export function Contact() {
  return (
    <section id="contacto" className="relative py-20 overflow-hidden">
      {/* Fondo con imagen */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/imagen-contactanos.png"
          alt=""
          fill
          className="object-cover object-[center_20%] lg:object-[center_90%]"
          priority
        />
        <div className="absolute inset-0 bg-white/50 lg:bg-white/40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <span className="text-3xl md:text-4xl text-primary block">¡Contáctanos!</span>
              <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
                ¿Listo para proteger a tu familia?
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed ">
                Comunícate con nosotros de manera directa, rápida y sencilla.
                Nuestros asesores te atenderán de manera inmediata.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a
                href="tel:3106171987"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Teléfono</p>
                  <p className="text-sm text-muted-foreground">310 6171987</p>
                </div>
              </a>

              <a
                href="https://wa.me/573233093435"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">WhatsApp</p>
                  <p className="text-sm text-muted-foreground">+57 323 3093435</p>
                </div>
              </a>

              <a
                href="mailto:contacto@losolivoscartagena.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Correo</p>
                  <p className="text-sm text-muted-foreground">contacto@losolivoscartagena.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Dirección</p>
                  <p className="text-sm text-muted-foreground">Carretera la Cordialidad Trv 54 #31-J27</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-sm lg:mt-44">
            <form className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">
                  Nombre completo
                </label>
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  className="h-10 bg-muted/30"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">
                  Teléfono o WhatsApp
                </label>
                <Input
                  type="tel"
                  placeholder="Tu número de contacto"
                  className="h-10 bg-muted/30"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-foreground mb-1.5 block">
                  Mensaje
                </label>
                <Textarea
                  placeholder="¿En qué podemos ayudarte?"
                  rows={3}
                  className="bg-muted/30"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 mt-1"
              >
                Enviar mensaje
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
