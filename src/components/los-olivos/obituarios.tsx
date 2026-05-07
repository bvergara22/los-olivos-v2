"use client"

import { Calendar, ChevronLeft, ChevronRight, Download, Eye, Loader2, Send } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"

interface Obituario {
  id: number
  sala: number
  sede: string
  nombre_ser_querido: string
  fecha: string
  hora_exequias: string
  exequias: string
  hora_inhumacion: string
  inhumacion: string
  estado: number
}

interface Condolencia {
  nombre: string
  apellido: string
  comentario: string
  fecha: string
}

// ─── Descargar ─────────────────────────────────────────────────────────────────

async function downloadObituario(o: Obituario) {
  const { jsPDF } = await import("jspdf")
  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
  const W = 210, H = 297

  // ── Fondo ───────────────────────────────────────────────────────────────────
  pdf.setFillColor(189, 215, 236) // #bdd7ec
  pdf.rect(0, 0, W, H, "F")

  // ── Cabecera ─────────────────────────────────────────────────────────────────
  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(14)
  pdf.setTextColor(42, 68, 68)
  pdf.text("Un homenaje al amor,", W / 2, 40, { align: "center" })
  pdf.text("la vida y el legado de:", W / 2, 48, { align: "center" })

  // Nombre: primera palabra en weight normal (más claro), resto en bold (oscuro)
  const parts = o.nombre_ser_querido.trim().split(" ")
  const first = parts[0]
  const rest = parts.slice(1).join(" ")

  pdf.setFontSize(30)
  pdf.setFont("helvetica", "normal")
  const fw = pdf.getTextWidth(first + (rest ? " " : ""))
  pdf.setFont("helvetica", "bold")
  const rw = rest ? pdf.getTextWidth(rest) : 0
  const totalNameW = fw + rw
  // Escalar si el nombre es muy largo
  if (totalNameW > 170) {
    pdf.setFontSize(Math.floor(30 * 170 / totalNameW))
  }
  const startX = (W - Math.min(totalNameW, 170)) / 2

  pdf.setFont("helvetica", "normal")
  pdf.setTextColor(42, 68, 68)
  pdf.text(first + (rest ? " " : ""), startX, 67)

  if (rest) {
    pdf.setFont("helvetica", "bold")
    pdf.setTextColor(36, 14, 54) // #240e36
    pdf.text(rest, startX + fw, 67)
  }

  // ── Agradecimiento ───────────────────────────────────────────────────────────
  pdf.setFont("helvetica", "italic")
  pdf.setFontSize(10)
  pdf.setTextColor(42, 68, 68)
  pdf.text(
    "Agradecemos a los familiares y amigos nos acompañen en este momento, Dios los bendiga:",
    W / 2, 84, { align: "center", maxWidth: 160 }
  )

  // ── Cuadro de info (3 columnas: Fecha / Iglesia / Hora) ─────────────────────
  const bx = 20, bw = 170, by = 98, bh = 50
  pdf.setFillColor(151, 192, 226) // #97c0e2
  pdf.roundedRect(bx, by, bw, bh, 5, 5, "F")

  // Separadores verticales
  pdf.setDrawColor(122, 171, 207)
  pdf.setLineWidth(0.4)
  pdf.line(bx + bw / 3, by + 8, bx + bw / 3, by + bh - 8)
  pdf.line(bx + bw * 2 / 3, by + 8, bx + bw * 2 / 3, by + bh - 8)

  const cols = [
    { label: "Fecha", value: o.fecha, x: bx + bw / 6 },
    { label: "Iglesia", value: o.exequias, x: bx + bw / 2 },
    { label: "Hora", value: o.hora_exequias, x: bx + bw * 5 / 6 },
  ]
  const colW = bw / 3 - 8

  for (const col of cols) {
    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(9)
    pdf.setTextColor(42, 68, 68)
    pdf.text(col.label + ":", col.x, by + 15, { align: "center" })

    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(11)
    const lines = pdf.splitTextToSize(col.value || "-", colW) as string[]
    pdf.text(lines, col.x, by + 28, { align: "center" })
  }

  // ── Destino final ────────────────────────────────────────────────────────────
  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(12)
  pdf.setTextColor(42, 68, 68)
  pdf.text(`Destino final: ${o.inhumacion}`, W / 2, by + bh + 18, { align: "center" })

  // ── Footer: obituario_descarga.png ───────────────────────────────────────────
  try {
    const resp = await fetch("/obituario_descarga.png")
    const blob = await resp.blob()
    const b64 = await new Promise<string>((resolve) => {
      const reader = new FileReader()
      reader.onload = () => resolve(reader.result as string)
      reader.readAsDataURL(blob)
    })
    // imagen 2048×554px → ratio 3.7:1 → en A4: 210mm × ~57mm
    const imgH = Math.round(W * 554 / 2048)
    pdf.addImage(b64, "PNG", 0, H - imgH, W, imgH)
  } catch { /* omit footer on error */ }

  pdf.save(`Obituario de ${o.nombre_ser_querido}.pdf`)
}

// ─── Modal base ────────────────────────────────────────────────────────────────

function Modal({ title, subtitle, onClose, children }: {
  title: string; subtitle: string; onClose: () => void; children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => { setMounted(true) }, [])
  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", fn)
    return () => document.removeEventListener("keydown", fn)
  }, [onClose])

  if (!mounted) return null

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        <div className="px-6 py-5 flex-shrink-0" style={{ background: "linear-gradient(135deg, #3e2455 0%, #240e36 100%)" }}>
          <p className="text-white/60 text-xs uppercase tracking-widest mb-1">{subtitle}</p>
          <h3 className="font-display text-white text-base font-bold leading-snug">{title}</h3>
        </div>
        {children}
      </div>
    </div>,
    document.body
  )
}

// ─── Modal Condolencia ─────────────────────────────────────────────────────────

function CondolenciaModal({ obituario, onClose }: { obituario: Obituario; onClose: () => void }) {
  const [form, setForm] = useState({ nombre: "", apellido: "", comentario: "" })
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)
  const valid = form.nombre.trim() !== "" && form.apellido.trim() !== "" && form.comentario.trim() !== ""

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid || loading) return
    setLoading(true)
    try {
      await fetch("https://www.api.losolivoscartagena.com/api/comentarios/agregar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, fecha: new Date().toISOString().slice(0, 10), ser_querido_id: obituario.id }),
      })
    } catch { /* noop */ } finally {
      setLoading(false)
      setDone(true)
    }
  }

  return (
    <Modal title={obituario.nombre_ser_querido} subtitle="Enviar condolencia" onClose={onClose}>
      {done ? (
        <div className="p-8 text-center">
          <div className="w-14 h-14 rounded-full bg-duelo-main/10 flex items-center justify-center mx-auto mb-4">
            <Send className="w-6 h-6 text-duelo-main" />
          </div>
          <p className="font-semibold text-foreground text-lg">Condolencia enviada</p>
          <p className="text-muted-foreground text-sm mt-2 leading-relaxed">Gracias por acompañar a la familia en este momento.</p>
          <button onClick={onClose} className="mt-6 px-8 py-2.5 rounded-full bg-duelo-main text-white text-sm font-semibold hover:bg-duelo-dark transition-colors">Cerrar</button>
        </div>
      ) : (
        <form className="p-6 space-y-4 overflow-y-auto" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Nombre</label>
              <input type="text" required placeholder="Tu nombre" className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-duelo-main/30 focus:border-duelo-main transition-all" value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-muted-foreground">Apellido</label>
              <input type="text" required placeholder="Tu apellido" className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-duelo-main/30 focus:border-duelo-main transition-all" value={form.apellido} onChange={e => setForm(f => ({ ...f, apellido: e.target.value }))} />
            </div>
          </div>
          <div className="space-y-1">
            <label className="text-xs font-medium text-muted-foreground">Mensaje</label>
            <textarea required rows={4} placeholder="Escribe tu mensaje de condolencia..." className="w-full border border-border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-duelo-main/30 focus:border-duelo-main transition-all resize-none" value={form.comentario} onChange={e => setForm(f => ({ ...f, comentario: e.target.value }))} />
          </div>
          <button type="submit" disabled={!valid || loading} className="w-full py-3 rounded-xl bg-duelo-main text-white text-sm font-semibold flex items-center justify-center gap-2 hover:bg-duelo-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <><Send className="w-4 h-4" />Enviar condolencia</>}
          </button>
          <button type="button" onClick={onClose} className="w-full py-2 text-sm text-muted-foreground hover:text-foreground transition-colors">Cancelar</button>
        </form>
      )}
    </Modal>
  )
}

// ─── Modal Ver Condolencias ────────────────────────────────────────────────────

function CondolenciasModal({ obituario, onClose }: { obituario: Obituario; onClose: () => void }) {
  const [condolencias, setCondolencias] = useState<Condolencia[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`https://www.api.losolivoscartagena.com/api/comentarios/listar/${obituario.id}`)
      .then(r => r.json())
      .then(data => { setCondolencias(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [obituario.id])

  return (
    <Modal title={obituario.nombre_ser_querido} subtitle="Condolencias" onClose={onClose}>
      <div className="overflow-y-auto flex-1 p-6">
        {loading ? (
          <div className="flex justify-center py-10"><Loader2 className="w-6 h-6 animate-spin text-duelo-main" /></div>
        ) : condolencias.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-muted-foreground text-sm">Aún no hay condolencias para este obituario.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {condolencias.map((c, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-duelo-main/10 text-duelo-main flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                  {c.nombre?.[0]?.toUpperCase() ?? "?"}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-foreground">{c.nombre} {c.apellido}</p>
                  <p className="text-sm text-muted-foreground mt-0.5 leading-relaxed">{c.comentario}</p>
                  <p className="text-xs text-muted-foreground/50 mt-1">{c.fecha}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-4 border-t border-border flex-shrink-0">
        <button onClick={onClose} className="w-full py-2.5 rounded-xl bg-duelo-main text-white text-sm font-semibold hover:bg-duelo-dark transition-colors">Cerrar</button>
      </div>
    </Modal>
  )
}

// ─── Card ──────────────────────────────────────────────────────────────────────

function ObituarioCard({ o, onCondolencia, onVerCondolencias }: {
  o: Obituario
  onCondolencia: () => void
  onVerCondolencias: () => void
}) {
  return (
    <div className="flex flex-col h-full rounded-2xl overflow-hidden border border-border bg-card shadow-md hover:shadow-lg transition-shadow duration-300">

      {/* Header */}
      <div className="relative px-6 py-6 text-center overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "url('/obituario_fondo.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
        <div className="absolute inset-0 bg-[#240e36]/72" />
        <div className="relative z-10">
          <div className="w-8 h-px bg-white/30 mx-auto mb-3" />
          <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-2">Q.E.P.D.</p>
          <h3 className="font-display text-white text-base font-bold leading-snug min-h-[2.75rem] flex items-center justify-center line-clamp-2">
            {o.nombre_ser_querido}
          </h3>
          <div className="flex items-center justify-center gap-1.5 mt-3">
            <Calendar className="w-3 h-3 text-white/50" />
            <span className="text-white/60 text-xs">{o.fecha}</span>
          </div>
        </div>
      </div>

      {/* Details */}
      <div className="px-5 py-4 space-y-1.5 border-b border-border text-sm flex-1">
        <div className="flex justify-between gap-2">
          <span className="text-muted-foreground font-medium">Exequias:</span>
          <span className="text-foreground text-right">{o.exequias}</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="text-muted-foreground font-medium">Hora exequias:</span>
          <span className="text-foreground text-right">{o.hora_exequias}</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="text-muted-foreground font-medium">Inhumación:</span>
          <span className="text-foreground text-right">{o.inhumacion}</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="text-muted-foreground font-medium">Hora inhumación:</span>
          <span className="text-foreground text-right">{o.hora_inhumacion}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="px-5 py-5 space-y-2">
        <button onClick={onCondolencia} className="w-full py-2.5 rounded-xl bg-duelo-main text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-duelo-dark transition-colors">
          <Send className="w-3.5 h-3.5" /> Enviar condolencia
        </button>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={onVerCondolencias} className="py-2.5 rounded-xl bg-duelo-main text-white text-[11px] font-semibold flex items-center justify-center gap-1 hover:bg-duelo-dark transition-colors whitespace-nowrap overflow-hidden">
            <Eye className="w-3 h-3 flex-shrink-0" /> Condolencias
          </button>
          <button onClick={() => downloadObituario(o)} className="py-2.5 rounded-xl bg-duelo-main text-white text-[11px] font-semibold flex items-center justify-center gap-1 hover:bg-duelo-dark transition-colors whitespace-nowrap overflow-hidden">
            <Download className="w-3 h-3 flex-shrink-0" /> Descargar
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function Obituarios() {
  const [obituarios, setObituarios] = useState<Obituario[]>([])
  const [loading, setLoading] = useState(true)
  const [condolenciaFor, setCondolenciaFor] = useState<Obituario | null>(null)
  const [condolenciasFor, setCondolenciasFor] = useState<Obituario | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const autoIndexRef = useRef(0)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragScrollLeft = useRef(0)

  useEffect(() => {
    fetch("https://www.api.losolivoscartagena.com/api/obituarios")
      .then(r => r.json())
      .then(data => { setObituarios(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (obituarios.length <= 1) return
    const t = setInterval(() => {
      if (isDragging.current || !scrollRef.current) return
      autoIndexRef.current = (autoIndexRef.current + 1) % obituarios.length
      scrollToCard(autoIndexRef.current)
    }, 8000)
    return () => clearInterval(t)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [obituarios.length])

  const scrollToCard = (index: number) => {
    const el = scrollRef.current
    const card = cardRefs.current[index]
    if (!el || !card) return
    const dx = card.getBoundingClientRect().left - el.getBoundingClientRect().left
    el.scrollTo({ left: el.scrollLeft + dx, behavior: "smooth" })
  }

  const scrollPrev = () => {
    const el = scrollRef.current
    if (!el) return
    if (el.scrollLeft <= 1) {
      autoIndexRef.current = obituarios.length - 1
      el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: "smooth" })
    } else {
      autoIndexRef.current = (autoIndexRef.current - 1 + obituarios.length) % obituarios.length
      scrollToCard(autoIndexRef.current)
    }
  }
  const scrollNext = () => {
    const el = scrollRef.current
    if (!el) return
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
      autoIndexRef.current = 0
      el.scrollTo({ left: 0, behavior: "smooth" })
    } else {
      autoIndexRef.current = (autoIndexRef.current + 1) % obituarios.length
      scrollToCard(autoIndexRef.current)
    }
  }

  const syncAutoIndex = () => {
    isDragging.current = false
    if (!scrollRef.current) return
    const elLeft = scrollRef.current.getBoundingClientRect().left
    let nearest = 0, minDist = Infinity
    cardRefs.current.forEach((card, i) => {
      if (!card) return
      const dist = Math.abs(card.getBoundingClientRect().left - elLeft)
      if (dist < minDist) { minDist = dist; nearest = i }
    })
    autoIndexRef.current = nearest
  }

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return
    isDragging.current = true
    dragStartX.current = e.pageX
    dragScrollLeft.current = scrollRef.current.scrollLeft
    e.preventDefault()
  }
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current || !scrollRef.current) return
    scrollRef.current.scrollLeft = dragScrollLeft.current - (e.pageX - dragStartX.current)
  }
  const onMouseUp = syncAutoIndex

  return (
    <section id="obituarios" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <span className="text-3xl md:text-4xl block" style={{ color: "#3e2455" }}>Obituarios</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2">En su memoria</h2>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-duelo-main" />
          </div>
        ) : obituarios.length === 0 ? (
          <div className="text-center py-20 max-w-sm mx-auto">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-7 text-muted-foreground" />
            </div>
            <p className="text-foreground font-medium">Sin obituarios activos</p>
            <p className="text-muted-foreground text-sm mt-1">En estos momentos no hay obituarios registrados.</p>
          </div>
        ) : (
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory cursor-grab select-none pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onMouseDown={onMouseDown}
              onMouseMove={onMouseMove}
              onMouseUp={onMouseUp}
              onMouseLeave={onMouseUp}
            >
              {obituarios.map((o, i) => (
                <div
                  key={o.id}
                  ref={el => { cardRefs.current[i] = el }}
                  className="flex-shrink-0 snap-start [scroll-snap-stop:always] w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <ObituarioCard
                    o={o}
                    onCondolencia={() => setCondolenciaFor(o)}
                    onVerCondolencias={() => setCondolenciasFor(o)}
                  />
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollPrev}
              className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center hover:opacity-60 transition-opacity"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-6 h-6 text-foreground drop-shadow" />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 items-center justify-center hover:opacity-60 transition-opacity"
              aria-label="Siguiente"
            >
              <ChevronRight className="w-6 h-6 text-foreground drop-shadow" />
            </button>
          </div>
        )}
      </div>

      {condolenciaFor && <CondolenciaModal obituario={condolenciaFor} onClose={() => setCondolenciaFor(null)} />}
      {condolenciasFor && <CondolenciasModal obituario={condolenciasFor} onClose={() => setCondolenciasFor(null)} />}
    </section>
  )
}
