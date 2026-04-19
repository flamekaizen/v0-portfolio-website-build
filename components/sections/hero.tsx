"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowRight, FileDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HeroShowcase } from "@/components/three/hero-showcase"

const proofPoints = [
  { value: "9.46", label: "CGPA and batch-level academic consistency" },
  { value: "10+", label: "Hands-on builds across AI, robotics, and embedded systems" },
  { value: "Top 0.7%", label: "Amazon ML Challenge 2025 standing" },
]

const focusAreas = ["AI systems", "Robotics", "Research engineering", "Premium frontend"]

export function Hero() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section id="hero" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="ambient-orb left-[-8rem] top-24 h-72 w-72 opacity-70" />
      <div className="absolute right-[-5rem] top-44 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.18),rgba(251,191,36,0)_72%)] blur-3xl" />

      <div className="section-shell">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-14 pb-16 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="section-kicker">
              <Sparkles className="w-3.5 h-3.5" />
              Available for research, product builds, and internships
            </div>

            <div className="mt-7 space-y-6">
              <h1 className="section-heading max-w-4xl">
                Engineering <span className="text-gradient">AI, robotics, and product experiences</span> that feel
                launch-ready, not just research-ready.
              </h1>
              <p className="section-copy balance-text">
                I&apos;m Rahul Kumar, an Electronics and Communication Engineering student at IIIT Bhagalpur. I build
                intelligent systems, robotics workflows, and premium frontend experiences that connect technical depth
                with clarity, demonstration-ready interfaces, and stakeholder confidence.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 backdrop-blur-md"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                "Clear research communication",
                "Edge-first deployment thinking",
                "Demo-ready prototype polish",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-slate-950/55 p-4 text-sm text-slate-300"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                onClick={() => scrollTo("portfolio")}
                className="rounded-full bg-gradient-to-r from-sky-300 to-amber-200 px-7 text-slate-950 shadow-[0_22px_60px_rgba(125,211,252,0.22)] transition-transform hover:-translate-y-0.5"
              >
                View selected work
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("contact")}
                className="rounded-full border-white/12 bg-white/5 px-7 text-white backdrop-blur-md hover:bg-white/10"
              >
                Let&apos;s collaborate
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="rounded-full border border-white/10 bg-slate-950/40 px-7 text-slate-100 hover:bg-white/10"
              >
                <a href="/resume/rahul_v1.pdf" download>
                  <FileDown className="w-4 h-4" />
                  Download resume
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <a
                href="https://github.com/flamekaizen"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/rahul-kumar-iiitbh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="mailto:kaizentechrk@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 transition-colors hover:bg-white/10"
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {proofPoints.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.18 + index * 0.12 }}
                  className="panel-surface card-hover p-5"
                >
                  <div className="text-3xl font-semibold text-white">{item.value}</div>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 28 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10"
          >
            <div className="panel-surface-strong relative min-h-[580px] overflow-hidden p-5 sm:p-7">
              <div className="mesh-overlay absolute inset-0 opacity-30" />
              <div className="absolute inset-x-5 top-5 flex items-center justify-between rounded-full border border-white/10 bg-slate-950/55 px-4 py-3 backdrop-blur-xl">
                <div>
                  <p className="text-sm font-semibold text-white">Interactive 3D showcase</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Research + Product Craft</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/12 px-3 py-1 text-xs font-medium text-emerald-200">
                  <span className="h-2 w-2 rounded-full bg-emerald-300" />
                  Available now
                </span>
              </div>

              <div className="absolute inset-x-0 top-20 bottom-44">
                <HeroShowcase />
              </div>

              <div className="absolute inset-x-5 bottom-5 grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/72 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Current focus</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">Edge AI prototypes with polished interfaces</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    Building systems that connect model performance, hardware constraints, and user-facing clarity.
                  </p>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-sky-300/16 to-amber-200/12 p-5 backdrop-blur-xl">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-200/70">Working style</p>
                  <ul className="mt-3 space-y-3 text-sm text-slate-100">
                    <li>Fast prototyping with strong technical depth</li>
                    <li>Human-centered UI decisions, not just visuals</li>
                    <li>Clear documentation and demo-ready delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => scrollTo("about")}
          className="mx-auto hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-md transition-colors hover:bg-white/10 md:flex"
        >
          Scroll for more
          <ArrowDown className="w-4 h-4" />
        </motion.button>
      </div>
    </section>
  )
}
