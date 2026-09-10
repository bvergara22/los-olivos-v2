"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const SLIDES = [
    {
        image: "/blog/blog-image1.webp",
        bg: "#fffbeb",
        blobColor: "rgba(240,195,61,0.28)",
        accentColor: "#C9981E",
    },
    {
        image: "/blog/blog-image2.webp",
        bg: "#fdf2f8",
        blobColor: "rgba(236,72,153,0.22)",
        accentColor: "#EB5E82",
    },
    {
        image: "/blog/blog-image3.webp",
        bg: "#f0fafa",
        blobColor: "rgba(89,171,155,0.28)",
        accentColor: "#59AB9B",
    },
]

export function BlogHero() {
    const [current, setCurrent] = useState(0)
    const [fading, setFading] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setFading(true)
            setTimeout(() => {
                setCurrent((prev) => (prev + 1) % SLIDES.length)
                setFading(false)
            }, 350)
        }, 4500)
        return () => clearInterval(interval)
    }, [])

    const slide = SLIDES[current]

    return (
        <section
            className="relative overflow-hidden pb-20 pt-12 md:pb-28 md:pt-16"
            style={{
                backgroundColor: slide.bg,
                transition: "background-color 0.7s ease",
            }}
        >
            {/* Blur blobs */}
            <div
                className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full blur-3xl"
                style={{ backgroundColor: slide.blobColor, transition: "background-color 0.7s ease" }}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute -bottom-40 -left-32 h-72 w-72 rounded-full blur-3xl"
                style={{ backgroundColor: slide.blobColor, transition: "background-color 0.7s ease" }}
                aria-hidden="true"
            />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid items-center gap-10 md:grid-cols-2">

                    {/* Texto */}
                    <div>
                        <p
                            className="mb-4 text-2xl md:text-3xl"
                            style={{ color: slide.accentColor, transition: "color 0.7s ease" }}
                        >Centro de contenido y novedades</p>
                        <h1 className="max-w-xl font-display text-4xl font-bold leading-[1.12] tracking-[-0.02em] text-foreground text-balance md:text-6xl">
                            Un espacio para explorar, aprender y conectar.
                        </h1>
                        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
                            Encuentra guías de bienestar, novedades digitales y herramientas diseñadas para acompañarte en cada etapa.
                        </p>

                    </div>

                    {/* Imagen */}
                    <div className="flex justify-center md:justify-end">
                        <div
                            className="relative w-full max-w-[520px]"
                            style={{
                                opacity: fading ? 0 : 1,
                                transition: "opacity 0.35s ease",
                            }}
                        >
                            <Image
                                src={slide.image}
                                alt=""
                                aria-hidden="true"
                                width={520}
                                height={520}
                                priority
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave */}
            <div className="absolute -bottom-px left-0 right-0 text-background" aria-hidden="true">
                <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="block h-8 w-full sm:h-10 md:h-12" preserveAspectRatio="none">
                    <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7366 960 46.5083C1120 42.2805 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
                </svg>
            </div>
        </section>
    )
}
