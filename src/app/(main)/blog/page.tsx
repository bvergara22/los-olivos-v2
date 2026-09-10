import { BlogCard } from "@/components/blog/blog-card"
import { BlogHero } from "@/components/blog/blog-hero"
import { getBlogCategories, getBlogPosts } from "@/lib/blog"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog",
  description: "Centro de contenido y novedades de Los Olivos Cartagena para acompañarte en cada etapa.",
  alternates: { canonical: "/blog" },
}

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  "medios-sociales": "Descubre nuestras publicaciones más destacadas, tendencias y momentos compartidos en redes sociales.",
  "pagina-web": "Instructivos y guías paso a paso para navegar nuestra web y aprovechar al máximo cada una de sus funciones.",
  "portal-web": "Guías prácticas para gestionar tus trámites en línea, descargar documentos y sacar el máximo provecho a tu portal.",
  "uge-duelo": "Un espacio reflexivo con orientación, lecturas y herramientas para acompañar los procesos de pérdida y sanación emocional.",
  "uge-vida": "Ideas e inspiración para celebrar el presente, fortalecer los lazos familiares y cultivar tu salud física y emocional.",
}

type BlogPageProps = { searchParams?: Promise<{ page?: string; category?: string }> }

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = (await searchParams) ?? {}
  const page = Math.max(Number(params.page ?? "1") || 1, 1)
  const category = params.category
  const [{ data: posts, meta }, categories] = await Promise.all([getBlogPosts(page, category), getBlogCategories()])
  const [featured, ...rest] = posts

  const categoryDescription = category ? CATEGORY_DESCRIPTIONS[category] : null

  return (
    <div className="bg-background pb-20">
      <BlogHero />

      <div className="mx-auto max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">
        <nav aria-label="Filtrar por categoría" className="mb-6 flex gap-2 overflow-x-auto pb-2">
          <Link href="/blog" className={`inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 text-sm font-semibold transition-colors ${!category ? "border-primary bg-primary text-white" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"}`}>Todos</Link>
          {categories.map((item) => (
            <Link key={item.id} href={`/blog?category=${encodeURIComponent(item.slug)}`} className={`inline-flex min-h-10 shrink-0 items-center rounded-full border px-4 text-sm font-semibold transition-colors ${category === item.slug ? "border-primary bg-primary text-white" : "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary"}`}>
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Descripción de categoría seleccionada */}
        {categoryDescription && (
          <div className="mb-8 px-5 py-4">
            <p className="font-display text-base font-bold leading-relaxed text-foreground md:text-lg">{categoryDescription}</p>
          </div>
        )}

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
            {Array.from({ length: meta.last_page }, (_, index) => index + 1).map((item) => (
              <Link key={item} href={`/blog?page=${item}${category ? `&category=${encodeURIComponent(category)}` : ""}`} aria-current={item === meta.current_page ? "page" : undefined} className={`inline-flex h-10 min-w-10 items-center justify-center rounded-full border px-3 text-sm font-semibold ${item === meta.current_page ? "border-primary bg-primary text-white" : "border-border hover:border-primary hover:text-primary"}`}>
                {item}
              </Link>
            ))}
          </nav>
        ) : null}
      </div>
    </div>
  )
}
