import { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

type Case = {
  no: string;
  client: string;
  kind: string;
  year: string;
  outcome: string;
  swatch: string; // CSS color
};

const cases: Case[] = [
  {
    no: "01",
    client: "Poole Digital",
    kind: "Brand · Website",
    year: "2025",
    outcome: "Repositioned a performance agency and tripled inbound leads in 90 days.",
    swatch: "oklch(0.55 0.18 28)",
  },
  {
    no: "02",
    client: "Malmoum",
    kind: "Product · Identity",
    year: "2024",
    outcome: "Designed the end-to-end product and brand for a regional fintech challenger.",
    swatch: "oklch(0.78 0.16 92)",
  },
  {
    no: "03",
    client: "Tech Planet",
    kind: "Marketing site",
    year: "2024",
    outcome: "Rebuilt a B2B SaaS site around a single conversion story — 2.4× demo bookings.",
    swatch: "oklch(0.32 0.08 250)",
  },
  {
    no: "04",
    client: "Rabtek",
    kind: "Brand system",
    year: "2023",
    outcome: "Crafted a category-defining identity for an industrial automation studio.",
    swatch: "oklch(0.42 0.12 160)",
  },
];

export function SceneCases() {
  const [hovered, setHovered] = useState<number | null>(null);
  const wrap = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section id="work" className="relative bg-parchment text-ink">
      <div className="mx-auto max-w-[1480px] px-6 pt-28 lg:px-10 lg:pt-36">
        <div className="flex items-end justify-between gap-10 border-b border-ink/15 pb-6">
          <div>
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-ink/55">
              Selected Work — 2023 / 2025
            </div>
            <h2 className="mt-4 font-display text-display-xl">
              Brands built to <span className="italic">stick</span>.
            </h2>
          </div>
          <a href="#contact" className="hidden md:inline text-sm text-ink/60 hover:text-ink">
            Full index on request →
          </a>
        </div>
      </div>

      <div
        ref={wrap}
        onMouseMove={(e) => {
          const r = wrap.current?.getBoundingClientRect();
          if (!r) return;
          setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
        }}
        onMouseLeave={() => setHovered(null)}
        className="relative mx-auto max-w-[1480px] px-6 lg:px-10"
      >
        <ul>
          {cases.map((c, i) => (
            <li
              key={c.no}
              onMouseEnter={() => setHovered(i)}
              className="group relative border-b border-ink/15"
            >
              <a
                href="#contact"
                className="grid grid-cols-12 items-center gap-6 py-8 transition-colors md:py-10"
              >
                <span className="col-span-2 md:col-span-1 text-[0.72rem] tracking-[0.22em] text-ink/45">
                  {c.no}
                </span>
                <span className="col-span-10 md:col-span-4 font-display text-3xl md:text-5xl leading-none transition-transform duration-500 group-hover:-translate-y-0.5">
                  {c.client}
                </span>
                <span className="col-span-6 md:col-span-3 text-sm text-ink/60">
                  {c.kind}
                </span>
                <span className="col-span-4 md:col-span-3 text-sm text-ink/60 md:text-ink/70">
                  <span className="block max-w-[34ch] truncate">{c.outcome}</span>
                </span>
                <span className="col-span-2 md:col-span-1 text-right text-sm text-ink/45">
                  {c.year}
                </span>
              </a>

              {/* expanding accent on hover */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-ink transition-transform duration-500 group-hover:scale-x-100"
              />
            </li>
          ))}
        </ul>

        {/* cursor-follow preview tile */}
        <AnimatePresence>
          {hovered !== null && (
            <motion.div
              key={hovered}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              style={{
                left: pos.x,
                top: pos.y,
                background: cases[hovered].swatch,
              }}
              className="pointer-events-none absolute hidden h-64 w-80 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-sm shadow-2xl md:block"
            >
              <div className="absolute inset-0 mix-blend-overlay opacity-30"
                style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white, transparent 60%)" }} />
              <div className="absolute inset-0 flex flex-col justify-between p-5 text-parchment">
                <div className="text-[0.7rem] uppercase tracking-[0.22em] opacity-80">
                  {cases[hovered].kind}
                </div>
                <div className="font-display text-3xl leading-tight">
                  {cases[hovered].client}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="h-28" />
    </section>
  );
}
