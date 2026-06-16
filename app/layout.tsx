import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  variable: '--font-heading',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})
const jost = Jost({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
})

export const metadata: Metadata = {
  title: 'meraki · Estudio de Uñas en Córdoba Capital',
  description:
    'meraki en Córdoba Capital. Manicura, esmaltado semipermanente, kapping, soft gel y nail art con atención personalizada. Reservá tu turno por WhatsApp.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/images/nails_logo.jpg',
        type: 'image/jpeg',
      },
    ],
    shortcut: '/images/nails_logo.jpg',
    apple: '/images/nails_logo.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f1e6',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      className={`light ${cormorant.variable} ${jost.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
