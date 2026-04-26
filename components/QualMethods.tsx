const QUAL = [
  {
    name: "Focus groups",
    body: "Moderated discussions with six to eight respondents, typically running 90 to 120 minutes. Well-suited to exploring shared category language, generating reactions to stimuli, and surfacing group dynamics around social or public topics. Conducted in person with a viewing facility, or online via video platforms with screen-sharing for stimulus presentation.",
    duration: "90–120 min",
    size: "6–8 respondents",
  },
  {
    name: "Mini groups / triads",
    body: "Smaller groups of three to four respondents. Used when the category is sensitive, when individual voice needs more air-time than a full group allows, or when the client audience is specialised enough that a full group cannot be recruited comfortably.",
    duration: "75–90 min",
    size: "3–4 respondents",
  },
  {
    name: "In-depth interviews (IDIs)",
    body: "One-on-one conversations, typically 45 to 90 minutes. The interview is where depth lives — a skilled interviewer can follow threads into territory that a group would not surface, and respondents disclose things they would not share in front of peers. Standard for B2B decision-maker research, for category experts, and for sensitive personal topics.",
    duration: "45–90 min",
    size: "1 respondent",
  },
  {
    name: "Ethnographic research",
    body: "Researchers observe respondents in their natural environment — the home, the workplace, the store — and document behaviour in context. Ethnography is the right tool when declared behaviour and actual behaviour diverge, when context matters more than opinion, or when a category has unspoken rituals that respondents cannot easily articulate in an interview room.",
    duration: "2–6 hours",
    size: "Observational",
  },
  {
    name: "Online bulletin-board communities",
    body: "Asynchronous online spaces where recruited respondents answer structured tasks over several days. Participants can upload photos, videos, and reflections, and the researcher can probe in between. Particularly strong for diary-style topics, for category immersion before a creative brief, and for international studies where a synchronous group is impractical.",
    duration: "3–10 days",
    size: "20–40 participants",
  },
  {
    name: "Diary studies",
    body: "Respondents document an aspect of their life — a category use occasion, a media diet, a purchase journey — over a defined period. Diaries can be structured (daily prompts) or open, and can use mobile apps for in-the-moment capture of moments otherwise lost to recall bias.",
    duration: "7–30 days",
    size: "15–40 participants",
  },
  {
    name: "Shop-alongs & accompanied journeys",
    body: "A researcher accompanies a respondent through a real task — a supermarket shop, a car-buying visit, a booking journey — observing decisions in the moment and probing the reasoning while memory is fresh. Particularly powerful for category and channel research.",
    duration: "1–3 hours",
    size: "1 respondent",
  },
  {
    name: "Usability and concept testing",
    body: "Moderated sessions focused on a specific artefact — a product prototype, an app flow, a concept board, packaging. Tasks are observed and narrated aloud, with the researcher documenting friction points, misunderstandings, and the delta between designer intent and user perception.",
    duration: "45–75 min",
    size: "1 respondent",
  },
];

export default function QualMethods() {
  return (
    <section className="py-24 md:py-32 border-t border-rule">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              (04) Qualitative
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-lg text-ink">
              Qualitative <span className="italic">methodologies</span>.
            </h2>
            <p className="mt-8 text-ink-muted text-lg leading-relaxed max-w-3xl">
              Qualitative design is about matching the method to the question.
              A group is not a small survey; an interview is not a long group.
              Each format reaches a different kind of understanding, and the
              craft of a qualitative practice is knowing which one the brief
              actually needs.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-2 gap-px bg-rule border border-rule">
          {QUAL.map((q, i) => (
            <div key={q.name} className="bg-bg p-8 md:p-10">
              <div className="flex items-baseline justify-between mb-4">
                <h3 className="font-display text-2xl md:text-3xl text-ink">
                  {q.name}
                </h3>
                <span className="font-mono text-[10px] tracking-widest text-ink-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-ink-muted text-sm leading-relaxed mb-6">
                {q.body}
              </p>
              <div className="flex gap-8 pt-4 border-t border-rule">
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-1">
                    Duration
                  </div>
                  <div className="text-sm text-ink">{q.duration}</div>
                </div>
                <div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-1">
                    Setup
                  </div>
                  <div className="text-sm text-ink">{q.size}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 grid md:grid-cols-12 gap-10 border-t border-rule pt-16">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-ink-dim">
              Analytical approach
            </span>
          </div>
          <div className="md:col-span-9">
            <p className="text-ink-muted text-lg leading-relaxed max-w-3xl">
              Qualitative analysis is not just quoting the loudest respondent.
              Transcripts are coded against a framework that evolves with the
              data; counter-evidence is sought as actively as confirming
              evidence; and findings are triangulated across sessions,
              researchers, and — where the design permits — across methods.
              Deliverables typically include thematic analysis, journey or
              ecosystem maps, need-state frameworks, verbatim libraries, and a
              video reel of key moments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
