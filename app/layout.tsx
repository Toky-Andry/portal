import type { Metadata } from 'next'
import './globals.css'
import CustomCursor from '@/components/ui/CustomCursor'
import Navbar from '@/components/ui/Navbar'

export const metadata: Metadata = {
  title: 'Clickman — Fullstack Developer',
  description: 'Portfolio organique de Clickman, développeur Fullstack créatif.',
  keywords: ['Fullstack', 'Developer', 'Portfolio', 'React', 'Next.js', 'Node.js'],
  openGraph: {
    title: 'Clickman — Fullstack Developer',
    description: 'Portfolio organique de Clickman, développeur Fullstack créatif.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <CustomCursor />
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
