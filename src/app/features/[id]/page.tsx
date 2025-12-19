import Link from "next/link"
import { ArrowLeft, CheckCircle2, Clock } from "lucide-react"
import { BackgroundAnimation } from "@/components/ui/background-animation"
import { Navigation } from "@/components/ui/navigation"
import { SiteFooter } from "@/components/ui/site-footer"
import { features } from "@/components/ui/features-data"

type FeatureParams = {
  params: { id: string }
}

export default function FeatureDetailPage({ params }: FeatureParams) {
  const feature =
    features.find((item) => item.id === params.id) ?? {
      id: params.id,
      title: "Feature coming soon",
      useCase:
        "This feature page is not ready yet. Please check back soon for full details.",
      timeline: "TBD",
      metrics: [],
      icon: features[0]?.icon ?? (() => null),
    }

  return (
    <div className="relative flex min-h-screen flex-col text-white">
      <BackgroundAnimation />
      <div className="relative flex flex-1 flex-col">
        <Navigation />
        <main className="mx-auto flex max-w-5xl flex-1 flex-col gap-8 px-6 py-24">
          <div className="flex items-center gap-4">
            <Link
              href="/features"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:border-white/30 hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Features
            </Link>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">
              <Clock className="h-4 w-4 text-sky-300" />
              <span>Timeline: {feature.timeline}</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-8">
            <div className="flex items-center gap-4">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-sky-400/40 bg-sky-500/20 text-sky-100 shadow-[0_0_18px_rgba(56,189,248,0.3)]">
                <feature.icon className="h-6 w-6" />
              </span>
              <div>
                <h1 className="text-3xl font-semibold text-white">
                  {feature.title}
                </h1>
                <p className="text-sm text-white/60">{feature.useCase}</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-300">
                Overview
              </h2>
              <p className="text-base text-white/70">
                Detailed content for this feature will go here. Add your copy,
                diagrams, or walkthroughs when ready.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {feature.metrics.length > 0 ? (
                feature.metrics.map((metric) => (
                  <div
                    key={metric}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 text-sky-300" />
                    <span className="text-sm font-semibold text-white/90">
                      {metric}
                    </span>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  Metrics will be added soon.
                </div>
              )}
            </div>
          </div>
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return features.map((feature) => ({ id: feature.id }))
}
