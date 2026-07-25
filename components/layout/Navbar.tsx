import Link from "next/link";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#articles", label: "Articles" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Leano Digital Group<span className="text-blue-500">.</span>
        </Link>

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium transition hover:bg-blue-500"
        >
          Contact Us
        </Link>
      </nav>
    </header>
  );
}