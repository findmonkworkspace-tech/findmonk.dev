"use client"

import { motion, useScroll, useTransform } from "motion/react"
import { useInView } from "motion/react"
import { useRef } from "react"
import { Database, Filter, Share2, Brain, Zap, Target, CheckCircle, TrendingUp } from "lucide-react"

const steps = [
  {
    title: "Connect your sources",
    description: "Seamlessly integrate all your data sources and tools in one unified workspace.",
    icon: Database,
  },
  {
    title: "Filter noisy signals",
    description: "AI-powered filters automatically remove noise and highlight what matters most.",
    icon: Filter,
  },
  {
    title: "Analyze patterns",
    description: "Advanced algorithms identify trends and patterns in your data automatically.",
    icon: Brain,
  },
  {
    title: "Generate insights",
    description: "Get actionable insights powered by intelligent data processing and analysis.",
    icon: Zap,
  },
  {
    title: "Set clear goals",
    description: "Define objectives and track progress with smart goal-setting features.",
    icon: Target,
  },
  {
    title: "Validate outcomes",
    description: "Verify results with comprehensive validation and quality checks.",
    icon: CheckCircle,
  },
  {
    title: "Monitor growth",
    description: "Track your team's progress with real-time analytics and performance metrics.",
    icon: TrendingUp,
  },
  {
    title: "Share actionable playbooks",
    description: "Collaborate and distribute proven strategies across your entire organization.",
    icon: Share2,
  },
]

export function HowItWorks() {
  const ref = useRef(null)
  const containerRef = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  // Scroll-based animation for the connecting line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })
  
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

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
          Follow our streamlined 8-step process that transforms chaos into clarity
        </p>
      </motion.div>
      
      <div ref={containerRef} className="relative">
        {/* Horizontal connecting line that animates on scroll */}
        <div className="absolute left-0 top-[88px] hidden h-[2px] w-full lg:block">
          <div className="absolute inset-0 bg-white/10" />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-sky-500 via-blue-500 to-sky-400"
            style={{ 
              width: lineWidth,
              boxShadow: "0 0 20px rgba(56, 189, 248, 0.5)"
            }}
          />
        </div>

        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-sky-400/40 hover:bg-white/10"
              >
                {/* Connecting dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
                  className="absolute -top-2 left-1/2 hidden h-4 w-4 -translate-x-1/2 lg:block"
                >
                  <div className="h-full w-full rounded-full border-2 border-sky-400 bg-slate-900" />
                  <motion.div
                    animate={{ 
                      scale: [1, 1.5, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                    className="absolute inset-0 rounded-full bg-sky-400/30"
                  />
                </motion.div>

                {/* Icon with animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-sky-500/20 to-blue-600/20 text-sky-400"
                >
                  <Icon className="h-6 w-6" />
                </motion.div>

                {/* Step number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  className="mb-2 text-xs font-bold text-sky-400/60"
                >
                  STEP {String(index + 1).padStart(2, '0')}
                </motion.div>

                <p className="text-base font-semibold text-white">{step.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300"
                  whileHover={{ opacity: 1 }}
                  style={{
                    background: "radial-gradient(circle at center, rgba(56, 189, 248, 0.1) 0%, transparent 70%)",
                  }}
                />
              </motion.li>
            )
          })}
        </ol>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-xs text-sky-200">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="h-4 w-4 rounded-full border-2 border-sky-400 border-t-transparent"
            />
            <span>Streamlined process from start to finish</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
