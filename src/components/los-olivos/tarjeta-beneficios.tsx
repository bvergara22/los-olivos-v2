"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const tarjeta = {
  title: "Tarjeta Golden Offers",
  image: "/tarjeta-golden-offers.png",
  description: "",
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
            Descuentos exclusivos, sorteos, atencion preferencial y mucho mas para nuestros afiliados y sus familias.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="group flex items-center justify-center p-4 cursor-pointer"
          >
            <Image
              src={tarjeta.image}
              alt={tarjeta.title}
              width={480}
              height={300}
              className="object-contain w-full max-w-md h-auto transition-all duration-300 group-hover:scale-105 drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)] group-hover:drop-shadow-[0_0_16px_rgba(76,175,80,0.5)]"
            />
          </button>
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
              {tarjeta.title}
            </h3>

            {tarjeta.description ? (
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                {tarjeta.description}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground leading-relaxed text-center italic">
                Informacion proximamente.
              </p>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
