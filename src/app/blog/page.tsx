import { EnConstruccion } from "@/components/los-olivos/en-construccion"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog – En construcción",
}

export default function BlogPage() {
  return <EnConstruccion />
}
