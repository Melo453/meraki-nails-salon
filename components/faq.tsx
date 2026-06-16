"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { SectionHeading } from "./section-heading"

const FAQS = [
  {
    q: "¿Cuánto dura el servicio?",
    a: "Depende del trabajo: una manicura simple lleva alrededor de 45 minutos, mientras que un soft gel con diseño puede tomar entre 1.30 y 2 horas. Siempre te avisamos el tiempo estimado al reservar.",
  },
  {
    q: "¿Cuánto dura el esmaltado semipermanente?",
    a: "Con los cuidados adecuados, el esmaltado semipermanente se mantiene impecable entre 2 y 3 semanas, sin descascararse ni perder brillo.",
  },
  {
    q: "¿Trabajás con turno?",
    a: "Sí, atendemos únicamente con turno previo para dedicarle el tiempo que merecés a cada clienta. Lo coordinamos fácil por WhatsApp.",
  },
  {
    q: "¿Qué pasa si quiero un diseño especial?",
    a: "¡Nos encanta! Podés mandarnos fotos o ideas de referencia por WhatsApp y armamos un presupuesto a medida según la complejidad del diseño.",
  },
  {
    q: "¿Cómo reservo?",
    a: "Escribinos por WhatsApp tocando cualquier botón de la página. Te pasamos disponibilidad y confirmamos tu turno al instante.",
  },
  {
    q: "¿Dónde estás ubicada?",
    a: "Estamos en Córdoba Capital, Argentina. Al confirmar tu turno te enviamos la dirección exacta y las indicaciones para llegar.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="Preguntas frecuentes" title="Antes de tu visita" />

        <div className="mt-12 flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-border/70 bg-card"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-medium text-foreground">{item.q}</span>
                  <Plus
                    className={`size-5 shrink-0 text-primary transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
