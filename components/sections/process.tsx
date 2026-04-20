"use client"

import { motion } from "framer-motion"
import { Cog, Rocket, Search, ShieldCheck } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discover and define",
    description: "Clarify the problem, user journey, success metrics, and what the project needs to feel production-ready.",
    accent: "from-cyan-400/25 to-blue-500/20",
  },
  {
    icon: Cog,
    title: "Design the system",
    description: "Shape the UI, interaction model, and technical architecture so implementation choices stay intentional.",
    accent: "from-violet-400/25 to-purple-500/20",
  },
  {
    icon: Rocket,
    title: "Build the product layer",
    description: "Implement the frontend, 3D polish, responsive behavior, polished interactions, and reliable contact pathways.",
    accent: "from-amber-400/25 to-orange-500/20",
  },
  {
    icon: ShieldCheck,
    title: "QA and handoff",
    description: "Tighten details, improve accessibility and SEO, and leave the project easier to maintain and present.",
    accent: "from-emerald-400/25 to-teal-500/20",
  },
]

export function Process() {
  return (
    <section id="process" className="section-spacing relative">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-kicker">Process</div>
            <h2 className="mt-6 section-heading max-w-3xl text-white">A clearer delivery process makes the work feel more dependable.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            className="panel-surface max-w-xl p-5"
          >
            <p className="text-sm leading-6 text-slate-300">
              The goal is not just to build something visually strong, but to make the final result easier to trust,
              demo, deploy, and extend.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-5 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className="group panel-surface card-hover relative h-full p-6"
            >
              {/* Step connector line */}
              {index < steps.length - 1 && (
                <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-white/15 to-transparent lg:block" />
              )}
              <div className="flex items-start justify-between gap-3">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${step.accent} transition-transform duration-300 group-hover:scale-110`}>
                  <step.icon className="h-5 w-5 text-sky-200" />
                </div>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-semibold text-slate-500 transition-colors group-hover:border-white/20 group-hover:text-slate-300">
                  {index + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
