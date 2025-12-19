import Link from "next/link"
import { BackgroundAnimation } from "@/components/ui/background-animation"
import { Navigation } from "@/components/ui/navigation"
import { SiteFooter } from "@/components/ui/site-footer"
import { features } from "@/components/ui/features-data"

export default function FeaturesPage() {
  return (
    <div className="relative flex min-h-screen flex-col text-white">
      <BackgroundAnimation />
      <div className="relative flex flex-1 flex-col">
        <Navigation />
        <main className="mx-auto flex max-w-6xl flex-1 flex-col gap-8 px-6 py-24">
          <div className="space-y-3 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
              Features
            </p>
            <h1 className="text-4xl font-semibold">Intelligence That Scales</h1>
            <p className="mx-auto max-w-2xl text-sm text-white/60 sm:text-base">
              Explore our specialized AI modules. Click any feature to view its
              dedicated page.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <Link
                key={feature.id}
                href={`/features/${feature.id}`}
                className="group rounded-3xl border border-white/15 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-[0_20px_50px_rgba(56,189,248,0.15)]"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-500/20 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.3)]">
                    <feature.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-base font-semibold text-white">
                      {feature.title}
                    </p>
                    <p className="text-xs text-white/60">
                      Timeline: {feature.timeline}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-white/60 group-hover:text-white/80">
                  {feature.useCase}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {feature.metrics.map((metric) => (
                    <span
                      key={metric}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80"
                    >
                      {metric}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
