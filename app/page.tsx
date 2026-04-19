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
import { Process } from "@/components/sections/process"
import { Testimonials } from "@/components/sections/testimonials"
import { Faq } from "@/components/sections/faq"
import { BackToTop } from "@/components/ui/back-to-top"
import { personJsonLd } from "@/lib/site-config"

export default function HomePage() {
  return (
    <PageTransition>
      <main id="main-content" className="relative min-h-screen overflow-x-clip">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <CursorFollower />
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Testimonials />
        <Resume />
        <Experience />
        <Faq />
        <Contact />
        <Footer />
        <BackToTop />
      </main>
    </PageTransition>
  )
}
