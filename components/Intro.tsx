export default function Intro() {
  return (
    <section className="py-24 md:py-40 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              (01) The remit
            </span>
          </div>
          <div className="md:col-span-9">
            <p className="font-display text-display-md text-ink">
              We turn consumer behaviour, media consumption and brand perception
              into decisions organisations can act on — in markets where most
              panels are too shallow, most samples too small, and most
              methodologies imported from elsewhere.
            </p>
            <div className="mt-16 grid md:grid-cols-3 gap-10 md:gap-16 border-t border-rule pt-12">
              <div>
                <h3 className="font-mono text-[11px] tracking-widest uppercase text-ink mb-4">
                  What we measure
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Awareness and consideration funnels. Brand equity and image
                  attributes. Price elasticity. Satisfaction and loyalty.
                  Advertising recall and diagnostics. Media reach, frequency
                  and attention. Purchase drivers and barriers. Segmentation
                  and typology. Concept and product preference.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-[11px] tracking-widest uppercase text-ink mb-4">
                  How we measure
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Online quantitative (CAWI) as the backbone, supplemented with
                  CATI for harder-to-reach audiences and CAPI for specific
                  geographies or populations. Qualitative designs using focus
                  groups, in-depth interviews, ethnography and asynchronous
                  online communities. Analytical techniques from conjoint and
                  MaxDiff through to latent class segmentation.
                </p>
              </div>
              <div>
                <h3 className="font-mono text-[11px] tracking-widest uppercase text-ink mb-4">
                  Where we work
                </h3>
                <p className="text-ink-muted text-sm leading-relaxed">
                  Latvia, Lithuania and Estonia — the three Baltic EU member
                  states. We field in Latvian, Lithuanian, Estonian and
                  Russian, with English reporting. Cross-Baltic studies are
                  designed to be genuinely comparable: shared instruments,
                  harmonised coding frames and synchronous fieldwork windows.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
