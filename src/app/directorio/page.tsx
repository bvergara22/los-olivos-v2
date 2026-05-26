import Image from "next/image"
import Link from "next/link"

// ─── SVG icons ─────────────────────────────────────────────────────────────────

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  )
}
function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.2 8.2 0 0 0 4.79 1.53V6.75a4.85 4.85 0 0 1-1.02-.06z" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.46 2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6.29 6.29l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
function IconMap() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
function IconAdvisor() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
}
function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

const PRIMARY = "#018c58"
const PRIMARY_DARK = "#016645"
const PRIMARY_LIGHT = "#e6f7f1"
const PRIMARY_MID = "#b3e4d0"

export default function DirectorioPage() {
  return (
    <div className="min-h-screen" style={{ background: "#f0f7f4", fontFamily: "var(--font-sans, sans-serif)" }}>

      {/* Header */}
      <div style={{ background: `linear-gradient(160deg, ${PRIMARY_DARK} 0%, ${PRIMARY} 60%, #01a86b 100%)` }} className="px-4 sm:px-8 pt-8 sm:pt-12 pb-10 sm:pb-14 text-center relative overflow-hidden">

        {/* Círculos decorativos — escalan con vw */}
        <div className="absolute rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.06)", width: "clamp(120px,35vw,340px)", height: "clamp(120px,35vw,340px)", top: "clamp(-60px,-18vw,-40px)", left: "clamp(-60px,-18vw,-40px)" }} />
        <div className="absolute rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.07)", width: "clamp(70px,20vw,200px)", height: "clamp(70px,20vw,200px)", top: "clamp(-30px,-8vw,-10px)", left: "clamp(-30px,-8vw,-10px)" }} />
        <div className="absolute rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.06)", width: "clamp(140px,40vw,380px)", height: "clamp(140px,40vw,380px)", bottom: "clamp(-80px,-22vw,-50px)", right: "clamp(-80px,-22vw,-50px)" }} />
        <div className="absolute rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.07)", width: "clamp(80px,22vw,220px)", height: "clamp(80px,22vw,220px)", bottom: "clamp(-40px,-10vw,-15px)", right: "clamp(-40px,-10vw,-15px)" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.06) 0%, transparent 65%)" }} />

        {/* Ola inferior */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden>
          <svg viewBox="0 0 500 40" preserveAspectRatio="none" className="w-full h-6 sm:h-8 md:h-10" style={{ fill: "#f0f7f4" }}>
            <path d="M0 40 C125 10 375 10 500 40 L500 40 L0 40 Z" />
          </svg>
        </div>

        <div className="relative z-10 max-w-lg mx-auto px-4 flex items-center justify-center">
          <Image src="/logo_blanco.png" alt="Los Olivos Cartagena" width={400} height={400} className="object-contain opacity-100 pointer-events-none select-none w-full max-w-xs sm:max-w-sm md:max-w-md" />
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 pt-5 pb-6 space-y-3">

        {/* Portal destacado */}
        <a href="https://www.portal.losolivoscartagena.com/" target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-4 px-4 py-3.5 rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-all group"
          style={{ background: `linear-gradient(135deg, ${PRIMARY_DARK}, ${PRIMARY})`, color: "#fff" }}>
          <div className="w-1 self-stretch rounded-full flex-shrink-0 bg-white/40" />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold leading-snug">Portal del afiliado</p>
            <p className="text-xs mt-0.5 leading-snug opacity-70">Gestiona tu plan y trámites</p>
          </div>
          <span className="flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
            <IconArrow />
          </span>
        </a>

        {/* Enlaces principales */}
        <div className="space-y-2.5">
          {[
            { href: "/",                                                                    label: "Nuestro sitio web",           sub: "Conoce todo sobre Los Olivos",       external: false },
            { href: "#",                                                                    label: "Pagos online",                sub: "Paga tu cuota de forma rápida",      external: false },
            { href: "https://www.portal.losolivoscartagena.com/afiliacion-en-linea",       label: "Afiliaciones virtuales",      sub: "Afíliate desde donde estés",         external: true  },
            { href: "https://www.portal.losolivoscartagena.com/tienda",                    label: "Tienda",                      sub: "Descuentos y beneficios exclusivos", external: true  },
            { href: "/planes",                                                              label: "Planes exequiales",           sub: "Protección para toda tu familia",    external: false },
            { href: "/tramites",                                                            label: "Trámites personas fallecidas",sub: "Documentos y procedimientos",        external: false },
            { href: "/cotizar",                                                             label: "Cotizar homenaje",            sub: "Solicita una cotización ahora",      external: false },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-4 px-4 py-3.5 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-[1.01] transition-all group"
            >
              <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: PRIMARY }} />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#1a2e22] leading-snug">{item.label}</p>
                <p className="text-xs mt-0.5 leading-snug" style={{ color: PRIMARY + "99" }}>{item.sub}</p>
              </div>
              <span className="flex-shrink-0 opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: PRIMARY }}>
                <IconArrow />
              </span>
            </a>
          ))}

          {/* Obituarios */}
          <Link
            href="/#obituarios"
            className="flex items-center gap-4 px-4 py-3.5 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-[1.01] transition-all group"
          >
            <div className="w-1 self-stretch rounded-full flex-shrink-0" style={{ background: PRIMARY }} />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-[#1a2e22] leading-snug">Obituarios</p>
              <p className="text-xs mt-0.5 leading-snug" style={{ color: PRIMARY + "99" }}>Condolencias y homenajes activos</p>
            </div>
            <span className="flex-shrink-0 opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: PRIMARY }}>
              <IconArrow />
            </span>
          </Link>
        </div>

        {/* Contacto */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-3 px-1" style={{ color: PRIMARY }}>Contacto directo</p>
          <div className="space-y-2.5">
            {[
              { href: "https://wa.me/573233093435?text=Hola%20Lia", label: "Chatea con Lia",                        sub: "Asistente Lia · Atención 24 horas",  external: true,  icon: <IconAdvisor /> },
              { href: "tel:3106171987",                              label: "310 617 1987",                         sub: "Teléfono de homenajes",              external: false, icon: <IconPhone /> },
              { href: "tel:018000180150",                            label: "018000-180-150",                       sub: "Línea nacional gratuita",            external: false, icon: <IconPhone /> },
              { href: "mailto:contacto@losolivoscartagena.com",      label: "contacto@losolivoscartagena.com",      sub: "Correo electrónico",                 external: false, icon: <IconMail /> },
              { href: "https://maps.google.com/?q=Los+Olivos+Cartagena+Transversal+53+%2331J-27", label: "Transversal 53 # 31J-27, Cartagena", sub: "Sede principal", external: true, icon: <IconMap /> },
            ].map((item) => (
              <a key={item.href} href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 px-4 py-3.5 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-[1.01] transition-all group"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: PRIMARY_LIGHT, color: PRIMARY }}>
                  {item.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-[#1a2e22] leading-snug truncate">{item.label}</p>
                  <p className="text-xs mt-0.5 leading-snug" style={{ color: PRIMARY + "99" }}>{item.sub}</p>
                </div>
                <span className="flex-shrink-0 opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: PRIMARY }}>
                  <IconArrow />
                </span>
              </a>
            ))}

          </div>
        </div>

        {/* Redes sociales */}
        <div>
          <p className="text-xs font-bold uppercase tracking-widest mb-3 px-1" style={{ color: PRIMARY }}>Síguenos</p>
          <div className="grid grid-cols-4 gap-2.5">

            <a href="https://www.facebook.com/Olivos.Ctg" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 py-3.5 rounded-2xl shadow-sm transition-all hover:scale-[1.04] hover:shadow-md"
              style={{ background: "#1877F2", color: "#fff" }}>
              <IconFacebook />
              <span className="text-[10px] font-bold">Facebook</span>
            </a>

            <a href="https://www.instagram.com/olivos.ctg" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 py-3.5 rounded-2xl shadow-sm transition-all hover:scale-[1.04] hover:shadow-md"
              style={{ background: "linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)", color: "#fff" }}>
              <IconInstagram />
              <span className="text-[10px] font-bold">Instagram</span>
            </a>

            <a href="https://wa.me/573233093435" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 py-3.5 rounded-2xl shadow-sm transition-all hover:scale-[1.04] hover:shadow-md"
              style={{ background: "#25D366", color: "#fff" }}>
              <IconWhatsApp />
              <span className="text-[10px] font-bold">WhatsApp</span>
            </a>

            <a href="https://www.tiktok.com/@olivos.ctg" target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 py-3.5 rounded-2xl shadow-sm transition-all hover:scale-[1.04] hover:shadow-md"
              style={{ background: "#010101", color: "#fff" }}>
              <IconTikTok />
              <span className="text-[10px] font-bold">TikTok</span>
            </a>

          </div>
        </div>

        {/* Footer mínimo */}
        <div className="pt-2 pb-6">
          <p className="text-sm font-medium w-full" style={{ color: "#8aab94" }}>© Cartafun · Los Olivos Cartagena · NIT 800149226-0</p>
        </div>

      </div>
    </div>
  )
}
