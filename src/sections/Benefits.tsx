import { Activity, ShieldCheck, Zap, BatteryFull, Heart } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const benefits = [
  { icon: Activity, label: 'Mejora el flujo sanguíneo' },
  { icon: ShieldCheck, label: 'Reduce la inflamación' },
  { icon: Zap, label: 'Acelera la recuperación' },
  { icon: BatteryFull, label: 'Reduce la fatiga' },
  { icon: Heart, label: 'Mejora la circulación' },
]

export default function Benefits() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section
      className="py-20 lg:py-24"
      style={{
        background: 'linear-gradient(135deg, #E87040 0%, #F2A93B 100%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-14">
          <h2 className="font-heading text-3xl sm:text-4xl font-semibold text-white mb-3 leading-tight">
            ¿Por qué elegir la terapia térmica?
          </h2>
          <p className="font-body text-base sm:text-lg text-white/80 max-w-2xl mx-auto">
            Nuestros tratamientos ofrecen beneficios comprobados para tu salud y bienestar general.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8"
        >
          {benefits.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className={`flex flex-col items-center text-center transition-all duration-500 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{
                  transitionDelay: isVisible ? `${i * 100}ms` : '0ms',
                }}
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/15 flex items-center justify-center mb-4">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>
                <p className="font-body font-medium text-sm sm:text-base text-white">
                  {item.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
