import Image from "next/image"
import { SITE } from "@/lib/site"

const BEFORE_AFTER = [
  {
    title: "Semipermanente nude",
    before: {
      src: "/images/antes.png",
      alt: "Uñas naturales antes del esmaltado semipermanente",
    },
    after: {
      src: "/images/despues.png",
      alt: "Uñas con esmaltado semipermanente nude terminado",
    },
  },
  {
    title: "Extensión soft gel",
    before: {
      src: "/images/antes.png",
      alt: "Uñas naturales antes de la extensión soft gel",
    },
    after: {
      src: "/images/despues.jpg",
      alt: "Extensión soft gel nude con acabado brillante",
    },
  },
]

export function BeforeAfter() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="rounded-[2rem] border border-border/60 bg-card/70 p-5 shadow-sm md:p-8">
          <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr] md:items-start">
            <h2 className="font-heading text-4xl font-medium leading-tight text-foreground md:text-5xl">
              El detalle hace la diferencia
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:justify-self-end">
              Pequeñas transformaciones que cambian por completo el resultado.
              Prolijidad, forma y acabado en cada turno.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {BEFORE_AFTER.map((item) => (
              <div key={item.title}>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <BeforeAfterImage
                    src={item.before.src}
                    alt={item.before.alt}
                    label="Antes"
                    labelTone="dark"
                  />
                  <BeforeAfterImage
                    src={item.after.src}
                    alt={item.after.alt}
                    label="Después"
                    labelTone="light"
                  />
                </div>
                <p className="mt-4 font-heading text-xl font-medium text-foreground">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90"
            >
              Ver más trabajos en Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function BeforeAfterImage({
  src,
  alt,
  label,
  labelTone,
}: {
  src: string
  alt: string
  label: string
  labelTone: "dark" | "light"
}) {
  return (
    <figure className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-muted">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 50vw, 280px"
        className="object-cover"
      />
      <span
        className={
          labelTone === "dark"
            ? "absolute left-2 top-2 rounded-full bg-foreground px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-background"
            : "absolute left-2 top-2 rounded-full bg-background px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-foreground"
        }
      >
        {label}
      </span>
    </figure>
  )
}
