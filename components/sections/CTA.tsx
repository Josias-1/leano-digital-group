import Container from "@/components/layout/Container";
import Link from "next/link";
import SignalRail from "@/components/shared/SignalRail";

export default function CTA() {
  return (
    <section className="py-28">
      <Container>

        <div className="rounded-3xl bg-gradient-to-r from-blue-700 to-slate-900 p-14 text-center">
          <SignalRail index="05" label="NEXT MOVE" className="justify-center" />
          <h2 className="mt-6 text-5xl font-bold">
            Ready to transform your business?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-slate-200">
            Let&apos;s discuss how AI, cloud and data can help your
            organisation move faster.
          </p>

          <Link
            href="/contact"
            className="mt-10 inline-flex rounded-xl bg-white px-7 py-4 font-semibold text-slate-900 transition hover:scale-105"
          >
            Book a Discovery Session
          </Link>

        </div>

      </Container>
    </section>
  );
}
