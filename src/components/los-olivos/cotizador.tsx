'use client'

import { useState } from 'react'
import { toast } from 'sonner'

const C = '#477a7b'

const servicios = [
  {
    id: 'cremacion',
    label: 'Cremación',
    desc: 'Acto en el que se reduce el cuerpo de su ser querido en cenizas para exaltar su memoria y luego alojarlas en un lugar que honre su memoria.',
    plan: 'HOMENAJE PARTICULAR INTEGRAL CON CREMACION',
    price: 5_000_000,
    coverage: 'COFRE + TRAMITES DE LICENCIA + TRASLADO LOCAL + PRESERVACION DEL CUERPO + SALA DE VELACION + SERIE DE CARTELES + ARREGLO FLORAL + CINTA MEMBRETEADA + RECORDATORIO Y LIBRO DE ORACION + EXEQUIAS + CARROZA AL CAMPO SANTO + TRANSPORTE DE ACOMPAÑANTES + DESTINO FINAL CREMACION JARDIN LOS OLIVOS',
  },
  {
    id: 'inhumacion',
    label: 'Inhumación',
    desc: 'Acto de depositar el cuerpo del ser querido fallecido en un lote.',
    plan: 'HOMENAJE PARTICULAR INTEGRAL CON INHUMACION',
    price: 6_000_000,
    coverage: 'COFRE + TRAMITES DE LICENCIA + TRASLADO LOCAL + PRESERVACION DEL CUERPO + SALA DE VELACION + SERIE DE CARTELES + ARREGLO FLORAL + CINTA MEMBRETEADA + RECORDATORIO Y LIBRO DE ORACION + EXEQUIAS + CARROZA AL CAMPO SANTO + TRANSPORTE DE ACOMPAÑANTES + DESTINO FINAL INHUMACION ARRIEDO POR 4 AÑOS SIN NICHO JARDIN LOS OLIVOS',
  },
  {
    id: 'homenaje',
    label: 'Homenaje',
    desc: 'Salas, arreglos florales y detalles pensados para honrar la memoria de tu ser querido.',
    plan: 'HOMENAJE PARTICULAR BASICO SIN DESTINO FINAL',
    price: 3_500_000,
    coverage: 'COFRE + TRAMITES DE LICENCIA + TRASLADO LOCAL + PRESERVACION DEL CUERPO + SALA DE VELACION + SERIE DE CARTELES + ARREGLO FLORAL + CINTA MEMBRETEADA + RECORDATORIO Y LIBRO DE ORACION + EXEQUIAS + CARROZA AL CAMPO SANTO + TRANSPORTE DE ACOMPAÑANTES',
  },
]

const fmt = (n: number) =>
  new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(n)

async function toB64(url: string): Promise<string> {
  const blob = await fetch(url).then(r => r.blob())
  return new Promise(res => {
    const rd = new FileReader()
    rd.onloadend = () => res(rd.result as string)
    rd.readAsDataURL(blob)
  })
}

type Srv = typeof servicios[0]

export default function Cotizador() {
  const [selected, setSelected] = useState<Srv | null>(null)
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [quiere, setQuiere] = useState<'si' | 'no' | null>(null)
  const [sending, setSending] = useState(false)

  function open(srv: Srv) {
    setSelected(srv)
    setNombre('')
    setTelefono('')
    setEmail('')
    setQuiere(null)
  }

  function close() { setSelected(null) }

  async function descargar() {
    if (!selected) return
    setSending(true)
    try {
      const { jsPDF } = await import('jspdf')
      const doc = new jsPDF({ unit: 'mm', format: 'a4' })
      const W = 210, H = 297, ml = 16, mr = 16, cW = W - ml - mr

      const [logoBlanco, fontReg, fontBold] = await Promise.all([
        toB64('/logo_blanco.png'),
        toB64('/fonts/PlusJakartaSans-Regular.ttf'),
        toB64('/fonts/PlusJakartaSans-Bold.ttf'),
      ])

      const strip = (b: string) => b.split(',')[1]
      doc.addFileToVFS('PJS-R.ttf', strip(fontReg))
      doc.addFileToVFS('PJS-B.ttf', strip(fontBold))
      doc.addFont('PJS-R.ttf', 'PJS', 'normal')
      doc.addFont('PJS-B.ttf', 'PJS', 'bold')

      const pu  = () => { doc.setTextColor(C) }
      const wh  = () => { doc.setTextColor('#ffffff') }
      const dk  = () => { doc.setTextColor('#282828') }
      const gr  = () => { doc.setTextColor('#606060') }
      const fpu = () => doc.setFillColor(71, 122, 123)
      const flp = () => doc.setFillColor(220, 237, 237)
      const fwh = () => doc.setFillColor(255, 255, 255)
      const dpu = () => doc.setDrawColor(71, 122, 123)
      const dlp = () => doc.setDrawColor(160, 200, 200)

      const sf = (style: 'normal' | 'bold', size: number) => {
        doc.setFont('PJS', style); doc.setFontSize(size)
      }

      // Header
      const hdrH = 52
      fpu(); doc.rect(0, 0, W, hdrH, 'F')
      doc.addImage(logoBlanco, 'PNG', 7, 10, 62, 30)
      sf('bold', 26); wh()
      doc.text('Cotización', W - mr, 28, { align: 'right' })
      sf('bold', 10); wh()
      doc.text(`No. ${String(Date.now()).slice(-6)}`, W - mr, 37, { align: 'right' })
      sf('normal', 9); doc.setTextColor('#c8e6e6')
      doc.text(`Fecha de elaboración: ${new Date().toLocaleDateString('es-CO')}`, W - mr, 45, { align: 'right' })

      let y = hdrH + 12

      // Datos del cotizante
      sf('bold', 13); pu()
      doc.text('Datos del cotizante', W / 2, y, { align: 'center' })
      y += 3

      const datosH = 24
      dpu(); doc.setLineWidth(0.5)
      doc.rect(ml, y, cW, datosH)
      doc.line(ml + cW / 2, y, ml + cW / 2, y + datosH)

      const colR = ml + cW / 2 + 6
      const leftRows: [string, string][] = [
        ['Teléfono:', telefono || 'N/A'],
        ['Email:', email || 'N/A'],
      ]
      const rightRows: [string, string][] = [
        ['Cotizante:', nombre || 'N/A'],
      ]

      let ly = y + 9
      for (const [lbl, val] of leftRows) {
        sf('bold', 9); gr(); doc.text(lbl, ml + 5, ly)
        sf('normal', 9); dk(); doc.text(val, ml + 28, ly)
        ly += 7.5
      }
      let ry = y + 9
      for (const [lbl, val] of rightRows) {
        sf('bold', 9); gr(); doc.text(lbl, colR, ry)
        sf('normal', 9); dk(); doc.text(val, colR + 22, ry)
        ry += 7.5
      }
      y += datosH + 10

      // Tabla
      const colW = [40, 34, 32, 68]
      fpu(); doc.rect(ml, y, cW, 9, 'F')
      sf('bold', 10); wh()
      doc.text('Servicio y/o productos cotizados', ml + 5, y + 6.3)
      y += 9

      const hH = 10
      dlp(); doc.setLineWidth(0.3)
      const hdrs = ['Servicio', 'Valor del servicio', 'Tipo de servicio', 'Descripción']
      let cx = ml
      for (let i = 0; i < 4; i++) {
        flp(); doc.rect(cx, y, colW[i], hH, 'FD')
        sf('bold', 8.5); pu()
        doc.text(hdrs[i], cx + colW[i] / 2, y + 6.8, { align: 'center' })
        cx += colW[i]
      }
      y += hH

      const lh = 5.0
      sf('normal', 9)
      const svcLines  = doc.splitTextToSize(selected.plan, colW[0] - 5)
      const descLines = doc.splitTextToSize(selected.coverage, colW[3] - 5)
      const rowH = Math.max(svcLines.length, descLines.length) * lh + 12

      cx = ml
      for (let i = 0; i < 4; i++) {
        fwh(); dlp(); doc.rect(cx, y, colW[i], rowH, 'FD'); cx += colW[i]
      }

      sf('normal', 9); dk()
      const midY = y + rowH / 2
      doc.text(svcLines, ml + colW[0] / 2, y + (rowH - svcLines.length * lh) / 2 + lh + 1, { align: 'center' })
      doc.text(fmt(selected.price), ml + colW[0] + colW[1] / 2, midY + 2, { align: 'center' })
      doc.text(selected.id, ml + colW[0] + colW[1] + colW[2] / 2, midY + 2, { align: 'center' })
      doc.text(descLines, ml + colW[0] + colW[1] + colW[2] + 3, y + (rowH - descLines.length * lh) / 2 + lh + 1)
      y += rowH + 10

      // Notas
      sf('bold', 11); pu()
      doc.text('Notas:', ml, y); y += 7
      sf('normal', 9.5); gr()
      for (const nota of [
        'Esta cotización tiene vigencia hasta el 30 del mes en curso.',
        'Debe realizar mínimo el 25% del pago de Productos.',
      ]) {
        doc.text(`• ${nota}`, ml + 4, y); y += 6.5
      }

      // Footer
      const ftH = 24
      fpu(); doc.rect(0, H - ftH, W, ftH, 'F')
      sf('bold', 10); wh()
      doc.text('Jardín Los Olivos · Cartagena, Colombia', ml, H - ftH + 10)
      sf('normal', 10); wh()
      doc.text('www.losolivoscartagena.com', ml, H - ftH + 17)
      sf('normal', 8); doc.setTextColor('#b8d8d8')
      doc.text('Esta cotización no constituye un contrato.', W - mr, H - ftH + 17, { align: 'right' })

      doc.save(`cotizacion-los-olivos-${selected.id}.pdf`)
      toast.success('¡Cotización descargada!')
      close()
    } catch {
      toast.error('Error al generar el PDF. Intenta de nuevo.')
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Cards de servicio */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {servicios.map(srv => (
          <div key={srv.id} className="bg-white rounded-2xl border border-border shadow-sm flex flex-col items-center text-center gap-3 p-7 transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
            <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: '#e8f2f2' }}>
              <SrvIcon id={srv.id} />
            </div>
            <div className="font-bold text-base" style={{ color: C }}>{srv.label}</div>
            <div className="text-sm text-muted-foreground leading-relaxed flex-1">{srv.desc}</div>
            <button
              onClick={() => open(srv)}
              className="w-full mt-1 py-2.5 rounded-full text-sm font-bold text-white transition-opacity hover:opacity-85"
              style={{ background: C }}
            >
              Seleccionar
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(0,0,0,0.45)' }}
          onClick={e => { if (e.target === e.currentTarget) close() }}
        >
          <div className="bg-white rounded-2xl w-full max-w-md max-h-[88vh] overflow-hidden flex flex-col shadow-2xl">

            {/* Header modal */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-border shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: '#e8f2f2' }}>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke={C} strokeWidth="2" strokeLinecap="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M17 13l-4 4-2-2"/></svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">{selected.label}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">Valor: <strong>{fmt(selected.price)}</strong></div>
                </div>
              </div>
              <button onClick={close} className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-red-100 hover:text-red-500 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>

            {/* Body modal */}
            <div className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-4 min-h-0">

              {/* Cobertura */}
              <div className="rounded-xl border border-border bg-muted/40 px-4 py-3">
                <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color: C }}>Cobertura incluida</div>
                <div className="text-[11px] text-muted-foreground leading-relaxed">{selected.coverage}</div>
              </div>

              {/* Campos */}
              <div className="flex flex-col gap-3">
                <Field label="Nombre del contratante">
                  <input value={nombre} onChange={e => setNombre(e.target.value)} className="field-input" type="text" placeholder="Nombre completo" />
                </Field>
                <Field label="Teléfono de contacto">
                  <input value={telefono} onChange={e => setTelefono(e.target.value)} className="field-input" type="tel" placeholder="Número de contacto" />
                </Field>
                <Field label="Correo electrónico">
                  <input value={email} onChange={e => setEmail(e.target.value)} className="field-input" type="email" placeholder="Correo del contratante" />
                </Field>
              </div>

              {/* ¿Desea adquirir? */}
              <div>
                <div className="text-xs font-bold text-foreground mb-2">¿Deseas adquirir el servicio?</div>
                <div className="flex gap-2">
                  {(['si', 'no'] as const).map(v => (
                    <label
                      key={v}
                      className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border cursor-pointer text-sm font-semibold transition-colors"
                      style={quiere === v ? { borderColor: C, background: '#e8f2f2', color: C } : { borderColor: '#e5e7eb', color: '#6b7280' }}
                    >
                      <input type="radio" className="hidden" checked={quiere === v} onChange={() => setQuiere(v)} />
                      {v === 'si' ? 'Sí' : 'No'}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer modal */}
            <div className="flex gap-2 px-5 py-4 bg-muted/30 border-t border-border shrink-0">
              {quiere === 'si' && (
                <a
                  href="https://api.whatsapp.com/send?phone=573008131043"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white transition-opacity hover:opacity-85"
                  style={{ background: '#25d366' }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.862L.057 23.625a.75.75 0 00.918.918l5.763-1.478A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.92 0-3.72-.5-5.28-1.376l-.38-.22-3.94 1.01 1.01-3.94-.22-.38A10 10 0 1122 12c0 5.514-4.486 10-10 10z"/></svg>
                  Saber más
                </a>
              )}
              {quiere !== null && (
                <button
                  onClick={descargar}
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-bold text-white transition-opacity hover:opacity-85 disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ background: C }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  {sending ? 'Generando...' : 'Descargar cotización'}
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      <style>{`
        .field-input {
          width: 100%; border: none; background: transparent; outline: none;
          font-size: 13px; color: #1f2937; padding: 8px 0;
        }
        .field-input::placeholder { color: #9ca3af; }
      `}</style>
    </>
  )
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-bold text-foreground">{label}</label>
      <div className="flex items-center gap-2 bg-muted/40 border border-border rounded-xl px-3 focus-within:border-[#477a7b] focus-within:bg-white transition-colors">
        {children}
      </div>
    </div>
  )
}

function SrvIcon({ id }: { id: string }) {
  if (id === 'cremacion') return (
    <svg width="30" height="30" viewBox="0 0 64 64" fill={C}>
      <path d="M32 6C22 6 16 12 16 20c0 4 1.5 7 4 10l2 24h20l2-24c2.5-3 4-6 4-10C48 12 42 6 32 6z"/>
      <rect x="22" y="57" width="20" height="4" rx="2" fill={C}/>
      <path d="M27 20c0-4 2.5-8 5-10 2.5 2 5 6 5 10" fill="#a8d4d4" opacity=".6"/>
    </svg>
  )
  if (id === 'inhumacion') return (
    <svg width="30" height="30" viewBox="0 0 64 64" fill={C}>
      <path d="M32 56S8 38 8 22a14 14 0 0124-9.9A14 14 0 0156 22c0 16-24 34-24 34z"/>
      <rect x="29" y="16" width="6" height="18" rx="2" fill="#fff" opacity=".7"/>
      <rect x="23" y="22" width="18" height="6" rx="2" fill="#fff" opacity=".7"/>
    </svg>
  )
  return (
    <svg width="34" height="30" viewBox="0 0 80 56" fill={C}>
      <rect x="4" y="22" width="72" height="26" rx="6"/>
      <path d="M14 22l8-18h36l8 18z"/>
      <circle cx="20" cy="50" r="8" fill={C} stroke="#fff" strokeWidth="3"/>
      <circle cx="60" cy="50" r="8" fill={C} stroke="#fff" strokeWidth="3"/>
      <circle cx="20" cy="50" r="3" fill="#fff"/>
      <circle cx="60" cy="50" r="3" fill="#fff"/>
    </svg>
  )
}
