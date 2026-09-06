import type { BlogNode } from "./blog"

export const BLOG_FONT_SIZES = ["12px", "14px", "16px", "18px", "24px", "32px"] as const

export function normalizeFontSize(value: unknown): string | null {
  if (typeof value !== "string") return null
  const match = value.trim().match(/^(\d+(?:\.\d+)?)(px|pt)$/i)
  if (!match) return null
  const pixels = Number(match[1]) * (match[2].toLowerCase() === "pt" ? 4 / 3 : 1)
  return BLOG_FONT_SIZES.reduce((best, size) => Math.abs(parseInt(size) - pixels) < Math.abs(parseInt(best) - pixels) ? size : best)
}

export function normalizeTextColor(value: unknown): string | null {
  if (typeof value !== "string") return null
  const color = value.trim()
  if (/^#[0-9a-f]{6}$/i.test(color)) return color.toLowerCase()
  if (/^#[0-9a-f]{3}$/i.test(color)) return `#${color.slice(1).split("").map((part) => part + part).join("")}`.toLowerCase()
  const rgb = color.match(/^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i)
  if (!rgb || rgb.slice(1).some((part) => Number(part) > 255)) return null
  return `#${rgb.slice(1).map((part) => Number(part).toString(16).padStart(2, "0")).join("")}`
}

// Also normalize previously saved documents before submitting them. The API
// remains responsible for rejecting unsafe URLs, nodes and unexpected attrs.
export function normalizeBlogContent(node: BlogNode): BlogNode {
  const clean = { ...node }
  if (node.type === "heading" && typeof node.attrs?.level === "number") {
    clean.attrs = { ...node.attrs, level: node.attrs.level <= 2 ? 2 : 3 }
  }
  if (node.marks) {
    clean.marks = node.marks.map((mark) => mark.type === "textStyle" ? {
      ...mark,
      attrs: { ...mark.attrs, fontSize: normalizeFontSize(mark.attrs?.fontSize), color: normalizeTextColor(mark.attrs?.color) },
    } : mark)
    // ProseMirror may carry inline formatting across a pasted line break.
    if (node.type === "hardBreak") delete clean.marks
  }
  if (node.content) clean.content = node.content.map(normalizeBlogContent)
  return clean
}

// Rebuild clipboard HTML with only the editor's supported markup. Parsing is
// detached; scripts, Office metadata, event handlers and local images never
// enter the editable document. Semantic text formatting is preserved.
export function cleanPastedBlogHTML(html: string): string {
  const source = new DOMParser().parseFromString(html, "text/html")
  const output = document.implementation.createHTMLDocument("")
  const allowed = new Set(["p", "div", "span", "br", "strong", "b", "em", "i", "u", "s", "strike", "h1", "h2", "h3", "h4", "h5", "h6", "ul", "ol", "li", "blockquote", "hr", "a", "img", "table", "tbody", "thead", "tfoot", "tr", "td", "th"])
  const blocked = new Set(["script", "style", "meta", "link", "iframe", "object", "embed", "svg", "math", "form", "input"])
  const copy = (node: Node, parent: Node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      parent.appendChild(output.createTextNode(node.textContent ?? ""))
      return
    }
    if (!(node instanceof HTMLElement) || blocked.has(node.localName)) return
    const tag = node.localName
    if (!allowed.has(tag)) {
      node.childNodes.forEach((child) => copy(child, parent))
      return
    }
    if (tag === "img" && !/^(\/blog\/|https:\/\/[^/]*digitaloceanspaces\.com\/blog\/)/i.test(node.getAttribute("src") ?? "")) return
    const element = output.createElement(/^h[1-6]$/.test(tag) ? (Number(tag[1]) <= 2 ? "h2" : "h3") : tag)
    const size = normalizeFontSize(node.style.fontSize)
    const color = normalizeTextColor(node.style.color)
    if (size) element.style.fontSize = size
    if (color) element.style.color = color
    if (node.style.fontWeight === "bold" || Number(node.style.fontWeight) >= 600) element.style.fontWeight = "bold"
    if (node.style.fontStyle === "italic") element.style.fontStyle = "italic"
    if (/^(underline|line-through)$/.test(node.style.textDecorationLine || node.style.textDecoration)) element.style.textDecoration = node.style.textDecorationLine || node.style.textDecoration
    if (["left", "center", "right", "justify"].includes(node.style.textAlign)) element.style.textAlign = node.style.textAlign
    if (tag === "a") {
      const href = node.getAttribute("href") ?? ""
      if (/^https?:\/\//i.test(href) && href.length <= 2048) {
        element.setAttribute("href", href)
        element.setAttribute("target", "_blank")
        element.setAttribute("rel", "noopener noreferrer")
      }
    }
    if (tag === "img") {
      for (const attr of ["src", "alt", "title"]) if (node.hasAttribute(attr)) element.setAttribute(attr, node.getAttribute(attr)!)
    }
    if (tag === "ol") {
      const start = Number(node.getAttribute("start") ?? 1)
      if (Number.isInteger(start) && start >= 1 && start <= 1000000) element.setAttribute("start", String(start))
    }
    if (tag === "td" || tag === "th") {
      for (const attr of ["colspan", "rowspan"]) {
        const value = Number(node.getAttribute(attr) ?? 1)
        if (Number.isInteger(value) && value >= 1 && value <= 50) element.setAttribute(attr, String(value))
      }
    }
    node.childNodes.forEach((child) => copy(child, element))
    parent.appendChild(element)
  }
  source.body.childNodes.forEach((node) => copy(node, output.body))
  return output.body.innerHTML
}
