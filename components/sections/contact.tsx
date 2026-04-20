"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Copy, FileDown, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"
import { siteConfig } from "@/lib/site-config"

const quickSubjects = ["Project inquiry", "Research collaboration", "UI/UX redesign", "Internship opportunity"]
const serviceOptions = ["AI/ML project", "Robotics build", "Frontend/UI redesign", "Research collaboration", "General inquiry"]
const timelineOptions = ["ASAP", "1-2 weeks", "2-4 weeks", "1-2 months", "Flexible"]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [subject, setSubject] = React.useState(quickSubjects[0])
  const [message, setMessage] = React.useState("")
  const [selectedService, setSelectedService] = React.useState(serviceOptions[0])
  const [timeline, setTimeline] = React.useState(timelineOptions[2])
  const [emailConfigured, setEmailConfigured] = React.useState(false)

  React.useEffect(() => {
    setEmailConfigured(
      Boolean(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID &&
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      ),
    )
  }, [])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      toast.success("Email copied to clipboard")
    } catch {
      toast.error("Unable to copy email right now")
    }
  }

  const openMailFallback = (name: string, email: string, company: string) => {
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company or organization: ${company || "Not provided"}`,
      `Service needed: ${selectedService}`,
      `Timeline: ${timeline}`,
      "",
      message,
    ]

    const mailto = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`
    window.location.href = mailto
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = (formData.get("name") as string)?.trim()
    const email = (formData.get("email") as string)?.trim()
    const company = (formData.get("company") as string)?.trim()
    const website = formData.get("website") as string

    if (website) {
      setIsSubmitting(false)
      return
    }

    if (message.trim().length < 24) {
      toast.error("Please add a little more detail so I can understand the request.")
      setIsSubmitting(false)
      return
    }

    const templateParams = {
      name,
      email,
      company,
      title: subject,
      message,
      service: selectedService,
      timeline,
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      openMailFallback(name, email, company)
      toast.success("Opening your mail client to send the message.")
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      toast.success("Message sent successfully")
      form.reset()
      setSubject(quickSubjects[0])
      setMessage("")
      setSelectedService(serviceOptions[0])
      setTimeline(timelineOptions[2])
    } catch (error: any) {
      openMailFallback(name, email, company)
      const errorMessage = error?.text || "Failed to send. Opening your default mail app instead."
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-spacing relative">
      <div className="section-shell">
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="section-kicker">Contact</div>
            <h2 className="mt-6 section-heading max-w-3xl text-white">Let&apos;s build something that looks sharp and works hard.</h2>
            <p className="mt-5 section-copy">
              Open to internships, collaborations, research conversations, and projects that need both strong
              engineering and thoughtful presentation.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-4"
          >
            <div className="panel-surface p-6">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Availability</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Currently open to meaningful opportunities</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Best fit for AI and robotics work, research collaborations, frontend redesigns, and demo-ready builds.
              </p>

              <div className="mt-6 space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
                <p className="font-semibold text-white">What I respond to first</p>
                <ul className="space-y-2">
                  {[
                    "Research collaboration proposals",
                    "AI and robotics prototype briefs",
                    "Internship and project opportunities",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse-dot" />
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                    Typical response time: {siteConfig.responseTime}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  onClick={copyEmail}
                  variant="outline"
                  className="btn-glow rounded-full border-white/12 bg-white/5 text-white hover:bg-white/10"
                >
                  <Copy className="w-4 h-4" />
                  Copy email
                </Button>
                <Button asChild className="btn-glow rounded-full bg-gradient-to-r from-sky-300 to-amber-200 text-slate-950">
                  <a href={siteConfig.resumePath} download>
                    <FileDown className="w-4 h-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>

            {[
              { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
              { icon: Phone, label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
              { icon: Github, label: "GitHub", value: "flamekaizen", href: siteConfig.github },
              { icon: Linkedin, label: "LinkedIn", value: "rahul-kumar-iiitbh", href: siteConfig.linkedin },
              { icon: MapPin, label: "Location", value: siteConfig.location, href: "https://maps.google.com/?q=Patna,Bihar,India" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group panel-surface card-hover flex items-center gap-4 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300/20 to-amber-200/16 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="w-5 h-5 text-sky-200" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.16em] text-slate-400">{item.label}</p>
                  <p className="mt-1 text-white">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            viewport={{ once: true, amount: 0.3 }}
            className="panel-surface p-6 sm:p-8"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Quick start</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {quickSubjects.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setSubject(item)}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                    subject === item
                      ? "bg-white text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                      : "bg-white/6 text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                    className="rounded-2xl border-white/10 bg-slate-950/45 text-white placeholder:text-slate-500 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium text-slate-200">
                    Company or organization
                  </label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Optional"
                    className="rounded-2xl border-white/10 bg-slate-950/45 text-white placeholder:text-slate-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="rounded-2xl border-white/10 bg-slate-950/45 text-white placeholder:text-slate-500 transition-all duration-200"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="timeline" className="text-sm font-medium text-slate-200">
                    Preferred timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={timeline}
                    onChange={(e) => setTimeline(e.target.value)}
                    className="flex h-11 w-full rounded-2xl border border-white/10 bg-slate-950/45 px-3 text-sm text-white outline-none transition-all duration-200 focus:border-sky-300/40"
                  >
                    {timelineOptions.map((item) => (
                      <option key={item} value={item} className="bg-slate-950">
                        {item}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-medium text-slate-200">What do you need help with?</label>
                <div className="flex flex-wrap gap-2">
                  {serviceOptions.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setSelectedService(item)}
                      className={`rounded-full px-4 py-2 text-sm transition-all duration-200 ${
                        selectedService === item
                          ? "bg-white text-slate-950 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                          : "bg-white/6 text-slate-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-200">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="rounded-2xl border-white/10 bg-slate-950/45 text-white placeholder:text-slate-500 transition-all duration-200"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-200">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={7}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me what you're building, what stage you're in, and what kind of help you need."
                  className="rounded-[1.5rem] border-white/10 bg-slate-950/45 text-white placeholder:text-slate-500 transition-all duration-200"
                />
              </div>

              <input type="hidden" name="website" tabIndex={-1} autoComplete="off" />
              <input type="hidden" name="service" value={selectedService} />
              <input type="hidden" name="title" value={subject} />
              <input type="hidden" name="body" value={message} />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="btn-glow w-full rounded-full bg-gradient-to-r from-sky-300 to-amber-200 py-6 text-base font-semibold text-slate-950 transition-all hover:shadow-[0_18px_50px_rgba(125,211,252,0.25)]"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send message"}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
