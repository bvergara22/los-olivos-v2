import { Calculator, CreditCard, FileText } from "lucide-react"
import Link from "next/link"

const items = [
  {
    icon: CreditCard,
    title: "Pagar en línea",
    desc: "Realiza tus pagos de manera rápida y segura.",
    href: "https://www.portal.losolivoscartagena.com/",
    external: true,
  },
  {
    icon: Calculator,
    title: "Cotizar homenaje",
    desc: "Cotiza el costo de tu plan fácilmente.",
    href: "/cotizar",
    external: false,
  },
  {
    icon: FileText,
    title: "Trámites homenaje",
    desc: "Gestiona documentos y procesos de forma sencilla.",
    href: "/tramites",
    external: false,
  },
]

export function Services() {
  return (
    <div className="relative z-20 -mt-6 md:-mt-10 pb-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Mobile: tarjetas apiladas */}
        <div className="flex flex-col gap-3 sm:hidden items-center w-full">
          {items.map((item) => {
            const Icon = item.icon
            const inner = (
              <div className="group flex items-center gap-4 p-4 bg-card rounded-2xl border border-border/60 shadow-md hover:bg-primary/[0.04] transition-colors cursor-pointer w-full">
                <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{item.desc}</p>
                </div>
              </div>
            )
            return item.external ? (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" className="w-full">{inner}</a>
            ) : (
              <Link key={item.title} href={item.href} className="w-full">{inner}</Link>
            )
          })}
        </div>

        {/* Desktop: una sola tarjeta con divisores */}
        <div className="hidden sm:block bg-card rounded-2xl shadow-xl border border-border/60 overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-border/60">
            {items.map((item) => {
              const Icon = item.icon
              const inner = (
                <div className="group flex items-center gap-4 px-6 py-7 hover:bg-primary/[0.04] transition-colors cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200 shadow-sm">
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
    </div>
  )
}
