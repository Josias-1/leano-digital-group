import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import { getService, services } from "@/data/services";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return { title: service?.title ?? "Service not found", description: service?.summary, alternates: service ? { canonical: `/services/${service.slug}` } : undefined };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  return (
    <main className="min-h-screen py-24 sm:py-32">
      <Container>
        <Link href="/#services" className="text-sm font-medium text-blue-400 transition hover:text-blue-300">Back to services</Link>
        <div className="mt-12 max-w-3xl">
          <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">Service</span>
          <h1 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-7xl">{service.title}</h1>
          <p className="mt-8 text-xl leading-9 text-slate-300">{service.description}</p>
        </div>
        <section className="mt-16 max-w-3xl rounded-3xl border border-slate-800 bg-slate-900/40 p-8 sm:p-10">
          <h2 className="text-2xl font-semibold text-white">What we can help you achieve</h2>
          <ul className="mt-7 grid gap-4 text-slate-300">
            {service.outcomes.map((outcome) => <li key={outcome} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" aria-hidden="true" />{outcome}</li>)}
          </ul>
          <Link href="/contact" className="mt-10 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500">Discuss your project</Link>
        </section>
      </Container>
    </main>
  );
}
