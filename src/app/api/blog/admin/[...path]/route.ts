import { NextRequest, NextResponse } from "next/server"

const apiUrl = (process.env.NEXT_PUBLIC_BLOG_API_URL ?? "https://portalapi.losolivoscartagena.com/api").replace(/\/$/, "")

type RouteContext = { params: Promise<{ path: string[] }> }

async function proxy(request: NextRequest, { params }: RouteContext) {
  const segments = (await params).path ?? []
  const target = `${apiUrl}/blog/admin/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`
  const headers = new Headers(request.headers)
  headers.delete("host")
  headers.delete("content-length")
  headers.delete("origin")

  const body = request.method === "GET" || request.method === "HEAD" ? undefined : await request.arrayBuffer()
  const response = await fetch(target, { method: request.method, headers, body, redirect: "manual", cache: "no-store" })
  const responseHeaders = new Headers(response.headers)
  responseHeaders.delete("content-encoding")
  responseHeaders.delete("content-length")
  responseHeaders.delete("transfer-encoding")

  const getSetCookie = (response.headers as Headers & { getSetCookie?: () => string[] }).getSetCookie
  const setCookies = getSetCookie ? getSetCookie.call(response.headers) : []
  responseHeaders.delete("set-cookie")
  for (const cookie of setCookies) responseHeaders.append("set-cookie", cookie)

  return new NextResponse(response.body, { status: response.status, statusText: response.statusText, headers: responseHeaders })
}

export const GET = proxy
export const POST = proxy
export const PUT = proxy
export const DELETE = proxy
