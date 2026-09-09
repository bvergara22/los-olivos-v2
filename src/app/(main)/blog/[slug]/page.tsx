import { BlogComments } from "@/components/blog/blog-comments"
import { BlogContent } from "@/components/blog/blog-renderer"
import { BlogShare } from "@/components/blog/blog-share"
import { formatBlogAuthor, formatBlogDate, getBlogPost } from "@/lib/blog"
import { absoluteSiteUrl } from "@/lib/site-url"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

type BlogArticleProps = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: BlogArticleProps): Promise<Metadata> {
  const post = await getBlogPost((await params).slug)
  if (!post) return { title: "Artículo no encontrado" }
  const articleUrl = absoluteSiteUrl(`/blog/${post.slug}`)
  const description = post.seoDescription || post.excerpt || "Artículo de Los Olivos Cartagena"
  return {
    title: post.seoTitle || post.title,
    description,
    alternates: { canonical: articleUrl },
    openGraph: { type: "article", title: post.seoTitle || post.title, description, publishedTime: post.publishedAt ?? undefined, images: post.coverImage ? [{ url: post.coverImage.url, alt: post.coverImage.alt }] : undefined },
    twitter: { card: "summary_large_image", title: post.seoTitle || post.title, description, images: post.coverImage ? [post.coverImage.url] : undefined },
  }
}

export default async function BlogArticlePage({ params }: BlogArticleProps) {
  const post = await getBlogPost((await params).slug)
  if (!post) notFound()
  const articleUrl = absoluteSiteUrl(`/blog/${post.slug}`)
  const jsonLd = JSON.stringify({ "@context": "https://schema.org", "@type": "Article", headline: post.title, description: post.seoDescription || post.excerpt, datePublished: post.publishedAt, dateModified: post.updatedAt || post.publishedAt, author: post.author ? { "@type": "Person", name: formatBlogAuthor(post.author.name) } : undefined, image: post.coverImage?.url, mainEntityOfPage: articleUrl }).replace(/</g, "\\u003c")

  return (
    <article className="bg-background pb-20 md:pb-24">
      <header className="relative overflow-hidden bg-[#f2faf6] pb-20 pt-10 md:pb-28 md:pt-14">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#b4e379]/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">← <span>Volver al blog</span></Link>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold text-primary">{post.category?.name ?? "Blog"}</span>
            <span className="h-1 w-1 rounded-full bg-primary/35" aria-hidden="true" />
            <time dateTime={post.publishedAt ?? undefined} className="text-sm font-medium text-muted-foreground">{formatBlogDate(post.publishedAt)}</time>
          </div>
          <h1 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.12] tracking-[-0.02em] text-foreground text-balance sm:text-5xl md:text-6xl">{post.title}</h1>
          {post.excerpt ? <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{post.excerpt}</p> : null}
          {post.author ? <p className="mt-7 text-sm text-muted-foreground">Por <span className="font-semibold text-foreground">{formatBlogAuthor(post.author.name)}</span></p> : null}
        </div>
        <div className="absolute -bottom-px left-0 right-0 text-background" aria-hidden="true">
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-full sm:h-10 md:h-12" preserveAspectRatio="none"><path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7366 960 46.5083C1120 42.2805 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" /></svg>
        </div>
      </header>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {post.coverImage ? <div className="relative -mt-10 aspect-[16/8] overflow-hidden rounded-2xl bg-primary/10 shadow-lg md:-mt-16"><Image src={post.coverImage.url} alt={post.coverImage.alt} fill priority sizes="(max-width: 768px) 100vw, 1152px" className="object-cover" /></div> : null}
        <div className="mx-auto max-w-3xl pt-12 md:pt-16"><BlogContent content={post.content} />
          <BlogShare title={post.title} url={articleUrl} />
          <div className="mt-14 border-t border-border pt-7"><Link href="/blog" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">← <span>Seguir leyendo en el blog</span></Link></div>
          <BlogComments />
        </div>
      </div>

      <script type="application/ld+json">{jsonLd}</script>
    </article>
  )
}
