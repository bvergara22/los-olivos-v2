"use client"

import { Button } from "@/components/ui/button"
import { Upload } from "lucide-react"
import { useState } from "react"

export function MascotaForm() {
  const [fotoNombre, setFotoNombre] = useState("")
  const [carnetNombre, setCarnetNombre] = useState("")

  return (
    <form className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Nombre de la mascota
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          placeholder="Nombre de tu mascota"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Raza de la mascota
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          placeholder="Raza de tu mascota"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Edad de la mascota
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          placeholder="Edad de tu mascota"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Foto de la mascota
        </label>
        <label className="flex items-center gap-3 cursor-pointer w-full rounded-lg border border-dashed border-border bg-background px-4 py-2.5 text-muted-foreground hover:border-primary hover:text-primary transition-colors">
          <Upload className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm truncate">{fotoNombre || "Subir foto"}</span>
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => setFotoNombre(e.target.files?.[0]?.name ?? "")}
          />
        </label>
      </div>
      <div>
        <label className="block text-sm font-medium text-foreground mb-1.5">
          Carnet de vacunacion
        </label>
        <label className="flex items-center gap-3 cursor-pointer w-full rounded-lg border border-dashed border-border bg-background px-4 py-2.5 text-muted-foreground hover:border-primary hover:text-primary transition-colors">
          <Upload className="w-4 h-4 flex-shrink-0" />
          <span className="text-sm truncate">{carnetNombre || "Subir carnet"}</span>
          <input
            type="file"
            accept="image/*,.pdf"
            className="hidden"
            onChange={(e) => setCarnetNombre(e.target.files?.[0]?.name ?? "")}
          />
        </label>
      </div>
      <div className="flex items-start gap-3 pt-1">
        <input
          type="checkbox"
          id="terminos-mascota"
          className="mt-0.5 rounded border-border accent-primary"
        />
        <label htmlFor="terminos-mascota" className="text-sm text-muted-foreground cursor-pointer">
          Aceptar terminos y condiciones
        </label>
      </div>
      <Button
        type="submit"
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-bold tracking-wide"
      >
        Actualizar datos
      </Button>
    </form>
  )
}
