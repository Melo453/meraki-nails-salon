import { whatsappLink } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { WhatsAppButton } from "./whatsapp-button"

const PRICES = [
  {
    name: "Semipermanente",
    price: "A consultar",
    popular: true,
    message: "¡Hola Aylen! Quiero consultar el valor del servicio de semipermanente.",
  },
  {
    name: "Kapping",
    price: "A consultar",
    popular: false,
    message: "¡Hola Aylen! Quiero consultar el valor del servicio de kapping.",
  },
  {
    name: "Soft gel",
    price: "A consultar",
    popular: false,
    message: "¡Hola Aylen! Quiero consultar el valor del servicio de soft gel.",
  },
  {
    name: "Nail art",
    price: "Según diseño",
    popular: false,
    message: "¡Hola Aylen! Tengo un diseño en mente y quiero consultar el valor del nail art. ¿Te puedo enviar una foto de referencia?",
  },
]

export function Pricing() {
  return (
    <section id="precios" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Precios"
          title="Valores orientativos"
          description="Los valores pueden variar según el diseño, largo, técnica y complejidad. Para confirmar precio final, escribime por WhatsApp."
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm">
          <ul>
            {PRICES.map((item, i) => (
              <li
                key={item.name}
                className={`flex items-center justify-between gap-4 px-6 py-5 md:px-8 ${
                  i !== PRICES.length - 1 ? "border-b border-border/60" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-base font-medium text-foreground md:text-lg">
                    {item.name}
                  </span>
                  {item.popular && (
                    <span className="rounded-full bg-accent px-3 py-0.5 text-[0.7rem] font-medium uppercase tracking-wide text-accent-foreground">
                      Más consultado
                    </span>
                  )}
                </div>
                <a
                  href={whatsappLink(item.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Consultar por ${item.name} en WhatsApp`}
                  className="font-heading text-xl font-semibold text-primary underline-offset-4 transition-colors hover:text-foreground hover:underline md:text-2xl"
                >
                  {item.price}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-5 text-center text-sm text-muted-foreground">
          Esta sección es orientativa y se puede actualizar cuando cambien los
          valores.
        </p>

        <div className="mt-7 flex justify-center">
          <WhatsAppButton
            href={whatsappLink(
              "¡Hola Aylen! Quisiera consultar precios y disponibilidad 💅",
            )}
            size="lg"
          >
            Consultar y reservar
          </WhatsAppButton>
        </div>
      </div>
    </section>
  )
}
