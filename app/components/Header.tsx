'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-black shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Artists Retreat
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/about" className="hover:text-white transition">About</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </nav>

        {/* Mobile Toggle Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden bg-black text-white-200 border-t px-4 pb-4 space-y-2">
          <Link href="/" className="block hover:text-white" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-white" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/contact" className="block hover:text-white" onClick={() => setIsOpen(false)}>Contact</Link>
        </nav>
      )}
    </header>
  )
}
