import { Environment, Sphere } from "@react-three/drei";
import { LayerMaterial } from "lamina";

import * as THREE from "three"

export const Background = () => {
  return (
    <>
      <Environment preset="sunset" />
      <Sphere args={[100, 100, 100]} rotation-y={Math.PI / 2}>
        <LayerMaterial
          lighting="physical"
          transmission={1}
          side={THREE.BackSide}
        >
            <meshStandardMaterial color="white" />

        </LayerMaterial>
      </Sphere>
    </>
  );
};
