interface SectionHeadingProps {
  badge?: string;
  title: string;
  description: string;
  titleSize?: "default" | "compact";
}

export default function SectionHeading({
  badge,
  title,
  description,
  titleSize = "default",
}: SectionHeadingProps) {
  return (
    <div className="max-w-4xl">
      {badge && (
        <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          {badge}
        </span>
      )}

      <h2 className={`mt-8 font-bold tracking-tight text-white ${titleSize === "compact" ? "text-4xl md:text-5xl" : "text-5xl md:text-6xl"}`}>
        {title}
      </h2>

      <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-400">
        {description}
      </p>
    </div>
  );
}
