import Link from "next/link";
import Container from "@/components/layout/Container";
import BrandMark from "@/components/shared/BrandMark";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "About", href: "/about" },
  { name: "Insights", href: "/insights" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <Container className="py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div><BrandMark /><p className="mt-3 text-sm text-slate-400">Azure, AI and data delivery for complex teams.</p></div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">{navigation.map((item) => <Link key={item.name} href={item.href} className="text-sm text-slate-400 transition hover:text-white">{item.name}</Link>)}</div>
        </div>
        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">© {new Date().getFullYear()} Leano Digital Group (Pty) Ltd. All rights reserved.</div>
      </Container>
    </footer>
  );
}
