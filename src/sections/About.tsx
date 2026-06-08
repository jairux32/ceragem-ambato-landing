import { CheckCircle2 } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const benefits = [
  'Terapia 100% natural sin efectos secundarios',
  'Equipos de tecnología coreana certificados',
  'Atención personalizada y profesional',
  'Resultados desde la primera sesión',
]

export default function About() {
  const { ref: textRef, isVisible: textVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: imgRef, isVisible: imgVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="sobre-nosotros" className="py-20 lg:py-28 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div
            ref={textRef}
            className={`lg:col-span-3 transition-all duration-700 ${
              textVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <span className="inline-block font-body text-xs sm:text-sm uppercase tracking-[0.15em] text-naranja font-semibold mb-3">
              Sobre Nosotros
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-marron mb-6 leading-tight">
              Tu bienestar es nuestra prioridad
            </h2>
            <div className="space-y-4 mb-8">
              <p className="font-body text-base text-gray-600 leading-relaxed">
                <strong>Centro de Calor Terapéutico CERAGEM</strong>, dirigido por la profesional{' '}
                <strong>Carmen Viera Proaño</strong>, es un espacio dedicado a mejorar tu calidad de
                vida a través de terapias térmicas naturales y tecnología de vanguardia.
              </p>
              <p className="font-body text-base text-gray-600 leading-relaxed">
                Contamos con equipos certificados <strong>CERAGEM</strong> y <strong>CHIKIMI</strong>{' '}
                que combinan infrarrojo lejano, piedras de jade, iones negativos y escaneo vertebral
                para ofrecerte un tratamiento integral y personalizado.
              </p>
            </div>

            {/* Benefits list */}
            <ul className="space-y-3">
              {benefits.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-verde mt-0.5 shrink-0" />
                  <span className="font-body text-sm sm:text-base text-marron">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div
            ref={imgRef}
            className={`lg:col-span-2 transition-all duration-700 delay-200 ${
              imgVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="relative">
              <img
                src="/images/fachada-completa.jpg"
                alt="Fachada del Centro de Calor Terapéutico CERAGEM en Ambato, Ecuador"
                className="w-full rounded-2xl shadow-xl object-cover"
                loading="lazy"
              />
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-naranja text-white rounded-xl px-4 py-3 sm:px-6 sm:py-4 shadow-lg">
                <p className="font-heading font-bold text-xl sm:text-2xl">+5 años</p>
                <p className="font-body text-xs sm:text-sm opacity-90">de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
