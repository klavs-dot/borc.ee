export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-rule py-16 md:py-24 bg-bg-subtle">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Large wordmark */}
        <div className="border-b border-rule pb-12 mb-12">
          <div className="font-display text-[18vw] md:text-[14vw] leading-[0.85] text-ink tracking-tightest">
            BORC<span className="text-accent">.</span>
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-4 font-mono text-[10px] tracking-widest uppercase text-ink-dim">
            <span>Baltic Online Research Company</span>
            <span className="text-rule">◆</span>
            <span>EST. Baltics</span>
            <span className="text-rule">◆</span>
            <span>LV · LT · EE</span>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="font-mono text-[11px] tracking-widest uppercase text-ink mb-4">
              Baltic Online Research Company
            </div>
            <p className="text-ink-muted text-sm leading-relaxed max-w-sm">
              Consumer and media research for organisations that need to
              understand audiences across Latvia, Lithuania and Estonia.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-4">
              Services
            </div>
            <ul className="space-y-2">
              <li><a href="#services" className="text-sm text-ink-muted hover:text-ink">Segmentation</a></li>
              <li><a href="#services" className="text-sm text-ink-muted hover:text-ink">Brand tracking</a></li>
              <li><a href="#services" className="text-sm text-ink-muted hover:text-ink">NPS &amp; CX</a></li>
              <li><a href="#services" className="text-sm text-ink-muted hover:text-ink">Product testing</a></li>
              <li><a href="#services" className="text-sm text-ink-muted hover:text-ink">Pricing</a></li>
              <li><a href="#services" className="text-sm text-ink-muted hover:text-ink">Ad research</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-4">
              Methods
            </div>
            <ul className="space-y-2">
              <li><a href="#methodologies" className="text-sm text-ink-muted hover:text-ink">CAWI</a></li>
              <li><a href="#methodologies" className="text-sm text-ink-muted hover:text-ink">CATI</a></li>
              <li><a href="#methodologies" className="text-sm text-ink-muted hover:text-ink">CAPI</a></li>
              <li><a href="#methodologies" className="text-sm text-ink-muted hover:text-ink">Focus groups</a></li>
              <li><a href="#methodologies" className="text-sm text-ink-muted hover:text-ink">IDIs</a></li>
              <li><a href="#methodologies" className="text-sm text-ink-muted hover:text-ink">Conjoint</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-4">
              Markets
            </div>
            <ul className="space-y-2">
              <li><a href="#baltics" className="text-sm text-ink-muted hover:text-ink">Latvia</a></li>
              <li><a href="#baltics" className="text-sm text-ink-muted hover:text-ink">Lithuania</a></li>
              <li><a href="#baltics" className="text-sm text-ink-muted hover:text-ink">Estonia</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-4">
              Contact
            </div>
            <ul className="space-y-2">
              <li><a href="mailto:hello@borc.ee" className="text-sm text-ink-muted hover:text-ink">hello@borc.ee</a></li>
              <li><a href="mailto:partners@borc.ee" className="text-sm text-ink-muted hover:text-ink">partners@borc.ee</a></li>
              <li><a href="mailto:panel@borc.ee" className="text-sm text-ink-muted hover:text-ink">panel@borc.ee</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-rule flex flex-col md:flex-row justify-between gap-4 font-mono text-[11px] tracking-wider text-ink-dim">
          <div>© {year} Baltic Online Research Company. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-ink">Privacy</a>
            <a href="#" className="hover:text-ink">Cookie policy</a>
            <a href="#" className="hover:text-ink">Terms</a>
            <a href="#" className="hover:text-ink">ESOMAR code</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
