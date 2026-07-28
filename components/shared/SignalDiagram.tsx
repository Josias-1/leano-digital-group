export default function SignalDiagram() {
  return (
    <svg viewBox="0 0 480 360" className="h-auto w-full" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="signal-line" x1="0" x2="1" y1="0" y2="1"><stop stopColor="#38BDF8" /><stop offset="1" stopColor="#FBBF24" /></linearGradient>
        <pattern id="signal-grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" fill="none" stroke="#334155" strokeOpacity=".7" /></pattern>
      </defs>
      <rect width="480" height="360" rx="28" fill="url(#signal-grid)" />
      <path d="M60 280C120 280 120 92 198 92s64 180 138 180 52-138 94-138" fill="none" stroke="url(#signal-line)" strokeLinecap="round" strokeWidth="5" />
      <g fill="#0F172A" stroke="#38BDF8" strokeWidth="3"><circle cx="60" cy="280" r="13" /><circle cx="198" cy="92" r="13" /><circle cx="336" cy="272" r="13" /></g>
      <circle cx="430" cy="134" r="16" fill="#FBBF24" /><circle cx="430" cy="134" r="7" fill="#0F172A" />
      <g fill="#E2E8F0" fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" letterSpacing="1"><text x="42" y="317">CONTEXT</text><text x="170" y="57">BUILD</text><text x="311" y="311">CONNECT</text><text x="394" y="102">IMPACT</text></g>
    </svg>
  );
}
