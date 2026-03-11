"use client"

import { X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export interface Aliado {
  name: string
  logo: string
  description?: string
}

const aliados: Aliado[] = [
  {
    name: "Unidad Medica Veterinaria de la Costa S.A.S",
    logo: "/unidad-medica-veterinaria.png",
    description: "",
  },
  {
    name: "Digital Alliance",
    logo: "/digital.png",
    description: "",
  },
  {
    name: "Juan Valdez",
    logo: "/juan_valdez.png",
    description: "",
  },
  {
    name: "Ciber Optica",
    logo: "/optica-logo.png",
    description: "",
  },
  {
    name: "Montesacro Resto Bar",
    logo: "/montesacro.png",
    description: "",
  },
  {
    name: "OdontoCenter V.S",
    logo: "/odontocenter.png",
    description: "",
  },
  {
    name: "Ely Reposteria",
    logo: "/Ely.png",
    description: "",
  },
  {
    name: "Jonan",
    logo: "/jonan.png",
    description: "",
  },
]

export function AliadosSection() {
  const [selectedAliado, setSelectedAliado] = useState<Aliado | null>(null)

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-3xl md:text-4xl text-primary block">Nuestros aliados</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
            Empresas que confían en nosotros
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {aliados.map((aliado) => (
            <button
              key={aliado.name}
              type="button"
              onClick={() => setSelectedAliado(aliado)}
              className="group p-6 flex items-center justify-center aspect-[4/3] cursor-pointer"
            >
              <Image
                src={aliado.logo}
                alt={aliado.name}
                width={260}
                height={160}
                className="object-contain max-h-32 w-auto transition-all duration-300 group-hover:scale-105 drop-shadow-none group-hover:drop-shadow-[0_0_8px_rgba(76,175,80,0.7)]"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Panel de detalle del aliado */}
      {selectedAliado && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={() => setSelectedAliado(null)}
        >
          <div
            className="bg-card rounded-2xl border border-border shadow-2xl max-w-md w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAliado(null)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex justify-center mb-6">
              <Image
                src={selectedAliado.logo}
                alt={selectedAliado.name}
                width={220}
                height={140}
                className="object-contain max-h-28 w-auto"
              />
            </div>

            <h3 className="font-display font-bold text-xl text-foreground text-center mb-3">
              {selectedAliado.name}
            </h3>

            {selectedAliado.description ? (
              <p className="text-sm text-muted-foreground leading-relaxed text-center">
                {selectedAliado.description}
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
