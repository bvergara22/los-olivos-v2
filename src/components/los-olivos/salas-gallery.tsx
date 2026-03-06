"use client"

import Image from "next/image"
import { useState } from "react"

const salas = [
  {
    id: "alcibia",
    name: "Sala Alcibia",
    images: [
      { src: "/alcibia-1.jpg", alt: "Sala Alcibia - Vista 1" },
      { src: "/alcibia-2.jpg", alt: "Sala Alcibia - Vista 2" },
      { src: "/alcibia-3.jpg", alt: "Sala Alcibia - Vista 3" },
      { src: "/alcibia-4.jpg", alt: "Sala Alcibia - Vista 4" },
    ],
  },
  {
    id: "cordialidad",
    name: "Sala Cordialidad",
    images: [
      { src: "/ctg-1.jpg", alt: "Sala Cordialidad - Vista 1" },
      { src: "/ctg-2.jpg", alt: "Sala Cordialidad - Vista 2" },
      { src: "/ctg-3.jpg", alt: "Sala Cordialidad - Vista 3" },
      { src: "/ctg-4.jpg", alt: "Sala Cordialidad - Vista 4" },
    ],
  },
]

interface SalasGalleryProps {
  accent?: string
}

export function SalasGallery({ accent }: SalasGalleryProps = {}) {
  const [activeSala, setActiveSala] = useState(salas[0].id)
  const [activeIndex, setActiveIndex] = useState(0)

  const sala = salas.find((s) => s.id === activeSala)!

  function handleTabChange(id: string) {
    setActiveSala(id)
    setActiveIndex(0)
  }

  return (
    <div className="space-y-5">
      {/* Tabs */}
      <div className="flex gap-2">
        {salas.map((s) => (
          <button
            key={s.id}
            onClick={() => handleTabChange(s.id)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
              activeSala === s.id
                ? accent ? "text-white" : "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:text-foreground"
            }`}
            style={activeSala === s.id && accent ? { background: accent } : undefined}
          >
            {s.name}
          </button>
        ))}
      </div>

      {/* Galeria */}
      <div className="flex flex-col md:grid md:grid-cols-[1fr_112px] gap-3">
        {/* Imagen principal */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-muted">
          <Image
            key={sala.images[activeIndex].src}
            src={sala.images[activeIndex].src}
            alt={sala.images[activeIndex].alt}
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 768px) 100vw, 75vw"
          />
        </div>

        {/* Miniaturas */}
        <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-x-visible pb-1 md:pb-0">
          {sala.images.map((img, index) => (
            <button
              key={img.src}
              onClick={() => setActiveIndex(index)}
              className={`relative flex-shrink-0 w-24 h-16 md:w-full md:h-[78px] rounded-xl overflow-hidden transition-all ${
                activeIndex === index
                  ? accent ? "ring-2 ring-offset-2" : "ring-2 ring-primary ring-offset-2"
                  : "opacity-50 hover:opacity-90"
              }`}
              style={activeIndex === index && accent ? { outline: `2px solid ${accent}`, outlineOffset: "2px" } : undefined}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="112px"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
