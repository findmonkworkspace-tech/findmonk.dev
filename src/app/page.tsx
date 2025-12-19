import { BackgroundAnimation } from "@/components/ui/background-animation"
import { ContactSection } from "@/components/ui/contact-section"
import { FAQSection } from "@/components/ui/faq-section"
import { FeaturesSection } from "@/components/ui/features-section"
import { Hero } from "@/components/ui/hero"
import { HowItWorks } from "@/components/ui/how-it-works"
import { Navigation } from "@/components/ui/navigation"
import { PricingSection } from "@/components/ui/pricing-section"
import { SiteFooter } from "@/components/ui/site-footer"
import { TestimonialsSection } from "@/components/ui/testimonials-section"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col text-white">
      <BackgroundAnimation />
      <div className="relative flex flex-1 flex-col">
        <Navigation />
        <Hero />

        <main id="main-content" className="mx-auto flex max-w-6xl flex-1 flex-col gap-24 px-6 py-24">
          <FeaturesSection />
          <HowItWorks />
          <PricingSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
