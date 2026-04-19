"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, FileDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)

      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (!element) {
          return false
        }

        const rect = element.getBoundingClientRect()
        return rect.top <= 160 && rect.bottom >= 160
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
            isScrolled
              ? "border-white/12 bg-slate-950/75 shadow-[0_20px_80px_rgba(3,10,24,0.35)] backdrop-blur-2xl"
              : "border-white/8 bg-slate-950/45 backdrop-blur-xl"
          }`}
        >
          <button
            onClick={() => scrollToSection("#hero")}
            className="flex items-center gap-3 text-left"
            aria-label="Go to hero section"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-300/30 to-amber-200/20 text-sm font-semibold text-white">
              RK
            </span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">Rahul Kumar</p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">AI and Product Engineer</p>
            </div>
          </button>

          <div className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/4 p-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1)

              return (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive ? "text-slate-950" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 360, damping: 28 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </button>
              )
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              size="sm"
              className="hidden rounded-full border border-sky-300/20 bg-gradient-to-r from-sky-300 to-amber-200 px-4 font-semibold text-slate-950 shadow-[0_14px_40px_rgba(125,211,252,0.22)] transition-transform hover:-translate-y-0.5 md:inline-flex"
            >
              <a href="/resume/rahul_v1.pdf" download>
                <FileDown className="w-4 h-4" />
                Resume
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-white/10 bg-white/5 text-white md:hidden"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-24 z-40 rounded-[1.75rem] border border-white/10 bg-slate-950/92 p-5 shadow-[0_30px_80px_rgba(3,10,24,0.55)] backdrop-blur-2xl md:hidden"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-white text-slate-950"
                      : "bg-white/5 text-slate-200 hover:bg-white/8"
                  }`}
                >
                  <span className="font-medium">{item.name}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
