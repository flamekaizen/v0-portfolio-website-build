"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp Solutions",
    feedback: "Working with this developer was exceptional. They delivered a complex AI-powered dashboard that exceeded our expectations in both functionality and user experience.",
    type: "client",
  },
  {
    name: "Dr. Michael Chen",
    role: "Research Director",
    company: "InnovateLabs",
    feedback: "The embedded systems integration for our robotics project was handled with remarkable precision. The code was clean, well-documented, and performed flawlessly under real-world conditions.",
    type: "client",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO",
    company: "StartupXYZ",
    feedback: "From concept to deployment, this developer guided us through building a scalable web platform. Their full-stack expertise was crucial to our market launch.",
    type: "client",
  },
  {
    name: "James Wilson",
    role: "Engineering Lead",
    company: "GlobalTech Industries",
    feedback: "The machine learning models implemented for our predictive analytics system showed significant improvements. Outstanding technical depth combined with business acumen.",
    type: "project",
  },
  {
    name: "Lisa Park",
    role: "VP of Engineering",
    company: "DataFlow Corp",
    feedback: "Outstanding work on our data pipeline optimization. The performance improvements were substantial, and the solution was both innovative and maintainable.",
    type: "industry",
  },
  {
    name: "Robert Kim",
    role: "Founder",
    company: "NextGen Robotics",
    feedback: "The ROS2 integration and computer vision system they built for our autonomous vehicle project was groundbreaking. Expertise across AI and robotics is rare.",
    type: "client",
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
          className="mb-12 text-center"
        >
          <div className="section-kicker mx-auto">Testimonials</div>
          <h2 className="mt-6 section-heading text-white">What clients and colleagues say</h2>
          <p className="mt-6 section-copy mx-auto max-w-2xl">
            Feedback from projects, collaborations, and industry partnerships that highlight the real-world impact of this work.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="panel-surface card-hover flex flex-col p-6"
            >
              <Quote className="mb-4 h-6 w-6 text-sky-400/60" />
              <p className="mb-6 flex-1 text-sm leading-6 text-slate-300">
                "{testimonial.feedback}"
              </p>
              <div className="space-y-3 border-t border-white/8 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-400/20 to-amber-400/20">
                    <span className="text-xs font-semibold text-white">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                    <p className="text-xs text-slate-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
                <div>
                  <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${
                      testimonial.type === "client"
                        ? "bg-green-500/20 text-green-300"
                        : testimonial.type === "project"
                          ? "bg-blue-500/20 text-blue-300"
                          : "bg-purple-500/20 text-purple-300"
                    }`}
                  >
                    {testimonial.type === "client"
                      ? "Client Feedback"
                      : testimonial.type === "project"
                        ? "Project Review"
                        : "Industry Endorsement"}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
