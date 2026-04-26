"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "How long does a typical research project take?",
    a: "A simple single-market quantitative study — sample of 500 to 1,000, 10-minute instrument — typically runs 3 to 5 weeks from brief to final report. Cross-Baltic studies add roughly a week to accommodate translation, harmonised fielding windows, and comparative analysis. Qualitative studies run 4 to 8 weeks depending on recruitment difficulty and sample size. Segmentation and conjoint studies, which require more design and analytical work, typically run 6 to 10 weeks. Trackers run continuously, with wave-on-wave reporting cadence defined at programme kickoff.",
  },
  {
    q: "What sample sizes do you work with?",
    a: "Sample size is driven by the analytical cuts the study needs to support, not by a default number. For a national representative reading with headline results, 500 to 1,000 per market is typical. For sub-group analysis — segments, age cohorts, brand users — sample is sized so that the smallest cell of interest has a usable base of at least 80 to 100 respondents. Segmentation studies typically require 1,500 to 3,000 per market. B2B and specialist-audience studies may operate with much smaller samples where the population itself is small; in those cases the analytical approach adapts accordingly.",
  },
  {
    q: "Can you field in Russian across all three Baltic markets?",
    a: "Yes. Russian-language fieldwork is a standard strand in Latvia and Estonia, where Russian-speaking populations are a significant share of the consumer base, and available in Lithuania where the category requires it. Russian-language instruments are designed with local linguistic review rather than generic Russian, and analysis reports the Russian-speaking strand separately where sample sizes permit.",
  },
  {
    q: "Do you run trackers or only one-off studies?",
    a: "Both. A significant share of research value comes from measurement repeated over time — brand trackers, customer experience programmes, media audience trackers, category trackers. We design trackers with wave-on-wave comparability as the first-order constraint: instrument wording is locked, sampling is held constant, weighting schemes are documented, and changes that need to be made between waves are flagged transparently rather than absorbed silently into the data.",
  },
  {
    q: "Can you work with our existing customer or panel data?",
    a: "Yes. Many studies combine primary research with data the client already holds — CRM records, transactional data, digital behavioural data, past survey responses. Where GDPR permits and respondents consent, survey data can be matched back to behavioural data to test whether declared intent actually predicts behaviour. This is particularly valuable in loyalty programme design, churn diagnostics, and channel effectiveness work.",
  },
  {
    q: "How do you handle sensitive categories — health, finance, politics, alcohol?",
    a: "Sensitive categories are handled with elevated design care. Instruments avoid leading or judgemental wording. Respondent anonymity is emphasised more explicitly than in neutral categories. For politically sensitive research we pay particular attention to social desirability bias — the tendency of respondents to give the answer they think is acceptable rather than the answer that reflects their actual view — and design indirect measures where appropriate. For health and finance categories we operate under GDPR special category processing rules and elevated data security standards.",
  },
  {
    q: "What do your reports look like?",
    a: "Report format is chosen against how the organisation will consume the findings. Standard deliverables include full report decks (40 to 100 slides for major studies), executive summary memos (10 to 15 pages), dashboards for tracker programmes, verbatim libraries for qualitative work, video reels of key moments, and interactive simulators for conjoint and pricing studies. Most engagements include a presentation session with the research audience, and where the engagement warrants it, an activation workshop to translate findings into decisions.",
  },
  {
    q: "Do you do B2B research?",
    a: "Yes. B2B research in the Baltics operates under specific constraints — smaller universes, decision-making units with multiple stakeholders, harder-to-reach respondents, and smaller effective sample sizes. Designs rely more heavily on in-depth interviewing and on targeted CATI/CAPI recruitment than on online panels. Analytical interpretation leans on pattern-reading across smaller samples rather than statistical inference at scale.",
  },
  {
    q: "How much does research cost?",
    a: "Research pricing scales with sample size, fielding mode, instrument length, number of markets, analytical complexity, and reporting depth. We provide transparent line-item costing against every brief, so buyers can see what is driving cost and make informed trade-offs between scope and budget. Where a research question can be answered with a smaller or less complex design, we say so — resisting the agency habit of scope-expansion where it does not serve the decision the study is meant to inform.",
  },
  {
    q: "Do you work with agencies and research buyers outside the Baltics?",
    a: "Yes. A significant share of our work is delivered in partnership with global and European research agencies who need rigorous local execution in the Baltic markets. We operate comfortably as a fieldwork partner, as a co-designer, or as a full-service lead, and we are transparent about the role we are playing on any given engagement.",
  },
  {
    q: "Can you run pan-European or pan-regional studies?",
    a: "Our primary geographic focus is the three Baltic markets. For studies requiring broader European coverage we work in partnership with established research networks, leading the Baltic strand and coordinating cross-market harmonisation where our clients run the programme directly. The Baltics sit naturally alongside Nordic and Central-Eastern European strands in many pan-regional research designs.",
  },
  {
    q: "What technologies and platforms do you use?",
    a: "Standard industry survey platforms for CAWI fielding, video conferencing and specialised online community platforms for qualitative, analytical software (SPSS, R, Python) for statistical analysis, specialised packages (Sawtooth) for conjoint and MaxDiff, and BI tools for tracker dashboards. Platform choice is driven by the demands of the study, not by a single internal preference.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 md:py-32 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              (10) Questions
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-lg text-ink">
              Frequently <span className="italic">asked</span>.
            </h2>
          </div>
        </header>

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3" />
          <div className="md:col-span-9">
            <div className="border-t border-rule">
              {FAQS.map((f, i) => {
                const isOpen = open === i;
                return (
                  <div key={i} className="border-b border-rule">
                    <button
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="w-full py-6 md:py-7 flex items-start justify-between gap-6 text-left group"
                    >
                      <div className="flex items-start gap-6">
                        <span className="font-mono text-[11px] tracking-widest text-accent mt-1.5 shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display text-xl md:text-2xl text-ink leading-snug group-hover:text-accent transition-colors">
                          {f.q}
                        </span>
                      </div>
                      <span
                        className={`font-mono text-xl text-ink-dim mt-0.5 transition-transform duration-300 ease-out-expo ${
                          isOpen ? "rotate-45" : ""
                        }`}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-500 ease-out-expo ${
                        isOpen ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-0 md:pl-[56px] pr-8 max-w-3xl">
                          <p className="text-ink-muted text-base leading-relaxed">
                            {f.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
