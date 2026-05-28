import { Calculator, CreditCard, FileText } from "lucide-react"
import Link from "next/link"

const items = [
  {
    icon: CreditCard,
    title: "Pagar en línea",
    href: "https://www.portal.losolivoscartagena.com/",
    external: true,
  },
  {
    icon: Calculator,
    title: "Cotizar homenaje",
    href: "/cotizar",
    external: false,
  },
  {
    icon: FileText,
    title: "Trámites homenaje",
    href: "/tramites",
    external: false,
  },
]

export function Services() {
  return (
    <div className="relative z-20 -mt-6 md:-mt-10 pb-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-2xl shadow-xl border border-border/60 overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border/60">
            {items.map((item) => {
              const Icon = item.icon
              const inner = (
                <div className="group flex items-center justify-center gap-4 p-5 md:p-6 hover:bg-primary/[0.04] transition-colors cursor-pointer">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-200 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-foreground leading-tight">{item.title}</p>
                </div>
              )

              return item.external ? (
                <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <Link key={item.title} href={item.href}>
                  {inner}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
