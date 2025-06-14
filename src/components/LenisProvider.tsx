"use client";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef, type ReactNode } from "react";

// Define props interface
interface LenisProviderProps {
  children: ReactNode;
}

function LenisProvider({ children }: LenisProviderProps) {
  const lenisRef = useRef<any>(null);

  const options = {
    lerp: 0.008,
    duration: 1.7,
    smooth: true,
    smoothTouch: true,
    smoothWheel: true,
  };

  // Listen for browser navigation events instead of React Router
  useEffect(() => {
    const handlePopState = () => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    };

    // Listen for browser back/forward navigation
    window.addEventListener("popstate", handlePopState);

    // Listen for programmatic navigation (if using history.pushState)
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (...args) {
      originalPushState.apply(window.history, args);
      handlePopState();
    };

    window.history.replaceState = function (...args) {
      originalReplaceState.apply(window.history, args);
      handlePopState();
    };

    return () => {
      window.removeEventListener("popstate", handlePopState);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  return (
    <ReactLenis root options={options} ref={lenisRef}>
      {children}
    </ReactLenis>
  );
}

export default LenisProvider;
