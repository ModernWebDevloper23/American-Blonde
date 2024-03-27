import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Can1 from "./Can1";

function Background({ modelDecider }) {
  return (
    <div
      theme="darkGreen"
      class="background flex items-center   z-[98] justify-center absolute top-0 left-0  w-full h-screen"
    >
      <div class="canContainer z-[98]  w-[100vw] h-[100vh]">
        <Canvas>
          <PerspectiveCamera args={[0, 0, 5]} />
          <directionalLight position={[6,2,5]} color={0xffffff} intensity={2} />
          <directionalLight position={[-6,2,5]} color={0xffffff} intensity={1.8} />
          <Can1 modelDecider={modelDecider} />
        </Canvas>
      </div>
    </div>
  );
}

export default Background;
