import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Example Company - Premium Solutions & Services',
  description: 'Example Company provides top-level customized solutions for global customers. Specializing in professional services, products, and comprehensive solutions.',
  keywords: 'solutions, services, products, manufacturing, professional, global, custom',
  authors: [{ name: 'Example Company' }],
  openGraph: {
    title: 'Example Company - Premium Solutions & Services',
    description: 'Professional solutions and services with comprehensive inventory and direct sales.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
