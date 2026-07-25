import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
} from "lucide-react";

const services = [
  {
    title: "AI Engineering",
    description:
      "Enterprise AI copilots, intelligent automation, Retrieval-Augmented Generation (RAG), Azure OpenAI, and custom AI applications.",
    icon: BrainCircuit,
  },
  {
    title: "Cloud Transformation",
    description:
      "Microsoft Azure architecture, cloud migration, infrastructure modernization, governance, and optimization.",
    icon: Cloud,
  },
  {
    title: "Enterprise Software",
    description:
      "Modern web applications, internal business platforms, APIs, and scalable enterprise software solutions.",
    icon: Code2,
  },
  {
    title: "Data & Analytics",
    description:
      "Business Intelligence, Power BI dashboards, data engineering, predictive analytics, and executive reporting.",
    icon: BarChart3,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative border-t border-slate-900 py-32"
    >
      <Container>
        <SectionHeading
          badge="Enterprise Solutions"
          title="Technology Solutions Built for Business"
          description="We help organisations design, build and scale enterprise AI, cloud, software engineering and analytics solutions that create measurable business value."
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:bg-slate-900 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-500/10 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="mb-8 inline-flex rounded-2xl bg-blue-500/10 p-4">
                    <Icon className="h-8 w-8 text-blue-500" />
                  </div>

                  <h3 className="text-2xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <button className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-400 transition group-hover:text-blue-300">
                    Learn more
                
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}