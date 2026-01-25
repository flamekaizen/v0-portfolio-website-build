"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { MagneticButton } from "@/components/animations/magnetic-button"

const projects = [
  {
    title: "EcoWatch – Garbage Detection",
    description: "Real-time waste monitoring system using YOLO-based object detection and transformer-based super-resolution.",
    image: "/placeholder.svg",
    tech: ["YOLO", "Python", "Deep Learning", "Transformers"],
    github: "#",
    live: "#",
  },
  {
    title: "Vision-Guided Robotic Arm",
    description: "Cylindrical robotic manipulator with autonomous object detection and grasping capabilities.",
    image: "/placeholder.svg",
    tech: ["Robotics", "Computer Vision", "Arduino", "Python"],
    github: "#",
    live: "#",
  },
  {
    title: "Cosmo Logistic – AMR",
    description: "Autonomous Mobile Robot using ROS2 and Nav2 for ARUCO-based localization and navigation.",
    image: "/placeholder.svg",
    tech: ["ROS2", "Nav2", "Gazebo", "Python"],
    github: "#",
    live: "#",
  },
  {
    title: "Flexible Textile Antennas",
    description: "Designed and optimized 2.45 GHz antennas for wearable WBAN applications with low SAR.",
    image: "/placeholder.svg",
    tech: ["HFSS", "ADS", "MATLAB", "Antenna Design"],
    github: "#",
    live: "#",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-secondary/5" />

      <div className="container mx-auto px-6 relative">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work, featuring modern web applications and innovative solutions
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 0.1}>
              <Card className="overflow-hidden card-hover group relative">
                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Floating tech badges */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {project.tech.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-accent/90 text-accent-foreground rounded-full backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {project.title}
                  </motion.h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1 text-xs bg-accent/10 text-accent rounded-full border border-accent/20"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <MagneticButton strength={0.2}>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </a>
                      </Button>
                    </MagneticButton>
                    <MagneticButton strength={0.2}>
                      <Button
                        size="sm"
                        className="bg-accent hover:bg-accent/90 text-accent-foreground glow-effect"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    </MagneticButton>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
