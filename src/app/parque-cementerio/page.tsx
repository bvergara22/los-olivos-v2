import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, FileText, Flame, Package } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Parque Cementerio Jardin - Los Olivos Cartagena",
  description: "Nuestro parque cementerio jardin Los Olivos es un lugar tranquilo, especial para darle a tu ser querido la mejor despedida.",
}

const documentosRequeridos = [
  "Copia de Carta Autenticada donde el familiar autoriza la Cremacion (solo si va a cremar).",
  "Fotocopia de cedula de la persona que solicita los permisos.",
  "Certificado de defuncion.",
  "Carta de solicitud de los permisos.",
]

const notasImportantes = [
  "Una vez tenga los Permisos Originales debe llevarlos al Parque Cementerio para poder programar la Exhumacion.",
  "Solo solicitar los permisos que va a utilizar.",
]

const productos = [
  {
    title: "Cenizario",
    description: "Espacio en pared para alojar las cenizas de tu ser querido en el parque cementerio Los Olivos.",
    icon: Flame,
  },
  {
    title: "Osario Individual",
    description: "Espacio para el deposito de los restos oseos de tu ser querido en un nicho individual.",
    icon: Package,
  },
  {
    title: "Osario Familiar",
    description: "Espacio amplio para el deposito de los restos oseos de varios seres queridos de la familia.",
    icon: Package,
  },
]

export default function ParqueCementerioPage() {
  return (
    <>
      <PageBanner
        title="Parque cementerio Jardin Los Olivos Cartagena"
        description="Nuestro parque cementerio jardin Los Olivos es un lugar tranquilo, especial para darle a tu ser querido la mejor despedida. Su amplio espacio combina perfectamente con la naturaleza, creando un ambiente de paz, tranquilidad y amor para visitar a tu ser amado."
      />

      {/* Tramites Section */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FileText className="w-6 h-6" />
              </div>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                Tramites
              </h2>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 md:p-8 mb-8">
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                Exhumacion, Traslado y Cremacion
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Realizar solicitud en oficina DADIS. Horario de atencion: Lunes a jueves de 8:00 a.m. - 6:00 p.m. 
                Los viernes no tramitan licencias. Barrio Manga, #29-109 de la calle 28 o tercera avenida, Cartagena Bolivar.
              </p>

              {/* Documentos requeridos */}
              <div className="mb-6">
                <h4 className="font-display font-semibold text-foreground mb-3">Deben llevar:</h4>
                <ul className="space-y-3">
                  {documentosRequeridos.map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notas importantes */}
              <div className="bg-primary/5 rounded-xl p-5 border border-primary/20">
                <h4 className="font-display font-semibold text-foreground mb-3">Importante:</h4>
                <ul className="space-y-3">
                  {notasImportantes.map((nota) => (
                    <li key={nota} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      {nota}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                  Obtener carta de permisos
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos y servicios */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-primary">Nuestras opciones</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 text-balance">
              Productos y servicios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {productos.map((producto) => (
              <div
                key={producto.title}
                className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all"
              >
                <div className="w-full aspect-[4/3] rounded-xl bg-muted mb-4 flex items-center justify-center">
                  <producto.icon className="w-10 h-10 text-muted-foreground/40" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-2">{producto.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{producto.description}</p>
                <Button variant="outline" size="sm" className="gap-2">
                  Ver detalles
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
