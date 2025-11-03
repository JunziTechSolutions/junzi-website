'use client';

import { Canvas, extend } from '@react-three/fiber';
import { Cloud, Clouds } from '@react-three/drei';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import * as THREE from 'three';

import Plane from './components/Plane';
import Grid from './components/Grid';

class CloudMaterial extends THREE.MeshBasicMaterial {
  constructor() {
    super();
    this.fog = false;
  }
}

extend({ CloudMaterial });
function MountainBackground() {
  // Static values instead of Leva controls
  const bloom = 5;
  const fogColor = '#000';
  const fogNear = 2;
  const fogFar = 3;

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        style={{ backgroundColor: '#0a0f2c' }}
        shadows
        camera={{ position: [0, -0.5, 6], fov: 50, far: 13 }}
      >
        <fog attach="fog" args={[fogColor, fogNear, fogFar]} />
        <ambientLight intensity={Math.PI / 2} />
        <Grid />
        <Plane />

        <Clouds material={CloudMaterial}>
            {/* Cloud 1 */}
            <Cloud
              position={[-3.1, -1.0, -1.6]}
              speed={0.45}
              opacity={0.20}
              scale={[0.13, 0.13, 0.13]}
              color="#58586c"
              seed={60}
            />
            {/* Cloud 2 */}
            <Cloud
              position={[-1.4, -1.0, -0.9]}
              speed={0.30}
              opacity={0.17}
              scale={[0.13, 0.13, 0.13]}
              color="#4d4d6f"
              seed={11}
            />
            {/* Cloud 3 */}
            
            {/* Cloud 4 */}
            
            {/* Cloud 5 */}
            <Cloud
              position={[2.4, -1.0, -1.8]}
              speed={0.20}
              opacity={0.20}
              scale={[0.18, 0.18, 0.18]}
              color="#4d4d6f"
              seed={60}
            />
          </Clouds>

        <EffectComposer>
          <Bloom
            mipmapBlur
            intensity={bloom}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.01}
            opacity={0.7}
          />
          <ToneMapping adaptive={true} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default MountainBackground;