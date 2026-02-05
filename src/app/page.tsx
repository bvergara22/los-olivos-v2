import { Benefits } from "@/components/los-olivos/benefits"
import { Contact } from "@/components/los-olivos/contact"
import { Footer } from "@/components/los-olivos/footer"
import { Header } from "@/components/los-olivos/header"
import { Hero } from "@/components/los-olivos/hero"
import { Novedades } from "@/components/los-olivos/novedades"
import { SedesPlanes } from "@/components/los-olivos/sedes-planes"
import { Services } from "@/components/los-olivos/services"
import { Steps } from "@/components/los-olivos/steps"
import { WhyUs } from "@/components/los-olivos/why-us"

/**
 * PROTOTIPO LOS OLIVOS CARTAGENA
 * Aplicando las 10 Leyes de UX/UI
 * 
 * Orden de secciones:
 * 1. Header (con dropdowns estilo Nequi)
 * 2. Hero (con carrusel de imagenes y botones Portal/Golden Offers)
 * 3. Services (servicios en linea)
 * 4. Sedes & Planes (carruseles de sedes y planes)
 * 5. Benefits (beneficios Olivos)
 * 6. Novedades (carrusel de noticias - no en nav)
 * 7. Steps (como pertenecer)
 * 8. WhyUs (por que elegirnos - sin boton)
 * 9. Contact (con nuevo texto)
 * 10. Footer
 */
export default function LosOlivosPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <SedesPlanes />
      <Benefits />
      <Novedades />
      <Steps />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  )
}
