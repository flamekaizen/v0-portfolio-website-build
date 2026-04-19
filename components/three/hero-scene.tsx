"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import { ParticleField } from "./particle-field"
import { FloatingGeometry } from "./floating-geometry"
import { InteractiveSphere } from "./interactive-sphere"
import { GalaxyBackground } from "./galaxy-background"
import { CosmicDust } from "./cosmic-dust"

export function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 10]} />

          <ambientLight intensity={0.2} color="#1e1b4b" />
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#8b5cf6" />
          <pointLight position={[-10, -10, -10]} intensity={0.8} color="#3b82f6" />
          <pointLight position={[0, 10, -10]} intensity={0.6} color="#06b6d4" />
          <pointLight position={[5, -5, 5]} intensity={0.4} color="#a855f7" />

          <Environment preset="night" />

          <GalaxyBackground count={15000} />

          <CosmicDust count={4000} />

          {/* Enhanced particle field with cosmic colors */}
          <ParticleField />

          <InteractiveSphere position={[-6, 2, -3]} text="React" color="#61dafb" />
          <InteractiveSphere position={[6, -1, -4]} text="Next.js" color="#ffffff" />
          <InteractiveSphere position={[-3, -3, -2]} text="TypeScript" color="#3178c6" />
          <InteractiveSphere position={[4, 3, -5]} text="Three.js" color="#8b5cf6" />
          <InteractiveSphere position={[0, 4, -6]} text="GSAP" color="#88cc00" />

          <FloatingGeometry position={[-8, 3, -5]} geometry="sphere" scale={0.8} speed={0.8} />
          <FloatingGeometry position={[6, -2, -3]} geometry="box" scale={0.6} speed={1.2} />
          <FloatingGeometry position={[-4, -4, -8]} geometry="octahedron" scale={1} speed={0.6} />
          <FloatingGeometry position={[8, 4, -6]} geometry="sphere" scale={0.4} speed={1.5} />
          <FloatingGeometry position={[2, -6, -4]} geometry="box" scale={0.7} speed={0.9} />
          <FloatingGeometry position={[-6, -2, -7]} geometry="octahedron" scale={0.5} speed={1.1} />
          <FloatingGeometry position={[7, 1, -2]} geometry="sphere" scale={0.3} speed={1.8} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate={true}
            autoRotateSpeed={0.2}
            maxPolarAngle={Math.PI / 1.6}
            minPolarAngle={Math.PI / 2.4}
            rotateSpeed={0.3}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
