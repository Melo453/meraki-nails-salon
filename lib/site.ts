export const SITE = {
  name: "meraki",
  fullName: "meraki",
  location: "Córdoba Capital · Zona Norte · Barrio Parque Liceo 1ra Sección",
  instagram: "https://www.instagram.com/meraki.nails.salon/",
  instagramHandle: "@meraki.nails.salon",
  whatsappNumber: "5493513031128",
}

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_DEFAULT = whatsappLink(
  "¡Hola Aylen! Me gustaría reservar un turno",
)

export const NAV_LINKS = [
  { label: "Trabajos", href: "#galeria" },
  { label: "Servicios", href: "#servicios" },
  { label: "Por qué Meraki", href: "#beneficios" },
  { label: "Opiniones", href: "#opiniones" },
  { label: "Reservar", href: "#reservar" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
]
