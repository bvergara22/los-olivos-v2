"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"

const MOCK_AVERAGE = 4.65
const MOCK_TOTAL = 132

const MOCK_COMMENTS = [
    {
        id: 1,
        name: "María Fernanda Ruiz",
        rating: 5,
        date: "12 de agosto, 2026",
        text: "Artículo muy completo y bien explicado. Me ayudó mucho a entender el proceso. Gracias al equipo de Los Olivos.",
        adminReply: { date: "13 de agosto, 2026", text: "Gracias María Fernanda, nos alegra mucho que el artículo haya sido de ayuda. Estamos aquí para lo que necesites." },
    },
    {
        id: 2,
        name: "Carlos Mendoza",
        rating: 4,
        date: "5 de septiembre, 2026",
        text: "Excelente información. Me gustaría que ampliaran un poco más la sección sobre los trámites en línea.",
        adminReply: null,
    },
    {
        id: 3,
        name: "Ana Lucía Torres",
        rating: 5,
        date: "8 de septiembre, 2026",
        text: "Muy útil y claro. Lo recomendaría a cualquier familia que esté en esta situación.",
        adminReply: null,
    },
]

const RATING_LABELS = ["", "Muy malo", "Malo", "Regular", "Bueno", "Excelente"]

function StarSvg({ filled, half = false, size = 20, index = 0 }: { filled: boolean; half?: boolean; size?: number; index?: number }) {
    const gradId = `blog-star-hg-${index}`
    const path = "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
            {half && (
                <defs>
                    <linearGradient id={gradId}>
                        <stop offset="50%" stopColor="#f59e0b" />
                        <stop offset="50%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            )}
            <path
                d={path}
                fill={half ? `url(#${gradId})` : filled ? "#f59e0b" : "none"}
                stroke={filled || half ? "#f59e0b" : "#d1d5db"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

function StarDisplay({ value, size = 18 }: { value: number; size?: number }) {
    return (
        <span className="inline-flex items-center gap-0.5" aria-label={`${value} de 5 estrellas`}>
            {[1, 2, 3, 4, 5].map((star) => {
                const filled = value >= star
                const half = !filled && value >= star - 0.5
                return <StarSvg key={star} filled={filled} half={half} size={size} index={star} />
            })}
        </span>
    )
}

function StarPicker({ value, onChange }: { value: number; onChange: (v: number) => void }) {
    const [hovered, setHovered] = useState(0)
    const active = hovered || value

    return (
        <span className="inline-flex items-center gap-1" role="radiogroup" aria-label="Tu calificación">
            {[1, 2, 3, 4, 5].map((star) => (
                <button
                    key={star}
                    type="button"
                    role="radio"
                    aria-checked={value === star}
                    aria-label={`${star} estrella${star !== 1 ? "s" : ""}`}
                    className="rounded transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    onClick={() => onChange(star)}
                    onMouseEnter={() => setHovered(star)}
                    onMouseLeave={() => setHovered(0)}
                >
                    <StarSvg filled={active >= star} size={30} index={star + 10} />
                </button>
            ))}
        </span>
    )
}

export function BlogComments() {
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [accepted, setAccepted] = useState(false)

    const canSubmit = accepted && name.trim() && email.trim() && rating > 0

    return (
        <section className="mt-16 border-t border-border pt-12" aria-labelledby="comments-heading">

            {/* Encabezado con promedio */}
            <div className="mb-8">
                <h2 id="comments-heading" className="font-display text-2xl font-bold">Comentarios</h2>
                <div className="mt-3 flex flex-wrap items-center gap-2.5">
                    <StarDisplay value={MOCK_AVERAGE} size={20} />
                    <span className="text-sm text-muted-foreground">
                        ({MOCK_TOTAL} votos · Media: {MOCK_AVERAGE.toFixed(2).replace(".", ",")} de 5)
                    </span>
                </div>
            </div>

            {/* Formulario */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-7">
                <h3 className="mb-6 font-display text-lg font-bold">Deja tu valoración</h3>

                <div className="space-y-5">

                    {/* Selector de estrellas */}
                    <div>
                        <p className="mb-2 text-sm font-semibold">Calificación</p>
                        <StarPicker value={rating} onChange={setRating} />
                        {rating > 0 && (
                            <p className="mt-1.5 text-xs font-medium text-primary">{RATING_LABELS[rating]}</p>
                        )}
                    </div>

                    {/* Comentario */}
                    <div>
                        <label htmlFor="comment-text" className="mb-2 block text-sm font-semibold">
                            Comentario
                        </label>
                        <Textarea
                            id="comment-text"
                            placeholder="Cuéntanos tu experiencia con este artículo…"
                            rows={4}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                        />
                    </div>

                    {/* Nombre y correo */}
                    <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label htmlFor="comment-name" className="mb-2 block text-sm font-semibold">
                                Nombre <span className="text-destructive" aria-hidden="true">*</span>
                            </label>
                            <Input
                                id="comment-name"
                                placeholder="Tu nombre"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="comment-email" className="mb-2 block text-sm font-semibold">
                                Correo electrónico <span className="text-destructive" aria-hidden="true">*</span>
                            </label>
                            <Input
                                id="comment-email"
                                type="email"
                                placeholder="tucorreo@ejemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Checkbox privacidad */}
                    <label className="flex cursor-pointer items-start gap-3">
                        <input
                            type="checkbox"
                            className="mt-0.5 h-4 w-4 shrink-0 rounded border-border accent-primary"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                        />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                            Acepto dejar mis datos para poder recibir contestación{" "}
                            <button
                                type="button"
                                className="font-semibold text-primary underline underline-offset-3 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded"
                            >
                                (política de privacidad)
                            </button>
                        </span>
                    </label>

                    {/* Botón */}
                    <div className="flex justify-end pt-1">
                        <Button type="button" disabled={!canSubmit}>
                            <Send className="h-4 w-4" aria-hidden="true" />
                            Enviar comentario
                        </Button>
                    </div>
                </div>
            </div>

            {/* Comentarios existentes */}
            {MOCK_COMMENTS.length > 0 && (
                <div className="mt-8 space-y-4">
                    <h3 className="font-display text-lg font-bold">{MOCK_COMMENTS.length} comentarios</h3>
                    {MOCK_COMMENTS.map((c) => (
                        <div key={c.id} className="rounded-2xl border border-border bg-card p-5 md:p-6">
                            <div className="flex flex-wrap items-start justify-between gap-2">
                                <div>
                                    <p className="font-semibold text-foreground">{c.name}</p>
                                    <time className="text-xs text-muted-foreground">{c.date}</time>
                                </div>
                                <StarDisplay value={c.rating} size={15} />
                            </div>
                            <p className="mt-3 text-sm leading-relaxed text-foreground">{c.text}</p>

                        {/* Respuesta del equipo */}
                        {c.adminReply && (
                            <div className="mt-4 flex gap-3">
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                                    LO
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <span className="text-sm font-semibold text-primary">Equipo Los Olivos</span>
                                        <span className="text-xs text-muted-foreground">· {c.adminReply.date}</span>
                                    </div>
                                    <p className="mt-1.5 text-sm leading-relaxed text-foreground">{c.adminReply.text}</p>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
                </div>
            )}
        </section>
    )
}
