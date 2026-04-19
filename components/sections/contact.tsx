"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Copy, FileDown, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import emailjs from "@emailjs/browser"

const quickSubjects = ["Project inquiry", "Research collaboration", "UI/UX redesign", "Internship opportunity"]

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [subject, setSubject] = React.useState(quickSubjects[0])
  const [message, setMessage] = React.useState("")

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("kaizentechrk@gmail.com")
      toast.success("Email copied to clipboard")
    } catch {
      toast.error("Unable to copy email right now")
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get("name") as string
    const email = formData.get("email") as string

    const templateParams = {
      name,
      email,
      title: subject,
      message,
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      await new Promise((resolve) => setTimeout(resolve, 1200))
      toast.success("Message sent successfully in demo mode")
      form.reset()
      setSubject(quickSubjects[0])
      setMessage("")
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      toast.success("Message sent successfully")
      form.reset()
      setSubject(quickSubjects[0])
      setMessage("")
    } catch (error: any) {
      const errorMessage = error?.text || "Failed to send message. Please try again."
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
                <ul className="space-y-2 pl-4 text-slate-300">
                  <li>• Research collaboration proposals</li>
                  <li>• AI and robotics prototype briefs</li>
                  <li>• Internship and project opportunities</li>
                </ul>
                <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Typical response time: within 24 hours</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  onClick={copyEmail}
                  variant="outline"
                  className="rounded-full border-white/12 bg-white/5 text-white hover:bg-white/10"
                >
                  <Copy className="w-4 h-4" />
                  Copy email
                </Button>
                <Button
                  asChild
                  className="rounded-full bg-gradient-to-r from-sky-300 to-amber-200 text-slate-950"
                >
                  <a href="/resume/rahul_v1.pdf" download>
                    <FileDown className="w-4 h-4" />
                    Resume
                  </a>
                </Button>
              </div>
            </div>

            {[
              { icon: Mail, label: "Email", value: "kaizentechrk@gmail.com", href: "mailto:kaizentechrk@gmail.com" },
              { icon: Phone, label: "Phone", value: "+91 81022 83703", href: "tel:+918102283703" },
              { icon: Linkedin, label: "LinkedIn", value: "rahul-kumar-iiitbh", href: "https://linkedin.com/in/rahul-kumar-iiitbh" },
              { icon: MapPin, label: "Location", value: "Patna, Bihar, India", href: "#" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="panel-surface card-hover flex items-center gap-4 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300/20 to-amber-200/16">
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
                  className={`rounded-full px-4 py-2 text-sm transition-colors ${
                    subject === item ? "bg-white text-slate-950" : "bg-white/6 text-slate-300 hover:bg-white/10"
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
                    className="rounded-2xl border-white/10 bg-slate-950/45 text-white placeholder:text-slate-500"
                  />
                </div>
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
                    className="rounded-2xl border-white/10 bg-slate-950/45 text-white placeholder:text-slate-500"
                  />
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
                  className="rounded-2xl border-white/10 bg-slate-950/45 text-white placeholder:text-slate-500"
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
                  className="rounded-[1.5rem] border-white/10 bg-slate-950/45 text-white placeholder:text-slate-500"
                />
              </div>

              <input type="hidden" name="title" value={subject} />
              <input type="hidden" name="body" value={message} />

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-sky-300 to-amber-200 py-6 text-base font-semibold text-slate-950"
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
