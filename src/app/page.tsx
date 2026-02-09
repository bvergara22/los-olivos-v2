import { Benefits } from "@/components/los-olivos/benefits"
import { Contact } from "@/components/los-olivos/contact"
import { Hero } from "@/components/los-olivos/hero"
import { Novedades } from "@/components/los-olivos/novedades"
import { SedesPlanes } from "@/components/los-olivos/sedes-planes"
import { Services } from "@/components/los-olivos/services"
import { Steps } from "@/components/los-olivos/steps"
import { WhyUs } from "@/components/los-olivos/why-us"

export default function LosOlivosPage() {
  return (
    <>
      <Hero />
      <Services />
      <SedesPlanes />
      <Benefits />
      <Novedades />
      <Steps />
      <WhyUs />
      <Contact />
    </>
  )
}
