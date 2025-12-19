import { BackgroundAnimation } from "@/components/ui/background-animation"
import { Navigation } from "@/components/ui/navigation"
import { SiteFooter } from "@/components/ui/site-footer"

export default function CookiePolicyPage() {
  return (
    <div className="relative flex min-h-screen flex-col text-white">
      <BackgroundAnimation />
      <div className="relative flex flex-1 flex-col">
        <Navigation />
        <main className="mx-auto flex max-w-5xl flex-1 flex-col gap-6 px-6 py-24">
          <h1 className="text-4xl font-semibold">Cookie Policy</h1>
          <p className="text-white/70">
            Our Cookie Policy details will be added here. We&apos;ll update this
            page with the full information soon.
          </p>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
