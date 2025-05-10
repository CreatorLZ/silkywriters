import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Landing from "./Landing.tsx";
import MouseTracker from "./components/MouseTracker.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Landing />
    <MouseTracker />
  </StrictMode>
);
