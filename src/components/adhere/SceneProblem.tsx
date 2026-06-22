const quotes = [
  {
    body: "Adhere didn't just redesign our site — they re-articulated the entire company. We finally sound like the team we actually are.",
    name: "Founder",
    role: "Poole Digital",
  },
  {
    body: "The clearest design partner we've worked with. Every decision had a reason and a number behind it.",
    name: "Head of Product",
    role: "Tech Planet",
  },
  {
    body: "They held the whole picture — brand, product, story — and shipped it without losing the soul.",
    name: "CEO",
    role: "Malmoum",
  },
];

export function SceneProblem() {
  return (
    <section id="studio" className="bg-parchment text-ink">
      <div className="mx-auto max-w-[1480px] px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-ink/55">
              Studio — 003
            </div>
            <h2 className="mt-6 font-display text-display-xl">
              We work the way<br /> <span className="italic">we'd want</span> to be worked with.
            </h2>
            <p className="mt-8 max-w-md text-ink/70 leading-relaxed">
              A senior, founder-led team. No account managers, no junior handoffs.
              You talk directly to the people doing the work — start to ship.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-y-6 text-sm">
              {[
                ["Founder-led", "On every project"],
                ["Senior team", "8 designers · engineers"],
                ["Async-friendly", "GMT+2 · overlap globally"],
                ["NDAs welcome", "Discretion by default"],
              ].map(([k, v]) => (
                <div key={k}>
                  <div className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/45">{k}</div>
                  <div className="mt-1 font-medium">{v}</div>
                </div>
              ))}
            </div>
          </div>

          <ul className="space-y-6">
            {quotes.map((q, i) => (
              <li
                key={i}
                className="border border-ink/15 bg-card p-8 transition-shadow hover:shadow-[0_24px_80px_-30px_oklch(0.16_0.045_265/0.35)]"
              >
                <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
                  “{q.body}”
                </p>
                <div className="mt-6 flex items-center gap-3 text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal" />
                  <span className="font-medium">{q.name}</span>
                  <span className="text-ink/50">— {q.role}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
