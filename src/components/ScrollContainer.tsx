"use client";

import { type ReactNode, useEffect } from "react";
import CustomScrollbar from "./Customscrollbar";

interface ScrollContainerProps {
  children: ReactNode;
  sections?: string[];
}

export default function ScrollContainer({
  children,
  sections = [],
}: ScrollContainerProps) {
  // Apply smooth scrolling to the document
  useEffect(() => {
    // Add smooth scrolling to html element
    document.documentElement.style.scrollBehavior = "smooth";

    // Clean up
    return () => {
      document.documentElement.style.scrollBehavior = "";
    };
  }, []);

  return (
    <div className="relative">
      {/* Custom scrollbar component */}
      <CustomScrollbar sections={sections} />

      {/* Main content */}
      {children}
    </div>
  );
}
