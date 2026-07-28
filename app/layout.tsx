import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { contactDetails } from "@/data/contact";
import { site } from "@/data/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Leano Digital Group",
    template: "%s | Leano Digital Group",
  },
  description: site.description,
  keywords: [
    "Artificial Intelligence",
    "Azure",
    "Software Development",
    "Cloud",
    "Data Analytics",
    "Power BI",
    "Digital Transformation",
  ],
  openGraph: {
    title: "Leano Digital Group",
    description: site.description,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  legalName: site.legalName,
  description: site.description,
  ...(site.url ? { url: site.url } : {}),
  ...(contactDetails.email || contactDetails.phone
    ? { contactPoint: [{ "@type": "ContactPoint", contactType: "sales", ...(contactDetails.email ? { email: contactDetails.email } : {}), ...(contactDetails.phone ? { telephone: contactDetails.phone } : {}) }] }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-slate-950 text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
