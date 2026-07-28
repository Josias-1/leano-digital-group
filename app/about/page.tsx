import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";

export const metadata: Metadata = {
  title: "About",
  description: "Leano Digital Group helps complex business teams deliver practical Azure, AI, data and software solutions.",
  alternates: { canonical: "/about" },
};

const principles = [
  ["Start with the work", "We begin with the decisions, processes and constraints that matter to your team before choosing the technology."],
  ["Deliver for adoption", "A solution only creates value when the people who need it can trust it, use it and maintain it."],
  ["Build for what is next", "We create practical foundations that support improvement over time, rather than one-off demonstrations."],
];

export default function AboutPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl"><span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">About Leano Digital Group</span><h1 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-6xl">Practical technology for meaningful business progress.</h1><p className="mt-7 text-xl leading-9 text-slate-400">We help mid-market and enterprise teams apply Azure, AI, data and software engineering to the work that will make the biggest difference.</p></div>
        <section className="mt-16 grid gap-6 md:grid-cols-3">{principles.map(([title, description]) => <article key={title} className="rounded-3xl border border-slate-800 bg-slate-900/40 p-7"><h2 className="text-xl font-semibold text-white">{title}</h2><p className="mt-4 leading-7 text-slate-400">{description}</p></article>)}</section>
        <Link href="/contact" className="mt-12 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500">Talk to our team</Link>
      </Container>
    </main>
  );
}
