import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Portfolio } from "@/components/sections/portfolio"
import { Resume } from "@/components/sections/resume"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/animations/page-transition"
import { CursorFollower } from "@/components/ui/cursor-follower"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { FloatingElements } from "@/components/animations/floating-elements"

export default function HomePage() {
  return (
    <PageTransition>
      <main className="relative min-h-screen bg-background">
        <CursorFollower />
        <ScrollProgress />
        <FloatingElements />
        <Navigation />
        <Hero />
        <About />
        <Portfolio />
        <Resume />
        <Experience />
        <Contact />
      </main>
    </PageTransition>
  )
}
