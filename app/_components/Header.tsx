'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()
  const isJapanese = pathname.startsWith('/ja')

  return (
    <header className="fixed w-full bg-neutral-white/90 backdrop-blur-sm z-50 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link 
          href={isJapanese ? "/ja" : "/"} 
          className="text-2xl font-bold text-primary hover:text-primary-hover flex items-center gap-2"
        >
          <span className="text-3xl" aria-hidden="true">⛩️</span>
          <span>MinpakuStay</span>
        </Link>
        <div className="flex gap-6">
          <Link 
            href="/" 
            className={`text-primary hover:text-secondary transition-colors ${!isJapanese ? 'text-secondary' : ''}`}
          >
            English
          </Link>
          <Link 
            href="/ja" 
            className={`text-primary hover:text-secondary transition-colors ${isJapanese ? 'text-secondary' : ''}`}
          >
            日本語
          </Link>
        </div>
      </nav>
    </header>
  )
} 