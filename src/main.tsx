import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Landing from "./Landing.tsx";
import MouseTracker from "./components/MouseTracker.tsx";
import LenisProvider from "./components/Lenisprovider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LenisProvider>
      <Landing />
      <MouseTracker />
    </LenisProvider>
  </StrictMode>
);
