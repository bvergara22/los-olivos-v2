import { ArticleHorizontalLayout } from "@/components/blog/article-horizontal-layout"
import { formatBlogAuthor, getBlogPost } from "@/lib/blog"
import { absoluteSiteUrl } from "@/lib/site-url"
import type { Metadata } from "next"
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
    <>
      <ArticleHorizontalLayout post={post} articleUrl={articleUrl} content={post.content!} />
      <script type="application/ld+json">{jsonLd}</script>
    </>
  )
}
