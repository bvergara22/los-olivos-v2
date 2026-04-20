"use client"

import { Button } from "@/components/ui/button"
import { Eye, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const tarjeta = {
  title: "Tarjeta Golden Offers",
  image: "/tarjeta-golden-offers.png",
  description: "Te brindamos un mundo de beneficios para asegurarnos no sólo de tu protección exequial sino también de contribuir en momentos únicos junto a toda tu familia.",
}

export function TarjetaBeneficios() {
  const [open, setOpen] = useState(false)

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-3xl md:text-4xl text-primary block">Más beneficios para ti</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
            Tarjeta Golden Offers
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Te brindamos un mundo de beneficios para asegurarnos no sólo de tu protección exequial sino también de contribuir en momentos únicos junto a toda tu familia.
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group relative flex items-center justify-center p-4 cursor-pointer"
          >
            {/* Pulso en la esquina */}
            <span className="absolute top-5 right-5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60" style={{ backgroundColor: "#F0A500" }} />
              <span className="relative inline-flex rounded-full h-3 w-3" style={{ backgroundColor: "#F0A500" }} />
            </span>
            <Image
              src={tarjeta.image}
              alt={tarjeta.title}
              width={480}
              height={300}
              className="object-contain w-full max-w-md h-auto transition-all duration-300 group-hover:scale-105 drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)] group-hover:drop-shadow-[0_0_16px_rgba(240,165,0,0.6)]"
            />
          </button>
          {/* Hint de interacción */}
          <Button
            size="lg"
            variant="outline"
            onClick={() => setOpen(true)}
            className="gap-2 px-8"
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F0A500"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#F0A500"; (e.currentTarget as HTMLButtonElement).style.color = "#fff" }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = ""; (e.currentTarget as HTMLButtonElement).style.borderColor = ""; (e.currentTarget as HTMLButtonElement).style.color = "" }}
          >
            <Eye className="w-5 h-5" />
            Conoce tus beneficios
          </Button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-card rounded-2xl border border-border shadow-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-6">
              <Image
                src={tarjeta.image}
                alt={tarjeta.title}
                width={320}
                height={200}
                className="object-contain w-full h-auto"
              />
            </div>

            <h3 className="font-display font-bold text-xl text-foreground text-center mb-3">
              ¿Qué es la tarjeta Golden Offers?
            </h3>

            <p className="text-sm text-muted-foreground leading-relaxed text-center mb-6">
              Es una tarjeta exclusiva para afiliados de Los Olivos, que te brinda descuentos, experiencias y beneficios especiales con nuestros aliados comerciales.
            </p>

            <div className="flex justify-center">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 px-8"
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#F0A500"; (e.currentTarget as HTMLButtonElement).style.borderColor = "#F0A500"; (e.currentTarget as HTMLButtonElement).style.color = "#fff" }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.backgroundColor = ""; (e.currentTarget as HTMLButtonElement).style.borderColor = ""; (e.currentTarget as HTMLButtonElement).style.color = "" }}
                asChild
              >
                <a href="https://goldenoffer.losolivoscartagena.com/" target="_blank" rel="noopener noreferrer">
                  Conoce más
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
