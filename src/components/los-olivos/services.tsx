import { Calculator, CreditCard, FileText } from "lucide-react"
import Link from "next/link"

const items = [
  {
    icon: CreditCard,
    title: "Pagar en línea",
    desc: "Realiza el pago de tu plan, producto o servicio de forma segura, rápida y sin salir de casa.",
    href: "https://pagos.losolivoscartagena.com",
    external: true,
  },
  {
    icon: Calculator,
    title: "Cotizar homenaje",
    desc: "Conoce el valor de nuestros servicios de necesidad inmediata y encuentra la alternativa que mejor se adapte a tus necesidades.",
    href: "/cotizar",
    external: false,
  },
  {
    icon: FileText,
    title: "Trámites fallecido",
    desc: "Accede a la información y documentación necesaria para realizar los trámites requeridos durante el proceso de despedida de tu ser querido.",
    href: "/tramites",
    external: false,
  },
]

export function Services() {
  return (
    <div className="relative z-20 -mt-6 md:-mt-10 pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          {items.map((item) => {
            const Icon = item.icon
            const inner = (
              <div className="group flex items-center gap-4 p-5 bg-white rounded-2xl border border-border/60 hover:border-primary/30 transition-all duration-200 cursor-pointer w-full h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground leading-tight">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">{item.desc}</p>
                </div>
              </div>
            )
            return item.external ? (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">{inner}</a>
            ) : (
              <Link key={item.title} href={item.href}>{inner}</Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
