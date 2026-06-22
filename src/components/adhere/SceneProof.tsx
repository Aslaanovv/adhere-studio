import { motion } from "motion/react";

const quotes = [
  {
    q: "An exceptional site that captures our brand. The attention to detail and creative approach exceeded our expectations.",
    n: "Haytham Moawad",
    r: "CEO, Tech Planet",
  },
  {
    q: "Helped us establish a real online presence. The work effectively showcases the depth of what we actually do.",
    n: "Rabea Hosny",
    r: "CEO & Founder, Rabtek",
  },
  {
    q: "A striking black-neon system that makes our agency stand out. The branding perfectly represents our approach.",
    n: "Layla Mahmoud",
    r: "Marketing Director, Poole Digital",
  },
  {
    q: "Understood our vision and shipped an intuitive, beautiful interface our users genuinely love.",
    n: "Nadia Fathy",
    r: "Product Manager, Malmoum App",
  },
];

const principles = [
  ["Independent", "No middle layer. You work directly with the principal designer."],
  ["Outcome-bound", "Engagements are scoped by the result, not the deliverable list."],
  ["Discreet", "Most of our best work is under NDA — and stays that way."],
];

export function SceneProof() {
  return (
    <section id="proof" className="relative bg-background py-32 md:py-44">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-eyebrow text-muted-foreground">Scene 05 — Proof</p>
            <h2 className="mt-6 text-display-xl">
              Words from rooms<br/>we don't <span className="italic">walk into</span>.
            </h2>
            <p className="mt-8 max-w-md text-muted-foreground">
              We don't post case studies for the timeline. The receipts are the founders who
              came back, the teams that adopted the system, and the metrics they sent six
              months later.
            </p>

            <div className="mt-12 space-y-5">
              {principles.map(([k, v]) => (
                <div key={k} className="flex items-start gap-5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                  <div>
                    <div className="font-display text-2xl">{k}</div>
                    <div className="text-sm text-muted-foreground">{v}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ul className="space-y-px overflow-hidden rounded-md border border-border bg-border">
              {quotes.map((t, i) => (
                <motion.li
                  key={t.n}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="bg-background p-8 transition-colors hover:bg-secondary"
                >
                  <p className="font-display text-xl leading-snug md:text-2xl">
                    &ldquo;{t.q}&rdquo;
                  </p>
                  <div className="mt-5 flex items-center justify-between text-sm">
                    <span className="font-medium">{t.n}</span>
                    <span className="text-muted-foreground">{t.r}</span>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
