"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Cpu, Layers3, ShieldCheck } from "lucide-react"

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Applied AI and ML",
    description: "Model experimentation, performance evaluation, and turning research prototypes into usable systems.",
  },
  {
    icon: Cpu,
    title: "Embedded and edge systems",
    description: "Deploying intelligence closer to hardware with tight awareness of latency, memory, and device limits.",
  },
  {
    icon: Layers3,
    title: "Product-grade interfaces",
    description: "Designing web experiences that make complex systems approachable, trustworthy, and easy to navigate.",
  },
  {
    icon: ShieldCheck,
    title: "Engineering discipline",
    description: "Clear documentation, measurable outcomes, and delivery decisions grounded in reliability rather than hype.",
  },
]

const stack = [
  "Python",
  "PyTorch",
  "ROS2",
  "OpenCV",
  "TensorFlow",
  "Next.js",
  "TypeScript",
  "Three.js",
  "HFSS",
  "MATLAB",
  "Docker",
  "Linux",
]

export function About() {
  return (
    <section id="about" className="section-spacing relative">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="panel-surface p-8 sm:p-10"
          >
            <div className="section-kicker">About</div>
            <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Strong systems thinking with a builder&apos;s eye for experience.
            </h2>
            <div className="mt-6 space-y-5 text-base leading-7 text-slate-300">
              <p>
                My work sits at the intersection of electronics, AI, robotics, and digital product design. I enjoy
                taking technically demanding ideas and shaping them into systems that are not only accurate or efficient,
                but also presentable, explainable, and ready to demonstrate.
              </p>
              <p>
                That means I care about the whole stack: experiments, deployment constraints, human interaction, and how
                the final result communicates confidence to reviewers, collaborators, or end users.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-400">Academic standing</p>
                <p className="mt-3 text-3xl font-semibold text-white">Batch top performer</p>
                <p className="mt-2 text-sm text-slate-300">Consistent results across core ECE and applied engineering work.</p>
              </div>
              <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.16em] text-slate-400">Preferred work mode</p>
                <p className="mt-3 text-3xl font-semibold text-white">Research to demo</p>
                <p className="mt-2 text-sm text-slate-300">Rapid prototyping with documentation, storytelling, and polish.</p>
              </div>
            </div>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid gap-4 sm:grid-cols-2"
            >
              {capabilities.map((item, index) => (
                <div key={item.title} className="panel-surface card-hover p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300/22 to-amber-200/18">
                    <item.icon className="w-5 h-5 text-sky-200" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="panel-surface p-6 sm:p-8"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="section-kicker">Toolkit</div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">A flexible stack for research, robotics, and product delivery</h3>
                </div>
                <p className="max-w-sm text-sm leading-6 text-slate-300">
                  I move comfortably between algorithms, simulation tools, embedded workflows, and frontend implementation.
                </p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-slate-950/50 px-4 py-2 text-sm text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
