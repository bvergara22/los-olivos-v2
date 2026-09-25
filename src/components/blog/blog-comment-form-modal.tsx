"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, Loader2, X } from "lucide-react"
import { BLOG_API_URL, BlogApiError } from "@/lib/blog"

const RATING_LABELS = ["", "Muy malo", "Malo", "Regular", "Bueno", "Excelente"]

function StarSvg({ filled, size = 28 }: { filled: boolean; size?: number }) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                fill={filled ? "#f59e0b" : "none"}
                stroke={filled ? "#f59e0b" : "#d1d5db"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
    const [hovered, setHovered] = useState(0)
    const active = hovered || value
    return (
        <span className="inline-flex items-center gap-2" role="radiogroup" aria-label="Tu calificación">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    role="radio"
                    aria-checked={value === star}
                    aria-label={`${star} estrella${star !== 1 ? "s" : ""}`}
                    className="rounded transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => onChange(star)}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                >
                    <StarSvg filled={active >= star} size={32} />
                </button>
            ))}
        </span>
    )
}

type Props = { slug: string; open: boolean; onClose: () => void; onSubmitted?: (name: string, rating: number, text: string) => void }

export function BlogCommentFormModal({ slug, open, onClose, onSubmitted }: Props) {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [accepted, setAccepted] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState("")
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [open])

    useEffect(() => {
        if (!submitted) return
        const t = setTimeout(() => { setSubmitted(false); onClose() }, 2500)
        return () => clearTimeout(t)
    }, [submitted, onClose])

    useEffect(() => {
        if (!open) {
            setRating(0); setComment(""); setName(""); setEmail("")
            setAccepted(false); setSubmitting(false); setSubmitError(""); setSubmitted(false)
        }
    }, [open])

    const handleSubmit = async () => {
        if (!accepted || !name.trim() || !email.trim() || rating === 0 || submitting) return
        setSubmitting(true)
        setSubmitError("")
        try {
            const res = await fetch(
                `${BLOG_API_URL}/blog/posts/${encodeURIComponent(slug)}/comments`,
                {
                    method: "POST",
                    headers: { Accept: "application/json", "Content-Type": "application/json" },
                    body: JSON.stringify({ name: name.trim(), email: email.trim(), rating, comment: comment.trim(), privacyAccepted: true }),
                }
            )
            if (!res.ok) {
                const body = await res.json().catch(() => null) as { message?: string } | null
                throw new BlogApiError(res.status, body?.message)
            }
            setSubmitted(true)
            onSubmitted?.(name.trim(), rating, comment.trim())
        } catch (err) {
            setSubmitError(
                err instanceof BlogApiError && err.message
                    ? err.message
                    : "No se pudo enviar el comentario. Inténtalo de nuevo."
            )
        } finally {
            setSubmitting(false)
        }
    }

    const canSubmit = accepted && name.trim().length > 0 && email.trim().length > 0 && rating > 0 && !submitting

    if (!open) return null

    return (
        <div
            className="fixed inset-0 z-[300] flex items-center justify-center p-4"
            style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
            onWheel={(e) => e.stopPropagation()}
        >
            <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl">

                {/* Header */}
                <div className="flex items-center justify-between border-b border-border bg-white px-6 py-4">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
                            <svg width="18" height="18" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                                <path d="M18 3C9.716 3 3 9.163 3 16.8c0 3.842 1.74 7.3 4.56 9.786L6 30l5.04-2.52A16.9 16.9 0 0 0 18 28.8c8.284 0 15-6.163 15-13.8C33 7.163 26.284 3 18 3Z" stroke="#018c58" strokeWidth="2" strokeLinejoin="round" />
                                <circle cx="11" cy="17" r="1.5" fill="#018c58" />
                                <circle cx="18" cy="17" r="1.5" fill="#018c58" />
                                <circle cx="25" cy="17" r="1.5" fill="#018c58" />
                            </svg>
                        </div>
                        <h2 className="font-display text-lg font-bold text-foreground">Deja tu comentario</h2>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar"
                        className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                        <X className="h-4 w-4" />
                    </button>
                </div>

                {/* Body */}
                <div data-modal-scroll className="max-h-[72vh] overflow-y-auto px-6 py-5">
                    {submitted ? (
                        <div className="flex flex-col items-center gap-4 py-12 text-center">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                                    <path d="M6 14l6 6 10-10" stroke="#018c58" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-display text-lg font-bold text-foreground">¡Gracias por tu comentario!</p>
                                <p className="mt-1.5 text-sm text-muted-foreground">Tu valoración está en revisión y será publicada pronto.</p>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-5">
                            {/* Estrellas */}
                            <div>
                                <p className="mb-2.5 text-sm font-semibold">
                                    Calificación <span className="text-destructive" aria-hidden="true">*</span>
                                </p>
                                <StarPicker value={rating} onChange={setRating} />
                                {rating > 0 && (
                                    <p className="mt-1.5 text-xs font-medium text-primary">{RATING_LABELS[rating]}</p>
                                )}
                            </div>

                            {/* Nombre + Correo */}
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="cfm-name" className="mb-1.5 block text-sm font-semibold">
                                        Nombre <span className="text-destructive" aria-hidden="true">*</span>
                                    </label>
                                    <Input
                                        id="cfm-name"
                                        placeholder="Tu nombre"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="cfm-email" className="mb-1.5 block text-sm font-semibold">
                                        Correo <span className="text-destructive" aria-hidden="true">*</span>
                                    </label>
                                    <Input
                                        id="cfm-email"
                                        type="email"
                                        placeholder="tucorreo@ejemplo.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Comentario */}
                            <div>
                                <label htmlFor="cfm-comment" className="mb-1.5 block text-sm font-semibold">
                                    Comentario
                                </label>
                                <Textarea
                                    id="cfm-comment"
                                    placeholder="Cuéntanos tu experiencia con este artículo…"
                                    rows={4}
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    className="resize-none"
                                />
                            </div>

                            {/* Privacidad */}
                            <label className="flex cursor-pointer items-start gap-3">
                                <input
                                    type="checkbox"
                                    className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
                                    checked={accepted}
                                    onChange={(e) => setAccepted(e.target.checked)}
                                />
                                <span className="text-sm leading-relaxed text-muted-foreground">
                                    Acepto dejar mis datos para poder recibir contestación{" "}
                                    <a
                                        href="/politica-de-privacidad"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-semibold text-primary underline underline-offset-3 hover:no-underline"
                                    >
                                        (política de privacidad)
                                    </a>
                                </span>
                            </label>

                            {submitError && (
                                <p className="rounded-lg bg-destructive/8 px-4 py-2.5 text-sm text-destructive">
                                    {submitError}
                                </p>
                            )}
                        </div>
                    )}
                </div>

                {/* Footer */}
                {!submitted && (
                    <div className="flex items-center justify-end gap-3 border-t border-border bg-white px-6 py-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Cancelar
                        </button>
                        <Button type="button" disabled={!canSubmit} onClick={() => void handleSubmit()}>
                            {submitting
                                ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                                : <Send className="h-4 w-4" aria-hidden="true" />}
                            {submitting ? "Enviando…" : "Publicar comentario"}
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
