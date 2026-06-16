import { Facebook, Instagram, Music2, Phone } from 'lucide-react'
import { QRCodeSVG } from 'qrcode.react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    iconColor: '#1877F2',
    url: 'https://www.facebook.com/people/centrocalorterapeutico/61590655322365/',
    description: 'Síguenos para promociones',
    qrValue: 'https://www.facebook.com/people/centrocalorterapeutico/61590655322365/',
  },
  {
    name: 'Instagram',
    icon: Instagram,
    iconColor: '#E4405F',
    url: 'https://www.instagram.com/centrocalorterapeutico',
    description: 'Conoce nuestros servicios',
    qrValue: 'https://www.instagram.com/centrocalorterapeutico',
  },
  {
    name: 'TikTok',
    icon: Music2,
    iconColor: '#000000',
    url: 'https://www.tiktok.com/@centro.terapeutico447',
    description: 'Tips de salud y bienestar',
    qrValue: 'https://www.tiktok.com/@centro.terapeutico447',
  },
  {
    name: 'WhatsApp',
    icon: Phone,
    iconColor: '#25D366',
    url: 'https://wa.me/593983630006',
    description: 'Agenda tu cita ahora',
    qrValue: 'https://wa.me/593983630006',
    isPriority: true,
  },
]

export default function QRSection() {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>()

  return (
    <section id="qr-codes" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block font-body text-xs sm:text-sm uppercase tracking-[0.15em] text-naranja font-semibold mb-3">
            Síguenos y Contacta
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-semibold text-marron mb-4 leading-tight">
            Escanea para conectar
          </h2>
          <p className="font-body text-base text-gray-600 max-w-2xl mx-auto">
            Accede rápidamente a nuestras redes sociales y WhatsApp. Escanea el código QR con tu
            cámara y conecta al instante.
          </p>
        </div>

        {/* QR Grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {socialLinks.map((social, i) => {
            const Icon = social.icon
            return (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-crema rounded-2xl p-6 sm:p-8 text-center border border-black/5
                  hover:-translate-y-1 hover:shadow-lg transition-all duration-300
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
                `}
                style={{
                  transitionDelay: isVisible ? `${i * 100}ms` : '0ms',
                  transitionDuration: '500ms',
                }}
              >
                {/* Priority badge */}
                {social.isPriority && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-verde text-white font-body text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    PRIORITARIO
                  </span>
                )}

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${social.iconColor}15` }}
                >
                  <Icon className="w-7 h-7" style={{ color: social.iconColor }} />
                </div>

                {/* Name */}
                <h3 className="font-body font-semibold text-lg text-marron mb-1">
                  {social.name}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-gray-500 mb-5">
                  {social.description}
                </p>

                {/* QR Code */}
                <div className="inline-flex justify-center">
                  <div className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 group-hover:border-naranja/30 transition-colors">
                    <QRCodeSVG
                      value={social.qrValue}
                      size={140}
                      level="M"
                      bgColor="#ffffff"
                      fgColor="#3D2B1F"
                      includeMargin={false}
                    />
                  </div>
                </div>

                {/* Footer text */}
                <p className="font-body text-xs text-gray-400 mt-4">
                  Escanea con tu cámara
                </p>
              </a>
            )
          })}
        </div>

        {/* Note */}
        <p className="text-center font-body text-sm text-gray-400 mt-10">
          Los enlaces de redes sociales son genéricos. Puedes actualizarlos contactando al administrador.
        </p>
      </div>
    </section>
  )
}
