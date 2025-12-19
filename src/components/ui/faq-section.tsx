"use client"

import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, useInView } from "motion/react"
import { useEffect, useRef, useState } from "react"

const faqs = [
  {
    question: "How does the platform collect data?",
    answer:
      "We unify inputs from connected tools, optional uploads, and shared signals to build a live workspace view.",
  },
  {
    question: "Can we invite external collaborators?",
    answer:
      "Yes. Share read-only or contributor access with partners and set granular permissions.",
  },
  {
    question: "What integrations are supported?",
    answer:
      "We support popular CRM, analytics, and project tools, with more on the way.",
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Most teams are live in a day. Connect your tools, set access, and import core data.",
  },
  {
    question: "Is there an onboarding team?",
    answer:
      "Yes. We provide guided setup, templates, and training sessions based on your goals.",
  },
  {
    question: "How does AI summarization work?",
    answer:
      "We combine context from your workspace with safe prompts to generate concise summaries.",
  },
  {
    question: "Can we control data access by role?",
    answer:
      "You can set permissions by team, workspace, and document to keep sensitive data scoped.",
  },
  {
    question: "Does FindMonk support custom workflows?",
    answer:
      "Yes. You can design workflow stages, automation rules, and alerts for key events.",
  },
  {
    question: "What happens if a tool connection breaks?",
    answer:
      "We notify admins and pause syncs until the integration is reauthorized.",
  },
  {
    question: "Is there an API available?",
    answer:
      "A developer API is available for enterprise plans to extend ingestion and reporting.",
  },
  {
    question: "How do you handle data privacy?",
    answer:
      "We use encryption in transit and at rest, and follow strict access controls.",
  },
  {
    question: "Can we export our data?",
    answer:
      "Yes. You can export datasets and reports in common formats at any time.",
  },
  {
    question: "What kind of support is included?",
    answer:
      "We offer email support for all plans and priority assistance for enterprise teams.",
  },
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [openKey, setOpenKey] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchQuery, setSearchQuery] = useState("")
  const itemsPerPage = 5
  const normalizedQuery = searchQuery.trim().toLowerCase()
  const filteredFaqs = normalizedQuery
    ? faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(normalizedQuery) ||
          faq.answer.toLowerCase().includes(normalizedQuery)
      )
    : faqs
  const totalPages = Math.ceil(filteredFaqs.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const visibleFaqs = filteredFaqs.slice(
    startIndex,
    startIndex + itemsPerPage
  )

  useEffect(() => {
    setOpenKey(null)
  }, [currentPage])

  useEffect(() => {
    setCurrentPage(1)
    setOpenKey(null)
  }, [normalizedQuery])

  return (
    <section id="faq" className="flex flex-col gap-6" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
          FAQ
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
          Answers to common questions
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-white/60">
          Use this area to reduce friction for new users.
        </p>
      </motion.div>
      <div className="flex flex-col gap-3">
        <div className="rounded-3xl border border-white/15 bg-white/5 p-3 backdrop-blur-sm">
          <label htmlFor="faq-search" className="sr-only">
            Search FAQs
          </label>
          <input
            id="faq-search"
            type="search"
            placeholder="Search questions..."
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 focus:border-sky-400/60 focus:outline-none"
          />
        </div>
        <div className="space-y-3">
        {visibleFaqs.map((faq, index) => {
          const isOpen = openKey === faq.question
          const toggle = () =>
            setOpenKey((current) =>
              current === faq.question ? null : faq.question
            )

          return (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cursor-pointer rounded-3xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-sky-400/40"
              onClick={toggle}
            >
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation()
                  toggle()
                }}
                className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold text-white"
                aria-expanded={isOpen}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`h-4 w-4 transition ${
                    isOpen ? "rotate-180 text-sky-200" : "text-white/60"
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-sm text-white/60">{faq.answer}</p>
              </motion.div>
            </motion.div>
          )
        })}
        {visibleFaqs.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center text-sm text-white/60">
            No results found. Try a different search.
          </div>
        )}
        </div>
      </div>
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-3 pt-2 text-sm text-white/70">
          <button
            type="button"
            onClick={() => setCurrentPage((page) => Math.max(1, page - 1))}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentPage === 1}
            aria-label="Previous page"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNumber = index + 1
              const isActive = pageNumber === currentPage

              return (
                <button
                  key={pageNumber}
                  type="button"
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`flex h-9 w-9 items-center justify-center rounded-full border text-sm font-semibold transition ${
                    isActive
                      ? "border-sky-400/60 bg-sky-500/20 text-sky-100"
                      : "border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
                  }`}
                  aria-label={`Go to page ${pageNumber}`}
                >
                  {pageNumber}
                </button>
              )
            })}
          </div>
          <button
            type="button"
            onClick={() =>
              setCurrentPage((page) => Math.min(totalPages, page + 1))
            }
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
            disabled={currentPage === totalPages}
            aria-label="Next page"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </section>
  )
}
