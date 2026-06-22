const items = [
  "Brand identity",
  "Marketing websites",
  "Product UX",
  "Design engineering",
  "Art direction",
  "Naming & positioning",
  "Interaction design",
  "Conversion strategy",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="border-y border-ink/15 bg-parchment py-6 overflow-hidden">
      <div className="flex w-max gap-14 animate-marquee whitespace-nowrap pr-14 font-display text-3xl md:text-4xl text-ink/85">
        {row.map((t, i) => (
          <span key={i} className="inline-flex items-center gap-6">
            <span className="italic text-ink/35">— {t}</span>
            <span className="inline-block h-2 w-2 rounded-full bg-signal" />
          </span>
        ))}
      </div>
    </div>
  );
}
