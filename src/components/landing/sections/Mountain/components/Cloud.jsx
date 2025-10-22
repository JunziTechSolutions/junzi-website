import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Cloud({ position, scale, speed, texture, angleOffset = 0 }) {
  const meshRef = useRef();
  const angle = useRef(angleOffset);
  const radius = 1; // Circle radius of 3 units
  const centerY = position[1]; // Y position stays constant
  const centerZ = position[2]; // Z depth stays constant

  useFrame(() => {
    if (meshRef.current) {
      // Increment angle based on speed
      angle.current += speed;

      // Calculate circular motion in X-Z plane
      meshRef.current.position.x = Math.cos(angle.current) * radius;
      meshRef.current.position.z = centerZ + Math.sin(angle.current) * radius;
      meshRef.current.position.y = centerY;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[scale * 2, scale * 1.2]} />
      <meshBasicMaterial
        map={texture}
        transparent
        alphaMap={texture}
        side={THREE.DoubleSide}
        depthWrite={false}
      />
    </mesh>
  );
}

export default Cloud;
