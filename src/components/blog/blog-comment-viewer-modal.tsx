"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { X, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BLOG_API_URL } from "@/lib/blog"

type Comment = {
    id: number
    name: string
    rating: number | null
    text: string
    date: string
    isTeamReply: boolean
    reply: { text: string; date: string } | null
    replies: Comment[]
}

type CommentsMeta = { current_page: number; last_page: number; per_page: number; total: number }

type CommentsResponse = {
    data: Comment[]
    meta: CommentsMeta
}

function formatDate(iso: string) {
    try { return new Intl.DateTimeFormat("es-CO", { dateStyle: "long" }).format(new Date(iso)) }
    catch { return iso }
}

function StarSvg({ filled, half = false, size = 15 }: { filled: boolean; half?: boolean; size?: number }) {
    const path = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            <path
                d={path}
                fill={filled ? "#f59e0b" : half ? "url(#hg)" : "none"}
                stroke={filled || half ? "#f59e0b" : "#d1d5db"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function StarDisplay({ value, size = 15 }: { value: number; size?: number }) {
    return (
        <span className="inline-flex items-center gap-0.5" aria-label={`${value} de 5 estrellas`}>
            {[1, 2, 3, 4, 5].map((s) => {
                const filled = value >= s
                const half = !filled && value >= s - 0.5
                return <StarSvg key={s} filled={filled} half={half} size={size} />
            })}
        </span>
    )
}

function EmptyState() {
    return (
        <div className="flex flex-col items-center gap-5 py-20 text-center">
            {/* Ícono documento estilo Image #4 */}
            <svg width="72" height="84" viewBox="0 0 72 84" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="52" height="68" rx="5" fill="#9ca3af" />
                <path d="M38 2v20h16" fill="none" />
                <path d="M38 2l16 20H38V2z" fill="#3b82f6" />
                <rect x="10" y="34" width="30" height="3.5" rx="1.75" fill="white" opacity="0.6" />
                <rect x="10" y="43" width="25" height="3.5" rx="1.75" fill="white" opacity="0.6" />
                <rect x="10" y="52" width="20" height="3.5" rx="1.75" fill="white" opacity="0.6" />
            </svg>
            <div>
                <p className="font-display text-lg font-bold text-foreground">Aún no hay comentarios</p>
                <p className="mt-1 text-sm text-muted-foreground">Sé la primera persona en comentar.</p>
            </div>
        </div>
    )
}

type PendingComment = { id: number; name: string; rating: number; text: string; date: string }
type Props = { slug: string; open: boolean; onClose: () => void; pendingComments?: PendingComment[] }

export function BlogCommentViewerModal({ slug, open, onClose, pendingComments = [] }: Props) {
    const [comments, setComments] = useState<Comment[]>([])
    const [meta, setMeta] = useState<CommentsMeta | null>(null)
    const [loading, setLoading] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [error, setError] = useState("")

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : ""
        return () => { document.body.style.overflow = "" }
    }, [open])

    const fetchComments = useCallback(async (page: number, append = false) => {
        const res = await fetch(
            `${BLOG_API_URL}/blog/posts/${encodeURIComponent(slug)}/comments?page=${page}&per_page=10`,
            { headers: { Accept: "application/json" }, cache: "no-store" }
        )
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const json: CommentsResponse = await res.json()
        setComments((prev) => append ? [...prev, ...json.data] : json.data)
        setMeta(json.meta)
    }, [slug])

    useEffect(() => {
        if (!open) return
        setLoading(true)
        setError("")
        fetchComments(1)
            .catch(() => setError("No se pudieron cargar los comentarios."))
            .finally(() => setLoading(false))
    }, [open, fetchComments])

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

    if (!open) return null

    return (
        <div
            className="fixed inset-0 z-[300] flex items-start justify-center overflow-y-auto p-4 sm:items-center sm:p-8"
            style={{ backgroundColor: "rgba(0,0,0,0.65)" }}
            onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
            onWheel={(e) => e.stopPropagation()}
        >
            <div
                className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl"
                style={{ maxHeight: "88vh", minHeight: "40vh" }}
            >
                {/* Header */}
                <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-4">
                    <div>
                        <h2 className="font-display text-xl font-bold text-foreground">
                            Comentarios
                            {meta && meta.total > 0 && (
                                <span className="ml-2 text-base font-normal text-muted-foreground">({meta.total})</span>
                            )}
                        </h2>
                        {(() => {
                            const rated = comments.filter((c) => c.rating != null)
                            if (rated.length === 0) return null
                            const avg = rated.reduce((s, c) => s + (c.rating ?? 0), 0) / rated.length
                            return (
                                <div className="mt-1 flex items-center gap-2">
                                    <StarDisplay value={avg} size={16} />
                                    <span className="text-xs text-muted-foreground">
                                        Media {avg.toFixed(1).replace(".", ",")} · {rated.length} {rated.length === 1 ? "voto" : "votos"}
                                    </span>
                                </div>
                            )
                        })()}
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Cerrar"
                        className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                {/* Body */}
                <div data-modal-scroll className="flex-1 overflow-y-auto overflow-x-hidden px-6 py-5 [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-border">
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : error ? (
                        <p className="py-12 text-center text-sm text-muted-foreground">{error}</p>
                    ) : comments.length === 0 ? (
                        <EmptyState />
                    ) : (
                        <div className="space-y-4">
                            {pendingComments.map((c) => (
                                <div key={c.id} className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                                {((c.name ?? "?")[0] ?? "?").toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="font-semibold leading-tight text-foreground">{c.name}</p>
                                                <p className="text-xs text-primary font-medium">En revisión</p>
                                            </div>
                                        </div>
                                        <StarDisplay value={c.rating} size={15} />
                                    </div>
                                    {c.text && <p className="mt-3 text-sm leading-relaxed text-foreground break-words">{c.text}</p>}
                                </div>
                            ))}
                            {comments.map((c) => (
                                <div key={c.id} className="rounded-2xl border border-border bg-card p-5">
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                                                {((c.name ?? "?")[0] ?? "?").toUpperCase()}
                                            </div>
                                            <div>
                                                <p className="font-semibold leading-tight text-foreground">{c.name ?? "Anónimo"}</p>
                                                <time className="text-xs text-muted-foreground">{formatDate(c.date)}</time>
                                            </div>
                                        </div>
                                        {c.rating != null && <StarDisplay value={c.rating} size={15} />}
                                    </div>

                                    {c.text ? (
                                        <p className="mt-3 text-sm leading-relaxed text-foreground break-words">{c.text}</p>
                                    ) : (
                                        <p className="mt-3 text-xs italic text-muted-foreground/60">Sin comentario de texto.</p>
                                    )}

                                    {c.reply && (
                                        <div className="mt-4 flex gap-3 rounded-xl bg-muted/30 p-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                                                <Image src="/favicon.ico" alt="Los Olivos Cartagena" width={36} height={36} className="h-full w-full object-contain" />
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="text-sm font-semibold text-primary">Los Olivos Cartagena</span>
                                                    <span className="text-xs text-muted-foreground">· {formatDate(c.reply.date)}</span>
                                                </div>
                                                <p className="mt-1.5 text-sm leading-relaxed text-foreground break-words">{c.reply.text}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}

                            {meta && meta.current_page < meta.last_page && (
                                <div className="flex justify-center pt-2 pb-2">
                                    <Button variant="outline" onClick={() => void loadMore()} disabled={loadingMore}>
                                        {loadingMore && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                                        {loadingMore ? "Cargando…" : "Cargar más comentarios"}
                                    </Button>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
