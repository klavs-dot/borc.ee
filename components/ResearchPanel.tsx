const PRINCIPLES = [
  {
    h: "Recruitment",
    b: "Panel recruitment is blended across source types — online advertising, partnership-based referral, and targeted recruitment for specialist profiles. No single source is allowed to dominate, since monoculture in recruitment produces monoculture in answers. Every new panellist goes through double opt-in consent, profile capture, and an initial calibration survey before being released to live fieldwork.",
  },
  {
    h: "Profile depth",
    b: "Panellists are profiled at sign-up on demographics, household composition, employment, and a set of category-level questions that enable targeted invitation rather than mass broadcast. Profile data is refreshed on a rolling basis — panellist life circumstances change, and a panel that never re-profiles drifts silently away from accuracy.",
  },
  {
    h: "Quality controls at fielding",
    b: "Every live survey runs a layered quality control stack: attention checks, trap questions with obvious right answers, speeder detection (respondents completing in less than a third of median time), straightliner detection (identical answers across a grid), open-end response quality review, device fingerprinting to catch multi-accounts, and IP geolocation to flag out-of-market respondents. Failures remove the respondent from the dataset before weighting.",
  },
  {
    h: "Weighting and representativeness",
    b: "Data is weighted to national census targets on age, gender, region and — where material — education and language group. We document weighting schemes transparently and, where effective sample size is materially reduced by weighting, we report it honestly rather than hiding it in a footnote. Weighting cannot fix a bad sample, and we resist the temptation to treat it as though it could.",
  },
  {
    h: "Panel hygiene",
    b: "Active panel size is managed. Panellists are rested between studies to avoid response fatigue, inactive panellists are pruned, and participation frequency is capped — both to protect data quality and to respect the panellist as a human being rather than a source of data. Panel incentives are benchmarked to local market norms, paid reliably, and sized not to induce professional-respondent behaviour.",
  },
  {
    h: "Hard-to-reach audiences",
    b: "Some audiences are under-represented on any online panel — older demographics, certain rural populations, low-income households, and some minority language groups. For studies requiring full national representativeness in those categories, we blend online panel with CATI, CAPI, or river sampling, and design the analysis to reconcile mode differences.",
  },
];

export default function ResearchPanel() {
  return (
    <section className="py-24 md:py-32 border-t border-rule bg-bg-subtle">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              (07) Panel & data quality
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-lg text-ink">
              Sample quality is the <span className="italic">silent</span> variable.
            </h2>
            <p className="mt-8 text-ink-muted text-lg leading-relaxed max-w-3xl">
              Two otherwise-identical studies can produce two different answers
              purely because of how the sample was recruited, profiled,
              incentivised and cleaned. Methodological choice usually dominates
              methodology discussions; panel quality sits underneath, quiet,
              and moves the numbers more than most buyers of research realise.
              These are the principles that govern how we run a panel and
              source the sample behind every study.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {PRINCIPLES.map((p, i) => (
            <div key={p.h} className="bg-bg-subtle p-8 md:p-10">
              <div className="font-mono text-[11px] tracking-widest text-accent mb-5">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="font-display text-2xl text-ink mb-4">{p.h}</h3>
              <p className="text-ink-muted text-sm leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
