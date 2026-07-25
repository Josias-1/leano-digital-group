import Container from "@/components/layout/Container";
import { technologies } from "@/data/technologies";

export default function Technologies() {
  return (
    <section className="py-20 border-y border-slate-900 bg-slate-950/40">
      <Container>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">
            Powered by Enterprise Technologies
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Modern Technology Stack
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            We build solutions using modern, enterprise-grade technologies that
            are trusted by organizations around the world.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="rounded-full border border-slate-800 bg-slate-900 px-5 py-3 text-sm font-medium text-slate-300 transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10 hover:text-white"
            >
              {tech.name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}