"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react"

export function Contact() {
  return (
    <section id="contacto" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info - Ley de Proximidad */}
          <div className="space-y-8">
            <div>
              <span className="text-3xl md:text-4xl text-primary block">¡Contáctanos!</span>
              <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
                ¿Listo para proteger a tu familia?
              </h2>
              <p className="text-muted-foreground mt-4 leading-relaxed">
                Comunícate con nosotros de manera directa, rápida y sencilla.
                Nuestros asesores te atenderán de manera inmediata.
              </p>
            </div>

            {/* Contact Methods - Ley de Similitud */}
            <div className="space-y-4">
              <a 
                href="tel:6930172" 
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">Teléfono</p>
                  <p className="text-sm text-muted-foreground">6930172</p>
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

          {/* Contact Form - Ley de Hick: Solo 3 campos */}
          <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Escríbenos un mensaje
            </h3>
            
            <form className="flex flex-col gap-5">
              {/* Ley de Fitt: Campos grandes */}
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Nombre completo
                </label>
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  className="h-12 bg-muted/30"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Teléfono o WhatsApp
                </label>
                <Input
                  type="tel"
                  placeholder="Tu número de contacto"
                  className="h-12 bg-muted/30"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">
                  Mensaje
                </label>
                <Textarea
                  placeholder="¿En qué podemos ayudarte?"
                  rows={4}
                  className="bg-muted/30"
                />
              </div>

              
              <Button
                type="submit"
                size="lg"
                className="w-full mt-10 bg-primary text-primary-foreground hover:bg-primary/90"
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
