import { Facebook, Instagram, Phone } from "lucide-react"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
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
              <p>Tel: (5) 6930172</p>
              <p>WhatsApp: 323 3093435</p>
              <p>Línea Nacional: 018000-180-150</p>
              <p>contacto@losolivoscartagena.com</p>
              <p className="text-background/50 text-xs leading-relaxed">Carretera la Cordialidad Trv 54 #31-J27, Cartagena, Bolívar</p>
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
          <p>2026 Los Olivos Cartagena. Todos los derechos reservados.</p>
          <p className="mt-1">CENTRAL COOPERATIVA DE SERVICIOS FUNERARIOS DE CARTAGENA - CARTAFUN</p>
        </div>
      </div>
    </footer>
  )
}
