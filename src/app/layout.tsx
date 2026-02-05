import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Comfortaa, Raleway } from 'next/font/google'
import React from "react"
import './globals.css'

const _raleway = Raleway({ subsets: ["latin"], variable: "--font-sans" });
const _comfortaa = Comfortaa({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  title: 'Los Olivos Cartagena - Proteccion Familiar Integral',
  description: 'Transcendimos de la proteccion exequial a la proteccion familiar integral. Mas de 30 anos al servicio solidario.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
