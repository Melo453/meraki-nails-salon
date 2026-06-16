import Image from "next/image"
import { SectionHeading } from "./section-heading"

const GALLERY = [
  {
    src: "/images/francesita.jpeg",
    label: "Francesitas",
    alt: "Manicura francesa clásica con puntas blancas",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/minimalista.png",
    label: "Diseños minimalistas",
    alt: "Diseño minimalista con detalles dorados",
    className: "",
  },
  {
    src: "/images/colores-plenos.png",
    label: "Colores plenos",
    alt: "Uñas en colores plenos terracota y rosa",
    className: "",
  },
  {
    src: "/images/nail-art.jpeg",
    label: "Nail art",
    alt: "Nail art con detalles florales pintados a mano",
    className: "",
  },
  {
    src: "/images/soft-gel.jpeg",
    label: "Soft gel",
    alt: "Extensiones soft gel nude en forma almendrada",
    className: "",
  },
]

export function Gallery() {
  return (
    <section id="galeria" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Trabajos"
          title="Nuestra galería"
          description="Una selección de diseños reales hechos en el estudio. De lo clásico a lo más creativo."
        />

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[220px]">
          {GALLERY.map((item) => (
            <figure
              key={item.label}
              className={`group relative overflow-hidden rounded-3xl border border-border/60 ${item.className}`}
            >
              <Image
                src={item.src || "/placeholder.svg"}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/70 to-transparent p-4">
                <span className="text-sm font-medium text-background">
                  {item.label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Antes y después */}
        <div className="mt-10">
          <h3 className="text-center font-heading text-2xl font-medium text-foreground">
            Antes y después
          </h3>
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-4">
            {[
              {
                src: "/images/antes.png",
                tag: "Antes",
                alt: "Uñas naturales antes del servicio",
              },
              {
                src: "/images/despues.jpg",
                tag: "Después",
                alt: "Uñas con manicura prolija después del servicio",
              },
            ].map((item) => (
              <figure
                key={item.tag}
                className="relative aspect-square overflow-hidden rounded-3xl border border-border/60"
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 320px"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
                  {item.tag}
                </span>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
