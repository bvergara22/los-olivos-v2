const FALLBACK_SITE_URL = process.env.NODE_ENV === "production"
  ? "https://losolivoscartagena.com"
  : "http://localhost:3000"

function normalizeSiteUrl(value: string) {
  try {
    const parsed = new URL(value)
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return FALLBACK_SITE_URL
    return parsed.origin
  } catch {
    return FALLBACK_SITE_URL
  }
}

export const SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_SITE_URL)

export function absoluteSiteUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`
  return new URL(normalizedPath, `${SITE_URL}/`).toString()
}
