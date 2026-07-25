import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Technologies from "@/components/sections/Technologies";
import Services from "@/components/sections/Services";
import WhyUs from "@/components/sections/WhyUs";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Technologies />

        <Services />

        <WhyUs />

        <CTA />
      </main>

      <Footer />
    </>
  );
}