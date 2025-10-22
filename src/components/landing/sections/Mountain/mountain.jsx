'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { Bloom, EffectComposer, ToneMapping } from '@react-three/postprocessing';
import * as THREE from 'three';

import Plane from './components/Plane';
import Grid from './components/Grid';
import Cloud from './components/Cloud';

function Clouds() {
  const cloudTexture1 = useLoader(THREE.TextureLoader, '/images/cloud.png');

  return (
    <group>
      {/* Clouds rotating in circles at different heights and speeds */}
      <Cloud position={[1., -.8, 1]} scale={0.4} speed={0.004} texture={cloudTexture1} angleOffset={0} />
      <Cloud position={[.2, -.8, 1.1]} scale={.4} speed={0.004} texture={cloudTexture1} angleOffset={Math.PI * 2 / 3} />
      <Cloud position={[1.7, -.8, .9]} scale={.4} speed={0.004} texture={cloudTexture1} angleOffset={Math.PI * 4 / 3} />
        <Cloud position={[-.7, -.8, 0.8]} scale={.35} speed={0.004} texture={cloudTexture1} angleOffset={Math.PI * 2 / 3} />

    </group>
  );
}

function MountainBackground() {
  const bloom = .5;
  const fogColor = '#352f2fff';
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
        <Clouds />

        <EffectComposer>
          {/* <Bloom
            mipmapBlur
            intensity={bloom}
            luminanceThreshold={0.1}
            luminanceSmoothing={0.01}
            opacity={0.7}
          /> */}
          <ToneMapping adaptive={true} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default MountainBackground;
