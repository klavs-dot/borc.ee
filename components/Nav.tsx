"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#services", label: "Services" },
  { href: "#methodologies", label: "Methodologies" },
  { href: "#baltics", label: "Baltics" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? "bg-bg/80 backdrop-blur-xl border-b border-rule"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="group flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-accent group-hover:scale-125 transition-transform" />
          <span className="font-mono text-[11px] tracking-widest uppercase text-ink">
            BORC<span className="text-ink-dim">.ee</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-ink-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="text-[13px] px-4 py-2 rounded-full bg-accent text-bg hover:bg-accent-hover transition-colors font-medium"
          >
            Start a project
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-9 h-9 flex items-center justify-center"
          aria-label="Menu"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block w-5 h-px bg-ink transition-transform ${
                open ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-px bg-ink transition-transform ${
                open ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile */}
      {open && (
        <div className="md:hidden border-t border-rule bg-bg/95 backdrop-blur-xl">
          <div className="px-6 py-6 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-ink py-2"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-3 rounded-full bg-accent text-bg font-medium"
            >
              Start a project
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
