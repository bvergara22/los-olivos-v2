import { PermisosModal } from "@/components/los-olivos/permisos-modal"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Flame, Package } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Parque Cementerio Jardín - Los Olivos Cartagena",
  description: "Nuestro parque cementerio jardín Los Olivos es un lugar tranquilo, especial para darle a tu ser querido la mejor despedida.",
}

const documentosRequeridos = [
  "Copia de carta autenticada donde el familiar autoriza la cremación (solo si va a cremar).",
  "Fotocopia de cédula de la persona que solicita los permisos.",
  "Certificado de defunción.",
  "Carta de solicitud de los permisos.",
]

const notasImportantes = [
  "Una vez tenga los permisos originales debe llevarlos al parque cementerio para poder programar la exhumación.",
  "Solo solicitar los permisos que va a utilizar.",
  "Si se va a realizar cremación de restos, también necesita:",
  "Permiso de cremación del DADIS.",
  "Carta de autorización notariada.",
]

const productos = [
  {
    title: "Cenizario",
    description: "Espacio en pared para alojar las cenizas de tu ser querido en el parque cementerio Los Olivos.",
    icon: Flame,
  },
  {
    title: "Osario individual",
    description: "Espacio para el depósito de los restos óseos de tu ser querido en un nicho individual.",
    icon: Package,
  },
  {
    title: "Osario familiar",
    description: "Espacio amplio para el depósito de los restos óseos de varios seres queridos de la familia.",
    icon: Package,
  },
]

export default function ParqueCementerioPage() {
  return (
    <>
      {/* Hero con imagen */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-duelo-main/10 via-background to-duelo-dark/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
            {/* Texto */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-duelo-dark leading-tight text-balance">
                Parque cementerio Jardín Los Olivos Cartagena
              </h1>
              <p className="text-lg text-muted-foreground mt-6 leading-relaxed">
                Nuestro parque cementerio jardín Los Olivos es un lugar tranquilo, especial para darle a tu ser querido la mejor despedida. Su amplio espacio combina perfectamente con la naturaleza, creando un ambiente de paz, tranquilidad y amor para visitar a tu ser amado.
              </p>
            </div>
            {/* Imagen */}
            <div className="relative w-3/4 lg:w-full max-w-lg mx-auto">
              <Image
                src="/parque-cementerio.png"
                alt=""
                aria-hidden
                width={500}
                height={380}
                className="absolute w-full h-auto object-contain scale-[1.03] blur-2xl opacity-60 drop-shadow-[0_0_40px_rgba(62,36,85,0.4)]"
              />
              <Image
                src="/parque-cementerio.png"
                alt="Parque Cementerio Jardín Los Olivos"
                width={500}
                height={380}
                className="relative w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Horarios */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-duelo-main block">Horarios</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Horario de atención */}
            <div className="rounded-2xl border border-border p-6 md:p-8 bg-duelo-main/[0.04]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-duelo-main/[0.12] text-duelo-main">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="font-display font-semibold text-lg text-duelo-dark">Horario de atención</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
                  <div>
                    <p className="text-sm font-medium text-foreground">Lunes a viernes</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">7:00 a.m. – 12:00 p.m.</p>
                    <p className="text-sm text-muted-foreground">2:00 p.m. – 5:00 p.m.</p>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">Sábado, domingo y festivos</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">7:00 a.m. – 5:00 p.m.</p>
                    <span className="inline-block text-xs px-2 py-0.5 rounded-full mt-1 bg-duelo-main/10 text-duelo-main">Jornada continua</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Horario de visitas */}
            <div className="rounded-2xl border border-duelo-main/20 p-6 md:p-8 bg-duelo-dark/[0.04]">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-duelo-main/[0.12] text-duelo-main">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="font-display font-semibold text-lg text-duelo-dark">Horario de visitas</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">Lunes a domingo</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">8:00 a.m. – 4:30 p.m.</p>
                    <span className="inline-block text-xs px-2 py-0.5 rounded-full mt-1 bg-duelo-main/10 text-duelo-main">Jornada continua</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-8 pt-4 border-t border-border leading-relaxed">
                Estamos atentos a atenderle dentro de este horario.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tramites Section */}
      <section className="py-16 md:py-20 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-duelo-main/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-duelo-dark/5 translate-x-1/2 translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl text-duelo-dark mb-6">
              Trámites
            </h2>

            <div className="bg-background rounded-2xl border border-border hover:border-duelo-main/35 transition-all p-6 md:p-8 mb-8">
              <h3 className="font-display text-lg text-duelo-dark mb-2">
                🕊️ Exhumación, Traslado y Cremación
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Para iniciar el proceso, debes solicitar los permisos en la Alcaldía de Cartagena (Cra. 2 #36-86, El Centro).
                🕘 Horario de atención en Alcaldía: lunes a viernes de 8:00 a.m. a 11:00 a.m.
              </p>

              {/* Documentos requeridos */}
              <div className="mb-6">
                <h4 className="font-display font-semibold text-duelo-dark mb-3">Documentos requeridos:</h4>
                <ul className="space-y-3">
                  {documentosRequeridos.map((doc) => (
                    <li key={doc} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-duelo-main" />
                      {doc}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notas importantes */}
              <div className="rounded-xl p-5 border border-duelo-main/20 bg-duelo-main/5">
                <h4 className="font-display font-semibold text-duelo-dark mb-3">Importante:</h4>
                <ul className="space-y-3">
                  {notasImportantes.map((nota) => (
                    <li key={nota} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5 text-duelo-main" />
                      {nota}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6">
                <PermisosModal />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos y servicios */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-3xl md:text-4xl text-duelo-main block">Nuestras opciones</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">
              Productos y servicios
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {productos.map((producto) => (
              <div
                key={producto.title}
                className="group bg-card rounded-2xl border border-border hover:border-duelo-main/40 hover:shadow-lg transition-all p-6"
              >
                <div className="w-full aspect-[4/3] rounded-xl bg-muted mb-4 flex items-center justify-center">
                  <producto.icon className="w-10 h-10 text-muted-foreground/40" />
                </div>
                <h3 className="font-display text-lg text-duelo-dark mb-2">{producto.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{producto.description}</p>
                <Button variant="outline" size="sm" className="gap-2 hover:bg-duelo-main/10 hover:border-duelo-main hover:text-duelo-main">
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
