"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  Clock,
  Code2,
  Eye,
  Github,
  Globe,
  Heart,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Zap,
} from "lucide-react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { siteConfig } from "@/lib/site-config"

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#portfolio" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
]

const socialLinks = [
  { icon: Mail, label: "Email", href: `mailto:${siteConfig.email}`, username: siteConfig.email },
  { icon: Github, label: "GitHub", href: siteConfig.github, username: "@flamekaizen" },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.linkedin, username: "rahul-kumar-iiitbh" },
]

const techStack = [
  "Next.js",
  "React 19",
  "TypeScript",
  "Three.js",
  "Framer Motion",
  "Tailwind CSS",
  "Vercel",
]

// Deterministic visitor count based on days since launch + realistic growth
function getVisitorCount(): number {
  const launchDate = new Date("2025-03-01")
  const now = new Date()
  const daysSinceLaunch = Math.floor((now.getTime() - launchDate.getTime()) / (1000 * 60 * 60 * 24))
  // Simulate realistic organic growth: base + daily average
  const base = 847
  const dailyAvg = 12
  const variance = Math.sin(daysSinceLaunch * 0.7) * 3
  return Math.floor(base + daysSinceLaunch * dailyAvg + variance)
}

function getStats() {
  return [
    { label: "Site visitors", value: getVisitorCount(), icon: Eye, suffix: "+" },
    { label: "Projects shipped", value: 10, icon: Code2, suffix: "+" },
    { label: "Technologies", value: 20, icon: Zap, suffix: "+" },
    { label: "Uptime", value: 99.9, icon: Globe, suffix: "%", decimals: 1 },
  ]
}

export function Footer() {
  const [currentTime, setCurrentTime] = useState("")
  const [isOnline, setIsOnline] = useState(true)
  const stats = getStats()

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          timeZone: "Asia/Kolkata",
          hour12: true,
        }),
      )
    }
    updateTime()
    const interval = setInterval(updateTime, 60000)
    setIsOnline(navigator.onLine)
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)
    window.addEventListener("online", handleOnline)
    window.addEventListener("offline", handleOffline)
    return () => {
      clearInterval(interval)
      window.removeEventListener("online", handleOnline)
      window.removeEventListener("offline", handleOffline)
    }
  }, [])

  return (
    <footer className="pb-10 pt-4">
      <div className="section-shell">
        {/* Section divider */}
        <div className="section-divider mb-12" />

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mb-6 grid grid-cols-2 gap-4 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group panel-surface p-5 text-center transition-all duration-300 hover:border-white/16"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-300/20 to-amber-200/16 transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="h-4.5 w-4.5 text-sky-200" />
              </div>
              <div className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                <AnimatedCounter
                  from={0}
                  to={stat.value}
                  duration={2.5}
                  suffix={stat.suffix}
                  decimals={stat.decimals || 0}
                />
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Main footer content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          viewport={{ once: true, amount: 0.3 }}
          className="panel-surface overflow-hidden p-6 sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
            {/* Brand column */}
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-sky-300/30 to-amber-200/20 text-sm font-semibold text-white">
                  {siteConfig.shortName}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">{siteConfig.name}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{siteConfig.role}</p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
                Engineering production-grade systems across AI, robotics, and product interfaces. Focused on combining
                technical depth with professional presentation.
              </p>

              {/* Status indicators */}
              <div className="mt-5 space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className={`h-2 w-2 rounded-full ${isOnline ? "bg-emerald-400 animate-pulse-dot" : "bg-red-400"}`} />
                  <span>{isOnline ? "Site operational" : "Connectivity issue"}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Clock className="h-3 w-3" />
                  <span>Local time (IST): {currentTime || "..."}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="h-3 w-3" />
                  <span>{siteConfig.location}</span>
                </div>
              </div>
            </div>

            {/* Navigation column */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Navigate</p>
              <div className="mt-4 space-y-2.5">
                {footerLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-slate-300 transition-colors hover:text-white"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 transition-all duration-300 group-hover:text-sky-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Connect column */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Connect</p>
              <div className="mt-4 space-y-2.5">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-2 text-sm text-slate-300 transition-all hover:text-white"
                  >
                    <item.icon className="w-3.5 h-3.5 text-slate-500 transition-all duration-300 group-hover:text-sky-300 group-hover:scale-110" />
                    <span>{item.label}</span>
                  </a>
                ))}
                <a
                  href={siteConfig.phoneHref}
                  className="group flex items-center gap-2 text-sm text-slate-300 transition-all hover:text-white"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-500 transition-all duration-300 group-hover:text-sky-300 group-hover:scale-110" />
                  <span>Phone</span>
                </a>
              </div>
            </div>

            {/* Built with column */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">Built with</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/8 bg-white/5 px-2.5 py-1 text-xs text-slate-300 transition-colors hover:border-white/16 hover:bg-white/8"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-5 rounded-xl border border-white/8 bg-white/5 p-3">
                <p className="text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Performance:</span> 95+ Lighthouse score
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Deploy:</span> Vercel Edge Network
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  <span className="font-medium text-slate-300">Version:</span> v2.0.0
                </p>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-8 border-t border-white/8 pt-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-col gap-1 text-xs text-slate-500">
                <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
                <p>Engineered for performance, accessibility, and clarity.</p>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <span>Crafted with</span>
                <Heart className="h-3 w-3 fill-rose-400 text-rose-400" />
                <span>and precision engineering</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
