"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, MessageSquare, Search, Send, Star, X, Loader2, Check, Ban } from "lucide-react"
import { useState, useEffect, useCallback } from "react"
import { adminFetch, BlogApiError } from "@/lib/blog"

function getCsrf() {
    return typeof window === "undefined" ? "" : window.sessionStorage.getItem("blog_csrf") ?? ""
}

// Estructura real que devuelve la API
type AdminReply = { text: string; date: string } | null

type AdminComment = {
    id: number
    parentId: number | null
    name: string
    rating: number | null
    text: string
    date: string
    isTeamReply: boolean
    reply: AdminReply
    replies: AdminComment[]
    email: string
    status: "approved" | "pending" | "rejected"
}

type PostWithComments = {
    id: number
    title: string
    slug: string
    excerpt?: string | null
    coverImage?: { url: string; alt: string } | null
    publishedAt?: string | null
    rating?: { average: number | null; count: number } | null
    commentsCount: number
    pendingCount: number
    comments: AdminComment[]
}

type AdminCommentsResponse = {
    data: PostWithComments[]
    stats: {
        totalComments: number
        pendingComments: number
        averageRating: number | null
    }
    meta: { current_page: number; last_page: number; per_page: number; total: number }
}

function getCsrfHeaders() {
    return { "X-Blog-CSRF": getCsrf(), "Content-Type": "application/json" }
}

function formatDate(iso: string) {
    try {
        return new Intl.DateTimeFormat("es-CO", { dateStyle: "medium" }).format(new Date(iso))
    } catch {
        return iso
    }
}

function StarMini({ rating }: { rating: number }) {
    return (
        <span className="inline-flex items-center gap-0.5" aria-label={`${rating} de 5`}>
            {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width={11} height={11} viewBox="0 0 24 24" aria-hidden="true">
                    <path
                        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                        fill={s <= rating ? "#f59e0b" : "none"}
                        stroke={s <= rating ? "#f59e0b" : "#d1d5db"}
                        strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    />
                </svg>
            ))}
        </span>
    )
}

function Avatar({ name }: { name: string }) {
    const initials = (name ?? "").split(" ").slice(0, 2).map((w) => w[0] ?? "").join("").toUpperCase()
    return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
            {initials}
        </div>
    )
}

function StatusBadge({ status }: { status: AdminComment["status"] }) {
    const map = {
        approved: { label: "Aprobado", cls: "bg-emerald-100 text-emerald-700" },
        pending: { label: "Pendiente", cls: "bg-amber-100 text-amber-700" },
        rejected: { label: "Rechazado", cls: "bg-red-100 text-red-600" },
    }
    const { label, cls } = map[status] ?? { label: status, cls: "bg-muted text-muted-foreground" }
    return (
        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold ${cls}`}>
            {label}
        </span>
    )
}

export function BlogCommentsAdmin() {
    const [posts, setPosts] = useState<PostWithComments[]>([])
    const [selectedSlug, setSelectedSlug] = useState<string | null>(null)
    const [globalStats, setGlobalStats] = useState<{ totalComments: number; pendingComments: number; averageRating: number | null } | null>(null)
    const [postsMeta, setPostsMeta] = useState<{ current_page: number; last_page: number } | null>(null)

    const [loading, setLoading] = useState(true)
    const [loadingMore, setLoadingMore] = useState(false)
    const [error, setError] = useState("")

    const [search, setSearch] = useState("")
    const [replyingTo, setReplyingTo] = useState<number | null>(null)
    const [replyText, setReplyText] = useState("")
    const [sendingReply, setSendingReply] = useState(false)
    const [replyError, setReplyError] = useState("")
    const [actionLoading, setActionLoading] = useState<number | null>(null)

    const request = useCallback(async <T,>(path: string, init?: RequestInit): Promise<T> => {
        return adminFetch<T>(path, {
            ...init,
            headers: {
                ...(init?.headers ?? {}),
                ...(init?.method && init.method !== "GET" ? { "X-Blog-CSRF": getCsrf() } : {}),
            },
        })
    }, [])

    const fetchPosts = useCallback(async (page: number, append = false) => {
        const params = new URLSearchParams({ per_page: "20", page: String(page) })
        if (search.trim()) params.set("search", search.trim())
        const res = await request<AdminCommentsResponse>(`/blog/admin/comments?${params.toString()}`)
        setPosts((prev) => append ? [...prev, ...res.data] : res.data)
        setPostsMeta({ current_page: res.meta.current_page, last_page: res.meta.last_page })
        setGlobalStats(res.stats)
        if (!append && res.data.length > 0 && !selectedSlug) {
            setSelectedSlug(res.data[0].slug)
        }
    }, [search, request, selectedSlug])

    useEffect(() => {
        setLoading(true)
        setError("")
        fetchPosts(1)
            .catch(() => setError("No se pudieron cargar los comentarios."))
            .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    const loadMore = async () => {
        if (!postsMeta || postsMeta.current_page >= postsMeta.last_page || loadingMore) return
        setLoadingMore(true)
        try {
            await fetchPosts(postsMeta.current_page + 1, true)
            setPostsMeta((prev) => prev ? { ...prev, current_page: prev.current_page + 1 } : prev)
        } finally {
            setLoadingMore(false)
        }
    }

    const setCommentStatus = async (postSlug: string, commentId: number, status: "approved" | "rejected") => {
        setActionLoading(commentId)
        try {
            await request(`/blog/admin/comments/${commentId}/status`, {
                method: "PATCH",
                headers: getCsrfHeaders(),
                body: JSON.stringify({ status }),
            })
            setPosts((prev) =>
                prev.map((p) => {
                    if (p.slug !== postSlug) return p
                    const wasPending = p.comments.find((c) => c.id === commentId)?.status === "pending"
                    return {
                        ...p,
                        pendingCount: wasPending ? Math.max(0, p.pendingCount - 1) : p.pendingCount,
                        comments: p.comments.map((c) => c.id === commentId ? { ...c, status } : c),
                    }
                })
            )
        } catch (err) {
            if (err instanceof BlogApiError && err.status === 404) {
                setPosts((prev) =>
                    prev.map((p) =>
                        p.slug !== postSlug ? p : {
                            ...p,
                            comments: p.comments.filter((c) => c.id !== commentId),
                            commentsCount: Math.max(0, p.commentsCount - 1),
                        }
                    )
                )
            } else {
                console.error("Error al cambiar estado:", err)
            }
        } finally {
            setActionLoading(null)
        }
    }

    const submitReply = async (postSlug: string, commentId: number) => {
        if (!replyText.trim() || sendingReply) return
        setSendingReply(true)
        setReplyError("")
        try {
            await request(`/blog/admin/comments/${commentId}/reply`, {
                method: "POST",
                headers: getCsrfHeaders(),
                body: JSON.stringify({ reply: replyText.trim() }),
            })
            const now = new Date().toISOString()
            setPosts((prev) =>
                prev.map((p) =>
                    p.slug !== postSlug ? p : {
                        ...p,
                        comments: p.comments.map((c) =>
                            c.id === commentId ? { ...c, reply: { text: replyText.trim(), date: now } } : c
                        ),
                    }
                )
            )
            setReplyingTo(null)
            setReplyText("")
        } catch (err) {
            setReplyError(
                err instanceof BlogApiError && err.message
                    ? err.message
                    : "No se pudo enviar la respuesta."
            )
        } finally {
            setSendingReply(false)
        }
    }

    const openReply = (id: number) => { setReplyingTo(id); setReplyText(""); setReplyError("") }
    const closeReply = () => { setReplyingTo(null); setReplyText(""); setReplyError("") }
    const selectPost = (slug: string) => { setSelectedSlug(slug); closeReply() }

    const selectedPost = posts.find((p) => p.slug === selectedSlug)
    const filteredPosts = posts.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <section className="rounded-2xl border border-border bg-card shadow-sm" aria-labelledby="comments-admin-heading">

            {/* Encabezado */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4 md:px-7">
                <div>
                    <h2 id="comments-admin-heading" className="font-display text-xl font-bold">Valoraciones y comentarios</h2>
                    <p className="mt-0.5 text-sm text-muted-foreground">Bandeja de comentarios por artículo</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                    {(globalStats?.pendingComments ?? 0) > 0 && (
                        <span className="flex items-center gap-1.5 text-amber-600">
                            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-amber-500 text-[10px] font-bold text-white">{globalStats!.pendingComments}</span>
                            pendientes
                        </span>
                    )}
                    {(globalStats?.totalComments ?? 0) > 0 && (
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                            <MessageSquare className="h-4 w-4" aria-hidden="true" />
                            <strong className="text-foreground">{globalStats!.totalComments}</strong> totales
                        </span>
                    )}
                    {globalStats?.averageRating != null && (
                        <span className="flex items-center gap-1.5 text-muted-foreground">
                            <Star className="h-4 w-4 text-amber-400" aria-hidden="true" />
                            <strong className="text-foreground">{globalStats.averageRating.toFixed(2).replace(".", ",")}</strong> promedio
                        </span>
                    )}
                </div>
            </div>

            {/* Layout de bandeja */}
            <div className="flex h-[620px] overflow-x-auto overflow-y-hidden rounded-b-2xl">

                {/* Panel izquierdo — artículos */}
                <div className="flex w-72 shrink-0 flex-col border-r border-border">
                    <div className="border-b border-border p-3">
                        <div className="relative">
                            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
                            <input
                                type="search"
                                placeholder="Buscar artículo…"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                className="h-9 w-full rounded-lg border border-input bg-background pl-9 pr-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            />
                        </div>
                    </div>

                    <ul className="flex-1 divide-y divide-border overflow-y-auto" role="listbox" aria-label="Artículos con comentarios">
                        {loading ? (
                            <li className="flex items-center justify-center py-10">
                                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
                            </li>
                        ) : error ? (
                            <li className="px-4 py-10 text-center text-xs text-destructive">{error}</li>
                        ) : filteredPosts.length === 0 ? (
                            <li className="px-4 py-10 text-center text-sm text-muted-foreground">Sin resultados</li>
                        ) : filteredPosts.map((post) => {
                            const isSelected = post.slug === selectedSlug
                            return (
                                <li key={post.id} role="option" aria-selected={isSelected}>
                                    <button
                                        type="button"
                                        onClick={() => selectPost(post.slug)}
                                        className={`w-full px-4 py-3.5 text-left transition-colors ${isSelected ? "border-l-2 border-l-primary bg-primary/8" : "hover:bg-muted/50"}`}
                                    >
                                        <div className="flex gap-3">
                                            <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                                                {post.coverImage ? (
                                                    // eslint-disable-next-line @next/next/no-img-element
                                                    <img src={post.coverImage.url} alt="" aria-hidden="true" className="h-full w-full object-cover" />
                                                ) : (
                                                    <div className="flex h-full w-full items-center justify-center bg-primary/6 text-primary/40">
                                                        <ImageIcon className="h-5 w-5" aria-hidden="true" />
                                                    </div>
                                                )}
                                            </div>
                                            <div className="min-w-0 flex-1">
                                                <div className="flex items-start justify-between gap-1.5">
                                                    <p className={`line-clamp-2 text-xs font-semibold leading-snug ${isSelected ? "text-primary" : "text-foreground"}`}>
                                                        {post.title}
                                                    </p>
                                                    {post.pendingCount > 0 && (
                                                        <span className="inline-flex h-4 min-w-[1rem] shrink-0 items-center justify-center rounded-full bg-amber-500 px-1 text-[9px] font-bold text-white">
                                                            {post.pendingCount}
                                                        </span>
                                                    )}
                                                </div>
                                                <div className="mt-1 flex items-center justify-between">
                                                    <span className="text-xs text-muted-foreground">
                                                        {post.commentsCount} comentario{post.commentsCount !== 1 ? "s" : ""}
                                                    </span>
                                                    {post.rating?.average != null && (
                                                        <span className="flex items-center gap-0.5 text-xs text-amber-500">
                                                            <Star className="h-3 w-3 fill-amber-400" aria-hidden="true" />
                                                            {post.rating.average.toFixed(1)}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            )
                        })}
                        {postsMeta && postsMeta.current_page < postsMeta.last_page && (
                            <li className="flex justify-center py-3">
                                <button type="button" onClick={loadMore} disabled={loadingMore} className="text-xs text-primary hover:underline disabled:opacity-50">
                                    {loadingMore ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : "Cargar más artículos"}
                                </button>
                            </li>
                        )}
                    </ul>
                </div>

                {/* Panel central — comentarios */}
                <div className="flex min-w-[300px] flex-1 flex-col overflow-hidden border-r border-border">
                    {selectedPost ? (
                        <>
                            <div className="border-b border-border bg-muted/30 px-5 py-3.5">
                                <p className="line-clamp-1 font-semibold text-foreground">{selectedPost.title}</p>
                                <p className="mt-0.5 text-xs text-muted-foreground">
                                    {selectedPost.comments.length} comentario{selectedPost.comments.length !== 1 ? "s" : ""}
                                    {" · "}
                                    <a
                                        href={`/blog/${selectedPost.slug}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        Ver artículo →
                                    </a>
                                </p>
                            </div>

                            <div className="flex-1 divide-y divide-border overflow-y-auto">
                                {selectedPost.comments.length === 0 ? (
                                    <p className="px-5 py-10 text-center text-sm text-muted-foreground">
                                        Sin comentarios para este artículo.
                                    </p>
                                ) : (
                                    <>
                                        {selectedPost.comments.map((comment) => {
                                            const isReplying = replyingTo === comment.id
                                            const isActing = actionLoading === comment.id
                                            return (
                                                <div key={comment.id} className="px-5 py-5">
                                                    <div className="flex gap-3">
                                                        <Avatar name={comment.name} />
                                                        <div className="min-w-0 flex-1">
                                                            <div className="flex flex-wrap items-center gap-2">
                                                                <span className="text-sm font-semibold text-foreground">{comment.name}</span>
                                                                {comment.rating != null && <StarMini rating={comment.rating} />}
                                                                <StatusBadge status={comment.status} />
                                                                <span className="ml-auto text-xs text-muted-foreground">{formatDate(comment.date)}</span>
                                                            </div>
                                                            <p className="mt-1.5 text-sm leading-relaxed text-foreground">
                                                                {comment.text || <span className="italic text-muted-foreground/60">Sin comentario de texto.</span>}
                                                            </p>

                                                            {/* Acciones */}
                                                            <div className="mt-2.5 flex flex-wrap items-center gap-2">
                                                                {comment.status !== "approved" && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setCommentStatus(selectedPost.slug, comment.id, "approved")}
                                                                        disabled={isActing}
                                                                        className="inline-flex items-center gap-1 rounded text-xs font-semibold text-emerald-600 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                                                                    >
                                                                        {isActing ? <Loader2 className="h-3 w-3 animate-spin" /> : <Check className="h-3 w-3" aria-hidden="true" />}
                                                                        Aprobar
                                                                    </button>
                                                                )}
                                                                {comment.status !== "rejected" && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => setCommentStatus(selectedPost.slug, comment.id, "rejected")}
                                                                        disabled={isActing}
                                                                        className="inline-flex items-center gap-1 rounded text-xs font-semibold text-red-500 hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:opacity-50"
                                                                    >
                                                                        {isActing ? <Loader2 className="h-3 w-3 animate-spin" /> : <Ban className="h-3 w-3" aria-hidden="true" />}
                                                                        Rechazar
                                                                    </button>
                                                                )}
                                                                {!comment.reply && !comment.isTeamReply && (
                                                                    <button
                                                                        type="button"
                                                                        onClick={() => isReplying ? closeReply() : openReply(comment.id)}
                                                                        className="rounded text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                                                                    >
                                                                        {isReplying ? "Cancelar" : "Responder"}
                                                                    </button>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Respuesta existente */}
                                                    {comment.reply && !isReplying && (
                                                        <div className="mt-4 flex gap-3 rounded-xl bg-muted/30 p-3">
                                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                                                                <Image src="/favicon.ico" alt="Los Olivos Cartagena" width={36} height={36} className="h-full w-full object-contain" />
                                                            </div>
                                                            <div className="min-w-0 flex-1">
                                                                <div className="flex flex-wrap items-center gap-2">
                                                                    <span className="text-sm font-semibold text-primary">Los Olivos Cartagena</span>
                                                                    <span className="text-xs text-muted-foreground">· {formatDate(comment.reply.date)}</span>
                                                                </div>
                                                                <p className="mt-1.5 text-sm leading-relaxed text-foreground">{comment.reply.text}</p>
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Formulario de respuesta */}
                                                    {isReplying && (
                                                        <div className="ml-3 mt-3 space-y-2.5 sm:ml-12">
                                                            <div className="flex items-center gap-2">
                                                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">LO</div>
                                                                <span className="text-xs font-semibold text-foreground">Equipo Los Olivos</span>
                                                            </div>
                                                            <Textarea
                                                                placeholder="Escribe tu respuesta…"
                                                                rows={3}
                                                                value={replyText}
                                                                onChange={(e) => setReplyText(e.target.value)}
                                                                className="text-sm"
                                                                autoFocus
                                                            />
                                                            {replyError && <p className="text-xs text-destructive">{replyError}</p>}
                                                            <div className="flex justify-end gap-2">
                                                                <Button type="button" variant="outline" size="sm" onClick={closeReply} disabled={sendingReply}>
                                                                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                                                                    Cancelar
                                                                </Button>
                                                                <Button
                                                                    type="button"
                                                                    size="sm"
                                                                    disabled={!replyText.trim() || sendingReply}
                                                                    onClick={() => submitReply(selectedPost.slug, comment.id)}
                                                                >
                                                                    {sendingReply
                                                                        ? <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
                                                                        : <Send className="h-3.5 w-3.5" aria-hidden="true" />}
                                                                    {sendingReply ? "Enviando…" : "Publicar"}
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            )
                                        })}
                                    </>
                                )}
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground">
                            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Selecciona un artículo"}
                        </div>
                    )}
                </div>

                {/* Panel derecho — preview del artículo */}
                <div className="flex w-72 shrink-0 flex-col overflow-y-auto">
                    {selectedPost ? (
                        <>
                            <div className="h-44 w-full shrink-0 overflow-hidden bg-muted">
                                {selectedPost.coverImage ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img src={selectedPost.coverImage.url} alt="" aria-hidden="true" className="h-full w-full object-cover" />
                                ) : (
                                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-primary/6">
                                        <ImageIcon className="h-8 w-8 text-primary/30" aria-hidden="true" />
                                        <p className="px-4 text-center text-xs text-primary/40">Imagen del artículo</p>
                                    </div>
                                )}
                            </div>
                            <div className="flex flex-1 flex-col gap-4 p-5">
                                <div>
                                    <p className="text-xs font-bold uppercase tracking-widest text-primary">Artículo</p>
                                    <h3 className="mt-1.5 font-display text-base font-bold leading-snug text-foreground">
                                        {selectedPost.title}
                                    </h3>
                                </div>
                                {selectedPost.excerpt && (
                                    <p className="text-sm leading-relaxed text-muted-foreground line-clamp-4">{selectedPost.excerpt}</p>
                                )}
                                <div className="flex items-center justify-between text-xs text-muted-foreground">
                                    <span>{selectedPost.commentsCount} comentario{selectedPost.commentsCount !== 1 ? "s" : ""}</span>
                                    {selectedPost.rating?.average != null && (
                                        <span className="flex items-center gap-1 text-amber-500">
                                            <Star className="h-3 w-3 fill-amber-400" aria-hidden="true" />
                                            {selectedPost.rating.average.toFixed(2).replace(".", ",")}
                                        </span>
                                    )}
                                </div>
                                <a
                                    href={`/blog/${selectedPost.slug}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                                >
                                    Ver artículo completo →
                                </a>
                            </div>
                        </>
                    ) : (
                        <div className="flex flex-1 items-center justify-center text-sm text-muted-foreground p-6 text-center">
                            Selecciona un artículo para ver su detalle
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
