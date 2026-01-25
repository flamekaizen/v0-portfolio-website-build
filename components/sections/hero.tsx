"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import { HeroScene } from "@/components/three/hero-scene"
import { GradientText } from "@/components/ui/gradient-text"

export function Hero() {
  const scrollToPortfolio = () => {
    const element = document.getElementById("portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroScene />

      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90 z-0" />

      <div className="absolute inset-0 opacity-30 z-0">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-pulse delay-3000" />
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="block text-foreground cosmic-text">Hello, I'm</span>
            <GradientText className="block text-6xl md:text-7xl lg:text-8xl font-extrabold">Rahul Kumar</GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Electronics & Communication Engineer | AI/ML Researcher | Robotics Enthusiast
            <br />
            Passionate about exploring the frontiers of technology, from antenna design to autonomous systems.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white cosmic-glow px-8 py-3 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Explore My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white cosmic-glow px-8 py-3 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                {/* No icon needed for this button */}
                Connect With Me
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            <a
              href="https://github.com/flamekaizen"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white cosmic-glow p-3 rounded-full relative overflow-hidden group transition-all duration-300"
            >
              <span className="relative z-10">
                <Github className="w-6 h-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="https://linkedin.com/in/rahul-kumar-iiitbh"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white cosmic-glow p-3 rounded-full relative overflow-hidden group transition-all duration-300"
            >
              <span className="relative z-10">
                <Linkedin className="w-6 h-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <a
              href="mailto:kaizentechrk@gmail.com"
              className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white cosmic-glow p-3 rounded-full relative overflow-hidden group transition-all duration-300"
            >
              <span className="relative z-10">
                <Mail className="w-6 h-6" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm cosmic-text">Journey through the cosmos</span>
            <ArrowDown className="w-5 h-5 text-accent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
