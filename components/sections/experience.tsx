"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

const experiences = [
  {
    title: "Student Researcher",
    company: "Indian Institute of Technology Kharagpur",
    period: "May 2025 – Jun 2025",
    description:
      "Designed and optimized 2.45 GHz flexible textile antennas for wearable WBAN applications. Validated designs using HFSS, ADS, and MATLAB.",
    achievements: ["Achieved |S11| < 20 dB", "Enhanced radiation efficiency", "Safety verified (SAR < 1.6 W/kg)"],
  },
  {
    title: "Student Researcher",
    company: "Space Applications Centre (ISRO), Ahmedabad",
    period: "May 2024 – Jul 2024",
    description:
      "Developed deep learning-based image super-resolution pipelines (FSRCNN, ESPCN, VDSR, SRResNet) for satellite imagery enhancement.",
    achievements: ["Deployed on Raspberry Pi 4B", "Achieved PSNR ~35 dB", "SSIM > 0.96 for debris analysis"],
  },
]

const education = [
  {
    degree: "B.Tech. in Electronics and Communication Engineering",
    school: "Indian Institute of Information Technology Bhagalpur",
    period: "2022 – 2026",
    description: "Specializing in ECE with a strong focus on AI, Robotics, and VLSI Design. Maintained a CGPA of 9.46/10.",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-card/30 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 right-10 w-48 h-48 bg-secondary/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and educational background in technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-accent">Work Experience</h3>
            </motion.div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="p-6 card-hover relative overflow-hidden">
                      {/* Timeline line */}
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-accent to-secondary" />

                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <motion.h4
                            className="text-lg font-semibold"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {exp.title}
                          </motion.h4>
                          <p className="text-accent">{exp.company}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="text-sm text-muted-foreground flex items-center"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-8 text-accent">Education</h3>
            </motion.div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
                    <Card className="p-6 card-hover relative overflow-hidden">
                      {/* Timeline line */}
                      <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-secondary to-accent" />

                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <motion.h4
                            className="text-lg font-semibold"
                            whileHover={{ x: -5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {edu.degree}
                          </motion.h4>
                          <p className="text-accent">{edu.school}</p>
                        </div>
                        <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
                          {edu.period}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
