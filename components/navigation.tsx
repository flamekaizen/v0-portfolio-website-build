"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { MagneticButton } from "@/components/animations/magnetic-button"

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href.substring(1))
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false) // Close mobile menu after navigation
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
          }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold text-gradient cursor-pointer"
              onClick={() => scrollToSection("#hero")}
            >
              Rahul Kumar
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <MagneticButton key={item.name} strength={0.1}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative px-3 py-2 text-sm font-medium transition-colors ${activeSection === item.href.substring(1)
                        ? "text-accent"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                        initial={false}
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                </MagneticButton>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <ThemeToggle />

              <MagneticButton strength={0.2}>
                <Button
                  onClick={() => scrollToSection("#contact")}
                  className="hidden md:block bg-accent hover:bg-accent/90 text-accent-foreground glow-effect"
                >
                  Get In Touch
                </Button>
              </MagneticButton>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="sm"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <motion.div animate={{ rotate: isMobileMenuOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </motion.div>
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border md:hidden"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => scrollToSection(item.href)}
                    className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${activeSection === item.href.substring(1)
                        ? "text-accent bg-accent/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground glow-effect"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
