"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Lightbulb, MessageSquareQuote, Shield, Target, Users, Zap } from "lucide-react"

const principles = [
  {
    icon: Target,
    title: "Outcome-driven execution",
    description: "Every project starts with a clear definition of success — measurable metrics, concrete deliverables, and stakeholder alignment before the first line of code.",
    accent: "from-cyan-400/25 to-blue-500/20",
  },
  {
    icon: Shield,
    title: "Reliability over novelty",
    description: "I prioritize solutions that work consistently in production over bleeding-edge experiments. Technical decisions are justified by constraints, not trends.",
    accent: "from-violet-400/25 to-purple-500/20",
  },
  {
    icon: Zap,
    title: "Rapid, iterative delivery",
    description: "Working prototypes within days, not weeks. Short feedback cycles keep projects aligned with stakeholder expectations and reduce the cost of course corrections.",
    accent: "from-amber-400/25 to-orange-500/20",
  },
  {
    icon: Users,
    title: "Clear communication",
    description: "Technical complexity should not mean opaque processes. I document decisions, share progress transparently, and ensure non-technical stakeholders stay informed.",
    accent: "from-emerald-400/25 to-teal-500/20",
  },
  {
    icon: Lightbulb,
    title: "Full-stack awareness",
    description: "From model architecture to deployment constraints to user-facing interfaces — I consider the entire system when making implementation decisions.",
    accent: "from-rose-400/25 to-pink-500/20",
  },
  {
    icon: CheckCircle2,
    title: "Demo-ready standards",
    description: "Work is not done when it runs. It is done when it can be demonstrated confidently to reviewers, collaborators, judges, or end users.",
    accent: "from-sky-400/25 to-indigo-500/20",
  },
]

const endorsements = [
  {
    quote: "Consistently delivers work that exceeds both technical requirements and presentation expectations.",
    context: "Peer review — IIT Kharagpur research collaboration",
  },
  {
    quote: "Strong ability to translate complex technical concepts into clear, stakeholder-ready communication.",
    context: "Mentor feedback — IIIT Bhagalpur faculty",
  },
  {
    quote: "Demonstrated exceptional problem-solving under competitive pressure with a methodical, results-oriented approach.",
    context: "Amazon ML Challenge 2025 — top 0.7% standing",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="section-spacing relative">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12"
        >
          <div className="section-kicker">Working Principles</div>
          <h2 className="mt-6 section-heading max-w-3xl text-white">
            Professional standards that guide every project engagement.
          </h2>
          <p className="mt-5 section-copy">
            These principles are not aspirational statements — they are validated through research collaborations,
            competition results, and hands-on project delivery.
          </p>
        </motion.div>

        {/* Principles grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.25 }}
              className="group panel-surface card-hover p-6"
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${item.accent} transition-transform duration-300 group-hover:scale-110`}>
                <item.icon className="h-5 w-5 text-sky-200" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Endorsements strip */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-8 grid gap-4 lg:grid-cols-3"
        >
          {endorsements.map((item, i) => (
            <div key={i} className="panel-surface p-5">
              <MessageSquareQuote className="h-5 w-5 text-sky-400/50" />
              <p className="mt-3 text-sm leading-6 text-slate-200 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.16em] text-slate-500">
                {item.context}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
