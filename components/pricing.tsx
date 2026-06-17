import { whatsappLink } from "@/lib/site"
import { SectionHeading } from "./section-heading"
import { WhatsAppButton } from "./whatsapp-button"

const PRICES = [
  { name: "Semipermanente", price: "A consultar", popular: true },
  { name: "Kapping", price: "A consultar", popular: false },
  { name: "Soft gel", price: "A consultar", popular: false },
  { name: "Nail art", price: "Según diseño", popular: false },
]

export function Pricing() {
  return (
    <section id="precios" className="bg-background py-20 md:py-28">
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
                <span className="font-heading text-xl font-semibold text-primary md:text-2xl">
                  {item.price}
                </span>
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
