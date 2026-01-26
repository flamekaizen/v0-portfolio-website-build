"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Briefcase, GraduationCap, Code, Trophy, User, BookOpen, ExternalLink, ChevronRight } from "lucide-react"
import { GradientText } from "@/components/ui/gradient-text"

const tabs = [
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "projects", label: "Projects", icon: Code },
    { id: "skills", label: "Skills", icon: User },
    { id: "achievements", label: "Achievements", icon: Trophy },
    { id: "publications", label: "Publications", icon: BookOpen },
]

export function Resume() {
    const [activeTab, setActiveTab] = useState("experience")

    return (
        <section id="resume" className="py-20 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-secondary/5 pointer-events-none" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        My <GradientText animate>Resume</GradientText>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        A glance at my academic and professional journey.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-[250px_1fr] gap-8">
                    {/* Tabs Navigation */}
                    <div className="space-y-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-300 ${activeTab === tab.id
                                    ? "bg-accent text-accent-foreground shadow-lg shadow-accent/25"
                                    : "hover:bg-accent/10 text-muted-foreground hover:text-foreground"
                                    }`}
                            >
                                <tab.icon className="w-5 h-5" />
                                <span className="font-medium">{tab.label}</span>
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="ml-auto"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </motion.div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Area */}
                    <div className="min-h-[600px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {activeTab === "experience" && <ExperienceContent />}
                                {activeTab === "education" && <EducationContent />}
                                {activeTab === "projects" && <ProjectsContent />}
                                {activeTab === "skills" && <SkillsContent />}
                                {activeTab === "achievements" && <AchievementsContent />}
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
            company: "Indian Institute of Technology Kharagpur",
            period: "May 2025 – Jun 2025",
            description: [
                "Designed 2.45 GHz flexible textile WBAN antennas achieving |S11| < −20 dB and SAR < 1.6 W/kg.",
                "Improved radiation efficiency via on-body and bending-aware optimization.",
                "Validated EM performance using HFSS, ADS, MATLAB.",
            ],
        },
        {
            role: "Student Researcher",
            company: "Space Applications Centre (ISRO)",
            period: "May 2024 – Jul 2024",
            description: [
                "Built deep learning–based satellite image super-resolution pipelines.",
                "Implemented CNN, Transformer, and GAN models (EDSR, ESRT, SRGAN).",
                "Achieved PSNR ≈ 35 dB, SSIM > 0.96 on Raspberry Pi 4B.",
            ],
        },
    ]

    return (
        <div className="space-y-6">
            {experiences.map((exp, index) => (
                <Card key={index} className="p-6 hover:border-accent/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                            <p className="text-accent font-medium">{exp.company}</p>
                        </div>
                        <Badge variant="outline" className="w-fit flex items-center gap-1 whitespace-nowrap">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                        </Badge>
                    </div>
                    <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
            ))}
        </div>
    )
}

function EducationContent() {
    return (
        <Card className="p-8 hover:border-accent/50 transition-colors">
            <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                    <h3 className="text-2xl font-bold mb-2">Indian Institute of Information Technology Bhagalpur</h3>
                    <p className="text-lg text-accent">B.Tech. in Electronics and Communication Engineering</p>
                </div>
                <Badge className="bg-accent text-accent-foreground">2022 - 2026</Badge>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="p-4 bg-secondary/10 rounded-lg">
                    <div className="text-sm text-muted-foreground mb-1">Cumulative GPA</div>
                    <div className="text-3xl font-bold text-foreground">9.46<span className="text-lg text-muted-foreground">/10</span></div>
                    <div className="text-xs text-accent mt-2">Current Batch Rank: 2nd Overall</div>
                </div>

                <div className="space-y-4">
                    <h4 className="font-semibold border-b border-border pb-2">Core Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                        {["Data Structures & Algorithms", "VLSI Design", "RF/Microwave Systems", "Antennas", "Signal Processing", "Computer Vision", "Robotics", "Machine Learning", "Deep Learning"].map((course) => (
                            <Badge key={course} variant="secondary">{course}</Badge>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    )
}

function ProjectsContent() {
    const projects = [
        {
            title: "EcoWatch – AI-Driven Garbage Detection & LiFE Monitoring",
            period: "Project",
            skills: ["YOLO", "Transformers", "Backend API"],
            points: [
                "Real-time YOLO-based waste detection with low-light enhancement.",
                "Integrated transformer super-resolution, achieving mAP 0.95.",
                "Built scalable backend APIs and analytics dashboard.",
            ],
        },
        {
            title: "Vision-Guided Pick-and-Place Robotic Arm",
            period: "Robotics",
            skills: ["Robotics", "Computer Vision", "Control Systems"],
            points: [
                "Vision-guided robotic manipulator for autonomous grasping.",
                "Achieved 95% detection accuracy under varying illumination.",
                "Improved execution speed by 20%.",
            ],
        },
        {
            title: "Cosmo Logistic – Autonomous Mobile Robot",
            period: "Robotics",
            skills: ["ROS2", "Nav2", "ARUCO"],
            points: [
                "Implemented ARUCO-based localization using ROS2 + Nav2.",
                "Enabled autonomous navigation for TurtleBot.",
                "Achieved ±0.3 m positional and ±10° angular accuracy.",
            ],
        },
    ]

    return (
        <div className="grid gap-6">
            {projects.map((project, index) => (
                <Card key={index} className="p-6 hover:border-accent/50 transition-colors group">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                        <div>
                            <h3 className="text-lg font-bold group-hover:text-accent transition-colors">{project.title}</h3>
                            <div className="flex flex-wrap gap-2 mt-2">
                                {project.skills.map((skill) => (
                                    <Badge key={skill} variant="secondary" className="text-xs">{skill}</Badge>
                                ))}
                            </div>
                        </div>
                        {project.period.includes("20") && (
                            <Badge variant="outline" className="w-fit">{project.period}</Badge>
                        )}
                    </div>
                    <ul className="space-y-2">
                        {project.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                                <span className="mt-1.5 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>
                </Card>
            ))}
        </div>
    )
}

function SkillsContent() {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: ["Python", "C++", "C", "R", "Verilog", "Assembly", "Tcl", "Perl", "LATEX"],
        },
        {
            title: "AI/ML & Robotics",
            skills: ["OpenCV", "NumPy", "Pandas", "PyTorch", "TensorFlow", "Keras", "ROS2", "Nav2", "Gazebo", "CUDA", "ONNX"],
        },
        {
            title: "EDA & Embedded Systems",
            skills: ["Cadence Virtuoso", "HFSS", "ADS", "CST", "MATLAB", "Vivado", "Raspberry Pi", "Arduino"],
        },
        {
            title: "Systems & Cloud",
            skills: ["Linux (Ubuntu/RHEL)", "Git", "AWS", "GCP", "Docker", "Kubernetes", "SQL", "MongoDB"],
        },
    ]

    return (
        <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
                <Card key={index} className="p-6 hover:border-accent/50 transition-colors">
                    <h3 className="font-semibold mb-4 text-accent">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="hover:bg-accent hover:text-accent-foreground transition-colors">
                                {skill}
                            </Badge>
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    )
}

function AchievementsContent() {
    const achievements = [
        "Academic Rank: Currently 1st in ECE branch and 2nd overall in the 2022–2026 batch (2025–26).",
        "Amazon ML Challenge 2025: Ranked 184 / 27,000+ teams (Top 0.7%).",
        "ISRO Robotics Challenge (URSC): Autonomous rover proposal shortlisted.",
        "Smart India Hackathon: 1st Rank (2024) and 2nd Rank (2023) — Institute Level & Grand Finalist (National).",
        "Flipkart GRiD Robotics Challenge: Robotic arm and CV-based solution shortlisted among 1,000+ teams.",
    ]

    const responsibilities = [
        "General Secretary, Technical Board — Student Gymkhana Council (SGC), IIIT Bhagalpur.",
        "Lead, Robotics & Electronics Club — Technical Board (SGC), IIIT Bhagalpur.",
    ]

    return (
        <div className="space-y-8">
            <Card className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-accent" />
                    Honors & Awards
                </h3>
                <ul className="space-y-4">
                    {achievements.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/10 text-accent text-sm font-bold flex-shrink-0">
                                {index + 1}
                            </span>
                            <p className="text-muted-foreground">{item}</p>
                        </li>
                    ))}
                </ul>
            </Card>

            <Card className="p-6">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <User className="w-5 h-5 text-accent" />
                    Positions of Responsibility
                </h3>
                <ul className="space-y-4">
                    {responsibilities.map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                            <p className="text-muted-foreground">{item}</p>
                        </li>
                    ))}
                </ul>
            </Card>
        </div>
    )
}

function PublicationsContent() {
    return (
        <Card className="p-12 text-center border-dashed border-2 hover:border-accent/50 transition-colors">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold mb-3">Publications</h3>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
                Exciting research is in the works! Several papers are currently under review or in preparation.
            </p>
            <Badge variant="secondary" className="text-sm px-4 py-1">
                Coming Soon
            </Badge>
        </Card>
    )
}
