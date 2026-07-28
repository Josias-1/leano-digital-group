import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "Insights",
  description: "Practical perspectives on Azure, AI, data and software delivery.",
  alternates: { canonical: "/insights" },
};

const topics = [
  ["From AI idea to useful workflow", "The best AI opportunities are connected to a repeated, high-value task with a clear owner and a measurable improvement."],
  ["Data that supports decisions", "Useful reporting starts with shared definitions, trusted sources and the decisions people need to make—not with a dashboard."],
  ["Modernisation without disruption", "A staged approach can reduce delivery risk while creating value early, especially where critical systems must keep operating."],
];

export default function InsightsPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl"><span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">Insights</span><h1 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-6xl">Perspectives for teams building what&apos;s next.</h1><p className="mt-7 text-xl leading-9 text-slate-400">Practical thinking on using Azure, AI, data and software engineering to improve the way complex organisations work.</p></div>
        <section className="mt-16 grid gap-6 md:grid-cols-3">{topics.map(([title, description]) => <article key={title} className="rounded-3xl border border-slate-800 bg-slate-900/40 p-7"><p className="text-sm font-medium text-blue-300">Perspective</p><h2 className="mt-5 text-xl font-semibold text-white">{title}</h2><p className="mt-4 leading-7 text-slate-400">{description}</p></article>)}</section>
        <div className="mt-12 rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:flex sm:items-center sm:justify-between sm:gap-8"><div><h2 className="text-xl font-semibold text-white">Looking for a relevant example?</h2><p className="mt-2 text-slate-400">Tell us about your challenge and we&apos;ll discuss the most useful next step.</p></div><Link href="/contact" className="mt-6 inline-flex shrink-0 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500 sm:mt-0">Start a conversation</Link></div>
      </Container>
    </main>
  );
}
