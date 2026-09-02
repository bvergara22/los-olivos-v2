"use client"

import { Check, Clipboard, Facebook, Instagram, MessageCircle, Share2 } from "lucide-react"
import { useState } from "react"

type BlogShareProps = {
  title: string
  url: string
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const actionClass = "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

async function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(value)
    return
  }

  const textarea = document.createElement("textarea")
  textarea.value = value
  textarea.setAttribute("readonly", "")
  textarea.style.position = "fixed"
  textarea.style.opacity = "0"
  document.body.appendChild(textarea)
  textarea.select()
  const copied = document.execCommand("copy")
  textarea.remove()
  if (!copied) throw new Error("No se pudo copiar el enlace")
}

export function BlogShare({ title, url }: BlogShareProps) {
  const [status, setStatus] = useState("")

  async function handleCopy() {
    try {
      await copyText(url)
      setStatus("Enlace copiado. Ya puedes pegarlo donde quieras.")
    } catch {
      setStatus("No se pudo copiar el enlace. Selecciónalo desde la barra del navegador.")
    }
  }

  async function handleShare() {
    if (!navigator.share) {
      await handleCopy()
      return
    }

    try {
      await navigator.share({ title, text: title, url })
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return
      setStatus("No se pudo abrir el menú de compartir.")
    }
  }

  async function handleInstagram() {
    window.open("https://www.instagram.com/", "_blank", "noopener,noreferrer")
    try {
      await copyText(url)
      setStatus("Enlace copiado. Pégalo en tu publicación o historia de Instagram.")
    } catch {
      setStatus("Abre Instagram y copia el enlace desde la barra del navegador.")
    }
  }

  const message = `${title}\n${url}`

  return (
    <section className="mt-14 border-y border-border py-7" aria-labelledby="blog-share-heading">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="blog-share-heading" className="font-display text-xl font-bold text-foreground">Comparte este artículo</h2>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Ayuda a que esta información llegue a más familias.</p>
        </div>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Opciones para compartir">
          <button type="button" className={`${actionClass} text-primary`} onClick={() => void handleShare()}>
            <Share2 className="h-4 w-4" aria-hidden="true" />
            <span>Compartir</span>
          </button>
          <a className={actionClass} href={`https://wa.me/?text=${encodeURIComponent(message)}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir en WhatsApp">
            <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
            <span>WhatsApp</span>
          </a>
          <a className={actionClass} href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir en Facebook">
            <Facebook className="h-4 w-4 text-[#1877F2]" aria-hidden="true" />
            <span>Facebook</span>
          </a>
          <a className={actionClass} href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer" aria-label="Compartir en X">
            <XIcon />
            <span>X</span>
          </a>
          <button type="button" className={actionClass} onClick={() => void handleInstagram()} aria-label="Copiar enlace y abrir Instagram">
            <Instagram className="h-4 w-4 text-[#E1306C]" aria-hidden="true" />
            <span>Instagram</span>
          </button>
          <button type="button" className={`${actionClass} px-3`} onClick={() => void handleCopy()} aria-label="Copiar enlace del artículo">
            {status.startsWith("Enlace copiado") ? <Check className="h-4 w-4 text-primary" aria-hidden="true" /> : <Clipboard className="h-4 w-4 text-primary" aria-hidden="true" />}
            <span className="sr-only">Copiar enlace</span>
          </button>
        </div>
      </div>
      {status ? <p className="mt-4 text-sm font-semibold text-primary" role="status" aria-live="polite">{status}</p> : null}
    </section>
  )
}
