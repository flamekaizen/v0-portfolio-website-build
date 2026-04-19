"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { BookOpen, Briefcase, FileDown, GraduationCap, Target, Trophy, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"

const tabs = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "toolkit", label: "Toolkit", icon: Wrench },
  { id: "leadership", label: "Leadership", icon: Trophy },
  { id: "publications", label: "Publications", icon: BookOpen },
]

export function Resume() {
  const [activeTab, setActiveTab] = useState("experience")

  return (
    <section id="resume" className="section-spacing relative">
      <div className="section-shell">
        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-kicker">Resume Snapshot</div>
            <h2 className="mt-6 section-heading max-w-3xl text-white">A compact view of my academic record, hands-on experience, and technical range.</h2>
          </motion.div>

          <Button
            asChild
            className="w-fit rounded-full bg-gradient-to-r from-sky-300 to-amber-200 px-6 text-slate-950"
          >
            <a href="/resume/rahul_v1.pdf" download>
              <FileDown className="w-4 h-4" />
              Download full resume
            </a>
          </Button>
        </div>

        <div className="panel-surface overflow-hidden p-4 sm:p-6">
          <div className="hide-scrollbar flex gap-2 overflow-x-auto rounded-full border border-white/8 bg-white/5 p-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id

              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 rounded-full px-4 py-2 text-sm transition-colors ${
                    isActive ? "text-slate-950" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="resume-tab"
                      className="absolute inset-0 rounded-full bg-white"
                      transition={{ type: "spring", stiffness: 360, damping: 28 }}
                    />
                  )}
                  <tab.icon className="relative z-10 w-4 h-4" />
                  <span className="relative z-10">{tab.label}</span>
                </button>
              )
            })}
          </div>

          <div className="mt-6 min-h-[26rem]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.28 }}
              >
                {activeTab === "experience" && <ExperienceContent />}
                {activeTab === "education" && <EducationContent />}
                {activeTab === "toolkit" && <ToolkitContent />}
                {activeTab === "leadership" && <LeadershipContent />}
                {activeTab === "publications" && <PublicationsContent />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceContent() {
  const experiences = [
    {
      role: "Student Researcher",
      organization: "Indian Institute of Technology Kharagpur",
      period: "May 2025 - Jun 2025",
      points: [
        "Designed and optimized 2.45 GHz flexible textile antennas for wearable WBAN use cases.",
        "Improved radiation efficiency through on-body and bending-aware optimization.",
        "Validated performance using HFSS, ADS, and MATLAB with SAR-aware evaluation.",
      ],
    },
    {
      role: "Student Researcher",
      organization: "Space Applications Centre (ISRO), Ahmedabad",
      period: "May 2024 - Jul 2024",
      points: [
        "Built satellite image super-resolution pipelines using CNN and transformer-based approaches.",
        "Deployed inference workflows on Raspberry Pi 4B for practical edge experimentation.",
        "Achieved strong PSNR and SSIM results for imagery enhancement scenarios.",
      ],
    },
  ]

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {experiences.map((item) => (
        <div key={item.organization} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-slate-400">{item.period}</p>
          <h3 className="mt-4 text-xl font-semibold text-white">{item.role}</h3>
          <p className="mt-1 text-sky-200">{item.organization}</p>
          <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
            {item.points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function EducationContent() {
  const courses = [
    "Data Structures and Algorithms",
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Signal Processing",
    "VLSI Design",
    "RF and Microwave Systems",
    "Robotics",
  ]

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_0.95fr]">
      <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
        <p className="text-sm uppercase tracking-[0.16em] text-slate-400">2022 - 2026</p>
        <h3 className="mt-4 text-2xl font-semibold text-white">B.Tech. in Electronics and Communication Engineering</h3>
        <p className="mt-2 text-sky-200">Indian Institute of Information Technology Bhagalpur</p>
        <p className="mt-5 text-sm leading-6 text-slate-300">
          Strong emphasis on AI, robotics, communication systems, and hardware-aware engineering. Consistently ranked
          among the top performers in the batch.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-sky-300/16 to-amber-200/12 p-6">
          <p className="text-sm uppercase tracking-[0.16em] text-slate-200/70">Performance</p>
          <div className="mt-4 flex items-end gap-2">
            <span className="text-4xl font-semibold text-white">9.46</span>
            <span className="pb-1 text-slate-300">/ 10 CGPA</span>
          </div>
          <p className="mt-3 text-sm text-slate-200/80">Ranked 2nd overall in the batch and 1st in branch standing.</p>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <h4 className="text-lg font-semibold text-white">Core coursework</h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {courses.map((course) => (
              <span key={course} className="rounded-full bg-slate-950/50 px-3 py-1.5 text-xs text-slate-300">
                {course}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ToolkitContent() {
  const categories = [
    {
      title: "Programming",
      items: ["Python", "C++", "C", "Verilog", "MATLAB", "TypeScript"],
    },
    {
      title: "AI and robotics",
      items: ["PyTorch", "TensorFlow", "OpenCV", "ROS2", "Nav2", "Gazebo"],
    },
    {
      title: "EDA and embedded",
      items: ["Cadence", "HFSS", "ADS", "Raspberry Pi", "Arduino", "Vivado"],
    },
    {
      title: "Systems and cloud",
      items: ["Linux", "Git", "Docker", "Kubernetes", "AWS", "MongoDB"],
    },
  ]

  return (
    <div className="grid gap-4 lg:grid-cols-2">
      {categories.map((category) => (
        <div key={category.title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
          <h3 className="text-lg font-semibold text-white">{category.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {category.items.map((item) => (
              <span key={item} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function LeadershipContent() {
  const items = [
    "General Secretary, Technical Board - Student Gymkhana Council, IIIT Bhagalpur.",
    "Lead, Robotics and Electronics Club - mentoring teams and supporting technical events.",
    "Amazon ML Challenge 2025 - top 0.7 percent standing among 27,000+ teams.",
    "Smart India Hackathon - institute-level winner and national grand finalist experience.",
  ]

  return (
    <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-sky-300/16 to-amber-200/10 p-6">
        <Target className="w-6 h-6 text-slate-950" />
        <h3 className="mt-4 text-2xl font-semibold text-white">Leadership through execution</h3>
        <p className="mt-4 text-sm leading-6 text-slate-200/80">
          I enjoy organizing teams, translating technical ideas into actionable plans, and helping projects look more
          complete and compelling.
        </p>
      </div>
      <div className="space-y-4">
        {items.map((item) => (
          <div key={item} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 text-sm leading-6 text-slate-300">
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

function PublicationsContent() {
  return (
    <div className="rounded-[1.5rem] border border-dashed border-white/14 bg-white/5 p-10 text-center">
      <BookOpen className="mx-auto h-10 w-10 text-sky-200" />
      <h3 className="mt-5 text-2xl font-semibold text-white">Research publications in progress</h3>
      <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-300">
        Papers and formal write-ups are currently being prepared from research and project work. This section is ready
        to expand as those submissions move forward.
      </p>
    </div>
  )
}
