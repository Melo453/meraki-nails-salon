import Image from "next/image"
import { SITE } from "@/lib/site"
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
    <section id="galeria" className="scroll-mt-24 bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Trabajos"
          title="Trabajos recientes"
          description="La mejor forma de elegir es ver resultados reales: terminaciones prolijas, diseños delicados y estilos distintos para inspirarte."
        />

        <div className="mt-12 grid auto-rows-[200px] grid-cols-2 gap-4 sm:grid-cols-4 sm:auto-rows-[220px]">
          {GALLERY.map((item) => (
            <figure
              key={item.label}
              className={`group relative overflow-hidden rounded-3xl border border-border/60 ${item.className}`}
            >
              <Image
                src={item.src}
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
    </section>
  )
}
