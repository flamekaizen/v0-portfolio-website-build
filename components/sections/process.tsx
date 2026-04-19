"use client"

import { motion } from "framer-motion"
import { Cog, MailCheck, Search, ShieldCheck } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Discover and define",
    description: "Clarify the problem, user journey, success metrics, and what the project needs to feel production-ready.",
  },
  {
    icon: Cog,
    title: "Design the system",
    description: "Shape the UI, interaction model, and technical architecture so implementation choices stay intentional.",
  },
  {
    icon: MailCheck,
    title: "Build the product layer",
    description: "Implement the frontend, 3D polish, responsive behavior, and integrations like EmailJS contact delivery.",
  },
  {
    icon: ShieldCheck,
    title: "QA and handoff",
    description: "Tighten details, improve accessibility and SEO, and leave the project easier to maintain and present.",
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
              className="panel-surface card-hover h-full p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300/20 to-amber-200/16">
                  <step.icon className="h-5 w-5 text-sky-200" />
                </div>
                <span className="text-sm font-semibold text-slate-500">0{index + 1}</span>
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
