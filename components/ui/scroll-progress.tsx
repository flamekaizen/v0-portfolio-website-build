"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scrolled = winHeightPx > 0 ? scrollPx / winHeightPx : 0
      setScrollProgress(scrolled)
    }

    updateScrollProgress()
    window.addEventListener("scroll", updateScrollProgress, { passive: true })
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  return (
    <motion.div className="fixed left-0 right-0 top-0 z-[70] h-[3px] bg-white/5" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <motion.div
        className="h-full bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-200"
        style={{ scaleX: scrollProgress, originX: 0 }}
      />
    </motion.div>
  )
}
