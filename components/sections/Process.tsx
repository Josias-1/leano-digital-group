import Container from "@/components/layout/Container";

const steps = [
  ["01", "Find the signal", "Define the business decision, workflow or bottleneck worth improving."],
  ["02", "Shape the system", "Design the architecture, data flow and delivery plan around that outcome."],
  ["03", "Ship with intent", "Build, integrate and test a solution that works in the reality of your team."],
  ["04", "Measure the shift", "Track adoption and outcomes, then strengthen what creates the most value."],
];

export default function Process() {
  return (
    <section className="overflow-hidden border-y border-slate-800 bg-slate-950 py-28">
      <Container>
        <div className="max-w-3xl"><p className="text-sm font-bold tracking-[0.22em] text-blue-400">THE LEANO SIGNAL</p><h2 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-5xl">A visible path from problem to progress.</h2><p className="mt-6 text-lg leading-8 text-slate-400">Our delivery model creates a shared signal across business and technology, so each stage remains connected to the outcome that matters.</p></div>
        <div className="relative mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4"><div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-blue-500 via-blue-500 to-amber-300 xl:block" />{steps.map(([number, title, description]) => <article key={number} className="relative rounded-3xl border border-slate-800 bg-slate-900/60 p-7"><span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full border border-blue-500/40 bg-slate-950 text-sm font-bold text-blue-400">{number}</span><h3 className="mt-8 text-xl font-semibold text-white">{title}</h3><p className="mt-4 leading-7 text-slate-400">{description}</p></article>)}</div>
      </Container>
    </section>
  );
}
