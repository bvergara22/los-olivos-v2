"use client"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import { BlogAuthors } from "@/components/blog/blog-authors"
import { normalizeBlogContent } from "@/lib/blog-content"
import {BlogContent} from "@/components/blog/blog-renderer"
import {
    adminFetch,
    BlogApiError,
    formatBlogAuthor,
    formatBlogDate,
    slugify,
    type BlogAuthor,
    type BlogAttachment,
    type BlogCategory,
    type BlogNode,
    type BlogPost
} from "@/lib/blog"
import dynamic from "next/dynamic"
import {Check, ImagePlus, LoaderCircle, LogOut, Pencil, Plus, Power, Save, X} from "lucide-react"
import Link from "next/link"
import {useEffect, useRef, useState, type ReactNode} from "react"

type AdminUser = { id: number; name: string; email: string }
type AdminPost = BlogPost & { content: BlogNode }
type Draft = {
    id: number | null
    title: string
    slug: string
    excerpt: string
    cover_image_url: string
    cover_image_alt: string
    content: BlogNode
    author_id: number | ""
    category_id: number | ""
    status: "draft" | "published"
    hasPendingDraft: boolean
    seo_title: string
    seo_description: string
}

function FieldHelp({ label, children }: { label: string; children: ReactNode }) {
    const tooltipId = `help-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`

    return (
        <span className="group inline-flex">
            <button
                type="button"
                className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-primary/40 text-xs font-bold leading-none text-primary transition-colors hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label={`Ayuda sobre ${label}`}
                aria-describedby={tooltipId}
            >
                ?
            </button>
            <span
                id={tooltipId}
                role="tooltip"
                className="pointer-events-none invisible absolute bottom-full left-0 z-50 mb-2 w-80 max-w-full rounded-lg bg-foreground px-4 py-3 text-left text-xs font-medium leading-relaxed text-background opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
            >
                {children}
            </span>
        </span>
    )
}

type CategoryDraft = { id: number | null; name: string; active: boolean }

const emptyContent: BlogNode = {type: "doc", content: [{type: "paragraph"}]}
const emptyDraft = (): Draft => ({
    id: null,
    title: "",
    slug: "",
    excerpt: "",
    cover_image_url: "",
    cover_image_alt: "",
    content: emptyContent,
    category_id: "",
    author_id: "",
    status: "draft",
    hasPendingDraft: false,
    seo_title: "",
    seo_description: ""
})
const emptyCategoryDraft = (): CategoryDraft => ({id: null, name: "", active: true})

function getCsrf() {
    return typeof window === "undefined" ? "" : window.sessionStorage.getItem("blog_csrf") ?? ""
}

const RichEditor = dynamic(() => import("@/components/blog/blog-rich-editor"), {
    ssr: false,
    loading: () => <div className="min-h-80 animate-pulse bg-muted/20" aria-label="Cargando editor"/>
})

export function BlogAdmin() {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<AdminUser | null>(null)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginError, setLoginError] = useState("")
    const [loginPending, setLoginPending] = useState(false)
    const [sessionError, setSessionError] = useState("")
    const [posts, setPosts] = useState<AdminPost[]>([])
    const [authors, setAuthors] = useState<BlogAuthor[]>([])
    const [categories, setCategories] = useState<BlogCategory[]>([])
    const [draft, setDraft] = useState<Draft>(emptyDraft())
    const [dirty, setDirty] = useState(false)
    const [saving, setSaving] = useState(false)
    const [uploadingCover, setUploadingCover] = useState(false)
    const [saveMessage, setSaveMessage] = useState("")
    const [editorError, setEditorError] = useState("")
    const [showPreview, setShowPreview] = useState(false)
    const [categoryDraft, setCategoryDraft] = useState<CategoryDraft>(emptyCategoryDraft())
    const [categorySaving, setCategorySaving] = useState(false)
    const [categoryError, setCategoryError] = useState("")

    const request = async <T, >(path: string, init?: RequestInit) => adminFetch<T>(path, {
        ...init,
        headers: {...(init?.headers ?? {}), ...(init?.method && init.method !== "GET" ? {"X-Blog-CSRF": getCsrf()} : {})}
    })

    const loadAdmin = async () => {
        setSessionError("")
        try {
            const session = await adminFetch<{ data: AdminUser; csrfToken?: string }>("/blog/admin/session")
            if (session.csrfToken) window.sessionStorage.setItem("blog_csrf", session.csrfToken)
            setUser(session.data)
            const [postsResponse, categoriesResponse, authorsResponse] = await Promise.all([
                adminFetch<{ data: AdminPost[] }>("/blog/admin/posts"),
                adminFetch<{ data: BlogCategory[] }>("/blog/admin/categories"),
                adminFetch<{ data: BlogAuthor[] }>("/blog/admin/authors"),
            ])
            setPosts(postsResponse.data)
            setCategories(categoriesResponse.data)
            setAuthors(authorsResponse.data)
            setDraft(emptyDraft())
        } catch (error) {
            if (error instanceof BlogApiError && error.status === 401) {
                window.sessionStorage.removeItem("blog_csrf")
                setUser(null)
                setSessionError("El API respondió 401: la cookie de sesión no llegó al navegador. Revisa CORS, credenciales y SameSite del API.")
            }
            throw error
        }
    }

    useEffect(() => {
        loadAdmin().catch(() => {
        }).finally(() => setLoading(false))
    }, [])

    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoginError("");
        setSessionError("");
        setLoginPending(true)
        try {
            const response = await adminFetch<{
                data: AdminUser;
                csrfToken: string
            }>("/blog/admin/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username: email, password})
            })
            window.sessionStorage.setItem("blog_csrf", response.csrfToken)
            try {
                await loadAdmin()
            } catch (error) {
                if (error instanceof BlogApiError && error.status === 401) {
                    setLoginError("El login fue correcto, pero la sesión no llegó al navegador. Revisa CORS, credenciales y SameSite del API.")
                } else {
                    setLoginError("No se pudo cargar el editor. Inténtalo de nuevo.")
                }
            }
        } catch {
            setLoginError("No se pudo iniciar sesión. Verifica tus credenciales o solicita acceso al administrador.")
        } finally {
            setLoginPending(false)
        }
    }

    const logout = async () => {
        try {
            await request("/blog/admin/logout", {method: "POST"})
        } catch { /* la sesión local se limpia incluso si el servidor ya la expiró */
        }
        window.sessionStorage.removeItem("blog_csrf");
        setUser(null)
    }

    const editPost = (post: AdminPost) => {
        const editable = post.draft ?? post
        setDraft({
            id: post.id,
            title: editable.title,
            slug: editable.slug,
            excerpt: editable.excerpt ?? "",
            cover_image_url: editable.coverImage?.url ?? "",
            cover_image_alt: editable.coverImage?.alt ?? "",
            content: normalizeBlogContent(editable.content),
            author_id: editable.author?.id ?? "",
            category_id: editable.category?.id ?? "",
            status: post.status ?? "draft",
            hasPendingDraft: Boolean(post.hasDraft || post.draft),
            seo_title: editable.seoTitle ?? "",
            seo_description: editable.seoDescription ?? ""
        })
        setDirty(false);
        setSaveMessage("");
        setShowPreview(false)
    }

    const updateDraft = (patch: Partial<Draft>) => {
        setDraft((current) => ({...current, ...patch}));
        setDirty(true);
        setSaveMessage("")
    }

    const editCategory = (category: BlogCategory) => {
        setCategoryDraft({id: category.id, name: category.name, active: category.active !== false})
        setCategoryError("")
    }

    const saveCategory = async (event: React.FormEvent) => {
        event.preventDefault()
        const name = categoryDraft.name.trim()
        if (!name) {
            setCategoryError("Escribe un nombre para la categoría.")
            return
        }

        setCategorySaving(true)
        setCategoryError("")
        try {
            const path = categoryDraft.id ? `/blog/admin/categories/${categoryDraft.id}` : "/blog/admin/categories"
            const response = await request<{ data: BlogCategory }>(path, {
                method: categoryDraft.id ? "PUT" : "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name, active: categoryDraft.active}),
            })
            const saved = {...response.data, active: response.data.active !== false}
            setCategories((current) => categoryDraft.id ? current.map((category) => category.id === saved.id ? saved : category) : [...current, saved].sort((a, b) => a.name.localeCompare(b.name, "es")))
            setCategoryDraft(emptyCategoryDraft())
            setSaveMessage(categoryDraft.id ? "Categoría actualizada" : "Categoría creada")
        } catch (error) {
            setCategoryError(error instanceof BlogApiError ? error.message : "No se pudo guardar la categoría.")
        } finally {
            setCategorySaving(false)
        }
    }

    const toggleCategory = async (category: BlogCategory) => {
        setCategorySaving(true)
        setCategoryError("")
        try {
            const response = await request<{ data: BlogCategory }>(`/blog/admin/categories/${category.id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({name: category.name, active: category.active === false}),
            })
            setCategories((current) => current.map((item) => item.id === category.id ? {
                ...response.data,
                active: response.data.active !== false
            } : item))
            setSaveMessage(category.active === false ? "Categoría activada" : "Categoría desactivada")
        } catch (error) {
            setCategoryError(error instanceof BlogApiError ? error.message : "No se pudo cambiar el estado de la categoría.")
        } finally {
            setCategorySaving(false)
        }
    }

    const deletePost = async () => {
        if (!draft.id || !window.confirm("¿Eliminar este artículo? Podrás recuperarlo desde una copia de seguridad, pero no aparecerá en el editor.")) return
        try {
            await request(`/blog/admin/posts/${draft.id}`, {method: "DELETE"})
            setPosts((current) => current.filter((post) => post.id !== draft.id))
            setDraft(emptyDraft());
            setDirty(false);
            setSaveMessage("Artículo eliminado")
        } catch {
            setEditorError("No se pudo eliminar el artículo.")
        }
    }

    const savePost = async (status = draft.status, silent = false, preservePublished = draft.status === "published" && status === "draft") => {
        if (!draft.title.trim()) {
            if (!silent) setEditorError("Añade un título antes de guardar.");
            return
        }
        if (!draft.author_id) {
            if (!silent) setEditorError("Selecciona un autor antes de guardar.");
            return
        }
        setSaving(true);
        setEditorError("")
        const payload = {
            title: draft.title.trim(),
            excerpt: draft.excerpt,
            cover_image_url: draft.cover_image_url || null,
            cover_image_alt: draft.cover_image_alt || null,
            content: normalizeBlogContent(draft.content),
            author_id: draft.author_id,
            category_id: draft.category_id || null,
            status,
            preserve_published: preservePublished,
            seo_title: draft.seo_title || null,
            seo_description: draft.seo_description || null
        }
        try {
            const response = await request<{
                data: AdminPost
            }>(draft.id ? `/blog/admin/posts/${draft.id}` : "/blog/admin/posts", {
                method: draft.id ? "PUT" : "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(payload)
            })
            const saved = response.data
            setDraft((current) => ({
                ...current,
                id: saved.id,
                slug: saved.slug,
                status: saved.status ?? status,
                hasPendingDraft: preservePublished ? true : Boolean(saved.hasDraft || saved.draft),
            }))
            setPosts((current) => [saved, ...current.filter((post) => post.id !== saved.id)])
            setDirty(false);
            setSaveMessage(silent ? "Borrador guardado automáticamente" : status === "published" ? "Artículo publicado" : preservePublished ? "Cambios guardados como borrador. La versión publicada no ha cambiado." : "Borrador guardado")
        } catch (error) {
            setEditorError(error instanceof BlogApiError ? error.message : "No se pudo guardar el artículo. Inténtalo de nuevo.")
        } finally {
            setSaving(false)
        }
    }

    const savePostRef = useRef(savePost)
    savePostRef.current = savePost

    useEffect(() => {
        if (!user || !draft.id || !dirty) return
        const timeout = window.setTimeout(() => {
            savePostRef.current("draft", true)
        }, 1800)
        return () => window.clearTimeout(timeout)
    }, [draft, dirty, user])

    const uploadImage = async (file: File) => {
        const form = new FormData();
        form.append("image", file)
        try {
            const response = await request<{ data: { url: string } }>("/blog/admin/images", {
                method: "POST",
                body: form
            })
            setSaveMessage("Imagen cargada; recuerda guardar el artículo")
            return response.data.url
        } catch {
            setEditorError("No se pudo cargar la imagen. Usa JPG, PNG o WebP de máximo 5 MB.")
        }
        return ""
    }

    const uploadFile = async (file: File): Promise<BlogAttachment | null> => {
        const form = new FormData();
        form.append("file", file)
        try {
            const response = await request<{ data: BlogAttachment }>("/blog/admin/files", {method: "POST", body: form})
            setSaveMessage("Archivo cargado; recuerda guardar el artículo")
            return response.data
        } catch {
            setEditorError("No se pudo cargar el archivo. Usa PDF, Word, Excel o PowerPoint de máximo 10 MB.")
        }
        return null
    }

    const uploadCover = async (file: File) => {
        setUploadingCover(true)
        try {
            const url = await uploadImage(file)
            if (url) updateDraft({cover_image_url: url, cover_image_alt: draft.cover_image_alt || file.name})
        } finally {
            setUploadingCover(false)
        }
    }

    if (loading) return <div
        className="mx-auto flex max-w-7xl items-center justify-center gap-3 px-4 py-24 text-center text-muted-foreground"
        role="status" aria-live="polite"><LoaderCircle className="h-5 w-5 animate-spin text-primary"
                                                       aria-hidden="true"/>Comprobando sesión…</div>
    if (!user) return (
        <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-[#f3f8f1] px-4 py-16">
            <form onSubmit={login}
                  className="w-full max-w-md rounded-2xl border border-border bg-card p-7 shadow-xl md:p-9">

                <div className="mb-8"><p className="text-sm font-bold uppercase tracking-[0.2em] text-primary">Blog</p><h1 className="mt-3 font-display text-3xl font-bold">Iniciar sesión</h1><p

                    className="mt-2 text-muted-foreground">Acceso reservado a las personas autorizadas para publicar en
                    el blog.</p></div>
                <div className="space-y-5">
                    <div><label htmlFor="blog-email" className="mb-2 block text-sm font-semibold">Correo
                        electrónico</label><Input id="blog-email" name="username" type="email" autoComplete="username"
                                                  required value={email}
                                                  onChange={(event) => setEmail(event.target.value)}/></div>
                    <div><label htmlFor="blog-password"
                                className="mb-2 block text-sm font-semibold">Contraseña</label><Input id="blog-password"
                                                                                                      name="password"
                                                                                                      type="password"
                                                                                                      autoComplete="current-password"
                                                                                                      required
                                                                                                      value={password}
                                                                                                      onChange={(event) => setPassword(event.target.value)}/>
                    </div>
                </div>
                {sessionError ? <p role="status"
                                   className="mt-4 rounded-lg bg-amber-500/10 p-3 text-sm font-semibold text-amber-800">{sessionError}</p> : null}
                {loginError ?
                    <p role="alert" className="mt-4 text-sm font-semibold text-destructive">{loginError}</p> : null}
                <Button type="submit" className="mt-7 h-12 w-full" disabled={loginPending}
                        aria-busy={loginPending}>{loginPending ? <><LoaderCircle className="h-4 w-4 animate-spin"
                                                                                 aria-hidden="true"/>Comprobando
                    acceso…</> : "Entrar al editor"}</Button>
                <Link href="/blog"
                      className="mt-5 inline-flex min-h-11 items-center text-sm font-semibold text-primary hover:underline">←
                    Volver al blog</Link>
            </form>
        </div>
    )

    const currentTitle = draft.id ? "Editar artículo" : "Nuevo artículo"
    const startNewPost = () => {
        setDraft(emptyDraft())
        setDirty(false)
        setSaveMessage("")
        setEditorError("")
        setShowPreview(false)
    }

    return (
        <div className="min-h-[calc(100vh-5rem)] bg-[#f5f7f4] pb-16">
            <header className="border-b border-border bg-card">
                <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-5 sm:px-6 lg:px-8">
                    <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Edición</p><h1
                        className="mt-1 font-display text-2xl font-bold">Blog Los Olivos Cartagena</h1></div>
                    <div className="flex items-center gap-2"><span
                        className="hidden text-sm text-muted-foreground sm:inline">{formatBlogAuthor(user.name)}</span><Button
                        variant="outline" size="sm" onClick={logout}><LogOut className="h-4 w-4" aria-hidden="true"/>Salir</Button>
                    </div>
                </div>
            </header>
            <main className="mx-auto max-w-7xl space-y-6 px-4 py-7 sm:px-6 lg:px-8">
                <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
                         aria-labelledby="articles-heading">
                    <div
                        className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 md:px-7">
                        <div><h2 id="articles-heading" className="font-display text-xl font-bold">Artículos</h2></div>
                        <Button type="button" onClick={startNewPost}><Plus className="h-4 w-4" aria-hidden="true"/>Nuevo
                            artículo</Button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[760px] text-left text-sm">
                            <caption className="sr-only">Artículos del blog</caption>
                            <thead className="bg-muted/45 text-xs uppercase tracking-wide text-muted-foreground">
                            <tr>
                                <th scope="col" className="px-5 py-3 font-semibold md:px-7">Artículo</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Estado</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Categoría</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Autor</th>
                                <th scope="col" className="px-4 py-3 font-semibold">Fecha</th>
                                <th scope="col" className="px-5 py-3 text-right font-semibold md:px-7">Acción</th>
                            </tr>
                            </thead>
                            <tbody className="divide-y divide-border">
                            {posts.map((post) => <tr key={post.id}
                                                     className={post.id === draft.id ? "bg-primary/5" : "hover:bg-muted/25"}>
                                <td className="max-w-[280px] px-5 py-4 md:px-7">
                                    <button type="button" onClick={() => editPost(post)}
                                            className="block max-w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                        <span
                                            className="block truncate font-semibold text-foreground">{post.draft?.title || post.title || "Sin título"}</span><span
                                        className="mt-1 block truncate text-xs text-muted-foreground">{post.draft?.excerpt || post.excerpt || "Sin resumen"}</span>
                                    </button>
                                </td>
                                <td className="px-4 py-4"><div className="flex flex-wrap gap-1.5"><span
                                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${post.status === "published" ? "bg-primary/10 text-primary" : "bg-amber-500/12 text-amber-800"}`}>{post.status === "published" ? "Publicado" : "Borrador"}</span>{post.hasDraft ? <span className="inline-flex items-center rounded-full bg-amber-500/12 px-2.5 py-1 text-xs font-semibold text-amber-800">Borrador pendiente</span> : null}</div>
                                </td>
                                <td className="px-4 py-4 text-muted-foreground">{post.category?.name || "Sin categoría"}</td>
                                <td className="px-4 py-4 text-muted-foreground">{formatBlogAuthor((post.draft ?? post).author?.name || "Sin autor")}</td>
                                <td className="whitespace-nowrap px-4 py-4 text-muted-foreground">{formatBlogDate(post.publishedAt || post.updatedAt) || "Sin fecha"}</td>
                                <td className="px-5 py-4 text-right md:px-7"><Button type="button" variant="outline"
                                                                                     size="sm"
                                                                                     onClick={() => editPost(post)}><Pencil
                                    className="h-3.5 w-3.5" aria-hidden="true"/>Editar</Button></td>
                            </tr>)}
                            {!posts.length ? <tr>
                                <td colSpan={6} className="px-5 py-12 text-center text-muted-foreground md:px-7">Todavía
                                    no hay artículos. Crea el primero para comenzar.
                                </td>
                            </tr> : null}
                            </tbody>
                        </table>
                    </div>
                </section>

                <section className="rounded-2xl border border-border bg-card shadow-sm"
                         aria-labelledby="categories-heading">
                    <div className="flex flex-wrap items-center gap-3 border-b border-border px-5 py-4 md:px-7">
                        <div><h2 id="categories-heading" className="font-display text-xl font-bold">Categorías</h2>
                        </div>
                    </div>
                    <div className="grid gap-6 p-5 md:p-7 lg:grid-cols-[minmax(0,1fr)_280px]">
                        <div className="overflow-x-auto rounded-xl border border-border">
                            <table className="w-full min-w-[520px] text-left text-sm">
                                <caption className="sr-only">Categorías del blog</caption>
                                <thead className="bg-muted/45 text-xs uppercase tracking-wide text-muted-foreground">
                                <tr>
                                    <th scope="col" className="px-4 py-3 font-semibold">Nombre</th>
                                    <th scope="col" className="px-4 py-3 font-semibold">Slug</th>
                                    <th scope="col" className="px-4 py-3 font-semibold">Estado</th>
                                    <th scope="col" className="px-4 py-3 text-right font-semibold">Acciones</th>
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-border">{categories.map((category) => <tr
                                    key={category.id}>
                                    <td className="px-4 py-3 font-semibold">{category.name}</td>
                                    <td className="px-4 py-3 text-muted-foreground">{category.slug}</td>
                                    <td className="px-4 py-3"><span
                                        className={`text-xs font-semibold ${category.active === false ? "text-muted-foreground" : "text-primary"}`}>{category.active === false ? "Inactiva" : "Activa"}</span>
                                    </td>
                                    <td className="px-4 py-3 text-right"><span className="inline-flex gap-1"><Button
                                        type="button" variant="ghost" size="sm"
                                        className="group hover:bg-primary hover:text-white focus-visible:ring-primary"
                                        onClick={() => editCategory(category)}
                                        aria-label={`Editar ${category.name}`}><Pencil
                                        className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-white"
                                        aria-hidden="true"/></Button><Button type="button" variant="ghost" size="sm"
                                                                             className="group hover:bg-primary hover:text-white focus-visible:ring-primary"
                                                                             onClick={() => void toggleCategory(category)}
                                                                             disabled={categorySaving}
                                                                             aria-label={`${category.active === false ? "Activar" : "Desactivar"} ${category.name}`}><Power
                                        className={`h-4 w-4 transition-colors group-hover:text-white ${category.active === false ? "text-muted-foreground" : "text-primary"}`}
                                        aria-hidden="true"/></Button></span></td>
                                </tr>)}{!categories.length ? <tr>
                                    <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">No hay
                                        categorías creadas.
                                    </td>
                                </tr> : null}</tbody>
                            </table>
                        </div>
                        <form onSubmit={saveCategory} className="rounded-xl border border-border bg-muted/25 p-4">
                            <fieldset disabled={categorySaving} className="space-y-4">
                                <legend
                                    className="font-display font-bold">{categoryDraft.id ? "Editar categoría" : "Nueva categoría"}</legend>
                                <div><label htmlFor="category-name"
                                            className="mb-2 block text-sm font-semibold">Nombre</label><Input
                                    id="category-name" name="name" required maxLength={100} value={categoryDraft.name}
                                    onChange={(event) => {
                                        setCategoryDraft((current) => ({...current, name: event.target.value}));
                                        setCategoryError("")
                                    }}/></div>
                                <p className="text-xs leading-relaxed text-muted-foreground">El slug se genera
                                    automáticamente a partir del nombre.</p>{categoryError ? <p role="alert"
                                                                                                className="text-sm font-semibold text-destructive">{categoryError}</p> : null}
                                <div className="flex flex-wrap gap-2"><Button type="submit"
                                                                              disabled={categorySaving}>{categorySaving ?
                                    <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true"/> :
                                    <Save className="h-4 w-4"
                                          aria-hidden="true"/>}{categoryDraft.id ? "Guardar cambios" : "Añadir categoría"}</Button>{categoryDraft.id ?
                                    <Button type="button" variant="ghost" onClick={() => {
                                        setCategoryDraft(emptyCategoryDraft());
                                        setCategoryError("")
                                    }}><X className="h-4 w-4" aria-hidden="true"/>Cancelar</Button> : null}</div>
                            </fieldset>
                        </form>
                    </div>
                </section>

                <BlogAuthors authors={authors} request={request} onSaved={(author) => {
                    setAuthors((current) => [...current.filter((item) => item.id !== author.id), author].sort((a, b) => a.name.localeCompare(b.name, "es")))
                    setPosts((current) => current.map((post) => ({
                        ...post,
                        author: post.author?.id === author.id ? author : post.author,
                        draft: post.draft ? { ...post.draft, author: post.draft.author?.id === author.id ? author : post.draft.author } : post.draft,
                    })))
                }} />

                <section className="min-w-0 overflow-visible rounded-2xl border border-border bg-card shadow-sm"
                         aria-labelledby="editor-heading">
                    <div
                        className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 md:px-7">
                        <div><h2 id="editor-heading" className="font-display text-xl font-bold">{currentTitle}</h2><p
                            className="mt-1 text-sm text-muted-foreground"
                            aria-live="polite">{saving ? "Guardando…" : saveMessage || (dirty ? "Cambios sin guardar" : draft.hasPendingDraft ? "Borrador pendiente de publicación" : "Todos los cambios guardados")}</p>
                        </div>
                        <div className="flex flex-wrap gap-2"><Button type="button" variant="outline"
                                                                      onClick={() => setShowPreview((current) => !current)}>{showPreview ? "Ocultar vista previa" : "Vista previa"}</Button>{draft.id ?
                            <Button type="button" variant="destructive" onClick={deletePost}
                                    disabled={saving}>Eliminar</Button> : null}{draft.id && draft.status === "published" ? <Button type="button" variant="ghost"
                                                                                       onClick={() => savePost("draft", false, false)}
                                                                                       disabled={saving}>Despublicar</Button> : null}<Button type="button" variant="outline"
                                                                                       onClick={() => savePost("draft")}
                                                                                       disabled={saving}><Save
                            className="h-4 w-4"
                            aria-hidden="true"/>Guardar borrador
                        </Button><Button type="button" onClick={() => savePost("published")} disabled={saving}><Check
                            className="h-4 w-4" aria-hidden="true"/>Publicar</Button></div>
                    </div>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        savePost(draft.status)
                    }} className="space-y-6 p-5 md:p-7">
                        <div><label htmlFor="post-title"
                                    className="mb-2 block text-sm font-semibold">Título</label><Input id="post-title"
                                                                                                      name="title"
                                                                                                      required
                                                                                                      maxLength={180}
                                                                                                      value={draft.title}
                                                                                                      onChange={(event) => updateDraft({
                                                                                                          title: event.target.value,
                                                                                                          slug: draft.id ? draft.slug : slugify(event.target.value)
                                                                                                      })}
                                                                                                      className="h-12 text-lg"/>
                        </div>
                        <div><label htmlFor="post-excerpt"
                                    className="mb-2 block text-sm font-semibold">Resumen</label><Textarea
                            id="post-excerpt" name="excerpt" maxLength={500} value={draft.excerpt}
                            onChange={(event) => updateDraft({excerpt: event.target.value})}
                            placeholder="Una frase que invite a leer el artículo"/></div>
                        <div><label htmlFor="post-author" className="mb-2 block text-sm font-semibold">Autor</label>
                            <select id="post-author" name="author_id" required value={draft.author_id}
                                onChange={(event) => updateDraft({author_id: event.target.value ? Number(event.target.value) : ""})}
                                aria-describedby="post-author-help"
                                className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                                <option value="">Selecciona un autor</option>
                                {authors.map((author) => <option key={author.id} value={author.id}>{author.name}</option>)}
                            </select>
                        </div>
                        <div><label htmlFor="post-category"
                                    className="mb-2 block text-sm font-semibold">Categoría</label><select
                            id="post-category" name="category_id" value={draft.category_id}
                            onChange={(event) => updateDraft({category_id: event.target.value ? Number(event.target.value) : ""})}
                            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                            <option value="">Sin categoría</option>
                            {categories.filter((category) => category.active !== false || category.id === draft.category_id).map((category) =>
                                <option key={category.id}
                                        value={category.id}>{category.name}{category.active === false ? " (inactiva)" : ""}</option>)}
                        </select></div>
                        <div className="grid gap-5 rounded-xl bg-muted/40 p-4 md:grid-cols-[1fr_220px]">
                            <div><label htmlFor="post-cover" className="mb-2 block text-sm font-semibold">Imagen
                                principal</label><Input id="post-cover" name="cover_image_url" type="url"
                                                        placeholder="Se completa al cargar una imagen"
                                                        value={draft.cover_image_url}
                                                        onChange={(event) => updateDraft({cover_image_url: event.target.value})}/><label
                                htmlFor="post-cover-alt" className="mb-2 mt-4 block text-sm font-semibold">Texto
                                alternativo</label><Input id="post-cover-alt" name="cover_image_alt"
                                                          required={Boolean(draft.cover_image_url)}
                                                          value={draft.cover_image_alt}
                                                          onChange={(event) => updateDraft({cover_image_alt: event.target.value})}/>
                            </div>
                            <label aria-busy={uploadingCover}
                                   className={`flex min-h-28 items-center justify-center rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 text-center text-sm font-semibold text-primary ${uploadingCover ? "cursor-wait opacity-70" : "cursor-pointer hover:bg-primary/10"}`}>{uploadingCover ? <>
                                <LoaderCircle className="mr-2 h-5 w-5 animate-spin" aria-hidden="true"/>Subiendo
                                portada…</> : <><ImagePlus className="mr-2 h-5 w-5" aria-hidden="true"/>Cargar
                                portada</>}<input type="file" accept="image/jpeg,image/png,image/webp"
                                                  className="sr-only" disabled={uploadingCover} onChange={(event) => {
                                const file = event.target.files?.[0];
                                if (file) void uploadCover(file);
                                event.target.value = ""
                            }}/></label></div>
                        <div><div className="relative mb-2 flex items-center gap-2"><label className="text-sm font-semibold"
                                    htmlFor="post-content">Contenido</label><FieldHelp label="Contenido"><ol className="list-decimal space-y-1 pl-4"><li>El botón de tabla inserta una tabla 3 × 3; después puedes agregar o eliminar filas y columnas.</li><li>El botón de clip permite adjuntar PDF, Word, Excel o PowerPoint de hasta 10 MB para descargar.</li></ol></FieldHelp></div>
                            <p className="mb-2 text-xs text-muted-foreground">Al pegar desde Word se limpia el formato incompatible. Las imágenes deben cargarse con el botón de imagen.</p>
                            <div id="post-content" className="overflow-hidden rounded-xl border border-input">
                                <RichEditor content={draft.content} onChange={(content) => updateDraft({content})}
                                            onUpload={uploadImage} onUploadFile={uploadFile}/></div>
                        </div>
                        <div className="grid gap-5 rounded-xl border border-border p-4">
                            <div><div className="relative mb-2 flex items-center gap-2"><label htmlFor="post-seo-title" className="text-sm font-semibold">Título SEO <span className="font-normal text-muted-foreground">(opcional)</span></label><FieldHelp label="Título SEO">Se muestra como título en Google, en la pestaña del navegador y al compartir. Si lo dejas vacío, se usa el título del artículo.</FieldHelp></div><Input
                                id="post-seo-title" name="seo_title" maxLength={180} value={draft.seo_title}
                                onChange={(event) => updateDraft({seo_title: event.target.value})}/></div>
                            <div><div className="relative mb-2 flex items-center gap-2"><label htmlFor="post-seo-description" className="text-sm font-semibold">Descripción SEO <span className="font-normal text-muted-foreground">(opcional)</span></label><FieldHelp label="Descripción SEO">Es el resumen que Google y las redes pueden mostrar debajo del título. Si queda vacío, se usa el resumen del artículo.</FieldHelp></div><Textarea
                                id="post-seo-description" name="seo_description" maxLength={255}
                                value={draft.seo_description}
                                onChange={(event) => updateDraft({seo_description: event.target.value})}/></div>
                        </div>
                        {editorError ? <p role="alert"
                                          className="rounded-lg bg-destructive/10 p-3 text-sm font-semibold text-destructive">{editorError}</p> : null}
                    </form>
                    {showPreview ?
                        <section aria-label="Vista previa" className="border-t border-border bg-[#f3f8f1] p-5 md:p-7"><p
                            className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary">Vista previa del
                            artículo</p><h3
                            className="font-display text-3xl font-bold">{draft.title || "Sin título"}</h3>
                            <p className="mt-2 text-sm text-muted-foreground">Por {authors.find((author) => author.id === draft.author_id)?.name || "Sin autor"}</p>
                            <div className="mt-5 rounded-xl bg-card p-5 md:p-8"><BlogContent
                                key={JSON.stringify(draft.content)} content={draft.content}/></div>
                        </section> : null}
                </section>
            </main>
        </div>
    )
}
