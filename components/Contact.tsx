export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 md:py-40 border-t border-rule relative overflow-hidden"
    >
      {/* Glow */}
      <div
        aria-hidden
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, #D96C3A 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-8">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              (11) Engage
            </span>
            <h2 className="font-display text-display-xl text-ink mt-6">
              Start a<br />
              <span className="italic text-accent">conversation.</span>
            </h2>
            <p className="mt-10 text-ink-muted text-lg leading-relaxed max-w-2xl">
              A short brief is all we need to start. The question you want
              answered, the decision it will inform, the markets in scope, the
              timeline you are working to. A thirty-minute conversation on
              Friday turns into a design proposal by the following Wednesday.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="border border-rule p-8 md:p-10 bg-bg-subtle">
              <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-3">
                New research briefs
              </div>
              <a
                href="mailto:hello@borc.ee"
                className="font-display text-3xl md:text-4xl text-ink hover:text-accent transition-colors break-all"
              >
                hello@borc.ee
              </a>
              <div className="mt-8 pt-6 border-t border-rule space-y-3">
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-1">
                    Partnerships
                  </div>
                  <a
                    href="mailto:partners@borc.ee"
                    className="text-sm text-ink hover:text-accent transition-colors"
                  >
                    partners@borc.ee
                  </a>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-1">
                    Panel enquiries
                  </div>
                  <a
                    href="mailto:panel@borc.ee"
                    className="text-sm text-ink hover:text-accent transition-colors"
                  >
                    panel@borc.ee
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 grid md:grid-cols-4 gap-8 md:gap-10 border-t border-rule pt-12">
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3">
              Tell us
            </div>
            <p className="text-ink text-sm leading-relaxed">
              The decision the research will inform.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3">
              The markets
            </div>
            <p className="text-ink text-sm leading-relaxed">
              Latvia, Lithuania, Estonia — one, two or all three.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3">
              The timing
            </div>
            <p className="text-ink text-sm leading-relaxed">
              When the decision needs to be made, not just when the report is due.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] tracking-widest uppercase text-accent mb-3">
              What you know
            </div>
            <p className="text-ink text-sm leading-relaxed">
              Prior research, hypotheses, constraints, prejudices — all useful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
