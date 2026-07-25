import Container from "@/components/layout/Container";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <Container className="py-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div>
            <h3 className="text-xl font-bold">
              Leano
              <span className="text-blue-500">.</span>
            </h3>

            <p className="mt-2 text-sm text-slate-400">
              Engineering the Future of Enterprise.
            </p>
          </div>

          <div className="flex gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-slate-400 hover:text-white transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Leano Digital Group (Pty) Ltd.
          All rights reserved.
        </div>
      </Container>
    </footer>
  );
}