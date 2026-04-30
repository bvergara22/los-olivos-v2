import { AsistenciasPopup } from "@/components/los-olivos/asistencias-popup"
import { Benefits } from "@/components/los-olivos/benefits"
import { Contact } from "@/components/los-olivos/contact"
import { FeedbackPopup } from "@/components/los-olivos/feedback-popup"
import { Hero } from "@/components/los-olivos/hero"
import { Novedades } from "@/components/los-olivos/novedades"
import { PreguntasFrecuentes } from "@/components/los-olivos/preguntas-frecuentes"
import { SedesPlanes } from "@/components/los-olivos/sedes-planes"
import { Services } from "@/components/los-olivos/services"
import { Steps } from "@/components/los-olivos/steps"
import { WhyUs } from "@/components/los-olivos/why-us"

export default function LosOlivosPage() {
  return (
    <>
      <AsistenciasPopup />
      <FeedbackPopup />
      <Hero />
      <Services />
      <SedesPlanes />
      <Benefits />
      <Novedades />
      <Steps />
      <WhyUs />
      <PreguntasFrecuentes />
      <Contact />
    </>
  )
}
