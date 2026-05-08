import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import {
  Award,
  BookOpen,
  CreditCard,
  ExternalLink,
  FileCheck,
  FileText,
  Flower2,
  Gift,
  Heart,
  Mail,
  MapPin,
  MessageCircle,
  PawPrint,
  Phone,
  Shield,
  TreePine,
  Users,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Directorio - Los Olivos Cartagena",
  description: "Accede rápidamente a todos los servicios, canales de contacto y recursos de Los Olivos Cartagena.",
}

// ─── Datos ─────────────────────────────────────────────────────────────────────

const destacados = [
  {
    href: "https://www.portal.losolivoscartagena.com/",
    label: "Portal del afiliado",
    description: "Gestiona tu plan, trámites y más",
    icon: Shield,
    accent: "bg-primary text-primary-foreground",
    external: true,
  },
  {
    href: "https://pagos.losolivoscartagena.com/",
    label: "Pagos en línea",
    description: "Paga tu cuota de forma rápida y segura",
    icon: CreditCard,
    accent: "bg-[#1a7a4a] text-white",
    external: true,
  },
  {
    href: "https://www.portal.losolivoscartagena.com/afiliacion-en-linea",
    label: "Afiliación en línea",
    description: "Afíliate desde donde estés, sin filas",
    icon: FileText,
    accent: "bg-[#2563eb] text-white",
    external: true,
  },
  {
    href: "https://goldenoffer.losolivoscartagena.com/",
    label: "Golden Offers",
    description: "Descuentos y beneficios exclusivos",
    icon: Award,
    accent: "bg-[#C38B2C] text-white",
    external: true,
  },
]

const servicios = [
  {
    href: "/homenaje",
    label: "Homenaje al amor",
    description: "Ceremonias con profundo respeto y dignidad",
    icon: Heart,
    external: false,
  },
  {
    href: "/parque-cementerio",
    label: "Parque cementerio",
    description: "Espacios de paz para el descanso eterno",
    icon: TreePine,
    external: false,
  },
  {
    href: "/unidad-duelo",
    label: "Gestión de las emociones",
    description: "Acompañamiento profesional en el duelo",
    icon: Flower2,
    external: false,
  },
  {
    href: "/huellitas",
    label: "Plan Huellitas",
    description: "Protección especial para tus mascotas",
    icon: PawPrint,
    external: false,
  },
  {
    href: "/beneficios",
    label: "Beneficios Olivos",
    description: "Asistencias en vida para ti y tu familia",
    icon: Gift,
    external: false,
  },
  {
    href: "/planes",
    label: "Planes y tarifas",
    description: "Encuentra el plan ideal para tu familia",
    icon: Users,
    external: false,
  },
]

const info = [
  {
    href: "/tramites",
    label: "Trámites",
    description: "Gestión de documentos y procedimientos",
    icon: FileCheck,
    external: false,
  },
  {
    href: "/nosotros",
    label: "Nosotros",
    description: "Nuestra historia, misión y valores",
    icon: BookOpen,
    external: false,
  },
  {
    href: "/tratamiento-de-datos",
    label: "Tratamiento de datos",
    description: "Política de privacidad y protección",
    icon: Shield,
    external: false,
  },
  {
    href: "/cotizar",
    label: "Cotizar homenaje",
    description: "Solicita una cotización personalizada",
    icon: FileText,
    external: false,
  },
]

const contactos = [
  {
    href: "https://wa.me/573233093435",
    label: "WhatsApp",
    value: "+57 323 309 3435",
    sublabel: "Atención 24 horas",
    icon: MessageCircle,
    style: "bg-[#25D366] text-white",
    external: true,
  },
  {
    href: "tel:3106171987",
    label: "Teléfono de homenajes",
    value: "310 617 1987",
    sublabel: "Llamar ahora",
    icon: Phone,
    style: "bg-primary text-primary-foreground",
    external: false,
  },
  {
    href: "tel:018000180150",
    label: "Línea nacional gratuita",
    value: "018000-180-150",
    sublabel: "Sin costo desde Colombia",
    icon: Phone,
    style: "bg-card text-foreground border border-border",
    external: false,
  },
  {
    href: "mailto:contacto@losolivoscartagena.com",
    label: "Correo electrónico",
    value: "contacto@losolivoscartagena.com",
    sublabel: "Escríbenos",
    icon: Mail,
    style: "bg-card text-foreground border border-border",
    external: false,
  },
  {
    href: "https://maps.google.com/?q=Los+Olivos+Cartagena+Transversal+53+%2331J-27+Cartagena+de+Indias+Bol%C3%ADvar",
    label: "Sede principal",
    value: "Transversal 53 # 31J-27",
    sublabel: "Cartagena, Bolívar · Ver en el mapa",
    icon: MapPin,
    style: "bg-card text-foreground border border-border",
    external: true,
  },
]

const sociales = [
  {
    href: "https://www.facebook.com/Olivos.Ctg",
    label: "Facebook",
    handle: "Olivos.Ctg",
    color: "#1877F2",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/olivos.ctg",
    label: "Instagram",
    handle: "@olivos.ctg",
    color: "#E1306C",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    href: "https://wa.me/573233093435",
    label: "WhatsApp",
    handle: "+57 323 309 3435",
    color: "#25D366",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
]

// ─── Componentes ───────────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-lg font-bold text-foreground mb-4 flex items-center gap-2">
      <span className="w-1 h-5 rounded-full bg-primary inline-block" />
      {children}
    </h2>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DirectorioPage() {
  return (
    <div className="min-h-screen bg-background">

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(135deg, #e8f7ef 0%, #f2faf6 50%, #e0f0fa 100%)" }}>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #2d6a4f 0%, transparent 50%), radial-gradient(circle at 80% 20%, #1e40af 0%, transparent 50%)" }} />
        <div className="max-w-2xl mx-auto px-4 py-14 text-center relative z-10">
          <Image src="/logo-olivos.png" alt="Los Olivos Cartagena" width={160} height={66} className="mx-auto mb-6 object-contain" />
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-3">
            Directorio de servicios
          </h1>
          <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
            Accede rápidamente a todos los portales, servicios y canales de contacto de Los Olivos Cartagena.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-10 space-y-10">

        {/* Acceso rápido */}
        <div>
          <SectionTitle>Acceso rápido</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {destacados.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-4 rounded-2xl ${item.accent} shadow-sm hover:opacity-90 hover:shadow-md transition-all duration-200 group`}
                >
                  <div className="w-11 h-11 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm leading-snug">{item.label}</p>
                    <p className="text-xs opacity-80 mt-0.5 leading-snug">{item.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-60 flex-shrink-0 group-hover:opacity-100 transition-opacity" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Nuestros servicios */}
        <div>
          <SectionTitle>Nuestros servicios</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {servicios.map((item) => {
              const Icon = item.icon
              const Wrapper = item.external ? "a" : Link
              const extraProps = item.external
                ? { href: item.href, target: "_blank", rel: "noopener noreferrer" }
                : { href: item.href }
              return (
                <Wrapper
                  key={item.href}
                  {...(extraProps as { href: string })}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground leading-snug">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{item.description}</p>
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </div>

        {/* Información */}
        <div>
          <SectionTitle>Más información</SectionTitle>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {info.map((item) => {
              const Icon = item.icon
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 hover:shadow-md transition-all duration-200 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-muted text-muted-foreground flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm text-foreground leading-snug">{item.label}</p>
                    <p className="text-xs text-muted-foreground mt-0.5 leading-snug">{item.description}</p>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Contáctanos */}
        <div>
          <SectionTitle>Contáctanos</SectionTitle>
          <div className="space-y-3">
            {contactos.map((item) => {
              const Icon = item.icon
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-4 p-4 rounded-2xl ${item.style} hover:opacity-90 hover:shadow-md transition-all duration-200 group`}
                >
                  <div className="w-11 h-11 rounded-xl bg-white/15 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs opacity-75 font-medium leading-none mb-1">{item.label}</p>
                    <p className="font-bold text-sm leading-snug truncate">{item.value}</p>
                    <p className="text-xs opacity-70 mt-0.5">{item.sublabel}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 opacity-40 flex-shrink-0 group-hover:opacity-80 transition-opacity" />
                </a>
              )
            })}
          </div>
        </div>

        {/* Redes sociales */}
        <div>
          <SectionTitle>Síguenos</SectionTitle>
          <div className="grid grid-cols-3 gap-3">
            {sociales.map((red) => (
              <a
                key={red.href}
                href={red.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-card border border-border hover:shadow-md hover:scale-105 transition-all duration-200 group"
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center text-white"
                  style={{ backgroundColor: red.color }}
                >
                  {red.svg}
                </div>
                <p className="font-semibold text-xs text-foreground text-center">{red.label}</p>
                <p className="text-[11px] text-muted-foreground text-center">{red.handle}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border pt-6 text-center space-y-2">
          <Image src="/logo-olivos.png" alt="Los Olivos Cartagena" width={90} height={37} className="mx-auto opacity-60 object-contain" />
          <p className="text-xs text-muted-foreground">© Cartafun · Los Olivos Cartagena · NIT 800149226-0</p>
          <p className="text-xs text-muted-foreground">Cartagena, Bolívar, Colombia</p>
        </div>

      </div>
    </div>
  )
}
