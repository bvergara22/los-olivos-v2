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
  estado: number,
  destino_final: string,
}

interface Condolencia {
  nombre: string
  apellido: string
  comentario: string
  fecha: string
}

// ─── Descargar ─────────────────────────────────────────────────────────────────

function esc(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
}

// Partículas de apellidos compuestos en español
const PARTICLES = new Set(["DE", "DEL", "LA", "LOS", "LAS", "SAN", "SANTA"])

function parseName(fullName: string): { nombre: string; apellido: string } {
  const parts = fullName.toUpperCase().trim().split(/\s+/)
  if (parts.length === 0) return { nombre: "", apellido: "" }
  if (parts.length === 1) return { nombre: parts[0], apellido: "" }

  let i = 0

  // 1. Primer nombre: primera palabra no-partícula
  while (i < parts.length && PARTICLES.has(parts[i])) i++
  const nombre = parts[i] ?? ""
  i++

  // 2. Primer apellido: partículas seguidas de la siguiente palabra significativa
  const apellidoParts: string[] = []
  while (i < parts.length && PARTICLES.has(parts[i])) { apellidoParts.push(parts[i]); i++ }
  if (i < parts.length) apellidoParts.push(parts[i])

  return { nombre, apellido: apellidoParts.join(" ") }
}

async function downloadObituario(o: Obituario) {
  const [{ jsPDF }, { default: html2canvas }] = await Promise.all([
    import("jspdf"),
    import("html2canvas"),
  ])

  const { nombre, apellido } = parseName(o.nombre_ser_querido)
  const nameChars = nombre.length + (apellido ? apellido.length + 1 : 0)
  const fontSize = Math.min(60, Math.max(28, Math.floor(480 / Math.max(nameChars * 0.52, 1))))

  const el = document.createElement("div")
  el.style.cssText = "width:794px;height:1123px;background:#bdd7ec;position:fixed;top:-9999px;left:-9999px;font-family:var(--font-display),cursive;box-sizing:border-box;overflow:hidden;"

  el.innerHTML = `
    <div style="padding-top:108px;text-align:center;color:#557070;font-size:28px;font-weight:900;line-height:1.8;">
      Un homenaje al amor,<br>la vida y el legado de:
    </div>
    <div style="margin-top:52px;text-align:center;line-height:1.1;padding:0 20px;">
      <span style="font-family:var(--font-sans),sans-serif;font-weight:400;font-size:${fontSize}px;color:#2a4444;display:inline;">${esc(nombre)}</span>${apellido ? `<span style="font-family:var(--font-sans),sans-serif;font-weight:700;font-size:${fontSize}px;color:#2a4444;display:inline;"> ${esc(apellido)}</span>` : ""}
    </div>
    <div style="margin-top:68px;text-align:center;color:#557070;font-size:21px;font-weight:600;line-height:1.6;padding:0 95px;">
      Agradecemos a los familiares y amigos nos acompañen en este momento, Dios los bendiga:
    </div>
    <div style="margin:42px 38px 0;background:#97c0e2;border-radius:10px;padding:22px 28px 38px;display:flex;font-family:var(--font-display),cursive;">
      <div style="flex:1;">
        <p style="margin:0;font-size:19px;font-weight:800;color:#557070;">Fecha:</p>
        <p style="margin:10px 0 0;font-size:19px;font-weight:800;color:#2a4444;">${esc(o.fecha || "-")}</p>
      </div>
      <div style="flex:1;">
        <p style="margin:0;font-size:19px;font-weight:800;color:#557070;">Iglesia:</p>
        <p style="margin:10px 0 0;font-size:19px;font-weight:800;color:#2a4444;">${esc(o.exequias || "-")}</p>
      </div>
      <div style="flex:1;">
        <p style="margin:0;font-size:19px;font-weight:800;color:#557070;">Hora:</p>
        <p style="margin:10px 0 0;font-size:19px;font-weight:800;color:#2a4444;">${esc(o.hora_exequias || "-")}</p>
      </div>
    </div>
    <div style="margin:26px 38px 0;font-size:19px;font-weight:800;color:#2a4444;font-family:var(--font-display),cursive;">
      Destino final: ${esc(o.inhumacion || "-")}
    </div>
    <img src="/obituario_descarga.png" style="position:absolute;bottom:0;left:0;width:794px;display:block;" crossorigin="anonymous">
  `

  document.body.appendChild(el)
  await document.fonts.ready

  const canvas = await html2canvas(el, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#bdd7ec",
    width: 794,
    height: 1123,
    logging: false,
  })

  document.body.removeChild(el)

  const pdf = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" })
  pdf.addImage(canvas.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, 210, 297)
  pdf.save(`Obituario de ${o.nombre_ser_querido.toUpperCase()}.pdf`)
}

// ─── Modal base ────────────────────────────────────────────────────────────────

function Modal({ title, subtitle, onClose, children }: {
  title: string; subtitle: string; onClose: () => void; children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)
  // eslint-disable-next-line react-hooks/set-state-in-effect
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
    <Modal title={obituario.nombre_ser_querido.toUpperCase()} subtitle="Enviar condolencia" onClose={onClose}>
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
    <Modal title={obituario.nombre_ser_querido.toUpperCase()} subtitle="Condolencias" onClose={onClose}>
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
          <h3 className="font-display text-white text-base font-bold leading-snug min-h-[2.75rem] flex items-center justify-center line-clamp-2 uppercase">
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
          <span className="text-muted-foreground font-medium">Destino final:</span>
          <span className="text-foreground text-right">{o.destino_final}</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="text-muted-foreground font-medium">Lugar destino final:</span>
          <span className="text-foreground text-right">{o.inhumacion}</span>
        </div>
        <div className="flex justify-between gap-2">
          <span className="text-muted-foreground font-medium">Hora destino final:</span>
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
    fetch("https://portalapi.losolivoscartagena.com/api/obituarios/activos")
      .then(r => r.json())
      .then(data => { setObituarios(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const scrollToCard = (index: number) => {
    const el = scrollRef.current
    const card = cardRefs.current[index]
    if (!el || !card) return
    const dx = card.getBoundingClientRect().left - el.getBoundingClientRect().left
    el.scrollTo({ left: el.scrollLeft + dx, behavior: "smooth" })
  }

  useEffect(() => {
    if (obituarios.length <= 1) return
    const t = setInterval(() => {
      if (isDragging.current || !scrollRef.current) return
      autoIndexRef.current = (autoIndexRef.current + 1) % obituarios.length
      scrollToCard(autoIndexRef.current)
    }, 8000)
    return () => clearInterval(t)
  }, [obituarios.length])

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
        ) : obituarios.length === 1 ? (
          <div className="max-w-sm mx-auto">
            <ObituarioCard
              o={obituarios[0]}
              onCondolencia={() => setCondolenciaFor(obituarios[0])}
              onVerCondolencias={() => setCondolenciasFor(obituarios[0])}
            />
          </div>
        ) : (
          <div className="relative">
            <div
              ref={scrollRef}
              className={`flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory cursor-grab select-none pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${obituarios.length <= 2 ? "justify-center" : ""}`}
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

            {obituarios.length > 3 && (
              <>
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
              </>
            )}
          </div>
        )}
      </div>

      {condolenciaFor && <CondolenciaModal obituario={condolenciaFor} onClose={() => setCondolenciaFor(null)} />}
      {condolenciasFor && <CondolenciasModal obituario={condolenciasFor} onClose={() => setCondolenciasFor(null)} />}
    </section>
  )
}
