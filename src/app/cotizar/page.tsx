"use client"

import { Button } from "@/components/ui/button"
import { Award, BookOpen, Box, Bus, Car, CheckCircle, Church, FileSignature, Flower2, Handshake, Truck as Hearse, Heart, MapPin, MapPinOff, Scroll, Truck } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const tiposServicio = [
  { id: "cremacion", label: "Cremación", icon: Heart },
  { id: "inhumacion", label: "Inhumación", icon: Handshake },
  { id: "sin-destino-final", label: "Sin destino final", icon: MapPinOff },
]

const derechosAfiliado = [
  { icon: Box, label: "Cofre" },
  { icon: FileSignature, label: "Trámite de licencia" },
  { icon: Car, label: "Traslado local" },
  { icon: Heart, label: "Preservación del cuerpo" },
  { icon: Church, label: "Sala de velación 24 horas" },
  { icon: Scroll, label: "Serie de carteles" },
  { icon: Award, label: "Cinta membretada" },
  { icon: Flower2, label: "Arreglo floral" },
  { icon: BookOpen, label: "Recordatorio y libro de oraciones" },
  { icon: Church, label: "Exequias" },
  { icon: Truck, label: "Transporte de acompañante" },
  { icon: MapPin, label: "Destino final jardines los olivos" },
  { icon: Hearse, label: "Carroza al campo santo" },
]

const itemsComunes = [
  "Cofre",
  "Trámites de licencia",
  "Traslado local",
  "Preservación del cuerpo",
  "Sala de velación",
  "Serie de carteles",
  "Arreglo floral",
  "Cinta membreteada",
  "Recordatorio y libro de oración",
  "Exequias",
  "Carroza al campo santo",
  "Transporte de acompañantes",
]

const planesParticular: Record<string, { titulo: string; items: string[]; total: string; color: string }> = {
  inhumacion: {
    titulo: "Homenaje Particular Integral con Inhumación",
    items: [...itemsComunes, "Destino final inhumación arriendo por 4 años sin nicho Jardín Los Olivos"],
    total: "$6.000.000",
    color: "cotizar-main",
  },
  cremacion: {
    titulo: "Homenaje Particular Integral con Cremación",
    items: [...itemsComunes, "Destino final cremación Jardín Los Olivos"],
    total: "$5.000.000",
    color: "cotizar-main",
  },
  "sin-destino-final": {
    titulo: "Homenaje Particular Básico / Sin Destino Final",
    items: [...itemsComunes],
    total: "$3.500.000",
    color: "cotizar-main",
  },
}

export default function CotizarPage() {
  const [tipoUsuario, setTipoUsuario] = useState<"afiliado" | "particular" | null>(null)
  const [servicioSeleccionado, setServicioSeleccionado] = useState<string | null>(null)
  const [deseaSala, setDeseaSala] = useState<boolean | null>(null)
  const [step, setStep] = useState(1)

  const esParticular = tipoUsuario === "particular"

  return (
    <>
      {/* Hero */}
      <section className="relative pt-8 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cotizar-main/10 via-background to-cotizar-dark/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            {/* Texto */}
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-cotizar-dark leading-tight text-balance">
                Haz tu cotización ágil y sencilla
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-4 md:mt-6 leading-relaxed">
                Consulta el valor de nuestro servicio de necesidad inmediata según tus requerimientos y condiciones.
              </p>
            </div>
            {/* Imagen */}
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
        {/* Wave separator */}
        <div className="absolute -bottom-px left-0 right-0 z-20 text-card" aria-hidden>
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
          </svg>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {/* Progress indicator */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= s
                      ? "bg-cotizar-main text-white"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-0.5 ${step > s ? "bg-cotizar-main" : "bg-border"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Tipo de usuario */}
            {step === 1 && (
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-cotizar-main text-white flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Servicio y localidad</h3>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Quiero que el servicio sea...
                    </h2>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setTipoUsuario("afiliado")}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      tipoUsuario === "afiliado"
                        ? "border-cotizar-main bg-cotizar-main/5"
                        : "border-border hover:border-cotizar-main/50"
                    }`}
                  >
                    <h4 className="font-display font-bold text-foreground mb-1">Soy afiliado</h4>
                    <p className="text-sm text-muted-foreground">
                      Ya cuento con un plan exequial activo con Los Olivos.
                    </p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setTipoUsuario("particular")}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      tipoUsuario === "particular"
                        ? "border-cotizar-main bg-cotizar-main/5"
                        : "border-border hover:border-cotizar-main/50"
                    }`}
                  >
                    <h4 className="font-display font-bold text-foreground mb-1">Soy particular</h4>
                    <p className="text-sm text-muted-foreground">
                      No tengo afiliación, deseo contratar el servicio.
                    </p>
                  </button>
                </div>

                {/* Derechos del afiliado */}
                {tipoUsuario === "afiliado" && (
                  <div className="mb-6 p-5 bg-muted/30 rounded-xl border border-cotizar-main/20">
                    <h3 className="font-display font-semibold text-cotizar-dark mb-4 text-sm uppercase tracking-wide">
                      Usted como afiliado tiene derecho a:
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {derechosAfiliado.map((derecho) => (
                        <div key={derecho.label} className="flex items-start gap-2">
                          <derecho.icon className="w-4 h-4 text-cotizar-main flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-foreground">{derecho.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {tipoUsuario === "afiliado" ? (
                  <Button asChild className="bg-cotizar-main text-white hover:bg-cotizar-dark">
                    <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                      Comunicarme con homenajes
                    </a>
                  </Button>
                ) : (
                  <Button
                    onClick={() => tipoUsuario && setStep(2)}
                    disabled={!tipoUsuario}
                    className="bg-cotizar-main text-white hover:bg-cotizar-dark"
                  >
                    Siguiente
                  </Button>
                )}
              </div>
            )}

            {/* Step 2: Tipo de servicio */}
            {step === 2 && (
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-cotizar-main text-white flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Tipo de servicio</h3>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Selecciona el tipo de servicio
                    </h2>
                  </div>
                </div>

                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {tiposServicio.map((tipo) => (
                    <button
                      key={tipo.id}
                      type="button"
                      onClick={() => setServicioSeleccionado(tipo.id)}
                      className={`p-5 rounded-xl border-2 text-center transition-all ${
                        servicioSeleccionado === tipo.id
                          ? "border-cotizar-main bg-cotizar-main/5"
                          : "border-border hover:border-cotizar-main/50"
                      }`}
                    >
                      <tipo.icon className={`w-8 h-8 mx-auto mb-2 ${
                        servicioSeleccionado === tipo.id ? "text-cotizar-main" : "text-muted-foreground"
                      }`} />
                      <h4 className="font-display font-bold text-foreground">{tipo.label}</h4>
                    </button>
                  ))}
                </div>

                {/* Sala solo para afiliados */}
                {!esParticular && (
                  <div className="mb-6">
                    <h3 className="font-display font-semibold text-foreground mb-3">
                      ¿Deseas sala de homenaje?
                    </h3>
                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setDeseaSala(true)}
                        className={`px-6 py-3 rounded-xl border-2 font-medium transition-all ${
                          deseaSala === true
                            ? "border-cotizar-main bg-cotizar-main/5 text-cotizar-main"
                            : "border-border text-muted-foreground hover:border-cotizar-main/50"
                        }`}
                      >
                        Sí
                      </button>
                      <button
                        type="button"
                        onClick={() => setDeseaSala(false)}
                        className={`px-6 py-3 rounded-xl border-2 font-medium transition-all ${
                          deseaSala === false
                            ? "border-cotizar-main bg-cotizar-main/5 text-cotizar-main"
                            : "border-border text-muted-foreground hover:border-cotizar-main/50"
                        }`}
                      >
                        No
                      </button>
                    </div>
                  </div>
                )}

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(1)} className="hover:bg-muted hover:text-foreground">
                    Atrás
                  </Button>
                  <Button
                    onClick={() => {
                      const puedeAvanzar = servicioSeleccionado && (esParticular || deseaSala !== null)
                      if (puedeAvanzar) setStep(3)
                    }}
                    disabled={!servicioSeleccionado || (!esParticular && deseaSala === null)}
                    className="bg-cotizar-main text-white hover:bg-cotizar-dark"
                  >
                    Siguiente
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Resultado */}
            {step === 3 && (
              <>
                {/* Particular: tabla de precios detallada */}
                {esParticular && servicioSeleccionado && planesParticular[servicioSeleccionado] ? (
                  <div>
                    {/* Card del plan */}
                    <div className="rounded-2xl border border-border overflow-hidden shadow-lg">
                      {/* Header del plan */}
                      <div className="bg-cotizar-main px-6 py-4 text-center">
                        <h2 className="font-display font-bold text-white text-base md:text-lg uppercase tracking-wide leading-snug">
                          {planesParticular[servicioSeleccionado].titulo}
                        </h2>
                      </div>

                      {/* Tabla */}
                      <div className="bg-card">
                        {/* Encabezado de columnas */}
                        <div className="grid grid-cols-[1fr_auto] border-b border-border bg-cotizar-main/8">
                          <div className="px-5 py-3 font-display font-bold text-sm text-cotizar-dark uppercase tracking-wide">
                            Homenajes
                          </div>
                          <div className="px-5 py-3 font-display font-bold text-sm text-cotizar-dark uppercase tracking-wide text-center w-36 border-l border-border leading-tight">
                            Tarifas de<br />contado
                          </div>
                        </div>

                        {/* Items */}
                        {planesParticular[servicioSeleccionado].items.map((item, i) => (
                          <div
                            key={i}
                            className={`grid grid-cols-[1fr_auto] border-b border-border last:border-b-0 ${
                              i % 2 === 0 ? "bg-white" : "bg-muted/20"
                            }`}
                          >
                            <div className="px-5 py-3 text-sm text-foreground font-medium">{item}</div>
                            <div className="px-5 py-3 w-36 border-l border-border" />
                          </div>
                        ))}

                        {/* Total */}
                        <div className="grid grid-cols-[1fr_auto] bg-cotizar-main/5 border-t-2 border-cotizar-main">
                          <div className="px-5 py-4">
                            <span className="font-display font-bold text-cotizar-main uppercase tracking-wide text-sm">
                              Total homenajes
                            </span>
                          </div>
                          <div className="px-5 py-4 w-36 border-l border-cotizar-main/30 flex items-center justify-center">
                            <span className="font-display font-bold text-cotizar-dark text-base">
                              {planesParticular[servicioSeleccionado].total}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Nota informativa */}
                    <p className="text-xs text-muted-foreground mt-4 leading-relaxed text-center">
                      * Para mayor información sobre tarifas comunícate con nuestros asesores.
                    </p>

                    {/* Acciones */}
                    <div className="flex gap-3 mt-6">
                      <Button variant="outline" onClick={() => setStep(2)} className="hover:bg-muted hover:text-foreground">
                        Atrás
                      </Button>
                      <Button size="lg" asChild className="bg-cotizar-main text-white hover:bg-cotizar-dark flex-1 px-8">
                        <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                          Contactar por WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Afiliado: resumen genérico */
                  <div className="bg-cotizar-main/5 rounded-2xl border border-border p-6 md:p-8">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-8 h-8 rounded-full bg-cotizar-main text-white flex items-center justify-center text-sm font-bold">3</div>
                      <div>
                        <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Confirmación</h3>
                        <h2 className="font-display text-xl font-bold text-foreground">
                          Resumen de tu cotización
                        </h2>
                      </div>
                    </div>

                    <div className="bg-muted/30 rounded-xl p-5 mb-6 space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Tipo de usuario:</span>
                        <span className="font-medium text-foreground capitalize">{tipoUsuario}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Servicio:</span>
                        <span className="font-medium text-foreground capitalize">{servicioSeleccionado}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Sala de homenaje:</span>
                        <span className="font-medium text-foreground">{deseaSala ? "Sí" : "No"}</span>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                      Un asesor de Los Olivos Cartagena se comunicará contigo para brindarte una cotización personalizada basada en tus requerimientos. Puedes contactarnos directamente al WhatsApp 323 3093435.
                    </p>

                    <div className="flex gap-3">
                      <Button variant="outline" onClick={() => setStep(2)} className="hover:bg-muted hover:text-foreground">
                        Atrás
                      </Button>
                      <Button asChild className="bg-cotizar-main text-white hover:bg-cotizar-dark">
                        <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                          Contactar por WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
