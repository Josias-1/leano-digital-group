import Hero from "@/components/sections/Hero";
import Technologies from "@/components/sections/Technologies";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Process from "@/components/sections/Process";

export const metadata: Metadata = {
  title: "Azure, AI & Data Delivery",
  description: "Azure, AI and data delivery for mid-market and enterprise organisations that need to automate work and make faster decisions.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
        <Hero />

        <Technologies />

        <Services />

        <Process />

        <WhyUs />

        <CTA />

        <Contact />
    </main>
  );
}
import type { Metadata } from "next";
