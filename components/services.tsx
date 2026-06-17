import { Sparkles, Layers, Gem, Brush } from "lucide-react"
import { SectionHeading } from "./section-heading"

const SERVICES = [
  {
    icon: Sparkles,
    title: "Semipermanente",
    desc: "Color, brillo y prolijidad por más tiempo.",
  },
  {
    icon: Layers,
    title: "Kapping",
    desc: "Refuerzo sobre la uña natural para aportar resistencia y cuidado.",
  },
  {
    icon: Gem,
    title: "Soft gel",
    desc: "Extensiones delicadas para lograr largo y forma.",
  },
  {
    icon: Brush,
    title: "Nail art",
    desc: "Diseños personalizados, detalles, brillos y estilos según la idea de cada clienta.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Servicios disponibles"
          description="Elegí la técnica que mejor acompaña tus uñas, tu rutina y el estilo que querés llevar."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="group rounded-3xl border border-border/70 bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-5 font-heading text-2xl font-medium text-foreground">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
