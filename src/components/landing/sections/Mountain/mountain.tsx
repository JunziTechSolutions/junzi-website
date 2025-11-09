'use client';

import { useEffect } from 'react';
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

type MountainBackgroundProps = {
  onReady?: () => void;
};

function MountainBackground({ onReady }: MountainBackgroundProps) {
  useEffect(() => {
    if (typeof onReady === 'function') {
      onReady();
    }
  }, [onReady]);

  const cloudRadius = 3;
  const cloudHeight = -1.4;
  const cloudScale = 0.33;
  const cloudOpacity = 1.0;
  const cloudSpeed = 0.3;
  const cloudColor = '#4d4d6f';
  const bloom = 5;
  const fogColor = '#000';
  const fogNear = 2;
  const fogFar = 3;

  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        style={{ backgroundColor: '#0a0f2c' }}
        shadows
        dpr={[1, 1.5]}
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
          <ToneMapping adaptive />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default MountainBackground;

