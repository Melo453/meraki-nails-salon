import Image from "next/image"
import { whatsappLink } from "@/lib/site"
import { WhatsAppButton } from "./whatsapp-button"

export function FinalCta() {
  return (
    <section className="bg-background py-20 md:py-28">
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
            <h2 className="text-balance font-heading text-4xl font-medium leading-tight text-primary-foreground md:text-5xl">
              Reservá tu turno y date ese gusto
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/85">
              Escribinos por WhatsApp y coordinamos el día y horario que mejor te
              quede. Te esperamos en meraki ✨
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton
                href={whatsappLink(
                  "¡Hola Aylen! Quiero reservar mi turno.",
                )}
                size="lg"
                variant="outline"
              >
                Reservar turno por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
