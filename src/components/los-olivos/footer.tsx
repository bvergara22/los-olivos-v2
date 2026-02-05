import { Facebook, Instagram, Phone } from "lucide-react"

/**
 * LEY DE PROXIMIDAD: Links relacionados agrupados
 * LEY DE POSICION SERIAL: Informacion importante al final (se recuerda)
 * LEY DE JAKOB: Footer estandar que usuarios reconocen
 */
export function Footer() {
  const quickLinks = [
    { label: "Prevision exequial", href: "https://planes.losolivoscartagena.com/" },
    { label: "Pagos en linea", href: "https://pagos.losolivoscartagena.com/" },
    { label: "Nosotros", href: "https://www.losolivoscartagena.com/nosotros" },
    { label: "Blog", href: "https://www.losolivoscartagena.com/blog" },
  ]

  const legalLinks = [
    { label: "Tratamiento de datos", href: "https://www.losolivoscartagena.com/tratamiento-de-datos" },
    { label: "Protocolo COVID-19", href: "#" },
    { label: "Directorio", href: "#" },
  ]

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand - Ley de Posicion Serial */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-lg">LO</span>
              </div>
              <div>
                <h3 className="font-display font-bold text-lg leading-tight">Los Olivos</h3>
                <p className="text-xs text-background/60">Cartagena</p>
              </div>
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Mas de 30 anos protegiendo familias con servicios exequiales integrales.
            </p>
          </div>

          {/* Quick Links - Ley de Proximidad */}
          <div>
            <h4 className="font-display font-bold mb-4">Enlaces rapidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links - Ley de Proximidad */}
          <div>
            <h4 className="font-display font-bold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-background/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Ley de Fitt */}
          <div>
            <h4 className="font-display font-bold mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-background/70">
              <p>PBX: (5) 6930172</p>
              <p>WhatsApp: 323 3093435</p>
              <p>Linea Nacional: 018000-180-150</p>
              <p>contacto@losolivoscartagena.com</p>
            </div>
            
            {/* Social - Ley de Similitud */}
            <div className="flex gap-3 mt-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-lg bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
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
