import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Portfolio } from "@/components/sections/portfolio"
import { Resume } from "@/components/sections/resume"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/sections/footer"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/animations/page-transition"
import { CursorFollower } from "@/components/ui/cursor-follower"
import { Services } from "@/components/sections/services"

export default function HomePage() {
  return (
    <PageTransition>
      <main className="relative min-h-screen overflow-x-clip">
        <CursorFollower />
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Resume />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </PageTransition>
  )
}
