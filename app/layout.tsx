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
import { siteConfig } from "@/lib/site-config"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  generator: "v0.app",
  keywords: [
    siteConfig.name,
    "portfolio",
    "AI engineer",
    "robotics",
    "product engineering",
    "Next.js",
    "Three.js",
    "EmailJS integration",
    "frontend engineering",
  ],
  authors: [{ name: siteConfig.name }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    type: "website",
    siteName: `${siteConfig.name} Portfolio`,
    url: siteConfig.siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.style.colorScheme = 'dark';
                document.documentElement.classList.add('dark');
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-full bg-white px-4 py-2 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={true} forcedTheme="dark">
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
