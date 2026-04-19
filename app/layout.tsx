import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollProgress } from "@/components/ui/scroll-progress"
import { Toaster } from "sonner"
import { Global3DWrapper } from "@/components/three/global-3d-wrapper"
import "./globals.css"

export const metadata: Metadata = {
  title: "Rahul Kumar | AI, Robotics & Product Engineering Portfolio",
  description:
    "Professional portfolio for Rahul Kumar featuring AI systems, robotics research, product design, and polished interactive web experiences.",
  generator: "v0.app",
  keywords: [
    "Rahul Kumar",
    "portfolio",
    "AI engineer",
    "robotics",
    "product engineering",
    "Next.js",
    "Three.js",
  ],
  authors: [{ name: "Rahul Kumar" }],
  openGraph: {
    title: "Rahul Kumar | AI, Robotics & Product Engineering Portfolio",
    description: "A refined interactive portfolio showcasing AI, robotics, research, and premium digital product design.",
    type: "website",
    siteName: "Rahul Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rahul Kumar | AI, Robotics & Product Engineering Portfolio",
    description: "A refined interactive portfolio showcasing AI, robotics, research, and premium digital product design.",
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
          <ScrollProgress />
          <Global3DWrapper />

          <Suspense
            fallback={
              <div className="flex min-h-screen items-center justify-center bg-background">
                <div className="section-kicker">Loading portfolio</div>
              </div>
            }
          >
            {children}
            <Analytics />
            <Toaster richColors closeButton />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
