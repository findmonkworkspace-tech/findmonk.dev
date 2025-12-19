"use client"

import { motion } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="contact" className="flex flex-col gap-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
          Contact Us
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
          Start a conversation
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-white/60">
          Share your goals and we will reach out with next steps.
        </p>
      </motion.div>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="grid gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm md:grid-cols-2"
      >
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="flex flex-col gap-2 text-sm text-white/70"
        >
          Full name
          <input
            type="text"
            placeholder="Alex Morgan"
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-sky-400/60 focus:outline-none"
          />
        </motion.label>
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex flex-col gap-2 text-sm text-white/70"
        >
          Work email
          <input
            type="email"
            placeholder="alex@company.com"
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-sky-400/60 focus:outline-none"
          />
        </motion.label>
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="flex flex-col gap-2 text-sm text-white/70"
        >
          Company
          <input
            type="text"
            placeholder="Your Company"
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-sky-400/60 focus:outline-none"
          />
        </motion.label>
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="flex flex-col gap-2 text-sm text-white/70"
        >
          Team size
          <input
            type="text"
            placeholder="10-50"
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-sky-400/60 focus:outline-none"
          />
        </motion.label>
        <motion.label
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="flex flex-col gap-2 text-sm text-white/70 md:col-span-2"
        >
          Message
          <textarea
            rows={4}
            placeholder="Tell us about your goals"
            className="rounded-xl border border-white/10 bg-black/30 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-sky-400/60 focus:outline-none"
          />
        </motion.label>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="md:col-span-2"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="rounded-full bg-sky-500 px-6 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,127,255,0.35)] transition hover:bg-sky-400"
          >
            Send message
          </motion.button>
        </motion.div>
      </motion.form>
    </section>
  )
}
