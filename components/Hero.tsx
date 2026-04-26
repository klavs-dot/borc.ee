"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const glow = glowRef.current;
    if (!section || !glow) return;

    // Respect users who prefer reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    // Skip on coarse pointers (touch devices) — no mouse to follow
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    // Initial position: just above the center, where it sits by default
    const rect = section.getBoundingClientRect();
    let targetX = rect.width / 2;
    let targetY = 200;
    let currentX = targetX;
    let currentY = targetY;

    let rafId = 0;
    let isInside = false;

    const onMove = (e: MouseEvent) => {
      const r = section.getBoundingClientRect();
      targetX = e.clientX - r.left;
      targetY = e.clientY - r.top;
      isInside = true;
    };

    const onLeave = () => {
      // Drift back to original "default" spot when cursor leaves
      const r = section.getBoundingClientRect();
      targetX = r.width / 2;
      targetY = 200;
      isInside = false;
    };

    const tick = () => {
      // Easing factor: lower = smoother / more lag
      const ease = isInside ? 0.08 : 0.04;
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      glow.style.transform = `translate3d(${currentX - 400}px, ${
        currentY - 400
      }px, 0)`;
      rafId = requestAnimationFrame(tick);
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    rafId = requestAnimationFrame(tick);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative pt-40 md:pt-56 pb-24 md:pb-40 overflow-hidden"
    >
      {/* Glow — follows cursor on desktop, static on touch / reduced motion */}
      <div
        ref={glowRef}
        aria-hidden
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl opacity-25 pointer-events-none will-change-transform"
        style={{
          background: "radial-gradient(circle, #D96C3A 0%, transparent 60%)",
          // Initial position fallback (centered top) for SSR / no-JS / reduced-motion
          transform: "translate3d(calc(50vw - 400px), -200px, 0)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div
          className="flex items-center gap-3 mb-10 reveal"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
            EST. in the Baltics
          </span>
          <span className="h-px flex-1 max-w-[120px] bg-rule" />
          <span className="font-mono text-[10px] tracking-widest uppercase text-ink-dim">
            LV · LT · EE
          </span>
        </div>

        <h1
          className="font-display text-display-xl text-ink reveal"
          style={{ animationDelay: "0.2s" }}
        >
          Consumer<br />
          and media<br />
          <span className="italic text-accent">research.</span>
        </h1>

        <div
          className="mt-12 md:mt-20 grid md:grid-cols-12 gap-10 md:gap-16 items-end reveal"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="md:col-span-5">
            <p className="font-mono text-[11px] tracking-widest uppercase text-ink-dim mb-4">
              Baltic Online Research Company
            </p>
            <p className="text-ink-muted text-lg leading-relaxed">
              A consumer and media research company serving organisations that
              need to understand audiences across Latvia, Lithuania and Estonia —
              three markets, three languages, one rigorous methodology.
            </p>
          </div>

          <div className="md:col-span-5 md:col-start-8">
            <div className="grid grid-cols-3 gap-6 border-t border-rule pt-8">
              <div>
                <div className="font-display text-3xl md:text-4xl text-ink">3</div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mt-2">
                  Markets
                </div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-ink">4</div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mt-2">
                  Languages
                </div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl text-ink">~6M</div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mt-2">
                  Consumers
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="mt-20 md:mt-28 flex flex-wrap items-center gap-5 reveal"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#contact"
            className="px-6 py-3.5 rounded-full bg-accent text-bg font-medium text-sm hover:bg-accent-hover transition-colors"
          >
            Start a project
          </a>
          <a
            href="#services"
            className="px-6 py-3.5 rounded-full border border-rule text-ink text-sm hover:border-ink-muted transition-colors"
          >
            Explore capabilities
          </a>
        </div>
      </div>
    </section>
  );
}
