"use client"

import { X } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

const horarios = [
  "8:00 AM - 9:00 AM",
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "4:00 PM - 5:00 PM",
]

export function AgendaModal({ open, onClose, variant = "duelo" }: { open: boolean; onClose: () => void; variant?: "duelo" | "vida" }) {
  const [form, setForm] = useState({ nombre: "", documento: "", correo: "", telefono: "", fecha: "", modalidad: "", horario: "", observaciones: "" })
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  const isVida = variant === "vida"
  const field = isVida
    ? "w-full border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-vida-dark focus:ring-2 focus:ring-vida-dark/15 transition-all bg-background"
    : "w-full border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-duelo-main focus:ring-2 focus:ring-duelo-main/15 transition-all bg-background"

  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    if (open) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDone(false)
      setLoading(false)
      setError(null)
      setForm({ nombre: "", documento: "", correo: "", telefono: "", fecha: "", modalidad: "", horario: "", observaciones: "" })
    }
  }, [open])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", fn)
    return () => document.removeEventListener("keydown", fn)
  }, [onClose])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (loading) return

    setLoading(true)

    try {
      const response = await fetch("https://portalapi.losolivoscartagena.com/api/agendar-citas/psicologia/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre_completo: form.nombre,
          documento: form.documento,
          correo: form.correo,
          telefono: form.telefono,
          fecha_preferida: form.fecha,
          horario_atencion: form.horario,
          modalidad: form.modalidad,
          area: isVida ? "Unidad de vida" : "Unidad de duelo",
          observacion: form.observaciones,
        }),
      })

      if (!response.ok) {
        setError("No se pudo registrar la cita. Inténtalo de nuevo.")
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
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <h3 className={`font-display font-bold text-lg ${isVida ? "text-vida-dark" : "text-duelo-dark"}`}>¡Agenda tu cita con psicología!</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Completa el formulario y te contactaremos pronto</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        {done ? (
          <div className="p-8 text-center space-y-3">
            <div className={`mx-auto w-14 h-14 rounded-full flex items-center justify-center ${isVida ? "bg-vida-dark/10 text-vida-dark" : "bg-duelo-main/10 text-duelo-main"}`}>
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
            </div>
            <h4 className="font-display font-bold text-lg text-foreground">¡Cita agendada con éxito!</h4>
            <p className="text-sm text-muted-foreground">Pronto nos pondremos en contacto contigo para confirmar tu cita.</p>
            <button onClick={onClose} className={`mt-2 w-full text-white font-semibold text-sm py-3 rounded-xl transition-colors ${isVida ? "bg-vida-dark hover:bg-vida-dark/90" : "bg-duelo-main hover:bg-duelo-dark"}`}>
              Cerrar
            </button>
          </div>
        ) : (
        <form className="p-5 space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Nombres y apellidos *</label>
            <input required type="text" placeholder="Nombres y apellidos" className={field} value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">N.° de documento *</label>
            <input required type="text" placeholder="######" className={field} value={form.documento} onChange={e => setForm(f => ({ ...f, documento: e.target.value }))} />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Correo electrónico *</label>
            <input required type="email" placeholder="correo@ejemplo.com" className={field} value={form.correo} onChange={e => setForm(f => ({ ...f, correo: e.target.value }))} />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Número de teléfono *</label>
            <input required type="tel" placeholder="300 000 0000" className={field} value={form.telefono} onChange={e => setForm(f => ({ ...f, telefono: e.target.value }))} />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Fecha preferida *</label>
            <input required type="date" className={field} value={form.fecha} min={new Date().toISOString().split("T")[0]} onChange={e => setForm(f => ({ ...f, fecha: e.target.value }))} />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Modalidad *</label>
            <div className="flex gap-3">
              {["Presencial", "Virtual"].map(op => (
                <label key={op} className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-sm font-medium cursor-pointer transition-all ${form.modalidad === op ? (isVida ? "border-vida-dark bg-vida-dark/10 text-vida-dark" : "border-duelo-main bg-duelo-main/10 text-duelo-main") : "border-border text-muted-foreground hover:border-muted-foreground/40"}`}>
                  <input required type="radio" name="modalidad" value={op} className="sr-only" checked={form.modalidad === op} onChange={() => setForm(f => ({ ...f, modalidad: op }))} />
                  {op}
                </label>
              ))}
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Selecciona el horario de atención *</label>
            <select required className={field} value={form.horario} onChange={e => setForm(f => ({ ...f, horario: e.target.value }))}>
              <option value="">Selecciona un horario</option>
              {horarios.map(h => <option key={h} value={h}>{h}</option>)}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Observaciones</label>
            <textarea rows={3} placeholder="Cuéntanos cómo podemos ayudarte..." className={`${field} resize-none`} value={form.observaciones} onChange={e => { setForm(f => ({ ...f, observaciones: e.target.value })); setError(null) }} />
          </div>
          {error && (
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-medium">
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" /></svg>
              {error}
            </div>
          )}
          <button type="submit" disabled={loading} className={`w-full text-white font-semibold text-sm py-3 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed ${isVida ? "bg-vida-dark hover:bg-vida-dark/90" : "bg-duelo-main hover:bg-duelo-dark"}`}>
            {loading ? "Enviando..." : "¡Agenda tu cita!"}
          </button>
        </form>
        )}
      </div>
    </div>,
    document.body
  )
}
