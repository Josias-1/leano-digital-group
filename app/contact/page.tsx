import type { Metadata } from "next";
import Contact from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with Leano Digital Group about your Azure, AI, data or software delivery needs.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return <main><Contact /></main>;
}
