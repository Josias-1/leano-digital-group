import Container from "@/components/layout/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import SignalRail from "@/components/shared/SignalRail";
import {
  ShieldCheck,
  BrainCircuit,
  Rocket,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Engineering Expertise",
    description:
      "We design scalable, secure, and resilient solutions that are built to support long-term business growth.",
    icon: ShieldCheck,
  },
  {
    title: "AI-First Innovation",
    description:
      "Artificial Intelligence is embedded into every solution to improve efficiency, automation, and decision-making.",
    icon: BrainCircuit,
  },
  {
    title: "Business-Driven Solutions",
    description:
      "Every engagement starts with understanding your business goals, ensuring technology delivers measurable value.",
    icon: Rocket,
  },
  {
    title: "Trusted Partnership",
    description:
      "We work collaboratively with our clients, providing transparency, reliability, and long-term support.",
    icon: Users,
  },
];

export default function WhyUs() {
  return (
    <section id="about" className="py-28">
      <Container>
        <div><SignalRail index="04" label="OPERATING PRINCIPLES" /><SectionHeading
          title="Technology that moves work forward"
          description="We combine engineering, cloud expertise, and AI to help complex teams reduce manual work, connect fragmented systems, and turn data into better decisions."
        /></div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all duration-300 hover:border-blue-500 hover:bg-slate-900 hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-6 inline-flex rounded-xl bg-blue-500/10 p-3">
                  <Icon className="h-8 w-8 text-blue-500" />
                </div>

                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
