import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-neutral-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4">MinpakuStay</h3>
          <p className="text-neutral/80">Your guide to authentic stays in Japan</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Popular Cities</h4>
          <ul className="space-y-2">
            <li><Link href="/tokyo" className="text-neutral/80 hover:text-secondary transition-colors">Tokyo</Link></li>
            <li><Link href="/kyoto" className="text-neutral/80 hover:text-secondary transition-colors">Kyoto</Link></li>
            <li><Link href="/osaka" className="text-neutral/80 hover:text-secondary transition-colors">Osaka</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="/blog" className="text-neutral/80 hover:text-secondary transition-colors">Blog</Link></li>
            <li><Link href="/faq" className="text-neutral/80 hover:text-secondary transition-colors">FAQ</Link></li>
            <li><Link href="/contact" className="text-neutral/80 hover:text-secondary transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-neutral/80 hover:text-secondary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-neutral/80 hover:text-secondary transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
} 