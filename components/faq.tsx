"use client"

import { useState } from "react"
import { Plus } from "lucide-react"
import { SectionHeading } from "./section-heading"

const FAQS = [
  {
    q: "¿Trabajás con turno?",
    a: "Sí, la atención es únicamente con turno previo para dedicarle el tiempo que merece cada clienta.",
  },
  {
    q: "¿Cómo reservo?",
    a: "Escribime por WhatsApp, contame qué servicio querés y te paso disponibilidad para coordinar día y horario.",
  },
  {
    q: "¿Puedo llevar una referencia de diseño?",
    a: "Sí. Podés mandarme fotos o ideas por WhatsApp y vemos cómo adaptarlas a tus uñas, largo y estilo.",
  },
  {
    q: "¿Cuánto dura el esmaltado semipermanente?",
    a: "Depende del crecimiento y los cuidados, pero suele mantenerse prolijo entre 2 y 3 semanas.",
  },
  {
    q: "¿Qué diferencia hay entre kapping y soft gel?",
    a: "El kapping refuerza la uña natural. El soft gel se usa para sumar largo y forma con extensiones delicadas.",
  },
  {
    q: "¿Dónde estás ubicada?",
    a: "Estoy en Córdoba Capital, Zona Norte, Barrio Parque Liceo 1ra Sección. Al confirmar tu turno te envío la dirección exacta.",
  },
  {
    q: "¿Los precios son fijos?",
    a: "Los valores pueden variar según diseño, largo, técnica y complejidad. Para confirmar el precio final, escribime por WhatsApp.",
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 bg-secondary/40 py-20 md:py-28">
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
