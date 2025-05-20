"use client";
import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

// Define props interface
interface LenisProviderProps {
  children: ReactNode;
}

function LenisProvider({ children }: LenisProviderProps) {
  // Define options type
  const options = {
    lerp: 0.008,
    duration: 1.7,
    smooth: true,
    smoothTouch: true,
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}

export default LenisProvider;
