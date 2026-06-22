import { motion } from "motion/react";

export function SceneHook() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden bg-parchment text-ink"
    >
      {/* faint baseline grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--ink) 1px, transparent 1px)",
          backgroundSize: "100% 96px",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-between px-6 pb-10 pt-32 lg:px-10 lg:pt-40">
        {/* top meta row */}
        <div className="flex items-start justify-between gap-6 text-[0.72rem] uppercase tracking-[0.22em] text-ink/55">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal animate-caret" />
            <span>Index — 001</span>
          </div>
          <div className="hidden md:block">Independent Design Studio</div>
          <div className="hidden md:block text-right">
            Cairo · Worldwide<br />
            <span className="text-ink/40">Booking Q3 — Q4 2026</span>
          </div>
        </div>

        {/* headline */}
        <div className="mt-16 max-w-[1300px]">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-display-hero font-display"
          >
            Design that<br />
            makes a brand<br />
            <span className="relative inline-block italic">
              <span className="relative z-10">undeniable</span>
              <svg
                viewBox="0 0 600 24"
                preserveAspectRatio="none"
                className="absolute inset-x-0 -bottom-2 h-3 w-full"
                aria-hidden="true"
              >
                <path
                  d="M4 16 C 120 4, 260 22, 596 10"
                  stroke="var(--signal)"
                  strokeWidth="10"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>.
          </motion.h1>
        </div>

        {/* bottom row */}
        <div className="mt-20 grid items-end gap-10 border-t border-ink/15 pt-8 lg:grid-cols-[1.4fr_1fr_auto]">
          <p className="max-w-xl text-balance text-lg leading-snug text-ink/70 md:text-xl">
            Adhere is an independent studio for founders who refuse to ship the average —
            building brands, products and websites that earn attention and convert it.
          </p>

          <div className="flex gap-10 text-sm">
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/45">Practice</div>
              <div className="mt-2 font-medium">Brand · Web · Product</div>
            </div>
            <div>
              <div className="text-[0.7rem] uppercase tracking-[0.22em] text-ink/45">Since</div>
              <div className="mt-2 font-medium">2019</div>
            </div>
          </div>

          <a
            href="#work"
            className="group inline-flex items-center gap-3 self-end justify-self-end text-sm font-medium"
          >
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink/30 transition-colors group-hover:border-ink group-hover:bg-ink group-hover:text-parchment">
              <svg viewBox="0 0 16 16" className="h-4 w-4"><path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </span>
            See selected work
          </a>
        </div>
      </div>
    </section>
  );
}
