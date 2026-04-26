const STANDARDS = [
  {
    h: "ICC/ESOMAR International Code",
    b: "The International Chamber of Commerce and ESOMAR Code on Market, Opinion and Social Research is the global ethical framework for the research profession. It governs respondent rights, duties of the researcher, relationships between researchers and clients, and the treatment of children and vulnerable respondents. BORC designs studies to be compliant with the Code in its current revision.",
  },
  {
    h: "GDPR compliance",
    b: "All fieldwork across Latvia, Lithuania and Estonia operates under EU General Data Protection Regulation. Lawful basis for processing, data minimisation, storage limitation, respondent rights (access, rectification, erasure), and cross-border transfer are addressed in standard operating procedures. Respondent data is separated from contact data wherever methodology permits, and personal data retention periods are defined and enforced.",
  },
  {
    h: "Research ethics principles",
    b: "Informed consent is explicit, not implied. Respondent participation is voluntary at every stage, and withdrawal at any point is honoured. Deception — where methodologically unavoidable, as in certain advertising pre-tests — is debriefed at session end. Sensitive topics are approached with appropriate safeguarding; vulnerable audiences (minors, respondents in distress) are protected by elevated standards.",
  },
  {
    h: "Data security",
    b: "Respondent-level data is held on EU-resident infrastructure, encrypted at rest and in transit. Access is role-based and logged. Sub-processors (panel partners, field agencies, transcription services) are contracted under data processing agreements aligned to GDPR Article 28. Data retention is capped by project, and end-of-project purges are documented.",
  },
  {
    h: "Transparency",
    b: "Every report discloses sample source, sample size, fielding dates, mode, weighting approach, and any limitations material to the interpretation of the findings. Methodology notes are not buried — they are part of the read. Where a finding depends on a methodological choice that reasonable researchers could disagree about, we say so.",
  },
  {
    h: "Dual professional standard",
    b: "BORC-led studies adhere both to the ICC/ESOMAR Code and to the norms of academic social research (informed consent documentation, reproducibility of analytical procedures, disclosure of conflicts of interest). Research is a profession, and a research buyer should expect the same standards from a commercial agency that they would expect from a university research unit.",
  },
];

export default function Standards() {
  return (
    <section className="py-24 md:py-32 border-t border-rule bg-bg-subtle">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              (09) Standards & ethics
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-lg text-ink">
              Research is a <span className="italic">profession</span>.
            </h2>
            <p className="mt-8 text-ink-muted text-lg leading-relaxed max-w-3xl">
              The difference between research and opinion is rigour, ethics
              and disclosure. These are the standards we operate under —
              published so the buyers of our work can hold us accountable to
              them.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-rule border border-rule">
          {STANDARDS.map((s) => (
            <div key={s.h} className="bg-bg-subtle p-8 md:p-10">
              <h3 className="font-mono text-[11px] tracking-widest uppercase text-accent mb-4">
                {s.h}
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
