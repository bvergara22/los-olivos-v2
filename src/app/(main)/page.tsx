import { Benefits } from "@/components/los-olivos/benefits"
import { Contact } from "@/components/los-olivos/contact"
import { Obituarios } from "@/components/los-olivos/obituarios"
import { PopupsWrapper } from "@/components/los-olivos/popups-wrapper"
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
      <PopupsWrapper />
      <Hero />
      <Novedades />
      <Services />
      <SedesPlanes />
      <Benefits />
      <Steps />
      <WhyUs />
      <Obituarios />
      <PreguntasFrecuentes />
      <Contact />
    </>
  )
}
