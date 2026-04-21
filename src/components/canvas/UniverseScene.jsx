import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float, Sphere, Line, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// A glowing, distorting sphere representing the core/universe
function Core() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2, 4]} />
        <MeshDistortMaterial
          color="#1e3a8a" // Deep blue
          emissive="#0f172a"
          envMapIntensity={1}
          clearcoat={1}
          clearcoatRoughness={0.1}
          metalness={0.8}
          roughness={0.2}
          distort={0.4}
          speed={2}
          wireframe={true}
        />
      </mesh>
      {/* Inner glowing sphere */}
      <Sphere args={[1.5, 32, 32]}>
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.15} />
      </Sphere>
    </Float>
  );
}

// Connect lines to make a network effect
function NetworkLines() {
  const lineRef = useRef();
  
  const points = useMemo(() => {
    const pts = [];
    for (let i = 0; i < 20; i++) {
      pts.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15,
          (Math.random() - 0.5) * 15
        )
      );
    }
    return pts;
  }, []);

  useFrame((state) => {
    if (lineRef.current) {
      lineRef.current.rotation.x = state.clock.elapsedTime * 0.02;
      lineRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <group ref={lineRef}>
      {points.map((p1, i) =>
        points.slice(i + 1).map((p2, j) => {
          const distance = p1.distanceTo(p2);
          if (distance < 6) {
            return (
              <Line
                key={`${i}-${j}`}
                points={[p1, p2]}
                color="white"
                lineWidth={0.5}
                transparent
                opacity={0.1 - (distance / 6) * 0.1}
              />
            );
          }
          return null;
        })
      )}
      {points.map((p, i) => (
        <mesh key={`point-${i}`} position={p}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color="#d7ffd9" transparent opacity={0.5} />
        </mesh>
      ))}
    </group>
  );
}

export default function UniverseScene() {
  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1, pointerEvents: "none", background: "#030305" }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={["#030305"]} />
        <fog attach="fog" args={["#030305", 5, 20]} />
        
        <ambientLight intensity={0.2} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#e0e7ff" />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#10b981" />
        <pointLight position={[0, 0, 0]} intensity={1} color="#8b5cf6" />

        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        
        <Core />
        <NetworkLines />
      </Canvas>
    </div>
  );
}
