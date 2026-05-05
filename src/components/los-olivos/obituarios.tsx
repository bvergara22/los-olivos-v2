"use client"

import { Calendar, ChevronLeft, ChevronRight, Download, Eye, Loader2, Send } from "lucide-react"
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react"
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

function downloadObituario(o: Obituario) {
  const parts = o.nombre_ser_querido.trim().split(" ")
  const firstName = parts[0] ?? ""
  const rest = parts.slice(1).join(" ")

  const html = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Obituario – ${o.nombre_ser_querido}</title>
  <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@200;400;700;900&family=Comfortaa:wght@700&display=swap" rel="stylesheet">
  <style>
    *{box-sizing:border-box;margin:0;padding:0}
    body{background:#bdd7ec;font-family:'Comfortaa',sans-serif;min-height:100vh;display:flex;flex-direction:column}
    header{padding:60px 40px 20px;text-align:center}
    header h1{font-size:17px;color:#2a4444;font-weight:700;line-height:1.6;margin-bottom:20px}
    .name{font-family:'Raleway',sans-serif;font-size:48px;color:#240e36;font-weight:900;letter-spacing:-0.5px}
    .name span{font-weight:200;color:#2a4444}
    .info-grid{display:flex;justify-content:center;margin:40px auto;background:#97c0e2;padding:24px;max-width:580px;border-radius:8px}
    .info-col{flex:1;text-align:center;font-size:15px;color:#2a4444;font-weight:700;padding:10px;border-right:1px solid #7aabcf}
    .info-col:last-child{border-right:none}
    .info-col small{display:block;font-weight:400;font-size:12px;margin-bottom:6px;opacity:.7}
    .destino{text-align:center;font-size:16px;color:#2a4444;font-weight:700;margin:20px auto}
    footer{margin-top:auto;padding:32px;text-align:center;font-size:12px;color:#2a4444;opacity:.6}
    @media print{body{-webkit-print-color-adjust:exact;print-color-adjust:exact}}
  </style>
</head>
<body>
  <header>
    <h1>Un homenaje al amor, la vida y el legado de:</h1>
    <p class="name"><span>${firstName} </span>${rest}</p>
  </header>
  <p style="text-align:center;font-size:15px;color:#2a4444;opacity:.6;font-weight:bold;margin:16px 0">Agradecemos a familiares y amigos acompañarnos en este momento.<br>Dios los bendiga.</p>
  <div class="info-grid">
    <div class="info-col"><small>Fecha</small>${o.fecha}</div>
    <div class="info-col"><small>Exequias</small>${o.exequias}<br><small style="margin-top:4px">${o.hora_exequias}</small></div>
    <div class="info-col"><small>Inhumación</small>${o.inhumacion}<br><small style="margin-top:4px">${o.hora_inhumacion}</small></div>
  </div>
  <p class="destino">Destino final: ${o.inhumacion}</p>
  <footer>Los Olivos Cartagena &mdash; CARTAFUN &mdash; losolivoscartagena.com</footer>
  <script>window.onload=()=>window.print()</script>
</body></html>`

  const blob = new Blob([html], { type: "text/html" })
  const url = URL.createObjectURL(blob)
  window.open(url, "_blank")
  setTimeout(() => URL.revokeObjectURL(url), 3000)
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
      <div className="relative px-6 py-6 text-center" style={{ background: "linear-gradient(135deg, #3e2455 0%, #240e36 100%)" }}>
        <div className="w-8 h-px bg-white/30 mx-auto mb-3" />
        <p className="text-white/50 text-[10px] uppercase tracking-[0.2em] mb-2">Q.E.P.D.</p>
        <h3 className="font-display text-white text-base font-bold leading-snug">
          {o.nombre_ser_querido}
        </h3>
        <div className="flex items-center justify-center gap-1.5 mt-3">
          <Calendar className="w-3 h-3 text-white/50" />
          <span className="text-white/60 text-xs">{o.fecha}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="px-5 py-5 space-y-2">
        <button onClick={onCondolencia} className="w-full py-2.5 rounded-xl bg-duelo-main text-white text-xs font-semibold flex items-center justify-center gap-2 hover:bg-duelo-dark transition-colors">
          <Send className="w-3.5 h-3.5" /> Enviar condolencia
        </button>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={onVerCondolencias} className="py-2 rounded-xl border border-border text-xs font-semibold text-foreground flex items-center justify-center gap-1.5 hover:bg-muted transition-colors">
            <Eye className="w-3.5 h-3.5" /> Ver condolencias
          </button>
          <button onClick={() => downloadObituario(o)} className="py-2 rounded-xl border border-border text-xs font-semibold text-foreground flex items-center justify-center gap-1.5 hover:bg-muted transition-colors">
            <Download className="w-3.5 h-3.5" /> Descargar
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
  const [current, setCurrent] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)
  const [gapPx, setGapPx] = useState(16)
  const [itemWidth, setItemWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const touchStartX = useRef(0)
  const [condolenciaFor, setCondolenciaFor] = useState<Obituario | null>(null)
  const [condolenciasFor, setCondolenciasFor] = useState<Obituario | null>(null)

  useEffect(() => {
    fetch("https://www.api.losolivoscartagena.com/api/obituarios")
      .then(r => r.json())
      .then(data => { setObituarios(Array.isArray(data) ? data : []); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const maxIndex = Math.max(0, obituarios.length - visibleCount)

  const measure = useCallback(() => {
    if (!containerRef.current) return
    const w = window.innerWidth
    const gap = w < 640 ? 16 : 24
    const count = w < 640 ? 1 : w < 768 ? 2 : w < 1280 ? 3 : 4
    const containerW = containerRef.current.offsetWidth
    setGapPx(gap)
    setVisibleCount(count)
    setItemWidth((containerW - (count - 1) * gap) / count)
  }, [])

  useLayoutEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [measure])

  useEffect(() => { setCurrent(c => Math.min(c, maxIndex)) }, [maxIndex])

  const next = useCallback(() => setCurrent(c => c >= maxIndex ? 0 : c + 1), [maxIndex])
  const prev = useCallback(() => setCurrent(c => c <= 0 ? maxIndex : c - 1), [maxIndex])

  useEffect(() => {
    if (maxIndex <= 0) return
    const t = setInterval(next, 8000)
    return () => clearInterval(t)
  }, [next, maxIndex])

  return (
    <section id="obituarios" className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <span className="text-3xl md:text-4xl block" style={{ color: "#3e2455" }}>En su memoria</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2">Obituarios</h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Acompañamos a las familias en los momentos más difíciles, honrando la vida de sus seres queridos.
          </p>
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
            {maxIndex > 0 && (
              <>
                <button type="button" onClick={prev} className="flex absolute -left-4 sm:-left-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/50 hover:bg-white/90 backdrop-blur-sm border border-border/40 shadow-sm items-center justify-center transition-colors text-foreground" aria-label="Anterior">
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button type="button" onClick={next} className="flex absolute -right-4 sm:-right-5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/50 hover:bg-white/90 backdrop-blur-sm border border-border/40 shadow-sm items-center justify-center transition-colors text-foreground" aria-label="Siguiente">
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </>
            )}

            <div
              ref={containerRef}
              className="overflow-hidden"
              onTouchStart={e => { touchStartX.current = e.touches[0].clientX }}
              onTouchEnd={e => { const d = touchStartX.current - e.changedTouches[0].clientX; if (Math.abs(d) > 40) d > 0 ? next() : prev() }}
            >
              <div
                className="flex items-stretch transition-transform duration-500 ease-in-out"
                style={{ gap: `${gapPx}px`, transform: `translateX(${-(current * (itemWidth + gapPx))}px)` }}
              >
                {obituarios.map((o) => (
                  <div key={o.id} className="flex-shrink-0 w-full sm:w-[calc(50%-8px)] md:w-[calc(33.333%-11px)] xl:w-[calc(25%-9px)]" style={{ width: itemWidth > 0 ? `${itemWidth}px` : undefined }}>
                    <ObituarioCard
                      o={o}
                      onCondolencia={() => setCondolenciaFor(o)}
                      onVerCondolencias={() => setCondolenciasFor(o)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {itemWidth > 0 && maxIndex > 0 && (
              <div className="flex justify-center gap-2 mt-6">
                {Array.from({ length: maxIndex + 1 }, (_, i) => (
                  <button key={i} type="button" onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all ${i === current ? "bg-duelo-main w-6" : "bg-duelo-light/40 hover:bg-duelo-light/70 w-2"}`}
                    aria-label={`Ir a posición ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {condolenciaFor && <CondolenciaModal obituario={condolenciaFor} onClose={() => setCondolenciaFor(null)} />}
      {condolenciasFor && <CondolenciasModal obituario={condolenciasFor} onClose={() => setCondolenciasFor(null)} />}
    </section>
  )
}
