"use client"

import { X } from "lucide-react"
import { useState } from "react"

type Step = "question" | "form" | "thanks"

export function FeedbackPopup() {
  const [open, setOpen] = useState(true)
  const [step, setStep] = useState<Step>("question")
  const [form, setForm] = useState({ nombre: "", correo: "", comentario: "" })

  const valid =
    form.nombre.trim() !== "" &&
    /\S+@\S+\.\S+/.test(form.correo) &&
    form.comentario.trim() !== ""

  if (!open) return null

  return (
    <div className="fixed top-24 right-4 z-[1001] w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 popup-slide-in">
      <button
        onClick={() => setOpen(false)}
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
            <button onClick={() => setStep("form")} className="w-12 h-12 rounded-full border-2 border-green-400 flex items-center justify-center text-2xl hover:bg-green-50 transition-colors" aria-label="Me gusta">😊</button>
            <button onClick={() => setStep("form")} className="w-12 h-12 rounded-full border-2 border-red-400 flex items-center justify-center text-2xl hover:bg-red-50 transition-colors" aria-label="No me gusta">😞</button>
          </div>
        </div>
      )}

      {step === "form" && (
        <form className="p-5 space-y-3" onSubmit={(e) => { e.preventDefault(); if (valid) setStep("thanks") }}>
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
              disabled={!valid}
              className={`text-white text-sm font-semibold px-8 py-2 rounded-full transition-colors ${valid ? "bg-[#4a9e96] hover:bg-[#3a8880] cursor-pointer" : "bg-[#7ec8c0] opacity-50 cursor-not-allowed"}`}
            >
              Enviar
            </button>
          </div>
        </form>
      )}

      {step === "thanks" && (
        <div className="p-5 text-center">
          <p className="text-sm text-gray-700 font-medium">¡Gracias por tu opinión! 🙏</p>
          <p className="text-xs text-gray-400 mt-1">Tu comentario ha sido enviado.</p>
        </div>
      )}
    </div>
  )
}
