import { PermisosModal } from "@/components/los-olivos/permisos-modal"
import { AlertCircle, ArrowRight, CheckCircle, MapPin, Clock } from "lucide-react"
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
    image: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/imagenes-productos-parque/cenizario.jpg",
    link: "https://www.portal.losolivoscartagena.com/tienda/producto/PPCO0008-osarios-de-pared-sencillo-plazoleta",
  },
  {
    title: "Osario individual",
    description: "Espacio para el depósito de los restos óseos de tu ser querido en un nicho individual.",
    image: "https://losolivoscartagena.sfo3.digitaloceanspaces.com/imagenes-productos-parque/osariodepared.png",
    link: "https://www.portal.losolivoscartagena.com/tienda/producto/PPCO0008-osarios-de-pared-sencillo-plazoleta",
  },
  {
    title: "Osario familiar",
    description: "Espacio amplio para el depósito de los restos óseos de varios seres queridos de la familia.",
    image: "https://www.portalapi.losolivoscartagena.com/uploads/images/OSARIOS%20DE%20PARED%20SENCILLO%20(PLAZOLETA)%20PORTADA.jpg",
    link: "https://www.portal.losolivoscartagena.com/tienda/producto/PPCO0008-osarios-de-pared-sencillo-plazoleta",
  },
]

export default function ParqueCementerioPage() {
  return (
    <>
      {/* Hero con imagen */}
      <section className="relative pt-8 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-duelo-main/10 via-background to-duelo-dark/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            {/* Texto */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-duelo-dark leading-tight text-balance">
                Parque cementerio Jardín Los Olivos Cartagena
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-4 md:mt-6 leading-relaxed">
                Nuestro parque cementerio jardín Los Olivos es un lugar tranquilo, especial para darle a tu ser querido la mejor despedida. Su amplio espacio combina perfectamente con la naturaleza, creando un ambiente de paz, tranquilidad y amor para visitar a tu ser amado.
              </p>
            </div>
            {/* Imagen */}
            <div className="relative w-3/4 lg:w-full max-w-lg mx-auto">
              <Image
                src="/parque-cementerio.png"
                alt="Parque Cementerio Jardín Los Olivos"
                width={500}
                height={380}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
        {/* Wave separator */}
        <div className="absolute -bottom-px left-0 right-0 z-20 text-background" aria-hidden>
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
          </svg>
        </div>
      </section>

      {/* Horarios */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-3xl md:text-4xl text-duelo-main block">Horarios</span>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Horario de atención */}
            <div className="rounded-2xl border border-border p-6 md:p-8 bg-duelo-main/[0.04] flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-duelo-main/[0.12] text-duelo-main">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <h3 className="font-display font-semibold text-lg text-duelo-dark">Horario de atención – Parque Cementerio</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Le informamos que nuestro horario de atención en nuestro Parque Cementerio es:
              </p>

              <div className="space-y-4 flex-1">
                <div className="flex items-start justify-between gap-4 pb-4 border-b border-border">
                  <p className="text-sm font-medium text-foreground">Lunes a viernes</p>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">7:00 a.m. – 12:00 p.m.</p>
                    <p className="text-sm text-muted-foreground">2:00 p.m. – 5:00 p.m.</p>
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium text-foreground">Sábado, domingo y festivos</p>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">7:00 a.m. – 5:00 p.m.</p>
                    <span className="inline-block text-xs px-2 py-0.5 rounded-full mt-1 bg-duelo-main/10 text-duelo-main">Jornada continua</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border space-y-1">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Gracias por contactarnos. Estamos atentos a atenderle dentro de este horario.
                </p>
                <p className="text-xs font-medium text-duelo-main">Los Olivos Cartagena, un homenaje al amor</p>
              </div>
            </div>

            {/* Horario de visitas */}
            <div className="rounded-2xl border border-duelo-main/20 p-6 md:p-8 bg-duelo-dark/[0.04] flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-duelo-main/[0.12] text-duelo-main">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>
                <h3 className="font-display font-semibold text-lg text-duelo-dark">Horario de visitas – Parque Cementerio</h3>
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed">
                Le informamos que nuestro horario de visitas en nuestro Parque Cementerio es:
              </p>

              <div className="space-y-4 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium text-foreground">Lunes a domingo</p>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">8:00 a.m. – 4:30 p.m.</p>
                    <span className="inline-block text-xs px-2 py-0.5 rounded-full mt-1 bg-duelo-main/10 text-duelo-main">Jornada continua</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-border space-y-1">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Gracias por contactarnos. Estamos atentos a atenderle dentro de este horario.
                </p>
                <p className="text-xs font-medium text-duelo-main">Los Olivos Cartagena, un homenaje al amor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tramites Section */}
      <section className="py-12 md:py-20 bg-card relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-duelo-main/5 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-duelo-dark/5 translate-x-1/2 translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Header */}
          <div className="mb-6 md:mb-10">
            <span className="text-3xl md:text-4xl text-duelo-main block">Trámites</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2">
              Exhumación, Traslado y Cremación de Restos
            </h2>
            <p className="text-muted-foreground mt-3 leading-relaxed max-w-3xl">
              Para realizar procesos de exhumación, traslado o cremación de restos, es necesario gestionar previamente los permisos ante las autoridades competentes y posteriormente presentarlos en el Parque Cementerio para la programación del servicio.
            </p>
          </div>

          {/* Two cards */}
          <div className="grid md:grid-cols-2 gap-6 items-start">

            {/* Card 1 - Paso 1 */}
            <div className="bg-background rounded-2xl border border-border flex flex-col h-full">
              {/* Step badge */}
              <div className="flex items-center gap-3 p-6 md:p-8 border-b border-border">
                <div className="w-9 h-9 rounded-full bg-duelo-main flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h3 className="font-display text-lg text-duelo-dark leading-snug">
                  Solicitar los permisos en la Alcaldía de Cartagena
                </h3>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-6 flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Los permisos deben tramitarse en la Alcaldía de Cartagena antes de programar cualquier servicio en el Parque Cementerio.
                </p>

                {/* Alcaldía info */}
                <div className="rounded-xl border border-duelo-main/20 bg-duelo-main/[0.04] p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-duelo-main flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-duelo-dark uppercase tracking-wide mb-0.5">Dirección</p>
                      <p className="text-sm text-muted-foreground">Cra. 2 #36-86, Centro Histórico</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-duelo-main flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-duelo-dark uppercase tracking-wide mb-0.5">Horario de atención</p>
                      <p className="text-sm text-muted-foreground">Lunes a viernes de 8:00 a.m. a 11:00 a.m.</p>
                    </div>
                  </div>
                </div>

                {/* Documentos */}
                <div>
                  <h4 className="font-display font-semibold text-duelo-dark mb-3 text-sm uppercase tracking-wide">Documentos requeridos</h4>
                  <ul className="space-y-2.5">
                    {[
                      "Certificado de defunción.",
                      "Fotocopia de la cédula de la persona que solicita los permisos.",
                      "Carta de solicitud de permisos dirigida a la Alcaldía.",
                      "Carta autenticada donde el familiar autoriza la cremación (solo si los restos serán cremados).",
                    ].map((doc) => (
                      <li key={doc} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-duelo-main" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Descarga */}
                <div className="rounded-xl border border-border bg-muted/40 p-4">
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                    Para facilitar el trámite, puedes descargar los formatos de solicitud (incluye carta de solicitud de permisos y formato de autorización de cremación):
                  </p>
                  <PermisosModal />
                </div>

                {/* Importante */}
                <div className="flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/60 dark:border-amber-900/40 dark:bg-amber-900/10 p-4 mt-auto">
                  <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 dark:text-amber-400 leading-relaxed">
                    Solicita únicamente los permisos correspondientes al trámite que vas a realizar (exhumación, traslado o cremación).
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 - Paso 2 */}
            <div className="bg-background rounded-2xl border border-border flex flex-col h-full">
              {/* Step badge */}
              <div className="flex items-center gap-3 p-6 md:p-8 border-b border-border">
                <div className="w-9 h-9 rounded-full bg-duelo-main flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h3 className="font-display text-lg text-duelo-dark leading-snug">
                  Presentar los permisos en el Parque Cementerio
                </h3>
              </div>

              <div className="p-6 md:p-8 flex flex-col gap-6 flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Una vez obtenidos los permisos originales, debes presentarlos en el Parque Cementerio Los Olivos Cartagena para programar la fecha del servicio.
                </p>

                {/* Documentos cremación */}
                <div>
                  <h4 className="font-display font-semibold text-duelo-dark mb-3 text-sm uppercase tracking-wide">
                    Documentos adicionales para cremación de restos
                  </h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    Si el proceso incluye cremación de restos, también debes presentar:
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      "Permiso de cremación expedido por el DADIS.",
                      "Carta de autorización notariada del familiar responsable.",
                    ].map((doc) => (
                      <li key={doc} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 flex-shrink-0 mt-0.5 text-duelo-main" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Importante disponibilidad */}
                <div className="flex items-start gap-3 rounded-xl border border-duelo-main/20 bg-duelo-main/[0.04] p-4">
                  <AlertCircle className="w-4 h-4 text-duelo-main flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-duelo-dark">Importante: </span>
                    La programación del servicio está sujeta a disponibilidad horaria del Parque Cementerio.
                  </p>
                </div>

                {/* Recomendación */}
                <div className="rounded-xl border border-border bg-muted/40 p-4 mt-auto">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-duelo-dark">Recomendación: </span>
                    Realizar estos trámites con anticipación facilita la programación del servicio y evita contratiempos.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Productos y servicios */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-3xl md:text-4xl text-duelo-main block">Nuestras opciones</span>
            <h2 className="font-display text-xl md:text-2xl text-duelo-dark mt-2 text-balance">
              Productos y servicios
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {productos.map((producto) => (
              <div
                key={producto.title}
                className="group bg-card rounded-2xl border border-border hover:border-duelo-main/40 hover:shadow-lg transition-all p-6"
              >
                <div className="w-full aspect-video rounded-xl overflow-hidden mb-4">
                  <img
                    src={producto.image}
                    alt={producto.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{producto.description}</p>
                <a
                  href={producto.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-duelo-main hover:text-duelo-dark border border-duelo-main/30 hover:border-duelo-main rounded-lg px-4 py-2 transition-all hover:bg-duelo-main/5"
                >
                  Ver detalles
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
