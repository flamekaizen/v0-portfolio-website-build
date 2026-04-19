"use client"

import type React from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface PageTransitionProps {
  children: React.ReactNode
}

export function PageTransition({ children }: PageTransitionProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.18),transparent_32%),linear-gradient(180deg,#08101c,#060b14)]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="space-y-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="section-kicker mx-auto"
            >
              Rahul Kumar
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-semibold tracking-tight text-gradient sm:text-5xl"
            >
              Building systems with polish and depth
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mx-auto flex w-fit items-center gap-2"
            >
              {[0, 1, 2].map((item) => (
                <motion.span
                  key={item}
                  className="h-2.5 w-12 rounded-full bg-white/12"
                  animate={{ opacity: [0.35, 1, 0.35], scaleX: [1, 1.12, 1] }}
                  transition={{ duration: 0.85, repeat: Number.POSITIVE_INFINITY, delay: item * 0.12 }}
                >
                  <span className="block h-full rounded-full bg-gradient-to-r from-sky-300 to-amber-200" />
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          key="content"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
