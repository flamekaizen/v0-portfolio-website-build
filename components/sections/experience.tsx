"use client"

import { motion } from "framer-motion"
import { Award, ChevronRight, Milestone, Users } from "lucide-react"

const timeline = [
  {
    year: "2025",
    title: "IIT Kharagpur antenna research",
    description: "Worked on flexible textile antennas for wearable WBAN applications with simulation-backed validation.",
  },
  {
    year: "2025",
    title: "Amazon ML Challenge recognition",
    description: "Finished in the top 0.7 percent, reinforcing strong applied ML problem solving under competition pressure.",
  },
  {
    year: "2024",
    title: "ISRO image enhancement research",
    description: "Explored super-resolution workflows for satellite imagery and edge deployment on Raspberry Pi hardware.",
  },
  {
    year: "2023-24",
    title: "Robotics and technical leadership",
    description: "Led club initiatives, mentored peers, and kept building autonomous and computer-vision driven projects.",
  },
]

const highlights = [
  {
    icon: Award,
    title: "Recognition",
    text: "Hackathon results, research roles, and challenge rankings backed by measurable outputs.",
  },
  {
    icon: Users,
    title: "Leadership",
    text: "Comfortable owning delivery, coordinating teams, and improving the clarity of technical work.",
  },
  {
    icon: Milestone,
    title: "Momentum",
    text: "A steady progression from strong academic performance into higher-complexity applied engineering work.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="section-spacing relative">
      <div className="section-shell">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-kicker">Trajectory</div>
            <h2 className="mt-6 section-heading max-w-3xl text-white">A timeline of research, competitions, and leadership milestones.</h2>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="panel-surface p-6 sm:p-8"
          >
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={`${item.year}-${item.title}`} className="grid gap-4 border-b border-white/8 pb-6 last:border-b-0 last:pb-0 sm:grid-cols-[110px_1fr]">
                  <div>
                    <span className="rounded-full bg-white/8 px-3 py-1 text-sm font-medium text-sky-200">{item.year}</span>
                  </div>
                  <div>
                    <div className="flex items-start gap-3">
                      <ChevronRight className="mt-1 h-4 w-4 text-slate-500" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-slate-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: index * 0.08 }}
                viewport={{ once: true, amount: 0.3 }}
                className="panel-surface card-hover p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300/20 to-amber-200/16">
                  <item.icon className="w-5 h-5 text-sky-200" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
