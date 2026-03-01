import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

function Road() {
  const roadRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (roadRef.current) {
      roadRef.current.position.z += delta * 8;
      if (roadRef.current.position.z > 10) {
        roadRef.current.position.z = -30;
      }
    }
  });

  return (
    <group>
      {/* Road surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, -10]}>
        <planeGeometry args={[6, 60]} />
        <meshStandardMaterial color="#111111" />
      </mesh>
      {/* Road lines */}
      {Array.from({ length: 15 }).map((_, i) =>
      <RoadLine key={i} initialZ={-30 + i * 4} />
      )}
    </group>);

}

function RoadLine({ initialZ }: {initialZ: number;}) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.position.z += delta * 8;
      if (ref.current.position.z > 10) {
        ref.current.position.z = -30;
      }
    }
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.98, initialZ]}>
      <planeGeometry args={[0.15, 1.5]} />
      <meshStandardMaterial color="#00ff88" emissive="#00ff88" emissiveIntensity={0.3} />
    </mesh>);

}

function NeonSign({ position, text, color }: {position: [number, number, number];text: string;color: string;}) {
  const ref = useRef<THREE.Group>(null);
  const initialZ = position[2];

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.position.z += delta * 6;
      if (ref.current.position.z > 15) {
        ref.current.position.z = initialZ;
      }
    }
  });

  return (
    <group ref={ref} position={position}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
        {/* Sign board */}
        <mesh>
          <boxGeometry args={[2.5, 0.8, 0.05]} />
          <meshStandardMaterial
            color="#111"
            emissive={color}
            emissiveIntensity={0.1} />

        </mesh>
        {/* Sign border glow */}
        <mesh>
          <boxGeometry args={[2.6, 0.9, 0.02]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.5}
            transparent
            opacity={0.3} />

        </mesh>
        {/* Post */}
        <mesh position={[0, -1.5, 0]}>
          <cylinderGeometry args={[0.03, 0.03, 2.2]} />
          <meshStandardMaterial color="#333" />
        </mesh>
      </Float>
    </group>);

}

function CarBody() {
  const groupRef = useRef<THREE.Group>(null);
  const { pointer } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        pointer.x * 0.15,
        0.05
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        -pointer.y * 0.05,
        0.05
      );
    }
  });

  return (
    <group ref={groupRef} position={[0, -1.2, 0]}>
      {/* Car body */}
      <mesh position={[0, 0.4, 0]}>
        <boxGeometry args={[1.8, 0.5, 4]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.9} roughness={0.1} />
      </mesh>
      {/* Car cabin */}
      <mesh position={[0, 0.85, -0.2]}>
        <boxGeometry args={[1.5, 0.5, 2]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.2} transparent opacity={0.7} />
      </mesh>
      {/* Headlights */}
      <pointLight position={[0.6, 0.4, 2.1]} color="#00ff88" intensity={2} distance={8} />
      <pointLight position={[-0.6, 0.4, 2.1]} color="#00ff88" intensity={2} distance={8} />
      <mesh position={[0.6, 0.4, 2.01]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshStandardMaterial emissive="#00ff88" emissiveIntensity={2} color="#00ff88" />
      </mesh>
      <mesh position={[-0.6, 0.4, 2.01]}>
        <sphereGeometry args={[0.12, 8, 8]} />
        <meshStandardMaterial emissive="#00ff88" emissiveIntensity={2} color="#00ff88" />
      </mesh>
      {/* Taillights */}
      <mesh position={[0.7, 0.4, -2.01]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial emissive="#ff0055" emissiveIntensity={2} color="#ff0055" />
      </mesh>
      <mesh position={[-0.7, 0.4, -2.01]}>
        <sphereGeometry args={[0.1, 8, 8]} />
        <meshStandardMaterial emissive="#ff0055" emissiveIntensity={2} color="#ff0055" />
      </mesh>
      {/* Underglow */}
      <pointLight position={[0, 0, 0]} color="#00ff88" intensity={1} distance={4} />
    </group>);

}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.1} />
      <fog attach="fog" args={["#000000", 5, 35]} />
      <Road />
      <CarBody />
      <NeonSign position={[-4, 1, -15]} text="ARRAS" color="#00ff88" />
      <NeonSign position={[4, 1.5, -22]} text="VTC" color="#00aaff" />
      <NeonSign position={[-3.5, 0.8, -30]} text="TAXI" color="#ff00aa" />
      <NeonSign position={[3, 1.2, -38]} text="GO" color="#00ff88" />
    </>);

}

export default function HeroScene() {
  return (
    <div className="w-full h-[70vh] md:h-[80vh] relative">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        gl={{ antialias: true }}
        style={{ background: "black" }} className="text-neon-cyan">

        <Scene />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent pointer-events-none" />
    </div>);

}