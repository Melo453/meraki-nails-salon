import Image from "next/image"
import { Heart, Palette, ShieldCheck, Sparkles, Clock } from "lucide-react"

const BENEFITS = [
  {
    icon: Heart,
    title: "Diseños que van con vos",
    desc: "Cada turno se piensa según tu estilo, tus uñas y lo que querés lograr.",
  },
  {
    icon: Palette,
    title: "Terminación prolija",
    desc: "Forma, color y detalles cuidados para que el resultado se vea fino.",
  },
  {
    icon: Sparkles,
    title: "Uñas cuidadas",
    desc: "Se trabaja con productos de calidad y técnicas pensadas para proteger la uña natural.",
  },
  {
    icon: ShieldCheck,
    title: "Higiene en cada turno",
    desc: "Herramientas y superficies preparadas para una atención cuidada.",
  },
  {
    icon: Clock,
    title: "Turnos organizados",
    desc: "Coordinás por WhatsApp y sabés qué servicio hacer antes de venir.",
  },
]

export function WhyUs() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:px-8">
        <div className="relative order-last md:order-first">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 shadow-xl">
            <Image
              src="/images/estudio.png"
              alt="Interior cálido y minimalista del estudio meraki"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            Por qué elegir meraki
          </span>
          <h2 className="mt-3 text-balance font-heading text-4xl font-medium leading-tight text-foreground md:text-5xl">
            Un espacio tranquilo para salir con uñas impecables
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            La idea es que vengas con una referencia, una ocasión o una idea
            suelta, y te vayas con un resultado cuidado, prolijo y fácil de usar
            en el día a día.
          </p>

          <ul className="mt-8 flex flex-col gap-4">
            {BENEFITS.map((b) => (
              <li key={b.title} className="flex items-start gap-4">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-full bg-card text-primary shadow-sm">
                  <b.icon className="size-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">{b.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {b.desc}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
