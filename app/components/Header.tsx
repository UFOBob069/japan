'use client'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MinpakuStay
        </Link>
        <div className="flex gap-6">
          <Link href="/en" className="hover:text-blue-600">
            English
          </Link>
          <Link href="/ja" className="hover:text-blue-600">
            日本語
          </Link>
        </div>
      </nav>
    </header>
  )
} 