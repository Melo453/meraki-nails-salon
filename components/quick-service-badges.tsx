const SERVICES = ["Semipermanente", "Kapping", "Soft gel", "Nail art"]

export function QuickServiceBadges() {
  return (
    <section className="border-y border-border/60 bg-card/55">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-6 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm font-medium text-foreground">
          Servicios principales
        </p>
        <div className="flex flex-wrap gap-2">
          {SERVICES.map((service) => (
            <span
              key={service}
              className="rounded-full border border-border bg-background px-4 py-2 text-sm text-muted-foreground"
            >
              {service}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
