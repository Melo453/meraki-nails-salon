import { Hand, Sparkles, Layers, Gem, Brush, Eraser } from "lucide-react"
import { SectionHeading } from "./section-heading"

const SERVICES = [
  {
    icon: Hand,
    title: "Manicura",
    desc: "Limado, cutícula y prolijidad para unas manos cuidadas y naturales.",
  },
  {
    icon: Sparkles,
    title: "Esmaltado semipermanente",
    desc: "Color parejo y brillo que dura semanas, sin descascararse.",
  },
  {
    icon: Layers,
    title: "Kapping",
    desc: "Refuerzo sobre la uña natural para más resistencia y prolijidad.",
  },
  {
    icon: Gem,
    title: "Soft gel",
    desc: "Extensiones livianas y naturales con la forma que más te gusta.",
  },
  {
    icon: Brush,
    title: "Nail art",
    desc: "Diseños personalizados: francesitas, minimalistas y mucho más.",
  },
  {
    icon: Eraser,
    title: "Retiro de producto",
    desc: "Retiro seguro y cuidado, sin dañar tu uña natural.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Servicios"
          title="Todo lo que tus uñas necesitan"
          description="Cada servicio pensado para resaltar tu estilo, con técnicas prolijas y materiales de primera."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
