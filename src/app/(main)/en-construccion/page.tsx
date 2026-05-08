import { EnConstruccion } from "@/components/los-olivos/en-construccion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "En construcción",
}

export default function EnConstruccionPage() {
  return <EnConstruccion />
}
