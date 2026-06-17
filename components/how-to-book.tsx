import { MessageCircle, Palette, CalendarCheck } from "lucide-react"
import { WHATSAPP_DEFAULT } from "@/lib/site"
import { WhatsAppButton } from "./whatsapp-button"

const STEPS = [
  {
    icon: Palette,
    title: "Mandá tu idea",
    desc: "Podés enviar una referencia, contar qué servicio querés o pedir sugerencias.",
  },
  {
    icon: MessageCircle,
    title: "Coordinamos por WhatsApp",
    desc: "Te paso disponibilidad, duración aproximada y valor según el diseño.",
  },
  {
    icon: CalendarCheck,
    title: "Confirmás tu turno",
    desc: "Una vez definido el servicio, queda reservado el día y horario.",
  },
]

export function HowToBook() {
  return (
    <section id="reservar" className="scroll-mt-24 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Cómo reservar
            </span>
            <h2 className="mt-3 text-balance font-heading text-4xl font-medium leading-tight text-foreground md:text-5xl">
              Reservá tu turno sin vueltas
            </h2>
            <p className="mt-4 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Todo se coordina por WhatsApp para elegir el servicio, revisar la
              idea y confirmar disponibilidad.
            </p>
            <div className="mt-7">
              <WhatsAppButton href={WHATSAPP_DEFAULT} size="lg">
                Reservar turno por WhatsApp
              </WhatsAppButton>
            </div>
          </div>

          <div className="grid gap-4">
            {STEPS.map((step, index) => (
              <div
                key={step.title}
                className="grid grid-cols-[auto_1fr] gap-4 rounded-3xl border border-border/70 bg-card p-5 shadow-sm"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                  <step.icon className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    Paso {index + 1}
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-medium text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
