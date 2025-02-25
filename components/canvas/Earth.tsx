import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

// Assuming CanvasLoader is correctly typed in your project
import CanvasLoader from '../Loader';

// Type for the `Earth` component to represent the GLTF model
interface EarthProps {
  scale?: number;
  positionY?: number;
  rotationY?: number;
}

const Earth: React.FC<EarthProps> = ({
  scale = 2.5,
  positionY = 0,
  rotationY = 0,
}) => {
  const { scene } = useGLTF('./planet/scene.gltf');

  return (
    <primitive
      object={scene}
      scale={scale}
      position-y={positionY}
      rotation-y={rotationY}
    />
  );
};

const EarthCanvas: React.FC = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
