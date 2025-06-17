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
import ResearchProjectDisplay from "./components/ResearchProjectDisplay.tsx";
import WomenSeclusion from "./components/WomenSeclusion.tsx";
import AfricanIndependencePolitics from "./components/AfricanIndependencePolitics.tsx";
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
    element: (
      <Suspense fallback={<Loading />}>
        <Work />,
      </Suspense>
    ),
  },
  {
    path: "/work/rule-of-law",
    element: (
      <Suspense fallback={<Loading />}>
        <ResearchProjectDisplay />
      </Suspense>
    ),
  },
  {
    path: "/work/women-seclusion",
    element: (
      <Suspense fallback={<Loading />}>
        <WomenSeclusion />
      </Suspense>
    ),
  },
  {
    path: "/work/african-independence",
    element: (
      <Suspense fallback={<Loading />}>
        <AfricanIndependencePolitics />
      </Suspense>
    ),
  },

  {
    path: "/about",
    element: (
      <Suspense fallback={<Loading />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: "/contact",
    element: (
      <Suspense fallback={<Loading />}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: "/services",
    element: (
      <Suspense fallback={<Loading />}>
        <Serivices />
      </Suspense>
    ),
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
