const MODES = [
  {
    code: "CAWI",
    name: "Computer-Assisted Web Interviewing",
    body: "Online self-completion surveys, delivered to a recruited panel or to a client's own customer list. CAWI is the default mode for most consumer research in the Baltics in 2026 — it is fast, cost-efficient, supports rich media and complex logic, and reaches the majority of the adult population. Quality is managed through pre-screening, trap questions, open-ended response coding, speeder and straightliner detection, and device fingerprinting.",
    best: "Everyday consumer research, high-volume tracking, long instruments, media-rich stimuli.",
  },
  {
    code: "CATI",
    name: "Computer-Assisted Telephone Interviewing",
    body: "Telephone interviews conducted by trained interviewers reading from a scripted instrument. CATI reaches audiences who are under-represented online — typically older demographics, certain rural populations, and some B2B audiences. Call centres use predictive diallers, recorded calls for quality assurance, and full supervisor monitoring. The mode is slower and more expensive than CAWI, but remains essential for nationally representative samples in certain target groups.",
    best: "Older demographics, politically sensitive topics, B2B decision-makers, short-to-medium instruments.",
  },
  {
    code: "CAPI",
    name: "Computer-Assisted Personal Interviewing",
    body: "Face-to-face interviews conducted on tablets, typically in respondents' homes or at controlled central locations. CAPI is the gold standard for nationally representative samples, for studies requiring physical product exposure, and for audiences where trust needs to be built before disclosure. The mode is costly and logistically intensive, but delivers data quality that other modes cannot match when stimuli must be controlled or observed behaviour must be captured.",
    best: "Product testing with physical stimuli, nationally representative samples, populations without reliable internet access, studies needing observation.",
  },
  {
    code: "MOBI",
    name: "Mobile-first surveys",
    body: "Instruments designed specifically for the mobile form factor, typically 3–7 minutes in length and using interaction patterns native to smartphone usage: sliders, swipes, image grids, short-form video. Mobile-first is particularly strong for in-the-moment measurement, location-triggered surveys, and audiences where the smartphone is the primary or only connected device.",
    best: "Younger audiences, location or moment-triggered research, short tracking pulses, diary-style studies.",
  },
];

const ANALYTICS = [
  {
    name: "Choice-Based Conjoint (CBC)",
    body: "Respondents make a series of choices between product profiles that vary across attributes. The analysis derives the utility respondents attach to each attribute level, enabling market simulation and 'what-if' pricing.",
  },
  {
    name: "Adaptive Conjoint (ACA)",
    body: "An interview-like conjoint design that adapts the questions shown to each respondent based on their previous answers. Efficient when many attributes need to be measured.",
  },
  {
    name: "MaxDiff scaling",
    body: "Respondents identify the most and least important (or appealing, or preferred) item from small sets. Produces a clean, ratio-level ranking free of scale-use bias — particularly strong for prioritising feature lists or message testing.",
  },
  {
    name: "Van Westendorp Price Sensitivity Meter",
    body: "Four questions about price thresholds (too cheap, cheap, expensive, too expensive) are combined into four intersecting curves that reveal an acceptable range and optimal price point.",
  },
  {
    name: "Gabor-Granger",
    body: "Respondents are shown a price and asked purchase intent, repeated at multiple prices. Produces a direct demand curve and a revenue-maximising price.",
  },
  {
    name: "TURF analysis",
    body: "Total Unduplicated Reach and Frequency. Used to build product ranges, flavour line-ups, or message portfolios that maximise cumulative reach across the target.",
  },
  {
    name: "Key Driver Analysis",
    body: "Regression-based identification of which attributes actually drive a dependent outcome — satisfaction, loyalty, intent. Separates what respondents claim is important from what statistically predicts behaviour.",
  },
  {
    name: "Latent Class Segmentation",
    body: "A model-based alternative to k-means clustering. Identifies latent groups whose answers to attitudinal batteries follow a distinct pattern, with probabilistic membership rather than hard assignment.",
  },
];

export default function QuantMethods() {
  return (
    <section
      id="methodologies"
      className="py-24 md:py-32 border-t border-rule bg-bg-subtle"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              (03) Quantitative
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-lg text-ink">
              Quantitative <span className="italic">methodologies</span>.
            </h2>
            <p className="mt-8 text-ink-muted text-lg leading-relaxed max-w-3xl">
              Mode choice is not neutral. The decision to field online, on the
              phone, or in person shapes who is reached, what can be shown, how
              long the instrument can run, and how the data must be weighted.
              We design studies mode-first — picking the right field approach
              before the questionnaire is drafted.
            </p>
          </div>
        </header>

        {/* Modes */}
        <div className="mb-24">
          <h3 className="font-mono text-[11px] tracking-widest uppercase text-ink mb-8">
            Field modes
          </h3>
          <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule">
            {MODES.map((m) => (
              <div key={m.code} className="bg-bg-subtle p-8 md:p-10">
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-mono text-xs tracking-widest text-accent">
                    {m.code}
                  </span>
                  <h4 className="font-display text-2xl text-ink">{m.name}</h4>
                </div>
                <p className="text-ink-muted text-sm leading-relaxed mb-6">
                  {m.body}
                </p>
                <div className="pt-4 border-t border-rule">
                  <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-2">
                    Best for
                  </div>
                  <div className="text-[13px] text-ink-muted leading-relaxed">
                    {m.best}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Analytics */}
        <div>
          <h3 className="font-mono text-[11px] tracking-widest uppercase text-ink mb-8">
            Analytical techniques
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-rule border border-rule">
            {ANALYTICS.map((a) => (
              <div key={a.name} className="bg-bg-subtle p-6 md:p-8">
                <h4 className="text-ink font-medium text-sm mb-3 leading-snug">
                  {a.name}
                </h4>
                <p className="text-ink-muted text-[13px] leading-relaxed">
                  {a.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
