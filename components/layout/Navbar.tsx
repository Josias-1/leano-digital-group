"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BrandMark from "@/components/shared/BrandMark";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <nav className="mx-auto flex min-h-20 max-w-7xl flex-wrap items-center justify-between px-6 py-4 lg:px-8" aria-label="Primary navigation">
        <Link href="/" onClick={closeMenu} aria-label="Leano Digital Group home"><BrandMark /></Link>
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => <Link key={link.label} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`text-sm transition hover:text-white ${pathname === link.href ? "text-white" : "text-slate-300"}`}>{link.label}</Link>)}
        </div>
        <div className="hidden md:block"><Link href="/contact" className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-medium transition hover:bg-blue-500">Contact Us</Link></div>
        <button ref={menuButtonRef} type="button" onClick={() => setIsOpen((open) => !open)} aria-expanded={isOpen} aria-controls="mobile-navigation" className="rounded-lg p-2 text-slate-200 transition hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-400 md:hidden">
          <span className="sr-only">{isOpen ? "Close navigation" : "Open navigation"}</span>
          {isOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
        {isOpen && <div id="mobile-navigation" className="mt-3 grid w-full gap-1 border-t border-white/10 pt-3 md:hidden">
          {links.map((link) => <Link key={link.label} href={link.href} onClick={closeMenu} aria-current={pathname === link.href ? "page" : undefined} className={`rounded-lg px-3 py-3 text-sm transition hover:bg-slate-900 ${pathname === link.href ? "bg-slate-900 text-white" : "text-slate-300"}`}>{link.label}</Link>)}
          <Link href="/contact" onClick={closeMenu} className="mt-2 rounded-lg bg-blue-600 px-3 py-3 text-center text-sm font-medium transition hover:bg-blue-500">Contact Us</Link>
        </div>}
      </nav>
    </header>
  );
}
