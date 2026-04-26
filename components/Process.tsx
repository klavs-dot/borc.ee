const STEPS = [
  {
    n: "01",
    h: "Discovery & briefing",
    d: "Every study starts with a conversation about the decision it will inform. What choice is on the table? What does the organisation already know, and where does the knowledge stop? Who will consume the research, and in what form will they act on it? A good brief is half the research — we invest time here rather than rushing to fielding.",
  },
  {
    n: "02",
    h: "Research design",
    d: "Design translates the decision into a research architecture: sample plan, mode choice, instrument structure, analytical approach, and reporting format. Where the brief can be answered by a single study we design one; where it cannot, we design a sequence — often a qualitative exploration feeding a quantitative validation, or a quantitative landscape feeding targeted qualitative depth.",
  },
  {
    n: "03",
    h: "Instrument development",
    d: "Questionnaires and discussion guides are drafted against the hypotheses from the brief, reviewed with the client, and — for complex or sensitive instruments — cognitive-tested with a small number of target respondents before going live. Translation into Latvian, Lithuanian, Estonian and Russian is done with back-translation and local review, not single-pass machine translation.",
  },
  {
    n: "04",
    h: "Fieldwork",
    d: "Live data collection, with daily monitoring. We watch for response distributions that diverge from expectation, for speeders and straightliners, for drop-out patterns that suggest a problematic question. Fieldwork is not set-and-forget: if something is going wrong, catching it in hour eight is a lot cheaper than catching it in week three.",
  },
  {
    n: "05",
    h: "Data processing & analysis",
    d: "Cleaning, coding, weighting, analysis. Open-ended responses are coded to a frame developed against the actual data. Quantitative analysis pairs significance testing with effect sizes — a statistically significant but directionally tiny difference is usually not actionable. Analytical techniques (regression, factor, cluster, conjoint modelling) are run transparently, with assumptions documented.",
  },
  {
    n: "06",
    h: "Reporting & interpretation",
    d: "The report is built around the decisions the study was commissioned to inform, not around the order the questions were asked. Findings are stated plainly, implications are drawn, and open questions — the places where the research could not reach a confident conclusion — are named honestly rather than buried. Deliverables range from full report decks to summary memos to interactive dashboards, depending on what the audience will actually use.",
  },
  {
    n: "07",
    h: "Workshop & activation",
    d: "Research that stays in a deck delivers a fraction of its value. Where the engagement permits, we run an activation workshop: a working session with the people who will act on the findings, translating insight into decisions, priorities and next steps. The workshop is the moment at which the study converts from knowledge into behaviour inside the organisation.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              (08) Process
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-lg text-ink">
              A study is seven <span className="italic">stages</span>, not one.
            </h2>
            <p className="mt-8 text-ink-muted text-lg leading-relaxed max-w-3xl">
              How a research project is staged matters almost as much as what
              is measured. These are the stages every BORC engagement moves
              through — compressed for small studies, expanded for large ones,
              but rarely skipped.
            </p>
          </div>
        </header>

        <ol className="relative">
          {STEPS.map((s, i) => (
            <li
              key={s.n}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-12 border-t border-rule last:border-b"
            >
              <div className="md:col-span-2">
                <div className="font-display text-5xl md:text-6xl text-accent leading-none">
                  {s.n}
                </div>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-2xl md:text-3xl text-ink">
                  {s.h}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-ink-muted text-base leading-relaxed">
                  {s.d}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
