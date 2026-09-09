"use client"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ImageIcon, MessageSquare, Search, Send, Star, X } from "lucide-react"
import { useState } from "react"

type AdminReply = { date: string; text: string } | null
type Comment = {
    id: number
    name: string
    rating: number
    text: string
    date: string
    status: "approved" | "pending" | "rejected"
    reply: AdminReply
}
type Article = {
    id: number
    title: string
    lastActivity: string
    pendingCount: number
    coverImage?: string
    excerpt?: string
    slug?: string
    comments: Comment[]
}

const MOCK_ARTICLES: Article[] = [
    {
        id: 1,
        title: "Cómo preparar un homenaje significativo",
        lastActivity: "Hace 2 h",
        pendingCount: 1,
        coverImage: undefined,
        excerpt: "Descubre cómo organizar un homenaje lleno de significado que honre la memoria de tu ser querido con amor y dignidad.",
        slug: "como-preparar-un-homenaje-significativo",
        comments: [
            { id: 1, name: "María Fernanda Ruiz", rating: 5, text: "Artículo muy completo y bien explicado. Me ayudó mucho a entender el proceso. Gracias al equipo de Los Olivos.", date: "12 ago 2026", status: "approved", reply: { date: "13 ago 2026", text: "Gracias María Fernanda, nos alegra mucho que el artículo haya sido de ayuda. Estamos aquí para lo que necesites." } },
            { id: 4, name: "Roberto Gómez", rating: 3, text: "Buen artículo pero faltó más información sobre los costos reales del servicio.", date: "8 sep 2026", status: "pending", reply: null },
        ],
    },
    {
        id: 2,
        title: "Planes de previsión funeraria: lo que debes saber",
        lastActivity: "Hace 1 día",
        pendingCount: 0,
        coverImage: undefined,
        excerpt: "Todo lo que necesitas saber sobre los planes de previsión funeraria: coberturas, costos y cómo elegir el mejor para tu familia.",
        slug: "planes-de-prevision-funeraria",
        comments: [
            { id: 2, name: "Carlos Mendoza", rating: 4, text: "Excelente información. Me gustaría que ampliaran un poco más la sección sobre los trámites en línea.", date: "5 sep 2026", status: "approved", reply: null },
        ],
    },
    {
        id: 3,
        title: "Unidad de duelo: acompañamiento en momentos difíciles",
        lastActivity: "Hace 1 día",
        pendingCount: 1,
        coverImage: undefined,
        excerpt: "La unidad de duelo de Los Olivos ofrece acompañamiento profesional y humano para quienes atraviesan la pérdida de un ser querido.",
        slug: "unidad-de-duelo-acompanamiento",
        comments: [
            { id: 3, name: "Ana Lucía Torres", rating: 5, text: "Muy útil y claro. Lo recomendaría a cualquier familia que esté en esta situación.", date: "8 sep 2026", status: "pending", reply: null },
        ],
    },
    {
        id: 4,
        title: "El parque cementerio Los Olivos",
        lastActivity: "Hace 2 días",
        pendingCount: 0,
        coverImage: undefined,
        excerpt: "Conoce los espacios, servicios y la filosofía del parque cementerio Los Olivos, un lugar de paz y recogimiento en Cartagena.",
        slug: "el-parque-cementerio-los-olivos",
        comments: [
            { id: 5, name: "Lucía Castillo", rating: 2, text: "No me parece que refleje bien la realidad del servicio que recibimos.", date: "7 sep 2026", status: "rejected", reply: null },
        ],
    },
    {
        id: 5,
        title: "Beneficios de la previsión exequial",
        lastActivity: "Hace 3 días",
        pendingCount: 1,
        coverImage: undefined,
        excerpt: "La previsión exequial te da tranquilidad y protege a tu familia de gastos imprevistos en los momentos más difíciles.",
        slug: "beneficios-de-la-prevision-exequial",
        comments: [
            { id: 6, name: "Esperanza Vargas", rating: 5, text: "Nunca había pensado en este tema pero este artículo me abrió los ojos. Muy valioso.", date: "6 sep 2026", status: "pending", reply: null },
            { id: 7, name: "Jorge Palomino", rating: 4, text: "Muy buen contenido. Lo compartiré con mi familia.", date: "5 sep 2026", status: "approved", reply: null },
        ],
    },
]

const STATUS_CONFIG: Record<string, { label: string; class: string }> = {
    approved: { label: "Aprobado",  class: "bg-primary/10 text-primary" },
    pending:  { label: "Pendiente", class: "bg-amber-500/12 text-amber-800" },
    rejected: { label: "Rechazado", class: "bg-destructive/10 text-destructive" },
}

const TOTAL_COMMENTS = 132
const AVERAGE = 4.65
const TOTAL_PENDING = MOCK_ARTICLES.reduce((sum, a) => sum + a.pendingCount, 0)

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
    const initials = name.split(" ").slice(0, 2).map((w) => w[0]).join("").toUpperCase()
    return (
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
            {initials}
        </div>
    )
}

export function BlogCommentsAdmin() {
    const [selectedId, setSelectedId] = useState<number>(MOCK_ARTICLES[0].id)
    const [replyingTo, setReplyingTo] = useState<number | null>(null)
    const [replyText, setReplyText] = useState("")
    const [search, setSearch] = useState("")

    const selected = MOCK_ARTICLES.find((a) => a.id === selectedId)!
    const filtered = MOCK_ARTICLES.filter((a) =>
        a.title.toLowerCase().includes(search.toLowerCase())
    )

    const openReply = (id: number) => { setReplyingTo(id); setReplyText("") }
    const closeReply = () => { setReplyingTo(null); setReplyText("") }
    const selectArticle = (id: number) => { setSelectedId(id); closeReply() }

    return (
        <section className="rounded-2xl border border-border bg-card shadow-sm" aria-labelledby="comments-admin-heading">

            {/* Encabezado con stats compactos */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4 md:px-7">
                <div>
                    <h2 id="comments-admin-heading" className="font-display text-xl font-bold">Valoraciones y comentarios</h2>
                    <p className="mt-0.5 text-sm text-muted-foreground">Bandeja de comentarios por artículo</p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                        <MessageSquare className="h-4 w-4" aria-hidden="true" />
                        <strong className="text-foreground">{TOTAL_COMMENTS}</strong> totales
                    </span>
                    <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Star className="h-4 w-4 text-amber-400" aria-hidden="true" />
                        <strong className="text-foreground">{AVERAGE.toFixed(2).replace(".", ",")}</strong> promedio
                    </span>
                </div>
            </div>

            {/* Layout de bandeja */}
            <div className="flex h-[620px] overflow-hidden rounded-b-2xl">

                {/* Panel izquierdo — lista de artículos */}
                <div className="flex w-72 shrink-0 flex-col border-r border-border">

                    {/* Buscador */}
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

                    {/* Lista */}
                    <ul className="flex-1 overflow-y-auto divide-y divide-border" role="listbox" aria-label="Artículos con comentarios">
                        {filtered.map((article) => {
                            const isSelected = article.id === selectedId
                            const previewNames = article.comments.map((c) => c.name.split(" ")[0]).join(", ")
                            return (
                                <li key={article.id} role="option" aria-selected={isSelected}>
                                    <button
                                        type="button"
                                        onClick={() => selectArticle(article.id)}
                                        className={`w-full px-4 py-3.5 text-left transition-colors ${isSelected ? "bg-primary/8 border-l-2 border-l-primary" : "hover:bg-muted/50"}`}
                                    >
                                        <div className="flex gap-3">
                                            {/* Thumbnail */}
                                            <div className="relative h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-muted">
                                                {article.coverImage ? (
                                                    <img
                                                        src={article.coverImage}
                                                        alt=""
                                                        aria-hidden="true"
                                                        className="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-primary/6 text-primary/40">
                                                        <ImageIcon className="h-5 w-5" aria-hidden="true" />
                                                    </div>
                                                )}
                                            </div>

                                            {/* Texto */}
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-1.5">
                                                    <p className={`line-clamp-2 text-xs font-semibold leading-snug ${isSelected ? "text-primary" : "text-foreground"}`}>
                                                        {article.title}
                                                    </p>
                                                    {article.pendingCount > 0 && (
                                                        <span className="shrink-0 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-amber-500 px-1 text-[9px] font-bold text-white">
                                                            {article.pendingCount}
                                                        </span>
                                                    )}
                                                </div>
                                                <p className="mt-1 truncate text-xs text-muted-foreground">{previewNames}</p>
                                                <div className="mt-1 flex items-center justify-between">
                                                    <span className="text-xs text-muted-foreground">
                                                        {article.comments.length} comentario{article.comments.length !== 1 ? "s" : ""}
                                                    </span>
                                                    <span className="text-xs text-muted-foreground">{article.lastActivity}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </button>
                                </li>
                            )
                        })}
                        {filtered.length === 0 && (
                            <li className="px-4 py-10 text-center text-sm text-muted-foreground">Sin resultados</li>
                        )}
                    </ul>
                </div>

                {/* Panel central — hilo de comentarios */}
                <div className="flex flex-1 flex-col overflow-hidden border-r border-border">

                    {/* Cabecera del artículo seleccionado */}
                    <div className="border-b border-border bg-muted/30 px-5 py-3.5">
                        <p className="line-clamp-1 font-semibold text-foreground">{selected.title}</p>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                            {selected.comments.length} comentario{selected.comments.length !== 1 ? "s" : ""}
                            {" · "}
                            <a href={`/blog/${selected.slug}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Ver artículo →</a>
                        </p>
                    </div>

                    {/* Comentarios */}
                    <div className="flex-1 overflow-y-auto divide-y divide-border">
                        {selected.comments.map((comment) => {
                            const isReplying = replyingTo === comment.id
                            return (
                                <div key={comment.id} className="px-5 py-5">

                                    {/* Fila del comentario */}
                                    <div className="flex gap-3">
                                        <Avatar name={comment.name} />
                                        <div className="flex-1 min-w-0">
                                            <div className="flex flex-wrap items-center gap-2">
                                                <span className="text-sm font-semibold text-foreground">{comment.name}</span>
                                                <StarMini rating={comment.rating} />
                                                <span className="ml-auto text-xs text-muted-foreground">{comment.date}</span>
                                            </div>
                                            <p className="mt-1.5 text-sm leading-relaxed text-foreground">{comment.text}</p>
                                            <button
                                                type="button"
                                                onClick={() => isReplying ? closeReply() : openReply(comment.id)}
                                                className="mt-2 text-xs font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring rounded"
                                            >
                                                {isReplying ? "Cancelar" : "Responder"}
                                            </button>
                                        </div>
                                    </div>

                                    {/* Respuesta existente del admin */}
                                    {comment.reply && !isReplying && (
                                        <div className="mt-4 flex gap-3">
                                            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                                                LO
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex flex-wrap items-center gap-2">
                                                    <span className="text-sm font-semibold text-primary">Equipo Los Olivos</span>
                                                    <span className="text-xs text-muted-foreground">· {comment.reply.date}</span>
                                                </div>
                                                <p className="mt-1.5 text-sm leading-relaxed text-foreground">{comment.reply.text}</p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Formulario de respuesta inline */}
                                    {isReplying && (
                                        <div className="ml-12 mt-3 space-y-2.5">
                                            <div className="flex items-center gap-2">
                                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                                                    LO
                                                </div>
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
                                            <div className="flex justify-end gap-2">
                                                <Button type="button" variant="outline" size="sm" onClick={closeReply}>
                                                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                                                    Cancelar
                                                </Button>
                                                <Button type="button" size="sm" disabled={!replyText.trim()}>
                                                    <Send className="h-3.5 w-3.5" aria-hidden="true" />
                                                    Publicar
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Panel derecho — preview del artículo */}
                <div className="flex w-72 shrink-0 flex-col overflow-y-auto">

                    {/* Imagen de portada */}
                    <div className="h-44 w-full shrink-0 overflow-hidden bg-muted">
                        {selected.coverImage ? (
                            <img
                                src={selected.coverImage}
                                alt=""
                                aria-hidden="true"
                                className="h-full w-full object-cover"
                            />
                        ) : (
                            <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-primary/6">
                                <ImageIcon className="h-8 w-8 text-primary/30" aria-hidden="true" />
                                <p className="text-center text-xs text-primary/40 px-4">Imagen del artículo</p>
                            </div>
                        )}
                    </div>

                    {/* Contenido del artículo */}
                    <div className="flex flex-1 flex-col gap-4 p-5">
                        <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-primary">Artículo</p>
                            <h3 className="mt-1.5 font-display text-base font-bold leading-snug text-foreground">
                                {selected.title}
                            </h3>
                        </div>

                        {selected.excerpt && (
                            <p className="text-sm leading-relaxed text-muted-foreground">{selected.excerpt}</p>
                        )}

                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                            <span>{selected.comments.length} comentario{selected.comments.length !== 1 ? "s" : ""}</span>
                            <span>{selected.lastActivity}</span>
                        </div>

                        <a
                            href={`/blog/${selected.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-lg border border-primary px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            Ver artículo completo →
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
