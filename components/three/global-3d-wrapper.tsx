"use client"

import dynamic from "next/dynamic"

// Dynamically import the 3D scene with SSR disabled to prevent hydration errors
// This is necessary because React-Three-Fiber Canvas relies heavily on browser APIs
const Global3DScene = dynamic(
  () => import("./global-3d-scene").then((mod) => mod.Global3DScene),
  { ssr: false }
)

export function Global3DWrapper() {
  return <Global3DScene />
}
