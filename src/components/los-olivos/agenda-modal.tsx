"use client"

import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const API_BASE = "https://portalapi.losolivoscartagena.com/api"

const MESES = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
const DIAS  = ["Lu","Ma","Mi","Ju","Vi","Sá","Do"]

function formatHora(hora: string) {
  const [h, m] = hora.split(":")
  const hour = parseInt(h)
  const ampm = hour >= 12 ? "PM" : "AM"
  const h12 = hour % 12 || 12
  return `${h12}:${m} ${ampm}`
}

function toDateStr(year: number, month: number, day: number) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
}

// ── Mini calendario ────────────────────────────────────────────────────────────
function MiniCalendar({ availableDates, value, onChange, isVida }: {
  availableDates: string[]
  value: string
  onChange: (date: string) => void
  isVida: boolean
}) {
  const firstAvailable = availableDates[0]
  // MiniCalendar solo se monta cuando availableDates ya tiene datos,
  // así que firstAvailable siempre está definido en el primer render.
  const [view, setView] = useState(() => {
    const base = value || firstAvailable
    return base ? new Date(base + "T12:00:00") : new Date()
  })

  const year  = view.getFullYear()
  const month = view.getMonth()
  const totalDays = new Date(year, month + 1, 0).getDate()
  // Lunes = 0 … Domingo = 6
  const startOffset = (new Date(year, month, 1).getDay() + 6) % 7

  const available = new Set(availableDates)

  const accent  = isVida ? "bg-vida-dark text-white"         : "bg-duelo-main text-white"
  const hover   = isVida ? "hover:bg-vida-dark/10 text-foreground" : "hover:bg-duelo-main/10 text-foreground"

  return (
    <div className="border border-border rounded-xl p-3 bg-background select-none">
      {/* Cabecera mes */}
      <div className="flex items-center justify-between mb-3 px-1">
        <button type="button" onClick={() => setView(new Date(year, month - 1, 1))}
          className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-muted transition-colors">
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-semibold capitalize">
          {MESES[month]} {year}
        </span>
        <button type="button" onClick={() => setView(new Date(year, month + 1, 1))}
          className="w-7 h-7 rounded-lg flex items-center justify-center hover:bg-muted transition-colors">
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Encabezados días */}
      <div className="grid grid-cols-7 mb-1">
        {DIAS.map(d => (
          <div key={d} className="text-center text-[10px] font-semibold text-muted-foreground py-1">{d}</div>
        ))}
      </div>

      {/* Celdas */}
      <div className="grid grid-cols-7 gap-0.5">
        {Array.from({ length: startOffset }).map((_, i) => <div key={`e${i}`} />)}
        {Array.from({ length: totalDays }, (_, i) => i + 1).map(day => {
          const ds        = toDateStr(year, month, day)
          const isAvail   = available.has(ds)
          const isSelected = value === ds

          return (
            <button
              key={ds}
              type="button"
              disabled={!isAvail}
              onClick={() => onChange(ds)}
              className={`
                aspect-square w-full rounded-lg text-xs font-medium transition-all
                ${isSelected
                  ? accent
                  : isAvail
                    ? hover
                    : "text-muted-foreground/25 cursor-not-allowed"
                }
              `}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

// ── Modal ──────────────────────────────────────────────────────────────────────
export function AgendaModal({ open, onClose, variant = "duelo" }: {
  open: boolean
  onClose: () => void
  variant?: "duelo" | "vida"
}) {
  const isVida = variant === "vida"
  const area   = isVida ? "Unidad de vida" : "Unidad de duelo"

  const fieldClass = isVida
    ? "w-full border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-vida-dark focus:ring-2 focus:ring-vida-dark/15 transition-all bg-background"
    : "w-full border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-duelo-main focus:ring-2 focus:ring-duelo-main/15 transition-all bg-background"

  const [form, setForm] = useState({ nombre: "", documento: "", correo: "", telefono: "", fecha: "", modalidad: "", horario: "", observaciones: "" })
  const [mounted,      setMounted]      = useState(false)
  const [loading,      setLoading]      = useState(false)
  const [done,         setDone]         = useState(false)
  const [error,        setError]        = useState<string | null>(null)
  const [grouped,      setGrouped]      = useState<Record<string, string[]>>({})
  const [loadingSlots, setLoadingSlots] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else      document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    if (!open) return
    setDone(false); setLoading(false); setError(null); setGrouped({})
    setForm({ nombre: "", documento: "", correo: "", telefono: "", fecha: "", modalidad: "", horario: "", observaciones: "" })

    setLoadingSlots(true)
    fetch(`${API_BASE}/agendar-citas/psicologia/disponibles?area=${encodeURIComponent(area)}`)
      .then(r => r.json())
      .then((data: { grouped?: Record<string, string[]> }) => setGrouped(data.grouped ?? {}))
      .catch(() => setGrouped({}))
      .finally(() => setLoadingSlots(false))
  }, [open, area])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", fn)
    return () => document.removeEventListener("keydown", fn)
  }, [onClose])

  const availableDates = Object.keys(grouped).sort()
  const availableHours = form.fecha ? (grouped[form.fecha] ?? []) : []

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (loading) return
    if (!form.fecha)    { setError("Por favor selecciona una fecha."); return }
    if (!form.horario)  { setError("Por favor selecciona un horario."); return }
    if (!form.modalidad){ setError("Por favor selecciona una modalidad."); return }

    setLoading(true); setError(null)

    try {
      const response = await fetch(`${API_BASE}/agendar-citas/psicologia/registrar`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre_completo: form.nombre,
          documento:       form.documento,
          correo:          form.correo,
          telefono:        form.telefono,
          fecha_cita:      form.fecha,
          horario_atencion:`${form.horario}:00`,
          modalidad:       form.modalidad,
          area,
          observacion:     form.observaciones,
        }),
      })

      if (!response.ok) {
        const data: { error?: string } = await response.json().catch(() => ({}))
        setError(data.error ?? "No se pudo registrar la cita. Inténtalo de nuevo.")
        return
      }

      setDone(true)
    } catch {
      setError("No se pudo registrar la cita. Inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
  }

  if (!mounted || !open) return null

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div ref={ref} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <h3 className={`font-display font-bold text-lg ${isVida ? "text-vida-dark" : "text-duelo-dark"}`}>
              ¡Agenda tu cita con psicología!
            </h3>
            <p className="text-xs text-muted-foreground mt-0.5">Completa el formulario y te contactaremos pronto</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Éxito */}
        {done ? (
          <div className="p-8 text-center space-y-3">
            <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center ${isVida ? "bg-vida-dark/10 text-vida-dark" : "bg-duelo-main/10 text-duelo-main"}`}>
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h4 className="font-display font-bold text-lg text-foreground">¡Cita agendada con éxito!</h4>
            <p className="text-sm text-muted-foreground">Pronto nos pondremos en contacto contigo para confirmar tu cita.</p>
            <button onClick={onClose} className={`mt-2 w-full text-white font-semibold text-sm py-3 rounded-xl transition-colors ${isVida ? "bg-vida-dark hover:bg-vida-dark/90" : "bg-duelo-main hover:bg-duelo-dark"}`}>
              Cerrar
            </button>
          </div>
        ) : (
          <form className="p-5 space-y-4" onSubmit={handleSubmit}>

            {/* Nombre */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Nombres y apellidos *</label>
              <input required type="text" placeholder="Nombres y apellidos" className={fieldClass}
                value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} />
            </div>

            {/* Documento */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">N.° de documento *</label>
              <input required type="text" placeholder="######" className={fieldClass}
                value={form.documento} onChange={e => setForm(f => ({ ...f, documento: e.target.value }))} />
            </div>

            {/* Correo */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Correo electrónico *</label>
              <input required type="email" placeholder="correo@ejemplo.com" className={fieldClass}
                value={form.correo} onChange={e => setForm(f => ({ ...f, correo: e.target.value }))} />
            </div>

            {/* Teléfono */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Número de teléfono *</label>
              <input required type="tel" placeholder="300 000 0000" className={fieldClass}
                value={form.telefono} onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))} />
            </div>

            {/* Fecha — calendario */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Fecha preferida *</label>
              {loadingSlots ? (
                <div className="flex items-center gap-2 px-3 py-2.5 text-sm text-muted-foreground border border-border rounded-lg">
                  <span className={`w-4 h-4 border-2 border-t-transparent rounded-full animate-spin ${isVida ? "border-vida-dark" : "border-duelo-main"}`} />
                  Cargando disponibilidad...
                </div>
              ) : availableDates.length === 0 ? (
                <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-2.5">
                  No hay fechas disponibles en este momento.
                </p>
              ) : (
                <MiniCalendar
                  availableDates={availableDates}
                  value={form.fecha}
                  isVida={isVida}
                  onChange={d => setForm(f => ({ ...f, fecha: d, horario: "" }))}
                />
              )}
            </div>

            {/* Horarios — solo slots de la API para la fecha elegida */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Horario disponible *</label>
              {!form.fecha ? (
                <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-2.5">
                  Selecciona una fecha para ver los horarios disponibles.
                </p>
              ) : availableHours.length === 0 ? (
                <p className="text-sm text-muted-foreground bg-muted/50 rounded-lg px-3 py-2.5">
                  No hay horarios disponibles para esta fecha.
                </p>
              ) : (
                <div className="grid grid-cols-3 gap-2">
                  {availableHours.map(hora => (
                    <label key={hora}
                      className={`flex items-center justify-center py-2.5 rounded-lg border text-sm font-medium cursor-pointer transition-all
                        ${form.horario === hora
                          ? isVida ? "border-vida-dark bg-vida-dark/10 text-vida-dark" : "border-duelo-main bg-duelo-main/10 text-duelo-main"
                          : "border-border text-muted-foreground hover:border-muted-foreground/40"
                        }`}
                    >
                      <input type="radio" name="horario" value={hora} className="sr-only"
                        checked={form.horario === hora} onChange={() => setForm(f => ({ ...f, horario: hora }))} />
                      {formatHora(hora)}
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Modalidad */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Modalidad *</label>
              <div className="flex gap-3">
                {["Presencial", "Virtual"].map(op => (
                  <label key={op}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium cursor-pointer transition-all
                      ${form.modalidad === op
                        ? isVida ? "border-vida-dark bg-vida-dark/10 text-vida-dark" : "border-duelo-main bg-duelo-main/10 text-duelo-main"
                        : "border-border text-muted-foreground hover:border-muted-foreground/40"
                      }`}
                  >
                    <input required type="radio" name="modalidad" value={op} className="sr-only"
                      checked={form.modalidad === op} onChange={() => setForm(f => ({ ...f, modalidad: op }))} />
                    {op}
                  </label>
                ))}
              </div>
            </div>

            {/* Observaciones */}
            <div className="space-y-1">
              <label className="text-xs font-semibold text-foreground">Observaciones</label>
              <textarea rows={3} placeholder="Cuéntanos cómo podemos ayudarte..."
                className={`${fieldClass} resize-none`} value={form.observaciones}
                onChange={e => { setForm(f => ({ ...f, observaciones: e.target.value })); setError(null) }} />
            </div>

            {/* Error */}
            {error && (
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                </svg>
                {error}
              </div>
            )}

            {/* Submit */}
            <button type="submit" disabled={loading}
              className={`w-full text-white font-semibold text-sm py-3 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${isVida ? "bg-vida-dark hover:bg-vida-dark/90" : "bg-duelo-main hover:bg-duelo-dark"}`}>
              {loading ? "Enviando..." : "¡Agenda tu cita!"}
            </button>

          </form>
        )}
      </div>
    </div>,
    document.body
  )
}
