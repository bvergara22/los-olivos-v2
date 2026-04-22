import { Footer } from "@/components/los-olivos/footer"
import { Header } from "@/components/los-olivos/header"
import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Comfortaa, Raleway } from 'next/font/google'
import React from "react"
import './globals.css'

const _raleway = Raleway({ subsets: ["latin"], variable: "--font-sans" });
const _comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-display" });

const siteUrl = 'https://losolivoscartagena.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Los Olivos Cartagena',
    template: '%s | Los Olivos Cartagena',
  },
  description: 'Trascendimos de la protección exequial a la protección familiar integral. Más de 30 años al servicio solidario en Cartagena y la región.',
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: siteUrl,
    siteName: 'Los Olivos Cartagena',
    title: 'Los Olivos Cartagena',
    description: 'Trascendimos de la protección exequial a la protección familiar integral. Más de 30 años al servicio solidario en Cartagena y la región.',
    images: [
      {
        url: '/logo-olivos.png',
        width: 1200,
        height: 630,
        alt: 'Los Olivos Cartagena',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Los Olivos Cartagena - Protección Familiar Integral',
    description: 'Trascendimos de la protección exequial a la protección familiar integral. Más de 30 años al servicio solidario.',
    images: ['/logo-olivos.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${_raleway.variable} ${_comfortaa.variable} font-sans antialiased`}>
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
