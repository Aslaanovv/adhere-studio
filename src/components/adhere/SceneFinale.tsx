import { useState } from "react";

export function SceneFinale() {
  const [hover, setHover] = useState(false);
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-parchment">
      <div className="mx-auto max-w-[1480px] px-6 pt-28 lg:px-10 lg:pt-36">
        <div className="flex items-end justify-between border-b border-parchment/15 pb-6 text-[0.72rem] uppercase tracking-[0.22em] text-parchment/55">
          <span>Contact — 004</span>
          <span>One project slot left · Q3 2026</span>
        </div>

        <div className="grid gap-16 py-20 md:grid-cols-[1.4fr_1fr]">
          <div>
            <h2
              className="font-display text-display-hero leading-[0.92]"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Let's build<br />
              something{" "}
              <span className="relative inline-block italic">
                <span className={`relative z-10 transition-colors ${hover ? "text-ink" : ""}`}>
                  worth
                </span>
                <span
                  className={`absolute inset-0 -z-0 origin-left bg-signal transition-transform duration-500 ${
                    hover ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </span>
              <br /> shipping.
            </h2>

            <a
              href="mailto:hello@adhere.studio"
              className="mt-10 inline-flex items-center gap-4 text-2xl md:text-3xl font-display border-b border-parchment/30 pb-1 hover:border-signal"
            >
              hello@adhere.studio
              <span className="text-signal">↗</span>
            </a>
          </div>

          <div className="md:pt-6">
            <div className="text-[0.72rem] uppercase tracking-[0.22em] text-parchment/55">
              Best for
            </div>
            <ul className="mt-4 space-y-3 text-lg text-parchment/80">
              <li>— Funded startups (Seed → Series B)</li>
              <li>— Founder-led brands repositioning</li>
              <li>— Product teams without in-house design</li>
            </ul>

            <div className="mt-10 text-[0.72rem] uppercase tracking-[0.22em] text-parchment/55">
              Also on
            </div>
            <div className="mt-3 flex gap-5 text-sm text-parchment/70">
              <a href="#" className="hover:text-parchment">Read.cv</a>
              <a href="#" className="hover:text-parchment">Are.na</a>
              <a href="#" className="hover:text-parchment">LinkedIn</a>
              <a href="#" className="hover:text-parchment">Instagram</a>
            </div>
          </div>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-parchment/15 py-8 text-[0.72rem] uppercase tracking-[0.22em] text-parchment/45">
          <div>© Adhere Studio · {new Date().getFullYear()}</div>
          <div>Cairo · Worldwide</div>
          <div>Designed in-house — built to last</div>
        </footer>
      </div>
    </section>
  );
}
