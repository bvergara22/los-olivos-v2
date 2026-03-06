"use client"

import { Download, Eye, FileText, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const permisos = [
  {
    title: "Carta Permiso de Exhumación y Traslado",
    file: "/carta-permiso-exhumacion.pdf",
  },
  {
    title: "Carta Permiso de Cremación",
    file: "/carta-permiso-cremacion.pdf",
  },
]

export function PermisosModal() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="gap-2 bg-duelo-main text-white hover:bg-duelo-dark"
      >
        Obtener carta de permisos
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "color-mix(in srgb, var(--duelo-dark) 60%, transparent)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-card rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg font-semibold text-duelo-dark">
                Cartas de permisos
              </h3>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" />
              </button>
            </div>

            {/* PDFs */}
            <div className="space-y-3">
              {permisos.map((permiso) => (
                <div
                  key={permiso.file}
                  className="flex items-center gap-4 p-4 rounded-xl border border-border bg-duelo-main/[0.04]"
                >
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-duelo-main/10 text-duelo-main">
                    <FileText className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-medium text-foreground flex-1 leading-snug">
                    {permiso.title}
                  </p>
                  <div className="flex gap-2 flex-shrink-0">
                    <a
                      href={permiso.file}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-8 h-8 hover:bg-duelo-main/10 hover:border-duelo-main hover:text-duelo-main"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={permiso.file} download title="Descargar">
                      <Button
                        size="icon"
                        className="w-8 h-8 bg-duelo-main text-white hover:bg-duelo-dark"
                      >
                        <Download className="w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  )
}
