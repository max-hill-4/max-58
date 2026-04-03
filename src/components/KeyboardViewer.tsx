"use client";

import { useState } from "react";
import ExplodedKeyboard from "./ExplodedView";
import ExplodedViewSVG from "./ExplodedViewSVG";

function Scene({ exploded }: { exploded: boolean }) {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={0.8} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={0.4} />
      
      <ExplodedKeyboard exploded={exploded} />
    </>
  );
}

export default function KeyboardViewer() {
  const [exploded, setExploded] = useState(true);
  const [view, setView] = useState<"3d" | "svg">("svg");

  return (
    <div className="w-full min-h-[500px] md:min-h-[600px] relative flex flex-col gap-4">
      <div className="flex gap-3 justify-center">
        <button
          onClick={() => setView("svg")}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            view === "svg" 
              ? "bg-amber-400 text-zinc-950" 
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          SVG View
        </button>
        <button
          onClick={() => setView("3d")}
          className={`px-4 py-2 rounded text-sm font-medium transition-all ${
            view === "3d" 
              ? "bg-amber-400 text-zinc-950" 
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700"
          }`}
        >
          3D View
        </button>
      </div>
      
      <div className="w-full h-[400px] md:h-[500px] bg-zinc-900 rounded-xl flex items-center justify-center overflow-hidden">
        {view === "svg" && <ExplodedViewSVG exploded={exploded} />}
        {view === "3d" && (
          <div className="text-zinc-500 text-sm">
            Loading 3D...
          </div>
        )}
      </div>
      
      <div className="flex gap-3 justify-center">
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