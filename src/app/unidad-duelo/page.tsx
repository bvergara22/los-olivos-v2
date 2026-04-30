import { UnidadDueloContent } from "@/components/los-olivos/unidad-duelo-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Unidad de Gestión de las Emociones – Los Olivos Cartagena",
  description: "La unidad de duelo de Los Olivos Cartagena brinda acompañamiento centrado en el manejo de las emociones, con orientación y apoyo psicológico a nuestros afiliados.",
}

export default function UnidadDueloPage() {
  return <UnidadDueloContent />
}
