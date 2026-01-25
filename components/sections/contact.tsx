"use client"

import * as React from "react"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { MagneticButton } from "@/components/animations/magnetic-button"
import { ParallaxSection } from "@/components/animations/parallax-section"
import { toast } from "sonner"

import emailjs from "@emailjs/browser"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [subject, setSubject] = React.useState("")
  const [message, setMessage] = React.useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Capture the form element immediately to avoid losing access in async callback
    const form = e.currentTarget
    const formData = new FormData(form)

    const name = formData.get("name") as string
    const email = formData.get("email") as string

    // Construct template parameters based on the user's EmailJS template
    const templateParams = {
      // Matches {{name}} in "Hi {{name}},"
      name: name,
      // Matches {{email}} in "To Email" and "Reply To"
      email: email,
      // Matches {{title}} in "We have received your request: '{{title}}'"
      title: subject,
      // Matches {{message}} in "Your message: {{message}}"
      message: message,
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    // Demo Mode logic
    if (!serviceId || !templateId || !publicKey) {
      console.warn("EmailJS environment variables missing. Running in Demo Mode.")
      await new Promise((resolve) => setTimeout(resolve, 1500))
      toast.success("Message sent successfully! (Demo Mode)")
      form.reset()
      setSubject("")
      setMessage("")
      setIsSubmitting(false)
      return
    }

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      toast.success("Message sent successfully!")
      form.reset()
      setSubject("")
      setMessage("")
    } catch (error: any) {
      // Improved error logging
      console.error("EmailJS Error Object:", error)
      console.error("EmailJS Error String:", JSON.stringify(error))

      const errorMessage = error?.text || "Failed to send message. Please try again."
      toast.error(errorMessage)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <ParallaxSection speed={0.3}>
        <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-secondary/10" />
      </ParallaxSection>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in new opportunities and exciting projects. Whether you have a question or just
                want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "kaizentechrk@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91-8102283703" },
                { icon: MapPin, label: "Location", value: "Patna, Bihar, India" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer"
                >
                  <motion.div
                    className="p-3 bg-accent/10 rounded-full"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <item.icon className="w-5 h-5 text-accent" />
                  </motion.div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 relative overflow-hidden">
              {/* Animated background gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-secondary/5 opacity-50" />

              <form onSubmit={handleSubmit} className="space-y-6 relative">
                <div className="grid md:grid-cols-2 gap-4">
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="border-border focus:border-accent transition-colors"
                    />
                  </motion.div>
                  <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="border-border focus:border-accent transition-colors"
                    />
                  </motion.div>
                </div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Project inquiry"
                    required
                    className="border-border focus:border-accent transition-colors"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                  <input type="hidden" name="title" value={subject} />
                  <input type="hidden" name="request" value={subject} />
                </motion.div>

                <motion.div whileFocus={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="border-border focus:border-accent resize-none transition-colors"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                  <input type="hidden" name="body" value={message} />
                  <input type="hidden" name="description" value={message} />
                </motion.div>

                <MagneticButton strength={0.1} className="w-full">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground glow-effect"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </MagneticButton>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
