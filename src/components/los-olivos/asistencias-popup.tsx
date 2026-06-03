"use client"

import { X } from "lucide-react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

const GAG_URL = "https://www.gag.com.co/micrositios/asistenciaenvida-losolivos-cartagena/"

interface Props {
  open: boolean
  onClose: () => void
}

export function AsistenciasPopup({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false)

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  if (!mounted || !open) return null

  return createPortal(
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4">
<div className="relative z-10 w-full max-w-lg sm:max-w-xl md:max-w-2xl popup-enter">
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 z-20 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-4 h-4 text-gray-700" />
        </button>
        <a
          href={GAG_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/verasistencias-fullhd.png"
            alt="Asistencias En Vida - Los Olivos Cartagena"
            className="w-full h-auto block"
          />
        </a>
      </div>
    </div>,
    document.body
  )
}
