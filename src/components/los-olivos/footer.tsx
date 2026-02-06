import { Facebook, Instagram, Phone } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const quickLinks = [
    { label: "Prevision exequial", href: "https://planes.losolivoscartagena.com/", external: true },
    { label: "Pagos en linea", href: "/pagos", external: false },
    { label: "Cotizar homenaje", href: "/cotizar", external: false },
    { label: "Tramites", href: "/tramites", external: false },
  ]

  const serviceLinks = [
    { label: "Homenaje al amor", href: "/homenaje", external: false },
    { label: "Parque cementerio", href: "/parque-cementerio", external: false },
    { label: "Unidad de duelo", href: "/unidad-duelo", external: false },
    { label: "Nosotros", href: "https://www.losolivoscartagena.com/nosotros", external: true },
    { label: "Blog", href: "https://www.losolivoscartagena.com/blog", external: true },
  ]

  const legalLinks = [
    { label: "Tratamiento de datos", href: "https://www.losolivoscartagena.com/tratamiento-de-datos", external: true },
    { label: "Protocolo COVID-19", href: "#", external: false },
    { label: "Directorio", href: "#", external: false },
  ]

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">LO</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg leading-tight">Los Olivos</h3>
                <p className="text-xs text-background/60">Cartagena</p>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Mas de 30 anos protegiendo familias con servicios exequiales integrales.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4">Enlaces rapidos</h4>
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
              <p>PBX: (5) 6930172</p>
              <p>WhatsApp: 323 3093435</p>
              <p>Linea Nacional: 018000-180-150</p>
              <p>contacto@losolivoscartagena.com</p>
              <p className="text-background/50 text-xs leading-relaxed">Carretera la Cordialidad Trv 54 #31-J27, Cartagena, Bolivar</p>
            </div>
            
            <div className="flex gap-3 mt-4">
              <a 
                href="https://www.facebook.com/losolivoscartagena" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/losolivoscartagena" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://wa.me/573233093435" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>2025 Los Olivos Cartagena. Todos los derechos reservados.</p>
          <p className="mt-1">CENTRAL COOPERATIVA DE SERVICIOS FUNERARIOS DE CARTAGENA - CARTAFUN</p>
        </div>
      </div>
    </footer>
  )
}
