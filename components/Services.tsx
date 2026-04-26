const SERVICES = [
  {
    n: "01",
    title: "Market Segmentation",
    blurb:
      "Dividing a market into meaningful groups based on demographics, attitudes, needs, behaviours and lifestyle.",
    long: "Segmentation answers the foundational question: who, inside a market, should we actually be talking to? A well-built segmentation gives every part of an organisation — product, brand, media, commercial — a shared vocabulary for describing the people they serve. The deliverable is not a slide deck; it is a typology, a set of personas grounded in real data, a sizing of each segment in the market, and an operational way to identify segment members in CRM data or survey flags.",
    methods: ["Latent class analysis", "K-means / hierarchical cluster", "Factor analysis on attitudinal batteries", "Typing tool development", "Segment sizing and profiling"],
  },
  {
    n: "02",
    title: "Brand Research & Tracking",
    blurb:
      "How well is the brand recognised, how is it perceived, how often is it chosen — tracked over time.",
    long: "Brand tracking is the continuous measurement of a brand's health in the minds of its target audience. A tracker typically follows the brand funnel from awareness through consideration, preference and purchase, pairs it with an image grid of attributes relevant to the category, and reports equity as a composite metric. The value of a tracker compounds: the second wave shows movement, the fourth wave shows patterns, the eighth wave shows whether strategy is working.",
    methods: ["Spontaneous and aided awareness", "Brand funnel (awareness → consideration → preference → purchase)", "Image attribute grids", "Brand equity indices", "Wave-on-wave trend analysis", "Competitive benchmarking"],
  },
  {
    n: "03",
    title: "Customer Satisfaction & Loyalty",
    blurb:
      "NPS, CSAT, CES and loyalty drivers — linked to behaviour, not just declared intent.",
    long: "Customer experience measurement has matured beyond the single satisfaction score. A proper CX programme distinguishes between relational measurement (how do you feel about us overall) and transactional measurement (how was that specific interaction). It pairs declared metrics — NPS, CSAT, CES — with driver analysis to understand what actually moves the score, and where possible links the survey data back to behavioural outcomes in the client's own systems.",
    methods: ["Net Promoter Score (NPS)", "Customer Satisfaction (CSAT)", "Customer Effort Score (CES)", "Relational and transactional programmes", "Driver analysis via regression", "Closed-loop feedback design"],
  },
  {
    n: "04",
    title: "Product Testing",
    blurb:
      "Testing products before launch or iterations of existing products, in controlled or natural conditions.",
    long: "Product testing sits at the border between R&D and marketing. Done well, it protects organisations from launching things the market will not embrace and from killing things that would have worked with adjustment. Designs range from blind monadic tests where each respondent sees only one variant, through sequential monadic where respondents see several, to paired comparison. Fieldwork can happen in Central Location Tests (CLTs) with controlled conditions, or in Home-Use Tests (HUTs) where realism matters more than control.",
    methods: ["Monadic and sequential monadic designs", "Paired comparison", "Central Location Tests (CLT)", "Home-Use Tests (HUT)", "Blind vs. branded testing", "Concept, product and packaging iteration"],
  },
  {
    n: "05",
    title: "Price Sensitivity Analysis",
    blurb:
      "How much are buyers willing to pay, and what happens to demand when the price moves.",
    long: "Pricing is one of the most leveraged decisions an organisation makes — and one of the most frequently made on gut feel. Quantitative pricing research replaces guesswork with measured willingness to pay, optimal price points, and demand curves at different price levels. Different tools answer different questions: the Van Westendorp Price Sensitivity Meter locates acceptable price ranges; Gabor-Granger measures demand at specific price points; conjoint analysis places price alongside other product attributes to reveal trade-offs.",
    methods: ["Van Westendorp Price Sensitivity Meter", "Gabor-Granger", "Choice-Based Conjoint (CBC)", "Brand-Price Trade-Off (BPTO)", "Price elasticity modelling"],
  },
  {
    n: "06",
    title: "Qualitative Research",
    blurb:
      "Focus groups and in-depth interviews — understanding the 'why' behind the numbers.",
    long: "Qualitative research is the discipline of listening carefully to small numbers of people in enough depth to understand the motivations, language, frames and tensions that quantitative instruments only register as numbers. It is the right tool when the question is exploratory, when the category language is unfamiliar, when emotional drivers need unpacking, or when a concept needs to be stress-tested before going wide. Properly designed, it generates hypotheses that quantitative work can then confirm at scale.",
    methods: ["Focus groups (in-person and online)", "In-depth interviews (IDIs)", "Ethnographic and observational research", "Online bulletin-board communities", "Diary studies", "Shop-alongs and usability sessions"],
  },
  {
    n: "07",
    title: "Quantitative Research",
    blurb:
      "Surveys at scale — understanding 'how many' with statistical confidence.",
    long: "Quantitative research is the measurement discipline: large samples, structured instruments, statistical inference. The purpose is not to replace human judgement but to size it — to tell decision-makers whether a pattern they have observed qualitatively exists at meaningful scale, or whether it is an artefact of the loudest voices in the room. A well-run quantitative study begins with sample design, proceeds through rigorous instrument development and cognitive testing, and ends with analysis that respects both significance and effect size.",
    methods: ["Representative online panel (CAWI)", "Telephone interviewing (CATI)", "Personal interviewing (CAPI)", "Mobile-first and push-to-web surveys", "River sampling for hard-to-reach audiences", "Weighting to census and demographic targets"],
  },
  {
    n: "08",
    title: "Advertising Research",
    blurb:
      "Pre-testing creative before launch; post-testing campaign impact after it runs.",
    long: "Advertising research works on both sides of the launch line. Pre-testing — typically done on animatics, key frames, or finished-film in low resolution — catches creative that will not land before the media spend is committed. Post-testing measures the campaign in market: has it been seen, has it been remembered correctly, has it moved the attitudes and behaviours it was briefed against. Diagnostics go further, identifying which creative element or message is doing the work and which is being ignored.",
    methods: ["Pre-test: concept, animatic, finished creative", "Post-test: recall, recognition, brand linkage", "Campaign impact on awareness and consideration", "Creative diagnostics", "Multi-wave in-market tracking"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="grid md:grid-cols-12 gap-10 mb-20 md:mb-28">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              (02) Services
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-lg text-ink">
              Eight core capabilities, one <span className="italic">integrated</span> practice.
            </h2>
            <p className="mt-8 text-ink-muted text-lg leading-relaxed max-w-3xl">
              Every brief is different. Most projects combine two or three of
              the capabilities below — segmentation paired with brand tracking,
              price sensitivity alongside product testing, qualitative
              exploration feeding a quantitative validation. The strength of a
              full-service research partner is not breadth in isolation, it is
              the ability to design studies where one method sharpens the next.
            </p>
          </div>
        </header>

        <div className="divide-y divide-rule border-y border-rule">
          {SERVICES.map((s) => (
            <article
              key={s.n}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 group"
            >
              <div className="md:col-span-1">
                <span className="font-mono text-[11px] tracking-widest text-accent">
                  {s.n}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-3xl md:text-4xl text-ink leading-tight">
                  {s.title}
                </h3>
                <p className="mt-4 text-ink-muted text-sm leading-relaxed">
                  {s.blurb}
                </p>
              </div>
              <div className="md:col-span-5">
                <p className="text-ink-muted text-base leading-relaxed">
                  {s.long}
                </p>
              </div>
              <div className="md:col-span-2">
                <h4 className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-3">
                  Methods
                </h4>
                <ul className="space-y-2">
                  {s.methods.map((m) => (
                    <li
                      key={m}
                      className="text-[13px] text-ink-muted leading-snug"
                    >
                      <span className="text-accent mr-2">—</span>
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
