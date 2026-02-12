"use client"

import { PageBanner } from "@/components/los-olivos/page-banner"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, BookOpen, Calendar, Clock, Heart, Search, Tag } from "lucide-react"
import { useState } from "react"

const categorias = [
  { nombre: "Todos", slug: "todos", count: 15 },
  { nombre: "Duelo", slug: "duelo", count: 5 },
  { nombre: "Tramites", slug: "tramites", count: 4 },
  { nombre: "Consejos", slug: "consejos", count: 3 },
  { nombre: "Ceremonias", slug: "ceremonias", count: 3 },
]

const articulos = [
  {
    id: 1,
    titulo: "El proceso de duelo y sus implicaciones",
    extracto: "El duelo es un proceso interno natural en el que el doliente atraviesa una serie de fases o tareas que conducen a la superacion de dicho proceso, ya sea por perdida de un ser querido, un familiar o trabajo.",
    categoria: "duelo",
    fecha: "2024-01-15",
    tiempoLectura: "5 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Duelo",
  },
  {
    id: 2,
    titulo: "Autocuidado emocional en tiempos de crisis",
    extracto: "Hoy por hoy las necesidades de nuestra sociedad son muy variadas. Desde hace un ano, vivimos para cuidarnos, muchas de las cosas buenas que antes teniamos nos toco dejar atras para cuidar lo vital en nuestras vidas.",
    categoria: "consejos",
    fecha: "2024-01-10",
    tiempoLectura: "7 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Autocuidado",
  },
  {
    id: 3,
    titulo: "Que hacer en el acompanamiento a una persona en duelo",
    extracto: "Todos en algun momento de nuestra vida nos hemos visto enfrentados a situaciones complejas en donde nuestro sistema de creencias y experiencias vividas se ven afectadas.",
    categoria: "duelo",
    fecha: "2024-01-05",
    tiempoLectura: "6 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Acompanamiento",
  },
  {
    id: 4,
    titulo: "Documentacion necesaria para tramites funerarios",
    extracto: "Conoce todos los documentos que debes tener preparados para agilizar los tramites en momentos dificiles. Una guia completa paso a paso.",
    categoria: "tramites",
    fecha: "2023-12-20",
    tiempoLectura: "8 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Documentos",
  },
  {
    id: 5,
    titulo: "Como planear una ceremonia de despedida significativa",
    extracto: "Las ceremonias de despedida son momentos importantes para honrar la memoria de nuestros seres queridos. Te compartimos ideas y consejos para crear un homenaje memorable.",
    categoria: "ceremonias",
    fecha: "2023-12-15",
    tiempoLectura: "6 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Ceremonia",
  },
  {
    id: 6,
    titulo: "La importancia del apoyo psicologico durante el duelo",
    extracto: "El duelo es un proceso que requiere apoyo profesional. Descubre como la asistencia psicologica puede ayudarte a transitar este camino de manera saludable.",
    categoria: "duelo",
    fecha: "2023-12-10",
    tiempoLectura: "5 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Apoyo",
  },
  {
    id: 7,
    titulo: "Diferencias entre cremacion e inhumacion",
    extracto: "Conoce las diferencias, ventajas y consideraciones de cada opcion para tomar una decision informada sobre el destino final de tu ser querido.",
    categoria: "tramites",
    fecha: "2023-12-01",
    tiempoLectura: "7 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Opciones",
  },
  {
    id: 8,
    titulo: "Como hablar con los ninos sobre la muerte",
    extracto: "Abordar el tema de la muerte con los ninos puede ser dificil. Te compartimos estrategias y consejos para hacerlo de manera apropiada segun su edad.",
    categoria: "consejos",
    fecha: "2023-11-25",
    tiempoLectura: "6 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Ninos",
  },
  {
    id: 9,
    titulo: "Personalizar una ceremonia de despedida",
    extracto: "Cada persona es unica y su despedida tambien debe serlo. Descubre formas creativas de personalizar el ultimo homenaje.",
    categoria: "ceremonias",
    fecha: "2023-11-20",
    tiempoLectura: "5 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Personalizar",
  },
  {
    id: 10,
    titulo: "Las cinco etapas del duelo segun Kubler-Ross",
    extracto: "Entiende las cinco etapas del duelo: negacion, ira, negociacion, depresion y aceptacion. Conoce que esperar en cada fase del proceso.",
    categoria: "duelo",
    fecha: "2023-11-15",
    tiempoLectura: "8 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Etapas",
  },
  {
    id: 11,
    titulo: "Planificacion anticipada de servicios funerarios",
    extracto: "Por que es importante planificar con anticipacion? Descubre los beneficios de tomar decisiones ahora para aliviar la carga de tu familia en el futuro.",
    categoria: "consejos",
    fecha: "2023-11-10",
    tiempoLectura: "6 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Planificacion",
  },
  {
    id: 12,
    titulo: "Tramites legales despues de un fallecimiento",
    extracto: "Guia completa de todos los tramites legales y administrativos que deben realizarse tras el fallecimiento de un ser querido.",
    categoria: "tramites",
    fecha: "2023-11-05",
    tiempoLectura: "10 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Legales",
  },
  {
    id: 13,
    titulo: "Musica y lecturas para ceremonias de despedida",
    extracto: "Selecciona la musica y lecturas perfectas para honrar la memoria de tu ser querido. Ideas y sugerencias para crear un momento significativo.",
    categoria: "ceremonias",
    fecha: "2023-10-30",
    tiempoLectura: "5 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Musica",
  },
  {
    id: 14,
    titulo: "Duelo complicado: cuando buscar ayuda profesional",
    extracto: "Aprende a identificar las senales de un duelo complicado y cuando es necesario buscar apoyo psicologico especializado.",
    categoria: "duelo",
    fecha: "2023-10-25",
    tiempoLectura: "7 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Profesional",
  },
  {
    id: 15,
    titulo: "Exhumacion: que es y cuando es necesaria",
    extracto: "Todo lo que necesitas saber sobre el proceso de exhumacion, requisitos legales y situaciones en las que puede ser necesario.",
    categoria: "tramites",
    fecha: "2023-10-20",
    tiempoLectura: "6 min",
    imagen: "/placeholder.svg?height=400&width=600&text=Exhumacion",
  },
]

export default function BlogPage() {
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos")
  const [busqueda, setBusqueda] = useState("")

  const articulosFiltrados = articulos.filter((articulo) => {
    const coincideCategoria = categoriaSeleccionada === "todos" || articulo.categoria === categoriaSeleccionada
    const coincideBusqueda = busqueda === "" ||
      articulo.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      articulo.extracto.toLowerCase().includes(busqueda.toLowerCase())
    return coincideCategoria && coincideBusqueda
  })

  return (
    <>
      <PageBanner
        title="Blog Los Olivos"
        description="Articulos, consejos y recursos para acompanar a las familias en momentos dificiles. Informacion util sobre duelo, tramites y ceremonias."
      />

      <section className="py-16 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-1">
              {/* Buscador */}
              <div className="bg-card rounded-2xl border border-border p-6 mb-6">
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-primary" />
                  Buscar
                </h3>
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Buscar articulos..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="h-10"
                  />
                </div>
              </div>

              {/* Categorias */}
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-display font-bold text-foreground mb-4 flex items-center gap-2">
                  <Tag className="w-5 h-5 text-primary" />
                  Categorias
                </h3>
                <ul className="space-y-2">
                  {categorias.map((cat) => (
                    <li key={cat.slug}>
                      <button
                        type="button"
                        onClick={() => setCategoriaSeleccionada(cat.slug)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg text-sm transition-colors ${
                          categoriaSeleccionada === cat.slug
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-muted"
                        }`}
                      >
                        <span className="capitalize">{cat.nombre}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          categoriaSeleccionada === cat.slug
                            ? "bg-primary-foreground/20"
                            : "bg-muted"
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Articulos */}
            <div className="lg:col-span-3">
              {articulosFiltrados.length === 0 ? (
                <div className="text-center py-12">
                  <BookOpen className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
                  <p className="text-muted-foreground">No se encontraron articulos.</p>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {articulosFiltrados.map((articulo) => (
                    <Card key={articulo.id} className="group hover:shadow-lg transition-all overflow-hidden">
                      <div className="aspect-video overflow-hidden bg-muted">
                        <img
                          src={articulo.imagen || "/placeholder.svg"}
                          alt={articulo.titulo}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <CardHeader>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                          <span className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full font-medium capitalize">
                            <Tag className="w-3 h-3" />
                            {articulo.categoria}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(articulo.fecha).toLocaleDateString('es-ES', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {articulo.tiempoLectura}
                          </span>
                        </div>
                        <h3 className="font-display font-bold text-lg text-foreground group-hover:text-primary transition-colors line-clamp-2">
                          {articulo.titulo}
                        </h3>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                          {articulo.extracto}
                        </p>
                        <Button variant="outline" size="sm" className="gap-2">
                          Leer mas
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-primary/5 rounded-2xl border border-primary/20 p-8 md:p-12 text-center">
            <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 text-balance">
              Necesitas apoyo profesional?
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto">
              Nuestra Unidad de Duelo esta disponible para brindarte acompanamiento psicologico especializado.
            </p>
            <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="/unidad-duelo">
                Conoce nuestra Unidad de Duelo
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
