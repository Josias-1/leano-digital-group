import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/data/services";
import { ArrowUpRight, BarChart3, BrainCircuit, Cloud, Code2 } from "lucide-react";

const serviceIcons = [BrainCircuit, Cloud, Code2, BarChart3];
const layouts = ["xl:col-span-7", "xl:col-span-5", "xl:col-span-5", "xl:col-span-7"];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden border-t border-slate-900 py-28 sm:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(120deg,transparent_0%,rgba(37,99,235,0.06)_48%,transparent_72%)]" />
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading badge="What we deliver" title="Choose the capability that unlocks the next move." description="Focused technology delivery for teams that need to make progress on their most consequential systems, data and workflows." />
          <p className="max-w-xs border-l border-blue-400/40 pl-5 text-sm leading-7 text-slate-400">Every engagement starts with the outcome your team needs to see, then works back to the right blend of technology and delivery.</p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-12">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <article key={service.slug} className={`group relative flex min-h-[22rem] flex-col overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/40 p-8 transition duration-300 hover:-translate-y-1 hover:border-blue-400/70 hover:bg-slate-900/70 lg:p-10 ${layouts[index]}`}>
                <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-blue-500/10 blur-3xl transition duration-500 group-hover:bg-blue-500/20" />
                <div className="relative flex items-start justify-between gap-6">
                  <span className="text-base font-bold tracking-[0.18em] text-blue-300">0{index + 1}</span>
                  <div className="rounded-2xl border border-blue-400/20 bg-blue-500/10 p-3"><Icon className="h-7 w-7 text-blue-400" aria-hidden="true" /></div>
                </div>

                <div className="relative mt-12 max-w-xl">
                  <h3 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">{service.title}</h3>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{service.description}</p>
                </div>

                <Link href={`/services/${service.slug}`} className="relative mt-auto inline-flex w-fit items-center gap-2 pt-8 text-base font-semibold text-blue-300 transition group-hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900">
                  Explore {service.title}<ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
