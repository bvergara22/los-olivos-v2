"use client"

import { X } from "lucide-react"
import { useState } from "react"

const GAG_URL = "https://www.gag.com.co/micrositios/asistenciaenvida-losolivos-cartagena/"

export function AsistenciasPopup() {
  const [open, setOpen] = useState(true)

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center pt-20 px-4">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 max-w-lg w-full sm:max-w-xl md:max-w-2xl popup-enter">
        {/* Botón cerrar */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-3 -right-3 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>

        {/* Imagen responsive como enlace */}
        <a
          href={GAG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          <picture>
            <source media="(max-width: 340px)" srcSet="/verasistencias-320x600.png" />
            <source media="(max-width: 400px)" srcSet="/verasistencias-375x600.png" />
            <source media="(max-width: 500px)" srcSet="/verasistencias-430x600.png" />
            <source media="(max-width: 1500px)" srcSet="/verasistencias-1366x600.png" />
            <img
              src="/verasistencias-fullhd.png"
              alt="Asistencias En Vida - Los Olivos Cartagena"
              className="w-full h-auto block"
            />
          </picture>
        </a>
      </div>
    </div>
  )
}
