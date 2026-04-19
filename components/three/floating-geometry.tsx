"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Sphere, Box, Octahedron, MeshTransmissionMaterial } from "@react-three/drei"
import type * as THREE from "three"

interface FloatingGeometryProps {
  position: [number, number, number]
  geometry: "sphere" | "box" | "octahedron"
  scale?: number
  speed?: number
}

export function FloatingGeometry({ position, geometry, scale = 1, speed = 1 }: FloatingGeometryProps) {
  const meshRef = useRef<THREE.Mesh>(null!)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed) * 0.18
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.8) * 0.28
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * speed * 0.5) * 0.45
    }
  })

  const GeometryComponent = {
    sphere: Sphere,
    box: Box,
    octahedron: Octahedron,
  }[geometry]

  return (
    <GeometryComponent ref={meshRef} position={position} scale={scale}>
      <MeshTransmissionMaterial
        backside
        backsideThickness={0.8}
        thickness={1.6}
        chromaticAberration={0.55}
        anisotropy={0.2}
        roughness={0.08}
        clearcoat={1}
        color="#cbd5e1"
        transmission={1}
      />
    </GeometryComponent>
  )
}
