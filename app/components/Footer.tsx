import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-bold text-xl mb-4">MinpakuStay</h3>
          <p className="text-gray-400">Your guide to authentic stays in Japan</p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Popular Cities</h4>
          <ul className="space-y-2">
            <li><Link href="/tokyo" className="text-gray-400 hover:text-white">Tokyo</Link></li>
            <li><Link href="/kyoto" className="text-gray-400 hover:text-white">Kyoto</Link></li>
            <li><Link href="/osaka" className="text-gray-400 hover:text-white">Osaka</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li><Link href="/blog" className="text-gray-400 hover:text-white">Blog</Link></li>
            <li><Link href="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><Link href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms" className="text-gray-400 hover:text-white">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
} 