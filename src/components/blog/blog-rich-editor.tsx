"use client"

import { Mark, mergeAttributes, Node } from "@tiptap/core"
import { TableKit } from "@tiptap/extension-table"
import { EditorContent, useEditor, type Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import ImageExtension from "@tiptap/extension-image"
import TextAlign from "@tiptap/extension-text-align"
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Columns3, ImagePlus, Italic, Link2, List, ListOrdered, LoaderCircle, Paperclip, Quote, Redo2, Rows3, Strikethrough, Table2, Trash2, Underline, Undo2 } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import type { BlogAttachment, BlogNode } from "@/lib/blog"

import { BLOG_FONT_SIZES as FONT_SIZES, cleanPastedBlogHTML, normalizeFontSize, normalizeTextColor } from "@/lib/blog-content"
const IMAGE_ALIGNMENTS = ["left", "center", "right"] as const
const IMAGE_DIMENSION_MIN = 40
const IMAGE_DIMENSION_MAX = 8000
const ATTACHMENT_NAME_MAX = 180
type ImageAlignment = typeof IMAGE_ALIGNMENTS[number]

function safeTextColor(value: unknown) {
  if (typeof value !== "string") return null
  const color = value.trim()
  if (/^#[0-9a-f]{6}$/i.test(color)) return color.toLowerCase()
  if (/^#[0-9a-f]{3}$/i.test(color)) return `#${color.slice(1).split("").map((part) => `${part}${part}`).join("")}`.toLowerCase()
  return null
}

function safeAttachmentHref(value: unknown) {
  return typeof value === "string" && (/^\/blog\/files\//i.test(value) || /^https:\/\/[^/]*digitaloceanspaces\.com\/blog\/files\//i.test(value)) ? value : null
}

function isImageAlignment(value: unknown): value is ImageAlignment {
  return typeof value === "string" && IMAGE_ALIGNMENTS.includes(value as ImageAlignment)
}

function getImageDimension(value: unknown): number | null {
  const parsed = typeof value === "number" ? value : typeof value === "string" && value.trim() ? Number(value) : NaN
  if (!Number.isFinite(parsed) || parsed <= 0) return null
  return Math.round(Math.min(IMAGE_DIMENSION_MAX, Math.max(IMAGE_DIMENSION_MIN, parsed)))
}

function getUploadedImageDimensions(src: string): Promise<{ width: number; height: number } | null> {
  return new Promise((resolve) => {
    const image = new window.Image()
    image.onload = () => {
      const width = getImageDimension(image.naturalWidth)
      const height = getImageDimension(image.naturalHeight)
      resolve(width && height ? { width, height } : null)
    }
    image.onerror = () => resolve(null)
    image.src = src
  })
}

function getSelectedImageElement(editor: Editor): HTMLImageElement | null {
  const element = editor.view.dom.querySelector("[data-resize-container].ProseMirror-selectednode img, img.ProseMirror-selectednode")
  return element instanceof window.HTMLImageElement ? element : null
}

function updateImageDimensions(editor: Editor, attributes: { width?: number; height?: number }) {
  editor.chain().focus().updateAttributes("image", attributes).run()
  // Tiptap's resizable node view owns width/height styles, so keep its DOM in
  // sync when dimensions are entered manually instead of dragged.
  window.requestAnimationFrame(() => {
    const image = getSelectedImageElement(editor)
    if (!image) return
    if (typeof attributes.width === "number") image.style.width = `${attributes.width}px`
    if (typeof attributes.height === "number") image.style.height = `${attributes.height}px`
  })
}

const TextStyle = Mark.create({
  name: "textStyle",
  addAttributes() {
    return {
      fontSize: {
        default: null,
        parseHTML: (element: HTMLElement) => normalizeFontSize(element.style.fontSize),
      },
      color: {
        default: null,
        parseHTML: (element: HTMLElement) => normalizeTextColor(element.style.color),
      },
    }
  },
  parseHTML() {
    return [{ tag: "span[style]" }]
  },
  renderHTML({ mark }) {
    const styles: string[] = []
    if (typeof mark.attrs.fontSize === "string" && FONT_SIZES.includes(mark.attrs.fontSize as typeof FONT_SIZES[number])) styles.push(`font-size: ${mark.attrs.fontSize}`)
    const color = safeTextColor(mark.attrs.color)
    if (color) styles.push(`color: ${color}`)
    return ["span", styles.length ? { style: styles.join("; ") } : {}, 0]
  },
})

const BlogImage = ImageExtension.extend({
  addAttributes() {
    return {
      ...(this.parent?.() ?? {}),
      textAlign: {
        default: "center",
        parseHTML: (element: HTMLElement) => element.getAttribute("data-blog-align") || "center",
        renderHTML: (attributes: { textAlign?: unknown }) => ({ "data-blog-align": isImageAlignment(attributes.textAlign) ? attributes.textAlign : "center" }),
      },
    }
  },
})

// Attachments are stored as an atom in the document rather than as arbitrary
// HTML. This keeps the editor and public renderer on the same safe JSON model.
const BlogFile = Node.create({
  name: "file",
  group: "block",
  atom: true,
  selectable: true,
  draggable: false,
  addAttributes() {
    return {
      href: { default: null },
      name: { default: "Descargar archivo" },
      mime: { default: "application/octet-stream" },
      size: { default: 0 },
    }
  },
  parseHTML() {
    return []
  },
  renderHTML({ node, HTMLAttributes }) {
    const href = safeAttachmentHref(node.attrs.href)
    const name = typeof node.attrs.name === "string" && node.attrs.name.trim() ? node.attrs.name.slice(0, ATTACHMENT_NAME_MAX) : "Descargar archivo"
    return ["a", mergeAttributes(HTMLAttributes, {
      href: href ?? "#",
      "data-blog-file": "true",
      contenteditable: "false",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": `Descargar ${name}`,
    }), name]
  },
})

function ImageDimensionField({ label, value, onCommit }: { label: string; value: number | null; onCommit: (value: number) => void }) {
  const [draft, setDraft] = useState(value ? String(value) : "")

  const commit = () => {
    const parsed = Number(draft)
    if (!Number.isFinite(parsed) || parsed <= 0) {
      setDraft(value ? String(value) : "")
      return
    }
    const next = Math.round(Math.min(IMAGE_DIMENSION_MAX, Math.max(IMAGE_DIMENSION_MIN, parsed)))
    setDraft(String(next))
    onCommit(next)
  }

  return (
    <label className="inline-flex h-9 items-center gap-1 rounded-md border border-input bg-background px-2 text-xs font-semibold text-muted-foreground" title={`${label} de la imagen en píxeles`}>
      <span>{label}</span>
      <input aria-label={`${label} de la imagen en píxeles`} type="number" inputMode="numeric" min={IMAGE_DIMENSION_MIN} max={IMAGE_DIMENSION_MAX} step="1" value={draft} onChange={(event) => setDraft(event.target.value)} onBlur={commit} onKeyDown={(event) => { if (event.key === "Enter") { event.preventDefault(); event.currentTarget.blur() } }} className="h-7 w-20 rounded border-0 bg-transparent px-1 text-sm font-normal text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
      <span aria-hidden="true">px</span>
    </label>
  )
}

function Toolbar({ editor, onChange, onImage, imageUploading, onFile, fileUploading }: { editor: Editor; onChange: (content: BlogNode) => void; onImage: () => void; imageUploading: boolean; onFile: () => void; fileUploading: boolean }) {
  const textSelection = useRef<{ from: number; to: number } | null>(null)
  const [lastSelectedColor, setLastSelectedColor] = useState("#1f2937")
  const rememberTextSelection = () => {
    const { selection } = editor.state
    textSelection.current = selection.$from.parent.isTextblock ? { from: selection.from, to: selection.to } : null
  }
  const applyTextStyle = (attrs: { color?: string | null }) => {
    if (typeof attrs.color === "string" && /^#[0-9a-f]{6}$/i.test(attrs.color)) setLastSelectedColor(attrs.color)
    if (attrs.color === null) setLastSelectedColor("#1f2937")
    const selection = textSelection.current
    textSelection.current = null
    const chain = editor.chain().focus()
    if (selection) chain.setTextSelection(selection)
    const changed = chain.setMark("textStyle", attrs).run()
    if (changed) onChange(editor.getJSON() as BlogNode)
  }
  const textStyleAttrs = editor.getAttributes("textStyle") as { fontSize?: string | null; color?: string | null }
  const imageSelected = editor.isActive("image")
  const tableActive = editor.isActive("table")
  const imageAttrs = editor.getAttributes("image") as { textAlign?: unknown; width?: unknown; height?: unknown }
  const imageAlignment = imageAttrs.textAlign
  const imageWidth = getImageDimension(imageAttrs.width)
  const imageHeight = getImageDimension(imageAttrs.height)
  const updateImageDimension = (dimension: "width" | "height", value: number) => {
    const selectedImage = getSelectedImageElement(editor)
    const currentWidth = imageWidth ?? getImageDimension(selectedImage?.naturalWidth)
    const currentHeight = imageHeight ?? getImageDimension(selectedImage?.naturalHeight)
    if (!currentWidth || !currentHeight) {
      updateImageDimensions(editor, { [dimension]: value })
      return
    }
    const ratio = currentWidth / currentHeight
    const attributes = dimension === "width"
      ? { width: value, height: getImageDimension(value / ratio) ?? IMAGE_DIMENSION_MIN }
      : { width: getImageDimension(value * ratio) ?? IMAGE_DIMENSION_MIN, height: value }
    updateImageDimensions(editor, attributes)
  }
  const currentColor = lastSelectedColor
  const buttons = [
    { label: "Negrita", icon: Bold, active: editor.isActive("bold"), run: () => editor.chain().focus().toggleBold().run() },
    { label: "Cursiva", icon: Italic, active: editor.isActive("italic"), run: () => editor.chain().focus().toggleItalic().run() },
    { label: "Subrayado", icon: Underline, active: editor.isActive("underline"), run: () => editor.chain().focus().toggleUnderline().run() },
    { label: "Tachado", icon: Strikethrough, active: editor.isActive("strike"), run: () => editor.chain().focus().toggleStrike().run() },
    { label: "Lista con viñetas", icon: List, active: editor.isActive("bulletList"), run: () => editor.chain().focus().toggleBulletList().run() },
    { label: "Lista numerada", icon: ListOrdered, active: editor.isActive("orderedList"), run: () => editor.chain().focus().toggleOrderedList().run() },
    { label: "Cita", icon: Quote, active: editor.isActive("blockquote"), run: () => editor.chain().focus().toggleBlockquote().run() },
  ]
  const imageAlignmentButtons = [
    { label: "Alinear imagen a la izquierda", icon: AlignLeft, value: "left" as const },
    { label: "Centrar imagen", icon: AlignCenter, value: "center" as const },
    { label: "Alinear imagen a la derecha", icon: AlignRight, value: "right" as const },
  ]

  return (
    <div className="flex flex-wrap items-center gap-1 border-b border-border bg-muted/40 p-2" role="toolbar" aria-label="Formato del artículo">
      <select aria-label="Nivel de título" value={editor.isActive("heading", { level: 2 }) ? "h2" : editor.isActive("heading", { level: 3 }) ? "h3" : "p"} onChange={(event) => { const value = event.target.value; if (value === "h2") editor.chain().focus().toggleHeading({ level: 2 }).run(); else if (value === "h3") editor.chain().focus().toggleHeading({ level: 3 }).run(); else editor.chain().focus().setParagraph().run() }} className="h-9 rounded-md border border-input bg-background px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <option value="p">Párrafo</option><option value="h2">Título 2</option><option value="h3">Título 3</option>
      </select>
      <select aria-label="Tamaño de fuente" value={textStyleAttrs.fontSize ?? ""} onChange={(event) => editor.chain().focus().setMark("textStyle", { fontSize: event.target.value || null }).run()} className="h-9 rounded-md border border-input bg-background px-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
        <option value="">Tamaño</option>
        {FONT_SIZES.map((size) => <option key={size} value={size}>{size}</option>)}
      </select>
      <label onPointerDownCapture={rememberTextSelection} onFocusCapture={() => { if (!textSelection.current) rememberTextSelection() }} className="inline-flex h-9 items-center gap-1 rounded-md border border-input bg-background px-2 text-xs font-semibold text-muted-foreground" title="Color de la fuente">
        Color
        <input type="color" aria-label="Color de la fuente" value={currentColor} onChange={(event) => applyTextStyle({ color: event.target.value })} className="h-6 w-6 cursor-pointer rounded border-0 bg-transparent p-0" />
      </label>
      <button type="button" title="Quitar color de la fuente" aria-label="Quitar color de la fuente" onPointerDown={rememberTextSelection} onClick={() => applyTextStyle({ color: null })} className="inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-bold hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">A̸</button>
      <button type="button" title="Alinear a la izquierda" aria-label="Alinear a la izquierda" aria-pressed={editor.isActive({ textAlign: "left" })} onClick={() => editor.chain().focus().setTextAlign("left").run()} className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><AlignLeft className="h-4 w-4" aria-hidden="true" /></button>
      <button type="button" title="Centrar" aria-label="Centrar" aria-pressed={editor.isActive({ textAlign: "center" })} onClick={() => editor.chain().focus().setTextAlign("center").run()} className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><AlignCenter className="h-4 w-4" aria-hidden="true" /></button>
      <button type="button" title="Alinear a la derecha" aria-label="Alinear a la derecha" aria-pressed={editor.isActive({ textAlign: "right" })} onClick={() => editor.chain().focus().setTextAlign("right").run()} className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><AlignRight className="h-4 w-4" aria-hidden="true" /></button>
      <button type="button" title="Justificar" aria-label="Justificar" aria-pressed={editor.isActive({ textAlign: "justify" })} onClick={() => editor.chain().focus().setTextAlign("justify").run()} className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><AlignJustify className="h-4 w-4" aria-hidden="true" /></button>
      <button type="button" title="Insertar tabla 3 × 3" aria-label="Insertar tabla de 3 por 3" disabled={tableActive} onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"><Table2 className="h-4 w-4" aria-hidden="true" /></button>
      {tableActive ? <><span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" /><span role="group" aria-label="Edición de tabla" className="inline-flex items-center gap-1"><button type="button" title="Añadir fila debajo" aria-label="Añadir fila debajo" onClick={() => editor.chain().focus().addRowAfter().run()} className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Rows3 className="h-4 w-4" aria-hidden="true" /></button><button type="button" title="Añadir columna a la derecha" aria-label="Añadir columna a la derecha" onClick={() => editor.chain().focus().addColumnAfter().run()} className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Columns3 className="h-4 w-4" aria-hidden="true" /></button><button type="button" title="Eliminar fila actual" aria-label="Eliminar fila actual" onClick={() => editor.chain().focus().deleteRow().run()} className="inline-flex h-9 w-9 items-center justify-center rounded-md text-destructive hover:bg-destructive/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Rows3 className="h-4 w-4" aria-hidden="true" /></button><button type="button" title="Eliminar columna actual" aria-label="Eliminar columna actual" onClick={() => editor.chain().focus().deleteColumn().run()} className="inline-flex h-9 w-9 items-center justify-center rounded-md text-destructive hover:bg-destructive/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Columns3 className="h-4 w-4" aria-hidden="true" /></button><button type="button" title="Eliminar tabla" aria-label="Eliminar tabla" onClick={() => editor.chain().focus().deleteTable().run()} className="inline-flex h-9 w-9 items-center justify-center rounded-md text-destructive hover:bg-destructive/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Trash2 className="h-4 w-4" aria-hidden="true" /></button></span></> : null}
      {buttons.map(({ label, icon: Icon, active, run }) => <button key={label} type="button" title={label} aria-label={label} aria-pressed={active} onClick={run} className={`inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${active ? "bg-primary text-white" : "hover:bg-background"}`}><Icon className="h-4 w-4" aria-hidden="true" /></button>)}
      {imageSelected ? <><span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" /><span role="group" aria-label="Alineación de imagen" className="inline-flex items-center gap-1">{imageAlignmentButtons.map(({ label, icon: Icon, value }) => <button key={value} type="button" title={label} aria-label={label} aria-pressed={imageAlignment === value} onClick={() => editor.chain().focus().updateAttributes("image", { textAlign: value }).run()} className={`inline-flex h-9 w-9 items-center justify-center rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${imageAlignment === value ? "bg-primary text-white" : "hover:bg-background"}`}><Icon className="h-4 w-4" aria-hidden="true" /></button>)}</span><span role="group" aria-label="Dimensiones de imagen" className="inline-flex items-center gap-1"><ImageDimensionField key={`width-${imageWidth ?? "auto"}-${imageHeight ?? "auto"}`} label="Ancho" value={imageWidth} onCommit={(width) => updateImageDimension("width", width)} /><ImageDimensionField key={`height-${imageWidth ?? "auto"}-${imageHeight ?? "auto"}`} label="Alto" value={imageHeight} onCommit={(height) => updateImageDimension("height", height)} /></span></> : null}
      <span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
      <button type="button" title="Añadir enlace" aria-label="Añadir enlace" onClick={() => { const href = window.prompt("Pega una URL HTTPS"); if (href && /^https?:\/\//i.test(href)) editor.chain().focus().setLink({ href }).run() }} className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Link2 className="h-4 w-4" aria-hidden="true" /></button>
      <button type="button" title={imageUploading ? "Subiendo imagen" : "Añadir imagen"} aria-label={imageUploading ? "Subiendo imagen" : "Añadir imagen"} aria-busy={imageUploading} disabled={imageUploading} onClick={onImage} className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-wait disabled:opacity-60">{imageUploading ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : <ImagePlus className="h-4 w-4" aria-hidden="true" />}</button>
      {imageUploading ? <span role="status" aria-live="polite" className="inline-flex items-center gap-1 px-1 text-xs font-semibold text-primary"><LoaderCircle className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />Subiendo imagen…</span> : null}
      <button type="button" title={fileUploading ? "Subiendo archivo" : "Añadir archivo descargable"} aria-label={fileUploading ? "Subiendo archivo" : "Añadir archivo descargable"} aria-busy={fileUploading} disabled={fileUploading} onClick={onFile} className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-wait disabled:opacity-60">{fileUploading ? <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Paperclip className="h-4 w-4" aria-hidden="true" />}</button>
      {fileUploading ? <span role="status" aria-live="polite" className="inline-flex items-center gap-1 px-1 text-xs font-semibold text-primary"><LoaderCircle className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />Subiendo archivo…</span> : null}
      <button type="button" title="Deshacer" aria-label="Deshacer" onClick={() => editor.chain().focus().undo().run()} className="ml-auto inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Undo2 className="h-4 w-4" aria-hidden="true" /></button>
      <button type="button" title="Rehacer" aria-label="Rehacer" onClick={() => editor.chain().focus().redo().run()} className="inline-flex h-9 w-9 items-center justify-center rounded-md hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"><Redo2 className="h-4 w-4" aria-hidden="true" /></button>
    </div>
  )
}

export default function BlogRichEditor({ content, onChange, onUpload, onUploadFile }: { content: BlogNode; onChange: (content: BlogNode) => void; onUpload: (file: File) => Promise<string>; onUploadFile: (file: File) => Promise<BlogAttachment | null> }) {
  const imageInput = useRef<HTMLInputElement>(null)
  const fileInput = useRef<HTMLInputElement>(null)
  const [imageUploading, setImageUploading] = useState(false)
  const [fileUploading, setFileUploading] = useState(false)
  const [, setSelectionVersion] = useState(0)
  const editor = useEditor({
    extensions: [StarterKit.configure({ heading: { levels: [2, 3] }, code: false, codeBlock: false, link: { openOnClick: false, autolink: false, isAllowedUri: (url) => /^https?:\/\//i.test(url) } }), TextStyle, BlogImage.configure({ inline: false, allowBase64: false, resize: { enabled: true, directions: ["top-left", "top-right", "bottom-left", "bottom-right"], minWidth: IMAGE_DIMENSION_MIN, minHeight: IMAGE_DIMENSION_MIN, alwaysPreserveAspectRatio: true } }), BlogFile, TextAlign.configure({ types: ["heading", "paragraph"] }), TableKit.configure({ table: { resizable: true } })],
    content,
    immediatelyRender: false,
    editorProps: { transformPastedHTML: cleanPastedBlogHTML },

    onTransaction: () => {
      setSelectionVersion((version) => version + 1)
    },

    onUpdate: ({ editor: instance }) => onChange(instance.getJSON() as BlogNode),
    onSelectionUpdate: () => setSelectionVersion((version) => version + 1),
  })

  useEffect(() => {
    if (editor && JSON.stringify(editor.getJSON()) !== JSON.stringify(content)) editor.commands.setContent(content, { emitUpdate: false })
  }, [content, editor])

  if (!editor) return <div className="min-h-80 animate-pulse bg-muted/20" aria-label="Cargando editor" />
  return <>
    <Toolbar editor={editor} onChange={onChange} onImage={() => imageInput.current?.click()} imageUploading={imageUploading} onFile={() => fileInput.current?.click()} fileUploading={fileUploading} />
    <div className="blog-editor-shell">
      <EditorContent editor={editor} className="blog-editor-content" aria-label="Contenido del artículo" />
    </div>
    <input ref={imageInput} type="file" accept="image/jpeg,image/png,image/webp" className="sr-only" disabled={imageUploading} onChange={async (event) => {
      const input = event.currentTarget
      const file = input.files?.[0]
      if (!file) return
      setImageUploading(true)
      try {
        const url = await onUpload(file)
        if (url) {
          const dimensions = await getUploadedImageDimensions(url)
          editor.chain().focus().setImage({ src: url, alt: file.name, ...(dimensions ?? {}) }).run()
        }
      } finally {
        setImageUploading(false)
        input.value = ""
      }
    }} />
    <input ref={fileInput} type="file" accept="application/pdf,.pdf,application/msword,.doc,application/vnd.openxmlformats-officedocument.wordprocessingml.document,.docx,application/vnd.ms-excel,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,.xlsx,application/vnd.ms-powerpoint,.ppt,application/vnd.openxmlformats-officedocument.presentationml.presentation,.pptx" className="sr-only" disabled={fileUploading} onChange={async (event) => {
      const input = event.currentTarget
      const file = input.files?.[0]
      if (!file) return
      setFileUploading(true)
      try {
        const attachment = await onUploadFile(file)
        if (attachment) {
          editor.chain().focus().insertContent({ type: "file", attrs: { href: attachment.url, name: attachment.name, mime: attachment.mime, size: attachment.size } }).run()
        }
      } finally {
        setFileUploading(false)
        input.value = ""
      }
    }} />
  </>
}
