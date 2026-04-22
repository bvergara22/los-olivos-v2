import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function TarjetaBeneficios() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-3xl md:text-4xl text-vida-dark block">Más beneficios para ti</span>
          <h2 className="font-display text-xl md:text-2xl text-foreground mt-2 text-balance">
            Tarjeta Golden Offers
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Te brindamos un mundo de beneficios para asegurarnos no sólo de tu protección exequial sino también de contribuir en momentos únicos junto a toda tu familia.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image
            src="/tarjeta-golden-offers.png"
            alt="Tarjeta Golden Offers"
            width={480}
            height={300}
            className="object-contain w-full max-w-md h-auto drop-shadow-[0_8px_24px_rgba(0,0,0,0.12)]"
          />
          <Button
            size="lg"
            className="gap-2 px-8"
            style={{ backgroundColor: "#F0A500", borderColor: "#F0A500", color: "#fff" }}
            asChild
          >
            <a href="https://goldenoffer.losolivoscartagena.com/" target="_blank" rel="noopener noreferrer">
              Conoce más
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
