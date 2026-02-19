"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function VerSedesButton() {
  return (
    <Button
      variant="link"
      className="text-primary gap-2"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
        window.dispatchEvent(new CustomEvent("open-sedes-panel"))
      }}
    >
      Ver todas las sedes <ArrowRight className="w-4 h-4" />
    </Button>
  )
}
