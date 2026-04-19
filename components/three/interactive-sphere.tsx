"use client"

import { useRef, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { Sphere, Text, MeshTransmissionMaterial } from "@react-three/drei"
import type * as THREE from "three"

interface InteractiveSphereProps {
  position: [number, number, number]
  text: string
  color?: string
}

export function InteractiveSphere({ position, text, color = "#6366f1" }: InteractiveSphereProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const textRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHovered] = useState(false)
  const { viewport } = useThree()

  useFrame((state) => {
    if (meshRef.current && textRef.current) {
      const time = state.clock.elapsedTime

      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.3
      textRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.3

      // Rotation
      meshRef.current.rotation.x = Math.sin(time * 0.5) * 0.2
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.3

      // Scale on hover
      const targetScale = hovered ? 1.2 : 1
      meshRef.current.scale.lerp({ x: targetScale, y: targetScale, z: targetScale } as THREE.Vector3, 0.1)
    }
  })

  return (
    <group>
      <Sphere
        ref={meshRef}
        position={position}
        scale={0.8}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshTransmissionMaterial
          backside
          backsideThickness={0.5}
          thickness={1}
          chromaticAberration={0.8}
          anisotropy={0.3}
          roughness={hovered ? 0.1 : 0.3}
          clearcoat={1}
          color={color}
          transmission={1}
        />
      </Sphere>

      <Text
        ref={textRef}
        position={[position[0], position[1], position[2] + 0.1]}
        fontSize={0.3}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/Geist-Bold.ttf"
        visible={hovered}
      >
        {text}
      </Text>
    </group>
  )
}
