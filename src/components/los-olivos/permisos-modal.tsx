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
        className="gap-2 text-white hover:bg-[#240e36]"
        style={{ background: "#3e2455" }}
      >
        Obtener carta de permisos
      </Button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(36,14,54,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-card rounded-2xl shadow-2xl w-full max-w-md p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display text-lg font-semibold" style={{ color: "#240e36" }}>
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
                  className="flex items-center gap-4 p-4 rounded-xl border border-border"
                  style={{ background: "rgba(62,36,85,0.04)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(62,36,85,0.1)", color: "#3e2455" }}
                  >
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
                        className="w-8 h-8 hover:bg-[#3e2455]/10 hover:border-[#3e2455] hover:text-[#3e2455]"
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </a>
                    <a href={permiso.file} download title="Descargar">
                      <Button
                        size="icon"
                        className="w-8 h-8 text-white hover:bg-[#240e36]"
                        style={{ background: "#3e2455" }}
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
