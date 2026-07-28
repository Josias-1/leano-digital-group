import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "Azure, AI, data and software delivery for complex business teams.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <main className="py-24 sm:py-32">
      <Container>
        <div className="max-w-3xl"><span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">Services</span><h1 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-6xl">Technology delivery for complex business teams.</h1><p className="mt-7 text-xl leading-9 text-slate-400">Choose the capability that best matches your immediate challenge. Every engagement begins with the business outcome, then works back to the right technology.</p></div>
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => <article key={service.slug} className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8"><h2 className="text-2xl font-semibold text-white">{service.title}</h2><p className="mt-4 leading-7 text-slate-400">{service.summary}</p><Link href={`/services/${service.slug}`} className="mt-7 inline-flex text-sm font-medium text-blue-400 transition hover:text-blue-300">Explore {service.title} <span aria-hidden="true"></span></Link></article>)}
        </div>
      </Container>
    </main>
  );
}
