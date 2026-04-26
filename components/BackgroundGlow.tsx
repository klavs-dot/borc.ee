"use client";

import { useEffect, useRef } from "react";

export default function BackgroundGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    // Respect users who prefer reduced motion — static center
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) {
      glow.style.transform = `translate3d(${
        window.innerWidth / 2 - 400
      }px, ${window.innerHeight / 2 - 400}px, 0)`;
      return;
    }

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let rafId = 0;

    // ---- DESKTOP: follow mouse ----
    if (!isCoarse) {
      const onMove = (e: MouseEvent) => {
        targetX = e.clientX;
        targetY = e.clientY;
      };

      const tick = () => {
        currentX += (targetX - currentX) * 0.06;
        currentY += (targetY - currentY) * 0.06;
        glow.style.transform = `translate3d(${currentX - 400}px, ${
          currentY - 400
        }px, 0)`;
        rafId = requestAnimationFrame(tick);
      };

      window.addEventListener("mousemove", onMove);
      rafId = requestAnimationFrame(tick);

      return () => {
        window.removeEventListener("mousemove", onMove);
        cancelAnimationFrame(rafId);
      };
    }

    // ---- MOBILE / TOUCH: organic Lissajous-style drift ----
    // Two sine waves with different periods → never repeats exactly the same path
    const startTime = performance.now();
    const periodX = 22000; // 22s horizontal cycle
    const periodY = 17000; // 17s vertical cycle (coprime-ish for organic feel)

    const drift = (now: number) => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const t = now - startTime;

      // Range: 20% to 80% of viewport (keeps glow on-screen but moving)
      const x = w * (0.5 + 0.3 * Math.sin((t / periodX) * Math.PI * 2));
      const y = h * (0.5 + 0.25 * Math.sin((t / periodY) * Math.PI * 2));

      glow.style.transform = `translate3d(${x - 400}px, ${y - 400}px, 0)`;
      rafId = requestAnimationFrame(drift);
    };

    rafId = requestAnimationFrame(drift);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden
      className="fixed top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-25 pointer-events-none will-change-transform z-0"
      style={{
        background: "radial-gradient(circle, #D96C3A 0%, transparent 60%)",
        transform: "translate3d(calc(50vw - 400px), calc(50vh - 400px), 0)",
      }}
    />
  );
}
