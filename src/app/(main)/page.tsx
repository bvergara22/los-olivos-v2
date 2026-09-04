import { Benefits } from "@/components/los-olivos/benefits"
import { Contact } from "@/components/los-olivos/contact"
import { Obituarios } from "@/components/los-olivos/obituarios"
import { PopupsWrapper } from "@/components/los-olivos/popups-wrapper"
import { Hero } from "@/components/los-olivos/hero"
import { PreguntasFrecuentes } from "@/components/los-olivos/preguntas-frecuentes"
import { SedesPlanes } from "@/components/los-olivos/sedes-planes"
import { Services } from "@/components/los-olivos/services"
import { Steps } from "@/components/los-olivos/steps"
import { WhyUs } from "@/components/los-olivos/why-us"
import { BlogLatest } from "@/components/blog/blog-latest"

export default function LosOlivosPage() {
  return (
    <>
      <PopupsWrapper />
      <Hero />
      <Services />
      <BlogLatest />
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
