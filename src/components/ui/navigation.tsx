"use client"

import Link from "next/link"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { useState } from "react"
import { FindMonkLogo } from "@/components/ui/findmonk-logo"
import { features } from "@/components/ui/features-data"

const navItems = [
  { label: "Home", href: "/#home" },
  { label: "About us", href: "/#features" },
  { label: "Services", href: "/features", dropdown: true },
  { label: "Pricing", href: "/#pricing" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
]

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleNavClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="absolute left-0 right-0 top-0 z-30 px-6 pt-6">
      <nav className="mx-auto flex w-full max-w-6xl items-center gap-6 rounded-full border border-white/15 bg-white/5 px-6 py-3 backdrop-blur">
        <Link href="/#home" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-sky-400/40 bg-sky-500/20 shadow-[0_0_20px_rgba(56,189,248,0.35)]">
            <FindMonkLogo className="h-8 w-8" />
          </div>
          <span className="text-lg font-semibold text-white">FindMonk</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 items-center justify-center gap-5 text-sm text-white/80 lg:flex">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="group relative flex items-center">
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-1 transition hover:text-white"
                  aria-label={`Navigate to ${item.label}`}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180" />
                </Link>
                <div className="invisible pointer-events-none absolute left-1/2 top-full z-30 mt-4 w-[420px] -translate-x-1/2 translate-y-2 rounded-3xl border border-white/15 bg-white/5 p-4 opacity-0 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur transition duration-200 group-hover:visible group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="grid gap-2">
                    {features.map((feature) => (
                      <Link
                        key={feature.title}
                        href={`/features/${feature.id}`}
                        className="rounded-2xl border border-transparent px-3 py-2 text-white/80 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
                        aria-label={`View ${feature.title}`}
                        onClick={handleNavClick}
                      >
                        <span className="flex flex-col">
                          <span className="text-sm font-semibold text-white">
                            {feature.title}
                          </span>
                          <span className="text-xs text-white/60">
                            {feature.useCase}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="transition hover:text-white"
                aria-label={`Navigate to ${item.label}`}
                onClick={handleNavClick}
              >
                <span className="inline-flex items-center gap-1">
                  {item.label}
                </span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="ml-auto flex items-center justify-center text-white lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>

        {/* Desktop Contact Button */}
        <Link
          href="/#contact"
          className="ml-auto hidden items-center gap-2 rounded-full border border-sky-400/60 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:bg-sky-500 hover:text-white lg:flex"
          aria-label="Contact us"
        >
          Contact Us
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-sky-200 text-sky-100">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </Link>
      </nav>

        {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mt-4 rounded-3xl border border-white/15 bg-white/5 backdrop-blur lg:hidden">
          <div className="flex flex-col gap-1 p-4">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.label} className="rounded-lg bg-white/5">
                  <Link
                    href={item.href}
                    onClick={handleNavClick}
                    className="block px-4 py-3 text-sm font-semibold text-white"
                  >
                    {item.label}
                  </Link>
                  <div className="divide-y divide-white/5">
                    {features.map((feature) => (
                      <Link
                        key={feature.id}
                        href={`/features/${feature.id}`}
                        onClick={handleNavClick}
                        className="block px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
                      >
                        {feature.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleNavClick}
                  className="rounded-lg px-4 py-3 text-sm text-white/80 transition hover:bg-white/10 hover:text-white"
                  aria-label={`Navigate to ${item.label}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/#contact"
              onClick={handleNavClick}
              className="mt-2 flex items-center justify-center gap-2 rounded-full border border-sky-400/60 px-4 py-3 text-sm font-semibold text-sky-100 transition hover:bg-sky-500 hover:text-white"
              aria-label="Contact us"
            >
              Contact Us
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-sky-200 text-sky-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
