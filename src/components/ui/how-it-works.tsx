"use client"

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

const steps = [
  "Connect your sources",
  "Filter noisy signals",
  "Share actionable playbooks",
]

export function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="how-it-works" className="flex flex-col gap-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
          How It Works
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
          From raw data to clear decisions
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-white/60">
          Outline the onboarding flow and value steps here.
        </p>
      </motion.div>
      <ol className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.li
            key={step}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.03, x: 5 }}
            className="rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-sky-400/40"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
              className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-sm font-semibold text-white"
            >
              0{index + 1}
            </motion.div>
            <p className="text-base font-semibold text-white">{step}</p>
            <p className="mt-2 text-sm text-white/60">
              Add a short descriptor for this step.
            </p>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
