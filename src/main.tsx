import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import Landing from "./Landing.tsx";
import MouseTracker from "./components/MouseTracker.tsx";
import LenisProvider from "./components/LenisProvider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Work from "./Pages/Work.tsx";
import About from "./Pages/About.tsx";
import Contact from "./Pages/Contact.tsx";
import Serivices from "./Pages/Services.tsx";
import Loading from "./components/Loading.tsx";
// import ResearchProjectDisplay from "./components/ResearchProjectDisplay.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <Landing />
      </Suspense>
    ),
  },
  {
    path: "/work",
    element: <Work />,
    // element: <ResearchProjectDisplay />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Serivices />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <LenisProvider>
      <RouterProvider router={router} />
      <MouseTracker />
    </LenisProvider>
  </StrictMode>
);
