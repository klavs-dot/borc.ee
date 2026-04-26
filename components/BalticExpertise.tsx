const COUNTRIES = [
  {
    code: "LV",
    name: "Latvia",
    capital: "Riga",
    population: "~1.9M",
    langs: "Latvian · Russian",
    eu: "2004",
    currency: "Euro",
    details:
      "Latvia's media landscape is bilingual in practice, with distinct Latvian-language and Russian-language channels reaching different audiences. Riga is the commercial centre, accounting for a disproportionate share of consumption; regional differences between Riga, Vidzeme, Kurzeme, Zemgale and Latgale are often material enough to design for explicitly. Latvia adopted the Euro in 2014 and is part of the Schengen Area.",
    sampling:
      "Representative national sampling requires careful quota management on Latvian- and Russian-speaking populations, with oversampling in Riga where brand and media consumption differ measurably from the regions.",
  },
  {
    code: "LT",
    name: "Lithuania",
    capital: "Vilnius",
    population: "~2.9M",
    langs: "Lithuanian · Russian · Polish",
    eu: "2004",
    currency: "Euro",
    details:
      "Lithuania is the largest Baltic market by population and consumer spend. The media landscape is primarily Lithuanian-language, with Russian- and Polish-speaking minorities concentrated in specific regions. Vilnius, Kaunas and Klaipėda form the three urban anchors, each with distinct economic and consumption profiles. Lithuania adopted the Euro in 2015.",
    sampling:
      "National samples are typically structured around the three largest cities plus a representative rural cross-section. Polish-speaking respondents in the southeast and Russian-speaking respondents in specific districts warrant consideration depending on the category.",
  },
  {
    code: "EE",
    name: "Estonia",
    capital: "Tallinn",
    population: "~1.4M",
    langs: "Estonian · Russian",
    eu: "2004",
    currency: "Euro",
    details:
      "Estonia is the smallest Baltic market by population but has the highest digital penetration and the most mature e-commerce and digital services ecosystem of the three. The Russian-speaking population — concentrated in Tallinn and the north-east — is a distinct consumer segment with its own media diet. Estonia adopted the Euro in 2011 and is a world leader in digital government.",
    sampling:
      "Online panels reach the bulk of the adult Estonian population at quality. Russian-language fieldwork is typically designed as a parallel strand in Estonian national studies, with separate recruitment and fielding.",
  },
];

const CROSS_BALTIC = [
  {
    h: "Genuinely comparable",
    b: "Cross-Baltic studies require more than translating a single instrument. Question wording, answer scales, response cultures, and scale-use tendencies all differ. We design comparability in from the start — shared instrument logic, harmonised coding frames, synchronous fielding windows, and joint analytical frameworks — so that differences in the data reflect differences in the markets, not differences in the method.",
  },
  {
    h: "Language coverage",
    b: "Studies are designed and reported in English, fielded in Latvian, Lithuanian, Estonian and Russian. Translation is handled via back-translation and cognitive testing for sensitive instruments rather than single-pass translation.",
  },
  {
    h: "Sampling frames",
    b: "Online panels provide the backbone for most consumer research. For nationally representative studies we blend sources and weight to census demographic targets (age, gender, region, education) with additional quotas on language group and urbanity where the category demands.",
  },
  {
    h: "Regulatory alignment",
    b: "All three markets operate under EU regulation — GDPR for data protection, EU Consumer Protection directives, the Digital Services Act. Research design, consent flows, data retention and cross-border transfer are designed for single compliance model across the three markets.",
  },
];

export default function BalticExpertise() {
  return (
    <section
      id="baltics"
      className="py-24 md:py-32 border-t border-rule"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <header className="grid md:grid-cols-12 gap-10 mb-20">
          <div className="md:col-span-3">
            <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
              (06) Geography
            </span>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-display-lg text-ink">
              The Baltics are not <span className="italic">one market</span>.
            </h2>
            <p className="mt-8 text-ink-muted text-lg leading-relaxed max-w-3xl">
              Latvia, Lithuania and Estonia are routinely bundled in planning
              decks and then surprised when the data comes back with three
              different shapes. The three markets share EU membership, Euro
              currency, Schengen access and a similar digital consumer
              baseline — but differ in language, media diet, consumption
              patterns, and the role of Russian-speaking audiences. Our
              default is to design for differences first, commonalities
              second.
            </p>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-px bg-rule border border-rule mb-24">
          {COUNTRIES.map((c) => (
            <div key={c.code} className="bg-bg p-8 md:p-10">
              <div className="flex items-baseline justify-between mb-6">
                <h3 className="font-display text-4xl text-ink">{c.name}</h3>
                <span className="font-mono text-sm tracking-widest text-accent">
                  {c.code}
                </span>
              </div>

              <dl className="space-y-3 pb-6 mb-6 border-b border-rule">
                <div className="flex justify-between text-[13px]">
                  <dt className="text-ink-dim font-mono uppercase tracking-wider text-[10px]">
                    Capital
                  </dt>
                  <dd className="text-ink">{c.capital}</dd>
                </div>
                <div className="flex justify-between text-[13px]">
                  <dt className="text-ink-dim font-mono uppercase tracking-wider text-[10px]">
                    Population
                  </dt>
                  <dd className="text-ink tabular">{c.population}</dd>
                </div>
                <div className="flex justify-between text-[13px]">
                  <dt className="text-ink-dim font-mono uppercase tracking-wider text-[10px]">
                    Languages
                  </dt>
                  <dd className="text-ink text-right">{c.langs}</dd>
                </div>
                <div className="flex justify-between text-[13px]">
                  <dt className="text-ink-dim font-mono uppercase tracking-wider text-[10px]">
                    EU since
                  </dt>
                  <dd className="text-ink tabular">{c.eu}</dd>
                </div>
                <div className="flex justify-between text-[13px]">
                  <dt className="text-ink-dim font-mono uppercase tracking-wider text-[10px]">
                    Currency
                  </dt>
                  <dd className="text-ink">{c.currency}</dd>
                </div>
              </dl>

              <p className="text-ink-muted text-sm leading-relaxed mb-5">
                {c.details}
              </p>

              <div className="pt-5 border-t border-rule">
                <div className="font-mono text-[10px] tracking-widest uppercase text-ink-dim mb-2">
                  Sampling notes
                </div>
                <p className="text-[13px] text-ink-muted leading-relaxed">
                  {c.sampling}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-baltic */}
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-3">
            <h3 className="font-display text-3xl text-ink">
              Cross-Baltic <span className="italic">design</span>.
            </h3>
          </div>
          <div className="md:col-span-9 grid md:grid-cols-2 gap-10">
            {CROSS_BALTIC.map((x) => (
              <div key={x.h} className="border-t border-rule pt-6">
                <h4 className="font-mono text-[11px] tracking-widest uppercase text-ink mb-3">
                  {x.h}
                </h4>
                <p className="text-ink-muted text-sm leading-relaxed">{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
