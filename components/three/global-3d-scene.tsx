"use client"

import { Suspense, useEffect, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Environment } from "@react-three/drei"
import { FloatingGeometry } from "./floating-geometry"

function ScrollCamera() {
  const { camera } = useThree()
  const targetY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = maxScroll > 0 ? window.scrollY / maxScroll : 0
      targetY.current = -(scrollPercent * 11)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useFrame((_, delta) => {
    camera.position.y += (targetY.current - camera.position.y) * 2.2 * delta
    camera.rotation.x += (((targetY.current - camera.position.y) * 0.03) - camera.rotation.x) * 2.2 * delta
  })

  return null
}

export function Global3DScene() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden opacity-60">
      <Canvas camera={{ position: [0, 0, 9], fov: 55 }}>
        <Suspense fallback={null}>
          <ScrollCamera />

          <ambientLight intensity={0.55} color="#7dd3fc" />
          <pointLight position={[8, 6, 4]} intensity={1.25} color="#7dd3fc" />
          <pointLight position={[-6, -6, -4]} intensity={0.7} color="#fcd34d" />
          <Environment preset="city" />

          <group position={[0, 0, 0]}>
            <FloatingGeometry position={[-5.5, 2.4, -2.8]} geometry="sphere" scale={0.55} speed={0.8} />
            <FloatingGeometry position={[5.8, -1.2, -4.4]} geometry="octahedron" scale={0.75} speed={1.1} />
          </group>

          <group position={[0, -3.8, 0]}>
            <FloatingGeometry position={[-4.5, 0.4, -5.3]} geometry="box" scale={0.9} speed={0.7} />
            <FloatingGeometry position={[5.1, 1.8, -3.6]} geometry="sphere" scale={0.62} speed={1.15} />
          </group>

          <group position={[0, -7.6, 0]}>
            <FloatingGeometry position={[-5.2, -1.3, -4.2]} geometry="octahedron" scale={0.68} speed={1.05} />
            <FloatingGeometry position={[5.6, 0.8, -6.4]} geometry="box" scale={0.84} speed={0.82} />
          </group>

          <group position={[0, -11.4, 0]}>
            <FloatingGeometry position={[-3.8, 1.3, -5.1]} geometry="sphere" scale={0.8} speed={0.76} />
            <FloatingGeometry position={[4.7, -1.5, -3.4]} geometry="octahedron" scale={0.58} speed={1.32} />
          </group>
        </Suspense>
      </Canvas>
    </div>
  )
}
