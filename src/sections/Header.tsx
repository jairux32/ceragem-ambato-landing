import { useState, useEffect } from 'react'
import { Menu, X, Calendar } from 'lucide-react'

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipos', href: '#equipos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('#inicio')
            }}
            className="flex items-center gap-2"
          >
            <img
              src="/images/logo-ceragem.jpg"
              alt="CERAGEM Logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span
              className={`font-heading font-bold text-lg hidden sm:block transition-colors ${
                scrolled ? 'text-marron' : 'text-white'
              }`}
            >
              CERAGEM
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className={`font-body font-medium text-[15px] transition-colors hover:text-naranja ${
                  scrolled ? 'text-marron' : 'text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/593983630006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-naranja text-white font-body font-medium text-sm px-5 py-2 rounded-full hover:bg-naranja-claro transition-colors"
            >
              <Calendar className="w-4 h-4" />
              Agendar
            </a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-marron' : 'text-white'
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col px-4 py-4 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick(link.href)
                }}
                className="font-body font-medium text-marron py-2 px-3 rounded-lg hover:bg-crema transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/593983630006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-naranja text-white font-body font-medium text-sm px-5 py-3 rounded-full hover:bg-naranja-claro transition-colors mt-2"
            >
              <Calendar className="w-4 h-4" />
              Agendar Cita
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
