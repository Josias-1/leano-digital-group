import { CalendarDays, Mail, Phone } from "lucide-react";
import Container from "@/components/layout/Container";
import { contactDetails } from "@/data/contact";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-slate-900 py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <span className="inline-flex rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">Let&apos;s talk</span>
            <h2 className="mt-8 text-4xl font-bold tracking-tight text-white md:text-5xl">Tell us what you&apos;re working on.</h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-400">Share a little about your challenge and we&apos;ll help you identify the right next step.</p>
            <p className="mt-6 text-sm font-medium text-blue-300">{contactDetails.responseTime}</p>
            <div className="mt-10 grid gap-4">
              {contactDetails.email && <a href={`mailto:${contactDetails.email}`} className="group flex items-center gap-4 rounded-2xl border border-slate-800 p-4 transition hover:border-blue-500 hover:bg-slate-900"><Mail className="h-5 w-5 text-blue-400" aria-hidden="true" /><span className="text-sm text-slate-300 group-hover:text-white">{contactDetails.email}</span></a>}
              {contactDetails.phone && <a href={`tel:${contactDetails.phone.replace(/\s/g, "")}`} className="group flex items-center gap-4 rounded-2xl border border-slate-800 p-4 transition hover:border-blue-500 hover:bg-slate-900"><Phone className="h-5 w-5 text-blue-400" aria-hidden="true" /><span className="text-sm text-slate-300 group-hover:text-white">{contactDetails.phone}</span></a>}
              {contactDetails.calendarUrl && <a href={contactDetails.calendarUrl} target="_blank" rel="noreferrer" className="group flex items-center gap-4 rounded-2xl border border-slate-800 p-4 transition hover:border-blue-500 hover:bg-slate-900"><CalendarDays className="h-5 w-5 text-blue-400" aria-hidden="true" /><span className="text-sm text-slate-300 group-hover:text-white">Book a discovery session</span></a>}
            </div>
          </div>
          <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-6 sm:p-8"><ContactForm recipientEmail={contactDetails.email} /></div>
        </div>
      </Container>
    </section>
  );
}
