import { getBlogPosts } from "@/lib/blog"
import { absoluteSiteUrl } from "@/lib/site-url"
import type { MetadataRoute } from "next"

export const dynamic = "force-dynamic"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const first = await getBlogPosts(1)
  const posts = [...first.data]
  for (let page = 2; page <= first.meta.last_page; page += 1) {
    const next = await getBlogPosts(page)
    posts.push(...next.data)
  }

  return [
    { url: absoluteSiteUrl("/"), lastModified: new Date() },
    { url: absoluteSiteUrl("/blog"), lastModified: new Date() },
    ...posts.map((post) => ({ url: absoluteSiteUrl(`/blog/${post.slug}`), lastModified: post.updatedAt ? new Date(post.updatedAt) : post.publishedAt ? new Date(post.publishedAt) : new Date() })),
  ]
}
