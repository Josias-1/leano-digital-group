interface BrandMarkProps {
  showName?: boolean;
  className?: string;
}

export default function BrandMark({ showName = true, className = "" }: BrandMarkProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" role="img" aria-label="Leano Digital Group">
        <rect width="40" height="40" rx="11" fill="#0F172A" />
        <path d="M12 10v20h15" fill="none" stroke="#38BDF8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        <circle cx="28" cy="30" r="3.5" fill="#FBBF24" />
        <circle cx="28" cy="10" r="2" fill="#60A5FA" />
      </svg>
      {showName && <span className="leading-none"><span className="block text-sm font-bold tracking-[0.2em] text-white">LEANO</span><span className="mt-1 block text-[9px] font-medium tracking-[0.24em] text-slate-400">DIGITAL GROUP</span></span>}
    </span>
  );
}
