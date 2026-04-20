"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion"
import { ArrowUpRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const filters = ["All", "AI/ML", "Robotics", "Embedded", "Product"]

const projects = [
  {
    title: "EcoWatch Waste Intelligence",
    category: "AI/ML",
    image: "/analytics-dashboard.png",
    summary:
      "A real-time waste monitoring workflow pairing YOLO-based detection with enhancement and reporting layers for low-light scenarios.",
    metrics: ["mAP 0.95", "Real-time inference", "Transformer enhancement"],
    stack: ["YOLO", "Python", "Transformers", "Dashboarding"],
    github: "#",
    live: "#",
  },
  {
    title: "Vision-Guided Robotic Arm",
    category: "Robotics",
    image: "/task-management-dashboard.png",
    summary:
      "Autonomous object detection and grasp planning system for a cylindrical manipulator designed to improve pick-and-place reliability.",
    metrics: ["95% detection accuracy", "20% faster execution", "Vision-control integration"],
    stack: ["Computer Vision", "Arduino", "Python", "Control Systems"],
    github: "#",
    live: "#",
  },
  {
    title: "Cosmo Logistic AMR",
    category: "Embedded",
    image: "/modern-ecommerce-website.png",
    summary:
      "Autonomous mobile robot stack built with ROS2 and Nav2 for ARUCO-based localization and stable navigation in constrained environments.",
    metrics: ["ROS2 navigation", "+/-0.3 m accuracy", "ARUCO localization"],
    stack: ["ROS2", "Nav2", "Gazebo", "Python"],
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Experience Redesign",
    category: "Product",
    image: "/social-media-management-interface.jpg",
    summary:
      "A premium portfolio UI focused on stronger storytelling, filtered work samples, layered transitions, and a contained 3D visual identity.",
    metrics: ["Professional visual system", "Interactive 3D stage", "Responsive UX"],
    stack: ["Next.js", "Framer Motion", "Three.js", "Tailwind CSS"],
    github: "#",
    live: "#",
  },
]

function ProjectCard({ project, index }: { project: (typeof projects)[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [4, -4])
  const rotateY = useTransform(x, [-100, 100], [-4, 4])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    x.set(e.clientX - centerX)
    y.set(e.clientY - centerY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <motion.article
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 26 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group panel-surface overflow-hidden transition-all duration-300 hover:border-white/16"
    >
      <div className="relative h-72 overflow-hidden">
        {/* Skeleton loader */}
        {!imageLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-[length:200%_100%]" />
        )}
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover transition-all duration-700 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07101d] via-[#07101d]/35 to-transparent" />
        <div className="absolute inset-x-5 top-5 flex items-start justify-between gap-3">
          <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-sky-200 backdrop-blur-md">
            {project.category}
          </span>
          <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80 backdrop-blur-md">
            Featured
          </span>
        </div>
      </div>

      <div className="space-y-6 p-6 sm:p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">{project.summary}</p>
          </div>
          <ArrowUpRight className="mt-1 w-5 h-5 shrink-0 text-slate-500 transition-all duration-300 group-hover:text-sky-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>

        <div className="flex flex-wrap gap-2">
          {project.metrics.map((metric) => (
            <span
              key={metric}
              className="rounded-full border border-white/10 bg-gradient-to-r from-sky-300/14 to-amber-200/10 px-3 py-2 text-xs font-medium text-slate-100"
            >
              {metric}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="rounded-full bg-slate-950/55 px-3 py-1.5 text-xs text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="rounded-full border-white/12 bg-white/5 text-white hover:bg-white/10 transition-all"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
          <Button
            size="sm"
            asChild
            className="btn-glow rounded-full bg-gradient-to-r from-sky-300 to-amber-200 text-slate-950"
          >
            <a href={project.live} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4" />
              Preview
            </a>
          </Button>
        </div>
      </div>
    </motion.article>
  )
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="portfolio" className="section-spacing relative">
      <div className="section-shell">
        <div className="mb-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-kicker">Selected Work</div>
            <h2 className="mt-6 section-heading max-w-3xl text-white">Case studies that combine technical execution with sharper presentation.</h2>
            <p className="mt-5 section-copy">
              Filter by area to explore the kinds of systems I enjoy building most: AI, robotics, embedded work, and
              product-facing experiences.
            </p>
          </motion.div>

          <div className="grid gap-4">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              viewport={{ once: true, amount: 0.3 }}
              className="panel-surface p-6"
            >
              <p className="section-kicker">Portfolio spotlight</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">A curated sample of research-led product work.</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                These projects were chosen for their blend of technical depth, polished delivery, and interface-ready presentation.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Research-backed", value: "AI workflows & robotics simulations" },
                  { label: "Product-ready", value: "Interactive demos and dashboards" },
                  { label: "Technical polish", value: "Reliable, presentable systems" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-300 transition-colors hover:border-white/16 hover:bg-white/8">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                    <p className="mt-3 font-semibold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="hide-scrollbar flex gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/5 p-1 backdrop-blur-xl"
            >
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                    activeFilter === filter
                      ? "bg-white text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.08)]"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div layout className="grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
