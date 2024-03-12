import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

interface BallProps {
  imgUrl: string;
  onClick: () => void;
}

const Ball: React.FC<BallProps> = ({ imgUrl, onClick }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      
      <mesh
        castShadow
        receiveShadow
        scale={1}
        onClick={onClick} // Using R3F's onClick event
      >
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color={"grey"} />
        <Decal
          map={decal}
          position={[0, 0, 1]}
          rotation={[0, 0, 0]}
          scale={[1, 1, 1]}
        />
      </mesh>
    </Float>
  );
};

interface BallCanvasProps {
  href: string;
  svg: string;
}

const BallCanvas: React.FC<BallCanvasProps> = ({ href, svg }) => {
  const handleBallClick = () => {
    window.location.href = href; // Redirect to project.href
  };

  return (
    <div className="cursor-pointer">
      <Canvas style={{ width: "50px" }}>
        <Suspense fallback={null}>
          <Preload all />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />

            <Ball imgUrl={svg} onClick={handleBallClick} />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default BallCanvas;
