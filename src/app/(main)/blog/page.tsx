import { BlogCard } from "@/components/blog/blog-card"
import { getBlogCategories, getBlogPosts } from "@/lib/blog"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog",
  description: "Artículos, recursos y noticias de Los Olivos Cartagena para acompañarte en cada etapa.",
  alternates: { canonical: "/blog" },
}

type BlogPageProps = { searchParams?: Promise<{ page?: string; category?: string }> }

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = (await searchParams) ?? {}
  const page = Math.max(Number(params.page ?? "1") || 1, 1)
  const category = params.category
  const [{ data: posts, meta }, categories] = await Promise.all([getBlogPosts(page, category), getBlogCategories()])
  const [featured, ...rest] = posts

  return (
    <div className="bg-background pb-20">
      <section className="relative overflow-hidden bg-[#f2faf6] pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[#b4e379]/35 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-2xl text-primary md:text-3xl">Historias que acompañan</p>
          <h1 className="max-w-4xl font-display text-4xl font-bold leading-[1.12] tracking-[-0.02em] text-foreground text-balance md:text-6xl">Palabras para cuidar, recordar y seguir adelante.</h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">Un espacio de historias, orientación y novedades para acompañar a las familias del Caribe.</p>
        </div>
        <div className="absolute -bottom-px left-0 right-0 text-background" aria-hidden="true">
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-full sm:h-10 md:h-12" preserveAspectRatio="none"><path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7366 960 46.5083C1120 42.2805 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" /></svg>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <nav aria-label="Filtrar por categoría" className="mb-10 flex gap-2 overflow-x-auto pb-2">
          <Link href="/blog" className={`inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 text-sm font-semibold transition-colors ${!category ? "border-primary bg-primary text-white" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"}`}>Todos</Link>
          {categories.map((item) => <Link key={item.id} href={`/blog?category=${encodeURIComponent(item.slug)}`} className={`inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 text-sm font-semibold transition-colors ${category === item.slug ? "border-primary bg-primary text-white" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"}`}>{item.name}</Link>)}
        </nav>

        {featured ? (
          <div className="space-y-5">
            <BlogCard post={featured} featured />
            {rest.length ? <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{rest.map((post) => <BlogCard key={post.id} post={post} />)}</div> : null}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-12 text-center"><h2 className="font-display text-2xl font-bold">Aún no hay artículos publicados</h2><p className="mt-2 text-muted-foreground">Vuelve pronto para descubrir nuestras novedades.</p></div>
        )}

        {meta.last_page > 1 ? (
          <nav aria-label="Paginación del blog" className="mt-10 flex items-center justify-center gap-2">
            {Array.from({ length: meta.last_page }, (_, index) => index + 1).map((item) => <Link key={item} href={`/blog?page=${item}${category ? `&category=${encodeURIComponent(category)}` : ""}`} aria-current={item === meta.current_page ? "page" : undefined} className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-semibold ${item === meta.current_page ? "border-primary bg-primary text-white" : "border-border hover:border-primary hover:text-primary"}`}>{item}</Link>)}
          </nav>
        ) : null}
      </div>
    </div>
  )
}
