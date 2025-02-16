import './globals.css'
import { Inter } from 'next/font/google'
import Header from './_components/Header'
import Footer from './_components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MinpakuStay - Find Your Perfect Stay in Japan',
  description: 'Discover authentic Japanese accommodation through MinpakuStay. Book verified Minpaku properties across Japan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false">
      <head>
        <meta name="grammarly-disable" content="true" />
      </head>
      <body className={inter.className} data-gramm="false">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
} 