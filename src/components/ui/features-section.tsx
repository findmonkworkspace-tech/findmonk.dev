"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, CheckCircle2, Clock } from "lucide-react"
import { useState } from "react"
import { features } from "@/components/ui/features-data"

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState(features[0])

  return (
    <section id="features" className="flex flex-col gap-10">
      <div className="text-center">
        <h2 className="text-4xl font-semibold text-white">
          Intelligence That Scales
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-white/60 sm:text-base">
          Explore our specialized AI modules designed to accelerate growth and
          automate complexity.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-12">
        <div className="space-y-3 lg:col-span-4">
          {features.map((feature) => {
            const Icon = feature.icon
            const isActive = activeTab.id === feature.id

            return (
              <button
                key={feature.id}
                type="button"
                onClick={() => setActiveTab(feature)}
                className={`flex w-full items-center gap-4 rounded-2xl border px-4 py-3 text-left transition ${
                  isActive
                    ? "border-sky-400/60 bg-white/10 shadow-[0_16px_35px_rgba(56,189,248,0.2)]"
                    : "border-white/10 bg-white/5 hover:border-white/25 hover:bg-white/10"
                }`}
              >
                <span
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition ${
                    isActive
                      ? "border-sky-400/60 bg-sky-500/20 text-sky-200 shadow-[0_0_18px_rgba(56,189,248,0.35)]"
                      : "border-white/10 bg-white/5 text-sky-200/80"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-semibold text-white/80">
                  {feature.title}
                </span>
              </button>
            )
          })}
        </div>

        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="rounded-3xl border border-white/15 bg-white/5 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.25)] backdrop-blur-sm sm:p-8"
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-3xl font-semibold text-white">
                  {activeTab.title}
                </h3>
                <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                  <Clock className="h-4 w-4 text-sky-300" />
                  <span>Timeline: {activeTab.timeline}</span>
                </div>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                    The Usecase
                  </h4>
                  <p className="mt-3 text-base text-white/70">
                    {activeTab.useCase}
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {activeTab.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-sky-300" />
                      <span className="text-sm font-semibold text-white/90">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>

                <Link
                  href={`/features/${activeTab.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-sky-400/60 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-500 hover:text-white"
                >
                  Get Started with {activeTab.title}
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-sky-200 text-sky-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
