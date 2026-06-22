type Props = { className?: string; mark?: boolean };

// Stylized SVG mark inspired by the supplied logo: three half-discs + bracket form.
export function Logo({ className, mark = false }: Props) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <svg
        viewBox="0 0 64 40"
        className="h-7 w-auto"
        aria-hidden="true"
      >
        {/* bracket */}
        <path
          d="M2 12 H16 V18 H8 V32 H16 V38 H2 Z"
          fill="currentColor"
        />
        {/* signal square */}
        <rect x="10" y="22" width="6" height="10" fill="var(--signal)" />
        {/* three half discs */}
        <path d="M22 4 A18 18 0 0 1 22 40 Z" fill="var(--signal)" />
        <path d="M34 4 A18 18 0 0 1 34 40 Z" fill="var(--signal)" opacity="0.85" />
        <path d="M46 4 A18 18 0 0 1 46 40 Z" fill="var(--signal)" opacity="0.7" />
      </svg>
      {!mark && (
        <span className="font-display text-[1.35rem] leading-none tracking-tight">
          Adhere<span className="text-signal">.</span>
        </span>
      )}
    </span>
  );
}
