import React, { useState, useEffect } from "react";

const Loading: React.FC = () => {
  const [opacity, setOpacity] = useState<number>(1);

  useEffect(() => {
    let intervalId: ReturnType<typeof setInterval>;

    const startPulsing = (): void => {
      intervalId = setInterval(() => {
        setOpacity((prev: number) => (prev === 1 ? 0.4 : 1));
      }, 800);
    };

    startPulsing();

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[rgb(27, 27, 27)]">
      <div
        style={{
          opacity: opacity,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        <h1 className="text-7xl font-bold text-white mb-4 normal-text">
          silkywriters
        </h1>
      </div>
      <div className="mt-6">
        <p className="text-white text-lg font-medium">Loading...</p>
        <div className="flex justify-center mt-2">
          <div className="flex space-x-2">
            <div
              className="w-2 h-2 bg-white/70 rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="w-2 h-2 bg-white/70 rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            ></div>
            <div
              className="w-2 h-2 bg-white/70 rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
