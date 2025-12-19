"use client"

import React from "react"
import Image from "next/image"
import { motion } from "motion/react"

type Testimonial = {
  text: string
  image: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    text: "FindMonk helped us align GTM strategy within two weeks.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=faces&auto=format&q=80",
    name: "Customer 1",
    role: "VP Product Marketing",
  },
  {
    text: "We finally have one dashboard that tells the full story.",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=128&h=128&fit=crop&crop=faces&auto=format&q=80",
    name: "Customer 2",
    role: "Head of Growth",
  },
]

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: Testimonial[]
  duration?: number
}) => {
  return (
    <div className={`${props.className} overflow-hidden`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 3,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-2 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="w-full max-w-[280px] rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,0.35)] backdrop-blur-md"
                  key={`${index}-${i}-${name}`}
                >
                  <div className="text-sm text-white/80">{text}</div>
                  <div className="mt-4 flex items-center gap-2">
                    <Image
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-10 w-10 rounded-full object-cover ring-1 ring-white/15"
                    />
                    <div className="flex flex-col">
                      <div className="text-sm font-medium leading-5 tracking-tight text-white">
                        {name}
                      </div>
                      <div className="text-xs leading-5 tracking-tight text-white/60">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="flex flex-col gap-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
          Testimonials
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
          Trusted by fast-moving teams
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-white/60">
          Replace quotes with customer feedback.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="h-[400px] overflow-hidden">
          <TestimonialsColumn testimonials={testimonials} duration={14} />
        </div>
        <div className="hidden h-[400px] overflow-hidden md:block">
          <TestimonialsColumn
            testimonials={[...testimonials].reverse()}
            duration={16}
          />
        </div>
      </div>
    </section>
  )
}
