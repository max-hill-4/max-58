"use client";

import { useEffect, useState } from "react";
import pcbData from "@/data/pcb-outline.json";

export default function ExplodedViewSVG({ exploded }: { exploded: boolean }) {
  const scale = 0.15;
  const offsetX = 200;
  const offsetY = 50;
  
  const switchSize = 15;
  const keycapOffset = exploded ? 40 : 0;
  const switchOffset = exploded ? 20 : 0;
  
  const pcbPath = pcbData.outline
    .map((seg, i) => {
      const x = (seg.start.x - pcbData.bounds.minX) * scale + offsetX;
      const y = (seg.start.y - pcbData.bounds.minY) * scale + offsetY;
      return i === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
    })
    .join(" ");
  
  const rightSwitches = pcbData.switches.map((sw, i) => ({
    x: (sw.x - pcbData.bounds.minX) * scale + offsetX,
    y: (sw.y - pcbData.bounds.minY) * scale + offsetY,
    label: `R${i + 1}`
  }));
  
  const leftSwitches = pcbData.switches.map((sw, i) => ({
    x: -((sw.x - pcbData.bounds.minX) * scale) + 100,
    y: (sw.y - pcbData.bounds.minY) * scale + offsetY,
    label: `L${i + 1}`
  }));

  return (
    <svg 
      viewBox="0 0 600 300" 
      className="w-full h-full"
      style={{ maxWidth: "100%", maxHeight: "100%" }}
    >
      <defs>
        <linearGradient id="pcbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1a472a" />
          <stop offset="100%" stopColor="#2d5016" />
        </linearGradient>
        <linearGradient id="switchGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
        <linearGradient id="keycapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#4a4a4a" />
          <stop offset="100%" stopColor="#2a2a2a" />
        </linearGradient>
      </defs>
      
      {/* Left PCB */}
      <g style={{ transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}>
        <path 
          d={pcbPath}
          fill="url(#pcbGradient)" 
          stroke="#0f2618"
          strokeWidth="1"
          transform="scale(-1, 1) translate(-600, 0)"
        />
      </g>
      
      {/* Right PCB */}
      <g>
        <path 
          d={pcbPath}
          fill="url(#pcbGradient)" 
          stroke="#0f2618"
          strokeWidth="1"
        />
      </g>
      
      {/* Left Switches */}
      {leftSwitches.map((sw, i) => (
        <g key={`left-switch-${i}`}>
          <rect
            x={sw.x - switchSize/2}
            y={sw.y - switchSize/2 + switchOffset}
            width={switchSize}
            height={switchSize}
            rx="2"
            fill="url(#switchGradient)"
            stroke="#000"
            strokeWidth="0.5"
            style={{ transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
          />
        </g>
      ))}
      
      {/* Right Switches */}
      {rightSwitches.map((sw, i) => (
        <g key={`right-switch-${i}`}>
          <rect
            x={sw.x - switchSize/2}
            y={sw.y - switchSize/2 + switchOffset}
            width={switchSize}
            height={switchSize}
            rx="2"
            fill="url(#switchGradient)"
            stroke="#000"
            strokeWidth="0.5"
            style={{ transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
          />
        </g>
      ))}
      
      {/* Left Keycaps */}
      {leftSwitches.map((sw, i) => (
        <rect
          key={`left-keycap-${i}`}
          x={sw.x - switchSize/2 - 1}
          y={sw.y - switchSize/2 - 3 + keycapOffset}
          width={switchSize + 2}
          height={switchSize + 2}
          rx="2"
          fill="url(#keycapGradient)"
          stroke="#000"
          strokeWidth="0.5"
          style={{ transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
        />
      ))}
      
      {/* Right Keycaps */}
      {rightSwitches.map((sw, i) => (
        <rect
          key={`right-keycap-${i}`}
          x={sw.x - switchSize/2 - 1}
          y={sw.y - switchSize/2 - 3 + keycapOffset}
          width={switchSize + 2}
          height={switchSize + 2}
          rx="2"
          fill="url(#keycapGradient)"
          stroke="#000"
          strokeWidth="0.5"
          style={{ transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)" }}
        />
      ))}
    </svg>
  );
}