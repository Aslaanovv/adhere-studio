import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#work",     label: "Work" },
  { href: "#approach", label: "Approach" },
  { href: "#studio",   label: "Studio" },
  { href: "#contact",  label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 24);
    f(); window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 backdrop-blur-md bg-background/80 border-b border-border"
          : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="text-foreground"><Logo /></a>

        <nav className="hidden md:flex items-center gap-9 text-[0.78rem] font-medium tracking-wide text-foreground/65">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative transition-colors hover:text-foreground after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-foreground after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2.5 rounded-full bg-foreground py-2.5 pl-2.5 pr-5 text-[0.78rem] font-medium text-background transition-transform hover:-translate-y-px"
        >
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-signal text-ink">
            <svg viewBox="0 0 12 12" className="h-3 w-3"><path d="M2 6h7M6 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          Start a project
        </a>
      </div>
    </header>
  );
}
