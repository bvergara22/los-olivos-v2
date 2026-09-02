import type { BlogNode } from "@/lib/blog"
import Image from "next/image"
import { Download, FileText } from "lucide-react"
import { Fragment, type CSSProperties, type ReactNode } from "react"

const FONT_SIZES = new Set(["12px", "14px", "16px", "18px", "24px", "32px"])
const IMAGE_ALIGNMENTS = new Set(["left", "center", "right"])
const IMAGE_DIMENSION_MIN = 40
const IMAGE_DIMENSION_MAX = 8000
const ATTACHMENT_MAX_BYTES = 10 * 1024 * 1024

function safeTextColor(value: unknown) {
  if (typeof value !== "string") return null
  const color = value.trim()
  if (/^#[0-9a-f]{6}$/i.test(color)) return color.toLowerCase()
  if (/^#[0-9a-f]{3}$/i.test(color)) return `#${color.slice(1).split("").map((part) => `${part}${part}`).join("")}`.toLowerCase()
  return null
}

function safeDimension(value: unknown, fallback: number) {
  const parsed = typeof value === "number" ? value : typeof value === "string" && value.trim() ? Number(value) : NaN
  if (!Number.isFinite(parsed) || parsed <= 0) return fallback
  return Math.round(Math.min(IMAGE_DIMENSION_MAX, Math.max(IMAGE_DIMENSION_MIN, parsed)))
}

function safeTableSpan(value: unknown) {
  const parsed = typeof value === "number" ? value : typeof value === "string" && value.trim() ? Number(value) : NaN
  if (!Number.isInteger(parsed) || parsed < 1) return 1
  return Math.min(50, parsed)
}

function safeTableAlign(value: unknown): CSSProperties["textAlign"] {
  return value === "left" || value === "center" || value === "right" ? value : undefined
}

function safeHref(value: unknown) {
  return typeof value === "string" && /^https?:\/\//i.test(value) ? value : null
}

function safeAttachmentHref(value: unknown) {
  return typeof value === "string" && (/^\/blog\/files\//i.test(value) || /^https:\/\/[^/]*digitaloceanspaces\.com\/blog\/files\//i.test(value)) ? value : null
}

function safeAttachmentName(value: unknown) {
  if (typeof value !== "string") return "Descargar archivo"
  const name = value.replace(/[\u0000-\u001f\u007f]/g, "").trim().slice(0, 180)
  return name || "Descargar archivo"
}

function formatFileSize(value: unknown) {
  const size = typeof value === "number" && Number.isFinite(value) && value >= 0 ? Math.min(ATTACHMENT_MAX_BYTES, Math.round(value)) : 0
  if (!size) return "Archivo descargable"
  if (size < 1024) return `${size} B`
  if (size < 1024 * 1024) return `${Math.round(size / 1024)} KB`
  return `${(size / (1024 * 1024)).toFixed(1)} MB`
}

function renderInline(node: BlogNode, key: string): ReactNode {
  if (node.type === "hardBreak") return <br key={key} />
  if (node.type === "image") return renderImage(node, key)
  if (node.type === "file") return renderFile(node, key)
  if (node.type !== "text") return renderNode(node, key)

  const marks = node.marks ?? []
  const textParts = (node.text ?? "").split(/\r?\n/)
  let result: ReactNode = textParts.map((part, index) => <Fragment key={`${key}-line-${index}`}>{index ? <br /> : null}{part}</Fragment>)

  const textStyleMark = [...marks].reverse().find((mark) => mark.type === "textStyle")
  if (textStyleMark) {
    const style: CSSProperties = {}
    if (typeof textStyleMark.attrs?.fontSize === "string" && FONT_SIZES.has(textStyleMark.attrs.fontSize)) style.fontSize = textStyleMark.attrs.fontSize
    const color = safeTextColor(textStyleMark.attrs?.color)
    if (color) style.color = color
    if (Object.keys(style).length) result = <span style={style} key={`${key}-text-style`}>{result}</span>
  }
  for (const mark of marks) {
    if (mark.type === "textStyle") continue
    if (mark.type === "bold") result = <strong key={`${key}-bold`}>{result}</strong>
    if (mark.type === "italic") result = <em key={`${key}-italic`}>{result}</em>
    if (mark.type === "underline") result = <u key={`${key}-underline`}>{result}</u>
    if (mark.type === "strike") result = <s key={`${key}-strike`}>{result}</s>
    if (mark.type === "link") {
      const href = safeHref(mark.attrs?.href)
      result = href ? <a href={href} target="_blank" rel="noopener noreferrer" key={`${key}-link`}>{result}</a> : result
    }
  }
  return <span key={key}>{result}</span>
}

function renderFile(node: BlogNode, key: string) {
  const href = safeAttachmentHref(node.attrs?.href)
  if (!href) return null
  const name = safeAttachmentName(node.attrs?.name)
  return (
    <div key={key} className="blog-file">
      <a href={href} download={name} target="_blank" rel="noopener noreferrer" aria-label={`Descargar ${name}`}>
        <span className="blog-file-icon" aria-hidden="true"><FileText className="h-5 w-5" /></span>
        <span className="min-w-0 flex-1"><span className="blog-file-name">{name}</span><span className="blog-file-meta">{formatFileSize(node.attrs?.size)}</span></span>
        <Download className="h-5 w-5 shrink-0" aria-hidden="true" />
      </a>
    </div>
  )
}

function renderImage(node: BlogNode, key: string) {
  const src = typeof node.attrs?.src === "string" ? node.attrs.src : ""
  if (!src || (!src.startsWith("/blog/") && !/^https:\/\/[^\/]*digitaloceanspaces\.com\/blog\//i.test(src))) return null
  const alt = typeof node.attrs?.alt === "string" && node.attrs.alt ? node.attrs.alt : "Imagen del artículo"
  const alignment = typeof node.attrs?.textAlign === "string" && IMAGE_ALIGNMENTS.has(node.attrs.textAlign) ? node.attrs.textAlign : "center"
  const width = safeDimension(node.attrs?.width, 1200)
  const height = safeDimension(node.attrs?.height, 760)
  const alignmentClass = alignment === "left" ? "items-start" : alignment === "right" ? "items-end" : "items-center"
  return (
    <figure key={key} className={`my-10 flex w-full flex-col ${alignmentClass}`}>
      <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 768px) 100vw, 760px" className="h-auto max-w-full rounded-2xl object-cover" loading="lazy" />
      {typeof node.attrs?.title === "string" && node.attrs.title ? <figcaption className="px-4 py-3 text-center text-sm text-muted-foreground">{node.attrs.title}</figcaption> : null}
    </figure>
  )
}

function renderTableCell(node: BlogNode, key: string, header: boolean) {
  const children = (node.content ?? []).map((child, index) => renderInline(child, `${key}-${index}`))
  const attrs = node.attrs ?? {}
  const cellProps = {
    colSpan: safeTableSpan(attrs.colspan),
    rowSpan: safeTableSpan(attrs.rowspan),
    style: { textAlign: safeTableAlign(attrs.align) },
  }
  return header ? <th key={key} {...cellProps}>{children}</th> : <td key={key} {...cellProps}>{children}</td>
}

function renderTableRow(node: BlogNode, key: string) {
  const cells = (node.content ?? [])
    .filter((child) => child.type === "tableHeader" || child.type === "tableCell")
    .map((child, index) => renderTableCell(child, `${key}-${index}`, child.type === "tableHeader"))
  return <tr key={key}>{cells}</tr>
}

function renderTable(node: BlogNode, key: string) {
  const tableRows = (node.content ?? [])
  const rows = tableRows
    .filter((child) => child.type === "tableRow")
    .map((row, index) => renderTableRow(row, `${key}-${index}`))
  const firstRow = tableRows[0]
  const firstRowIsHeader = firstRow?.type === "tableRow" && firstRow.content?.some((cell) => cell.type === "tableHeader")
  const header = firstRowIsHeader ? rows.slice(0, 1) : []
  const body = firstRowIsHeader ? rows.slice(1) : rows

  return (
    <div key={key} className="blog-table-scroll">
      <table>
        {header.length ? <thead>{header}</thead> : null}
        <tbody>{body}</tbody>
      </table>
    </div>
  )
}

export function renderNode(node: BlogNode, key = "node"): ReactNode {
  const children = (node.content ?? []).map((child, index) => renderInline(child, `${key}-${index}`))
  switch (node.type) {
    case "doc": return <>{children}</>
    case "paragraph": return <p key={key} style={blockStyle(node)}>{children.length ? children : <br aria-hidden="true" />}</p>
    case "heading": {
      const level = node.attrs?.level === 3 ? 3 : 2
      return level === 3 ? <h3 key={key} style={blockStyle(node)}>{children}</h3> : <h2 key={key} style={blockStyle(node)}>{children}</h2>
    }
    case "bulletList": return <ul key={key}>{children}</ul>
    case "orderedList": return <ol key={key}>{children}</ol>
    case "listItem": return <li key={key}>{children}</li>
    case "blockquote": return <blockquote key={key}>{children}</blockquote>
    case "horizontalRule": return <hr key={key} />
    case "table": return renderTable(node, key)
    case "tableRow": return renderTableRow(node, key)
    case "tableHeader": return renderTableCell(node, key, true)
    case "tableCell": return renderTableCell(node, key, false)
    case "image": return renderImage(node, key)
    case "file": return renderFile(node, key)
    default: return null
  }
}

function blockStyle(node: BlogNode): CSSProperties | undefined {
  const value = node.attrs?.textAlign
  return value === "left" || value === "center" || value === "right" || value === "justify" ? { textAlign: value } : undefined
}

export function BlogContent({ content }: { content?: BlogNode }) {
  if (!content) return null
  return <div className="blog-prose">{renderNode(content)}</div>
}
