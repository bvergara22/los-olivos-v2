import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getLatestBlogPosts } from "@/lib/blog"
import { BlogCard } from "@/components/blog/blog-card"

export async function BlogLatest() {
  const posts = await getLatestBlogPosts(3)

  return (
    <section className="bg-background py-14 md:py-20" aria-labelledby="latest-blog-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-4 md:mb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="text-3xl text-primary md:text-4xl">Historias que acompañan</span>
            <h2 id="latest-blog-heading" className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">Últimos artículos</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">Ideas, recursos y noticias para cuidar lo que más importa.</p>
          </div>
          <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Ver todos <ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        {posts.length ? (
          <div className="grid gap-5 md:grid-cols-3">{posts.map((post) => <BlogCard key={post.id} post={post} />)}</div>
        ) : (
          <div className="rounded-2xl border border-dashed border-primary/30 bg-primary/5 p-8 text-center text-muted-foreground">Pronto encontrarás aquí nuevos artículos de Los Olivos Cartagena.</div>
        )}
      </div>
    </section>
  )
}
