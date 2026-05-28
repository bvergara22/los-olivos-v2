import { UnidadVidaContent } from "@/components/los-olivos/unidad-vida-content"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Unidad de Gestión de las Emociones – Más Vida Para Ti | Los Olivos Cartagena",
  description: "Acompañamiento emocional para vivir con mayor equilibrio, bienestar y plenitud. Herramientas para gestionar el estrés, los vínculos y el propósito de vida.",
}

export default function UnidadVidaPage() {
  return <UnidadVidaContent />
}
