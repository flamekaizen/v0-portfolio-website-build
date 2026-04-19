"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What kinds of projects are the best fit?",
    answer:
      "Projects that combine technical depth with presentation quality are the strongest fit: AI demos, robotics systems, research showcases, portfolio redesigns, and polished frontend builds.",
  },
  {
    question: "Can you integrate services like EmailJS into the site?",
    answer:
      "Yes. The contact flow can support EmailJS integration, better inquiry qualification, fallback handling, and a more production-ready user experience around lead capture.",
  },
  {
    question: "What makes the site more production-grade now?",
    answer:
      "The upgrades include a stronger information hierarchy, cleaner service positioning, structured metadata, sitemap and robots generation, improved accessibility affordances, and a more reliable contact workflow.",
  },
  {
    question: "How quickly can you typically respond?",
    answer:
      "I usually respond within 24 hours, especially for clearly scoped opportunities, research collaboration requests, and project briefs with context.",
  },
]

export function Faq() {
  const [openQuestion, setOpenQuestion] = useState(faqs[0].question)

  return (
    <section className="section-spacing relative">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-kicker">FAQ</div>
            <h2 className="mt-6 section-heading max-w-2xl text-white">Common questions before starting a conversation.</h2>
            <p className="mt-5 section-copy">
              A few quick answers on project fit, integrations, and what &quot;professional and production-ready&quot; means in
              practice for this site.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((item, index) => {
              const isOpen = openQuestion === item.question

              return (
                <motion.div
                  key={item.question}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="panel-surface overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenQuestion(isOpen ? "" : item.question)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg font-semibold text-white">{item.question}</span>
                    <ChevronDown className={`h-5 w-5 text-slate-400 transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-sm leading-6 text-slate-300">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
