"use client";

import dynamic from "next/dynamic";

const KeyboardViewer = dynamic(() => import("@/components/KeyboardViewer"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] md:h-[600px] bg-zinc-900 rounded-xl flex items-center justify-center">
      <div className="text-zinc-500">Loading 3D view...</div>
    </div>
  ),
});

export default function KeyboardViewerWrapper() {
  return <KeyboardViewer />;
}