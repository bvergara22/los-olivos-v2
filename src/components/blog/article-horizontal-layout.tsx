"use client"

import { useRef, useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, Clipboard, Facebook, Instagram, MessageCircle, Share2 } from "lucide-react"
import { BlogCommentFormModal } from "@/components/blog/blog-comment-form-modal"
import { BlogCommentViewerModal } from "@/components/blog/blog-comment-viewer-modal"
import { formatBlogAuthor, BLOG_API_URL, type BlogPost, type BlogNode } from "@/lib/blog"
import { BlogContent, BlogSlideContent } from "@/components/blog/blog-renderer"

// Peso visual objetivo por slide (~heading + 2 párrafos medios)
const SLIDE_TARGET_WEIGHT = 720

function SlideArrow({ dir }: { dir: 'left' | 'right' }) {
    return (
        <div className={`absolute ${dir === 'right' ? 'right-1.5' : 'left-1.5'} top-1/2 z-20 -translate-y-1/2 flex h-12 w-7 items-center justify-center rounded-full bg-black/5`}>
            <svg width="14" height="22" viewBox="0 0 14 22" fill="none" aria-hidden="true" className="text-foreground/35">
                {dir === 'right'
                    ? <path d="M3 2l8 9-8 9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                    : <path d="M11 2l-8 9 8 9" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                }
            </svg>
        </div>
    )
}

function getNodeText(node: BlogNode): string {
    if (node.type === "text") return node.text ?? ""
    return (node.content ?? []).map(getNodeText).join("")
}

function blockWeight(node: BlogNode): number {
    if (node.type === "image") return SLIDE_TARGET_WEIGHT
    const chars = getNodeText(node).length
    // Los headings tienen más peso visual (fuente grande + márgenes)
    return (node.type === "heading" ? 150 : 40) + chars
}

function splitIntoSlides(content: BlogNode): BlogNode[][] {
    const blocks = content.content ?? []
    if (!blocks.length) return []

    const slides: BlogNode[][] = []
    let current: BlogNode[] = []
    let currentWeight = 0

    for (const node of blocks) {
        const w = blockWeight(node)
        const isHeading = node.type === "heading"

        if (isHeading && current.length > 0) {
            // Heading siempre abre un slide nuevo
            slides.push(current)
            current = []
            currentWeight = 0
        } else if (!isHeading && currentWeight > 0 && currentWeight + w > SLIDE_TARGET_WEIGHT) {
            // Bloque de texto que excedería el peso objetivo
            slides.push(current)
            current = []
            currentWeight = 0
        }

        current.push(node)
        currentWeight += w
    }

    if (current.length > 0) slides.push(current)
    return slides.filter(s => s.length > 0)
}

function XIcon() {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.963 6.817H1.684l7.73-8.835L1.254 2.25H8.08l4.713 6.231zM17.083 19.77h1.833L7.084 4.126H5.117z" />
        </svg>
    )
}

const iconBtnCls = "inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-card px-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"

type Props = {
    post: BlogPost
    articleUrl: string
    content: BlogNode
}

export function ArticleHorizontalLayout({ post, articleUrl, content }: Props) {
    const [shareCopied, setShareCopied] = useState(false)
    const [shareStatus, setShareStatus] = useState("")
    const [showFormModal, setShowFormModal] = useState(false)
    const [showViewerModal, setShowViewerModal] = useState(false)
    const [panelComments, setPanelComments] = useState<Array<{
        id: number; name: string; rating: number | null; text: string; date: string
        reply: { text: string; date: string } | null
    }>>([])
    const [panelCommentsLoading, setPanelCommentsLoading] = useState(true)
    const anyModalOpen = useRef(false)

    // ── Refs móviles ──
    const outerSnapRef = useRef<HTMLDivElement>(null)
    const totalPanelsRef = useRef(3)

    // Navegación horizontal entre slides: misma física libre + spring
    useEffect(() => {
        const outer = outerSnapRef.current
        if (!outer) return

        let startX = 0, startY = 0, lastX = 0, outerMoveStart = 0
        let velocity = 0, rafId = 0
        let axis: 'h' | 'v' | null = null

        const snapTo = (targetPanel: number) => {
            const panelW = outer.offsetWidth
            const maxPanel = totalPanelsRef.current - 1
            const targetX = Math.max(0, Math.min(maxPanel, targetPanel)) * panelW
            if (Math.abs(targetX - outer.scrollLeft) < 1) { outer.scrollLeft = targetX; return }
            let v = velocity
            const SPRING = 0.15
            const animate = () => {
                v *= 0.88
                outer.scrollLeft -= v
                outer.scrollLeft += (targetX - outer.scrollLeft) * SPRING
                if (Math.abs(targetX - outer.scrollLeft) < 0.5 && Math.abs(v) < 0.5) {
                    outer.scrollLeft = targetX; return
                }
                rafId = requestAnimationFrame(animate)
            }
            cancelAnimationFrame(rafId)
            rafId = requestAnimationFrame(animate)
        }

        const onTouchStart = (e: TouchEvent) => {
            cancelAnimationFrame(rafId)
            startX = lastX = e.touches[0]!.clientX
            startY = e.touches[0]!.clientY
            outerMoveStart = outer.scrollLeft
            velocity = 0; axis = null
        }

        const onTouchMove = (e: TouchEvent) => {
            const x = e.touches[0]!.clientX
            const y = e.touches[0]!.clientY
            if (!axis) {
                const dx = Math.abs(x - startX), dy = Math.abs(y - startY)
                if (dx < 5 && dy < 5) return
                axis = dx >= dy ? 'h' : 'v'
            }
            if (axis === 'v') return
            const dx = x - lastX
            lastX = x; velocity = dx
            e.preventDefault()
            outer.scrollLeft -= dx
        }

        const onTouchEnd = () => {
            if (axis !== 'h') { axis = null; return }
            const panelW = outer.offsetWidth
            const maxPanel = totalPanelsRef.current - 1
            const startPanel = Math.round(outerMoveStart / panelW)
            const moved = (outer.scrollLeft - outerMoveStart) / panelW
            let target = startPanel
            if (moved > 0.2 || velocity < -10) target = Math.min(maxPanel, startPanel + 1)
            else if (moved < -0.2 || velocity > 10) target = Math.max(0, startPanel - 1)
            snapTo(target)
            axis = null
        }

        outer.addEventListener('touchstart', onTouchStart, { passive: true })
        outer.addEventListener('touchmove', onTouchMove, { passive: false })
        outer.addEventListener('touchend', onTouchEnd, { passive: true })
        return () => {
            outer.removeEventListener('touchstart', onTouchStart)
            outer.removeEventListener('touchmove', onTouchMove)
            outer.removeEventListener('touchend', onTouchEnd)
            cancelAnimationFrame(rafId)
        }
    }, [])

    // Bloquea TODO scroll mientras un modal esté abierto
    useEffect(() => {
        const isOpen = showFormModal || showViewerModal
        anyModalOpen.current = isOpen

        if (!isOpen) {
            document.documentElement.style.overflow = ""
            return
        }

        document.documentElement.style.overflow = "hidden"

        const blockScroll = (e: WheelEvent) => {
            const target = e.target as Element | null
            if (target?.closest("[data-modal-scroll]")) return
            e.preventDefault()
            e.stopImmediatePropagation()
        }

        window.addEventListener("wheel", blockScroll, { passive: false, capture: true })
        return () => {
            window.removeEventListener("wheel", blockScroll, { capture: true })
            document.documentElement.style.overflow = ""
        }
    }, [showFormModal, showViewerModal])

    useEffect(() => {
        fetch(`${BLOG_API_URL}/blog/posts/${encodeURIComponent(post.slug)}/comments?page=1&per_page=20`, {
            headers: { Accept: "application/json" }, cache: "no-store"
        })
            .then(r => r.ok ? r.json() : null)
            .then(json => { if (json?.data) setPanelComments(json.data) })
            .catch(() => {})
            .finally(() => setPanelCommentsLoading(false))
    }, [post.slug])

    const shareMessage = `${post.title}\n${articleUrl}`

    const handleShareNative = async () => {
        if (!navigator.share) { await handleShareCopy(); return }
        try { await navigator.share({ title: post.title, text: post.title, url: articleUrl }) }
        catch (err) { if (!(err instanceof DOMException && err.name === "AbortError")) setShareStatus("No se pudo compartir.") }
    }

    const handleShareCopy = async () => {
        try {
            if (navigator.clipboard?.writeText) await navigator.clipboard.writeText(articleUrl)
            else {
                const ta = document.createElement("textarea")
                ta.value = articleUrl; ta.style.position = "fixed"; ta.style.opacity = "0"
                document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove()
            }
            setShareCopied(true); setShareStatus("Enlace copiado.")
            setTimeout(() => { setShareCopied(false); setShareStatus("") }, 2000)
        } catch { setShareStatus("No se pudo copiar.") }
    }

    const handleShareFacebook = () => {
        const encoded = encodeURIComponent(articleUrl)
        const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
        if (!isMobile) {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${encoded}`, "_blank", "noopener,noreferrer,width=600,height=600")
            return
        }
        // Móvil: intentar abrir diálogo de compartir en la app de Facebook
        let appOpened = false
        const onHide = () => { appOpened = true }
        document.addEventListener("visibilitychange", onHide, { once: true })
        window.location.href = `fb://share?link=${encoded}`
        setTimeout(() => {
            document.removeEventListener("visibilitychange", onHide)
            if (!appOpened) window.open(`https://www.facebook.com/sharer/sharer.php?u=${encoded}`, "_blank", "noopener")
        }, 1500)
    }

    const handleShareInstagram = async () => {
        // En móvil, el menú nativo del sistema incluye Instagram como destino
        if (navigator.share) {
            try {
                await navigator.share({ title: post.title, text: post.title, url: articleUrl })
            } catch (err) {
                if (!(err instanceof DOMException && err.name === "AbortError")) {
                    await handleShareCopy()
                }
            }
            return
        }
        // Desktop: copiar URL y mostrar instrucción
        await handleShareCopy()
        setShareStatus("URL copiada. Compártela en Instagram.")
    }


    const publishedDate = post.publishedAt
        ? new Intl.DateTimeFormat("es-CO", { day: "numeric", month: "long", year: "numeric" }).format(new Date(post.publishedAt))
        : ""

    const contentSlides = splitIntoSlides(content)
    const totalPanels = 1 + contentSlides.length + 1

    useEffect(() => {
        totalPanelsRef.current = totalPanels
    })

    return (
        <article className="bg-background pb-0 md:pb-24">

            {/* ══════════════════════════════════════════════
                DESKTOP / TABLET — scroll vertical
            ══════════════════════════════════════════════ */}
            <div className="hidden md:block">

                {/* ── Header ── */}
                <header className="relative overflow-hidden bg-[#f2faf6] pb-20 pt-10 md:pb-28 md:pt-14">
                    <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#b4e379]/30 blur-3xl" aria-hidden="true" />
                    <div className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />

                    <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                        <Link
                            href="/blog"
                            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        >
                            ← <span>Volver al blog</span>
                        </Link>

                        <div className="mt-9 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">
                                {post.category?.name ?? "Blog"}
                            </span>
                            <span className="h-1 w-1 rounded-full bg-primary/35" aria-hidden="true" />
                            <time dateTime={post.publishedAt ?? undefined} className="text-sm font-medium text-muted-foreground">
                                {publishedDate}
                            </time>
                        </div>

                        <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.12] tracking-[-0.02em] text-balance text-foreground sm:text-5xl md:text-6xl">
                            {post.title}
                        </h1>

                        {post.author && (
                            <p className="mt-4 text-sm text-muted-foreground">
                                Por <span className="font-semibold text-foreground">{formatBlogAuthor(post.author.name)}</span>
                            </p>
                        )}
                    </div>

                    {/* Wave divider */}
                    <div className="absolute -bottom-px left-0 right-0 text-background">
                        <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-full sm:h-10 md:h-12" preserveAspectRatio="none">
                            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7366 960 46.5083C1120 42.2805 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
                        </svg>
                    </div>
                </header>

                {/* ── Cover image + contenido ── */}
                <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

                    {/* Imagen de portada solapando el header */}
                    {post.coverImage ? (
                        <div className="relative -mt-10 aspect-[16/8] overflow-hidden rounded-2xl bg-white shadow-lg md:-mt-16">
                            <Image
                                src={post.coverImage.url}
                                alt={post.coverImage.alt}
                                fill
                                priority
                                sizes="(min-width: 1280px) 1152px, 100vw"
                                className="object-contain"
                            />
                        </div>
                    ) : (
                        <div className="relative -mt-10 flex aspect-[16/8] items-center justify-center overflow-hidden rounded-2xl bg-primary/10 shadow-lg md:-mt-16">
                            <span className="select-none font-display text-[120px] font-bold leading-none text-primary/10">LO</span>
                        </div>
                    )}

                    {/* Contenido del artículo */}
                    <div className="mx-auto max-w-3xl pt-12 md:pt-16">

                        {/* Texto del artículo */}
                        <BlogContent content={content} />

                        {/* Compartir */}
                        <section className="mt-14 border-y border-border py-7" aria-labelledby="blog-share-heading">
                            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h2 id="blog-share-heading" className="font-display text-xl font-bold text-foreground">Comparte este artículo</h2>
                                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Ayuda a que esta información llegue a más familias.</p>
                                </div>
                                <div className="flex flex-wrap gap-2" role="group" aria-label="Opciones para compartir">
                                    <button type="button" onClick={() => void handleShareNative()} aria-label="Compartir" className={`${iconBtnCls} text-primary`}><Share2 className="h-4 w-4" /></button>
                                    <a className={iconBtnCls} href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><MessageCircle className="h-4 w-4 text-[#25D366]" /></a>
                                    <button type="button" onClick={handleShareFacebook} aria-label="Facebook" className={iconBtnCls}><Facebook className="h-4 w-4 text-[#1877F2]" /></button>
                                    <a className={iconBtnCls} href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="X"><XIcon /></a>
                                    <button type="button" onClick={() => void handleShareInstagram()} aria-label="Instagram" className={iconBtnCls}><Instagram className="h-4 w-4 text-[#E1306C]" /></button>
                                    <button type="button" onClick={() => void handleShareCopy()} aria-label="Copiar enlace" className={iconBtnCls}>
                                        {shareCopied ? <Check className="h-4 w-4 text-primary" /> : <Clipboard className="h-4 w-4 text-primary" />}
                                    </button>
                                </div>
                            </div>
                            {shareStatus && <p className="mt-2 text-xs font-semibold text-primary" role="status" aria-live="polite">{shareStatus}</p>}
                        </section>

                        {/* Volver al blog */}
                        <div className="mt-14 border-t border-border pt-7">
                            <Link
                                href="/blog"
                                className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                            >
                                ← <span>Seguir leyendo en el blog</span>
                            </Link>
                        </div>

                        {/* Comentarios */}
                        <section className="mt-16 border-t border-border pt-12" aria-labelledby="comments-heading">
                            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h2 id="comments-heading" className="font-display text-2xl font-bold text-foreground">
                                        Comentarios
                                        {panelComments.length > 0 && (
                                            <span className="ml-2 text-base font-normal text-muted-foreground">({panelComments.length})</span>
                                        )}
                                    </h2>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setShowFormModal(true)}
                                    className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-primary/20 transition-all hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                                >
                                    Dejar comentario
                                    <svg width="14" height="14" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                        <path d="M9 3v12M3 9h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>

                            {panelCommentsLoading ? (
                                <div className="flex items-center justify-center py-16 text-sm text-muted-foreground">Cargando comentarios…</div>
                            ) : panelComments.length === 0 ? (
                                <div className="flex flex-col items-center gap-3 py-16 text-center">
                                    <p className="font-display text-base font-bold text-foreground">Aún no hay comentarios</p>
                                    <p className="text-sm text-muted-foreground">Sé la primera persona en comentar.</p>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {panelComments.map((c) => (
                                        <div key={c.id} className="rounded-2xl border border-border bg-white/60 p-4 backdrop-blur-sm">
                                            <div className="flex items-start justify-between gap-3">
                                                <div className="flex items-center gap-3">
                                                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                                                        {((c.name ?? "?")[0] ?? "?").toUpperCase()}
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-semibold leading-tight text-foreground">{c.name ?? "Anónimo"}</p>
                                                        <time className="text-xs text-muted-foreground">
                                                            {(() => { try { return new Intl.DateTimeFormat("es-CO", { dateStyle: "long" }).format(new Date(c.date)) } catch { return c.date } })()}
                                                        </time>
                                                    </div>
                                                </div>
                                                {c.rating != null && (
                                                    <span className="inline-flex items-center gap-0.5 text-sm text-amber-400">
                                                        {"★".repeat(c.rating)}{"☆".repeat(5 - c.rating)}
                                                    </span>
                                                )}
                                            </div>
                                            {c.text && <p className="mt-2.5 text-sm leading-relaxed text-foreground">{c.text}</p>}
                                            {c.reply && (
                                                <div className="mt-3 flex gap-3 rounded-xl bg-muted/30 p-3">
                                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white">
                                                        <Image src="/favicon.ico" alt="Los Olivos Cartagena" width={32} height={32} className="h-full w-full object-contain" />
                                                    </div>
                                                    <div>
                                                        <p className="text-xs font-semibold text-primary">Los Olivos Cartagena</p>
                                                        <p className="mt-1 text-sm leading-relaxed text-foreground">{c.reply.text}</p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </section>

                    </div>
                </div>
            </div>


            {/* ══════════════════════════════════════════════
                MÓVIL — slides horizontales dinámicos
            ══════════════════════════════════════════════ */}
            <div
                ref={outerSnapRef}
                className="md:hidden flex h-[calc(100dvh-5rem)] w-screen overflow-x-auto overflow-y-hidden [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                style={{ touchAction: "pan-y" }}
            >
                {/* Panel 1 móvil: título grande + imagen */}
                <section
                    className="relative flex h-[calc(100dvh-5rem)] w-screen shrink-0 flex-col overflow-hidden bg-[#f2faf6] "
                    aria-label="Información del artículo"
                >
                    <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#b4e379]/30 blur-3xl" aria-hidden="true" />

                    <div className="relative z-10 flex flex-1 flex-col min-h-0 gap-14 px-4 pt-12 pb-12">
                        <div className="shrink-0 flex flex-col gap-12">
                            <Link href="/blog" className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary">
                                ← <span>Volver al blog</span>
                            </Link>
                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center rounded-full bg-primary/15 px-3 py-0.5 text-xs font-bold text-primary">
                                    {post.category?.name ?? "Blog"}
                                </span>
                                <span className="text-muted-foreground/50 text-sm">•</span>
                                <time dateTime={post.publishedAt ?? undefined} className="text-sm text-muted-foreground">
                                    {publishedDate}
                                </time>
                            </div>
                        </div>
                        <h1 className="font-display text-[1.82rem] font-bold leading-[1.1] tracking-tight text-foreground shrink-0">
                            {post.title}
                        </h1>
                        {post.coverImage ? (
                            <div className="relative w-full aspect-video overflow-hidden rounded-3xl shadow-xl">
                                <Image
                                    src={post.coverImage.url}
                                    alt={post.coverImage.alt}
                                    fill
                                    priority
                                    sizes="100vw"
                                    className="object-cover"
                                />
                            </div>
                        ) : (
                            <div className="w-full aspect-video flex items-center justify-center rounded-3xl bg-primary/10">
                                <span className="select-none font-display text-7xl font-bold text-primary/10">LO</span>
                            </div>
                        )}
                    </div>

                    <SlideArrow dir="right" />

                </section>

                {/* Slides de contenido: uno por sección H2/H3 */}
                {contentSlides.map((nodes, i) => (
                    <section
                        key={i}
                        className="relative flex h-[calc(100dvh-5rem)] w-screen shrink-0 flex-col overflow-hidden bg-[#fafaf8]"
                        aria-label={`Sección ${i + 1}`}
                    >
                        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/6 blur-3xl" aria-hidden="true" />
                        <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-[#b4e379]/20 blur-3xl" aria-hidden="true" />
                        <SlideArrow dir="left" />
                        <SlideArrow dir="right" />
                        <div className="relative z-10 flex-1 overflow-hidden px-10 pt-8 pb-8">
                            <BlogSlideContent nodes={nodes} />
                        </div>
                    </section>
                ))}

                {/* Último slide: CTA comentarios */}
                <section
                    className="relative flex h-[calc(100dvh-5rem)] w-screen shrink-0 flex-col items-center justify-center overflow-hidden bg-[#f2faf6] "
                    aria-label="Continúa la conversación"
                >
                    <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/8 blur-3xl" aria-hidden="true" />
                    <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[#b4e379]/20 blur-3xl" aria-hidden="true" />
                    <SlideArrow dir="left" />

                    <div className="relative z-10 flex w-full max-w-sm flex-col items-center gap-4 px-7 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                            <svg width="28" height="28" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                                <path d="M18 3C9.716 3 3 9.163 3 16.8c0 3.842 1.74 7.3 4.56 9.786L6 30l5.04-2.52A16.9 16.9 0 0 0 18 28.8c8.284 0 15-6.163 15-13.8C33 7.163 26.284 3 18 3Z" stroke="#018c58" strokeWidth="2" strokeLinejoin="round" />
                                <circle cx="11" cy="17" r="1.5" fill="#018c58" />
                                <circle cx="18" cy="17" r="1.5" fill="#018c58" />
                                <circle cx="25" cy="17" r="1.5" fill="#018c58" />
                            </svg>
                        </div>
                        <div>
                            <h2 className="font-display text-2xl font-bold leading-tight text-foreground">Construyamos esta conversación juntos</h2>
                            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                Comparte tu opinión con nuestra comunidad. Cada comentario enriquece la historia de Los Olivos.
                            </p>
                        </div>

                        <div className="flex flex-col items-center gap-2">
                            <p className="text-xs font-bold uppercase tracking-widest text-foreground/40">Compartir</p>
                            <div className="flex flex-wrap justify-center gap-2" role="group" aria-label="Opciones para compartir">
                                <button type="button" onClick={() => void handleShareNative()} aria-label="Compartir" className={`${iconBtnCls} text-primary`}>
                                    <Share2 className="h-4 w-4" aria-hidden="true" />
                                </button>
                                <a className={iconBtnCls} href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                                    <MessageCircle className="h-4 w-4 text-[#25D366]" aria-hidden="true" />
                                </a>
                                <button type="button" onClick={handleShareFacebook} aria-label="Facebook" className={iconBtnCls}>
                                    <Facebook className="h-4 w-4 text-[#1877F2]" aria-hidden="true" />
                                </button>
                                <a className={iconBtnCls} href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(articleUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="X">
                                    <XIcon />
                                </a>
                                <button type="button" onClick={() => void handleShareInstagram()} aria-label="Instagram" className={iconBtnCls}>
                                    <Instagram className="h-4 w-4 text-[#E1306C]" aria-hidden="true" />
                                </button>
                                <button type="button" onClick={() => void handleShareCopy()} aria-label="Copiar enlace" className={iconBtnCls}>
                                    {shareCopied
                                        ? <Check className="h-4 w-4 text-primary" aria-hidden="true" />
                                        : <Clipboard className="h-4 w-4 text-primary" aria-hidden="true" />}
                                </button>
                            </div>
                            {shareStatus && <p className="text-xs font-semibold text-primary">{shareStatus}</p>}
                        </div>

                        <div className="flex flex-wrap justify-center gap-3">
                            <button
                                type="button"
                                onClick={() => setShowViewerModal(true)}
                                className="inline-flex items-center gap-2.5 rounded-full bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all active:scale-95"
                            >
                                Ver comentarios
                                <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                                    <path d="M3 9h12m0 0-4.5-4.5M15 9l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowFormModal(true)}
                                className="inline-flex items-center gap-2.5 rounded-full border-2 border-primary bg-transparent px-6 py-3 text-sm font-bold text-primary transition-all active:scale-95"
                            >
                                Comentar
                            </button>
                        </div>
                        <Link href="/blog" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
                            ← Volver al blog
                        </Link>
                    </div>

                </section>
            </div>

            {/* Modales — funcionan en desktop y móvil */}
            <BlogCommentFormModal
                slug={post.slug}
                open={showFormModal}
                onClose={() => setShowFormModal(false)}
            />
            <BlogCommentViewerModal
                slug={post.slug}
                open={showViewerModal}
                onClose={() => setShowViewerModal(false)}
            />

        </article>
    )
}
