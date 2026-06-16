import { Star } from "lucide-react"
import { SectionHeading } from "./section-heading"

const TESTIMONIALS = [
  {
    name: "Martina G.",
    text: "Me encantó la atención y el resultado. Las uñas me duraron impecables más de tres semanas. ¡Ya tengo mi lugar fijo!",
    detail: "Semipermanente + nail art",
  },
  {
    name: "Caro D.",
    text: "Súper prolija y detallista. El estudio es divino y te hacen sentir muy cómoda. Recomiendo mil veces.",
    detail: "Soft gel",
  },
  {
    name: "Luli M.",
    text: "Siempre salgo feliz. Entiende justo lo que quiero y los diseños quedan tal cual los imagino. Una genia.",
    detail: "Kapping + francesita",
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen las clientas"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-3xl border border-border/70 bg-card p-7 shadow-sm"
            >
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="size-4 fill-primary text-primary"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground">
                {`"${t.text}"`}
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <p className="font-medium text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
