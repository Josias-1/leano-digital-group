import Link from "next/link";
import Container from "@/components/layout/Container";
import SignalDiagram from "@/components/shared/SignalDiagram";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(56,189,248,0.13),transparent_25rem)]" />
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">Azure • AI • Data Engineering</span>
            <h1 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-7xl">Technology delivery for<span className="block text-blue-500">complex business teams</span></h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">We help mid-market and enterprise organisations use Azure, AI and data to automate high-value work, connect their systems, and make faster, clearer decisions.</p>
            <div className="mt-10 flex flex-wrap gap-4"><Link href="/contact" className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-blue-400">Book a Discovery Call</Link><Link href="/services" className="rounded-xl border border-slate-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:bg-slate-900">Explore Services</Link></div>
          </div>
          <div className="relative mx-auto w-full max-w-lg rounded-[2rem] border border-blue-500/20 bg-slate-900/60 p-4 shadow-2xl shadow-blue-950/40">
            <div className="mb-4 flex items-center justify-between px-2"><span className="text-xs font-bold tracking-[0.2em] text-blue-400">THE LEANO SIGNAL</span><span className="h-2 w-2 rounded-full bg-amber-300 shadow-[0_0_18px_4px_rgba(251,191,36,0.35)]" /></div>
            <SignalDiagram />
            <p className="px-2 pt-4 text-sm leading-6 text-slate-400">A clear path from business context to a connected, measurable outcome.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
