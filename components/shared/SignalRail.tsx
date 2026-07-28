interface SignalRailProps {
  index: string;
  label: string;
  className?: string;
}

export default function SignalRail({ index, label, className = "" }: SignalRailProps) {
  return (
    <p className={`inline-flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-blue-300 ${className}`}>
      <span>{index}</span>
      <span aria-hidden="true" className="flex items-center gap-1"><span className="h-px w-7 bg-blue-400/70" /><span className="h-1.5 w-1.5 rounded-full bg-blue-300" /><span className="h-1.5 w-1.5 rounded-full bg-blue-500" /></span>
      <span>{label}</span>
    </p>
  );
}
