import './globals.css'

import Footer from '@/globals/components/Footer'
import Header from '@/globals/components/Header'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Head from 'next/head'

export const metadata: Metadata = {
  title: 'JVMTech - Portfólio de Desenvolvimento',
  description: 'Portfólio de projetos e habilidades de desenvolvimento',
}
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={outfit.className}>
        <div className="px-4 md:px-8 lg:px-72">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
