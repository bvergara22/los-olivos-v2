export const BLOG_API_URL = (process.env.NEXT_PUBLIC_BLOG_API_URL ?? "https://portalapi.losolivoscartagena.com/api").replace(/\/$/, "")

export type BlogCategory = { id: number; name: string; slug: string; active?: boolean }
export type BlogAuthor = { id: number; name: string }
export type BlogImage = { url: string; alt: string }
export type BlogAttachment = { url: string; name: string; mime: string; size: number }

export type BlogNode = {
  type: string
  text?: string
  attrs?: Record<string, unknown>
  marks?: Array<{ type: string; attrs?: Record<string, unknown> }>
  content?: BlogNode[]
}

export type BlogDraft = {
  title: string
  slug: string
  excerpt: string | null
  coverImage: BlogImage | null
  publishedAt: null
  updatedAt?: string | null
  category: BlogCategory | null
  author: BlogAuthor | null
  content: BlogNode
  status: "draft"
  seoTitle?: string | null
  seoDescription?: string | null
}

export type BlogPost = {
  id: number
  title: string
  slug: string
  excerpt: string | null
  coverImage: BlogImage | null
  publishedAt: string | null
  updatedAt?: string | null
  category: BlogCategory | null
  author: BlogAuthor | null
  content?: BlogNode
  status?: "draft" | "published"
  seoTitle?: string | null
  seoDescription?: string | null
  hasDraft?: boolean
  draft?: BlogDraft | null
}

export type BlogPagination = {
  current_page: number
  last_page: number
  per_page: number
  total: number
}

export type BlogListResponse = { data: BlogPost[]; meta: BlogPagination }

export class BlogApiError extends Error {
  status: number

  constructor(status: number, message?: string) {
    super(message || `Blog API responded with ${status}`)
    this.name = "BlogApiError"
    this.status = status
  }
}

async function apiFetch<T>(path: string, init?: RequestInit, base = BLOG_API_URL): Promise<T> {
  const response = await fetch(`${base}${path}`, {
    ...init,
    headers: { Accept: "application/json", ...(init?.headers ?? {}) },
  })

  if (!response.ok) {
    const body = await response.json().catch(() => null) as { message?: string } | null
    throw new BlogApiError(response.status, body?.message)
  }
  return response.json() as Promise<T>
}

export async function getBlogPosts(page = 1, category?: string): Promise<BlogListResponse> {
  const search = new URLSearchParams({ page: String(page), per_page: "9" })
  if (category) search.set("category", category)

  try {
    return await apiFetch<BlogListResponse>(`/blog/posts?${search.toString()}`, { cache: "no-store" })
  } catch {
    return { data: [], meta: { current_page: page, last_page: page, per_page: 9, total: 0 } }
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const response = await apiFetch<{ data: BlogPost }>(`/blog/posts/${encodeURIComponent(slug)}`, { cache: "no-store" })
    return response.data
  } catch {
    return null
  }
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  try {
    const response = await apiFetch<{ data: BlogCategory[] }>("/blog/categories", { cache: "no-store" })
    return response.data
  } catch {
    return []
  }
}

export async function getLatestBlogPosts(limit = 3): Promise<BlogPost[]> {
  const response = await getBlogPosts(1)
  return response.data.slice(0, limit)
}

export function formatBlogDate(value: string | null | undefined) {
  if (!value) return ""
  return new Intl.DateTimeFormat("es-CO", { dateStyle: "long" }).format(new Date(value))
}

export function formatBlogAuthor(value: string) {
  return value
    .trim()
    .toLocaleLowerCase("es-CO")
    .split(/(\s+|-|['’])/g)
    .map((part) => {
      if (!part || /^[\s-'’]+$/.test(part)) return part
      return part.charAt(0).toLocaleUpperCase("es-CO") + part.slice(1)
    })
    .join("")
}

export function slugify(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

export async function adminFetch<T>(path: string, init?: RequestInit): Promise<T> {
  const isAdminPath = /^\/blog\/admin(?=\/|$)/.test(path)
  const useSameOriginProxy = typeof window !== "undefined" && isAdminPath
  const proxyPath = path.replace(/^\/blog\/admin(?=\/|$)/, "/api/blog/admin")
  return apiFetch<T>(useSameOriginProxy ? proxyPath : path, {
    credentials: "include",
    ...init,
    headers: { Accept: "application/json", ...(init?.headers ?? {}) },
  }, useSameOriginProxy ? "" : BLOG_API_URL)
}
