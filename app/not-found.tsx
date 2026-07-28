import Link from "next/link";
import Container from "@/components/layout/Container";

export default function NotFound() {
  return <main className="flex min-h-[65vh] items-center py-24"><Container><div className="max-w-2xl"><p className="text-sm font-bold tracking-[0.22em] text-blue-300">404 · PAGE NOT FOUND</p><h1 className="mt-6 text-5xl font-bold tracking-tight text-white md:text-6xl">This signal went quiet.</h1><p className="mt-6 text-lg leading-8 text-slate-400">The page you&apos;re looking for is unavailable or has moved. Return to the home page to explore Leano Digital Group.</p><Link href="/" className="mt-10 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500">Return home</Link></div></Container></main>;
}
