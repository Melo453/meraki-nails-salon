import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { QuickServiceBadges } from "@/components/quick-service-badges"
import { Services } from "@/components/services"
import { BeforeAfter } from "@/components/before-after"
import { WhyUs } from "@/components/why-us"
import { Testimonials } from "@/components/testimonials"
import { HowToBook } from "@/components/how-to-book"
import { Pricing } from "@/components/pricing"
import { Gallery } from "@/components/gallery"
import { Faq } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <QuickServiceBadges />
        <Gallery />
        <Services />
        <BeforeAfter />
        <WhyUs />
        <Testimonials />
        <HowToBook />
        <Faq />
        <Pricing />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  )
}
