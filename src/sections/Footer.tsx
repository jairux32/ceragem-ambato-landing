import { Calendar, Phone } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const quickLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Equipos', href: '#equipos' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-marron">
      {/* CTA Section */}
      <div className="py-16 lg:py-20 border-b border-white/10">
        <div
          ref={ref}
          className={`max-w-3xl mx-auto px-4 sm:px-6 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-4 leading-tight">
            ¡Tu cuerpo avisa antes de empeorar... Actúa hoy!
          </h2>
          <p className="font-body text-base sm:text-lg text-crema/70 mb-8">
            Agenda tu cita y recibe atención personalizada con la profesional Carmen Viera Proaño.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/593983630006"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-naranja text-white font-body font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-naranja-claro hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Agenda tu cita ahora
            </a>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5 text-naranja-claro" />
            <span className="font-body text-xl text-naranja-claro font-semibold">
              098 363 0006
            </span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Name */}
            <div className="flex items-center gap-3">
              <img
                src="/images/logo-ceragem.jpg"
                alt="CERAGEM"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-body font-semibold text-white text-sm">
                  Centro de Calor Terapéutico
                </p>
                <p className="font-body text-xs text-crema/50">CERAGEM</p>
              </div>
            </div>

            {/* Quick Links */}
            <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    handleNavClick(link.href)
                  }}
                  className="font-body text-sm text-crema/60 hover:text-naranja-claro transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <p className="font-body text-xs sm:text-sm text-crema/40">
              © {new Date().getFullYear()} Centro de Calor Terapéutico CERAGEM. Todos los derechos
              reservados.
            </p>
            <p className="font-body text-xs text-crema/30 mt-1">
              Propietaria: Carmen Viera Proaño | Ambato, Ecuador
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
