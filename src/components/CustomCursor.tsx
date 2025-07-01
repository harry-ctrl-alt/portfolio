"use client";

import React, { useEffect, useRef, useState } from "react";

const isTouchDevice = () => {
  return (
    typeof window !== "undefined" &&
    ("ontouchstart" in window || navigator.maxTouchPoints > 0)
  );
};

// Helper: check if an element is interactive
const isInteractive = (el: Element | null): boolean => {
  if (!el) return false;
  const tag = el.tagName.toLowerCase();
  if (["button", "a", "input", "textarea", "select", "label"].includes(tag)) return true;
  if (el.getAttribute("role") === "button") return true;
  if (el.classList.contains("cursor-pointer")) return true;
  return false;
};

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState(false); // Interactive state
  const requestRef = useRef<number | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTouchDevice()) {
      setVisible(false);
      return;
    }
    setVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      // Check if hovered element is interactive
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setActive(isInteractive(el));
    };
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Animate cursor position
  useEffect(() => {
    if (!visible) return;
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate3d(${position.x - 24}px, ${position.y - 24}px, 0)`;
    }
    if (dotRef.current) {
      dotRef.current.style.transform = `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`;
    }
  }, [position, visible]);

  if (!visible) return null;

  return (
    <>
      {/* Glowing trailing circle */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed z-[9999] left-0 top-0 w-12 h-12 rounded-full border-2 transition-all duration-75
          ${active ? "border-blue-400/90 bg-blue-400/20 scale-125 shadow-blue-400/60" : "border-blue-400/60 bg-blue-400/5 scale-100 shadow-blue-400/30"}
          shadow-2xl`}
        style={{
          opacity: visible ? 0.5 : 0,
          mixBlendMode: "lighten",
        }}
      />
      {/* Main dot */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed z-[9999] left-0 top-0 w-2 h-2 rounded-full transition-all duration-75
          ${active ? "bg-white scale-150 shadow-blue-400/80" : "bg-blue-400 scale-100 shadow-blue-400/40"}
          shadow transition-opacity`}
        style={{
          opacity: visible ? 1 : 0,
        }}
      />
    </>
  );
};

export default CustomCursor; 