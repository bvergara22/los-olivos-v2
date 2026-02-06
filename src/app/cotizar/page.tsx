"use client"

import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import { Calculator, CheckCircle, Flame, MapPin, Users } from "lucide-react"
import { useState } from "react"

const tiposServicio = [
  { id: "cremacion", label: "Cremacion", icon: Flame },
  { id: "inhumacion", label: "Inhumacion", icon: MapPin },
  { id: "traslado", label: "Traslado", icon: Users },
]

export default function CotizarPage() {
  const [tipoUsuario, setTipoUsuario] = useState<"afiliado" | "particular" | null>(null)
  const [servicioSeleccionado, setServicioSeleccionado] = useState<string | null>(null)
  const [deseaSala, setDeseaSala] = useState<boolean | null>(null)
  const [step, setStep] = useState(1)

  return (
    <>
      <PageBanner
        title="Haz tu cotizacion en un minuto"
        description="Coordina el homenaje de tu ser querido o consulta el valor de nuestro servicio de necesidad inmediata segun tus requerimientos."
        icon={Calculator}
      />

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Progress indicator */}
            <div className="flex items-center gap-2 mb-8">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-2 flex-1">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    step >= s 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {step > s ? <CheckCircle className="w-5 h-5" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`flex-1 h-0.5 ${step > s ? "bg-primary" : "bg-border"}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Tipo de usuario */}
            {step === 1 && (
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</div>
                  <div>
                    <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Servicio y localidad</h3>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Quiero que la ceremonia sea...
                    </h2>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4 mb-8">
                  <button
                    type="button"
                    onClick={() => setTipoUsuario("afiliado")}
                    className={`p-6 rounded-xl border-2 text-left transition-all ${
                      tipoUsuario === "afiliado"
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
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
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <h4 className="font-display font-bold text-foreground mb-1">Soy particular</h4>
                    <p className="text-sm text-muted-foreground">
                      No tengo afiliacion, deseo contratar el servicio.
                    </p>
                  </button>
                </div>

                <Button
                  onClick={() => tipoUsuario && setStep(2)}
                  disabled={!tipoUsuario}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Siguiente
                </Button>
              </div>
            )}

            {/* Step 2: Tipo de servicio */}
            {step === 2 && (
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</div>
                  <div>
                    <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Tipo de servicio</h3>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Selecciona el tipo de ceremonia
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
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <tipo.icon className={`w-8 h-8 mx-auto mb-2 ${
                        servicioSeleccionado === tipo.id ? "text-primary" : "text-muted-foreground"
                      }`} />
                      <h4 className="font-display font-bold text-foreground">{tipo.label}</h4>
                    </button>
                  ))}
                </div>

                <div className="mb-6">
                  <h3 className="font-display font-semibold text-foreground mb-3">
                    Deseas sala de homenaje?
                  </h3>
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setDeseaSala(true)}
                      className={`px-6 py-3 rounded-xl border-2 font-medium transition-all ${
                        deseaSala === true
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      Si
                    </button>
                    <button
                      type="button"
                      onClick={() => setDeseaSala(false)}
                      className={`px-6 py-3 rounded-xl border-2 font-medium transition-all ${
                        deseaSala === false
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/50"
                      }`}
                    >
                      No
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Atras
                  </Button>
                  <Button
                    onClick={() => servicioSeleccionado && deseaSala !== null && setStep(3)}
                    disabled={!servicioSeleccionado || deseaSala === null}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Siguiente
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Resumen */}
            {step === 3 && (
              <div className="bg-card rounded-2xl border border-border p-6 md:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</div>
                  <div>
                    <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Confirmacion</h3>
                    <h2 className="font-display text-xl font-bold text-foreground">
                      Resumen de tu cotizacion
                    </h2>
                  </div>
                </div>

                <div className="bg-muted/50 rounded-xl p-5 mb-6 space-y-3">
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
                    <span className="font-medium text-foreground">{deseaSala ? "Si" : "No"}</span>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                  Un asesor de Los Olivos Cartagena se comunicara contigo para brindarte una cotizacion personalizada basada en tus requerimientos. Puedes contactarnos directamente al WhatsApp 323 3093435.
                </p>

                <div className="flex gap-3">
                  <Button variant="outline" onClick={() => setStep(2)}>
                    Atras
                  </Button>
                  <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer">
                      Contactar por WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
