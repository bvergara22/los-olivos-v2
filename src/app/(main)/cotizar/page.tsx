"use client"

import { Award, BookOpen, Box, Bus, Car, CheckCircle2, ChevronRight, Church, ExternalLink, FileSignature, Flower2, MapPin, Scroll, ShieldCheck, Truck, User } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const derechosAfiliado = [
  { icon: Box,           label: "Cofre" },
  { icon: FileSignature, label: "Trámite de licencia" },
  { icon: Car,           label: "Traslado local" },
  { icon: CheckCircle2,  label: "Preservación del cuerpo" },
  { icon: Church,        label: "Sala de velación 24 horas" },
  { icon: Scroll,        label: "Serie de carteles" },
  { icon: Award,         label: "Cinta membretada" },
  { icon: Flower2,       label: "Arreglo floral" },
  { icon: BookOpen,      label: "Recordatorio y libro de oraciones" },
  { icon: Church,        label: "Exequias" },
  { icon: Bus,           label: "Transporte de acompañante" },
  { icon: MapPin,        label: "Destino final jardines los olivos" },
  { icon: Truck,         label: "Carroza al campo santo" },
]

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
    </svg>
  )
}

export default function CotizarPage() {
  const [tipo, setTipo] = useState<"afiliado" | "particular" | null>(null)

  return (
    <>
      {/* Hero */}
      <section className="relative pt-8 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cotizar-main/10 via-background to-cotizar-dark/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cotizar-dark leading-tight text-balance">
                Estamos para acompañarte cuando más lo necesitas
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-4 md:mt-6 leading-relaxed">
                Conoce las alternativas que hemos diseñado para acompañarte a ti y a tu familia. Completa la información y recibe una cotización acorde a tus necesidades.
              </p>
            </div>
            <div className="relative w-3/4 lg:w-full max-w-lg mx-auto">
              <Image
                src="/Duelo-imagen.png"
                alt="Homenaje al amor"
                width={500}
                height={380}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-px left-0 right-0 z-20 text-card" aria-hidden>
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
          </svg>
        </div>
      </section>

      {/* Main */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">

            {/* Intro label */}
            <div className="text-center mb-8">
              <h2 className="font-display text-2xl md:text-3xl font-bold" style={{ color: "#477a7b" }}>
                ¿Haces parte de la familia Olivos?
              </h2>
              <p className="text-sm text-muted-foreground mt-2">
                Selecciona la opción que mejor describa tu situación para continuar con la cotización.
              </p>
            </div>

            {/* Selector cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">

              {/* Afiliado */}
              <button
                type="button"
                onClick={() => setTipo("afiliado")}
                className={`group relative p-6 rounded-2xl border-2 text-left transition-all duration-200 ${
                  tipo === "afiliado"
                    ? "border-cotizar-main bg-cotizar-main/5 shadow-lg shadow-cotizar-main/10"
                    : "border-border bg-white hover:border-cotizar-main/50 hover:shadow-md"
                }`}
              >
                {tipo === "afiliado" && (
                  <span className="absolute top-3.5 right-3.5 w-6 h-6 bg-cotizar-main rounded-full flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200 ${
                  tipo === "afiliado" ? "bg-cotizar-main" : "bg-cotizar-main/10 group-hover:bg-cotizar-main/20"
                }`}>
                  <ShieldCheck className={`w-6 h-6 transition-colors duration-200 ${tipo === "afiliado" ? "text-white" : "text-cotizar-main"}`} />
                </div>
                <h4 className="font-display font-bold text-foreground text-lg mb-1">Soy afiliado</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Ya cuento con un plan activo y deseo consultar las opciones disponibles para mí.
                </p>
              </button>

              {/* Particular */}
              <button
                type="button"
                onClick={() => setTipo("particular")}
                className={`group relative p-6 rounded-2xl border-2 text-left transition-all duration-200 ${
                  tipo === "particular"
                    ? "border-cotizar-main bg-cotizar-main/5 shadow-lg shadow-cotizar-main/10"
                    : "border-border bg-white hover:border-cotizar-main/50 hover:shadow-md"
                }`}
              >
                {tipo === "particular" && (
                  <span className="absolute top-3.5 right-3.5 w-6 h-6 bg-cotizar-main rounded-full flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </span>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors duration-200 ${
                  tipo === "particular" ? "bg-cotizar-main" : "bg-cotizar-main/10 group-hover:bg-cotizar-main/20"
                }`}>
                  <User className={`w-6 h-6 transition-colors duration-200 ${tipo === "particular" ? "text-white" : "text-cotizar-main"}`} />
                </div>
                <h4 className="font-display font-bold text-foreground text-lg mb-1">Aún no soy afiliado</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Quiero conocer nuestros servicios y recibir una cotización personalizada.
                </p>
              </button>

            </div>

            {/* ── Resultado afiliado ── */}
            {tipo === "afiliado" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 rounded-2xl overflow-hidden border border-border shadow-xl">

                {/* Header verde */}
                <div className="relative bg-gradient-to-r from-cotizar-main to-cotizar-dark px-6 py-5 overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
                  <div className="absolute bottom-0 left-1/3 w-24 h-24 rounded-full bg-white/5 translate-y-1/2" />
                  <div className="relative flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-0.5">Su plan activo</p>
                      <h3 className="font-display font-bold text-white text-xl">Usted como afiliado tiene derecho a:</h3>
                    </div>
                    <span className="shrink-0 ml-4 bg-white/15 backdrop-blur-sm border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-bold text-white">
                      {derechosAfiliado.length} servicios
                    </span>
                  </div>
                </div>

                {/* Benefits grid */}
                <div className="bg-white p-5 md:p-6">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                    {derechosAfiliado.map((d) => (
                      <div
                        key={d.label}
                        className="flex items-center gap-2.5 p-3 bg-gradient-to-br from-muted/60 to-muted/30 rounded-xl border border-border/50"
                      >
                        <span className="w-7 h-7 rounded-lg bg-cotizar-main/10 flex items-center justify-center shrink-0">
                          <d.icon className="w-3.5 h-3.5 text-cotizar-main" />
                        </span>
                        <span className="text-xs font-medium text-foreground leading-tight">{d.label}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-start">
                  <a
                    href="https://wa.me/573106171987"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                    style={{ background: "linear-gradient(135deg,#477a7b 0%,#2e5a5b 100%)", boxShadow: "0 6px 20px rgba(71,122,123,0.35)" }}
                  >
                    <IconWhatsApp />
                    Comunicarme con homenajes
                  </a>
                  </div>
                </div>

              </div>
            )}

            {/* ── Resultado particular ── */}
            {tipo === "particular" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300 rounded-2xl overflow-hidden border border-border shadow-xl">

                {/* Header verde */}
                <div className="relative bg-gradient-to-r from-cotizar-main to-cotizar-dark px-6 py-5 overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/5 -translate-y-1/2 translate-x-1/4" />
                  <div className="absolute bottom-0 left-1/3 w-24 h-24 rounded-full bg-white/5 translate-y-1/2" />
                  <div className="relative">
                    <p className="text-xs font-semibold text-white/60 uppercase tracking-widest mb-0.5">Servicio particular</p>
                    <h3 className="font-display font-bold text-white text-xl">Cotiza tu homenaje en línea</h3>
                  </div>
                </div>

                {/* Body */}
                <div className="bg-white p-5 md:p-6">

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {["Planes disponibles", "Tarifas transparentes", "Proceso rápido", "100% en línea"].map((tag) => (
                      <span key={tag} className="flex items-center gap-1.5 text-xs font-medium text-cotizar-dark bg-cotizar-main/8 px-3 py-1.5 rounded-full">
                        <CheckCircle2 className="w-3 h-3 text-cotizar-main" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    En nuestro portal puedes ver todos los planes disponibles, comparar tarifas y completar tu cotización de manera rápida y segura.
                  </p>

                  <div className="flex justify-start">
                  <a
                    href="https://www.portal.losolivoscartagena.com/panel/homenaje/cotizar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 py-3 px-6 rounded-xl font-bold text-sm text-white transition-opacity hover:opacity-90"
                    style={{ background: "linear-gradient(135deg,#477a7b 0%,#2e5a5b 100%)", boxShadow: "0 6px 20px rgba(71,122,123,0.35)" }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Cotizar en el portal
                    <ChevronRight className="w-4 h-4" />
                  </a>
                  </div>

                </div>
              </div>
            )}

          </div>
        </div>
      </section>
    </>
  )
}
