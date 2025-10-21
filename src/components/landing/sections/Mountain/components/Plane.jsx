import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const vertexShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform float uNoiseIntensity;
  uniform float uMountainHeight;
  uniform float uCraterHeight;
  uniform float uCraterAngle;
  
  // 3D Simplex noise function
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
  
  float snoise(vec3 v) {
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    
    i = mod289(i);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    
    float n_ = 0.142857142857;
    vec3 ns = n_ * D.wyz - D.xzx;
    
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    
    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;
    
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  
  void main() {
    vUv = uv;
    
    vec3 pos = position;
    
    // Distance from center
    float dist = length(pos.xy);
    
    // Create cone/mountain shape with flatter peak
    float mountainShape = max(0.0, 1.0 - dist / 5.0);
    mountainShape = pow(mountainShape, 1.5);
    
    // Flatten the peak - reduce height when very close to center
    float peakFlatten = smoothstep(0.0, 1.5, dist); // Flat within 1.5 units of center
    mountainShape *= mix(0.85, 1.0, peakFlatten); // Reduce peak height by 15%
    
    // Add noise only at the peak (where mountainShape is high)
    float noise = 0.0;
    if (mountainShape > 0.1) {
      noise += snoise(vec3(pos.x * 0.8, pos.y * 0.8, 0.0)) * 0.4;
      noise += snoise(vec3(pos.x * 1.5, pos.y * 1.5, 1.0)) * 0.2;
      noise += snoise(vec3(pos.x * 3.0, pos.y * 3.0, 2.0)) * 0.1;
    }
    
    // Combine: base mountain shape + noise at the top
    float elevation = mountainShape * uMountainHeight + noise * mountainShape * uNoiseIntensity;
    
    // Cut the top with an angled plane (crater effect)
    // The cutting plane tilts based on the angle - affects height based on x position
    float angleRadians = radians(uCraterAngle);
    float tiltedCraterHeight = uCraterHeight + pos.x * tan(angleRadians);
    elevation = min(elevation, tiltedCraterHeight);
    
    pos.z += elevation;
    vElevation = elevation;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;
  varying float vElevation;
  uniform vec3 uColor;
  uniform float uMountainHeight;
  
  void main() {
    vec3 color = uColor;
    
    // Normalize elevation (0 to 1 based on mountain height)
    float normalizedHeight = vElevation / uMountainHeight;
    
    // Calculate opacity: 0 at bottom, 1 at 0.4 (middle), and stays 1 above
    float opacity = smoothstep(0.00, 0.01, normalizedHeight);
    
    gl_FragColor = vec4(color, opacity);
  }
`;



export default function Plane() {
  const meshRef = useRef();
  const lineSegmentsRef = useRef();

  // Static values instead of Leva controls
  const color = '#2e8fff';
  const gridWidth = 70;
  const gridHeight = 70;
  const noiseIntensity = 0.7;
  const mountainHeight = 5.0;
  const craterHeight = 3.4;
  const craterAngle = 10;

  const uniforms = useRef({
    uColor: { value: new THREE.Color(color) },
    uNoiseIntensity: { value: noiseIntensity },
    uMountainHeight: { value: mountainHeight },
    uCraterHeight: { value: craterHeight },
    uCraterAngle: { value: craterAngle }
  });

  useEffect(() => {
    if (!meshRef.current) return;

    // Create custom grid lines (only horizontal and vertical, no diagonals)
    const geometry = meshRef.current.geometry;
    const positions = geometry.attributes.position.array;
    const linePositions = [];

    const widthSegments = gridWidth;
    const heightSegments = gridHeight;

    // Horizontal lines
    for (let i = 0; i <= heightSegments; i++) {
      for (let j = 0; j < widthSegments; j++) {
        const idx1 = (i * (widthSegments + 1) + j) * 3;
        const idx2 = (i * (widthSegments + 1) + (j + 1)) * 3;

        linePositions.push(
          positions[idx1], positions[idx1 + 1], positions[idx1 + 2],
          positions[idx2], positions[idx2 + 1], positions[idx2 + 2]
        );
      }
    }

    // Vertical lines
    for (let i = 0; i < heightSegments; i++) {
      for (let j = 0; j <= widthSegments; j++) {
        const idx1 = (i * (widthSegments + 1) + j) * 3;
        const idx2 = ((i + 1) * (widthSegments + 1) + j) * 3;

        linePositions.push(
          positions[idx1], positions[idx1 + 1], positions[idx1 + 2],
          positions[idx2], positions[idx2 + 1], positions[idx2 + 2]
        );
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

    if (lineSegmentsRef.current) {
      lineSegmentsRef.current.geometry.dispose();
      lineSegmentsRef.current.geometry = lineGeometry;
    }
  }, [gridWidth, gridHeight]);

  return (
    <>
      <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, -7]} visible={false}>
        <planeGeometry args={[20, 10, gridWidth, gridHeight]} />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms.current}
          transparent
        />
      </mesh>
      <lineSegments ref={lineSegmentsRef} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, -7]}>
        <bufferGeometry />
        <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms.current}
          transparent
        />
      </lineSegments>
    </>
  );
}