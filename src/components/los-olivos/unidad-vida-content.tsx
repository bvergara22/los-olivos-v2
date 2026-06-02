"use client"

import { AgendaModal } from "@/components/los-olivos/agenda-modal"
import { BookOpen, CalendarCheck, Heart, MessageCircle, Shield, Sparkles, Users, X } from "lucide-react"
import Image from "next/image"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom"

type Recurso = {
  icon: typeof Heart
  title: string
  desc: string
  categoria?: string
  fecha?: string
  autor?: string
  contenido?: React.ReactNode
}

const jubilacionContenido = (
  <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
    <p>La jubilación representa una nueva etapa de la vida llena de oportunidades, cambios y nuevos propósitos. Más allá de dejar de trabajar, es el momento de redescubrir el tiempo, fortalecer el bienestar personal y disfrutar experiencias que antes podían quedar en pausa por las responsabilidades diarias.</p>
    <p>Prepararse para la jubilación no solo implica organizar las finanzas, sino también cuidar la salud emocional, fortalecer las relaciones y construir una rutina que permita vivir esta etapa con tranquilidad y satisfacción.</p>

    <h3 className="font-display font-bold text-base text-foreground pt-2">¿Qué es la jubilación?</h3>
    <p>La jubilación es una transición hacia una nueva etapa en la que las personas dejan su actividad laboral activa para dedicar más tiempo a sí mismas, a su bienestar y a sus intereses personales. Aunque para muchos representa descanso y libertad, también puede generar incertidumbre, cambios emocionales y preguntas sobre el futuro.</p>

    <h3 className="font-display font-bold text-base text-foreground pt-2">¿Cómo prepararse para la jubilación?</h3>
    <p>Planificar con tiempo es una de las claves para disfrutar plenamente de esta nueva etapa. Algunas acciones importantes son:</p>
    <div className="space-y-3 pl-1">
      {[
        { titulo: "Organiza tus finanzas", texto: "Construir hábitos de ahorro, reducir gastos innecesarios y contar con un plan financiero ayuda a vivir con mayor tranquilidad y estabilidad económica." },
        { titulo: "Piensa en tu bienestar emocional", texto: "La jubilación también implica cambios en la rutina, el rol personal y las relaciones sociales. Prepararse emocionalmente permite afrontar esta transición de manera positiva." },
        { titulo: "Define nuevos proyectos y propósitos", texto: "Es una oportunidad para retomar sueños, descubrir nuevos intereses y dedicar tiempo a actividades que generen satisfacción y bienestar." },
      ].map((e) => (
        <div key={e.titulo} className="flex gap-3">
          <span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0 mt-2" />
          <div><p className="font-semibold text-foreground">{e.titulo}</p><p>{e.texto}</p></div>
        </div>
      ))}
    </div>

    <h3 className="font-display font-bold text-base text-foreground pt-2">¿Qué hacer durante la jubilación?</h3>
    <p>La jubilación puede convertirse en una etapa enriquecedora cuando se vive de manera activa y consciente. Es el momento ideal para:</p>
    <ul className="space-y-1.5 pl-4">
      {["Compartir más tiempo con la familia y amigos.", "Viajar y conocer nuevos lugares.", "Disfrutar pasatiempos y actividades recreativas.", "Aprender nuevas habilidades o desarrollar talentos.", "Participar en actividades comunitarias o sociales."].map((i) => (
        <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0 mt-2" />{i}</li>
      ))}
    </ul>

    <h3 className="font-display font-bold text-base text-foreground pt-2">¿Cómo mantener tus finanzas en orden?</h3>
    <ul className="space-y-1.5 pl-4">
      {["Llevar un presupuesto organizado.", "Priorizar gastos esenciales.", "Evitar deudas innecesarias.", "Contar con un fondo de emergencia para imprevistos.", "Buscar actividades productivas o trabajos flexibles si así lo deseas."].map((i) => (
        <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0 mt-2" />{i}</li>
      ))}
    </ul>

    <h3 className="font-display font-bold text-base text-foreground pt-2">La importancia de mantener una vida social activa</h3>
    <p>Las relaciones personales son fundamentales para la salud emocional. Mantener contacto con familiares, amigos y nuevas comunidades ayuda a prevenir el aislamiento y fortalece el bienestar integral. Puedes participar en grupos de interés, encuentros comunitarios, programas culturales o deportivos y espacios de voluntariado o aprendizaje.</p>

    <h3 className="font-display font-bold text-base text-foreground pt-2">¿Cómo cuidar tu salud física y mental?</h3>
    <ul className="space-y-1.5 pl-4">
      {["Realizar actividad física regularmente.", "Mantener una alimentación balanceada.", "Dormir adecuadamente.", "Practicar actividades que generen tranquilidad y bienestar.", "Mantener la mente activa mediante la lectura, juegos o aprendizaje continuo."].map((i) => (
        <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0 mt-2" />{i}</li>
      ))}
    </ul>

    <h3 className="font-display font-bold text-base text-foreground pt-2">Una etapa para vivir plenamente</h3>
    <p>La jubilación no representa el final de una etapa productiva, sino el comienzo de un nuevo momento para vivir con mayor libertad, bienestar y propósito. Prepararse con anticipación, cuidar las emociones, fortalecer la salud y mantener vínculos significativos permite disfrutar esta etapa de manera más tranquila y enriquecedora.</p>
    <p className="italic text-xs text-right text-muted-foreground/60">Unidad de gestión emocional — Los Olivos Cartagena</p>
  </div>
)

const comunicacionContenido = (
  <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
    <blockquote className="border-l-4 border-vida-dark/30 pl-4 italic text-muted-foreground/80">
      "No es necesario decir todo lo que se piensa, lo que sí es necesario es pensar todo lo que se dice." — Quino
    </blockquote>
    <p>La manera en que nos comunicamos influye directamente en nuestras relaciones, emociones y bienestar. Aprender a expresar lo que sentimos de forma adecuada nos permite fortalecer vínculos, prevenir conflictos y generar conversaciones más sanas y respetuosas.</p>

    <h3 className="font-display font-bold text-base text-foreground pt-2">¿Qué es la comunicación asertiva?</h3>
    <p>La comunicación asertiva es la capacidad de expresar ideas, emociones y necesidades de manera clara, honesta y respetuosa, sin herir, minimizar o afectar emocionalmente a los demás. Ser asertivos no significa decir todo lo que pensamos sin filtro, sino encontrar la forma adecuada de comunicarlo, considerando tanto nuestras emociones como las de quien nos escucha.</p>

    <h3 className="font-display font-bold text-base text-foreground pt-2">Tipos de comunicación</h3>
    <div className="space-y-3">
      {[
        { titulo: "Comunicación agresiva", texto: "Se caracteriza por el uso de gritos, insultos, amenazas o palabras ofensivas. Busca imponer ideas sin considerar las emociones o necesidades del otro." },
        { titulo: "Comunicación pasiva", texto: "Ocurre cuando la persona evita expresar lo que siente o piensa por miedo al conflicto, adoptando una actitud de sumisión o silencio constante." },
        { titulo: "Comunicación asertiva", texto: "Busca el equilibrio entre expresar lo que pensamos y respetar al otro. Se basa en la claridad, la empatía y el respeto mutuo." },
      ].map((e) => (
        <div key={e.titulo} className="bg-vida-dark/5 rounded-xl p-4">
          <p className="font-semibold text-foreground mb-1">{e.titulo}</p>
          <p>{e.texto}</p>
        </div>
      ))}
    </div>

    <h3 className="font-display font-bold text-base text-foreground pt-2">¿Qué debemos considerar antes de comunicar un mensaje?</h3>
    <div className="space-y-3">
      {[
        { n: "1", texto: "Preparar el mensaje de acuerdo con la personalidad y necesidad del receptor." },
        { n: "2", texto: "Incluir información que sea de interés para la otra persona." },
        { n: "3", texto: "Pensar si nuestras palabras podrían ser malinterpretadas." },
        { n: "4", texto: "Apoyar la comunicación con el tono de voz, gestos y actitud para transmitir el mensaje de manera más clara." },
      ].map((e) => (
        <div key={e.n} className="flex gap-3">
          <div className="w-6 h-6 rounded-full bg-vida-dark text-white flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">{e.n}</div>
          <p>{e.texto}</p>
        </div>
      ))}
    </div>

    <h3 className="font-display font-bold text-base text-foreground pt-2">Escucha activa: más que oír, comprender</h3>
    <p>Oír es simplemente percibir sonidos. Escuchar, en cambio, implica comprender, interpretar y dar sentido a lo que la otra persona expresa. La escucha activa requiere empatía, disposición y la capacidad de ponerse en el lugar del otro.</p>
    <p className="font-semibold text-foreground">Barreras que afectan la escucha activa:</p>
    <ul className="space-y-1.5 pl-4">
      {["Interrumpir constantemente a quien habla.", "Juzgar antes de comprender.", "Rechazar o minimizar lo que la otra persona está sintiendo."].map((i) => (
        <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0 mt-2" />{i}</li>
      ))}
    </ul>

    <h3 className="font-display font-bold text-base text-foreground pt-2">Recomendaciones para una mejor comunicación</h3>
    <ul className="space-y-2 pl-4">
      {[
        "Si vamos a criticar o pedir explicaciones, es mejor hacerlo en privado y en un ambiente tranquilo.",
        "Cuando se trate de reconocer o elogiar a alguien, hacerlo frente a personas significativas puede fortalecer su autoestima y motivación.",
        "Si una conversación comienza a salirse de control, es válido hacer una pausa. Frases como \"Si no te importa, podemos continuar hablando de esto más tarde\" ayudan a manejar mejor las emociones.",
      ].map((i) => (
        <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0 mt-2" />{i}</li>
      ))}
    </ul>

    <p>La comunicación asertiva y la escucha activa son herramientas fundamentales para construir relaciones más saludables, humanas y empáticas.</p>
    <p className="italic text-xs text-right text-muted-foreground/60">Unidad de gestión emocional — Los Olivos Cartagena</p>
  </div>
)

const jovenesContenido = (
  <div className="space-y-5 text-sm md:text-base text-muted-foreground leading-relaxed">
    <p>La juventud es una etapa llena de cambios, decisiones, sueños y descubrimientos. También puede ser un momento en el que aparecen dudas, presión, ansiedad, inseguridades o dificultades para expresar lo que sentimos. Muchas veces creemos que debemos "poder con todo", pero cuidar nuestras emociones también hace parte de crecer y construir bienestar.</p>

    <h3 className="font-display font-bold text-base text-foreground pt-2">¿Por qué es importante hablar de salud emocional en los jóvenes?</h3>
    <p>Las emociones influyen en la manera en que pensamos, actuamos, nos relacionamos y enfrentamos los desafíos cotidianos. El estrés académico, los cambios personales, las relaciones, las redes sociales, la presión por encajar o la incertidumbre sobre el futuro pueden afectar el bienestar emocional si no se gestionan adecuadamente.</p>
    <p>Por eso, dedicar tiempo a cuidar lo que sentimos es tan importante como cuidar nuestra salud física.</p>

    <h3 className="font-display font-bold text-base text-foreground pt-2">Entender lo que sientes también es bienestar</h3>
    <p>Sentir tristeza, frustración, miedo o ansiedad no te hace débil. Las emociones son una parte natural de la vida y reconocerlas es el primer paso para aprender a manejarlas de manera saludable. Hablar con alguien de confianza, expresar lo que sentimos, descansar, poner límites y buscar espacios de apoyo emocional puede marcar una gran diferencia en nuestro bienestar.</p>

    <h3 className="font-display font-bold text-base text-foreground pt-2">La importancia de construir relaciones sanas</h3>
    <p>Rodearse de personas que aporten tranquilidad, respeto y apoyo emocional fortalece la autoestima y la salud mental. Las relaciones sanas se construyen desde:</p>
    <ul className="space-y-1.5 pl-4">
      {["La comunicación respetuosa.", "La empatía.", "El respeto por los límites.", "La confianza y el apoyo mutuo."].map((i) => (
        <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0 mt-2" />{i}</li>
      ))}
    </ul>

    <h3 className="font-display font-bold text-base text-foreground pt-2">Redes sociales y bienestar emocional</h3>
    <p>Las redes sociales hacen parte de la vida cotidiana, pero también pueden generar comparaciones, presión o ansiedad. Es importante recordar que no todo lo que vemos refleja la realidad completa de las personas. Aprender a desconectarse, cuidar el tiempo en pantalla y priorizar espacios reales de conexión ayuda a mantener un equilibrio emocional más saludable.</p>

    <h3 className="font-display font-bold text-base text-foreground pt-2">¿Cómo cuidar tus emociones en el día a día?</h3>
    <p>Pequeñas acciones pueden ayudarte a fortalecer tu bienestar emocional:</p>
    <ul className="space-y-1.5 pl-4">
      {["Dormir adecuadamente.", "Practicar actividades que disfrutes.", "Hablar sobre lo que sientes.", "Mantener hábitos saludables.", "Dedicar tiempo al descanso.", "Aprender a pedir ayuda cuando la necesites."].map((i) => (
        <li key={i} className="flex items-start gap-2"><span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0 mt-2" />{i}</li>
      ))}
    </ul>

    <div className="bg-vida-dark/5 rounded-xl p-4 mt-2">
      <p className="font-semibold text-foreground text-center">Porque cuidar lo que sientes también es vivir mejor.</p>
    </div>
    <p className="italic text-xs text-right text-muted-foreground/60">Unidad de gestión emocional — Los Olivos Cartagena</p>
  </div>
)

const recursos: Recurso[] = [
  {
    icon: CalendarCheck,
    title: "La jubilación se acerca… ¿Estás listo para vivirla con bienestar y plenitud?",
    desc: "La jubilación es una nueva etapa llena de oportunidades. Descubre cómo prepararte emocionalmente, mantener tus finanzas en orden y vivir con propósito y bienestar.",
    categoria: "Vida",
    contenido: jubilacionContenido,
  },
  {
    icon: MessageCircle,
    title: "Comunicación asertiva: expresar lo que sentimos con respeto y empatía",
    desc: "Aprende a expresar lo que sientes de forma clara y respetuosa, fortalecer la escucha activa y construir conversaciones más sanas en todos los espacios de tu vida.",
    categoria: "Vida",
    contenido: comunicacionContenido,
  },
  {
    icon: Users,
    title: "Crecer también implica aprender a cuidar tus emociones",
    desc: "Ser joven no significa tener todas las respuestas. Conoce herramientas para gestionar el estrés, construir relaciones sanas y fortalecer tu bienestar emocional día a día.",
    categoria: "Vida",
    contenido: jovenesContenido,
  },
]

function ArticuloModal({ recurso, onClose }: { recurso: Recurso; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden"
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    document.addEventListener("keydown", fn)
    return () => {
      document.body.style.overflow = ""
      document.removeEventListener("keydown", fn)
    }
  }, [onClose])

  return createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-card rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 p-6 border-b border-border flex-shrink-0">
          <div className="space-y-1">
            {(recurso.categoria || recurso.fecha) && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                {recurso.categoria && <span className="font-semibold text-vida-dark">{recurso.categoria}</span>}
                {recurso.categoria && recurso.fecha && <span>·</span>}
                {recurso.fecha && <span>{recurso.fecha}</span>}
                {recurso.autor && <><span>·</span><span>{recurso.autor}</span></>}
              </div>
            )}
            <h2 className="font-display font-bold text-lg md:text-xl text-foreground leading-snug">{recurso.title}</h2>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-muted hover:bg-muted/80 flex items-center justify-center flex-shrink-0 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-y-auto p-6 flex-1">
          {recurso.contenido}
        </div>
      </div>
    </div>,
    document.body
  )
}

export function UnidadVidaContent() {
  const [modalOpen, setModalOpen] = useState(false)
  const [articuloAbierto, setArticuloAbierto] = useState<Recurso | null>(null)

  return (
    <>
      <AgendaModal open={modalOpen} onClose={() => setModalOpen(false)} variant="vida" />
      {articuloAbierto && (
        <ArticuloModal recurso={articuloAbierto} onClose={() => setArticuloAbierto(null)} />
      )}

      {/* Hero */}
      <section className="relative pt-8 pb-12 md:pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-vida-dark/10 via-background to-vida-dark/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-8 md:gap-12 items-center">
            <div>
              <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-vida-dark leading-tight text-balance">
                Unidad de Gestión<br />de las Emociones
              </h1>
              <p className="text-base md:text-lg text-muted-foreground mt-4 md:mt-6 leading-relaxed text-justify">
                La <strong className="text-vida-dark">Unidad de Gestión de las Emociones (UGE)</strong> de Los Olivos nace para acompañar integralmente las experiencias emocionales de las personas y familias, promoviendo el equilibrio y cuidado emocional en cada etapa de la vida. A través de un enfoque humano y cercano, brindamos herramientas y acompañamiento que permiten vivir cada experiencia con mayor tranquilidad, comprensión y apoyo emocional.
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                {["Modalidad virtual y presencial", "Espacios de acompañamiento psicológicos", "Círculos de apoyo"].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 text-xs font-medium text-vida-dark border border-vida-dark/30 bg-vida-dark/5 rounded-full px-3 py-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative w-3/4 lg:w-full max-w-lg mx-auto">
              <Image src="/vida-secc-principal.webp" alt="Unidad de Gestión de las Emociones" width={500} height={380} priority className="w-full h-auto object-contain" />
            </div>
          </div>
        </div>
        <div className="absolute -bottom-px left-0 right-0 z-20 text-card" aria-hidden>
          <svg viewBox="0 0 1920 81" xmlns="http://www.w3.org/2000/svg" className="w-full block h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 2xl:h-20" preserveAspectRatio="none">
            <path fill="currentColor" d="M0 50.7364L80 59.1924C160 67.6485 320 84.5606 480 80.3326C640 76.1045 800 50.7364 960 46.5083C1120 42.2803 1280 59.1924 1440 63.4205C1600 67.6485 1760 59.1924 1840 54.9644L1920 50.7364L1920 81L0 81Z" />
          </svg>
        </div>
      </section>

      {/* Sanando Juntos */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
            <span className="text-3xl md:text-4xl text-vida-dark block">Sanando Juntos</span>
          </div>
          <div className="relative rounded-3xl overflow-hidden mb-8 md:mb-10" style={{ background: "linear-gradient(135deg, #e65c36 0%, #c04a27 100%)" }}>
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-white/5 translate-x-1/3 -translate-y-1/3 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-white/5 -translate-x-1/3 translate-y-1/3 pointer-events-none" />
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="w-12 h-0.5 bg-white/30 mb-8" />
              <div className="space-y-5">
                <p className="text-white/60 text-sm font-semibold uppercase tracking-widest mb-2">Más Vida para ti</p>
                <p className="text-base md:text-lg leading-relaxed text-white/90 text-justify">
                  Reconocemos la importancia de cuidar las emociones como parte esencial del bienestar y la calidad de vida. Por eso, nuestra línea de acompañamiento psicológico{" "}
                  <span className="text-white font-semibold italic">Sanando Juntos</span> se orienta en brindar herramientas y acompañamiento emocional para ayudar a las personas y familias a vivir con mayor equilibrio, bienestar y plenitud.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-white/70 text-justify">
                  Mediante nuestras diversas asistencias, impulsamos el desarrollo de la resiliencia emocional de forma preventiva. Brindamos acompañamiento en situaciones vinculadas al estrés, la ansiedad, los vínculos interpersonales y el sentido de propósito individual.
                </p>
                <p className="text-sm md:text-base leading-relaxed text-white/70 text-justify">
                  En Los Olivos, estamos convencidos de que velar por tu salud emocional es fundamental para alcanzar una mejor calidad de vida; cada sentimiento que abordamos representa una nueva posibilidad para generar bienestar y vitalidad en tu día a día.
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {[
              { icon: Heart, title: "Bienestar emocional", desc: "Promovemos herramientas para fortalecer el equilibrio emocional y afrontar los desafíos cotidianos de manera saludable." },
              { icon: Shield, title: "Prevención emocional", desc: "Acompañamos el cuidado de las emociones antes de momentos críticos, fomentando hábitos de bienestar y salud mental." },
              { icon: Sparkles, title: "Crecimiento personal", desc: "Espacios diseñados para impulsar el autoconocimiento, la resiliencia y el desarrollo integral en cada etapa de vida." },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card rounded-2xl p-6 flex flex-col gap-3 border border-border hover:border-vida-dark/30 hover:shadow-md transition-all">
                <div className="w-11 h-11 rounded-xl bg-vida-dark/10 text-vida-dark flex items-center justify-center"><Icon className="w-5 h-5" /></div>
                <h3 className="font-display font-semibold text-base text-vida-dark">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Líneas de acompañamiento */}
      <section className="py-12 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 md:mb-12">
            <span className="text-3xl md:text-4xl text-vida-dark block">Línea de acompañamiento</span>
          </div>
          <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-gradient-to-br from-vida-dark/5 to-transparent border border-vida-dark/10 p-6 sm:p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
              {/* Columna izquierda: imagen + afiliados (afiliados solo en desktop) */}
              <div className="flex flex-col items-center lg:items-start gap-6">
                <Image src="/Vector-UGE-VIDA.webp" alt="Sanando Juntos en la vida" width={500} height={440} className="w-2/3 sm:w-1/2 lg:w-full h-auto object-contain" />
                <div className="w-full hidden lg:block">
                  <p className="text-xs font-semibold uppercase tracking-widest text-vida-dark mb-3">Al ser afiliado a Los Olivos accederás a</p>
                  <ul className="space-y-2.5">
                    {["Contenido educativo emocional", "Talleres de crecimiento personal", "Espacios de prevención emocional", "Programas por etapas de vida"].map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Columna derecha: texto + herramientas + afiliados (mobile) + botón */}
              <div className="flex flex-col gap-4 md:gap-5">
                <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-vida-dark">En vida</h3>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-vida-dark mb-2">¿Qué entendemos por vida?</p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify">
                    En Los Olivos entendemos que la vida está integrada por una diversidad de vivencias, vínculos, desafíos y transiciones que redefinen nuestra percepción y forma de habitar la realidad, como un proceso que merece ser acompañado desde el bienestar emocional, el equilibrio y el cuidado integral.
                  </p>
                  <p className="text-muted-foreground leading-relaxed text-sm md:text-base text-justify mt-3">
                    Por eso, creamos espacios que ayudan a las personas y familias a fortalecer sus emociones, desarrollar herramientas para afrontar los desafíos cotidianos y construir una vida con mayor tranquilidad, propósito y bienestar.
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="text-xs font-semibold uppercase tracking-widest text-vida-dark mb-3">Ofrecemos herramientas para gestionar</p>
                  <ul className="space-y-2 mb-3">
                    {["Estrés, ansiedad y emociones", "Cambios y vínculos personales", "Propósito y bienestar vital"].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-muted-foreground italic">Buscamos fortalecer el equilibrio emocional y el bienestar integral de las personas.</p>
                </div>
                {/* Afiliados solo en mobile */}
                <div className="border-t border-border pt-4 lg:hidden">
                  <p className="text-xs font-semibold uppercase tracking-widest text-vida-dark mb-3">Al ser afiliado a Los Olivos accederás a</p>
                  <ul className="space-y-2.5">
                    {["Contenido educativo emocional", "Talleres de crecimiento personal", "Espacios de prevención emocional", "Programas por etapas de vida"].map((b) => (
                      <li key={b} className="flex items-center gap-2.5 text-sm text-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-vida-dark flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-1">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center gap-2 h-10 px-6 rounded-md text-sm font-semibold bg-vida-dark text-white hover:bg-vida-dark/90 transition-colors"
                  >
                    Agenda aquí
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recursos de apoyo */}
      <section className="py-12 md:py-16 bg-vida-dark/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-3xl md:text-4xl text-vida-dark block">Recursos de apoyo</span>
            <h2 className="font-display text-xl md:text-2xl text-vida-dark mt-2">Recomendaciones</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {recursos.map((r) => {
              const Icon = r.icon
              return (
                <div key={r.title} className="bg-card border border-border rounded-2xl p-8 flex flex-col gap-5 hover:border-vida-dark/40 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-xl bg-vida-dark/10 text-vida-dark flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground text-base leading-snug mb-3">{r.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                  </div>
                  <button
                    onClick={() => setArticuloAbierto(r)}
                    className="text-sm font-semibold text-vida-dark hover:text-vida-dark transition-colors text-left"
                  >
                    Leer más →
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
