"use client"

import { Suspense, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, Float, MeshDistortMaterial, Sparkles } from "@react-three/drei"
import type * as THREE from "three"

function OrbitingObjects() {
  const groupRef = useRef<THREE.Group>(null!)

  useFrame((state, delta) => {
    if (!groupRef.current) {
      return
    }

    groupRef.current.rotation.y += delta * 0.18
    groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.35) * 0.12
  })

  return (
    <group ref={groupRef}>
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh position={[0, 0.1, 0]}>
          <icosahedronGeometry args={[1.25, 1]} />
          <MeshDistortMaterial
            color="#7dd3fc"
            emissive="#38bdf8"
            emissiveIntensity={0.35}
            metalness={0.35}
            roughness={0.06}
            distort={0.32}
            speed={1.8}
          />
        </mesh>
      </Float>

      <Float speed={1.2} rotationIntensity={0.7} floatIntensity={1}>
        <mesh position={[-2.1, 1.15, -0.45]} rotation={[0.6, 0.5, 0.25]}>
          <torusGeometry args={[0.5, 0.12, 16, 64]} />
          <meshStandardMaterial color="#fcd34d" metalness={0.72} roughness={0.18} emissive="#f59e0b" emissiveIntensity={0.18} />
        </mesh>
      </Float>

      <Float speed={1.6} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh position={[2.15, -1.1, -0.9]} rotation={[0.2, 0.6, 0.9]}>
          <octahedronGeometry args={[0.72, 0]} />
          <meshStandardMaterial color="#ffffff" metalness={0.55} roughness={0.12} />
        </mesh>
      </Float>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.9, 0]}>
        <ringGeometry args={[2.2, 2.55, 64]} />
        <meshStandardMaterial color="#7dd3fc" transparent opacity={0.28} />
      </mesh>
    </group>
  )
}

export function HeroShowcase() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0.25, 5.8], fov: 46 }}>
        <Suspense fallback={null}>
          <color attach="background" args={["#0a1220"]} />
          <fog attach="fog" args={["#0a1220", 5, 11]} />
          <ambientLight intensity={0.6} />
          <directionalLight position={[4, 5, 3]} intensity={1.4} color="#f8fafc" />
          <pointLight position={[-3, -2, 4]} intensity={1.2} color="#7dd3fc" />
          <pointLight position={[3, 2, -2]} intensity={0.8} color="#fcd34d" />
          <Environment preset="city" />
          <Sparkles count={30} speed={0.4} size={2.5} scale={[6, 4, 4]} color="#dbeafe" />
          <OrbitingObjects />
          <ContactShadows position={[0, -2.05, 0]} opacity={0.45} width={7} height={7} blur={2.6} />
        </Suspense>
      </Canvas>
    </div>
  )
}
