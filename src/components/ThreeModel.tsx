"use client";

import React, { Component, ErrorInfo, ReactNode, Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, PresentationControls } from "@react-three/drei";
import * as THREE from "three";

// Simple Error Boundary to ensure page renders even if WebGL fails
class ErrorBoundary extends Component<{ children: ReactNode; fallback: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode; fallback: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Three.js Canvas Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

function ProgrammaticLaptop() {
  const groupRef = useRef<THREE.Group>(null);

  // Slow architectural rotation via useFrame
  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]}>
      {/* Base of the laptop chassis */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[4, 0.15, 3]} />
        <meshBasicMaterial color="#000000" wireframe />
      </mesh>
      
      {/* Keyboard structural abstract representation */}
      <mesh position={[0, 0.08, 0.2]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[3.6, 1.8, 12, 6]} />
        <meshBasicMaterial color="#E11D2E" wireframe transparent opacity={0.6} />
      </mesh>
      
      {/* Screen/Lid of the laptop */}
      <mesh position={[0, 1.25, -1.45]} rotation={[-0.1, 0, 0]}>
        <boxGeometry args={[4, 2.5, 0.1]} />
        <meshBasicMaterial color="#000000" wireframe />
      </mesh>
      
      {/* Screen Display Matrix grid */}
      <mesh position={[0, 1.25, -1.39]} rotation={[-0.1, 0, 0]}>
        <planeGeometry args={[3.8, 2.3, 16, 10]} />
        <meshBasicMaterial color="#E11D2E" wireframe transparent opacity={0.25} />
      </mesh>
    </group>
  );
}

export default function ThreeModel() {
  return (
    <div className="w-full h-full relative flex items-center justify-center cursor-grab active:cursor-grabbing">
      <ErrorBoundary 
        fallback={
          <div className="w-full h-full border border-divider flex items-center justify-center font-mono text-sm text-foreground/50 bg-background/50">
            [3D BLUEPRINT UNAVAILABLE]
          </div>
        }
      >
        <Canvas camera={{ position: [0, 2, 8], fov: 40 }} className="w-full h-full">
          <ambientLight intensity={1} />
          <Suspense fallback={null}>
            <PresentationControls
              global
              damping={0.2}
              snap={true}
              rotation={[0.2, 0, 0]}
              polar={[-Math.PI / 3, Math.PI / 3]}
              azimuth={[-Math.PI / 1.4, Math.PI / 2]}
            >
              <Float rotationIntensity={0.2} floatIntensity={1.5} speed={1.2}>
                <ProgrammaticLaptop />
              </Float>
            </PresentationControls>
          </Suspense>
        </Canvas>
      </ErrorBoundary>
    </div>
  );
}
