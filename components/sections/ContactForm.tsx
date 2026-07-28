"use client";

import { FormEvent, useState } from "react";

interface ContactFormProps {
  recipientEmail: string;
}

export default function ContactForm({ recipientEmail }: ContactFormProps) {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!recipientEmail) {
      setMessage("This form is being configured. Please use the contact details provided.");
      return;
    }

    const form = new FormData(event.currentTarget);
    const subject = `New enquiry from ${form.get("name")}`;
    const body = [
      `Name: ${form.get("name")}`,
      `Email: ${form.get("email")}`,
      `Company: ${form.get("company") || "Not provided"}`,
      `Service of interest: ${form.get("service")}`,
      "",
      "Project details:",
      form.get("message"),
    ].join("\n");

    window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMessage("Your email app should open with your enquiry ready to send.");
  }

  const fieldClassName =
    "mt-2 w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20";

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-200">
          Name
          <input className={fieldClassName} name="name" autoComplete="name" required />
        </label>
        <label className="text-sm font-medium text-slate-200">
          Work email
          <input className={fieldClassName} name="email" type="email" autoComplete="email" required />
        </label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-200">
          Company <span className="text-slate-500">(optional)</span>
          <input className={fieldClassName} name="company" autoComplete="organization" />
        </label>
        <label className="text-sm font-medium text-slate-200">
          I&apos;m interested in
          <select className={fieldClassName} name="service" defaultValue="AI Engineering">
            <option>AI Engineering</option><option>Cloud Transformation</option><option>Enterprise Software</option><option>Data &amp; Analytics</option><option>Something else</option>
          </select>
        </label>
      </div>
      <label className="text-sm font-medium text-slate-200">
        How can we help?
        <textarea className={fieldClassName} name="message" rows={5} required />
      </label>
      <button type="submit" className="inline-flex w-fit items-center justify-center rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900">
        Start the conversation
      </button>
      <p aria-live="polite" className="text-sm text-slate-400">{message}</p>
    </form>
  );
}
