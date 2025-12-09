"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-16 h-16 rounded-full bg-gradient-to-r from-[#7BFF74] to-[#65F5FF] pointer-events-none z-10 transition-opacity duration-200 blur-md ${
        isVisible ? "opacity-70" : "opacity-0"
      } hidden md:block`}
      style={{
        transform: `translate(${position.x - 32}px, ${position.y - 32}px)`,
        transition: "transform 0.1s ease-out",
      }}
    />
  );
}