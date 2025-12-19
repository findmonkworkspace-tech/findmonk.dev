import { BackgroundAnimation } from "@/components/ui/background-animation"
import { Navigation } from "@/components/ui/navigation"
import { SiteFooter } from "@/components/ui/site-footer"

export default function TermsOfServicePage() {
  return (
    <div className="relative flex min-h-screen flex-col text-white">
      <BackgroundAnimation />
      <div className="relative flex flex-1 flex-col">
        <Navigation />
        <main className="mx-auto flex max-w-5xl flex-1 flex-col gap-6 px-6 py-24">
          <h1 className="text-4xl font-semibold">Terms of Service</h1>
          <p className="text-white/70">
            The full Terms of Service will be published here. Check back soon
            for the complete details.
          </p>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
