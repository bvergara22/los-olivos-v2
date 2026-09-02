import { ArrowUpRight, CalendarDays } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { formatBlogDate, type BlogPost } from "@/lib/blog"

export function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={`group overflow-hidden rounded-2xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/35 ${featured ? "md:grid md:grid-cols-[1.15fr_0.85fr]" : ""}`}>
      <Link href={`/blog/${post.slug}`} className={`relative block overflow-hidden bg-primary/10 ${featured ? "min-h-64 md:min-h-full" : "aspect-[16/10]"}`} aria-label={`Leer ${post.title}`}>
        {post.coverImage ? (
          <Image src={post.coverImage.url} alt={post.coverImage.alt} fill sizes={featured ? "(max-width: 768px) 100vw, 58vw" : "(max-width: 768px) 100vw, 33vw"} className="object-cover transition-transform duration-700 group-hover:scale-105" priority={featured} />
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(180,227,121,.65),transparent_42%),linear-gradient(135deg,#018c58,#165a47)]" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
      </Link>
      <div className={`flex flex-col ${featured ? "justify-center p-6 md:p-10" : "p-5"}`}>
        <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
          {post.category ? <span>{post.category.name}</span> : <span>Blog</span>}
          <span className="h-1 w-1 rounded-full bg-primary/50" aria-hidden="true" />
          <span className="inline-flex items-center gap-1.5 text-muted-foreground normal-case tracking-normal"><CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />{formatBlogDate(post.publishedAt)}</span>
        </div>
        <h2 className={`mt-3 font-display font-bold leading-tight text-foreground ${featured ? "text-2xl md:text-4xl" : "text-xl"}`}>
          <Link href={`/blog/${post.slug}`} className="outline-none transition-colors hover:text-primary focus-visible:text-primary">{post.title}</Link>
        </h2>
        {post.excerpt ? <p className={`mt-3 leading-relaxed text-muted-foreground ${featured ? "text-base md:text-lg" : "text-sm line-clamp-3"}`}>{post.excerpt}</p> : null}
        <Link href={`/blog/${post.slug}`} className="mt-5 inline-flex min-h-11 w-fit items-center gap-2 text-sm font-bold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          Leer artículo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
