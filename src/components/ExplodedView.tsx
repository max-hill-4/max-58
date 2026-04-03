"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function ExplodedKeyboard({ exploded }: { exploded: boolean }) {
  useGLTF.preload("/models/keyboard-assembly.glb");
  
  const gltf = useGLTF("/models/keyboard-assembly.glb");
  
  useEffect(() => {
    if (gltf?.scene) {
      console.log("=== GLB Loaded Successfully ===");
      console.log("Scene children:", gltf.scene.children.length);
      gltf.scene.traverse((obj: any) => {
        console.log(`Object: ${obj.name} (${obj.type})`, {
          pos: [obj.position.x.toFixed(3), obj.position.y.toFixed(3), obj.position.z.toFixed(3)]
        });
      });
    }
  }, [gltf]);
  
  if (!gltf?.scene) {
    console.log("Still loading...");
    return null;
  }
  
  console.log("Rendering model with", gltf.scene.children.length, "children");
  
  return <primitive object={gltf.scene} scale={0.006} />;
}