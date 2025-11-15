import { useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Programs', href: '#programs' },
    { label: 'Instructors', href: '#instructors' },
    { label: 'Schedule', href: '#schedule' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/50 border-b border-white/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="text-xl font-extrabold tracking-tight">
            <span className="text-red-600">TKD</span>
            <span className="text-gray-900"> Club</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors">
                {n.label}
              </a>
            ))}
            <a href="#contact" className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow hover:bg-red-700 transition-colors">
              <Phone size={16} /> Free Trial
            </a>
          </nav>

          <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded hover:bg-white/60">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/30 bg-white/70">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-md text-gray-800 hover:bg-white">
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="mt-2 inline-flex items-center gap-2 bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full shadow">
              <MapPin size={16} /> Visit Us
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
