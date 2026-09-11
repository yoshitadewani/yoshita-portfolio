import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Yoshita Dewani | Graphic Designer',
  description: 'Graphic designer creating visual identities, campaigns, and digital experiences that make ideas memorable.',
  keywords: ['graphic design', 'brand identity', 'poster design', 'social media design', 'visual design'],
}

export const viewport = {
  themeColor: '#faf8f3',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${plusJakarta.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
