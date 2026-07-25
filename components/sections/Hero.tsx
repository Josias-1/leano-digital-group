import Link from "next/link";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-blue-600/15 blur-3xl" />
      </div>

      <Container>
        <div className="max-w-4xl">

          <span className="inline-flex rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Enterprise AI • Cloud • Software • Data
          </span>

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-white md:text-7xl">
            Engineering the
            <span className="block text-blue-500">
              Future of Enterprise
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
            We help organisations accelerate digital transformation through
            Artificial Intelligence, Microsoft Azure, enterprise software,
            cloud engineering and data analytics.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
            >
              Book a Discovery Call
            </Link>

            <Link
              href="#services"
              className="rounded-xl border border-slate-700 px-6 py-3 font-medium transition hover:border-blue-500 hover:bg-slate-900"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}