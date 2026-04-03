"use client";

import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ExplodedKeyboard({ exploded }: { exploded: boolean }) {
  useGLTF.preload("/models/keyboard-assembly.glb");
  const gltf = useGLTF("/models/keyboard-assembly.glb");
  const originalPositions = useRef<Map<string, THREE.Vector3>>(new Map());
  
  useEffect(() => {
    if (gltf?.scene && originalPositions.current.size === 0) {
      console.log("=== GLB Loaded Successfully ===");
      console.log("Scene children:", gltf.scene.children.length);
      
      gltf.scene.traverse((obj: any) => {
        if (obj.type === "Mesh" || obj.type === "Group") {
          originalPositions.current.set(obj.name, obj.position.clone());
        }
      });
    }
  }, [gltf]);
  
  useEffect(() => {
    if (!gltf?.scene) return;
    
    const explodeDistance = 15;
    
    gltf.scene.traverse((obj: any) => {
      if (obj.type === "Mesh" || obj.type === "Group") {
        const origPos = originalPositions.current.get(obj.name);
        if (!origPos) return;
        
        if (obj.name.toLowerCase().includes("switch")) {
          obj.position.y = origPos.y + (exploded ? explodeDistance : 0);
        } else {
          obj.position.y = origPos.y;
        }
      }
    });
  }, [gltf, exploded]);
  
  if (!gltf?.scene) return null;
  
  return <primitive object={gltf.scene} scale={0.01} />;
}