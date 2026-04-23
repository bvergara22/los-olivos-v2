import { Button } from "@/components/ui/button"
import { ArrowLeft, Construction, HardHat } from "lucide-react"
import Link from "next/link"

export function EnConstruccion() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
              <HardHat className="w-12 h-12 text-primary" />
            </div>
            <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-amber-400 flex items-center justify-center">
              <Construction className="w-4 h-4 text-white" />
            </div>
          </div>
        </div>

        <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary/60 mb-3">
          Página en construcción
        </span>
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
          Estamos trabajando en esto
        </h1>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-md mx-auto">
          Esta sección está siendo desarrollada. Muy pronto estará disponible con todo el contenido que necesitas.
          ¡Gracias por tu paciencia!
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Button asChild size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/"><ArrowLeft className="w-4 h-4" /> Volver al inicio</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 hover:bg-primary/10 hover:border-primary hover:text-primary">
            <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
              Contáctanos
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
