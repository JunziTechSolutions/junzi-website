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
  const cloudRadius = 2;
  const cloudHeight = -0.7;
  const cloudScale = 0.13;
  const cloudOpacity = 0.9;
  const cloudSpeed = 0.2;
  const cloudColor = '#232474';
  const bloom = .5;
  const fogColor = '#000';
  const fogNear = 2;
  const fogFar = 3;

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        style={{ backgroundColor: '#232454' }}
        shadows
        camera={{ position: [0, -0.5, 6], fov: 50, far: 13 }}
      >
        <fog attach="fog" args={[fogColor, fogNear, fogFar]} />
        <ambientLight intensity={Math.PI / 2} />
        <Grid />
        <Plane />

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
