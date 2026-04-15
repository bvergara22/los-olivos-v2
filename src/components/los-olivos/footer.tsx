import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const quickLinks = [
    { label: "Previsión exequial", href: "/planes", external: false },
    { label: "Pagos en linea", href: "/pagos", external: false },
    { label: "Cotizar homenaje", href: "/cotizar", external: false },
    { label: "Trámites", href: "/tramites", external: false },
  ]

  const serviceLinks = [
    { label: "Homenaje al amor", href: "/homenaje", external: false },
    { label: "Parque cementerio", href: "/parque-cementerio", external: false },
    { label: "Unidad de duelo", href: "/unidad-duelo", external: false },
    { label: "Nosotros", href: "/nosotros", external: false },
    { label: "Blog", href: "/blog", external: true },
  ]

  const legalLinks = [
    { label: "Tratamiento de datos", href: "/tratamiento-de-datos", external: false },
    { label: "Protocolo COVID-19", href: "#", external: false },
    { label: "Directorio", href: "#", external: false },
  ]

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-10 mb-8 md:mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image
                src="/logo-olivos.png"
                alt="Los Olivos Cartagena"
                width={160}
                height={70}
                className="object-contain"
              />
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Más de 30 años protegiendo familias con servicios exequiales integrales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a 
                      href={link.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Servicios</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a 
                      href={link.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="text-sm text-background/70 hover:text-primary transition-colors">
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-background/70">
              <p>Tel: 310 6171987</p>
              <p>WhatsApp: 323 3093435</p>
              <p>Línea Nacional: 018000-180-150</p>
              <p>contacto@losolivoscartagena.com</p>
              <p className="text-background/50 text-xs leading-relaxed">Carretera la Cordialidad Trv 54 #31-J27, Cartagena, Bolívar</p>
            </div>
            
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.facebook.com/olivos.cartagena"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/olivos.ctg/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@olivos.ctg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/573233093435"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>2026 Los Olivos Cartagena. Todos los derechos reservados.</p>
          <p className="mt-1">CENTRAL COOPERATIVA DE SERVICIOS FUNERARIOS DE CARTAGENA - CARTAFUN</p>
        </div>
      </div>
    </footer>
  )
}
