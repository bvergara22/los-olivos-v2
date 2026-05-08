import { EnConstruccion } from "@/components/los-olivos/en-construccion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Planes – En construcción",
}

export default function PlanesPage() {
  return <EnConstruccion />
}
