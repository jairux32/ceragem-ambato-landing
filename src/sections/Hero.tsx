import { Calendar, MessageCircle, ChevronDown } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Hero() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #E87040 0%, #F2A93B 50%, #3D2B1F 100%)',
      }}
    >
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div
        ref={ref}
        className={`relative z-10 text-center px-4 max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Logo */}
        <div className="mb-6 flex justify-center">
          <img
            src="/images/logo-ceragem.jpg"
            alt="CERAGEM Centro de Calor Terapéutico"
            className="w-28 h-28 sm:w-36 sm:h-36 rounded-full object-cover shadow-2xl border-4 border-white/30"
            loading="eager"
          />
        </div>

        {/* Tagline */}
        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
          Alivia tu dolor y mejora tu salud naturalmente
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-lg text-crema/90 mb-8 max-w-xl mx-auto leading-relaxed">
          Terapia térmica profesional con tecnología de punta en Ambato, Ecuador.
          Dirigido por la profesional <strong>Carmen Viera Proaño</strong>.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://wa.me/593983630006"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-marron font-body font-semibold px-8 py-4 rounded-full hover:bg-naranja-claro hover:text-marron transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <Calendar className="w-5 h-5" />
            Agenda tu cita
          </a>
          <a
            href="https://wa.me/593983630006"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-body font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" />
            Contáctanos por WhatsApp
          </a>
        </div>

        {/* Phone */}
        <p className="mt-6 font-body text-crema/80 text-sm">
          Llámanos: <span className="font-semibold text-white">098 363 0006</span>
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#sobre-nosotros" onClick={(e) => {
          e.preventDefault()
          document.querySelector('#sobre-nosotros')?.scrollIntoView({ behavior: 'smooth' })
        }}>
          <ChevronDown className="w-8 h-8 text-white/60 hover:text-white transition-colors" />
        </a>
      </div>
    </section>
  )
}
