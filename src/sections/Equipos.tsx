import { useScrollReveal } from '../hooks/useScrollReveal'

const equipos = [
  {
    title: 'Sillón CHIKIMI Master V4',
    tagline: 'Terapia integral con masaje inteligente',
    description:
      'Sillón de masaje terapéutico que combina múltiples técnicas de masaje, calor terapéutico y posicionamiento ergonómico para aliviar tensiones musculares completas.',
    image: '/images/equipo-sillon-chikimi.jpg',
  },
  {
    title: 'Cama Terapéutica CERAGEM',
    tagline: 'Escaneo vertebral y terapia térmica',
    description:
      'Equipo estrella con tecnología de escaneo vertebral que personaliza automáticamente el tratamiento según tu columna. Incluye infrarrojo lejano y piedras de jade.',
    image: '/images/equipo-cama-ceragem.jpg',
  },
  {
    title: 'Camilla de Piedras de Jade',
    tagline: 'Calor terapéutico con piedras naturales',
    description:
      'Superficie terapéutica con piedras de jade naturales que emiten calor infrarrojo lejano para mejorar la circulación y aliviar dolores.',
    image: '/images/equipo-camilla-jade.jpg',
  },
  {
    title: 'Masajeador de Pies CHIKIMI',
    tagline: 'Reflexología podal terapéutica',
    description:
      'Masajeador especializado que estimula los puntos de reflexología del pie, mejorando la circulación y reduciendo la fatiga.',
    image: '/images/equipo-masajeador-pies.jpg',
  },
  {
    title: 'Cojines Terapéuticos CERAGEM',
    tagline: 'Terapia focalizada para cuello y hombros',
    description:
      'Cojines terapéuticos portátiles ideales para tratar contracturas cervicales, dolores de hombros y tensiones localizadas.',
    image: '/images/equipo-cojines.jpg',
  },
  {
    title: 'Analizador QRM',
    tagline: 'Evaluación precisa de tus signos vitales',
    description:
      'Dispositivo de análisis que mide tus signos vitales antes y después de cada sesión, permitiéndote ver resultados objetivos de tu tratamiento.',
    image: '/images/analizador-qrm.jpg',
  },
]

export default function Equipos() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="equipos" className="py-20 lg:py-28 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block font-body text-xs sm:text-sm uppercase tracking-[0.15em] text-naranja font-semibold mb-3">
            Tecnología de Punta
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-marron mb-4 leading-tight">
            Equipos certificados para tu bienestar
          </h2>
          <p className="font-body text-base text-gray-600 max-w-2xl mx-auto">
            Contamos con la más avanzada tecnología en terapia térmica, directamente de Corea,
            para brindarte tratamientos efectivos y seguros.
          </p>
        </div>

        {/* Grid */}
        <div ref={ref} className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {equipos.map((equipo, i) => (
            <div
              key={i}
              className={`group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl 
                hover:-translate-y-1 transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{
                transitionDelay: isVisible ? `${i * 100}ms` : '0ms',
                transitionDuration: '600ms',
              }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={equipo.image}
                  alt={equipo.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <span className="inline-block font-body text-xs uppercase tracking-wider text-naranja font-semibold mb-2">
                  {equipo.tagline}
                </span>
                <h3 className="font-body font-semibold text-lg sm:text-xl text-marron mb-2">
                  {equipo.title}
                </h3>
                <p className="font-body text-sm sm:text-[15px] text-gray-600 leading-relaxed">
                  {equipo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
