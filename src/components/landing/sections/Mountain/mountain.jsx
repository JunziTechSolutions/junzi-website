
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
  const cloudRadius = 3;
  const cloudHeight = -1.4;
  const cloudScale = 0.3;
  const cloudOpacity = 1.5;
  const cloudSpeed = 0.30;
  const cloudColor = '#4d4d6f';
  const bloom = 5;
  const fogColor = '#000';
  const fogNear = 5;
  const fogFar = 6;

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
            <Cloud
              position={[-cloudRadius, cloudHeight, 0]}
              speed={cloudSpeed}
              opacity={cloudOpacity}
              scale={[cloudScale, cloudScale, cloudScale]}
              color={cloudColor}
              seed={1}
            />
            <Cloud
              position={[cloudRadius, cloudHeight, 0]}
              speed={cloudSpeed}
              opacity={cloudOpacity}
              scale={[cloudScale, cloudScale, cloudScale]}
              color={cloudColor}
              seed={1}
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