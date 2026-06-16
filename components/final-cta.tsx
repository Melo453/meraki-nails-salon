import Image from "next/image"
import { SITE, whatsappLink } from "@/lib/site"
import { WhatsAppButton } from "./whatsapp-button"

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function FinalCta() {
  return (
    <section id="contacto" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border/60 bg-primary px-6 py-16 text-center shadow-2xl shadow-primary/20 md:px-12 md:py-20">
          <div className="absolute -right-10 -top-10 hidden h-48 w-48 overflow-hidden rounded-full border-8 border-primary-foreground/15 md:block">
            <Image
              src="/images/manos-cliente.png"
              alt=""
              fill
              sizes="200px"
              className="object-cover opacity-90"
            />
          </div>

          <div className="relative mx-auto max-w-xl">
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary-foreground/75">
              Contacto
            </span>
            <h2 className="text-balance font-heading text-4xl font-medium leading-tight text-primary-foreground md:text-5xl">
              Reservá tu turno y date ese gusto
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/85">
              Escribinos por WhatsApp y coordinamos el día y horario que mejor te
              quede. Te esperamos en meraki ✨
            </p>
            <div className="mt-8 flex flex-col items-center gap-3">
              <WhatsAppButton
                href={whatsappLink(
                  "¡Hola Aylen! Quiero reservar mi turno.",
                )}
                size="lg"
                variant="outline"
              >
                Reservar turno por WhatsApp
              </WhatsAppButton>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <InstagramGlyph className="size-4" />
                {SITE.instagramHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
