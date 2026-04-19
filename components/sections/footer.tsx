"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="panel-surface overflow-hidden p-6 sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="section-kicker">Rahul Kumar</p>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Product-minded engineering across AI, robotics, and interface design.
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-300">
                Built with Next.js, Framer Motion, and React Three Fiber to present technical work with stronger clarity
                and a more professional visual language.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Explore</p>
                <div className="mt-4 space-y-3">
                  {footerLinks.map((item) => (
                    <a key={item.label} href={item.href} className="flex items-center gap-2 text-slate-200 transition-colors hover:text-white">
                      <ArrowUpRight className="w-4 h-4 text-slate-500" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Connect</p>
                <div className="mt-4 space-y-3">
                  <a href="mailto:kaizentechrk@gmail.com" className="flex items-center gap-2 text-slate-200 transition-colors hover:text-white">
                    <Mail className="w-4 h-4 text-slate-500" />
                    Email
                  </a>
                  <a href="https://github.com/flamekaizen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-200 transition-colors hover:text-white">
                    <Github className="w-4 h-4 text-slate-500" />
                    GitHub
                  </a>
                  <a href="https://linkedin.com/in/rahul-kumar-iiitbh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-200 transition-colors hover:text-white">
                    <Linkedin className="w-4 h-4 text-slate-500" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/8 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>Copyright {new Date().getFullYear()} Rahul Kumar. All rights reserved.</p>
            <p>Designed to feel more focused, professional, and presentation-ready.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
