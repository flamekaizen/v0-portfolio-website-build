"use client"

import { motion } from "framer-motion"
import { Brain, FileText, LayoutDashboard, Rocket, SatelliteDish } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  {
    icon: Brain,
    title: "AI and vision prototypes",
    description: "From data prep to model evaluation and demo pipelines for computer vision or applied ML use cases.",
    points: ["Rapid experimentation", "Model benchmarking", "Demo-ready outputs"],
    accent: "from-cyan-400/25 to-blue-500/20",
  },
  {
    icon: SatelliteDish,
    title: "Robotics and autonomy builds",
    description: "Perception, navigation, and system integration work across embedded devices, sensors, and control loops.",
    points: ["ROS2 workflows", "Hardware-aware implementation", "Simulation to real-world translation"],
    accent: "from-violet-400/25 to-purple-500/20",
  },
  {
    icon: LayoutDashboard,
    title: "Product UI and technical storytelling",
    description: "Interfaces and dashboards that make advanced systems understandable to mentors, judges, teams, and users.",
    points: ["Clear interaction design", "Premium presentation quality", "Responsive frontend builds"],
    accent: "from-amber-400/25 to-orange-500/20",
  },
  {
    icon: FileText,
    title: "Technical documentation and demos",
    description: "Turning complex engineering work into clear case studies, live demos, and stakeholder-ready presentations.",
    points: ["Structured write-ups", "Live demo preparation", "Presentation design"],
    accent: "from-emerald-400/25 to-teal-500/20",
  },
  {
    icon: Rocket,
    title: "Research to demo delivery",
    description: "Converting technical explorations into clean case studies, presentations, and portfolio-ready demonstrations.",
    points: ["Structured communication", "Project framing", "Execution polish"],
    accent: "from-rose-400/25 to-pink-500/20",
  },
]

export function Services() {
  return (
    <section id="services" className="section-spacing relative">
      <div className="section-shell">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-kicker">How I Help</div>
            <h2 className="mt-6 section-heading max-w-3xl text-white">Technical depth, product clarity, and a cleaner path from idea to demo.</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            className="panel-surface max-w-xl p-5"
          >
            <p className="text-sm leading-6 text-slate-300">
              Best suited for projects that need both execution and presentation quality, especially when the work spans
              research, engineering, and user-facing communication.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-5">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.25 }}
              className="group panel-surface card-hover h-full p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} transition-transform duration-300 group-hover:scale-110`}>
                  <service.icon className="w-5 h-5 text-sky-200" />
                </div>
                <span className="text-sm font-semibold text-slate-500">0{index + 1}</span>
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-200">
                {service.points.map((point) => (
                  <li key={point} className="rounded-full border border-white/8 bg-white/5 px-3 py-2 transition-colors group-hover:border-white/14 group-hover:bg-white/8">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          viewport={{ once: true, amount: 0.3 }}
          className="panel-surface mt-6 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Need a polished prototype or portfolio-grade build?</p>
            <p className="mt-2 text-lg font-medium text-white">I can help shape the technical system and the way it is presented.</p>
          </div>
          <Button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })}
            className="rounded-full bg-gradient-to-r from-sky-300 to-amber-200 px-6 text-slate-950 shadow-[0_14px_40px_rgba(125,211,252,0.18)] transition-all hover:shadow-[0_18px_50px_rgba(125,211,252,0.28)] hover:-translate-y-0.5"
          >
            Start a conversation
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
