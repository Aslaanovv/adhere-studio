const steps = [
  {
    no: "①",
    title: "Position",
    body: "We start with the sharpest version of why you exist. A two-week sprint on audience, edge and message — the foundation everything visual is built on.",
    deliv: ["Brand strategy", "Naming · voice", "Positioning doc"],
  },
  {
    no: "②",
    title: "Design",
    body: "Identity, web and product surfaces designed as one system. No moodboards-for-the-sake-of-it — every screen is built to convert and to scale.",
    deliv: ["Visual identity", "Website design", "Product UI"],
  },
  {
    no: "③",
    title: "Ship",
    body: "We build and launch alongside you. Design-engineering, performance, analytics — handed off as a living system your team owns from day one.",
    deliv: ["Design engineering", "CMS · handoff", "Launch + iterate"],
  },
];

export function SceneSystem() {
  return (
    <section id="approach" className="relative bg-ink text-parchment">
      <div className="mx-auto max-w-[1480px] px-6 py-28 lg:px-10 lg:py-36">
        <div className="grid gap-10 border-b border-parchment/15 pb-10 md:grid-cols-[1fr_1.4fr] md:items-end">
          <div className="text-[0.72rem] uppercase tracking-[0.22em] text-parchment/55">
            Approach — 002
          </div>
          <h2 className="font-display text-display-xl">
            A small studio.<br />
            A <span className="italic text-signal">decisive</span> process.
          </h2>
        </div>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.title} className="flex flex-col">
              <div className="flex items-baseline justify-between border-b border-parchment/15 pb-4">
                <span className="font-display text-4xl text-signal">{s.no}</span>
                <span className="text-[0.72rem] uppercase tracking-[0.22em] text-parchment/55">
                  Phase
                </span>
              </div>
              <h3 className="mt-6 font-display text-4xl">{s.title}</h3>
              <p className="mt-4 text-parchment/70 leading-relaxed">{s.body}</p>
              <ul className="mt-8 space-y-2 text-sm text-parchment/55">
                {s.deliv.map((d) => (
                  <li key={d} className="flex items-center gap-2">
                    <span className="h-px w-4 bg-parchment/40" /> {d}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* engagement strip */}
        <div className="mt-24 grid gap-6 border-t border-parchment/15 pt-10 md:grid-cols-3">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-parchment/55">Engagement</div>
            <div className="mt-3 font-display text-2xl">4 — 12 weeks</div>
          </div>
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-parchment/55">Investment</div>
            <div className="mt-3 font-display text-2xl">From $24k</div>
          </div>
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-parchment/55">Capacity</div>
            <div className="mt-3 font-display text-2xl">2 projects · per quarter</div>
          </div>
        </div>
      </div>
    </section>
  );
}
