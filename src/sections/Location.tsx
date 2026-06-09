import { MapPin, Clock, Phone, Navigation } from 'lucide-react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Location() {
  const { ref: mapRef, isVisible: mapVisible } = useScrollReveal<HTMLDivElement>()
  const { ref: infoRef, isVisible: infoVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="contacto" className="py-20 lg:py-28 bg-crema">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block font-body text-xs sm:text-sm uppercase tracking-[0.15em] text-naranja font-semibold mb-3">
            Encuéntranos
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-marron mb-4 leading-tight">
            Visítanos en Ambato
          </h2>
          <p className="font-body text-base text-gray-600 max-w-2xl mx-auto">
            Estamos ubicados en el corazón de Ambato, fácilmente accesibles para brindarte la mejor
            atención terapéutica.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Map */}
          <div
            ref={mapRef}
            className={`lg:col-span-3 transition-all duration-700 ${
              mapVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white h-full min-h-[350px] lg:min-h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8206!2d-78.6163123!3d-1.2643358!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTQnNTguMSJTIDc4wrAzNycwMC4zIlc!5e0!3m2!1ses!2sec!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Centro de Calor Terapéutico CERAGEM en Ambato, Ecuador"
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Info */}
          <div
            ref={infoRef}
            className={`lg:col-span-2 flex flex-col justify-center transition-all duration-700 delay-200 ${
              infoVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-naranja/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-naranja" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-lg text-marron mb-1">
                    Dirección
                  </h3>
                  <p className="font-body text-base text-gray-600 leading-relaxed">
                    Calles Febres Cordero entre Mariano Enríquez y Mariano Tinajero
                    <br />
                    Ambato, Ecuador
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-naranja/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-naranja" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-lg text-marron mb-1">
                    Horario de Atención
                  </h3>
                  <p className="font-body text-base text-gray-600">
                    Lunes a Sábado: 8:00 AM - 5:00 PM
                  </p>
                  <p className="font-body text-sm text-gray-400 mt-0.5">
                    Domingo: Cerrado
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-naranja/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-naranja" />
                </div>
                <div>
                  <h3 className="font-body font-semibold text-lg text-marron mb-1">
                    Teléfono
                  </h3>
                  <p className="font-body text-base text-gray-600">098 363 0006</p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href="tel:+593983630006"
                className="flex items-center justify-center gap-2 bg-naranja text-white font-body font-semibold px-6 py-3.5 rounded-full hover:bg-naranja-claro transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                Llamar ahora
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=-1.4167,-78.9247"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-naranja text-naranja font-body font-semibold px-6 py-3.5 rounded-full hover:bg-naranja hover:text-white transition-colors"
              >
                <Navigation className="w-4 h-4" />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
