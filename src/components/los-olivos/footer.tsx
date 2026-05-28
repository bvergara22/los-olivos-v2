import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const quickLinks = [
    { label: "Previsión exequial", href: "/planes", external: false },
    { label: "Pagos en línea", href: "#", external: false },
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
    { label: "Directorio", href: "/directorio", external: false },
  ]

  return (
    <footer className="relative overflow-hidden bg-primary text-primary-foreground">

      {/* ── Fondo decorativo ─────────────────────────────────────── */}
      <div className="pointer-events-none select-none absolute inset-0" aria-hidden>
        <svg className="absolute -top-10 -left-10 w-[200px] h-[200px] opacity-15" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="white" d="M44.7,-62.4C56.5,-53.5,63.2,-38.3,67.8,-22.4C72.4,-6.5,74.9,10.1,70.1,24.8C65.3,39.5,53.2,52.3,39,60.3C24.8,68.3,8.5,71.5,-7.4,70.3C-23.3,69.1,-38.8,63.5,-50.6,53.3C-62.4,43.1,-70.5,28.3,-72.4,12.6C-74.3,-3.1,-70,-19.7,-61.3,-32.4C-52.6,-45.1,-39.5,-53.9,-26,-61.2C-12.5,-68.5,1.4,-74.3,15.2,-72.4C29,-70.5,32.9,-71.3,44.7,-62.4Z" transform="translate(100 100)" />
        </svg>
        <svg className="absolute -bottom-12 -right-8 w-[220px] h-[220px] opacity-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="black" d="M39.9,-52.3C51.2,-43.2,59.4,-30.2,63.5,-15.6C67.6,-1,67.6,15.2,61.5,28.4C55.4,41.6,43.2,51.8,29.6,57.8C16,63.8,1,65.6,-14.3,63C-29.6,60.4,-45.2,53.4,-55.5,41.8C-65.8,30.2,-70.8,14,-68.4,-0.8C-66,-15.6,-56.2,-29,-45.1,-38.2C-34,-47.4,-21.6,-52.4,-8.1,-56.2C5.4,-60,28.6,-61.4,39.9,-52.3Z" transform="translate(100 100)" />
        </svg>
        <div className="absolute top-1/2 -translate-y-1/2 left-1/3 w-[180px] h-[180px] rounded-full bg-white/5 blur-[70px]" />
        <svg className="absolute top-6 right-1/4 w-14 h-14 opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <polygon fill="white" points="50,5 95,50 50,95 5,50" />
        </svg>
        <svg className="absolute bottom-10 left-1/4 w-24 h-24 opacity-[0.08]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="45" fill="none" stroke="white" strokeWidth="1.5" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="white" strokeWidth="0.8" />
        </svg>
        <svg className="absolute -top-4 right-0 w-44 h-44 opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          {[0,20,40,60,80,100,120,140,160,180,200].map((x) => (
            <line key={x} x1={x} y1="0" x2={x - 200} y2="200" stroke="white" strokeWidth="1" />
          ))}
        </svg>
      </div>

      {/* ── Contenido ────────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-4">

        {/* Grid principal */}
        <div className="grid md:grid-cols-2 lg:grid-cols-[1.5fr_1.5fr_2fr_2.5fr] gap-6 md:gap-0 mb-6 lg:divide-x lg:divide-primary-foreground/15">

          {/* Brand */}
          <div className="lg:pr-10">
            <Link href="/" className="flex items-center mb-3">
              <Image src="/logo_blanco.png" alt="Los Olivos Cartagena" width={140} height={58} className="object-contain" />
            </Link>
            <p className="text-sm text-primary-foreground/70 leading-relaxed mb-4">
              50 años protegiendo familias con servicios integrales.
            </p>
            <div className="flex gap-2.5">
              <a href="https://www.facebook.com/Olivos.Ctg/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/25 flex items-center justify-center transition-all hover:scale-110">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/olivos.ctg/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/25 flex items-center justify-center transition-all hover:scale-110">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.tiktok.com/@olivos.ctg" target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/25 flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
                </svg>
              </a>
              <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-primary-foreground/10 hover:bg-primary-foreground/25 flex items-center justify-center transition-all hover:scale-110">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="lg:px-10">
            <h4 className="font-display font-bold mb-3">Enlaces rápidos</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <a href={link.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-primary-foreground/30 group-hover:bg-primary-foreground transition-colors" />
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href}
                      className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group">
                      <span className="w-1 h-1 rounded-full bg-primary-foreground/30 group-hover:bg-primary-foreground transition-colors" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:px-10">
            <h4 className="font-display font-bold mb-3">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground hover:translate-x-1 transition-all inline-flex items-center gap-1.5 group">
                    <span className="w-1 h-1 rounded-full bg-primary-foreground/30 group-hover:bg-primary-foreground transition-colors" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="lg:pl-10">
            <h4 className="font-display font-bold mb-3">Contacto</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <p>WhatsApp: 323 3093435</p>
              <p>Homenaje: 310 6171987</p>
              <p>Línea Nacional: 018000-180-150</p>
              <p>contacto@losolivoscartagena.com</p>
              <p className="text-primary-foreground/50 text-xs leading-relaxed">
                Carretera la Cordialidad Trv 54 #31-J27,<br />Cartagena, Bolívar
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
          <p>© 2026 Los Olivos Cartagena. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
