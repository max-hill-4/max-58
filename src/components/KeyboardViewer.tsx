"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import { Suspense, useState } from "react";
import ExplodedKeyboard from "./ExplodedView";

function Scene({ exploded }: { exploded: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.4} />
      
      <ExplodedKeyboard exploded={exploded} />
      
      <ContactShadows
        position={[0, -2, 0]}
        opacity={0.3}
        scale={30}
        blur={2}
        far={4}
      />
    </>
  );
}

export default function KeyboardViewer() {
  const [exploded, setExploded] = useState(true);

  return (
    <div className="w-full h-[500px] md:h-[600px] relative">
      <Canvas shadows camera={{ position: [0, 4, 8], fov: 45 }} className="bg-gradient-to-b from-zinc-900 to-zinc-950 rounded-xl">
        <Suspense fallback={null}>
          <Scene exploded={exploded} />
        </Suspense>
      </Canvas>
      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
        <button
          onClick={() => setExploded(true)}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            exploded 
              ? "bg-amber-400 text-zinc-950" 
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          Exploded
        </button>
        <button
          onClick={() => setExploded(false)}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            !exploded 
              ? "bg-amber-400 text-zinc-950" 
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          Assembled
        </button>
      </div>
    </div>
  );
}