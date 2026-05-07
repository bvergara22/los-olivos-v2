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

export function AgendaModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [form, setForm] = useState({ nombre: "", documento: "", correo: "", telefono: "", horario: "", observaciones: "" })
  const [mounted, setMounted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"
    else document.body.style.overflow = ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", fn)
    return () => document.removeEventListener("keydown", fn)
  }, [onClose])

  if (!mounted || !open) return null

  const field = "w-full border border-border rounded-lg px-3 py-2.5 text-sm outline-none focus:border-duelo-main focus:ring-2 focus:ring-duelo-main/15 transition-all bg-background"

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div ref={ref} className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div>
            <h3 className="font-display font-bold text-lg text-duelo-dark">¡Agenda tu cita con nosotros!</h3>
            <p className="text-xs text-muted-foreground mt-0.5">Completa el formulario y te contactaremos pronto</p>
          </div>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <form className="p-5 space-y-4" onSubmit={e => { e.preventDefault(); onClose() }}>
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
            <label className="text-xs font-semibold text-foreground">Selecciona el horario de atención *</label>
            <select required className={field} value={form.horario} onChange={e => setForm(f => ({ ...f, horario: e.target.value }))}>
              <option value="">Selecciona un horario</option>
              {horarios.map(h => <option key={h} value={h}>{h}</option>)}
            </select>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-foreground">Observaciones</label>
            <textarea rows={3} placeholder="Cuéntanos cómo podemos ayudarte..." className={`${field} resize-none`} value={form.observaciones} onChange={e => setForm(f => ({ ...f, observaciones: e.target.value }))} />
          </div>
          <button type="submit" className="w-full bg-duelo-main text-white font-semibold text-sm py-3 rounded-xl hover:bg-duelo-dark transition-colors">
            ¡Agenda tu cita!
          </button>
        </form>
      </div>
    </div>,
    document.body
  )
}
