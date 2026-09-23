"use client"

import { useState, useEffect, useCallback } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send, Loader2 } from "lucide-react"
import { BLOG_API_URL, BlogApiError } from "@/lib/blog"

type Comment = {
    id: number
    name: string
    rating: number | null
    comment: string
    createdAt: string
    adminReply: { text: string; createdAt: string } | null
}

type CommentsMeta = { current_page: number; last_page: number; per_page: number; total: number }

type CommentsResponse = {
    data: Comment[]
    meta: CommentsMeta
    averageRating?: number | null
    totalRatings?: number
}

const RATING_LABELS = ["", "Muy malo", "Malo", "Regular", "Bueno", "Excelente"]

function formatDate(iso: string) {
    try {
        return new Intl.DateTimeFormat("es-CO", { dateStyle: "long" }).format(new Date(iso))
    } catch {
        return iso
    }
}

function StarSvg({ filled, half = false, size = 20, index = 0 }: { filled: boolean; half?: boolean; size?: number; index?: number }) {
    const gradId = `star-hg-${index}`
    const path = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            {half && (
                <defs>
                    <linearGradient id={gradId}>
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            )}
            <path
                d={path}
                fill={half ? `url(#${gradId})` : filled ? "#f59e0b" : "none"}
                stroke={filled || half ? "#f59e0b" : "#d1d5db"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function StarDisplay({ value, size = 18 }: { value: number; size?: number }) {
    return (
        <span className="inline-flex items-center gap-0.5" aria-label={`${value} de 5 estrellas`}>
            {[1, 2, 3, 4, 5].map((star) => {
                const filled = value >= star
                const half = !filled && value >= star - 0.5
                return <StarSvg key={star} filled={filled} half={half} size={size} index={star} />
            })}
        </span>
    )
}

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
    const [hovered, setHovered] = useState(0)
    const active = hovered || value
    return (
        <span className="inline-flex items-center gap-1" role="radiogroup" aria-label="Tu calificación">
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
                    <StarSvg filled={active >= star} size={30} index={star + 10} />
                </button>
            ))}
        </span>
    )
}

export function BlogComments({ slug, className }: { slug: string; className?: string }) {
    const [comments, setComments] = useState<Comment[]>([])
    const [meta, setMeta] = useState<CommentsMeta | null>(null)
    const [averageRating, setAverageRating] = useState<number | null>(null)
    const [totalRatings, setTotalRatings] = useState(0)
    const [loadingComments, setLoadingComments] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [fetchError, setFetchError] = useState("")

    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [accepted, setAccepted] = useState(false)
    const [submitting, setSubmitting] = useState(false)
    const [submitError, setSubmitError] = useState("")
    const [submitted, setSubmitted] = useState(false)

    const fetchComments = useCallback(async (page: number, append = false) => {
        const res = await fetch(
            `${BLOG_API_URL}/blog/posts/${encodeURIComponent(slug)}/comments?page=${page}&per_page=10`,
            { headers: { Accept: "application/json" }, cache: "no-store" }
        )
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json: CommentsResponse = await res.json()
        setComments((prev) => append ? [...prev, ...json.data] : json.data)
        setMeta(json.meta)
        if (json.averageRating != null) setAverageRating(json.averageRating)
        if (json.totalRatings != null) setTotalRatings(json.totalRatings)
    }, [slug])

    useEffect(() => {
        setLoadingComments(true)
        setFetchError("")
        fetchComments(1)
            .catch(() => setFetchError("No se pudieron cargar los comentarios."))
            .finally(() => setLoadingComments(false))
    }, [fetchComments])

    const loadMore = async () => {
        if (!meta || meta.current_page >= meta.last_page || loadingMore) return
        setLoadingMore(true)
        try {
            await fetchComments(meta.current_page + 1, true)
            setMeta((prev) => prev ? { ...prev, current_page: prev.current_page + 1 } : prev)
        } finally {
            setLoadingMore(false)
        }
    }

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
            setRating(0); setComment(""); setName(""); setEmail(""); setAccepted(false)
            fetchComments(1).catch(() => null)
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

    return (
        <section className={className ?? "mt-16 border-t border-border pt-12"} aria-labelledby="comments-heading">

            {/* Encabezado */}
            <div className="mb-8">
                <h2 id="comments-heading" className="font-display text-2xl font-bold">Comentarios</h2>
                {averageRating != null && totalRatings > 0 && (
                    <div className="mt-3 flex flex-wrap items-center gap-2.5">
                        <StarDisplay value={averageRating} size={20} />
                        <span className="text-sm text-muted-foreground">
                            ({totalRatings} {totalRatings === 1 ? "voto" : "votos"} · Media:{" "}
                            {averageRating.toFixed(2).replace(".", ",")} de 5)
                        </span>
                    </div>
                )}
            </div>

            {/* Formulario */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-7">
                <h3 className="mb-6 font-display text-lg font-bold">Deja tu valoración</h3>

                {submitted ? (
                    <div className="rounded-xl bg-primary/8 px-5 py-8 text-center">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                                <path d="M4 11l5 5 9-9" stroke="#018c58" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <p className="font-semibold text-primary">¡Gracias por tu comentario!</p>
                        <p className="mt-1.5 text-sm text-muted-foreground">
                            Tu valoración está en revisión y será publicada pronto.
                        </p>
                        <button
                            type="button"
                            onClick={() => setSubmitted(false)}
                            className="mt-4 text-sm font-semibold text-primary underline-offset-3 hover:underline focus-visible:outline-none"
                        >
                            Dejar otro comentario
                        </button>
                    </div>
                ) : (
                    <div className="space-y-5">
                        {/* Estrellas */}
                        <div>
                            <p className="mb-2 text-sm font-semibold">Calificación</p>
                            <StarPicker value={rating} onChange={setRating} />
                            {rating > 0 && (
                                <p className="mt-1.5 text-xs font-medium text-primary">{RATING_LABELS[rating]}</p>
                            )}
                        </div>

                        {/* Comentario */}
                        <div>
                            <label htmlFor="comment-text" className="mb-2 block text-sm font-semibold">
                                Comentario
                            </label>
                            <Textarea
                                id="comment-text"
                                placeholder="Cuéntanos tu experiencia con este artículo…"
                                rows={4}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                        </div>

                        {/* Nombre y correo */}
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="comment-name" className="mb-2 block text-sm font-semibold">
                                    Nombre <span className="text-destructive" aria-hidden="true">*</span>
                                </label>
                                <Input
                                    id="comment-name"
                                    placeholder="Tu nombre"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div>
                                <label htmlFor="comment-email" className="mb-2 block text-sm font-semibold">
                                    Correo electrónico <span className="text-destructive" aria-hidden="true">*</span>
                                </label>
                                <Input
                                    id="comment-email"
                                    type="email"
                                    placeholder="tucorreo@ejemplo.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
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
                                    className="font-semibold text-primary underline underline-offset-3 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                                >
                                    (política de privacidad)
                                </a>
                            </span>
                        </label>

                        {submitError && (
                            <p className="rounded-lg bg-destructive/8 px-4 py-2.5 text-sm text-destructive">{submitError}</p>
                        )}

                        <div className="flex justify-end pt-1">
                            <Button type="button" disabled={!canSubmit} onClick={handleSubmit}>
                                {submitting
                                    ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                                    : <Send className="h-4 w-4" aria-hidden="true" />}
                                {submitting ? "Enviando…" : "Enviar comentario"}
                            </Button>
                        </div>
                    </div>
                )}
            </div>

            {/* Lista de comentarios */}
            {loadingComments ? (
                <div className="mt-8 space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-28 animate-pulse rounded-2xl bg-muted/40" />
                    ))}
                </div>
            ) : fetchError ? (
                <p className="mt-8 text-sm text-muted-foreground">{fetchError}</p>
            ) : comments.length > 0 ? (
                <div className="mt-8 space-y-4">
                    <h3 className="font-display text-lg font-bold">
                        {meta?.total ?? comments.length} {(meta?.total ?? comments.length) === 1 ? "comentario" : "comentarios"}
                    </h3>
                    {comments.map((c) => (
                        <div key={c.id} className="rounded-2xl border border-border bg-card p-5 md:p-6">
                            <div className="flex flex-wrap items-start justify-between gap-2">
                                <div>
                                    <p className="font-semibold text-foreground">{c.name}</p>
                                    <time className="text-xs text-muted-foreground">{formatDate(c.createdAt)}</time>
                                </div>
                                {c.rating != null && <StarDisplay value={c.rating} size={15} />}
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-foreground">{c.comment}</p>

                            {c.adminReply && (
                                <div className="mt-4 flex gap-3 rounded-xl bg-muted/30 p-3">
                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                        LO
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex flex-wrap items-center gap-2">
                                            <span className="text-sm font-semibold text-primary">Equipo Los Olivos</span>
                                            <span className="text-xs text-muted-foreground">· {formatDate(c.adminReply.createdAt)}</span>
                                        </div>
                                        <p className="mt-1.5 text-sm leading-relaxed text-foreground">{c.adminReply.text}</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {meta && meta.current_page < meta.last_page && (
                        <div className="flex justify-center pt-2">
                            <Button variant="outline" onClick={loadMore} disabled={loadingMore}>
                                {loadingMore && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                                {loadingMore ? "Cargando…" : "Cargar más comentarios"}
                            </Button>
                        </div>
                    )}
                </div>
            ) : (
                <p className="mt-8 text-sm text-muted-foreground">
                    Aún no hay comentarios. ¡Sé el primero en opinar!
                </p>
            )}
        </section>
    )
}
