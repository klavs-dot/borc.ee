const CAPABILITIES = [
  {
    label: "Brand tracking architecture",
    body: "A brand tracker is built around the brand funnel — spontaneous awareness, aided awareness, familiarity, consideration, preference, purchase, repeat — paired with an image grid of attributes specific to the category. Standard frameworks include Millward Brown's Brand Dynamics pyramid, the Ehrenberg-Bass approach focusing on mental and physical availability, and the Keller Customer-Based Brand Equity model. We design trackers to carry forward across waves: question wording is locked, sampling is held constant, and weighting schemes are documented so that movement between waves reflects reality, not methodology.",
  },
  {
    label: "Segmentation methodology",
    body: "A segmentation begins with the strategic question — what decisions is this segmentation going to support? — and works backwards from there. Needs-based and attitudinal segmentations travel best across categories and countries; behavioural and demographic segmentations are more operational but often less discriminating. Typical sample sizes for a robust segmentation are 1,500 to 3,000 per market. The output includes segment profiles, sizing, a typing tool (a short battery of questions that can assign any respondent to a segment), and activation guidance for each segment.",
  },
  {
    label: "NPS and CX frameworks",
    body: "The Net Promoter Score, at 11 points from 0 to 10 with a standard 'likelihood to recommend' wording, is the industry's most widely used loyalty metric. NPS is best treated as a tracking figure paired with open-ended why questions, driver analysis, and a closed-loop process that routes detractor feedback to the teams that can act on it. We also deploy CSAT (Customer Satisfaction) for transactional measurement and CES (Customer Effort Score) for operational friction — the three metrics answer different questions and are often most informative together.",
  },
  {
    label: "Advertising pre- and post-test",
    body: "Pre-testing catches the campaign before the media spend is committed. Animatics, key frames, and finished-film are tested against category benchmarks for attention, comprehension, likeability, and persuasion, with diagnostic questions identifying which scene, message, or brand cue is doing the work. Post-testing measures the campaign in market: proven recall, branded recall, message take-out, and — for multi-wave trackers — the campaign's effect on brand health metrics. Creative diagnostics, moment-by-moment attention curves, and multi-format testing round out the offer.",
  },
  {
    label: "Product concept and optimisation",
    body: "Product testing is staged across the development lifecycle. Early-stage concept screens reduce a long list to a shortlist; detailed concept tests compare finalists on purchase intent, uniqueness, believability, and fit with need; post-prototype product tests capture experience with the physical product in Central Location Tests or Home-Use Tests; and package testing isolates the role of packaging from the product itself. Designs choose between monadic (one variant per respondent, cleaner read, bigger sample) and sequential monadic or paired comparison (direct comparison, smaller sample, risk of order effects).",
  },
  {
    label: "Media and advertising effectiveness",
    body: "Media research goes beyond reach and frequency. We measure channel consumption by time of day and context, attention paid to different formats, trust in different sources, and — in the advertising effectiveness space — the causal link from media exposure to behavioural outcomes. For digital-native campaigns this involves browser-based exposure measurement and matched control designs; for traditional campaigns it involves survey-based exposure recall paired with in-market behavioural data.",
  },
  {
    label: "Price sensitivity and demand modelling",
    body: "Price research combines direct methods (Van Westendorp, Gabor-Granger) with indirect, trade-off methods (choice-based conjoint, brand-price trade-off). Direct methods are fast and well-understood; indirect methods reveal how price interacts with brand, features, and competition. The deliverable is usually a price simulator — an interactive model the client can use to test 'what if we price at X, what happens to share and revenue across scenarios'.",
  },
  {
    label: "Youth, under-18 and sensitive audience research",
    body: "Research with under-18 audiences, with respondents in vulnerable circumstances, or on sensitive topics is designed under elevated ethical standards: parental consent for minors, carefully constructed instruments that avoid harm, safeguarding protocols for interviewers, and clear data-minimisation in reporting. We follow the ICC/ESOMAR International Code principles on interviewing children and young people and the GDPR-aligned guidance for special category processing.",
  },
];

export default function SpecializedCapabilities() {
  return (
    <section className="py-24 md:py-32 border-t border-rule bg-bg-subtle">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              (05) Capabilities
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-lg text-ink">
              Specialised <span className="italic">capabilities</span>.
            </h2>
            <p className="mt-8 text-ink-muted text-lg leading-relaxed max-w-3xl">
              Beyond the core service categories, these are the specialised
              practice areas where the research design matters most — where
              methodology choice has real consequences for the decisions the
              study is meant to inform.
            </p>
          </div>
        </header>

        <div className="space-y-0 divide-y divide-rule border-y border-rule">
          {CAPABILITIES.map((c, i) => (
            <article
              key={c.label}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14"
            >
              <div className="md:col-span-1">
                <span className="font-mono text-[11px] tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl text-ink leading-tight">
                  {c.label}
                </h3>
              </div>
              <div className="md:col-span-7">
                <p className="text-ink-muted text-base leading-relaxed">
                  {c.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
