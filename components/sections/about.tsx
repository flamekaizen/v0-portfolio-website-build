"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Code, Palette, Zap, Users } from "lucide-react"
import { AnimatedCounter } from "@/components/ui/animated-counter"
import { StaggerContainer, StaggerItem } from "@/components/animations/stagger-container"
import { GradientText } from "@/components/ui/gradient-text"

const skills = [
  {
    icon: Code,
    title: "Programming",
    description: "Python, C++, C, Verilog, MATLAB",
    level: 95,
  },
  {
    icon: Zap,
    title: "AI & Robotics",
    description: "PyTorch, ROS2, OpenCV, TensorFlow",
    level: 90,
  },
  {
    icon: Palette,
    title: "EDA & Embedded",
    description: "Cadence, HFSS, Raspberry Pi, Arduino",
    level: 85,
  },
  {
    icon: Users,
    title: "Systems & Cloud",
    description: "Linux, Git, AWS, Docker, Kubernetes",
    level: 80,
  },
]

export function About() {
  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <GradientText animate>Me</GradientText>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating digital experiences that blend functionality with beautiful design
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I am an undergraduate student at IIIT Bhagalpur with a strong foundation in Electronics and Communication Engineering.
              My research interests lie in the intersection of AI/ML, Robotics, and Antenna Design.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From developing autonomous robots to optimizing antenna designs for wearable applications, I strive to bridge the gap between hardware and software.
              I have hands-on experience with deploying deep learning models on edge devices and designing complex systems for real-world applications.
            </p>
          </motion.div>

          <StaggerContainer className="grid grid-cols-2 gap-4">
            {[
              { label: "Projects Completed", value: 10, suffix: "+" },
              { label: "Research Papers", value: 2, suffix: "" },
              { label: "Hackathon Wins", value: 3, suffix: "" },
              { label: "CGPA", value: 9.46, suffix: "", decimals: 2 },
            ].map((stat, index) => (
              <StaggerItem key={index}>
                <Card className="p-6 text-center card-hover">
                  <div className="text-2xl font-bold text-accent mb-2">
                    <AnimatedCounter from={0} to={stat.value} suffix={stat.suffix} decimals={stat.decimals || 0} />
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">
            Skills & <GradientText>Expertise</GradientText>
          </h3>

          <StaggerContainer className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <StaggerItem key={index}>
                <Card className="p-6 card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <skill.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-1">{skill.title}</h4>
                      <p className="text-sm text-muted-foreground">{skill.description}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Proficiency</span>
                      <span className="text-accent">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-accent to-secondary h-2 rounded-full"
                      />
                    </div>
                  </div>
                </Card>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </motion.div>
      </div>
    </section>
  )
}
