"use client"

import { CheckCircle2, X } from "lucide-react"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

type Step = "question" | "form" | "thanks"

interface Props {
  open: boolean
  onClose: () => void
}

export function FeedbackPopup({ open, onClose }: Props) {
  const [mounted, setMounted] = useState(false)
  const [step, setStep] = useState<Step>("question")
  const [rate, setRate] = useState("")
  const [form, setForm] = useState({ nombre: "", correo: "", comentario: "" })
  const [loading, setLoading] = useState(false)
  const [thanksText, setThanksText] = useState("¡Gracias por tu opinión!")

  useEffect(() => { setMounted(true) }, [])

  const valid =
    form.nombre.trim() !== "" &&
    form.correo.trim() !== "" &&
    form.comentario.trim() !== ""

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!valid || loading) return
    setLoading(true)
    try {
      const res = await fetch("https://www.api.losolivoscartagena.com/api/rate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, rate }),
      })
      await res.text()
      setThanksText("¡Gracias por tu opinión!")
    } catch {
      setThanksText("¡Gracias por tu opinión!")
    } finally {
      setLoading(false)
      setStep("thanks")
    }
  }

  function handleRate(r: string) {
    setRate(r)
    setStep("form")
  }

  if (!mounted || !open) return null

  return createPortal(
    <div className="fixed top-4 right-4 sm:top-24 z-[1001] w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 popup-slide-in">
      <button
        onClick={onClose}
        className="absolute -top-3 -right-3 w-7 h-7 bg-white border-2 border-red-400 rounded-full flex items-center justify-center text-red-400 hover:bg-red-50 transition-colors shadow-sm"
        aria-label="Cerrar"
      >
        <X className="w-3.5 h-3.5" />
      </button>

      {step === "question" && (
        <div className="p-5 text-center">
          <p className="text-sm text-gray-700 leading-snug">
            ¿Te gusta nuestra página?<br />
            Déjanos saber tu opinión y/o sugerencias
          </p>
          <div className="flex justify-center gap-6 mt-4">
            <button onClick={() => handleRate("Me gusta")} className="w-12 h-12 rounded-full border-2 border-green-400 flex items-center justify-center text-2xl hover:bg-green-50 transition-colors" aria-label="Me gusta">😊</button>
            <button onClick={() => handleRate("No me gusta")} className="w-12 h-12 rounded-full border-2 border-red-400 flex items-center justify-center text-2xl hover:bg-red-50 transition-colors" aria-label="No me gusta">😞</button>
          </div>
        </div>
      )}

      {step === "form" && (
        <form className="p-5 space-y-3" onSubmit={handleSubmit}>
          <div className="border-b border-gray-200 pb-2">
            <input type="text" placeholder="Nombre" required className="w-full text-sm text-gray-600 outline-none placeholder:text-gray-400 bg-transparent" value={form.nombre} onChange={e => setForm(f => ({ ...f, nombre: e.target.value }))} />
          </div>
          <div className="border-b border-gray-200 pb-2">
            <input type="email" placeholder="Correo" required className="w-full text-sm text-gray-600 outline-none placeholder:text-gray-400 bg-transparent" value={form.correo} onChange={e => setForm(f => ({ ...f, correo: e.target.value }))} />
          </div>
          <div className="border-b border-gray-200 pb-2">
            <textarea placeholder="Déjanos tu comentario" required rows={3} className="w-full text-sm text-gray-600 outline-none placeholder:text-gray-400 bg-transparent resize-none" value={form.comentario} onChange={e => setForm(f => ({ ...f, comentario: e.target.value }))} />
          </div>
          <div className="flex justify-center pt-1">
            <button
              type="submit"
              disabled={!valid || loading}
              className={`text-white text-sm font-semibold px-8 py-2 rounded-full transition-colors ${valid && !loading ? "bg-[#4a9e96] hover:bg-[#3a8880] cursor-pointer" : "bg-[#7ec8c0] opacity-50 cursor-not-allowed"}`}
            >
              {loading ? "Espere..." : "Enviar"}
            </button>
          </div>
        </form>
      )}

      {step === "thanks" && (
        <div className="p-6 text-center space-y-3">
          <div className="flex justify-center">
            <CheckCircle2 className="w-10 h-10 text-[#4a9e96]" />
          </div>
          <p className="text-sm font-semibold text-gray-800 leading-snug">{thanksText || "¡Gracias por tu opinión!"}</p>
          <button
            onClick={onClose}
            className="mt-1 text-xs text-white bg-[#4a9e96] hover:bg-[#3a8880] px-5 py-1.5 rounded-full transition-colors"
          >
            Cerrar
          </button>
        </div>
      )}
    </div>,
    document.body
  )
}
