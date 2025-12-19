"use client"

import { ArrowUpRight } from "lucide-react"
import { motion, useInView, type Variants } from "motion/react"
import { useRef } from "react"

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const heroInView = useInView(heroRef, { amount: 0.6, once: false })

  // Animation variants for word-by-word reveal
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  }

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const headlineWords = "Reimagine How Your Team Works With".split(" ")

  return (
    <>
      {/* Skip to content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-sky-500 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <section
        id="home"
        ref={heroRef}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden text-center"
        aria-label="Hero section"
      >
        <div className="relative z-10 flex max-w-3xl flex-col items-center gap-6 px-6 py-16 text-white">
          {/* Badge with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200"
          >
            <motion.span
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.8)]"
            />
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Powering Decisions With Intelligent Insights
            </motion.span>
          </motion.div>

          {/* Main heading with word-by-word animation */}
          <div className="text-4xl font-semibold leading-tight sm:text-6xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="inline"
            >
              {headlineWords.map((word, index) => (
                <motion.span
                  key={index}
                  variants={wordVariants}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            
            {/* FindMonk with special effects */}
            <motion.span
              initial={{ opacity: 0, scale: 0.5, rotateX: -90 }}
              animate={
                heroInView
                  ? { opacity: 1, scale: 1, rotateX: 0 }
                  : { opacity: 0, scale: 0.5, rotateX: -90 }
              }
              transition={{ 
                duration: 0.8, 
                delay: 1.2, 
                ease: "easeOut",
                type: "spring",
                stiffness: 80
              }}
              className="inline-block"
            >
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
                className="bg-gradient-to-r from-sky-300 via-sky-500 to-blue-600 bg-clip-text text-transparent"
              >
                <motion.span
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(56, 189, 248, 0.5)",
                      "0 0 40px rgba(56, 189, 248, 0.8)",
                      "0 0 20px rgba(56, 189, 248, 0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  FindMonk 
                </motion.span>
              </motion.span>
            </motion.span>
          </div>

          {/* Description with typewriter-style reveal */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-base text-white/70 sm:text-lg"
          >
            <motion.span
              initial={{ width: 0 }}
              animate={heroInView ? { width: "100%" } : { width: 0 }}
              transition={{ duration: 1.2, delay: 1.6, ease: "easeInOut" }}
              className="inline-block overflow-hidden whitespace-nowrap"
              style={{ display: "inline-block" }}
            >
              FindMonk is an intelligent workspace that brings your tools, data,
              and people together.
            </motion.span>
          </motion.p>

          {/* Buttons with enhanced staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.2 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(14, 127, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full bg-sky-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(14,127,255,0.35)] transition hover:bg-sky-400"
              href="#contact"
              aria-label="Contact us"
            >
              Contact Us
              <motion.span 
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sky-600"
              >
                <ArrowUpRight className="h-4 w-4" />
              </motion.span>
            </motion.a>
            <motion.a
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 2.4 }}
              whileHover={{ 
                scale: 1.05,
                borderColor: "rgba(255, 255, 255, 0.6)"
              }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              href="#features"
              aria-label="Browse features"
            >
              Browse Features
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 text-white">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
