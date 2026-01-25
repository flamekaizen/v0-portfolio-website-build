import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { GalaxyCursor } from "@/components/ui/galaxy-cursor"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { FloatingElements } from "@/components/animations/floating-elements"
import { Toaster } from "sonner"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rahul Kumar | Modern Developer & Designer Portfolio",
  description:
    "A modern, interactive portfolio showcasing cutting-edge web development and design skills with 3D animations and premium aesthetics.",
  generator: "v0.app",
  keywords: [
    "portfolio",
    "developer",
    "designer",
    "web development",
    "3D",
    "interactive",
    "Next.js",
    "React",
    "Three.js",
  ],
  authors: [{ name: "Rahul Kumar" }],
  openGraph: {
    title: "Rahul Kumar | Modern Developer & Designer Portfolio",
    description: "A modern, interactive portfolio showcasing cutting-edge web development and design skills.",
    type: "website",
    siteName: "Rahul Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Kumar | Modern Developer & Designer Portfolio",
    description: "A modern, interactive portfolio showcasing cutting-edge web development and design skills.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          <GalaxyCursor />

          <ScrollProgress />

          <FloatingElements />

          <Suspense
            fallback={
              <div className="min-h-screen bg-background flex items-center justify-center">
                <div className="text-accent cosmic-glow">Loading cosmic experience...</div>
              </div>
            }
          >
            {children}
            <Analytics />
            <Toaster />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
