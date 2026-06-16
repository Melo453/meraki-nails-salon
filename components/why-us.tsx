import Image from "next/image"
import { Heart, Palette, ShieldCheck, Sparkles, Clock } from "lucide-react"

const BENEFITS = [
  {
    icon: Heart,
    title: "Atención personalizada",
    desc: "Te escuchamos y diseñamos un servicio pensado para vos.",
  },
  {
    icon: Palette,
    title: "Diseños cuidados",
    desc: "Cada detalle se trabaja con precisión y buen gusto.",
  },
  {
    icon: Sparkles,
    title: "Materiales de calidad",
    desc: "Productos de primeras marcas para mejores resultados.",
  },
  {
    icon: ShieldCheck,
    title: "Higiene y prolijidad",
    desc: "Protocolos de higiene y herramientas esterilizadas.",
  },
  {
    icon: Clock,
    title: "Resultados duraderos",
    desc: "Acabados delicados que se mantienen impecables por semanas.",
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
            Por qué elegirnos
          </span>
          <h2 className="mt-3 text-balance font-heading text-4xl font-medium leading-tight text-foreground md:text-5xl">
            Un espacio pensado para mimarte
          </h2>
          <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
            En meraki combinamos técnica, dedicación y un ambiente cálido para que
            cada visita sea un momento para vos.
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
