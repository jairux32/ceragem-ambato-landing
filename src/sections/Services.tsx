import {
  Bone, Zap, Activity, Shield, HeartPulse, Droplets,
  Flame, CircleDot, CloudRain, Wind, Thermometer, Waves,
  BatteryLow, AlertCircle
} from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const conditions = [
  { icon: Bone, label: 'Problemas de Columna', desc: 'Escoliosis, hernias, lumbalgia' },
  { icon: Zap, label: 'Dolores Musculares', desc: 'Contracturas, tensiones, esguinces' },
  { icon: Activity, label: 'Várices', desc: 'Mala circulación, piernas cansadas' },
  { icon: Shield, label: 'Osteoporosis', desc: 'Fortalecimiento óseo' },
  { icon: HeartPulse, label: 'Colesterol', desc: 'Mejora del metabolismo' },
  { icon: Droplets, label: 'Hígado Graso', desc: 'Desintoxicación natural' },
  { icon: Flame, label: 'Gastritis', desc: 'Regulación digestiva' },
  { icon: CircleDot, label: 'Estreñimiento', desc: 'Mejora intestinal' },
  { icon: CloudRain, label: 'Depresión', desc: 'Bienestar emocional' },
  { icon: Wind, label: 'Estrés', desc: 'Relajación profunda' },
  { icon: Thermometer, label: 'Problemas de Tiroides', desc: 'Regulación hormonal' },
  { icon: Waves, label: 'Sangre Espesa', desc: 'Mejora circulatoria' },
  { icon: BatteryLow, label: 'Cansancio', desc: 'Recuperación energética' },
  { icon: AlertCircle, label: 'Espolón', desc: 'Alivio del dolor óseo' },
]

export default function Services() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="servicios" className="py-20 lg:py-28 bg-marron">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block font-body text-xs sm:text-sm uppercase tracking-[0.15em] text-naranja-claro font-semibold mb-3">
            Nuestros Servicios
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-white mb-4 leading-tight">
            ¿En qué podemos ayudarte?
          </h2>
          <p className="font-body text-base sm:text-lg text-crema/70 max-w-2xl mx-auto">
            Nuestras terapias están especialmente diseñadas para aliviar una amplia variedad de
            condiciones de manera natural y sin efectos secundarios.
          </p>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5"
        >
          {conditions.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className={`group bg-white/[0.07] border border-white/[0.12] rounded-2xl p-5 sm:p-6 
                  hover:bg-white/[0.12] hover:-translate-y-1 transition-all duration-300 cursor-default
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                `}
                style={{
                  transitionDelay: isVisible ? `${i * 60}ms` : '0ms',
                  transitionDuration: '500ms',
                }}
              >
                <div className="flex items-start gap-4">
                  <div className="shrink-0 w-11 h-11 rounded-xl bg-naranja-claro/20 flex items-center justify-center group-hover:bg-naranja-claro/30 transition-colors">
                    <Icon className="w-5 h-5 text-naranja-claro" />
                  </div>
                  <div>
                    <h3 className="font-body font-semibold text-white text-base mb-1">
                      {item.label}
                    </h3>
                    <p className="font-body text-sm text-crema/60 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
