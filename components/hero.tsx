import Image from "next/image"
import { MapPin, ShieldCheck, Star } from "lucide-react"
import { whatsappLink } from "@/lib/site"
import { WhatsAppButton } from "./whatsapp-button"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-16 pt-12 md:grid-cols-2 md:gap-12 md:px-8 md:pb-24 md:pt-20">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <MapPin className="size-3.5 text-primary" />
            Zona Norte · Córdoba
          </span>

          <h1 className="mt-6 text-balance font-heading text-5xl font-medium leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Uñas prolijas, delicadas y con estilo para cada ocasión
          </h1>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            En Meraki trabajamos semipermanente, kapping, soft gel y nail art en
            Zona Norte, Córdoba. Atención con turno por WhatsApp y diseños
            pensados para que tus uñas se vean prolijas, cuidadas y con tu
            estilo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton
              href={whatsappLink(
                "¡Hola Aylen! Quiero reservar un turno ¿Qué disponibilidad tenés?",
              )}
              size="lg"
            >
              Reservar turno por WhatsApp
            </WhatsAppButton>
            <a
              href="#galeria"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-8 py-4 text-base font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Ver trabajos
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className="size-4 fill-primary text-primary"
                  aria-hidden="true"
                />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Clientas que vuelven una y otra vez
            </p>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
            <ShieldCheck className="size-4 text-primary" />
            Trabajo prolijo, cuidado y con turno personalizado
          </div>
        </div>

        <div className="relative grid grid-cols-[1fr_0.72fr] gap-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border/60 shadow-2xl shadow-primary/10">
            <Image
              src="/images/hero1.jpeg"
              alt="Manos con manicura nude rosada recién realizada en meraki"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-4">
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-border/60 shadow-xl shadow-primary/10">
              <Image
                src="/images/hero2.jpeg"
                alt="Diseño nail art realizado en meraki"
                fill
                sizes="(max-width: 768px) 35vw, 20vw"
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-[1.5rem] border border-border/60 shadow-xl shadow-primary/10">
              <Image
                src="/images/hero3.jpeg"
                alt="Soft gel nude realizado en meraki"
                fill
                sizes="(max-width: 768px) 35vw, 20vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-border/60 bg-card/95 px-5 py-4 shadow-xl backdrop-blur sm:block">
            <p className="font-heading text-2xl font-semibold text-foreground">
              4 servicios
            </p>
            <p className="text-xs text-muted-foreground">
              Semi · Kapping · Soft gel · Nail art
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
