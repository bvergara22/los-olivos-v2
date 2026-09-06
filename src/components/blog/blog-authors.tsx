"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BlogApiError, type BlogAuthor } from "@/lib/blog"
import { Pencil } from "lucide-react"

export function BlogAuthors({ authors, onSaved, request }: {
  authors: BlogAuthor[]
  onSaved: (author: BlogAuthor) => void
  request: <T>(path: string, init?: RequestInit) => Promise<T>
}) {
  const [editing, setEditing] = useState<number | null>(null)
  const [name, setName] = useState("")
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")

  return <section className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm" aria-labelledby="authors-heading">
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-4 md:px-7">
      <div>
        <h2 id="authors-heading" className="font-display text-xl font-bold">Autores</h2>
      </div>
    </div>
    <div className="grid gap-6 p-5 md:p-7 lg:grid-cols-[minmax(0,1fr)_280px]">
      <div className="min-w-0 overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Autores del blog</caption>
          <thead className="bg-muted/45 text-xs uppercase tracking-wide text-muted-foreground">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">Autor</th>
              <th scope="col" className="px-4 py-3 text-right font-semibold">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {authors.map((author) => <tr key={author.id} className="hover:bg-muted/25">
              <td className="max-w-[28rem] px-4 py-3 align-middle">
                <span className="block break-words font-semibold">{author.name}</span>
              </td>
              <td className="whitespace-nowrap px-4 py-3 text-right align-middle">
                <Button type="button" variant="ghost" size="icon-sm" className="group hover:bg-primary hover:text-white focus-visible:ring-primary" disabled={saving} aria-label={`Editar autor ${author.name}`} onClick={() => { setEditing(author.id); setName(author.name); setError(""); setMessage("") }}>
                  <Pencil className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-white" aria-hidden="true" />
                </Button>
              </td>
            </tr>)}
            {!authors.length ? <tr><td colSpan={2} className="px-4 py-8 text-center text-muted-foreground">Todavía no hay autores. Añade uno para asignarlo a un artículo.</td></tr> : null}
          </tbody>
        </table>
      </div>
      <form onSubmit={async (event) => {
        event.preventDefault()
        if (!name.trim()) { setError("Escribe un nombre para el autor."); return }
        setSaving(true); setError(""); setMessage("")
        try {
          const response = await request<{ data: BlogAuthor }>(editing ? `/blog/admin/authors/${editing}` : "/blog/admin/authors", {
            method: editing ? "PUT" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: name.trim() }),
          })
          onSaved(response.data)
          setMessage(editing ? "Autor actualizado." : "Autor creado. Ya puedes seleccionarlo en el artículo.")
          setEditing(null); setName("")
        } catch (error) { setError(error instanceof BlogApiError ? error.message : "No se pudo guardar el autor.") }
        finally { setSaving(false) }
      }} className="rounded-xl border border-border bg-muted/25 p-4">
        <fieldset disabled={saving} className="space-y-4">
          <legend className="mb-3 font-display font-bold">{editing ? "Editar autor" : "Nuevo autor"}</legend>
          <div><label htmlFor="author-name" className="mb-2 block text-sm font-semibold">Nombre del autor</label>
            <Input id="author-name" name="author_name" required maxLength={180} value={name} onChange={(event) => setName(event.target.value)} /></div>
          {editing ? <p className="text-xs text-muted-foreground">El nombre se actualizará en todos sus artículos.</p> : null}
          {error ? <p role="alert" className="text-sm text-destructive">{error}</p> : null}
          <div className="flex flex-wrap gap-2"><Button type="submit" aria-busy={saving}>{saving ? "Guardando…" : editing ? "Guardar cambios" : "Añadir autor"}</Button>
            {editing ? <Button type="button" variant="ghost" onClick={() => { setEditing(null); setName(""); setError("") }}>Cancelar</Button> : null}</div>
        </fieldset>
        <p role="status" className="mt-3 text-sm text-primary">{message}</p>
      </form>
    </div>
  </section>
}
